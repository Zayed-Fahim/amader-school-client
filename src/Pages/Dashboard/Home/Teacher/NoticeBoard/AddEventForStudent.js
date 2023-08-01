import React, { useContext, useState } from "react";
import { AuthContext } from "../../../../../Contexts/AuthProvider/AuthProvider";
import axios from "axios";
import { toast } from "react-hot-toast";

const AddEventForStudent = () => {
  const { teacher } = useContext(AuthContext);
  const [eventType, setEventType] = useState("");
  const [assignedClass, setAssignedClass] = useState("");
  const [group, setGroup] = useState("");
  const [shift, setShift] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const eventDetails = {
      eventCreator: {
        id: teacher?._id,
        name: teacher?.fullName,
        schoolTag: teacher?.schoolTag,
      },
      eventType,
      assignedClass,
      shift,
      group,
      title,
      description,
      startDate,
      endDate,
    };
    try {
      await axios
        .post(
          "https://v1-amader-school-server.vercel.app/api/v1/events",
          eventDetails
        )
        .then((data) => {
          if (data.status === 200) {
            window.location.reload();
            setTimeout(() => {
              toast.success("Event Added!!");
            });
          }
        });
    } catch (error) {
      if (error) {
        toast.error("Attempt Unsuccessful.Please Try again.");
      }
    }
  };

  const handleReset = () => {
    setEventType("");
    setAssignedClass("");
    setGroup("");
    setShift("");
    setTitle("");
    setDescription("");
    setStartDate("");
    setEndDate("");
  };

  return (
    <div className="bg-white 2xl:px-8 2xl:pb-14 2xl:pt-10 w-[1000px] h-full">
      <h1 className="text-2xl font-bold mb-4">Add Event</h1>
      <form onSubmit={handleSubmit} className="mx-auto">
        <div className="grid grid-cols-2 gap-5">
          <div className="mb-4">
            <label htmlFor="eventType" className="block font-bold mb-2">
              Event Type
            </label>
            <select
              id="eventType"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none"
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
            >
              <option value="">Select Event Type</option>
              <option value="Assignment">Assignment</option>
              <option value="Quiz">Quiz</option>
              <option value="Class Test">Class Test</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="title" className="block font-bold mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block font-bold mb-2">
              Description
            </label>
            <textarea
              id="description"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="assignedClass" className="block font-bold mb-2">
              Class
            </label>
            <select
              id="assignedClass"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none"
              value={assignedClass}
              onChange={(e) => setAssignedClass(e.target.value)}
            >
              <option value="">Select Class</option>
              <option value="play">Play</option>
              <option value="kg">KG</option>
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
          {assignedClass &&
            (assignedClass === "Nine" ||
              assignedClass === "Ten" ||
              assignedClass === "Eleven" ||
              assignedClass === "Twelve") && (
              <div className="mb-4">
                <label htmlFor="group" className="block font-bold mb-2">
                  Group
                </label>
                <select
                  id="group"
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none"
                  value={group}
                  onChange={(e) => setGroup(e.target.value)}
                >
                  <option value="">Select Group</option>
                  <option value="Science">Science</option>
                  <option value="Arts">Arts</option>
                  <option value="Commerce">Commerce</option>
                </select>
              </div>
            )}
          <div className="mb-4">
            <label htmlFor="shift" className="block font-bold mb-2">
              Shift
            </label>
            <select
              id="shift"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none"
              value={shift}
              onChange={(e) => setShift(e.target.value)}
            >
              <option value="">Select Shift</option>
              <option value="Morning">Morning</option>
              <option value="Day">Day</option>
            </select>
          </div>
          {eventType && eventType === "Assignment" && (
            <div className="mb-4">
              <label htmlFor="startDate" className="block font-bold mb-2">
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                className="w-full border border-gray-300 p-2 rounded focus:outline-none"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="endDate" className="block font-bold mb-2">
              {eventType === "Assignment" ? <p>End Date</p> : <p>Date</p>}
            </label>
            <input
              type="date"
              id="endDate"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-5">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 mt-4 rounded"
          >
            Add Event
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold rounded px-4 py-2 mt-4"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEventForStudent;
