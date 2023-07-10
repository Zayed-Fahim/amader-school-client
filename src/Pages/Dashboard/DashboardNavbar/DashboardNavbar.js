import React, { useState } from "react";
import DashboardTop from "./DashboardTop";
import DashboardSidebar from "./DashboardSidebar";

const DashboardNavbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="flex">
      <DashboardSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <DashboardTop isOpen={isOpen} />
    </div>
  );
};

export default DashboardNavbar;
