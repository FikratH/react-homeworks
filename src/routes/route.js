import React from "react";
import Home from "../pages/Site/Home/Home";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import Coins from "../pages/Admin/Coins/Coins";
import SiteRoot from "../pages/Site/SiteRoot/SiteRoot";
import AdminRoot from "../pages/Admin/AdminRoot/AdminRoot";

export const ROUTES = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "coins",
        element: <Coins />,
      },
    ],
  },
];
