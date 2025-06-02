import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Textarea } from "./ui/textarea";

export default function NotesAndComments() {
  return (
    <div className="flex justify-center">
      <Tabs defaultValue="notes" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="notes">Notes</TabsTrigger>
          <TabsTrigger value="comments">Comments</TabsTrigger>
        </TabsList>
        <Textarea />
        <Button>Save</Button>
        <TabsContent value="notes"></TabsContent>
        <TabsContent value="comments">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}
