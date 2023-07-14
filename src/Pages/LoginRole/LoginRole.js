import React from "react";
import { Link } from "react-router-dom";
import admin from "../../Assets/icon/admin1.png";
import teacher from "../../Assets/icon/teacher1.png";
import student from "../../Assets/icon/student.png";
import LoginRoleNavbar from "./smallComponents/LoginRoleNavbar";

const LoginRole = () => {
  return (
    <div className="h-screen flex flex-col gap-10 md:gap-16 xl:gap-16 2xl:gap-48 overflow-x-hidden">
      <LoginRoleNavbar />
      <div className="flex flex-col justify-center items-center gap-20 md:gap-28 xl:gap-28 2xl:gap-32 pb-20 md:pb-0 xl:pb-0 2xl:pb-0">
        <div className="w-[534px] h-[59px] flex flex-col">
          <h1 className="text-center font-[700] text-[25px] md:text-[28px] xl:text-[31px] 2xl:text-[35px]">
            Welcome Here...
          </h1>
          <h1 className="text-center text-[28px] md:text-[31px] xl:text-[36px] 2xl:text-[40px] font-[700] text-[#F1B911]">
            Continue to the system as:
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-5 xl:gap-8 2xl:gap-8">
          <Link
            to="/select-role/login/admin"
            className="bg-white rounded-[20px] h-[235px] w-[235px] md:h-[235px] md:w-[235px] xl:h-[255px] xl:w-[265px] 2xl:h-[275px] 2xl:w-[285px] border border-solid border-[#DFDFDF] flex-shrink-0 flex justify-center items-center flex-col gap-[30px] hover:shadow-md shadow-sm hover:shadow-gray-500 lg:duration-300 hover:ease-in hover:scale-110 hover:rounded-xl hover:bg-[#FFC61A]"
          >
            <img className="w-[58px] h-[69px]" src={admin} alt="admin" />

            <h1 className="text-center text-[1.5rem] font-[500] text-black">
              Admin
            </h1>
          </Link>
          <Link
            to="/select-role/login/teacher"
            className="bg-white rounded-[20px] h-[235px] w-[235px] md:h-[235px] md:w-[235px] xl:h-[255px] xl:w-[265px] 2xl:h-[275px] 2xl:w-[285px] border border-solid border-[#DFDFDF] flex-shrink-0 flex justify-center items-center flex-col gap-[30px] hover:shadow-md shadow-sm hover:shadow-gray-500 lg:duration-300 hover:ease-in hover:scale-110 hover:rounded-xl hover:bg-[#FFC61A]"
          >
            <img className="w-[58px] h-[69px]" src={teacher} alt="teacher" />

            <h1 className="text-center text-[1.5rem] font-[500] text-black">
              Teacher
            </h1>
          </Link>
          <Link
            to="/select-role/login/student"
            className="bg-white rounded-[20px] h-[235px] w-[235px] md:h-[235px] md:w-[235px] xl:h-[255px] xl:w-[265px] 2xl:h-[275px] 2xl:w-[285px] border border-solid border-[#DFDFDF] flex-shrink-0 flex justify-center items-center flex-col gap-[30px] hover:shadow-md shadow-sm hover:shadow-gray-500 lg:duration-300 hover:ease-in hover:scale-110 hover:rounded-xl hover:bg-[#FFC61A]"
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
