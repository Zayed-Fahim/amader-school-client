import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { admin, teacher, student } = useContext(AuthContext);
  const location = useLocation();

  if (admin) {
    return children;
  }
  if (teacher) {
    return children;
  }
  if (student) {
    return children;
  }

  return (
    <Navigate to="/select-role" state={{ form: location }} replace></Navigate>
  );
};

export default PrivateRoute;
