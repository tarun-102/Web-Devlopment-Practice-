import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Layout from "../components/Layout";
import ProtectedRoute from "../components/ProtectedRoutes";
import UILayout from "../components/UILayout";
import PublicRoute from "../components/PublicRoute";

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <PublicRoute />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
        ],
      },
    ],
  },

  
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <UILayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
]);

export default router;