import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function DashboardLayout() {
  return (
    <div className="container-fluid">
      <div className="row min-vh-100">

        <Sidebar />

        <Sidebar mobile />

        <main className="col-md-9 col-lg-10 p-4">
          <Navbar />

          <Outlet />
        </main>

      </div>
    </div>
  );
}

export default DashboardLayout;