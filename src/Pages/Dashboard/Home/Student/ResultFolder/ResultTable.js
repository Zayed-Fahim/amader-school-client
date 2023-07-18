import React, { useState } from "react";
import { Link } from "react-router-dom";
import icon from "../../../../../Assets/dashboard-icon/dashboard.png";

const ResultTable = () => {
  const [searchSubjectCode, setSearchSubjectCode] = useState("");
  const [searchExamName, setSearchExamName] = useState("");
  const [searchSubjectName, setSearchSubjectName] = useState("");

  const results = [
    {
      id: 1,
      name: "John Doe",
      roll: "12345",
      subject: "Mathematics",
      subjectCode: "MTH101",
      exam: "Annual Exam",
      grade: "A",
      marks: 95,
    },
    // Add more result objects here
  ];

  const filteredResults = results.filter(
    (result) =>
      result.subjectCode
        .toLowerCase()
        .includes(searchSubjectCode.toLowerCase()) &&
      result.exam.toLowerCase().includes(searchExamName.toLowerCase()) &&
      result.subject.toLowerCase().includes(searchSubjectName.toLowerCase())
  );

  const examOptions = ["Ct", "1st term", "Midterm", "Final", "Test"];

  return (
    <div className="2xl:w-[79.3%] relative top-24 2xl:left-[360px]">
      <div className="text-[17px] font-semibold breadcrumbs mb-8">
        <ul>
          <li className="hover:text-[#FFBE15] ">
            <Link to={`/dashboard/student`}>Dashboard</Link>
          </li>
          <li className="text-[#FFBE15]">Result</li>
        </ul>
      </div>
      <div className="bg-white 2xl:px-8 2xl:py-10">
        <h1 className="font-bold text-2xl mb-8">Check Your Result</h1>
        <div>
          <div className="flex gap-5 items-center mb-4">
            <select
              value={searchExamName}
              onChange={(e) => setSearchExamName(e.target.value)}
              className="p-2 border border-gray-300 rounded focus:outline-none"
            >
              <option value="">All Exams</option>
              {examOptions.map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Search by Subject Code"
              value={searchSubjectCode}
              onChange={(e) => setSearchSubjectCode(e.target.value)}
              className="p-2 border border-gray-300 rounded focus:outline-none"
            />
            <input
              type="text"
              placeholder="Search by Subject Name"
              value={searchSubjectName}
              onChange={(e) => setSearchSubjectName(e.target.value)}
              className="p-2 border border-gray-300 rounded focus:outline-none"
            />
          </div>
          {filteredResults.length === 0 ? (
            <p className="text-gray-600 text-center">No results found.</p>
          ) : (
            <table className="w-full table border">
              <thead className="2xl:text-[16px]">
                <tr>
                  {" "}
                  <th>Exam Name</th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Roll</th>
                  <th>Subject Name</th>
                  <th>Subject Code</th>
                  <th>Grade</th>
                  <th>Marks</th>
                </tr>
              </thead>
              <tbody>
                {filteredResults.map((result) => (
                  <tr key={result.id} className="text-[14px]">
                    <td>{result.exam}</td>
                    <td>{result.id}</td>
                    <td>{result.name}</td>
                    <td>{result.roll}</td>
                    <td>{result.subject}</td>
                    <td>{result.subjectCode}</td>
                    <td>{result.grade}</td>
                    <td>{result.marks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
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

export default ResultTable;
