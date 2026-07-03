import { createBrowserRouter, Navigate } from "react-router-dom";
import AdminLayout from "./page/AdminLayout";
import AdminLogin from "./page/AdminLogin";

import Dashboard from "./page/adminpage/Dashboard";
import LogisticsDock from "./page/adminpage/LogisticsDock";
import LogisticsControl from "./page/adminpage/LogisticsControl";
import LogisticsCS from "./page/adminpage/LogisticsCS";
import DeliveryDispatch from "./page/adminpage/DeliveryDispatch";
import DeliveryPickup from "./page/adminpage/DeliveryPickup";
import SystemHR from "./page/adminpage/SystemHR";
import SystemSettings from "./page/adminpage/SystemSettings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/admin/login" replace />,
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "logistics/dock", element: <LogisticsDock /> },
      { path: "logistics/control", element: <LogisticsControl /> },
      { path: "logistics/cs", element: <LogisticsCS /> },
      { path: "delivery/dispatch", element: <DeliveryDispatch /> },
      { path: "delivery/pickup", element: <DeliveryPickup /> },
      { path: "system/hr", element: <SystemHR /> },
      { path: "system/settings", element: <SystemSettings /> },
    ],
  },
]);
