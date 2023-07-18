import React, { useState } from "react";
import { Link } from "react-router-dom";
import icon from "../../../../../../Assets/dashboard-icon/dashboard.png";

const AddStudentResult = () => {
  const [studentId, setStudentId] = useState("");
  const [name, setName] = useState("");
  const [studentShift, setStudentShift] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [section, setSection] = useState("");
  const [group, setGroup] = useState("");
  const [marks, setMarks] = useState("");
  const [grade, setGrade] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [issuedBy, setIssuedBy] = useState("");
  const [examinedBy, setExaminedBy] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Process the form data (e.g., submit to a backend or perform validation)
    console.log("Student ID:", studentId);
    console.log("Name:", name);
    console.log("Student Shift:", studentShift);
    console.log("Roll Number:", rollNumber);
    console.log("Class:", studentClass);
    console.log("Section:", section);
    console.log("Group:", group);
    console.log("Marks:", marks);
    console.log("Grade:", grade);
    console.log("Issue Date:", issueDate);
    console.log("Issued By:", issuedBy);
    console.log("Examined By:", examinedBy);

    // Reset the form fields
    setStudentId("");
    setName("");
    setStudentShift("");
    setRollNumber("");
    setStudentClass("");
    setSection("");
    setGroup("");
    setMarks("");
    setGrade("");
    setIssueDate("");
    setIssuedBy("");
    setExaminedBy("");
  };
  const handleReset = () => {
    setStudentId("");
    setName("");
    setStudentShift("");
    setRollNumber("");
    setStudentClass("");
    setSection("");
    setGroup("");
    setMarks("");
    setGrade("");
    setIssueDate("");
    setIssuedBy("");
    setExaminedBy("");
  };
  return (
    <div className="2xl:w-[79.3%] relative top-24 2xl:left-[360px]">
      <div className="text-[17px] font-semibold breadcrumbs mb-8">
        <ul>
          <li className="hover:text-[#FFBE15] ">
            <Link to={`/dashboard/teacher`}>Dashboard</Link>
          </li>
          <li>Results</li>
          <li className="text-[#FFBE15]">Add Result</li>
        </ul>
      </div>
      <div className="bg-white rounded shadow 2xl:px-8 2xl:py-10 w-full ">
        <h2 className="2xl:text-2xl font-bold">Add Student Result</h2>

        <form
          onSubmit={handleSubmit}
          className="mt-4 grid 2xl:grid-cols-3 gap-5"
        >
          <div className="mt-3">
            <label className="block mb-1">Student ID:</label>
            <input
              type="text"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              className="w-full border-gray-300 border rounded px-3 py-2"
              required
            />
          </div>

          <div className="mt-3">
            <label className="block mb-1">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border-gray-300 border rounded px-3 py-2"
              required
            />
          </div>

          <div className="mt-3">
            <label className="block mb-1">Student Shift:</label>
            <input
              type="text"
              value={studentShift}
              onChange={(e) => setStudentShift(e.target.value)}
              className="w-full border-gray-300 border rounded px-3 py-2"
              required
            />
          </div>

          <div className="mt-3">
            <label className="block mb-1">Roll Number:</label>
            <input
              type="text"
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
              className="w-full border-gray-300 border rounded px-3 py-2"
              required
            />
          </div>

          <div className="mt-3">
            <label className="block mb-1">Class:</label>
            <input
              type="text"
              value={studentClass}
              onChange={(e) => setStudentClass(e.target.value)}
              className="w-full border-gray-300 border rounded px-3 py-2"
              required
            />
          </div>

          <div className="mt-3">
            <label className="block mb-1">Section:</label>
            <input
              type="text"
              value={section}
              onChange={(e) => setSection(e.target.value)}
              className="w-full border-gray-300 border rounded px-3 py-2"
              required
            />
          </div>

          <div className="mt-3">
            <label className="block mb-1">Group:</label>
            <input
              type="text"
              value={group}
              onChange={(e) => setGroup(e.target.value)}
              className="w-full border-gray-300 border rounded px-3 py-2"
              required
            />
          </div>

          <div className="mt-3">
            <label className="block mb-1">Marks:</label>
            <input
              type="text"
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
              className="w-full border-gray-300 border rounded px-3 py-2"
              required
            />
          </div>

          <div className="mt-3">
            <label className="block mb-1">Grade:</label>
            <input
              type="text"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              className="w-full border-gray-300 border rounded px-3 py-2"
              required
            />
          </div>

          <div className="mt-3">
            <label className="block mb-1">Issue Date:</label>
            <input
              type="date"
              value={issueDate}
              onChange={(e) => setIssueDate(e.target.value)}
              className="w-full border-gray-300 border rounded px-3 py-2"
              required
            />
          </div>

          <div className="mt-3">
            <label className="block mb-1">Issued By:</label>
            <input
              type="text"
              value={issuedBy}
              onChange={(e) => setIssuedBy(e.target.value)}
              className="w-full border-gray-300 border rounded px-3 py-2"
              required
            />
          </div>

          <div className="mt-3">
            <label className="block mb-1">Examined By:</label>
            <input
              type="text"
              value={examinedBy}
              onChange={(e) => setExaminedBy(e.target.value)}
              className="w-full border-gray-300 border rounded px-3 py-2"
              required
            />
          </div>

          <div className="flex gap-5">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded px-4 py-2 mt-4"
            >
              Submit
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

export default AddStudentResult;
