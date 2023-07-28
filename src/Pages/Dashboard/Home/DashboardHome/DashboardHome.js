import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";
import Admin from "../Admin/Admin/Admin";
import Teacher from "../Teacher/Teacher/Teacher";
import Student from "../Student/Student/Student";
import LoadingComponent from "../../../Loading/LoadingComponent";

const DashboardHome = () => {
  const { admin, student, teacher } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState(null);

  useEffect(() => {
    // Check if any of the user data (admin, teacher, student) is available
    if (admin?.role === "Admin") {
      setContent(<Admin />);
    } else if (teacher?.role === "Teacher") {
      setContent(<Teacher />);
    } else if (student?.role === "Student") {
      setContent(<Student />);
    } else {
      // No user data available yet, show loading component
      setIsLoading(false);
    }
  }, [admin, teacher, student]);

  useEffect(() => {
    // Check if all API calls to verify user data are completed
    if (admin || teacher || student) {
      setIsLoading(false);
    }
  }, [admin, teacher, student]);

  // Render loading component while waiting for API calls to complete
  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <div className="flex flex-col h-full overflow-y-hidden overflow-x-hidden">
      {content}
    </div>
  );
};

export default DashboardHome;
