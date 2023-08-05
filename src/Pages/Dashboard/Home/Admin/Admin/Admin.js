import React from "react";
import { PiChalkboardTeacher, PiStudent } from "react-icons/pi";
import { Link } from "react-router-dom";
import icon from "../../../../../Assets/dashboard-icon/dashboard.png";
import AdminStudentsChart from "../../Components/AdminStudentsChart";
import AdminNoticeBoard from "../../Components/AdminNoticeBoard";
import AdminTeachersChart from "../../Components/AdminTeachersChart";

const Admin = () => {
  return (
    <div className="relative 2xl:top-24 2xl:left-[360px]">
      <div className="text-[17px] font-semibold breadcrumbs mb-8">
        <ul>
          <li className="hover:text-[#FFBE15] ">
            <Link to={`/dashboard/admin`}>Dashboard</Link>
          </li>
          <li className="text-[#FFBE15]">Admin</li>
        </ul>
      </div>

      <div className="flex gap-5">
        <div className="flex flex-col xl:gap-5">
          <Link
            to="/dashboard/admin/students/student-information"
            className="xl:h-[340px] xl:w-[350px] flex flex-col items-center px-4 justify-evenly bg-white rounded-md hover:bg-[#FFBE15] hover:bg-opacity-80"
          >
            <PiStudent className="h-[100px] w-[100px]" />
            <div>
              <h1 className="2xl:grid 2xl:place-items-end 2xl:text-[22px] font-bold">
                Students
              </h1>
            </div>
          </Link>
          <Link
            to="/dashboard/admin/teachers/teacher-information"
            className="xl:h-[340px] xl:w-[350px] flex flex-col items-center px-4 justify-evenly bg-white rounded-md hover:bg-[#FFBE15] hover:bg-opacity-80"
          >
            <PiChalkboardTeacher className="h-[100px] w-[100px]" />
            <div>
              <h1 className="2xl:grid 2xl:place-items-end 2xl:text-[22px] font-bold">
                Teachers
              </h1>
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-5">
          <div className="xl:h-[340px] xl:w-[350px] bg-white rounded-md">
            <h1 className="xl:font-bold xl:text-xl px-8 pt-8">
              Students Ratio:
            </h1>
            <AdminStudentsChart />
            <div className="px-8 mt-4 flex justify-between">
              <div>
                <div className="h-[6px] w-[70px] bg-[#00C49F] rounded-xl 2xl:mb-2"></div>
                <div>
                  <h1 className="text-center">Female</h1>
                </div>
              </div>
              <div className="divider lg:divider-horizontal xl:divider-horizontal"></div>
              <div>
                <div className="h-[6px] w-[70px] bg-[#0088FE] rounded-xl 2xl:mb-2"></div>
                <div>
                  <h1 className="text-center">Male</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:h-[340px] xl:w-[350px] bg-white rounded-md">
            <h1 className="xl:font-bold xl:text-xl px-8 pt-8">
              Teachers Ratio:
            </h1>
            <AdminTeachersChart />
            <div className="px-8 mt-4 flex justify-between">
              <div>
                <div className="h-[6px] w-[70px] bg-[#FF8042] rounded-xl 2xl:mb-2"></div>
                <div>
                  <h1 className="text-center">Female</h1>
                </div>
              </div>
              <div className="divider lg:divider-horizontal xl:divider-horizontal"></div>
              <div>
                <div className="h-[6px] w-[70px] bg-[#FFBB28] rounded-xl 2xl:mb-2"></div>
                <div>
                  <h1 className="text-center">Male</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="2xl:h-[700px] 2xl:w-[790px] bg-white rounded-md px-8 pt-8">
          <div className="flex justify-between items-center pb-5">
            <h1 className="xl:font-bold xl:text-2xl">Important Notice</h1>
          </div>
          <AdminNoticeBoard />
        </div>
      </div>
      <div className="container flex items-center justify-center xl:gap-2 lg:gap-2 gap-1 xl:text-[18px] font-semibold text-black h-[100px] mb-20 mt-1">
        <h1 className="xl:text-[18px] font-semibold text-black">
          Copyright © 2023 - All right reserved by
        </h1>
        <img className="h-[26px] mt-[6.5px]" src={icon} alt="amader-school" />
        <h1>Ltd.</h1>
      </div>
    </div>
  );
};

export default Admin;
