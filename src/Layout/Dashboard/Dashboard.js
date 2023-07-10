import React from "react";
import DashboardNavbar from "../../Pages/Dashboard/DashboardNavbar/DashboardNavbar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="overflow-x-hidden overflow-y-hidden bg-black bg-opacity-5 min-h-screen">
      <DashboardNavbar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
