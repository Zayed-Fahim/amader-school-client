import React, { useState } from "react";

const AddEventForStudent = () => {
  const [eventType, setEventType] = useState("");
  const [classSelection, setClassSelection] = useState("");
  const [group, setGroup] = useState("");
  const [shift, setShift] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const handleReset = () => {
    setEventType("");
    setClassSelection("");
    setGroup("");
    setShift("");
    setTitle("");
    setDescription("");
    setImage("");
  };

  return (
    <div className="bg-white 2xl:px-8 2xl:py-10 w-[900px]">
      <h1 className="text-2xl font-bold mb-4">Add Event</h1>
      <form onSubmit={handleSubmit} className="mx-auto">
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
            <option value="assignment">Assignment</option>
            <option value="quiz">Quiz</option>
            <option value="classTest">Class Test</option>
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
          <label htmlFor="classSelection" className="block font-bold mb-2">
            Class
          </label>
          <select
            id="classSelection"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none"
            value={classSelection}
            onChange={(e) => setClassSelection(e.target.value)}
          >
            <option value="">Select Class</option>
            <option value="play">Play</option>
            <option value="kg">KG</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>
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
            <option value="science">Science</option>
            <option value="arts">Arts</option>
            <option value="commerce">Commerce</option>
          </select>
        </div>
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
            <option value="morning">Morning</option>
            <option value="day">Day</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block font-bold mb-2">
            Image (Optional)
          </label>
          <input
            type="file"
            id="image"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
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
