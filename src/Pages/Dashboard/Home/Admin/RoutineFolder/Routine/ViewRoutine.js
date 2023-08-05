import React, { useContext, useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";
import { MdClearAll } from "react-icons/md";
import icon from "../../../../../../Assets/dashboard-icon/dashboard.png";

const ViewRoutine = () => {
  const { admin } = useContext(AuthContext);
  const [assignedClass, setAssignedClass] = useState("");
  const [group, setGroup] = useState("");
  const [shift, setShift] = useState("");
  const [section, setSection] = useState("");
  const [routineVersion, setRoutineVersion] = useState("");
  const [routine, setRoutine] = useState([]);
  const [routineData, setRoutineData] = useState([]);
  const [message, setMessage] = useState("");

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
  const handleSearchRoutine = (e) => {
    e.preventDefault();
    const matchedRoutine = admin?.routines?.filter((routine) => {
      return (
        routine.assignedClass === assignedClass &&
        routine.group === group &&
        routine.shift === shift &&
        routine.section === section &&
        routine.routineVersion === routineVersion
      );
    });

    if (matchedRoutine && matchedRoutine.length > 0) {
      setRoutine(matchedRoutine);
      setMessage(""); // Clear any previous error message
    } else {
      setRoutine([]);
      setMessage("No matching routine found."); // Set an error message
    }
  };
  const handleClear = () => {
    setAssignedClass("");
    setGroup("");
    setShift("");
    setRoutineVersion("");
    setSection("");
    setRoutine([]);
  };
  useEffect(() => {
    if (routine.length > 0) {
      const newRoutineData = routine.map((item) => item.routine);
      setRoutineData(newRoutineData);
    }
  }, [routine]);

  const isFirstInputFilled = () => {
    return assignedClass !== "";
  };
  return (
    <div className="relative 2xl:left-[360px] 2xl:mt-24">
      <div className="text-[17px] font-semibold breadcrumbs mb-8">
        <ul>
          <li className="hover:text-[#FFBE15]">
            <Link to={`/dashboard/student`}>Dashboard</Link>
          </li>
          <li className="text-[#FFBE15]">View Routine</li>
        </ul>
      </div>
      <div className="bg-white w-[79.3%] px-8 py-10 rounded-md">
        <div className="flex flex-col ">
          <div className="overflow-x-auto">
            <form
              className="pb-5 flex justify-between items-center"
              onSubmit={handleSearchRoutine}
            >
              <div className="flex gap-3 items-center">
                <div className="relative w-[170px] rounded-md border ">
                  <select
                    value={assignedClass}
                    className="h-10 w-full px-3  rounded-md focus:outline-none"
                    onChange={(e) => {
                      setAssignedClass(e.target.value);
                    }}
                  >
                    <option value="">Select Class</option>
                    <option value="Play">Play</option>
                    <option value="Kg">KG</option>
                    <option value="One">One</option>
                    <option value="Two">Two</option>
                    <option value="Three">Three</option>
                    <option value="Four">Four</option>
                    <option value="Five">Five</option>
                    <option value="Six">Six</option>
                    <option value="Seven">Seven</option>
                    <option value="Eight">Eight</option>
                    <option value="Nine">Nine</option>
                    <option value="Ten">Ten</option>
                    <option value="Eleven">Eleven</option>
                    <option value="Twelve">Twelve</option>
                  </select>
                </div>

                <div className="relative w-[170px] rounded-md border">
                  <select
                    value={section}
                    className="h-10 w-full rounded-md px-3 focus:outline-none"
                    onChange={(e) => setSection(e.target.value)}
                  >
                    <option value="">Select Section</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                    <option value="G">G</option>
                    <option value="I">I</option>
                    <option value="J">J</option>
                  </select>
                </div>

                {assignedClass &&
                (assignedClass === "Nine" ||
                  assignedClass === "Ten" ||
                  assignedClass === "Eleven" ||
                  assignedClass === "Twelve") ? (
                  <div className="relative w-[170px] rounded-md border">
                    <select
                      value={group}
                      onChange={(e) => setGroup(e.target.value)}
                      className="h-10 w-full rounded-md px-3 focus:outline-none"
                    >
                      <option value="">Select Group</option>
                      <option value="Science">Science</option>
                      <option value="Commerce">Commerce</option>
                      <option value="Arts">Arts</option>
                    </select>
                  </div>
                ) : null}

                <div className="relative w-[170px] rounded-md border">
                  <select
                    className="h-10 w-full rounded-md px-3 focus:outline-none"
                    value={shift}
                    onChange={(e) => setShift(e.target.value)}
                  >
                    <option value="">Select Shift</option>
                    <option value="Day">Day</option>
                    <option value="Morning">Morning</option>
                  </select>
                </div>

                <div className="relative w-[170px] rounded-md border">
                  <select
                    value={routineVersion}
                    onChange={(e) => setRoutineVersion(e.target.value)}
                    className="h-10 w-full rounded-md px-3 focus:outline-none"
                  >
                    <option value="">Select Version</option>
                    <option value="V1">V1</option>
                    <option value="V2">V2</option>
                    <option value="V3">V3</option>
                    <option value="V4">V4</option>
                    <option value="V5">V5</option>
                    <option value="V6">V6</option>
                    <option value="V7">V7</option>
                    <option value="V8">V8</option>
                    <option value="V9">V9</option>
                    <option value="V10">V10</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  className={`px-4 py-1 font-semibold rounded-lg bg-[#FFBE15] flex gap-1 justify-center items-center hover border ${
                    !(assignedClass && shift && section && routineVersion) &&
                    "cursor-not-allowed bg-opacity-50"
                  }`}
                  onClick={handleSearchRoutine}
                  disabled={
                    !(assignedClass && shift && section && routineVersion)
                  }
                >
                  <BsSearch />
                  SEARCH
                </button>
                <button
                  className={`px-4 py-1 font-semibold rounded-lg bg-[#FFBE15] flex gap-1 justify-center items-center hover border ${
                    !isFirstInputFilled() && "cursor-not-allowed bg-opacity-50"
                  }`}
                  onClick={handleClear}
                  disabled={!isFirstInputFilled()}
                >
                  <MdClearAll />
                  CLEAR
                </button>
              </div>
            </form>
            {routine && routine?.length > 0 ? (
              <table className="w-full table-auto table border">
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
                      <td className="ml-10 text-[16px] font-semibold">
                        {dayStep}
                      </td>
                      {periodSteps
                        .slice(0, -1)
                        .map((periodStep, periodIndex) => {
                          return (
                            <td key={periodIndex} className="ml-10 text-[16px]">
                              {routineData.map((routine, routineIndex) => {
                                const matchingData = routine.filter(
                                  (data) =>
                                    data.day === dayStep &&
                                    data.period ===
                                      periodDataContent[periodIndex]
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
            ) : (
              <div className="w-full h-[500px] bg-white grid place-items-center">
                <h1 className="text-5xl font-bold">
                  {message ? "Ops!! No Routine Found" : "Search Routine Here."}
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="container flex items-center justify-center xl:gap-2 lg:gap-2 gap-1 xl:text-[18px] font-semibold text-black h-[100px] mb-24 mt-2">
        <h1 className="xl:text-[18px] font-semibold text-black">
          Copyright © 2023 - All right reserved by
        </h1>
        <img className="h-[26px] mt-[6.5px]" src={icon} alt="amader-school" />
        <h1>Ltd.</h1>
      </div>
    </div>
  );
};

export default ViewRoutine;
