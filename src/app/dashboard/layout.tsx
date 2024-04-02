import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import UserTable from "@/components/tables/UserTable";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <aside className="flex">
    <DashboardSidebar/>
    {children}
    <UserTable/>
   </aside>
  );
}
