import React, { useContext } from "react";
import { AuthContext } from "../../../../../Contexts/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { PiStudent } from "react-icons/pi";
import icon from "../../../../../Assets/dashboard-icon/dashboard.png";
import { AiOutlineSchedule } from "react-icons/ai";
import TeacherNoticeBoard from "../NoticeBoard/TeacherNoticeBoard";
import TeacherStudentsChart from "../../Components/TeacherStudentsChart";

const Teacher = () => {
  const { teacher } = useContext(AuthContext);

  return (
    <div className="relative 2xl:top-24 2xl:left-[360px]">
      <div className="text-[17px] font-semibold breadcrumbs mb-8">
        <ul>
          <li className="hover:text-[#FFBE15] ">
            <Link to={`/dashboard/teacher`}>Dashboard</Link>
          </li>
          <li className="text-[#FFBE15]">Teacher</li>
        </ul>
      </div>

      <div className="flex gap-5">
        <div className="flex flex-col xl:gap-5">
          {teacher && teacher?.classTeacher === "Yes" && (
            <Link
              to="/dashboard/teacher/students/advised-students"
              className="xl:h-[320px] xl:w-[320px] flex flex-col items-center px-4 justify-evenly bg-white -md-md hover:bg-[#FFBE15] hover:bg-opacity-80"
            >
              <PiStudent className="h-[100px] w-[100px]" />
              <div>
                <h1 className="2xl:grid 2xl:place-items-end 2xl:text-[22px] font-bold">
                  Advertised Students
                </h1>
                <h1 className="xl:text-2xl xl:font-bold text-center">
                  {teacher.advisedStudents?.length}
                </h1>
              </div>
            </Link>
          )}
          <Link
            to="/dashboard/teacher/class-schedule"
            className="xl:h-[320px] xl:w-[320px] flex flex-col items-center px-4 justify-evenly bg-white rounded-md hover:bg-[#FFBE15] hover:bg-opacity-80"
          >
            <AiOutlineSchedule className="h-[100px] w-[100px]" />
            <div>
              <h1 className="2xl:grid 2xl:place-items-end 2xl:text-[22px] font-bold">
                Class Schedule
              </h1>
            </div>
          </Link>
        </div>

        {teacher && teacher?.classTeacher === "Yes" && (
          <div className="xl:h-[660px] xl:w-[485px] bg-white rounded-md">
            <h1 className="xl:font-bold xl:text-2xl px-8 pt-8">
              Students Ratio
            </h1>
            <TeacherStudentsChart />
            <div className="px-8 py-8 flex justify-between">
              <div>
                <div className="h-[6px] w-[70px] bg-[#00C49F] rounded-xl mb-4"></div>
                <div>
                  <h1 className="text-center">Female</h1>
                </div>
              </div>
              <div className="divider lg:divider-horizontal xl:divider-horizontal"></div>
              <div>
                <div className="h-[6px] w-[70px] bg-[#0088FE] rounded-xl mb-4"></div>
                <div>
                  <h1 className="text-center">Male</h1>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="xl:h-[660px] xl:w-[685px] bg-white rounded-md px-8 pt-8">
          <div className="flex justify-between items-center pb-5">
            <h1 className="xl:font-bold xl:text-2xl">Important Notice</h1>
          </div>
          <TeacherNoticeBoard />
        </div>
      </div>

      <div className="container flex items-center justify-center xl:gap-2 lg:gap-2 gap-1 xl:text-[18px] font-semibold text-black h-[100px] mb-24 mt-4">
        <h1 className="xl:text-[18px] font-semibold text-black">
          Copyright © 2023 - All right reserved by
        </h1>
        <img className="h-[26px] mt-[6.5px]" src={icon} alt="amader-school" />
        <h1>Ltd.</h1>
      </div>
    </div>
  );
};

export default Teacher;
