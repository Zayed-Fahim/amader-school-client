import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import icon from "../../../../../../Assets/dashboard-icon/dashboard.png";

const StudentAttendance = () => {
  const { handleSubmit } = useForm();
  const { teacher } = useContext(AuthContext);
  const [advisedStudents, setAdvisedStudents] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [advisedStudentAttendance, setAdvisedStudentAttendance] = useState({});
  const formRef = useRef();

  useEffect(() => {
    if (selectedDate) {
      handleAdvisedStudentSearch();
    }
  }, [selectedDate]);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    setAdvisedStudentAttendance({});
    setAdvisedStudents([]);
  };

  const handleAttendanceToggle = (advisedStudentId) => {
    setAdvisedStudentAttendance((prevAdvisedStudentAttendance) => {
      const updatedAttendance = { ...prevAdvisedStudentAttendance };
      if (updatedAttendance[advisedStudentId]) {
        delete updatedAttendance[advisedStudentId];
      } else {
        updatedAttendance[advisedStudentId] = true;
      }
      return updatedAttendance;
    });
  };

  const handleSaveAttendance = async () => {
    try {
      const advisedStudentsAttendances = advisedStudents.map(
        (advisedStudent) => ({
          advisedStudent_Id: advisedStudent._id,
          attendanceStatus: advisedStudentAttendance[advisedStudent?._id]
            ? true
            : false,
          advisedStudentId: advisedStudent.id,
          advisedStudentName: advisedStudent.fullName,
          advisedStudentClass: advisedStudent.assignedClass,
          advisedStudentSection: advisedStudent.section,
          advisedStudentShift: advisedStudent.shift,
        })
      );
      await axios.post(
        "https://v1-amader-school-server.vercel.app/api/v1/student-attendance",
        {
          date: selectedDate,
          advisedStudentsAttendances,
          classTeacher: { id: teacher?._id },
        }
      );

      toast.success("Attendance Successful!!");
      setSelectedDate("");
      setAdvisedStudentAttendance({});
      setAdvisedStudents([]);
    } catch (error) {
      console.error(error);
      toast.error("Failed to save attendance.");
    }
  };

  const handleAdvisedStudentSearch = async () => {
    try {
      const response = await axios.get(
        `https://v1-amader-school-server.vercel.app/api/v1/student-attendance/teachers/${teacher?._id}/advisedStudents`
      );
      setAdvisedStudents(response.data.payload.advisedStudents);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch Advised Student.");
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
          </div>

          {selectedDate && advisedStudents && advisedStudents.length > 0 && (
            <table className="w-full mb-4 table border">
              <thead>
                <tr className="text-[16px] uppercase">
                  <th className="px-4 py-2">Attendance</th>
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Class</th>
                  <th className="px-4 py-2">Section</th>
                  <th className="px-4 py-2">Shift</th>
                </tr>
              </thead>

              <tbody>
                {advisedStudents?.map((advisedStudent) => (
                  <tr key={advisedStudent._id} className="hover">
                    <td className="px-4 py-2">
                      <input
                        type="checkbox"
                        checked={!!advisedStudentAttendance[advisedStudent._id]}
                        onChange={() =>
                          handleAttendanceToggle(advisedStudent._id)
                        }
                      />
                    </td>
                    <td className="px-4 py-2">{advisedStudent.id}</td>
                    <td className="px-4 py-2">{advisedStudent.fullName}</td>
                    <td className="px-4 py-2">
                      {advisedStudent.assignedClass}
                    </td>
                    <td className="px-4 py-2">{advisedStudent.section}</td>
                    <td className="px-4 py-2">{advisedStudent.shift}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {selectedDate && advisedStudents?.length > 0 && (
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
