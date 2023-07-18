import React from "react";
import { Link } from "react-router-dom";
import icon from "../../../../../Assets/dashboard-icon/dashboard.png";

const ClassRoutine = () => {
  const weekDates = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
  const classTimes = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"];

  // Generate sample subject data for each day and time slot
  const generateSubjectData = () => {
    const subjects = [
      "Math",
      "Science",
      "English",
      "History",
      "Physical Education",
    ];
    const teachers = [
      "John Doe",
      "Jane Smith",
      "Alex Johnson",
      "Sarah Davis",
      "Mike Wilson",
    ];
    const rooms = ["101", "102", "103", "104", "105"];

    return weekDates
      .map((date) => {
        return classTimes.map((time) => {
          const subjectIndex = Math.floor(Math.random() * subjects.length);
          const teacherIndex = Math.floor(Math.random() * teachers.length);
          const roomIndex = Math.floor(Math.random() * rooms.length);

          return {
            time,
            day: date,
            subject: subjects[subjectIndex],
            teacher: teachers[teacherIndex],
            room: rooms[roomIndex],
          };
        });
      })
      .flat();
  };

  const routineData = generateSubjectData();

  return (
    <div className="2xl:w-[79.3%] relative top-24 2xl:left-[360px]">
      <div className="text-[17px] font-semibold breadcrumbs mb-8">
        <ul>
          <li className="hover:text-[#FFBE15]">
            <Link to={`/dashboard/student`}>Dashboard</Link>
          </li>
          <li className="text-[#FFBE15]">Class Routine</li>
        </ul>
      </div>
      <div className="bg-white 2xl:px-8 2xl:py-10">
        <h1 className="text-3xl font-bold mb-8">Class Routine</h1>

        <table className="w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-100 border-b"></th>
              {classTimes.map((time, index) => (
                <th key={index} className="px-4 py-2 bg-gray-100 border-b">
                  {time}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {weekDates.map((date, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border-b">{date}</td>
                {classTimes.map((time, timeIndex) => {
                  const subjectData = routineData.find(
                    (data) => data.time === time && data.day === date
                  );
                  return (
                    <td key={timeIndex} className="px-4 py-2 border-b">
                      {subjectData && (
                        <>
                          <div>{subjectData.subject}</div>
                          <div>Teacher: {subjectData.teacher}</div>
                          <div>Room: {subjectData.room}</div>
                        </>
                      )}
                    </td>
                  );
                })}
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

export default ClassRoutine;
