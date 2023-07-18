import React from "react";
import { FaPercent } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdNotificationsActive } from "react-icons/md";
import { BsCalendar2Event } from "react-icons/bs";
import { BiSolidReport } from "react-icons/bi";
import icon from "../../../../../Assets/dashboard-icon/dashboard.png";
import StudentNoticeBoard from "../StudentNoticeBoard/StudentNoticeBoard";

const Student = () => {
  return (
    <div className="relative 2xl:top-24 2xl:left-[360px] mb-[120px]">
      <div className="text-[17px] font-semibold breadcrumbs mb-8">
        <ul>
          <li className="hover:text-[#FFBE15] ">
            <Link to={`/dashboard/student`}>Dashboard</Link>
          </li>
          <li className="text-[#FFBE15]">Student</li>
        </ul>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col xl:gap-5">
          <Link
            to="/dashboard/student/events"
            className="xl:h-[320px] xl:w-[320px] flex flex-col items-center px-4 justify-evenly bg-white rounded-md hover:bg-[#FFBE15] hover:bg-opacity-80 hover:text-white hover:font-bold"
          >
            <BsCalendar2Event className="h-[80px] w-[80px]" />
            <div>
              <h1 className="2xl:grid 2xl:place-items-end 2xl:text-[20px] font-semibold">
                Events
              </h1>
              <h1 className="xl:text-2xl xl:font-semibold text-center">2</h1>
            </div>
          </Link>
          <Link
            to="/dashboard/student/result"
            className="xl:h-[320px] xl:w-[320px] flex flex-col items-center px-4 justify-evenly bg-white rounded-md hover:bg-[#FFBE15] hover:bg-opacity-80 hover:text-white hover:font-bold"
          >
            <BiSolidReport className="h-[80px] w-[80px]" />
            <div>
              <h1 className="2xl:grid 2xl:place-items-end 2xl:text-[20px] font-semibold">
                Results
              </h1>
            </div>
          </Link>
        </div>
        <div className="flex flex-col xl:gap-5">
          <Link
            to="/dashboard/student/attendance"
            className="xl:h-[320px] xl:w-[320px] rounded-md flex flex-col items-center px-4 justify-evenly bg-white -md-md hover:bg-[#FFBE15] hover:bg-opacity-80 hover:text-white hover:font-bold"
          >
            <FaPercent className="h-[60px] w-[60px]" />
            <div>
              <h1 className="2xl:grid 2xl:place-items-end 2xl:text-[20px] font-semibold">
                Attendance
              </h1>
              <h1 className="xl:text-2xl xl:font-semibold text-center">57%</h1>
            </div>
          </Link>
        </div>
        <div>
          <div className="xl:h-[660px] xl:w-[835px] bg-white rounded px-8 py-8">
            <h1 className="font-bold text-2xl pb-5">Notice Board</h1>
            <StudentNoticeBoard />
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
