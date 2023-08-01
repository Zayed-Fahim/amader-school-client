import React, { useContext } from "react";
import { Link } from "react-router-dom";
import icon from "../../../../../Assets/dashboard-icon/dashboard.png";
import { AuthContext } from "../../../../../Contexts/AuthProvider/AuthProvider";

const StudentEvents = () => {
  const { student } = useContext(AuthContext);
  const realDate = new Date().toISOString().split("T")[0];

  return (
    <div className="2xl:w-[79.3%] relative top-24 2xl:left-[360px]">
      <div className="text-[17px] font-semibold breadcrumbs mb-8">
        <ul>
          <li className="hover:text-[#FFBE15] ">
            <Link to={`/dashboard/student`}>Dashboard</Link>
          </li>
          <li className="text-[#FFBE15]">Events</li>
        </ul>
      </div>

      <div className="bg-white 2xl:px-8 2xl:py-10 w-full h-[700px]">
        <h1 className="text-2xl font-bold mb-4 px-4">Events</h1>
        {student?.events?.length === 0 ? (
          <p className="text-gray-600">No upcoming events.</p>
        ) : (
          <ul className="space-y-4 overflow-y-auto h-[562px]">
            {student?.events?.map((event) => {
              const startDate = event.startDate
                ? new Date(event.startDate).toISOString().split("T")[0]
                : null;
              const endDate = event.endDate
                ? new Date(event.endDate).toISOString().split("T")[0]
                : null;
              let eventStatus = null;

              if (realDate >= startDate && realDate <= endDate) {
                eventStatus = (
                  <p className="text-white bg-green-500 py-1 px-10 text-sm text-center rounded-3xl">
                    You still have time to finish.Go and Finish!
                  </p>
                );
              } else if (realDate > endDate) {
                eventStatus = (
                  <p className="text-white bg-red-500 py-1 px-10 text-sm text-center rounded-3xl">
                    Expired.
                  </p>
                );
              } else if (!startDate && realDate < endDate) {
                eventStatus = (
                  <p className="text-white bg-yellow-500 py-1 px-10 text-sm text-center rounded-3xl">
                    Upcoming.
                  </p>
                );
              } else if (!startDate && realDate === endDate) {
                eventStatus = (
                  <p className="text-white bg-green-500 py-1 px-10 text-sm text-center rounded-3xl">
                    Event Day.
                  </p>
                );
              } else if (!startDate && realDate > endDate) {
                eventStatus = (
                  <p className="text-white bg-red-500 py-1 px-10 text-sm text-center rounded-3xl">
                    Expired.
                  </p>
                );
              }

              return (
                <li key={event._id} className="bg-white p-4 shadow">
                  <div className="mb-4">
                    <h1 className="text-[18px] font-bold -mb-3">
                      {event?.eventType}: {event?.title}
                    </h1>
                  </div>
                  <div className="flex items-center gap-1">
                    <p className="text-black text-[17px] font-semibold">
                      Details:
                    </p>
                    <p>{event.description}</p>
                  </div>

                  {event?.eventType && event?.eventType === "Assignment" && (
                    <div className="flex items-center gap-1">
                      <p className="text-black font-semibold">Start Date: </p>
                      <p>{new Date(event.startDate).toLocaleDateString()} </p>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    {event?.eventType && event?.eventType === "Assignment" ? (
                      <p className="text-black font-semibold">End Date:</p>
                    ) : (
                      <p className="text-black font-semibold">Date:</p>
                    )}
                    <p>{new Date(event.endDate).toLocaleDateString()} </p>
                  </div>

                  <div className="flex items-center gap-1">
                    <p className="text-black font-semibold">Status: </p>
                    <p>{eventStatus}</p>
                  </div>

                  <div className="flex items-center gap-1">
                    <p className="text-black font-semibold">Teacher:</p>
                    <p>{event.eventCreator?.name}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
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

export default StudentEvents;
