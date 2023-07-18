import React, { useState } from "react";
import { Link } from "react-router-dom";
import icon from "../../../../../../Assets/dashboard-icon/dashboard.png";

const StudentExamSchedule = () => {
  const allExamTypes = ["CT", "First Term", "Mid Term", "Final", "Test"];

  const examSchedule = [
    {
      examName: "First Term",
      subject: "Math",
      subjectCode: "MATH101",
      date: "2023-08-10",
      startTime: "09:00 AM",
      endTime: "11:00 AM",
      room: "Room A",
    },
    {
      examName: "CT",
      subject: "Science",
      subjectCode: "SCI201",
      date: "2023-08-12",
      startTime: "11:00 AM",
      endTime: "01:00 PM",
      room: "Room B",
    },
    {
      examName: "First Term",
      subject: "History",
      subjectCode: "HIST301",
      date: "2023-08-15",
      startTime: "02:00 PM",
      endTime: "04:00 PM",
      room: "Room C",
    },
    // Add more exam schedules as needed
  ];

  const [selectedExamType, setSelectedExamType] = useState("");

  const handleExamTypeChange = (event) => {
    setSelectedExamType(event.target.value);
  };

  const filteredExamSchedule = selectedExamType
    ? examSchedule.filter((exam) => exam.examName === selectedExamType)
    : examSchedule;

  return (
    <div className="2xl:w-[79.3%] relative top-24 2xl:left-[360px]">
      <div className="text-[17px] font-semibold breadcrumbs mb-8">
        <ul>
          <li className="hover:text-[#FFBE15] ">
            <Link to={`/dashboard/student`}>Dashboard</Link>
          </li>
          <li>Exams</li>
          <li className="text-[#FFBE15]">Exam Schedule</li>
        </ul>
      </div>
      <div className="bg-white 2xl:px-8 2xl:py-10">
        <h2 className="mb-8 font-bold text-2xl">Exam Schedule</h2>
        <div className="mb-4 flex items-center">
          <label htmlFor="examType" className="mr-2">
            Search by Exam Type:
          </label>
          <select
            id="examType"
            value={selectedExamType}
            onChange={handleExamTypeChange}
            className="border border-gray-300 rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">All</option>
            {allExamTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <table className="table-auto w-full border">
          <thead>
            <tr className="text-lg">
              <th>Exam Name</th>
              <th>Subject</th>
              <th>Subject Code</th>
              <th>Date</th>
              <th>Time</th>
              <th>Room</th>
            </tr>
          </thead>
          <tbody className="border">
            {filteredExamSchedule.map((exam) => (
              <tr
                key={exam.subject}
                className="text-base border hover text-center"
              >
                <td>{exam.examName}</td>
                <td>{exam.subject}</td>
                <td>{exam.subjectCode}</td>
                <td>{exam.date}</td>
                <td>
                  {exam.startTime} - {exam.endTime}
                </td>
                <td>{exam.room}</td>
              </tr>
            ))}
          </tbody>
        </table>
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

export default StudentExamSchedule;
