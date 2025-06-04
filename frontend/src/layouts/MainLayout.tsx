import DataTable from '@/components/DataTable';
import NavBar from '@/components/NavBar';
import type { FakeData } from '@/types';
import { useState } from 'react';
export default function MainLayout() {
  const [selectedRow, setSelectedRow] = useState<FakeData | undefined>();
  const [open, setOpen] = useState(false);

  return (
    <div className="p-4 space-y-4">
      <NavBar />
      <DataTable
        selectedRow={selectedRow}
        setSelectedRow={setSelectedRow}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
}
