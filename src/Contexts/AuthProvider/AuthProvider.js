import { useQuery } from "@tanstack/react-query";
import React, { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [admin, setAdmin] = useState({});
  const [teacher, setTeacher] = useState({});
  const [student, setStudent] = useState({});

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/students")
      .then((res) => res.json())
      .then((data) => setStudents(data.payload.result));

    fetch("http://localhost:8080/api/v1/teachers")
      .then((res) => res.json())
      .then((data) => setTeachers(data.payload.result));

    fetch("http://localhost:8080/api/v1/admins")
      .then((res) => res.json())
      .then((data) => setAdmins(data.payload.result));

    fetch("http://localhost:8080/api/v1/expenses")
      .then((res) => res.json())
      .then((data) => setExpenses(data.payload.result));
  }, []);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const verifyAdmin = async () => {
      if (token) {
        await fetch("http://localhost:8080/api/v1/admin-login/verify-admin", {
          headers: {
            Authorization: `${token}`,
          },
        })
          .then((res) => res.json())
          .then((data) => setAdmin(data?.payload?.admin));
      }
      return;
    };
    verifyAdmin();
  }, [token]);

  useEffect(() => {
    const verifyTeacher = async () => {
      if (token) {
        await fetch(
          "http://localhost:8080/api/v1/teacher-login/verify-teacher",
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        )
          .then((res) => res.json())
          .then((data) => setTeacher(data?.payload?.teacher));
      }
      return;
    };
    verifyTeacher();
  }, [token]);

  useEffect(() => {
    const verifyStudent = async () => {
      if (token) {
        await fetch(
          "http://localhost:8080/api/v1/student-login/verify-Student",
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        )
          .then((res) => res.json())
          .then((data) => setStudent(data?.payload?.student));
      }
      return;
    };
    verifyStudent();
  }, [token]);

  const { data: classSchedules = [], refetch } = useQuery({
    queryKey: ["classSchedule"],
    queryFn: async () => {
      const res = await fetch("http://localhost:8080/api/v1/class-schedules");
      const data = await res.json();
      const classSchedule = await data.payload.result;
      return classSchedule;
    },
  });

  const authInfo = {
    admins,
    teachers,
    refetch,
    classSchedules,
    students,
    expenses,
    admin,
    teacher,
    student,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
