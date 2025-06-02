"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import NotesAndComments from "./notesAndComments";

export const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  address: z.string().min(5, { message: "Address must be at least 5 characters." }),
  builtYear: z.date(),
  nrOfApartments: z.number().int().min(1, { message: "Must have at least 1 apartment." }),
  lastNotesDrop: z.date({
    required_error: "Last notes drop date is required.",
  }),
  lastUpdated: z.date({ required_error: "Last updated date is required." }),
  registeredPhoneNumbers: z.number().int().min(0, { message: "Must be zero or more registered phone numbers." }),
  portCode: z.object({
    code: z.string().regex(/^\d{4}$/, { message: "Port code must be a 4-digit number." }),
    status: z.enum(["active", "inactive"], {
      required_error: "Status must be 'active' or 'inactive'.",
    }),
    accessibility: z.enum(["yes", "no"], {
      required_error: "Accessibility must be 'yes' or 'no'.",
    }),
    lastUpdate: z.date({
      required_error: "Port code last update is required.",
    }),
  }),
});

export function CrudFrom() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      portCode: {
        code: "",
        status: "active",
        accessibility: "yes",
        lastUpdate: new Date(),
      },
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  // Converts a Date to "YYYY-MM-DDTHH:MM" format
  function toDateTimeLocalString(date: Date): string {
    const pad = (n: number) => n.toString().padStart(2, "0");
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(
      date.getMinutes()
    )}`;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 grid grid-cols-2 gap-4">
        <div>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Housing society name</FormLabel>
                <FormControl>
                  <Input placeholder="ex: BRF lyran" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="ex: salt street 53 stockholm" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="builtYear"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Built</FormLabel>
                <FormControl>
                  <Input
                    type="datetime-local"
                    value={field.value ? toDateTimeLocalString(field.value) : ""}
                    onChange={(e) => field.onChange(e.target.value ? new Date(e.target.value) : null)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nrOfApartments"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Apartments amount</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="ex: 43" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastNotesDrop"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last note drop date</FormLabel>
                <FormControl>
                  <Input type="datetime-local" value={field.value ? toDateTimeLocalString(field.value) : ""} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="portCode.code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Code</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="portCode.status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <Select onValueChange={field.onChange} value="" defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select port status" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="ok">OK</SelectItem>
                    <SelectItem value="broken">Broken</SelectItem>
                    <SelectItem value="wrong code">Wrong Code</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="portCode.accessibility"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <Select onValueChange={field.onChange} value="" defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select accessibility" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="stairs">Stairs</SelectItem>
                    <SelectItem value="elevator">Elevator</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <span>Last update: </span>
        </div>
        <NotesAndComments />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
