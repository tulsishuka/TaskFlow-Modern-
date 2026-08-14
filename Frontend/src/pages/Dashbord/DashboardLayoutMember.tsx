import { Outlet } from "react-router-dom";
import Sidebar from "../../layouts/Sidebar";

const DashboardLayoutMember = () => {
  return (
    <div className="flex min-h-screen bg-[#f8f9ff]">
        <Sidebar/>
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayoutMember;