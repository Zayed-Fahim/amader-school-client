import React, { useState } from "react";
import AddSubject from "../Components/AddSubject";
import AllSubjects from "../Components/AllSubjects";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import icon from "../../../../../../Assets/dashboard-icon/dashboard.png";

const Subjects = () => {
  const [assignedClass, setAssignedClass] = useState(false);
  const { data: subjects = [], refetch } = useQuery({
    queryKey: ["subjects"],
    queryFn: async () => {
      const res = await fetch(
        "http://localhost:8080/api/v1/add-subject&all-subjects"
      );
      const data = await res.json();
      const allSubjects = await data.payload.result;
      return allSubjects;
    },
  });
  return (
    <div className="min-h-screen w-[81.5%] relative top-24 xl:left-[320px]">
      <div className="text-[17px] font-semibold breadcrumbs mb-8">
        <ul>
          <li className="hover:text-[#FFBE15] ">
            <Link to={`/dashboard/admin`}>Dashboard</Link>
          </li>
          <li>Subject</li>
        </ul>
      </div>
      <div className="flex gap-10 ">
        <AddSubject
          refetch={refetch}
          assignedClass={assignedClass}
          setAssignedClass={setAssignedClass}
        />
        <AllSubjects subjects={subjects} />
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
