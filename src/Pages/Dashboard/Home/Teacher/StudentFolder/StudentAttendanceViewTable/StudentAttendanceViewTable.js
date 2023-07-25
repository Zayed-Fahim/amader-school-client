import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import icon from "../../../../../../Assets/dashboard-icon/dashboard.png";
import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { AiOutlineEdit } from "react-icons/ai";

const StudentAttendanceViewTable = () => {
  const { admin } = useContext(AuthContext);
  const { handleSubmit } = useForm();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedShift, setSelectedShift] = useState("");
  const [attendanceData, setAttendanceData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (selectedShift && selectedDate) {
      handleAttendanceDataSearch();
    }
  }, [selectedShift, selectedDate]);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    setSelectedShift("");
    setAttendanceData([]);
  };

  const handleShiftChange = (event) => {
    setSelectedShift(event.target.value);
  };

  const handleAttendanceDataSearch = async () => {
    try {
      setIsLoading(true);

      const response = await axios.get(
        `https://amader-school-server-v1.vercel.app/api/v1/admins/${admin._id}/teachersAttendances?shift=${selectedShift}&date=${selectedDate}`
      );
      setAttendanceData(response.data.payload.attendanceData);
    } catch (error) {
      toast.error("Failed to fetch data.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleEditAttendance = (attendanceId) => {
    // Perform the edit action using the attendanceId
    console.log("Edit attendance:", attendanceId);
  };
  return (
    <div className="2xl:w-[79.3%] relative top-24 2xl:left-[360px]">
      <div className="text-[17px] font-semibold breadcrumbs mb-8">
        <ul>
          <li className="hover:text-[#FFBE15] ">
            <Link to={`/dashboard/teacher`}>Dashboard</Link>
          </li>
          <li>Attendance</li>
          <li className="text-[#FFBE15]">View Attendance</li>
        </ul>
      </div>
      <div className="bg-white px-8 py-10">
        <h1 className="text-2xl font-bold mb-8">Teacher Attendance View</h1>
        <div>
          <form onSubmit={handleSubmit(handleAttendanceDataSearch)}>
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
          </form>
          {selectedDate && selectedShift && attendanceData.length > 0 && (
            <table className="w-full mb-4 table border">
              <thead>
                <tr className="text-[16px]">
                  <th className="px-4 py-2">Attendance</th>
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Shift</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {attendanceData.map((attendance) => (
                  <tr key={attendance._id} className="hover">
                    {attendance.teachersAttendances.map((teacherAttendance) => (
                      <React.Fragment key={teacherAttendance._id}>
                        <td className="px-4 py-2">
                          {teacherAttendance.attendanceStatus ? (
                            <button className="text-blue-500">
                              <TiTick
                                size={25}
                                className="stroke-blue-500 fill-blue-500 text-blue-500"
                                title="Present"
                              />
                            </button>
                          ) : (
                            <button className="text-red-500">
                              <ImCross size={14} title="Absent" />
                            </button>
                          )}
                        </td>
                        <td className="px-4 py-2">
                          {teacherAttendance.teacherId}
                        </td>
                        <td className="px-4 py-2">
                          {teacherAttendance.teacherName}
                        </td>
                        <td className="px-4 py-2">
                          {teacherAttendance.teacherShift}
                        </td>
                        <td className="px-4 py-2">
                          <button
                            className="text-blue-500"
                            onClick={() =>
                              handleEditAttendance(teacherAttendance._id)
                            }
                          >
                            <AiOutlineEdit title="Edit" />
                          </button>
                        </td>
                      </React.Fragment>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {selectedDate &&
            selectedShift &&
            attendanceData.length === 0 &&
            !isLoading && (
              <p className="text-2xl font-bold text-center text-red-500 pt-[100px] pb-[50px]">{`Ops! No Attendance Sheet found for this Date=${selectedDate} and Shift=${selectedShift} !!`}</p>
            )}
          {(!selectedDate ||
            !selectedShift ||
            !attendanceData.length === 0) && (
            <p className="text-3xl font-bold text-center pt-[100px] pb-[50px]">
              Search Attendance Sheet Here!!
            </p>
          )}
        </div>
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

export default StudentAttendanceViewTable;
