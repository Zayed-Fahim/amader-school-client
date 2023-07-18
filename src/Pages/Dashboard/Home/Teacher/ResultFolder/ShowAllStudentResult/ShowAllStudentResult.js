import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import icon from "../../../../../../Assets/dashboard-icon/dashboard.png";

const ShowAllStudentResult = () => {
  const [studentId, setStudentId] = useState("");
  const [examName, setExamName] = useState("");
  const [subjectCode, setSubjectCode] = useState("");
  const [studentRoll, setStudentRoll] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  // Dummy data
  const results = [
    {
      studentId: 1,
      name: "John Doe",
      shift: "Morning",
      roll: 1,
      classSection: "A",
      group: "Science",
      marks: 90,
      grade: "A+",
      issueDate: "2023-07-15",
      issuedBy: "Teacher A",
      examinedBy: "Teacher B",
      examCode: "EXM001",
      subjectCode: "SBJ001",
    },
    // Add more result objects here
  ];

  const handleSearch = () => {
    const filtered = results.filter((result) => {
      const studentIdMatch = result.studentId.toString().includes(studentId);
      const examNameMatch = result.name
        .toLowerCase()
        .includes(examName.toLowerCase());
      const subjectCodeMatch = result.subjectCode
        .toLowerCase()
        .includes(subjectCode.toLowerCase());
      const studentRollMatch = result.roll.toString().includes(studentRoll);

      return (
        studentIdMatch || examNameMatch || subjectCodeMatch || studentRollMatch
      );
    });

    setFilteredResults(filtered);
  };

  return (
    <div className="2xl:w-[79.3%] relative top-24 2xl:left-[360px]">
      <div className="text-[17px] font-semibold breadcrumbs mb-8">
        <ul>
          <li className="hover:text-[#FFBE15] ">
            <Link to={`/dashboard/teacher`}>Dashboard</Link>
          </li>
          <li>Results</li>
          <li className="text-[#FFBE15]">Show Results</li>
        </ul>
      </div>
      <div className="bg-white 2xl:px-8 2xl:py-10">
        <h2 className="text-2xl font-bold mb-4">Show Result Table</h2>

        <div className="flex items-center gap-4 mb-4">
          <input
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            placeholder="Student ID"
            className="p-2 border border-gray-300 focus:outline-none"
          />
          <input
            type="text"
            value={examName}
            onChange={(e) => setExamName(e.target.value)}
            placeholder="Exam Name"
            className="p-2 border border-gray-300 focus:outline-none"
          />
          <input
            type="text"
            value={subjectCode}
            onChange={(e) => setSubjectCode(e.target.value)}
            placeholder="Subject Code"
            className="p-2 border border-gray-300 focus:outline-none"
          />
          <input
            type="text"
            value={studentRoll}
            onChange={(e) => setStudentRoll(e.target.value)}
            placeholder="Student Roll"
            className="p-2 border border-gray-300 focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded flex items-center"
          >
            <BiSearch className="h-5 w-5 mr-2" />
            <p>Search</p>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead>
              <tr>
                <th className="p-2">Student ID</th>
                <th className="p-2">Name</th>
                <th className="p-2">Shift</th>
                <th className="p-2">Roll</th>
                <th className="p-2">Class Section</th>
                <th className="p-2">Group</th>
                <th className="p-2">Marks</th>
                <th className="p-2">Grade</th>
                <th className="p-2">Issue Date</th>
                <th className="p-2">Issued By</th>
                <th className="p-2">Examined By</th>
                <th className="p-2">Exam Code</th>
                <th className="p-2">Subject Code</th>
              </tr>
            </thead>
            <tbody>
              {filteredResults.length > 0
                ? filteredResults.map((result) => (
                    <tr key={result.studentId}>
                      <td className="p-2">{result.studentId}</td>
                      <td className="p-2">{result.name}</td>
                      <td className="p-2">{result.shift}</td>
                      <td className="p-2">{result.roll}</td>
                      <td className="p-2">{result.classSection}</td>
                      <td className="p-2">{result.group}</td>
                      <td className="p-2">{result.marks}</td>
                      <td className="p-2">{result.grade}</td>
                      <td className="p-2">{result.issueDate}</td>
                      <td className="p-2">{result.issuedBy}</td>
                      <td className="p-2">{result.examinedBy}</td>
                      <td className="p-2">{result.examCode}</td>
                      <td className="p-2">{result.subjectCode}</td>
                    </tr>
                  ))
                : results.map((result) => (
                    <tr
                      key={result.studentId}
                      className="text-center border hover"
                    >
                      <td className="p-2">{result.studentId}</td>
                      <td className="p-2">{result.name}</td>
                      <td className="p-2">{result.shift}</td>
                      <td className="p-2">{result.roll}</td>
                      <td className="p-2">{result.classSection}</td>
                      <td className="p-2">{result.group}</td>
                      <td className="p-2">{result.marks}</td>
                      <td className="p-2">{result.grade}</td>
                      <td className="p-2">{result.issueDate}</td>
                      <td className="p-2">{result.issuedBy}</td>
                      <td className="p-2">{result.examinedBy}</td>
                      <td className="p-2">{result.examCode}</td>
                      <td className="p-2">{result.subjectCode}</td>
                    </tr>
                  ))}
            </tbody>
          </table>
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

export default ShowAllStudentResult;
