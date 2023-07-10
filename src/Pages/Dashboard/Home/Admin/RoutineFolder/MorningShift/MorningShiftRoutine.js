import React, { useState } from "react";
import AddRoutineMorning from "../Components/AddRoutineMorning";
import ViewRoutineMorning from "../Components/ViewRoutineMorning";
import icon from "../../../../../../Assets/dashboard-icon/dashboard.png";
import { Link } from "react-router-dom";

const MorningShiftRoutine = () => {
  const [assignedClass, setAssignedClass] = useState(false);
  return (
    <div
      className={`${
        assignedClass &&
        (assignedClass === "Nine" ||
          assignedClass === "Ten" ||
          assignedClass === "Eleven" ||
          assignedClass === "Twelve")
          ? "min-h-[120vh] w-[81.5%] relative top-24 xl:left-[320px]"
          : assignedClass &&
            (assignedClass === "Play" ||
              assignedClass === "KG" ||
              assignedClass === "One" ||
              assignedClass === "Two" ||
              assignedClass === "Three" ||
              assignedClass === "Four" ||
              assignedClass === "Five" ||
              assignedClass === "Six" ||
              assignedClass === "Seven" ||
              assignedClass === "Eight" ||
              assignedClass === "Select Class")
          ? "min-h-[110vh] w-[81.5%] relative top-24 xl:left-[320px]"
          : "min-h-[110vh] w-[81.5%] relative top-24 xl:left-[320px]"
      }`}
    >
      <div className="text-[17px] font-semibold breadcrumbs mb-8">
        <ul>
          <li className="hover:text-[#FFBE15] ">
            <Link to={`/dashboard/admin`}>Dashboard</Link>
          </li>
          <li>Class Routine</li>
          <li>Morning Shift</li>
        </ul>
      </div>
      <div className="flex gap-10">
        <AddRoutineMorning
          assignedClass={assignedClass}
          setAssignedClass={setAssignedClass}
        />
        <ViewRoutineMorning />
      </div>
      <div className="container flex items-center justify-center xl:gap-2 lg:gap-2 gap-1 xl:text-[18px] font-semibold text-black h-[100px] mb-24">
        <h1 className="xl:text-[18px] font-semibold text-black">
          Copyright © 2023 - All right reserved by
        </h1>
        <img className="h-[26px] mt-[6.5px]" src={icon} alt="amader-school" />
        <h1>Ltd.</h1>
      </div>
    </div>
  );
};

export default MorningShiftRoutine;
