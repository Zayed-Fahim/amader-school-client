import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import icon from "../../../../../Assets/dashboard-icon/dashboard.png";
import { AuthContext } from "../../../../../Contexts/AuthProvider/AuthProvider";

const ResultTable = () => {
  const { student } = useContext(AuthContext);
  const [searchSubjectCode, setSearchSubjectCode] = useState("");
  const [searchExamName, setSearchExamName] = useState("");
  const [searchSubjectName, setSearchSubjectName] = useState("");
  const [showAllResults, setShowAllResults] = useState(true);

  const handleSubjectCodeChange = (e) => {
    setSearchSubjectCode(e.target.value.toLowerCase());
    setShowAllResults(false);
  };

  const handleSubjectNameChange = (e) => {
    setSearchSubjectName(e.target.value.toLowerCase());
    setShowAllResults(false);
  };

  const handleShowAll = () => {
    setSearchExamName("");
    setSearchSubjectCode("");
    setSearchSubjectName("");
    setShowAllResults(true);
  };

  const filteredResults = student?.results?.filter(
    (result) =>
      result?.examType?.includes(searchExamName) &&
      result?.subjectCode?.toLowerCase().includes(searchSubjectCode) &&
      result?.subjectName?.toLowerCase().includes(searchSubjectName)
  );

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
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-5 items-center">
              <select
                value={searchExamName}
                onChange={(e) => setSearchExamName(e.target.value)}
                className="p-2 border border-gray-300 rounded focus:outline-none"
              >
                <option value="" readOnly>
                  Select Exam Type
                </option>
                <option value="CT">CT</option>
                <option value="First Term">First Term</option>
                <option value="Mid Term">Mid Term</option>
                <option value="Annual Exam">Annual Exam</option>
                <option value="Test Exam">Test Exam</option>
              </select>
              <input
                type="text"
                placeholder="Search by Subject Code"
                value={searchSubjectCode}
                onChange={handleSubjectCodeChange}
                className="p-2 border border-gray-300 rounded focus:outline-none"
              />
              <input
                type="text"
                placeholder="Search by Subject Name"
                value={searchSubjectName}
                onChange={handleSubjectNameChange}
                className="p-2 border border-gray-300 rounded focus:outline-none"
              />
            </div>
            {!showAllResults && (
              <button
                onClick={handleShowAll}
                className="px-4 py-2 border border-blue-500 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
              >
                Show All
              </button>
            )}
          </div>
          {filteredResults.length === 0 && !showAllResults ? (
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
                  <th>Letter Grade</th>
                  <th>Grade Point</th>
                  <th>Marks</th>
                </tr>
              </thead>
              <tbody>
                {showAllResults
                  ? student.results.map((result) => (
                      <tr key={result.id} className="text-[14px]">
                        <td>{result.examType}</td>
                        <td>{result.studentId}</td>
                        <td>{result.studentName}</td>
                        <td>{result.rollNumber}</td>
                        <td>{result.subjectName}</td>
                        <td>{result.subjectCode.toUpperCase()}</td>
                        <td>{result.letterGrade}</td>
                        <td>{result.gradePoint}</td>
                        <td>{result.marks}</td>
                      </tr>
                    ))
                  : filteredResults.map((result) => (
                      <tr key={result.id} className="text-[14px]">
                        <td>{result.examType}</td>
                        <td>{result.studentId}</td>
                        <td>{result.studentName}</td>
                        <td>{result.rollNumber}</td>
                        <td>{result.subjectName}</td>
                        <td>{result.subjectCode.toUpperCase()}</td>
                        <td>{result.letterGrade}</td>
                        <td>{result.gradePoint}</td>
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
