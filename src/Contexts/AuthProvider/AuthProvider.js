// import React, { createContext, useEffect, useState } from "react";
// import LoadingComponent from "../../Pages/Loading/LoadingComponent";
// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [admin, setAdmin] = useState({});
//   const [teacher, setTeacher] = useState({});
//   const [student, setStudent] = useState({});
//   const [isLoading, setIsLoading] = useState(true);
//   console.log(admin);

//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const verifyAdmin = async () => {
//       if (token) {
//         await fetch("http://localhost:8080/api/v1/admin-login/verify-admin", {
//           headers: {
//             Authorization: `${token}`,
//           },
//         })
//           .then((res) => res.json())
//           .then((data) => setAdmin(data?.payload?.admin))
//           .finally(() => setIsLoading(false));
//       }
//       return;
//     };
//     verifyAdmin();
//   }, [token]);

//   useEffect(() => {
//     const verifyTeacher = async () => {
//       if (token) {
//         await fetch(
//           "http://localhost:8080/api/v1/teacher-login/verify-teacher",
//           {
//             headers: {
//               Authorization: `${token}`,
//             },
//           }
//         )
//           .then((res) => res.json())
//           .then((data) => setTeacher(data?.payload?.teacher));
//       }
//       return;
//     };
//     verifyTeacher();
//   }, [token]);

//   useEffect(() => {
//     const verifyStudent = async () => {
//       if (token) {
//         await fetch(
//           "http://localhost:8080/api/v1/student-login/verify-Student",
//           {
//             headers: {
//               Authorization: `${token}`,
//             },
//           }
//         )
//           .then((res) => res.json())
//           .then((data) => setStudent(data?.payload?.student));
//       }
//       return;
//     };
//     verifyStudent();
//   }, [token]);

//   const authInfo = {
//     admin,
//     teacher,
//     student,
//     setIsLoading,
//     isLoading,
//   };

//   if (isLoading) {
//     return <LoadingComponent />;
//   }

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

  console.log(teacher);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const verifyAdmin = async () => {
      if (token) {
        try {
          const response = await fetch(
            "http://localhost:8080/api/v1/admin-login/verify-admin",
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
            "http://localhost:8080/api/v1/teacher-login/verify-teacher",
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
            "http://localhost:8080/api/v1/student-login/verify-student",
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
