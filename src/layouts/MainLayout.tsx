import DataTable from "@/components/DataTable";
import NavBar from "@/components/navBar";

export default function MainLayout() {
  return (
    <div className="p-4 space-y-4">
      <NavBar />
      <DataTable />
    </div>
  );
}
