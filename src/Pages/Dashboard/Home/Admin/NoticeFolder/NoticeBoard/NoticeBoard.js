import React from "react";
import AddNotice from "../AddNotice/AddNotice";
import icon from "../../../../../../Assets/dashboard-icon/dashboard.png";
import { Link } from "react-router-dom";
import ViewNotice from "../ViewNotice/ViewNotice";

const NoticeBoard = () => {
  return (
    <div className="overflow-y-hidden overflow-x-hidden relative 2xl:left-[360px] top-24 2xl:w-[79.3%]">
      <div className="text-[17px] font-semibold breadcrumbs mb-8">
        <ul>
          <li className="hover:text-[#FFBE15]">
            <Link to="/dashboard/admin">Dashboard</Link>
          </li>
          <li>Notice Board</li>
        </ul>
      </div>
      <div className="flex 2xl:gap-5 ">
        <AddNotice />
        <div className="flex flex-col bg-white px-8 rounded-lg h-[80vh] w-[900px]">
          <h1 className="text-2xl font-bold px-8 py-10">Notice Board</h1>
          <ViewNotice />
        </div>
      </div>
      <div className="container flex items-center justify-center xl:gap-2 lg:gap-2 gap-1 xl:text-[18px] font-semibold text-black h-[100px] mb-24">
        <h1 className="xl:text-[18px] font-semibold text-black">
          Copyright © 2023 - All right reserved by
        </h1>
        <img className="h-[26px] mt-[6.5px]" src={icon} alt="amader-school" />
        <h1>Ltd.</h1>
      </div>
    </div>
  );
};

export default NoticeBoard;
