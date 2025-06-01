import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import type { FakeData } from "@/types";
import { CrudFrom } from "./crudForm";
import { Button } from "./ui/button";

type Props = {
  data: FakeData;
  btnText: string;
};

export default function CrudDialog({ data, btnText }: Props) {
  return (
    <Dialog>
      <Button >
        <DialogTrigger className="cursor-pointer">{btnText}</DialogTrigger>
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add new Data Row</DialogTitle>
          <CrudFrom />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
