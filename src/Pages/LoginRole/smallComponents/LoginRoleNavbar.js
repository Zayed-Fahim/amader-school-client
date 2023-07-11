import React from "react";
import logo from "../../../Assets/dashboard-icon/dashboard.png";
import { Link } from "react-router-dom";

const LoginRoleNavbar = () => {
  return (
    <div className="xl:py-6 md:py-5 sticky bg-white top-0 z-[100] 2xl:py-8 py-4 px-5 md:px-10 h-[60px] md:h-[70px] xl:h-[70px] 2xl:h-[97px] border-b border-solid border-[#DFDFDF] xl:px-[100px] 2xl:px-[200px]">
      <Link to="/">
        <img className="h-[36px] w-[240px]" src={logo} alt="website-home" />
      </Link>
    </div>
  );
};

export default LoginRoleNavbar;
