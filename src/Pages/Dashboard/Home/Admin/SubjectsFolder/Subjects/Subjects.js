import React, { useState } from "react";
import AddSubject from "../Components/AddSubject";
import AllSubjects from "../Components/AllSubjects";
import { Link } from "react-router-dom";
import icon from "../../../../../../Assets/dashboard-icon/dashboard.png";

const Subjects = () => {
  const [assignedClass, setAssignedClass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen 2xl:w-[79.3%] relative top-24 2xl:left-[360px]">
      <div className="text-[17px] font-semibold breadcrumbs mb-8">
        <ul>
          <li className="hover:text-[#FFBE15] ">
            <Link to={`/dashboard/admin`}>Dashboard</Link>
          </li>
          <li className="text-[#FFBE15]">Subject</li>
        </ul>
      </div>

      <div className="flex gap-5 ">
        <AddSubject
          assignedClass={assignedClass}
          setAssignedClass={setAssignedClass}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
        <AllSubjects isLoading={isLoading} />
      </div>

      <div
        className={`${
          assignedClass
            ? "container flex items-center justify-center xl:gap-2 lg:gap-2 gap-1 xl:text-[18px] font-semibold text-black h-[100px] my-[100px]"
            : "container flex items-center justify-center xl:gap-2 lg:gap-2 gap-1 xl:text-[18px] font-semibold text-black h-[100px] my-10"
        }`}
      >
        <h1 className="xl:text-[18px] font-semibold text-black">
          Copyright © 2023 - All right reserved by
        </h1>
        <img className="h-[26px] mt-[6.5px]" src={icon} alt="amader-school" />
        <h1>Ltd.</h1>
      </div>
    </div>
  );
};

export default Subjects;
