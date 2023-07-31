import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import icon from "../../../../../../Assets/dashboard-icon/dashboard.png";
import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";
import axios from "axios";
import { toast } from "react-hot-toast";

const AddStudentResult = () => {
  const { teacher } = useContext(AuthContext);
  const [studentId, setStudentId] = useState("");
  const [name, setName] = useState("");
  const [examType, setExamType] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [subjectCode, setSubjectCode] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [marks, setMarks] = useState("");
  const [letterGrade, setLetterGrade] = useState("");
  const [gradePoint, setGradePoint] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [examinedBy, setExaminedBy] = useState("");

  const gradeData = [
    { classInterval: "80–100", letterGrade: "A+", gradePoint: "5.00" },
    { classInterval: "70-79", letterGrade: "A", gradePoint: "4.00" },
    { classInterval: "60–69", letterGrade: "A-", gradePoint: "3.50" },
    { classInterval: "50–59", letterGrade: "B", gradePoint: "3.25" },
    { classInterval: "40–49", letterGrade: "C", gradePoint: "2.00" },
    { classInterval: "33-39", letterGrade: "D", gradePoint: "1.00" },
    { classInterval: "0-32", letterGrade: "F", gradePoint: "0.00" },
  ];
  const [gradeOptions] = useState([
    { label: "A+", value: "5.00" },
    { label: "A", value: "4.00" },
    { label: "A-", value: "3.50" },
    { label: "B", value: "3.25" },
    { label: "C", value: "2.00" },
    { label: "D", value: "1.00" },
    { label: "F", value: "0.00" },
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultData = {
      classTeacher: { id: teacher._id },
      admin: { id: teacher?.admin?.id },
      studentId: studentId.toUpperCase(),
      studentName: name,
      examType,
      subjectName,
      subjectCode: subjectCode.toUpperCase(),
      studentShift: teacher?.shift,
      rollNumber,
      studentClass: teacher?.teacherOfClass,
      section: teacher?.sectionOfClass,
      group: teacher?.teacherOfGroup || "",
      marks,
      letterGrade,
      gradePoint,
      issueDate,
      issuedBy: teacher?.fullName,
      examinedBy,
    };

    try {
      await axios
        .post(
          "https://v1-amader-school-server.vercel.app/api/v1/student-result",
          resultData
        )
        .then((data) => {
          if (data.status === 200) {
            handleFormReset();
            toast.success("Result Added Successfully!!");
          }
        });
    } catch (error) {
      toast.error("Result Added Unsuccessful!!");
    }
  };
  const handleFormReset = () => {
    setName("");
    setStudentId("");
    setExamType("");
    setSubjectName("");
    setSubjectCode("");
    setRollNumber("");
    setMarks("");
    setLetterGrade("");
    setGradePoint("");
    setIssueDate("");
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
      <div className="flex gap-5">
        <div className="bg-white rounded shadow 2xl:px-8 2xl:py-10 2xl:w-[1000px] ">
          <h2 className="2xl:text-2xl font-bold">Add Student Result</h2>

          <form onSubmit={handleSubmit} className="mt-4">
            <div className="grid 2xl:grid-cols-2 gap-5">
              <div>
                <label className="block mb-1">Student ID:</label>
                <input
                  type="text"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  className="w-full border-gray-300 border rounded px-3 py-2 focus:outline-none uppercase"
                  required
                />
              </div>

              <div>
                <label className="block mb-1">Student Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border-gray-300 border rounded px-3 py-2 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block mb-1">Exam Type:</label>
                <select
                  readOnly
                  value={examType}
                  onChange={(e) => setExamType(e.target.value)}
                  className="w-full border-gray-300 border rounded px-3 py-2 focus:outline-none"
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
              </div>
              <div>
                <label className="block mb-1">Subject Name:</label>
                <input
                  type="text"
                  value={subjectName}
                  onChange={(e) => setSubjectName(e.target.value)}
                  className="w-full border-gray-300 border rounded px-3 py-2 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block mb-1">Subject Code:</label>
                <input
                  type="text"
                  value={subjectCode}
                  onChange={(e) => setSubjectCode(e.target.value)}
                  className="w-full border-gray-300 border rounded px-3 py-2 focus:outline-none uppercase"
                  required
                />
              </div>

              <div>
                <label className="block mb-1">Student Shift:</label>
                <input
                  type="text"
                  value={teacher?.shift}
                  className="w-full border-gray-300 border rounded px-3 py-2 focus:outline-none"
                  required
                  readOnly
                />
              </div>

              <div>
                <label className="block mb-1">Roll Number:</label>
                <input
                  type="number"
                  min={0}
                  value={rollNumber}
                  onChange={(e) => setRollNumber(e.target.value)}
                  className="w-full border-gray-300 border rounded px-3 py-2 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block mb-1">Class:</label>
                <input
                  type="text"
                  value={teacher?.teacherOfClass}
                  className="w-full border-gray-300 border rounded px-3 py-2 focus:outline-none"
                  required
                  readOnly
                />
              </div>

              <div>
                <label className="block mb-1">Section:</label>
                <input
                  type="text"
                  value={teacher?.sectionOfClass}
                  className="w-full border-gray-300 border rounded px-3 py-2 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block mb-1">Group:</label>
                <input
                  type="text"
                  value={teacher?.teacherOfGroup || ""}
                  className="w-full border-gray-300 border rounded px-3 py-2 focus:outline-none"
                  required
                  readOnly
                />
              </div>

              <div>
                <label className="block mb-1">Marks:</label>
                <input
                  type="number"
                  min={0}
                  value={marks}
                  onChange={(e) => setMarks(e.target.value)}
                  className="w-full border-gray-300 border rounded px-3 py-2 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block mb-1">Letter Grade:</label>
                <select
                  value={letterGrade}
                  onChange={(e) => setLetterGrade(e.target.value)}
                  className="w-full border-gray-300 border rounded px-3 py-2 focus:outline-none"
                  required
                >
                  <option value="">Select Letter Grade</option>
                  {gradeOptions.map((option) => (
                    <option key={option.label} value={option.label}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block mb-1">Grade Point:</label>
                <select
                  value={gradePoint}
                  onChange={(e) => setGradePoint(e.target.value)}
                  className="w-full border-gray-300 border rounded px-3 py-2 focus:outline-none"
                  required
                >
                  <option value="">Select Grade Point</option>
                  {gradeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.value}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-1">Issue Date:</label>
                <input
                  type="date"
                  value={issueDate}
                  onChange={(e) => setIssueDate(e.target.value)}
                  className="w-full border-gray-300 border rounded px-3 py-2 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block mb-1">Issued By:</label>
                <input
                  type="text"
                  value={teacher?.fullName}
                  className="w-full border-gray-300 border rounded px-3 py-2 focus:outline-none"
                  required
                  readOnly
                />
              </div>

              <div>
                <label className="block mb-1">Examined By:</label>
                <input
                  type="text"
                  value={examinedBy}
                  onChange={(e) => setExaminedBy(e.target.value)}
                  className="w-full border-gray-300 border rounded px-3 py-2 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="flex gap-5 mt-4">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded px-4 mt-4"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleFormReset}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold rounded px-4 py-2 mt-4"
              >
                Reset
              </button>
            </div>
          </form>
        </div>

        <div className="px-8 py-10 bg-white w-[500px] h-[490px] rounded">
          <h1 className="text-2xl font-bold mb-4">Grade Table</h1>
          <table className="table-fixed w-full">
            <thead>
              <tr>
                <th className="w-1/4 px-4 py-2">Class Interval</th>
                <th className="w-1/4 px-4 py-2">Letter Grade</th>
                <th className="w-1/4 px-4 py-2">Grade Point</th>
              </tr>
            </thead>
            <tbody>
              {gradeData.map((data, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{data.classInterval}</td>
                  <td className="border px-4 py-2">{data.letterGrade}</td>
                  <td className="border px-4 py-2">{data.gradePoint}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="container flex items-center justify-center xl:gap-2 lg:gap-2 gap-1 xl:text-[18px] font-semibold text-black h-[100px] mb-24 mt-4">
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
