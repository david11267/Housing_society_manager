import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { data, type FakeData } from "@/types";
import { Button } from "./ui/button";
import FormDialog from "./FormDialog";

const columnHelper = createColumnHelper<FakeData>();

const columns = [
  columnHelper.accessor("name", {
    header: "Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("address", {
    header: "Address",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("builtYear", {
    header: "Built",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("nrOfApartments", {
    header: "Apartments",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("lastNotesDrop", {
    header: "Last Notes Drop",
    cell: (info) => info.getValue().toLocaleString(),
  }),
  columnHelper.accessor("lastUpdated", {
    header: "Last Updated",
    cell: (info) => info.getValue().toLocaleString(),
  }),
  columnHelper.accessor("registeredPhoneNumbers", {
    header: "Phones",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => row.portCode.code, {
    id: "portCode.code",
    header: "Port Code",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => row.portCode.status, {
    id: "portCode.status",
    header: "Port Status",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => row.portCode.accessibility, {
    id: "portCode.accessibility",
    header: "Accessibility",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => row.notes.length, {
    id: "notes",
    header: "Notes",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => row.portCode.lastUpdate, {
    id: "portCode.lastUpdate",
    header: "Port Updated",
    cell: (info) => info.getValue().toLocaleString(),
  }),
];

export default function DataTable() {
  const [open, setOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState<FakeData | undefined>();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: "includesString",
  });

  return (
    <div className="max-h-[50rem] overflow-y-auto">
      <FormDialog open={open} selectedRow={selectedRow} setOpen={setOpen} />

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

      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((hg) => (
            <TableRow key={hg.id}>
              {hg.headers.map((h) => (
                <TableHead key={h.id} className="sticky top-0 z-10 bg-accent">
                  {flexRender(h.column.columnDef.header, h.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow
              className="cursor-pointer"
              key={row.id}
              onClick={() => {
                setSelectedRow(row.original);
                setOpen(true);
              }}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
