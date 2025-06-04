import DataTable from '@/components/DataTable';
import NavBar from '@/components/NavBar';
import { usePostHS } from '@/hooks/useApiWithUser';
import type { FakeData } from '@/types';
import { useState } from 'react';
export default function MainLayout() {
  const [selectedRow, setSelectedRow] = useState<FakeData | undefined>();
  const [open, setOpen] = useState(false);
  const { mutate } = usePostHS();

  function handleFormSubmit(method: 'create' | 'update' | 'delete') {
    switch (method) {
      case 'create':
        mutate();
        break;
      case 'update':
        mutate();
        break;
      case 'delete':
        alert('delete not implemented');
    }
  }

  return (
    <div className="p-4 space-y-4">
      <NavBar />
      <DataTable
        handleFormSubmit={handleFormSubmit}
        selectedRow={selectedRow}
        setSelectedRow={setSelectedRow}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
}
