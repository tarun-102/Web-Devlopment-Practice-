import { createBrowserRouter } from "react-router-dom";

import DashboardLayout from "../components/DashboardLayout";
import ProtectedRoute from "../components/ProtectedRoute";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Projects from "../pages/Projects";
import Tasks from "../pages/Tasks";
import Team from "../pages/Team";
import Settings from "../pages/Settings";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },

  {
    element: <ProtectedRoute />,

    children: [
      {
        path: "/",
        element: <DashboardLayout />,
        children: [
          { 
            index: true,
            element: <Dashboard />,
          },

          {
            path: "projects",
            element: <Projects />,
          },

          {
            path: "tasks",
            element: <Tasks />,
          },

          {
            path: "team",
            element: <Team />,
          },

          {
            path: "settings",
            element: <Settings />,
          },

          {
            path: "*",
            element: <NotFound />,
          },
        ],
      },
    ],
  },
]);

export default router;