"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import type { HousingSociety } from "@/types";
import React from "react";
import { usePostHS } from "@/hooks/useApiWithUser";

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
  port: z.object({
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
  notes: z.array(
    z.object({
      uuid: z.string(),
      type: z.string(),
      header: z.string(),
      note: z.string(),
      lastUpdated: z.date().optional(),
      dueDateTime: z.date().nullable(),
    })
  ),
});

type Props = {
  data?: HousingSociety;
};

export function CrudFrom({ data }: Props) {
  const { mutate } = usePostHS();

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
          port: {
            code: data.port.code,
            status: data.port.status,
            accessibility: data.port.accessibility,
            lastUpdate: data.port.lastUpdate ? new Date(data.port.lastUpdate) : new Date(),
          },
          notes:
            data.notes?.map((n) => ({
              uuid: n.uuid,
              type: (["comment", "complaint", "todo"].includes(n.type) ? n.type : "comment") as
                | "comment"
                | "complaint"
                | "todo",
              header: n.header,
              note: n.note,
              lastUpdated: n.lastUpdated ? new Date(n.lastUpdated) : undefined,
              dueDateTime: n.dueDateTime ? new Date(n.dueDateTime) : null,
            })) ?? [],
        }
      : {
          name: "",
          address: "",
          builtYear: 2000,
          nrOfApartments: 1,
          lastNotesDrop: new Date(),
          lastUpdated: new Date(),
          registeredPhoneNumbers: 0,
          port: {
            code: "",
            status: "working",
            accessibility: "easy",
            lastUpdate: new Date(),
          },
          notes: [],
        },
  });
  function toDateLocalString(date: Date): string {
    const pad = (n: number) => n.toString().padStart(2, "0");
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (action === "update") {
      // handle update
    } else if (action === "delete") {
      // handle delete
    } else {
      mutate(values as HousingSociety);
    }
  }

  const [action, setAction] = React.useState<"submit" | "update" | "delete">("submit");

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4">
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
            name="registeredPhoneNumbers"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Registered Phone Numbers</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
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
            name="lastUpdated"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Updated</FormLabel>
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
            name="port.code"
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
            name="port.status"
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
            name="port.accessibility"
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
          <FormField
            control={form.control}
            name="port.lastUpdate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Port Last Update</FormLabel>
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
          <span>Last update: </span>
        </div>

        {data ? (
          <>
            <Button type="submit" onClick={() => setAction("update")}>
              Update
            </Button>
            <Button type="submit" variant="destructive" onClick={() => setAction("delete")}>
              Delete
            </Button>
          </>
        ) : (
          <Button type="submit" onClick={() => setAction("submit")}>
            Submit
          </Button>
        )}
      </form>
    </Form>
  );
}
