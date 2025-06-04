import React from 'react';
import { Button } from './ui/button';
import type { HsData } from '@/types';
import type { Table } from '@tanstack/react-table';

type Props = {
  setSelectedRow: React.Dispatch<React.SetStateAction<HsData | undefined>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  table: Table<HsData>;
};

export default function TableModifiers({
  setSelectedRow,
  setOpen,
  table,
}: Props) {
  return (
    <div className="space-x-4 space-y-4">
      <Button
        onClick={() => {
          setSelectedRow(undefined);
          setOpen(true);
        }}
      >
        Add Row
      </Button>
      <input
        value={table.getState().globalFilter}
        onChange={e => table.setGlobalFilter(String(e.target.value))}
        placeholder="Global filter Search..."
      />
    </div>
  );
}
