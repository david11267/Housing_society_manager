import DataTable from '@/components/DataTable';
import NavBar from '@/components/NavBar';
import { useGetHS } from '@/hooks/useApiWithUser';
import type { HsData } from '@/types';
import { useState } from 'react';
export default function MainLayout() {
  const [selectedRow, setSelectedRow] = useState<HsData | undefined>();
  const [open, setOpen] = useState(false);
  const { data, error, isLoading } = useGetHS();

  if (error) return <h1> error</h1>;
  if (isLoading) return <h1>loading</h1>;

  return (
    <div className="p-4 space-y-4">
      <NavBar />
      {data ? (
        <DataTable
          data={data}
          selectedRow={selectedRow}
          setSelectedRow={setSelectedRow}
          open={open}
          setOpen={setOpen}
        />
      ) : (
        <h1>no data</h1>
      )}
    </div>
  );
}
