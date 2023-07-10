import React from "react";
import { FaPercent } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdNotificationsActive } from "react-icons/md";
import { BsCalendar2Event } from "react-icons/bs";
import { BiSolidReport } from "react-icons/bi";
import AdminNoticeBoard from "../../Components/AdminNoticeBoard";
import icon from "../../../../../Assets/dashboard-icon/dashboard.png";

const Student = () => {
  return (
    <div className="relative xl:top-24 xl:left-[320px] mb-[120px]">
      <div className="text-[17px] font-semibold breadcrumbs mb-8">
        <ul>
          <li className="hover:text-[#FFBE15] ">
            <Link to={`/dashboard/student`}>Dashboard</Link>
          </li>
          <li>Student</li>
          
        </ul>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col xl:gap-5">
          <Link
            to="/dashboard/admin/students/student-information"
            className="xl:h-[320px] xl:w-[320px] flex flex-col items-center px-4 justify-evenly bg-white -md-md hover:bg-[#FFBE15] hover:bg-opacity-80 hover:text-white hover:font-bold"
          >
            <MdNotificationsActive className="h-[80px] w-[80px]" />
            <div>
              <h1 className="xl:grid xl:place-items-end xl:text-[18px] font-semibold">
                Notifications
              </h1>
              <h1 className="xl:text-2xl xl:font-semibold text-center">15</h1>
            </div>
          </Link>
          <Link
            to="/dashboard/admin/teachers/teacher-information"
            className="xl:h-[320px] xl:w-[320px] flex flex-col items-center px-4 justify-evenly bg-white rounded-md hover:bg-[#FFBE15] hover:bg-opacity-80 hover:text-white hover:font-bold"
          >
            <BsCalendar2Event className="h-[80px] w-[80px]" />
            <div>
              <h1 className="xl:grid xl:place-items-end xl:text-[18px] font-semibold">
                Events
              </h1>
              <h1 className="xl:text-2xl xl:font-semibold text-center">2</h1>
            </div>
          </Link>
        </div>

        <div className="flex flex-col xl:gap-5">
          <Link
            to="/dashboard/admin/students/student-information"
            className="xl:h-[320px] xl:w-[320px] flex flex-col items-center px-4 justify-evenly bg-white -md-md hover:bg-[#FFBE15] hover:bg-opacity-80 hover:text-white hover:font-bold"
          >
            <FaPercent className="h-[60px] w-[60px]" />
            <div>
              <h1 className="xl:grid xl:place-items-end xl:text-[18px] font-semibold">
                Attendance
              </h1>
              <h1 className="xl:text-2xl xl:font-semibold text-center">57%</h1>
            </div>
          </Link>
          <Link
            to="/dashboard/admin/teachers/teacher-information"
            className="xl:h-[320px] xl:w-[320px] flex flex-col items-center px-4 justify-evenly bg-white rounded-md hover:bg-[#FFBE15] hover:bg-opacity-80 hover:text-white hover:font-bold"
          >
            <BiSolidReport className="h-[80px] w-[80px]" />
            <div>
              <h1>Results</h1>
            </div>
          </Link>
        </div>
        <div>
          <div className="xl:h-[660px] xl:w-[885px] bg-white rounded px-8 py-8">
            <h1 className="font-bold text-2xl pb-5">Notice Board</h1>
            <AdminNoticeBoard />
          </div>
        </div>
      </div>
      <div className="container flex items-center justify-center xl:gap-2 lg:gap-2 gap-1 xl:text-[18px] font-semibold text-black h-[100px] mt-8">
        <h1 className="xl:text-[18px] font-semibold text-black">
          Copyright © 2023 - All right reserved by
        </h1>
        <img className="h-[26px] mt-[6.5px]" src={icon} alt="amader-school" />
        <h1>Ltd.</h1>
      </div>
    </div>
  );
};

export default Student;
