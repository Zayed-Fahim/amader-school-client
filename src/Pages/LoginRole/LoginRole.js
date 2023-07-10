import React from "react";
import { Link } from "react-router-dom";
import admin from "../../Assets/icon/admin1.png";
import teacher from "../../Assets/icon/teacher1.png";
import student from "../../Assets/icon/student.png";
import LoginRoleNavbar from "./smallComponents/LoginRoleNavbar";

const LoginRole = () => {
  return (
    <div className="h-screen flex flex-col gap-48">
      <LoginRoleNavbar />
      <div className="flex flex-col justify-center items-center gap-32">
        <div className="w-[534px] h-[59px] flex flex-col">
          <h1 className="text-center font-[700] text-[35px]">
            Welcome Here...
          </h1>
          <h1 className="text-center text-[40px] font-[700] text-[#F1B911]">
            Continue to the system as:
          </h1>
        </div>

        <div className="flex gap-16 justify-center items-center">
          <Link
            to="/select-role/login/admin"
            className="bg-white rounded-[20px] xl:h-[275px] xl:w-[285px] border border-solid border-[#DFDFDF] flex-shrink-0 flex justify-center items-center flex-col gap-[30px] hover:shadow-md shadow-sm hover:shadow-gray-500 lg:duration-300 hover:ease-in hover:scale-110 hover:rounded-xl hover:bg-[#FFC61A]"
          >
            <img className="w-[58px] h-[69px]" src={admin} alt="admin" />

            <h1 className="text-center text-[1.5rem] font-[500] text-black">
              Admin
            </h1>
          </Link>
          <Link
            to="/select-role/login/teacher"
            className="bg-white rounded-[20px] xl:h-[275px] xl:w-[285px] border border-solid border-[#DFDFDF] flex-shrink-0 flex justify-center items-center flex-col gap-[30px] hover:shadow-md shadow-sm hover:shadow-gray-500 lg:duration-300 hover:ease-in hover:scale-110 hover:rounded-xl hover:bg-[#FFC61A]"
          >
            <img className="w-[58px] h-[69px]" src={teacher} alt="teacher" />

            <h1 className="text-center text-[1.5rem] font-[500] text-black">
              Teacher
            </h1>
          </Link>
          <Link
            to="/select-role/login/student"
            className="bg-white rounded-[20px] xl:h-[275px] xl:w-[285px] border border-solid border-[#DFDFDF] flex-shrink-0 flex justify-center items-center flex-col gap-[30px] hover:shadow-md shadow-sm hover:shadow-gray-500 lg:duration-300 hover:ease-in hover:scale-110 hover:rounded-xl hover:bg-[#FFC61A]"
          >
            <img className="w-[80px] h-[80px]" src={student} alt="student" />

            <h1 className="text-center text-[1.5rem] font-[500] text-black">
              Student
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginRole;
