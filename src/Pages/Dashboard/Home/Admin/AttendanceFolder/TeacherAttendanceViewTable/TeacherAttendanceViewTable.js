import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";
import axios from "axios";
import { useForm } from "react-hook-form";
import { AiOutlineEdit } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { toast } from "react-hot-toast";

const TeacherAttendanceViewTable = () => {
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
        `https://v1-amader-school-server.vercel.app/api/v1/admins/${admin._id}/teachersAttendances?shift=${selectedShift}&date=${selectedDate}`
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
                    <td className="px-4 py-2">{teacherAttendance.teacherId}</td>
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
      {(!selectedDate || !selectedShift || !attendanceData.length === 0) && (
        <p className="text-3xl font-bold text-center pt-[100px] pb-[50px]">
          Search Attendance Sheet Here!!
        </p>
      )}
    </div>
  );
};

export default TeacherAttendanceViewTable;
