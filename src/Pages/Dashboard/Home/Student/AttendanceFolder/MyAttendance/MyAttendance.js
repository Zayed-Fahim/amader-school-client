import React, { useContext, useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  eachWeekOfInterval,
  startOfWeek,
  endOfWeek,
  isSameMonth,
  isSameDay,
} from "date-fns";
import { Link } from "react-router-dom";
import icon from "../../../../../../Assets/dashboard-icon/dashboard.png";
import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";

const AttendanceViewTable = () => {
  const authContext = useContext(AuthContext);
  const student = authContext?.student || {};
  const [selectedMonth, setSelectedMonth] = useState(new Date());

  const getAttendanceStatus = (date) => {
    const attendance = student.attendances.find((item) => item.date === date);
    return attendance ? attendance.attendanceStatus : null;
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(new Date(e.target.value));
  };

  const handleClearMonth = () => {
    setSelectedMonth(null);
  };

  const monthStart = selectedMonth ? startOfMonth(selectedMonth) : null;
  const monthEnd = selectedMonth ? endOfMonth(selectedMonth) : null;
  const daysInMonth = selectedMonth
    ? eachDayOfInterval({ start: monthStart, end: monthEnd })
    : [];
  const weeksInMonth = selectedMonth
    ? eachWeekOfInterval({ start: monthStart, end: monthEnd })
    : [];

  return (
    <div className="overflow-y-hidden overflow-x-hidden relative left-[360px] top-24 2xl:w-[79.3%]">
      <div className="text-[17px] font-semibold breadcrumbs mb-8">
        <ul>
          <li className="hover:text-[#FFBE15] ">
            <Link to={`/dashboard/admin`}>Dashboard</Link>
          </li>
          <li className="text-[#FFBE15]">Attendance</li>
        </ul>
      </div>
      <div className=" bg-white 2xl:px-8 2xl:py-10">
        <h1 className="text-2xl font-bold mb-6">My Attendance</h1>
        <div className="flex mb-4">
          <label htmlFor="month-select" className="mr-2">
            Select Month:
          </label>
          <input
            type="month"
            id="month-select"
            value={selectedMonth ? format(selectedMonth, "yyyy-MM") : ""}
            onChange={handleMonthChange}
            className="border border-gray-300 px-3 py-1 rounded-lg text-black"
            style={{ maxWidth: "200px" }}
          />
          {selectedMonth && (
            <button
              onClick={handleClearMonth}
              className="bg-red-500 text-white px-3 py-1 rounded-lg ml-4"
            >
              Clear Month
            </button>
          )}
        </div>
        {selectedMonth && (
          <table className="table-fixed w-full bg-white">
            <thead>
              <tr>
                <th className="border py-2 text-[14px]">Day</th>
                {weeksInMonth.map((week) => (
                  <React.Fragment key={week}>
                    {eachDayOfInterval({
                      start: startOfWeek(week),
                      end: endOfWeek(week),
                    }).map((day) => (
                      <th key={day} className="border text-[14px] py-2">
                        {format(day, "EEE")}
                      </th>
                    ))}
                  </React.Fragment>
                ))}
              </tr>
            </thead>
            <tbody>
              {daysInMonth.map((day) => (
                <tr key={day}>
                  <td className="border px-2 py-1">{format(day, "d")}</td>
                  {weeksInMonth.map((week) => (
                    <React.Fragment key={week}>
                      {eachDayOfInterval({
                        start: startOfWeek(week),
                        end: endOfWeek(week),
                      }).map((weekday) => (
                        <td
                          key={weekday}
                          className={`border px-2 py-1 ${
                            isSameMonth(day, selectedMonth) &&
                            isSameDay(day, weekday)
                              ? ""
                              : "bg-white"
                          }`}
                        >
                          {isSameDay(day, weekday) &&
                            isSameMonth(day, selectedMonth) && (
                              <>
                                {getAttendanceStatus(
                                  format(day, "yyyy-MM-dd")
                                ) === true ? (
                                  <span
                                    className="text-green-500"
                                    title="Present"
                                  >
                                    &#x2714;
                                  </span>
                                ) : getAttendanceStatus(
                                    format(day, "yyyy-MM-dd")
                                  ) === false ? (
                                  <span className="text-red-500" title="Absent">
                                    &#x2718;
                                  </span>
                                ) : null}
                              </>
                            )}
                        </td>
                      ))}
                    </React.Fragment>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
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

export default AttendanceViewTable;
