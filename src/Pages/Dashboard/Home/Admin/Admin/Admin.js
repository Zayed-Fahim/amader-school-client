import React, { useContext } from "react";
import { PiStudentThin } from "react-icons/pi";
import { PiChalkboardTeacherThin } from "react-icons/pi";
import StudentsChart from "../../Components/StudentsChart";
import NoticeBoard from "../../Components/AdminNoticeBoard";
import { AuthContext } from "../../../../../Contexts/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import icon from "../../../../../Assets/dashboard-icon/dashboard.png";

const Admin = () => {
  const { students } = useContext(AuthContext);
  let femaleStudents = students?.map((student) => student?.gender === "Female");
  let maleStudents = students?.map((student) => student?.gender === "Male");
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
            className="xl:h-[320px] xl:w-[320px] flex flex-col items-center px-4 justify-evenly bg-white -md-md hover:bg-[#FFBE15] hover:bg-opacity-80 hover:text-white hover:font-bold"
          >
            <PiStudentThin className="h-[100px] w-[100px]" />
            <div>
              <h1 className="xl:grid xl:place-items-end xl:text-xl font-semibold">
                Total Student
              </h1>
              <h1 className="xl:text-2xl xl:font-semibold text-center">
                {students?.length}
              </h1>
            </div>
          </Link>
          <Link
            to="/dashboard/admin/teachers/teacher-information"
            className="xl:h-[320px] xl:w-[320px] flex flex-col items-center px-4 justify-evenly bg-white rounded-md hover:bg-[#FFBE15] hover:bg-opacity-80 hover:text-white hover:font-bold"
          >
            <PiChalkboardTeacherThin className="h-[100px] w-[100px]" />
            <div>
              <h1 className="xl:grid xl:place-items-end xl:text-xl font-semibold">
                Total Teacher
              </h1>
              <h1 className="xl:text-2xl xl:font-semibold text-center">
                {students?.length}
              </h1>
            </div>
          </Link>
        </div>

        <div className="xl:h-[660px] xl:w-[485px] bg-white rounded-md">
          <h1 className="xl:font-bold xl:text-2xl px-8 pt-8">
            Students Ratio Chart :
          </h1>
          <StudentsChart />
          <div className="px-8 py-8 flex justify-between">
            <div>
              <div className="h-[6px] w-[70px] bg-[#00C49F] rounded-xl"></div>
              <div>
                <h1>Female Students</h1>
                <h1 className="text-xl font-semibold">
                  {femaleStudents?.length}
                </h1>
              </div>
            </div>
            <div className="divider lg:divider-horizontal xl:divider-horizontal"></div>
            <div>
              <div className="h-[6px] w-[70px] bg-[#0088FE] rounded-xl"></div>
              <div>
                <h1>Male Students</h1>
                <h1 className="text-xl font-semibold">
                  {maleStudents?.length}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="2xl:h-[660px] 2xl:w-[690px] bg-white rounded-md px-8 pt-8">
          <div className="flex justify-between items-center pb-5">
            <h1 className="xl:font-bold xl:text-2xl">Important Notice</h1>
          </div>
          <NoticeBoard />
        </div>
      </div>

      <div className="container flex items-center justify-center xl:gap-2 lg:gap-2 gap-1 xl:text-[18px] font-semibold text-black h-[100px] mt-7">
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
