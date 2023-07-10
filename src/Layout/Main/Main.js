import React from "react";
import { Outlet } from "react-router-dom";
import WebsiteFooter from "../../Pages/Website/Components/WebsiteFooter";
import WebsiteNavbar from "../../Pages/Website/Components/WebsiteNavbar";

const Main = () => {
  return (
    <div className="bg-[#1D232A] text-white">
      <WebsiteNavbar />
      <Outlet />
      <WebsiteFooter />
    </div>
  );
};

export default Main;
