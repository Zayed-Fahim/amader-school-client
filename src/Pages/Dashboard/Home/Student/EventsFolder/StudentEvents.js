import React, { useState } from "react";
import { Link } from "react-router-dom";
import icon from "../../../../../Assets/dashboard-icon/dashboard.png";

const StudentEvents = () => {
  const [events] = useState([
    {
      id: 1,
      title: "Math Quiz",
      date: "2023-07-20",
      description: "Quiz on chapter 3",
      teacher: "John Doe",
    },
    {
      id: 2,
      title: "Science Experiment",
      date: "2023-07-22",
      description: "Hands-on experiment on chemical reactions",
      teacher: "Jane Smith",
    },
    {
      id: 3,
      title: "Literature Discussion",
      date: "2023-07-25",
      description: "Analyzing a famous novel",
      teacher: "Robert Johnson",
    },
    // Add more events here
  ]);

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
      <div className="bg-white 2xl:px-8 2xl:py-10">
        <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>
        {events.length === 0 ? (
          <p className="text-gray-600">No upcoming events.</p>
        ) : (
          <ul className="space-y-4">
            {events.map((event) => (
              <li key={event.id} className="bg-white p-4 shadow">
                <h2 className="text-lg font-bold">{event.title}</h2>
                <p className="text-gray-500">
                  Date: {new Date(event.date).toLocaleDateString()}
                </p>
                <p className="text-gray-700">{event.description}</p>
                <p className="text-gray-500">Teacher: {event.teacher}</p>
              </li>
            ))}
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
