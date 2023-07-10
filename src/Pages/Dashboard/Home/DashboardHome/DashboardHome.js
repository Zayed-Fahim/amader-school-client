import React, { useContext } from "react";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";
import Admin from "../Admin/Admin/Admin";
import Teacher from "../Teacher/Teacher/Teacher";
import Student from "../Student/Student/Student";

const DashboardHome = () => {
  const { admin, student, teacher } = useContext(AuthContext);
  let content;
  if (admin?.role === "Admin") {
    return (content = <Admin />);
  }
  if (teacher?.role === "Teacher") {
    return (content = <Teacher />);
  }
  if (student?.role === "Student") {
    return (content = <Student />);
  }
  return (
    <div className="flex flex-col h-full overflow-y-hidden overflow-x-hidden">
      {content}
    </div>
  );
};

export default DashboardHome;
