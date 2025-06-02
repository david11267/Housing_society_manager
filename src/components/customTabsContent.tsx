import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "./ui/button";
import { TabsContent } from "./ui/tabs";
import type { Note } from "@/types";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

type Props = {
  notes: Note[];
  contentName: string;
};
export default function CustomTabsContent({ notes, contentName }: Props) {
  return (
    <TabsContent className="space-y-4" value={contentName}>
      <Button className="w-full cursor-pointer" variant={"outline"}>
        Add {contentName}
      </Button>
      <ScrollArea className="h-[25rem] w-full rounded-md border p-4">
        {notes.map((n) => (
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="cursor-pointer">
                {n.header} <Badge variant="outline">{n.lastUpdated.toLocaleDateString()}</Badge>
              </AccordionTrigger>
              <AccordionContent>{n.note}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </ScrollArea>
    </TabsContent>
  );
}
