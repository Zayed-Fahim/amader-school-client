import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import icon from "../../../../../Assets/dashboard-icon/dashboard.png";
import { AuthContext } from "../../../../../Contexts/AuthProvider/AuthProvider";

const ClassScheduleViewTable = () => {
  const { teacher } = useContext(AuthContext);
  const [searchDate, setSearchDate] = useState("");
  const [searchTime, setSearchTime] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showAll, setShowAll] = useState(true);
  console.log(teacher.classSchedules);
  const handleSearch = () => {
    const results = teacher?.classSchedules?.filter((classSchedule) => {
      // Check if dateOfClass and classTime are defined before using toLowerCase()
      const matchDate =
        classSchedule?.dateOfClass &&
        classSchedule.dateOfClass
          .toLowerCase()
          .includes(searchDate.toLowerCase());

      const matchTime =
        classSchedule?.classTime &&
        classSchedule.classTime
          .split(" -")[0]
          .toLowerCase()
          .includes(searchTime.toLowerCase());

      return matchDate && matchTime;
    });
    setSearchResults(results);
    setShowAll(false);
  };

  const clearSearch = () => {
    setSearchDate("");
    setSearchTime("");
    setSearchResults([]);
    setShowAll(true);
  };

  const showAllData = () => {
    setSearchDate("");
    setSearchTime("");
    setSearchResults([]);
    setShowAll(true);
  };

  const isSearchButtonDisabled = searchDate === "" && searchTime === "";
  const isClearSearchButtonDisabled =
    searchDate === "" && searchTime === "" && searchResults.length === 0;

  return (
    <div className="overflow-y-hidden overflow-x-hidden relative left-[360px] top-24 2xl:w-[79.3%]">
      <div className="text-[17px] font-semibold breadcrumbs mb-8">
        <ul>
          <li className="hover:text-[#FFBE15] ">
            <Link to={`/dashboard/teacher`}>Dashboard</Link>
          </li>

          <li className="text-[#FFBE15]">Class Schedule</li>
        </ul>
      </div>
      <div className=" bg-white 2xl:px-8 2xl:py-10">
        <h1 className="text-2xl font-bold mb-4">Teacher Class Schedule</h1>
        <div className="mb-4">
          <label htmlFor="searchDate" className="block mb-1">
            Search Date:
          </label>
          <input
            type="date"
            id="searchDate"
            className="border p-2 w-48"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="searchTime" className="block mb-1">
            Search Time:
          </label>
          <input
            type="text"
            id="searchTime"
            className="border p-2 w-48"
            value={searchTime}
            onChange={(e) => setSearchTime(e.target.value)}
          />
        </div>
        <div className="flex mb-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            onClick={handleSearch}
            disabled={isSearchButtonDisabled}
          >
            Search
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={clearSearch}
            disabled={isClearSearchButtonDisabled}
          >
            Clear Search
          </button>
          {!showAll && searchResults?.length > 0 && (
            <button
              className="bg-green-500 text-white px-4 py-2 rounded ml-auto"
              onClick={showAllData}
            >
              Show All Schedule
            </button>
          )}
        </div>
        {showAll && (
          <table className="table-auto w-full mt-4">
            <thead>
              <tr>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Time</th>
                <th className="px-4 py-2">Subject</th>
                <th className="px-4 py-2">Class</th>
                <th className="px-4 py-2">Section</th>
                <th className="px-4 py-2">Group</th>
                <th className="px-4 py-2">Room</th>
              </tr>
            </thead>
            <tbody>
              {teacher?.classSchedules?.map((classSchedule, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">
                    {classSchedule?.dateOfClass}
                  </td>
                  <td className="border px-4 py-2">
                    {classSchedule?.classTime}
                  </td>
                  <td className="border px-4 py-2">
                    {classSchedule?.subjectName}
                  </td>
                  <td className="border px-4 py-2">
                    {classSchedule?.teachingClass}
                  </td>
                  <td className="border px-4 py-2">
                    {classSchedule?.teachingSection}
                  </td>
                  <td className="border px-4 py-2">
                    {classSchedule?.teachingGroup || "N/A"}
                  </td>
                  <td className="border px-4 py-2">
                    {classSchedule?.roomNumber}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {!showAll && searchResults.length > 0 ? (
          <table className="table-auto w-full mt-4">
            <thead>
              <tr>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Time</th>
                <th className="px-4 py-2">Subject</th>
                <th className="px-4 py-2">Class</th>
                <th className="px-4 py-2">Section</th>
                <th className="px-4 py-2">Group</th>
                <th className="px-4 py-2">Room</th>
              </tr>
            </thead>
            <tbody>
              {searchResults.map((classSchedule, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">
                    {classSchedule?.dateOfClass}
                  </td>
                  <td className="border px-4 py-2">
                    {classSchedule?.classTime}
                  </td>
                  <td className="border px-4 py-2">
                    {classSchedule?.subjectName}
                  </td>
                  <td className="border px-4 py-2">
                    {classSchedule?.teachingClass}
                  </td>
                  <td className="border px-4 py-2">
                    {classSchedule?.teachingSection}
                  </td>
                  <td className="border px-4 py-2">
                    {classSchedule?.teachingGroup || "N/A"}
                  </td>
                  <td className="border px-4 py-2">
                    {classSchedule?.roomNumber}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          !showAll && <p className="text-center">No schedule found.</p>
        )}
      </div>

      <div className="container flex items-center justify-center xl:gap-2 lg:gap-2 gap-1 xl:text-[18px] font-semibold text-black h-[100px] mb-24">
        <h1 className="xl:text-[18px] font-semibold text-black">
          Copyright © 2023 - All right reserved by
        </h1>
        <img className="h-[26px] mt-[6.5px]" src={icon} alt="amader-school" />
        <h1>Ltd.</h1>
      </div>
    </div>
  );
};

export default ClassScheduleViewTable;
