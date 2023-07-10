// import React, { useState, useEffect, useContext } from "react";
// import icon from "../../../../../../Assets/dashboard-icon/dashboard.png";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";
// import { toast } from "react-hot-toast";

// const TeacherAttendance = () => {
//   const [selectedMonth, setSelectedMonth] = useState("");
//   const [selectedDate, setSelectedDate] = useState("");
//   const [selectedShift, setSelectedShift] = useState("");
//   const [teacherAttendance, setTeacherAttendance] = useState({});
//   const [attendanceData, setAttendanceData] = useState({});
//   const [loading, setLoading] = useState(false);
//   const { admin } = useContext(AuthContext);

//   const handleMonthChange = (event) => {
//     setSelectedMonth(event.target.value);
//     setSelectedDate("");
//     setSelectedShift("");
//     setTeacherAttendance({});
//   };

//   const handleDateChange = (event) => {
//     setSelectedDate(event.target.value);
//     setSelectedShift("");
//     setTeacherAttendance({});
//   };

//   const handleShiftChange = (event) => {
//     setSelectedShift(event.target.value);
//     setTeacherAttendance({});
//   };

//   const handleAttendanceToggle = (teacherId, event) => {
//     const { checked } = event.target;
//     setTeacherAttendance((prevTeacherAttendance) => ({
//       ...prevTeacherAttendance,
//       [teacherId]: checked,
//     }));
//   };

//   const handleSaveAttendance = () => {
//     setLoading(true);
//     setAttendanceData((prevAttendanceData) => ({
//       ...prevAttendanceData,
//       [selectedMonth]: {
//         ...prevAttendanceData[selectedMonth],
//       },
//       [selectedDate]: {
//         ...prevAttendanceData[selectedDate],
//       },
//       [selectedShift]: { ...prevAttendanceData[selectedShift] },
//       [teacherAttendance]: { ...prevAttendanceData[teacherAttendance] },
//     }));
//   };
//   console.log(attendanceData);
//   useEffect(() => {
//     const fetchAttendanceData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:8080/api/v1/teacher-attendance"
//         );
//         // const attendanceData = response.data; // Update the attendance data in your component state or variable
//         console.log(attendanceData); // Optional: Log the retrieved attendance data
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     const submitAttendance = async (e) => {
//       try {
//         const response = await axios.post(
//           "http://localhost:8080/api/v1/teacher-attendance",
//           { admin: { _id: admin._id } }
//         );
//         if (response.data) {
//           toast.success("Successful");
//           e.target.reset();
//         } // Optional: Log the response data
//         fetchAttendanceData(); // Refetch the attendance data after successful submission
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     submitAttendance();
//   }, [attendanceData, admin._id]);

//   return (
//     <div className="w-[81.5%] relative top-24 xl:left-[320px]">
//       <div className="text-[17px] font-semibold breadcrumbs mb-8">
//         <ul>
//           <li className="hover:text-[#FFBE15] ">
//             <Link to={`/dashboard/admin`}>Dashboard</Link>
//           </li>
//           <li>Attendance</li>
//           <li>Teacher Attendance</li>
//         </ul>
//       </div>
//       <form className="bg-white px-8 py-10">
//         <h1 className="text-2xl font-bold mb-8">Teacher Attendance</h1>
//         <div className="flex items-center mb-4">
//           <label className="mr-2">Month:</label>
//           <select
//             value={selectedMonth}
//             onChange={handleMonthChange}
//             className="px-2 py-1 border border-gray-300 rounded-md"
//           >
//             <option value="">Select Month</option>
//             <option value="January">January</option>
//             <option value="February">February</option>
//             <option value="March">March</option>
//             <option value="April">April</option>
//             <option value="May">May</option>
//             <option value="June">June</option>
//             <option value="July">July</option>
//             <option value="August">August</option>
//             <option value="September">September</option>
//             <option value="October">October</option>
//             <option value="November">November</option>
//             <option value="December">December</option>
//           </select>
//           {selectedMonth && (
//             <>
//               <label className="mx-4">Date:</label>
//               <select
//                 value={selectedDate}
//                 onChange={handleDateChange}
//                 className="px-2 py-1 border border-gray-300 rounded-md"
//               >
//                 <option value="">Select Date</option>

//                 {Array.from({ length: 31 }, (_, index) => index + 1).map(
//                   (date) => (
//                     <option key={date} value={date}>
//                       {date}
//                     </option>
//                   )
//                 )}
//               </select>
//             </>
//           )}
//           {selectedDate && (
//             <>
//               <label className="mx-4">Shift:</label>
//               <select
//                 value={selectedShift}
//                 onChange={handleShiftChange}
//                 className="px-2 py-1 border border-gray-300 rounded-md"
//               >
//                 <option value="">Select Shift</option>
//                 <option value="Morning">Morning</option>
//                 <option value="Day">Day</option>
//               </select>
//             </>
//           )}
//         </div>
//         {selectedMonth && selectedDate && selectedShift && (
//           <>
//             <table className="w-full mb-4 table border">
//               <thead>
//                 <tr className="bg-base-200 text-[16px]">
//                   <th className="px-4 py-2">Present/Absent</th>
//                   <th className="px-4 py-2">ID</th>
//                   <th className="px-4 py-2">Name</th>
//                   <th className="px-4 py-2">Shift</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {admin?.teachers?.map((teacher) => (
//                   <tr key={teacher._id} className="hover">
//                     <td className="px-4 py-2 ">
//                       <input
//                         type="checkbox"
//                         onChange={(e) => handleAttendanceToggle(teacher.id, e)}
//                         checked={teacherAttendance[teacher.id] || false}
//                       />
//                     </td>
//                     <td className="px-4 py-2">{teacher.id}</td>
//                     <td className="px-4 py-2">{teacher.name}</td>
//                     <td className="px-4 py-2">{teacher.shift}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             <button
//               onClick={handleSaveAttendance}
//               className="bg-blue-500 text-white px-4 py-2 rounded-md"
//               disabled={loading}
//             >
//               {loading ? "Saving..." : "Save Attendance"}
//             </button>
//           </>
//         )}
//       </form>
//       <div className="container flex items-center justify-center xl:gap-2 lg:gap-2 gap-1 xl:text-[18px] font-semibold text-black h-[100px]">
//         <h1 className="xl:text-[18px] font-semibold text-black">
//           Copyright © 2023 - All right reserved by
//         </h1>
//         <img className="h-[26px] mt-[6.5px]" src={icon} alt="amader-school" />
//         <h1>Ltd.</h1>
//       </div>
//     </div>
//   );
// };
// export default TeacherAttendance;

import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import icon from "../../../../../../Assets/dashboard-icon/dashboard.png";

const TeacherAttendance = () => {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedShift, setSelectedShift] = useState("");
  const [teacherAttendance, setTeacherAttendance] = useState({});
  const [loading, setLoading] = useState(false);
  const { admin } = useContext(AuthContext);

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
    setSelectedDate("");
    setSelectedShift("");
    setTeacherAttendance({});
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    setSelectedShift("");
    setTeacherAttendance({});
  };

  const handleAttendanceToggle = (teacherId, event) => {
    const { checked } = event.target;
    setTeacherAttendance((prevTeacherAttendance) => ({
      ...prevTeacherAttendance,
      [teacherId]: checked,
    }));
  };

  const handleSaveAttendance = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/teacher-attendance",
        {
          month: selectedMonth,
          date: selectedDate,
          shift: selectedShift,
          teacherAttendance: teacherAttendance,
        }
      );
      if (response.data) {
        toast.success("Attendance saved successfully.");
        setSelectedMonth("");
        setSelectedDate("");
        setSelectedShift("");
        setTeacherAttendance({});
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to save attendance.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[81.5%] relative top-24 xl:left-[320px]">
      <div className="text-[17px] font-semibold breadcrumbs mb-8">
        <ul>
          <li className="hover:text-[#FFBE15] ">
            <Link to={`/dashboard/admin`}>Dashboard</Link>
          </li>
          <li>Attendance</li>
          <li>Teacher Attendance</li>
        </ul>
      </div>
      <form className="bg-white px-8 py-10">
        <h1 className="text-2xl font-bold mb-8">Teacher Attendance</h1>
        <div className="flex items-center mb-4">
          <label className="mr-2">Month:</label>
          <select
            value={selectedMonth}
            onChange={handleMonthChange}
            className="px-2 py-1 border border-gray-300 rounded-md"
          >
            <option value="">Select Month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
          {selectedMonth && (
            <>
              <label className="mx-4">Date:</label>
              <select
                value={selectedDate}
                onChange={handleDateChange}
                className="px-2 py-1 border border-gray-300 rounded-md"
              >
                <option value="">Select Date</option>
                {Array.from({ length: 31 }, (_, index) => index + 1).map(
                  (date) => (
                    <option key={date} value={date}>
                      {date}
                    </option>
                  )
                )}
              </select>
            </>
          )}
        </div>
        {selectedMonth && selectedDate && (
          <>
            <table className="w-full mb-4 table border">
              <thead>
                <tr className="bg-base-200 text-[16px] uppercase">
                  <th className="px-4 py-2">Attendance</th>
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Shift</th>
                </tr>
              </thead>
              <tbody>
                {admin?.teachers?.map((teacher) => (
                  <tr key={teacher._id} className="hover">
                    <td className="px-4 py-2 ">
                      <input
                        type="checkbox"
                        onChange={(e) => handleAttendanceToggle(teacher._id, e)}
                        checked={teacherAttendance[teacher._id] || false}
                      />
                    </td>
                    <td className="px-4 py-2">{teacher.id}</td>
                    <td className="px-4 py-2">{teacher.fullName}</td>
                    <td className="px-4 py-2">{teacher.shift}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              onClick={handleSaveAttendance}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save Attendance"}
            </button>
          </>
        )}
      </form>
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

export default TeacherAttendance;
