"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  address: z.string().min(5, { message: "Address must be at least 5 characters." }),
  builtYear: z.string().regex(/^(19|20)\d{2}$/, { message: "Built year must be a valid year (e.g., 1990, 2020)." }),
  nrOfApartments: z.number().int().min(1, { message: "Must have at least 1 apartment." }),
  lastNotesDrop: z.date({ required_error: "Last notes drop date is required." }),
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
    lastUpdate: z.date({ required_error: "Port code last update is required." }),
  }),
});

export function CrudFrom() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Housing society name</FormLabel>
              <FormControl>
                <Input placeholder="ex: BRF lyran" {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
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
              <FormDescription>Brf address.</FormDescription>
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
                <Input type="year" placeholder="ex: 1999" {...field} />
              </FormControl>
              <FormDescription>Year it was built</FormDescription>
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
              <FormDescription>How many apartments do they hold</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
