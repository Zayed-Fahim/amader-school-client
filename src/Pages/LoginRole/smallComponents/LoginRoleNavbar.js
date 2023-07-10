import React from "react";
import logo from "../../../Assets/dashboard-icon/dashboard.png";
import { Link } from "react-router-dom";

const LoginRoleNavbar = () => {
  return (
    <div className="py-8 h-[97px] border-b border-solid border-[#DFDFDF] px-[200px]">
      <Link to="/">
        <img className="h-[36px] w-[240px]" src={logo} alt="website-home" />
      </Link>
    </div>
  );
};

export default LoginRoleNavbar;
