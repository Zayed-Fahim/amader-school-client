import React, { useState } from "react";
import { Link } from "react-router-dom";
import icon from "../../../../../../../Assets/dashboard-icon/dashboard.png";
import Pagination from "../../../../SmallComponents/Pagination/Pagination";
import { BsSearch } from "react-icons/bs";

const ExamGrades = () => {
  const gradesData = [
    {
      studentId: 1,
      studentName: "John",
      subject: "Math",
      grade: "A",
      examName: "Bangla",
      examId: "mid-term",
      examinedBy: "Zayed",
      class: "12",
      section: "F",
      marks: "90",
      issueDate: "11-12-23",
    },
    {
      studentId: 1,
      studentName: "John",
      subject: "Math",
      grade: "A",
      examName: "Bangla",
      examId: "mid-term",
      examinedBy: "Zayed",
      class: "12",
      section: "F",
      marks: "90",
      issueDate: "11-12-23",
    },
    {
      studentId: 2,
      studentName: "Jane",
      subject: "Science",
      grade: "B",
      examName: "Bangla",
      examId: "mid-term",
      examinedBy: "Zayed",
      class: "12",
      section: "F",
      marks: "90",
      issueDate: "11-12-23",
    },
    {
      studentId: 3,
      studentName: "Bob",
      subject: "English",
      grade: "C",
      examName: "Bangla",
      examId: "mid-term",
      examinedBy: "Zayed",
      class: "12",
      section: "F",
      marks: "90",
      issueDate: "11-12-23",
    },
    {
      studentId: 4,
      studentName: "Alice",
      subject: "History",
      grade: "A",
      examName: "Bangla",
      examId: "mid-term",
      examinedBy: "Zayed",
      class: "12",
      section: "F",
      marks: "90",
      issueDate: "11-12-23",
    },
    {
      studentId: 4,
      studentName: "Alice",
      subject: "History",
      grade: "A",
      examName: "Bangla",
      examId: "mid-term",
      examinedBy: "Zayed",
      class: "12",
      section: "F",
      marks: "90",
      issueDate: "11-12-23",
    },
  ];
  const [grades, setGrades] = useState(gradesData);
  const [filteredGrades, setFilteredGrades] = useState(gradesData);
  const [searchTerm, setSearchTerm] = useState("");
  let data = 10;
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(10);
  const pages = Math.ceil(data / count);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    filterGrades(e.target.value);
  };

  const filterGrades = (searchTerm) => {
    const filteredData = grades.filter((grade) =>
      grade.studentName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredGrades(filteredData);
  };

  const handleDelete = (id) => {
    const updatedGrades = grades.filter((grade) => grade.id !== id);
    setGrades(updatedGrades);
    setFilteredGrades(updatedGrades);
  };
  return (
    <div className="min-h-[89vh] relative 2xl:left-[360px] top-24 2xl:w-[79.3%] ">
      <div className="text-[17px] font-semibold breadcrumbs mb-8">
        <ul>
          <li className="hover:text-[#FFBE15] ">
            <Link to={`/dashboard/admin`}>Dashboard</Link>
          </li>
          <li>Exams</li>
          <li>Exam Grades</li>
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
              <th className="px-4 py-2">Exam Code</th>
              <th className="px-4 py-2">Exam Name</th>
              <th className="px-4 py-2">Student ID</th>
              <th className="px-4 py-2">Student Name</th>
              <th className="px-4 py-2">Class</th>
              <th className="px-4 py-2">Section</th>
              <th className="px-4 py-2">Subject</th>
              <th className="px-4 py-2">Grade</th>
              <th className="px-4 py-2">Marks</th>
              <th className="px-4 py-2">Examined By</th>
              <th className="px-4 py-2">Issue Date</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredGrades.map((grade) => (
              <tr key={grade.studentId} className="text-center border">
                <td className="px-4 py-2 border">{grade.examCode}</td>
                <td className="px-4 py-2 border">{grade.examName}</td>
                <td className="border px-4 py-2">{grade.studentId}</td>
                <td className="border px-4 py-2">{grade.studentName}</td>
                <td className="px-4 py-2 border">{grade.class}</td>
                <td className="px-4 py-2 border">{grade.section}</td>
                <td className="border px-4 py-2 ">{grade.subject}</td>
                <td className="border px-4 py-2">{grade.grade}</td>
                <td className="px-4 py-2 border">{grade.marks}</td>
                <td className="px-4 py-2 border">{grade.examinedBy}</td>
                <td className="px-4 py-2 border">{grade.issueDate}</td>
                <td className="border px-4 py-2 ">
                  <button className="btn bg-[#FFBE15] text-white hover:btn-primary mr-2">
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(grade.id)}
                  >
                    Delete
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
