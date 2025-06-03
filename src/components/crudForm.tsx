"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import type { FakeData } from "@/types";
import NotesAndComments from "@/components/NotesAndComments";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  address: z.string().min(5, { message: "Address must be at least 5 characters." }),
  builtYear: z.number({ message: "year must be a four digit number" }).positive().min(1000).max(2100),
  nrOfApartments: z.number().int().min(1, { message: "Must have at least 1 apartment." }),
  lastNotesDrop: z.date({
    required_error: "Last notes drop date is required.",
  }),
  lastUpdated: z.date({ required_error: "Last updated date is required." }),
  registeredPhoneNumbers: z.number().int().min(0, { message: "Must be zero or more registered phone numbers." }),
  portCode: z.object({
    code: z.string(),
    status: z.enum(["working", "broken", "changed", "other"], {
      required_error: "Status must be 'active' or 'inactive'.",
    }),
    accessibility: z.enum(["easy", "medium", "hard"], {
      required_error: "Accessibility must be 'yes' or 'no'.",
    }),
    lastUpdate: z.date({
      required_error: "Port code last update is required.",
    }),
  }),
});

type Props = {
  data?: FakeData;
};

export function CrudFrom({ data }: Props) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: data
      ? {
          name: data.name,
          address: data.address,
          builtYear: data.builtYear,
          nrOfApartments: data.nrOfApartments,
          lastNotesDrop: data.lastNotesDrop ? new Date(data.lastNotesDrop) : new Date(),
          lastUpdated: data.lastUpdated ? new Date(data.lastUpdated) : new Date(),
          registeredPhoneNumbers: data.registeredPhoneNumbers,
          portCode: {
            code: data.portCode.code,
            status: data.portCode.status,
            accessibility: data.portCode.accessibility,
            lastUpdate: data.portCode.lastUpdate ? new Date(data.portCode.lastUpdate) : new Date(),
          },
        }
      : {
          name: "",
          address: "",
          builtYear: 2000,
          nrOfApartments: 1,
          lastNotesDrop: new Date(),
          lastUpdated: new Date(),
          registeredPhoneNumbers: 0,
          portCode: {
            code: "",
            status: "working",
            accessibility: "easy",
            lastUpdate: new Date(),
          },
        },
  });
  // Converts a Date to "YYYY-MM-DDTHH:MM" format
  function toDateLocalString(date: Date): string {
    const pad = (n: number) => n.toString().padStart(2, "0");
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  }
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
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
                <FormLabel>Built year</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="ex: 1990"
                    value={field.value ?? ""}
                    onChange={(e) => field.onChange(e.target.value ? Number(e.target.value) : "")}
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
                  <Input
                    type="number"
                    placeholder="ex: 43"
                    value={field.value ?? ""}
                    onChange={(e) => field.onChange(e.target.value ? Number(e.target.value) : "")}
                  />
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
                  <Input
                    type="date"
                    value={field.value ? toDateLocalString(field.value) : ""}
                    onChange={(e) => field.onChange(e.target.value ? new Date(e.target.value) : null)}
                  />
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
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select port status" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="working">Working</SelectItem>
                    <SelectItem value="broken">Broken</SelectItem>
                    <SelectItem value="changed">Changed</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
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
                <FormLabel>Accessibility</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select accessibility" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="easy">Easy</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="hard">Hard</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <span>Last update: </span>
        </div>
        <NotesAndComments notes={data?.notes} />
        {data ? (
          <>
            <Button type="submit">Update</Button>
            <Button variant={"destructive"} type="submit">
              Delete
            </Button>
          </>
        ) : (
          <Button type="submit">Submit</Button>
        )}
      </form>
    </Form>
  );
}
