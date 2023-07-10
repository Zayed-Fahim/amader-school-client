import React from "react";
import icon from "../../../Assets/dashboard-icon/dashboard.png";

const DashboardFooter = () => {
  return (
    <div className="container ml-auto flex items-center justify-center xl:gap-2 lg:gap-2 gap-1 xl:text-[18px] font-semibold text-black py-8 h-[100px]">
      <h1 className="xl:text-[18px] font-semibold text-black">
        Copyright © 2023 - All right reserved by
      </h1>
      <img className="h-[26px] mt-[6.5px]" src={icon} alt="amader-school" />
      <h1>Ltd.</h1>
    </div>
  );
};

export default DashboardFooter;
