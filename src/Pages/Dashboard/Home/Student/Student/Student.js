import React from "react";
import { FcCalendar, FcTodoList } from "react-icons/fc";
import { FaPercent } from "react-icons/fa";
import UserCard from "../../Components/UserCard";
import AttendanceChart from "../../Components/AttendanceChart";
import ResultTable from "../../Components/ResultTable";
import EventsCalender from "../../Components/EventsCalender";
import NoticeBoard from "../../Components/AdminNoticeBoard";

const Student = () => {
  return (
    <div className="relative xl:top-28 xl:left-[320px] mb-[120px]">
      <div className="flex gap-5">
        <div className="flex flex-col gap-5">
          <div className="xl:h-[870px] xl:w-[520px] bg-white rounded px-8 py-8">
            <div className="flex justify-between items-center">
              <h1 className="xl:font-bold xl:text-2xl">About Me</h1>
              <button className="font-semibold px-3 rounded bg-[#FFBE15]">
                EDIT
              </button>
            </div>
            <UserCard />
          </div>
          <div className="xl:h-[535px] xl:w-[480px] bg-white rounded px-8 py-8">
            <h1 className="xl:font-bold xl:text-2xl">Attendance</h1>
            <AttendanceChart />
            <div className="px-8 py-6 flex justify-between">
              <div>
                <div className="h-[6px] w-[50px] bg-[#0F33FF] rounded-xl"></div>
                <div>
                  <h1>Present</h1>
                  <h1 className="text-xl font-semibold">57%</h1>
                </div>
              </div>
              <div className="divider lg:divider-horizontal xl:divider-horizontal"></div>
              <div>
                <div className="h-[6px] w-[50px] bg-[#E69500] rounded-xl"></div>
                <div>
                  <h1>Absent</h1>
                  <h1 className="text-xl font-semibold">43%</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex xl:gap-5">
            <div className="xl:h-32 xl:w-[325px] flex items-center px-4 justify-between bg-white rounded">
              <div className="xl:h-[90px] xl:w-[90px] rounded-[50%] border grid place-items-center bg-black bg-opacity-10">
                <FcTodoList className="h-12 w-12" />
              </div>
              <div>
                <h1 className="xl:grid xl:place-items-end xl:text-[18px]">
                  Notifications
                </h1>
                <h1 className="xl:text-2xl xl:font-semibold">15</h1>
              </div>
            </div>
            <div className="xl:h-32 xl:w-[325px] flex items-center px-4 justify-between bg-white rounded">
              <div className="xl:h-[90px] xl:w-[90px] rounded-[50%] border grid place-items-center bg-black bg-opacity-10">
                <FcCalendar className="h-16 w-16" />
              </div>
              <div>
                <h1 className="xl:grid xl:place-items-end xl:text-[18px]">
                  Events
                </h1>
                <h1 className="xl:text-2xl xl:font-semibold">2</h1>
              </div>
            </div>
            <div className="xl:h-32 xl:w-[325px] flex items-center px-4 justify-between bg-white rounded">
              <div className="xl:h-[90px] xl:w-[90px] rounded-[50%] border grid place-items-center bg-black bg-opacity-10">
                <FaPercent className="xl:w-10 xl:h-10" />
              </div>
              <div>
                <h1 className="xl:grid xl:place-items-end xl:text-[18px]">
                  Attendance
                </h1>
                <h1 className="xl:text-2xl xl:font-semibold">57%</h1>
              </div>
            </div>
          </div>

          <div className="h-[720px] w-full rounded bg-white px-5">
            <h1 className="font-bold xl:text-2xl pt-8 pb-2">
              All Exam Results
            </h1>
            <ResultTable />
          </div>

          <div className="flex gap-5 items-center">
            <div className="xl:h-[535px] xl:w-[520px] bg-white rounded px-8 py-8 -ml-10">
              <h1 className="font-bold text-2xl pb-5">Event Calender</h1>
              <EventsCalender />
            </div>
            <div className="xl:h-[535px] xl:w-[515px] bg-white rounded px-8 py-8">
              <h1 className="font-bold text-2xl pb-5">Notice Board</h1>
              <NoticeBoard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
