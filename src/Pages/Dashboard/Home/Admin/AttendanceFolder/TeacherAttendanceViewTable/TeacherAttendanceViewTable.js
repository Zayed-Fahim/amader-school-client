import React from 'react';

const TeacherAttendanceViewTable = ({ teacherAttendance }) => {
  return (
    <table className="w-full mb-4 table border">
      <thead>
        <tr className="bg-base-200 text-[16px]">
          <th className="px-4 py-2">Status</th>
          <th className="px-4 py-2">ID</th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Shift</th>
        </tr>
      </thead>
      <tbody>
        {teacherAttendance.map((teacher) => (
          <tr key={teacher.id} className="hover">
            <td className="px-4 py-2">{teacher.status}</td>
            <td className="px-4 py-2">{teacher.id}</td>
            <td className="px-4 py-2">{teacher.name}</td>
            <td className="px-4 py-2">{teacher.shift}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TeacherAttendanceViewTable;