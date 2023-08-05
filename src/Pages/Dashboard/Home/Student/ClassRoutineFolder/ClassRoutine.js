import React, { useContext } from "react";
import { Link } from "react-router-dom";
import icon from "../../../../../Assets/dashboard-icon/dashboard.png";
import { AuthContext } from "../../../../../Contexts/AuthProvider/AuthProvider";

const ClassRoutine = () => {
  const { student } = useContext(AuthContext);

  const steps = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Finish",
  ];
  const periodSteps = [
    "1st Period",
    "2nd Period",
    "3rd Period",
    "4th Period",
    "5th Period",
    "6th Period",
    "Done",
  ];
  const periodDataContent = ["1", "2", "3", "4", "5", "6", "?"];

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
        <div className="mb-7">
          <label className="inline-block font-medium text-gray-600 mr-2">
            Routine Version:{" "}
          </label>
          <select
            id="routineVersion"
            className="h-7 w-[100px] border  rounded-md px-3 focus:outline-none"
          >
            {student.routines.map((routine, index) => (
              <option key={index} value={index}>
                {routine?.routineVersion}
              </option>
            ))}
          </select>
        </div>

        <table className="w-full bg-white border border-gray-200 table">
          <thead className="text-[18px] pl-9 text-black font-semibold">
            <tr>
              <th>Day</th>
              {periodSteps.slice(0, -1).map((periodStep, index) => (
                <th
                  key={index}
                  className="text-[18px] font-semibold text-black ml-10"
                >
                  {periodStep}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {steps.slice(0, -1).map((dayStep, dayIndex) => (
              <tr key={dayIndex}>
                <td className="ml-10 text-[16px] font-semibold">{dayStep}</td>
                {periodSteps.slice(0, -1).map((periodStep, periodIndex) => {
                  return (
                    <td key={periodIndex} className="ml-10 text-[16px]">
                      {student.routines.map((routine, routineIndex) => {
                        const matchingData = routine.routine.filter(
                          (data) =>
                            data.day === dayStep &&
                            data.period === periodDataContent[periodIndex]
                        );

                        return matchingData.length > 0 ? (
                          matchingData.map((data, dataIndex) => (
                            <div key={dataIndex}>
                              <h1>Subject: {data.subjectName}</h1>
                              <h1>Teacher: {data.teacherName}</h1>
                              <h1>Type: {data.subjectType}</h1>
                              <h1>Room: {data.roomNo}</h1>
                            </div>
                          ))
                        ) : (
                          <div key={routineIndex + periodIndex}>
                            No Data Found
                          </div>
                        );
                      })}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="container flex items-center justify-center xl:gap-2 lg:gap-2 gap-1 xl:text-[18px] font-semibold text-black h-[100px] mb-24 mt-2">
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
