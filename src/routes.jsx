import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import EcommerceDashboard from "./Dashboard/EcommerceDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard></Dashboard>,
    children: [
      { path: "/", element: <EcommerceDashboard></EcommerceDashboard> },
    ],
  },
]);

export default router;
