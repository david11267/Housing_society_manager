import type { Note } from "@/types";
import { FormLabel } from "./ui/form";

import { Textarea } from "./ui/textarea";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CustomTabsContent from "./customTabsContent";
type Props = {
  notes: Note[];
};
export default function NotesAndComments({ notes }: Props) {
  const comments = notes.filter((n) => n.type === "comment");
  const complaints = notes.filter((n) => n.type === "complaint");
  const todo = notes.filter((n) => n.type === "todo");

  return (
    <div className="space-y-4">
      <FormLabel>Notes</FormLabel>

      <Tabs defaultValue="comment">
        <TabsList className="w-full ">
          <TabsTrigger className="cursor-pointer p-1" value="comment">
            Comments
          </TabsTrigger>
          <TabsTrigger className="cursor-pointer p-1" value="complaint">
            Complaints
          </TabsTrigger>
          <TabsTrigger className="cursor-pointer p-1" value="todo">
            Todo
          </TabsTrigger>
        </TabsList>
        <div className="grid w-full gap-3">
          <Textarea placeholder="First row is header the rest is content" id="message" />
        </div>
        <CustomTabsContent contentName="comment" notes={comments} />
        <CustomTabsContent contentName="todo" notes={todo} />
        <CustomTabsContent contentName="complaint" notes={complaints} />
      </Tabs>
    </div>
  );
}
