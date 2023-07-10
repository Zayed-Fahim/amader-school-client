import React, { useState, useEffect } from "react";
import TeacherAttendanceViewTable from "./TeacherAttendanceViewTable";
import { fetchTeacherAttendanceData } from "../Components/TeacherAttendanceModel";
import { Link } from "react-router-dom";

const TeacherAttendanceView = () => {
  const [teacherAttendance, setTeacherAttendance] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTeacherAttendanceData();
        setTeacherAttendance(data);
      } catch (error) {
        
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-[81.5%] relative top-24 xl:left-[320px]">
      <div className="text-[17px] font-semibold breadcrumbs mb-8">
        <ul>
          <li className="hover:text-[#FFBE15] ">
            <Link to={`/dashboard/admin`}>Dashboard</Link>
          </li>
          <li>Attendance</li>
          <li>Teacher Attendance Table</li>
        </ul>
      </div>
      <div className="bg-white min-h-[50vh] px-8 py-10">
        <h1 className="text-2xl font-bold mb-8">Teacher Attendance</h1>
        <TeacherAttendanceViewTable teacherAttendance={teacherAttendance} />
      </div>
    </div>
  );
};

export default TeacherAttendanceView;
