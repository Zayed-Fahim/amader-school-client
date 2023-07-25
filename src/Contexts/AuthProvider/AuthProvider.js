import React, { createContext, useEffect, useState } from "react";
import LoadingComponent from "../../Pages/Loading/LoadingComponent";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState({});
  const [teacher, setTeacher] = useState({});
  const [student, setStudent] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const verifyAdmin = async () => {
      if (token) {
        try {
          const response = await fetch(
            "https://amader-school-server-v1.vercel.app/api/v1/admin-login/verify-admin",
            {
              headers: {
                Authorization: `${token}`,
              },
            }
          );
          const data = await response.json();
          setAdmin(data?.payload?.admin);
        } catch (error) {
          console.error("Error verifying admin:", error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    };

    verifyAdmin();
  }, [token]);

  useEffect(() => {
    const verifyTeacher = async () => {
      if (token) {
        try {
          const response = await fetch(
            "https://amader-school-server-v1.vercel.app/api/v1/teacher-login/verify-teacher",
            {
              headers: {
                Authorization: `${token}`,
              },
            }
          );
          const data = await response.json();
          setTeacher(data?.payload?.teacher);
        } catch (error) {
          console.error("Error verifying teacher:", error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    };

    verifyTeacher();
  }, [token]);

  useEffect(() => {
    const verifyStudent = async () => {
      if (token) {
        try {
          const response = await fetch(
            "https://amader-school-server-v1.vercel.app/api/v1/student-login/verify-student",
            {
              headers: {
                Authorization: `${token}`,
              },
            }
          );
          const data = await response.json();
          setStudent(data?.payload?.student);
        } catch (error) {
          console.error("Error verifying student:", error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    };

    verifyStudent();
  }, [token]);

  if (isLoading) {
    return <LoadingComponent />;
  }

  const authInfo = {
    admin,
    teacher,
    student,
    setIsLoading,
    isLoading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
