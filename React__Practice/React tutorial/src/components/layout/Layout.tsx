import { Outlet } from "react-router-dom";
import Header from "../Header";

const Layout = () => {
  return (
    <div className="container-fluid bg-black text-white min-vh-100 p-0">
      <div className="sticky-top bg-black shadow">
        <Header />
      </div>
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;