import React from "react";
import { Button } from "./ui/button";
import type { HousingSociety } from "@/types";
import type { Table } from "@tanstack/react-table";

type Props = {
  setSelectedRow: React.Dispatch<React.SetStateAction<HousingSociety | undefined>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  table: Table<HousingSociety>;
};

export default function TableModifiers({ setSelectedRow, setOpen, table }: Props) {
  return (
    <div className="space-x-4 space-y-4">
      <Button
        onClick={() => {
          setSelectedRow(undefined);
          setOpen(true);
        }}>
        Add Row
      </Button>
      <input
        value={table.getState().globalFilter}
        onChange={(e) => table.setGlobalFilter(String(e.target.value))}
        placeholder="Global filter Search..."
      />
    </div>
  );
}
