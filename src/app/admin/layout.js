import Sidebar from "./components/SideBar";


export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-100">{children}</main>
    </div>
  );
}
