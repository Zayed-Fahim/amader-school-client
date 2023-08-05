import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import icon from "../../../../../../../Assets/dashboard-icon/dashboard.png";
import Pagination from "../../../../SmallComponents/Pagination/Pagination";
import { BsPencil, BsSearch, BsTrash } from "react-icons/bs";
import { AuthContext } from "../../../../../../../Contexts/AuthProvider/AuthProvider";

const ExamGrades = () => {
  const { admin } = useContext(AuthContext);
  // const [filteredGrades, setFilteredGrades] = useState(admin.results);
  const [searchTerm, setSearchTerm] = useState("");
  let data = 10;
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(10);
  const pages = Math.ceil(data / count);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // filterGrades(e.target.value);
  };

  // const filterGrades = (searchTerm) => {
  //   const filteredData = grades.filter((grade) =>
  //     grade.studentName.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   setFilteredGrades(filteredData);
  // };
  console.log(admin.results);
  return (
    <div className="min-h-[89vh] relative 2xl:left-[360px] top-24 2xl:w-[79.3%] ">
      <div className="text-[17px] font-semibold breadcrumbs mb-8">
        <ul>
          <li className="hover:text-[#FFBE15] ">
            <Link to={`/dashboard/admin`}>Dashboard</Link>
          </li>
          <li>Exams</li>
          <li className="text-[#FFBE15]">Exam Grades</li>
        </ul>
      </div>
      <div className=" bg-white px-8 min-h-[700px]">
        <h1 className="text-2xl font-bold py-10">Exam Grades</h1>

        <form className="flex justify-between items-center">
          <div className="flex gap-5">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search by student name"
                value={searchTerm}
                onChange={handleSearch}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search by student name"
                value={searchTerm}
                onChange={handleSearch}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search by student name"
                value={searchTerm}
                onChange={handleSearch}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
          </div>
          <button className="px-4 py-1 font-semibold rounded-lg bg-[#FFBE15] flex gap-1 justify-center items-center hover:text-white">
            <BsSearch />
            SEARCH
          </button>
        </form>

        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Exam Name</th>
              <th className="px-4 py-2">Subject</th>
              <th className="px-4 py-2">Subject Code</th>
              <th className="px-4 py-2">Student ID</th>
              <th className="px-4 py-2">Student Name</th>
              <th className="px-4 py-2">Class</th>
              <th className="px-4 py-2">Section</th>
              <th className="px-4 py-2">Marks</th>
              <th className="px-4 py-2">Letter Grade</th>
              <th className="px-4 py-2">Grade Point</th>
              <th className="px-4 py-2">Examined By</th>
              <th className="px-4 py-2">Issue Date</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {admin?.results?.map((result) => (
              <tr key={result.studentId} className="text-center border">
                <td className="px-4 py-2 border">{result.examType}</td>
                <td className="border px-4 py-2 ">{result.subjectName}</td>
                <td className="px-4 py-2 border">{result.subjectCode}</td>
                <td className="border px-4 py-2">{result.studentId}</td>
                <td className="border px-4 py-2">{result.studentName}</td>
                <td className="px-4 py-2 border">{result.studentClass}</td>
                <td className="px-4 py-2 border">{result.section}</td>
                <td className="px-4 py-2 border">{result.marks}</td>
                <td className="border px-4 py-2">{result.letterGrade}</td>
                <td className="border px-4 py-2">{result.gradePoint}</td>
                <td className="px-4 py-2 border">{result.examinedBy}</td>
                <td className="px-4 py-2 border">{result.issueDate}</td>
                <td className="border px-4 py-2 ">
                  <button className="hover:text-[#FFBE15] hover:scale-110 mr-4">
                    <BsPencil title="Edit" />{" "}
                    {/* Replace "Edit" text with the edit icon */}
                  </button>
                  <button className="hover:text-red-500 hover:scale-110">
                    <BsTrash title="Delete" />
                    {/* Replace "Delete" text with the delete icon */}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination pages={pages} setPage={setPage} page={page} />
      </div>
      <div className="container flex items-center justify-center xl:gap-2 lg:gap-2 gap-1 xl:text-[18px] font-semibold text-black h-[100px] mb-24">
        <h1 className="xl:text-[18px] font-semibold text-black">
          Copyright © 2023 - All right reserved by
        </h1>
        <img className="h-[26px] mt-[6.5px]" src={icon} alt="amader-school" />
        <h1>Ltd.</h1>
      </div>
    </div>
  );
};

export default ExamGrades;
