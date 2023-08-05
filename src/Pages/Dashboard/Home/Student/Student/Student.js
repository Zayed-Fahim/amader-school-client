import React from "react";
import { Link } from "react-router-dom";
import { BsCalendar2Event } from "react-icons/bs";
import { BiSolidReport } from "react-icons/bi";
import { GrSchedule } from "react-icons/gr";
import icon from "../../../../../Assets/dashboard-icon/dashboard.png";
import StudentNoticeBoard from "../StudentNoticeBoard/StudentNoticeBoard";
import AttendanceChart from "../AttendanceFolder/MyAttendance/AttendanceChart";

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
            className="xl:h-[340px] xl:w-[350px] flex flex-col items-center px-4 justify-evenly bg-white rounded-md hover:bg-[#FFBE15] hover:bg-opacity-80"
          >
            <BsCalendar2Event className="h-[80px] w-[80px]" />
            <div>
              <h1 className="2xl:grid 2xl:place-items-end 2xl:text-[22px] font-bold">
                Events
              </h1>
            </div>
          </Link>
          <Link
            to="/dashboard/student/result"
            className="xl:h-[340px] xl:w-[350px] flex flex-col items-center px-4 justify-evenly bg-white rounded-md hover:bg-[#FFBE15] hover:bg-opacity-80"
          >
            <BiSolidReport className="h-[100px] w-[100px]" />
            <div>
              <h1 className="2xl:grid 2xl:place-items-end 2xl:text-[22px] font-bold">
                Results
              </h1>
            </div>
          </Link>
        </div>
        <div className="flex flex-col xl:gap-5">
          <div className="xl:h-[340px] xl:w-[350px] rounded-md bg-white">
            <h1 className="xl:font-bold xl:text-xl px-8 pt-8">
              Attendance Ratio:
            </h1>
            <AttendanceChart />
            <div className="px-8 mt-4 flex justify-between">
              <div>
                <div className="h-[6px] w-[70px] bg-[#36D399] rounded-xl 2xl:mb-2"></div>
                <div>
                  <h1 className="text-center font-semibold">Present</h1>
                </div>
              </div>
              <div className="divider lg:divider-horizontal xl:divider-horizontal"></div>
              <div>
                <div className="h-[6px] w-[70px] bg-[#EF6262] rounded-xl 2xl:mb-2"></div>
                <div>
                  <h1 className="text-center font-semibold">Absent</h1>
                </div>
              </div>
            </div>
          </div>
          <Link
            to="/dashboard/student/class-routine"
            className="xl:h-[340px] xl:w-[350px] flex flex-col items-center px-4 justify-evenly bg-white rounded-md hover:bg-[#FFBE15] hover:bg-opacity-80"
          >
            <GrSchedule className="h-[80px] w-[80px]" />
            <div>
              <h1 className="2xl:grid 2xl:place-items-end 2xl:text-[22px] font-bold">
                Routine
              </h1>
            </div>
          </Link>
        </div>
        <div>
          <div className="xl:h-[698px] xl:w-[790px] bg-white rounded px-8 py-8">
            <h1 className="font-bold text-2xl pb-5">Notice Board</h1>
            <StudentNoticeBoard />
          </div>
        </div>
      </div>
      <div className="container flex items-center justify-center xl:gap-2 lg:gap-2 gap-1 xl:text-[18px] font-semibold text-black mt-9">
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
