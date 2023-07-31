import React, { useContext, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import icon from "../../../../../../Assets/dashboard-icon/dashboard.png";
import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";
import { MdDelete, MdEdit } from "react-icons/md";

const ShowAllStudentResult = () => {
  const { teacher } = useContext(AuthContext);
  const [searchInputs, setSearchInputs] = useState({
    studentId: "",
    examType: "",
    subjectCode: "",
    studentRoll: "",
  });
  const [filteredResults, setFilteredResults] = useState(teacher?.results);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleSearch = () => {
    const { studentId, examType, subjectCode, studentRoll } = searchInputs;
    const filtered = teacher?.results.filter((result) => {
      const studentIdMatch = result?.studentId?.includes(studentId);
      const examTypeMatch = result?.examType?.includes(examType);
      const subjectCodeMatch = result?.subjectCode?.includes(subjectCode);
      const studentRollMatch = result?.rollNumber
        ?.toString()
        .includes(studentRoll.toString());
      return (
        studentIdMatch && examTypeMatch && subjectCodeMatch && studentRollMatch
      );
    });

    setFilteredResults(filtered);
    setIsSearchActive(true);
  };

  // const handleEdit = (result) => {
  //   // Implement the edit functionality here
  //   console.log("Editing result:", result);
  // };

  const handleDelete = (result) => {
    // Implement the delete functionality here
    console.log("Deleting result:", result);
  };

  const handleShowAll = () => {
    setFilteredResults(teacher?.results);
    setIsSearchActive(false);
    setSearchInputs({
      studentId: "",
      examType: "",
      subjectCode: "",
      studentRoll: "",
    });
  };

  const handleClearSearch = () => {
    setSearchInputs({
      studentId: "",
      examType: "",
      subjectCode: "",
      studentRoll: "",
    });
    setIsSearchActive(false);
    setFilteredResults(teacher?.results);
  };

  const hasSearchInput = () => {
    const { studentId, examType, subjectCode, studentRoll } = searchInputs;
    return !!studentId || !!examType || !!subjectCode || !!studentRoll;
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
        <h2 className="text-2xl font-bold mb-4">Result Table</h2>
        <div className="flex items-center gap-4 mb-4">
          <select
            readOnly
            value={searchInputs.examType}
            onChange={(e) =>
              setSearchInputs({ ...searchInputs, examType: e.target.value })
            }
            className="p-2 border border-gray-300 focus:outline-none"
          >
            <option value="">Select Exam Type</option>
            <option value="CT">CT</option>
            <option value="First Term">First Term</option>
            <option value="Mid Term">Mid Term</option>
            <option value="Annual Exam">Annual Exam</option>
            <option value="Test Exam">Test Exam</option>
          </select>
          <input
            type="text"
            value={searchInputs.subjectCode}
            onChange={(e) =>
              setSearchInputs({
                ...searchInputs,
                subjectCode: e.target.value.toUpperCase(),
              })
            }
            placeholder="Subject Code"
            className="p-2 border border-gray-300 focus:outline-none"
          />
          <input
            type="text"
            value={searchInputs.studentId}
            onChange={(e) =>
              setSearchInputs({
                ...searchInputs,
                studentId: e.target.value.toUpperCase(),
              })
            }
            placeholder="Student ID"
            className="p-2 border border-gray-300 focus:outline-none"
          />
          <input
            type="number"
            min={0}
            value={searchInputs.studentRoll}
            onChange={(e) =>
              setSearchInputs({
                ...searchInputs,
                studentRoll: e.target.value,
              })
            }
            placeholder="Student Roll"
            className="p-2 border border-gray-300 focus:outline-none"
          />

          {isSearchActive ? (
            <button
              onClick={handleClearSearch}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded flex items-center"
            >
              <BiSearch className="h-5 w-5 mr-2" />
              <p>Clear Search</p>
            </button>
          ) : (
            <button
              onClick={handleSearch}
              className={`${
                hasSearchInput() ? "bg-gray-300" : "bg-gray-400"
              } text-gray-700 px-4 py-2 rounded flex items-center`}
              disabled={!hasSearchInput()}
            >
              <BiSearch className="h-5 w-5 mr-2" />
              <p>Search</p>
            </button>
          )}
        </div>

        <div className="overflow-x-auto">
          {filteredResults === null ? (
            <table className="w-full border border-gray-300">
              <thead>
                <tr className="text-left">
                  <th className="p-2 text-sm">Exam Type</th>
                  <th className="p-2 text-sm">Subject Code</th>
                  <th className="p-2 text-sm">Student ID</th>
                  <th className="p-2 text-sm">Name</th>
                  <th className="p-2 text-sm">Shift</th>
                  <th className="p-2 text-sm">Roll</th>
                  <th className="p-2 text-sm">Class</th>
                  <th className="p-2 text-sm">Section</th>
                  <th className="p-2 text-sm">Group</th>
                  <th className="p-2 text-sm">Marks</th>
                  <th className="p-2 text-sm">Letter Grade</th>
                  <th className="p-2 text-sm">Grade Point</th>
                  <th className="p-2 text-sm">Issue Date</th>
                  <th className="p-2 text-sm">Issued By</th>
                  <th className="p-2 text-sm">Examined By</th>
                  <th className="p-2 text-sm">Action</th>
                </tr>
              </thead>
              <tbody>
                {teacher?.results?.map((result, i) => (
                  <tr key={i} className="text-left border hover">
                    <td className="p-2">{result.examType}</td>
                    <td className="p-2">{result.subjectCode}</td>
                    <td className="p-2">{result.studentId}</td>
                    <td className="p-2">{result.studentName}</td>
                    <td className="p-2">{result.studentShift}</td>
                    <td className="p-2">{result.rollNumber}</td>
                    <td className="p-2">{result.studentClass}</td>
                    <td className="p-2">{result.section}</td>
                    <td className="p-2">{result.group}</td>
                    <td className="p-2">{result.marks}</td>
                    <td className="p-2">{result.letterGrade}</td>
                    <td className="p-2">{result.gradePoint}</td>
                    <td className="p-2">{result.issueDate}</td>
                    <td className="p-2">{result.issuedBy}</td>
                    <td className="p-2">{result.examinedBy}</td>
                    <td className="py-2 px-5 flex gap-2">
                      {/* <button
                        onClick={() => handleEdit(result)}
                        className="text-yellow-500 hover:scale-110"
                      >
                        <MdEdit title="Edit" />
                      </button> */}
                      <button
                        onClick={() => handleDelete(result)}
                        className="text-red-500 hover:scale-110 text-center"
                      >
                        <MdDelete title="Delete" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : filteredResults.length > 0 ? (
            <table className="w-full border border-gray-300">
              <thead>
                <tr className="text-left">
                  <th className="p-2 text-sm">Exam Type</th>
                  <th className="p-2 text-sm">Subject Code</th>
                  <th className="p-2 text-sm">Student ID</th>
                  <th className="p-2 text-sm">Name</th>
                  <th className="p-2 text-sm">Shift</th>
                  <th className="p-2 text-sm">Roll</th>
                  <th className="p-2 text-sm">Class</th>
                  <th className="p-2 text-sm">Section</th>
                  <th className="p-2 text-sm">Group</th>
                  <th className="p-2 text-sm">Marks</th>
                  <th className="p-2 text-sm">Letter Grade</th>
                  <th className="p-2 text-sm">Grade Point</th>
                  <th className="p-2 text-sm">Issue Date</th>
                  <th className="p-2 text-sm">Issued By</th>
                  <th className="p-2 text-sm">Examined By</th>
                  <th className="p-2 text-sm">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredResults.map((result, i) => (
                  <tr key={i} className="text-left border hover">
                    <td className="p-2">{result.examType}</td>
                    <td className="p-2">{result.subjectCode}</td>
                    <td className="p-2">{result.studentId}</td>
                    <td className="p-2">{result.studentName}</td>
                    <td className="p-2">{result.studentShift}</td>
                    <td className="p-2">{result.rollNumber}</td>
                    <td className="p-2">{result.studentClass}</td>
                    <td className="p-2">{result.section}</td>
                    <td className="p-2">{result.group}</td>
                    <td className="p-2">{result.marks}</td>
                    <td className="p-2">{result.letterGrade}</td>
                    <td className="p-2">{result.gradePoint}</td>
                    <td className="p-2">{result.issueDate}</td>
                    <td className="p-2">{result.issuedBy}</td>
                    <td className="p-2">{result.examinedBy}</td>
                    <td className="py-2 px-5 flex gap-2">
                      {/* <button
                        onClick={() => handleEdit(result)}
                        className="text-yellow-500 hover:scale-110"
                      >
                        <MdEdit title="Edit" />
                      </button> */}
                      <button
                        onClick={() => handleDelete(result)}
                        className="text-red-500 hover:scale-110"
                      >
                        <MdDelete title="Delete" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No results found</p>
          )}
        </div>
        {isSearchActive && (
          <div className="mt-4">
            <button
              onClick={handleShowAll}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded flex items-center"
            >
              Show All
            </button>
          </div>
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

export default ShowAllStudentResult;
