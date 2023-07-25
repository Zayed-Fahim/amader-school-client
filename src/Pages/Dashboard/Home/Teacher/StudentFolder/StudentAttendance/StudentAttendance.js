import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import icon from "../../../../../../Assets/dashboard-icon/dashboard.png";

const StudentAttendance = () => {
  const { handleSubmit } = useForm();
  const { admin } = useContext(AuthContext);
  const [teachers, setTeachers] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedShift, setSelectedShift] = useState("");
  const [teacherAttendance, setTeacherAttendance] = useState({});
  const formRef = useRef();

  useEffect(() => {
    if (selectedShift && selectedDate) {
      handleTeacherSearch();
    }
  }, [selectedShift, selectedDate]);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    setSelectedShift("");
    setTeacherAttendance({});
    setTeachers([]);
  };

  const handleShiftChange = (event) => {
    setSelectedShift(event.target.value);
    setTeacherAttendance({});
  };

  const handleAttendanceToggle = (teacherId) => {
    setTeacherAttendance((prevTeacherAttendance) => {
      const updatedAttendance = { ...prevTeacherAttendance };
      if (updatedAttendance[teacherId]) {
        delete updatedAttendance[teacherId];
      } else {
        updatedAttendance[teacherId] = true;
      }
      return updatedAttendance;
    });
  };

  const handleSaveAttendance = async () => {
    try {
      const teachersAttendances = teachers.map((teacher) => ({
        teacher_Id: teacher._id,
        attendanceStatus: teacherAttendance[teacher._id] ? true : false,
        teacherId: teacher.id,
        teacherName: teacher.fullName,
        teacherShift: teacher.shift,
      }));

      await axios.post(
        "https://amader-school-server-v1.vercel.app/api/v1/teacher-attendance",
        {
          date: selectedDate,
          shift: selectedShift,
          teachersAttendances,
          admin: { id: admin._id },
        }
      );

      toast.success("Attendance Successful!!");
      setSelectedDate("");
      setSelectedShift("");
      setTeacherAttendance({});
      setTeachers([]);
    } catch (error) {
      console.error(error);
      toast.error("Failed to save attendance.");
    }
  };

  const handleTeacherSearch = async () => {
    try {
      const response = await axios.get(
        `https://amader-school-server-v1.vercel.app/api/v1/teacher-attendance/admins/${admin._id}/teachers?shift=${selectedShift}`
      );
      setTeachers(response.data.payload.teachers);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch teachers.");
    }
  };
  return (
    <div className="2xl:w-[79.3%] relative top-24 2xl:left-[360px]">
      <div className="text-[17px] font-semibold breadcrumbs mb-8">
        <ul>
          <li className="hover:text-[#FFBE15] ">
            <Link to={`/dashboard/teacher`}>Dashboard</Link>
          </li>
          <li className="text-[#FFBE15]">Student Attendance</li>
        </ul>
      </div>
      <div className="bg-white px-8 py-10">
        <form
          className=""
          onSubmit={handleSubmit(handleSaveAttendance)}
          ref={formRef}
        >
          <h1 className="text-2xl font-bold mb-8">Student Attendance</h1>
          <div className="flex items-center mb-4">
            <label className="mr-2">Date:</label>
            <input
              type="date"
              className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
              required
              value={selectedDate}
              onChange={handleDateChange}
            />
            {selectedDate && (
              <>
                <label className="mx-4">Shift:</label>
                <select
                  value={selectedShift}
                  onChange={handleShiftChange}
                  className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
                >
                  <option value="">Select Shift</option>
                  <option value="Morning">Morning</option>
                  <option value="Day">Day</option>
                </select>
              </>
            )}
          </div>

          {selectedDate && selectedShift && teachers.length > 0 && (
            <table className="w-full mb-4 table border">
              <thead>
                <tr className="text-[16px] uppercase">
                  <th className="px-4 py-2">Attendance</th>
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Shift</th>
                </tr>
              </thead>

              <tbody>
                {teachers.map((teacher) => (
                  <tr key={teacher._id} className="hover">
                    <td className="px-4 py-2">
                      <input
                        type="checkbox"
                        checked={!!teacherAttendance[teacher._id]}
                        onChange={() => handleAttendanceToggle(teacher._id)}
                      />
                    </td>
                    <td className="px-4 py-2">{teacher.id}</td>
                    <td className="px-4 py-2">{teacher.fullName}</td>
                    <td className="px-4 py-2">{teacher.shift}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {selectedDate && selectedShift && teachers.length > 0 && (
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Save Attendance
            </button>
          )}
        </form>
      </div>
      <div className="container flex items-center justify-center xl:gap-2 lg:gap-2 gap-1 xl:text-[18px] font-semibold text-black h-[100px]">
        <h1 className="xl:text-[18px] font-semibold text-black">
          © 2023 - All rights reserved by
        </h1>
        <img className="h-[26px] mt-[6.5px]" src={icon} alt="amader-school" />
        <h1>Ltd.</h1>
      </div>
    </div>
  );
};

export default StudentAttendance;
