// import React, { createContext, useEffect, useState } from "react";
// import LoadingComponent from "../../Pages/Loading/LoadingComponent";

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [admin, setAdmin] = useState({});
//   const [teacher, setTeacher] = useState({});
//   const [student, setStudent] = useState({});
//   const [isLoading, setIsLoading] = useState(true);

//   console.log(admin);
//   console.log(teacher);
//   console.log(student);

//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const verifyAdmin = async () => {
//       if (token) {
//         try {
//           const response = await fetch(
//             "https://v1-amader-school-server.vercel.app/api/v1/admin-login/verify-admin",
//             {
//               headers: {
//                 Authorization: `${token}`,
//               },
//             }
//           );
//           const data = await response.json();
//           setAdmin(data?.payload?.admin);
//         } catch (error) {
//           console.error("Error verifying admin:", error);
//         } finally {
//           setIsLoading(false);
//         }
//       } else {
//         setIsLoading(false);
//       }
//     };

//     verifyAdmin();
//   }, [token]);

//   useEffect(() => {
//     const verifyTeacher = async () => {
//       if (token) {
//         try {
//           const response = await fetch(
//             "https://v1-amader-school-server.vercel.app/api/v1/teacher-login/verify-teacher",
//             {
//               headers: {
//                 Authorization: `${token}`,
//               },
//             }
//           );
//           const data = await response.json();
//           setTeacher(data?.payload?.teacher);
//         } catch (error) {
//           console.error("Error verifying teacher:", error);
//         } finally {
//           setIsLoading(false);
//         }
//       } else {
//         setIsLoading(false);
//       }
//     };

//     verifyTeacher();
//   }, [token]);

//   useEffect(() => {
//     const verifyStudent = async () => {
//       if (token) {
//         try {
//           const response = await fetch(
//             "https://v1-amader-school-server.vercel.app/api/v1/student-login/verify-student",
//             {
//               headers: {
//                 Authorization: `${token}`,
//               },
//             }
//           );
//           const data = await response.json();
//           setStudent(data?.payload?.student);
//         } catch (error) {
//           console.error("Error verifying student:", error);
//         } finally {
//           setIsLoading(false);
//         }
//       } else {
//         setIsLoading(false);
//       }
//     };

//     verifyStudent();
//   }, [token]);

//   if (isLoading) {
//     return <LoadingComponent />;
//   }

//   const authInfo = {
//     admin,
//     teacher,
//     student,
//     setIsLoading,
//     isLoading,
//   };

//   return (
//     <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
//   );
// };

// export default AuthProvider;

import React, { createContext, useEffect, useState } from "react";
import LoadingComponent from "../../Pages/Loading/LoadingComponent";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState({});
  const [teacher, setTeacher] = useState({});
  const [student, setStudent] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const token = localStorage.getItem("token");

  const fetchAdminData = async () => {
    const response = await fetch(
      "https://v1-amader-school-server.vercel.app/api/v1/admin-login/verify-admin",
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return response.json();
  };

  const fetchTeacherData = async () => {
    const response = await fetch(
      "https://v1-amader-school-server.vercel.app/api/v1/teacher-login/verify-teacher",
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return response.json();
  };

  const fetchStudentData = async () => {
    const response = await fetch(
      "https://v1-amader-school-server.vercel.app/api/v1/student-login/verify-student",
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return response.json();
  };

  useEffect(() => {
    const verifyUser = async () => {
      if (token) {
        try {
          const adminResponse = fetchAdminData();
          const teacherResponse = fetchTeacherData();
          const studentResponse = fetchStudentData();

          // Wait for all API calls to complete
          const [adminData, teacherData, studentData] = await Promise.all([
            adminResponse,
            teacherResponse,
            studentResponse,
          ]);

          // Set the user data
          setAdmin(adminData?.payload?.admin || {});
          setTeacher(teacherData?.payload?.teacher || {});
          setStudent(studentData?.payload?.student || {});
        } catch (error) {
          console.error("Error verifying user:", error);
        } finally {
          // Set loading to false after all API calls are finished
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    };

    verifyUser();
  }, [token]);

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <AuthContext.Provider value={{ admin, teacher, student, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
