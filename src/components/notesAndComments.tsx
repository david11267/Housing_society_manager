import { Button } from "./ui/button";

import { Textarea } from "./ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function NotesAndComments() {
  return (
    <div className="space-y-4">
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
        </TabsContent>
        <TabsContent value="complaints">
          <Button className="w-full" variant={"outline"}>
            Add Complaint
          </Button>
        </TabsContent>
        <TabsContent value="todo">
          <Button className="w-full" variant={"outline"}>
            Add Todo
          </Button>
        </TabsContent>
      </Tabs>
    </div>
  );
}
