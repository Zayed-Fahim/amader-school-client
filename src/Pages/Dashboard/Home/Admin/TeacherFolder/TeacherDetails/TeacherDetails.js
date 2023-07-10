import React from "react";
import TeacherDetailsCard from "../Components/TeacherDetailsCard";
import TeacherInformationShortTable from "../Components/TeacherInformationShortTable";
import { Link } from "react-router-dom";
import icon from "../../../../../../Assets/dashboard-icon/dashboard.png";

const TeacherDetails = () => {
  return (
    <div className="overflow-x-hidden overflow-y-hidden relative xl:top-24 xl:left-[320px] z-[1] w-[81.5%]">
      <div className="text-[17px] font-semibold breadcrumbs mb-8">
        <ul>
          <li className="hover:text-[#FFBE15]">
            <Link to="/dashboard/admin">Dashboard</Link>
          </li>
          <li>Teachers</li>
          <li>Teacher Information</li>
        </ul>
      </div>
      <div className="flex gap-5 h-[880px]">
        <div className="bg-white w-[750px]">
          <TeacherDetailsCard />
        </div>
        <div className="w-[795px] bg-white flex flex-col">
          <h1 className="font-bold text-2xl px-5 py-8">All Teachers</h1>
          <TeacherInformationShortTable />
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

export default TeacherDetails;