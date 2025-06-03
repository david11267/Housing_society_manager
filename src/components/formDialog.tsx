import type { FakeData } from "@/types";
import { CrudFrom } from "./crudForm";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedRow: FakeData | null;
};
export default function FormDialog({ open, setOpen, selectedRow }: Props) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Row Details</DialogTitle>
          {selectedRow && <CrudFrom formType="update" data={selectedRow} />}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
