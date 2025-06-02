import type { Note } from "@/types";
import { Button } from "./ui/button";
import { FormLabel } from "./ui/form";

import { Textarea } from "./ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
type Props = {
  notes: Note[];
};
export default function NotesAndComments({ notes }: Props) {
  const comments = notes.filter((n) => n.type === "comment");
  const complaint = notes.filter((n) => n.type === "complaint");
  const todo = notes.filter((n) => n.type === "todo");

  return (
    <div className="space-y-4">
      <FormLabel>Notes</FormLabel>

      <Tabs defaultValue="comments">
        <TabsList>
          <TabsTrigger value="comments">Comments</TabsTrigger>
          <TabsTrigger value="complaints">Complaints</TabsTrigger>
          <TabsTrigger value="todo">Todo</TabsTrigger>
        </TabsList>
        <div className="grid w-full gap-3">
          <Textarea placeholder="Type your message here." id="message" />
        </div>
        <TabsContent value="comments">
          <Button className="w-full" variant={"outline"}>
            Add Comment
          </Button>
          {comments.map((c) => (
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>{c.header}</AccordionTrigger>
                <AccordionContent>{c.note}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </TabsContent>

        <TabsContent value="complaints">
          <Button className="w-full" variant={"outline"}>
            Add Complaint
          </Button>
          {complaint.map((c) => (
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>{c.header}</AccordionTrigger>
                <AccordionContent>{c.note}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </TabsContent>

        <TabsContent value="todo">
          <Button className="w-full" variant={"outline"}>
            Add Todo
          </Button>
          {todo.map((t) => (
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>{t.header} </AccordionTrigger>
                <AccordionContent>{t.note}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
