import React from "react";
import TeacherAttendanceViewTable from "./TeacherAttendanceViewTable";
import { Link } from "react-router-dom";
import icon from "../../../../../../Assets/dashboard-icon/dashboard.png";

const TeacherAttendanceView = () => {
  return (
    <div className="2xl:w-[79.3%] relative top-24 2xl:left-[360px]">
      <div className="text-[17px] font-semibold breadcrumbs mb-8">
        <ul>
          <li className="hover:text-[#FFBE15] ">
            <Link to={`/dashboard/admin`}>Dashboard</Link>
          </li>
          <li>Attendance</li>
          <li className="text-[#FFBE15]">Teacher Attendance Table</li>
        </ul>
      </div>
      <div className="bg-white px-8 py-10">
        <h1 className="text-2xl font-bold mb-8">Teacher Attendance View</h1>
        <TeacherAttendanceViewTable />
      </div>
      <div className="container flex items-center justify-center xl:gap-2 lg:gap-2 gap-1 xl:text-[18px] font-semibold text-black h-[100px]">
        <h1 className="xl:text-[18px] font-semibold text-black">
          © 2023 - All rights reserved by
        </h1>
        <img className="h-[26px] mt-[6.5px]" src={icon} alt="amader-school" />
        <h1>Ltd.</h1>
      </div>
    </div>
  );
};

export default TeacherAttendanceView;
