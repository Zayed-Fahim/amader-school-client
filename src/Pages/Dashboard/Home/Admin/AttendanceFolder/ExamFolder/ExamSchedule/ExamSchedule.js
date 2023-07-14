import React, { useState } from "react";
import { Link } from "react-router-dom";
import icon from "../../../../../../../Assets/dashboard-icon/dashboard.png";
import Pagination from "../../../../SmallComponents/Pagination/Pagination";

const ExamSchedule = () => {
  const [exams, setExams] = useState([]);
  let data = 10;
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(10);
  const pages = Math.ceil(data / count);
  const [examData, setExamData] = useState({
    examName: "",
    examCode: "",
    date: "",
    day: "",
    classroom: "",
    class: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setExams([...exams, examData]);
    setExamData({
      examName: "",
      examCode: "",
      date: "",
      day: "",
      classroom: "",
      class: "",
    });
  };

  const handleChange = (e) => {
    setExamData({ ...examData, [e.target.name]: e.target.value });
  };
  return (
    <div className="min-h-[89vh] relative 2xl:left-[360px] top-24 2xl:w-[79.3%]">
      <div className="text-[17px] font-semibold breadcrumbs mb-8">
        <ul>
          <li className="hover:text-[#FFBE15] ">
            <Link to={`/dashboard/admin`}>Dashboard</Link>
          </li>
          <li>Exams</li>
          <li>Exams Schedule</li>
        </ul>
      </div>
      <div className="flex gap-5 ">
        <div className="bg-white min-w-[580px]">
          <h1 className="text-2xl font-bold py-10 pl-8">Add Exam Schedule</h1>

          <form onSubmit={handleSubmit} className="px-8 pb-10">
            <div className="mb-4">
              <label className="block mb-1 font-bold">Exam Name</label>
              <input
                type="text"
                name="examName"
                value={examData.examName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-bold">Exam Code</label>
              <input
                type="text"
                name="examCode"
                value={examData.examCode}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-bold">Date</label>
              <input
                type="date"
                name="date"
                value={examData.date}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-bold">Day</label>
              <input
                type="text"
                name="day"
                value={examData.day}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-bold">Class</label>
              <input
                type="text"
                name="class"
                value={examData.class}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-bold">Classroom</label>
              <input
                type="text"
                name="classroom"
                value={examData.classroom}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-[#FFBE15] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Create Exam
            </button>
          </form>
        </div>

        <div className="bg-white px-8 font-2xl min-w-[910px]">
          <h2 className="text-2xl font-bold py-10">Exam Schedule</h2>
          <div className="overflow-x-auto">
            <table className="table border">
              {/* head */}
              <thead className="text-[16px] uppercase">
                <tr>
                  <th>Exam Code</th>
                  <th>Exam Name</th>
                  <th>Date</th>
                  <th>Day</th>
                  <th>Class</th>
                  <th>Classroom</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {exams.map((exam, index) => (
                  <tr key={index} className="hover">
                    <td>{exam.examCode}</td>
                    <td>{exam.examName}</td>
                    <td>{exam.date}</td>
                    <td>{exam.day}</td>
                    <td>{exam.class}</td>
                    <td>{exam.classroom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination pages={pages} setPage={setPage} page={page} />
        </div>
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

export default ExamSchedule;
