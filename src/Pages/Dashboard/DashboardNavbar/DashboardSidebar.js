import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import AdminSidebar from "./AdminSidebar";
import TeacherSidebar from "./TeacherSidebar";
import StudentSidebar from "./StudentSidebar";

const DashboardSidebar = ({ isOpen, setIsOpen }) => {
  const { admin, student, teacher } = useContext(AuthContext);
  let content;
  if (admin?.role === "Admin") {
    return (content = <AdminSidebar isOpen={isOpen} setIsOpen={setIsOpen} />);
  }
  if (teacher?.role === "Teacher") {
    return (content = <TeacherSidebar isOpen={isOpen} setIsOpen={setIsOpen} />);
  }
  if (student?.role === "Student") {
    return (content = <StudentSidebar isOpen={isOpen} setIsOpen={setIsOpen} />);
  }
  return <div>{content}</div>;
};

export default DashboardSidebar;
