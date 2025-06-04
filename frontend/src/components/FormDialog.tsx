import type { HousingSociety } from "@/types";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { CrudFrom } from "./CrudForm";
type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedRow?: HousingSociety;
};
export default function FormDialog({ open, setOpen, selectedRow }: Props) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Row Details</DialogTitle>
          <CrudFrom data={selectedRow} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
