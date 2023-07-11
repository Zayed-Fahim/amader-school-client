import React, { useContext, useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Website/Home/Home";
import Blog from "../../Pages/Website/Blog/Blog";
import Dashboard from "../../Layout/Dashboard/Dashboard";
import DashboardHome from "../../Pages/Dashboard/Home/DashboardHome/DashboardHome";
import StudentDetails from "../../Pages/Dashboard/Home/Admin/StudentFolder/StudentDetails/StudentDetails";
import AddTeacher from "../../Pages/Dashboard/Home/Admin/TeacherFolder/AddTeacher/AddTeacher";
import ErrorRoute from "../../Pages/Website/ErrorRoute/ErrorRoute";
import TeacherDetails from "../../Pages/Dashboard/Home/Admin/TeacherFolder/TeacherDetails/TeacherDetails";
import EveryClassSchedule from "../../Pages/Dashboard/Home/Admin/ClassScheduleFolder/EveryClassSchedule/EveryClassSchedule";
import AddNewClassSchedule from "../../Pages/Dashboard/Home/Admin/ClassScheduleFolder/AddNewClassSchedule/AddNewClassSchedule";
import Subjects from "../../Pages/Dashboard/Home/Admin/SubjectsFolder/Subjects/Subjects";
import MorningShiftRoutine from "../../Pages/Dashboard/Home/Admin/RoutineFolder/MorningShift/MorningShiftRoutine";
import DayShiftRoutine from "../../Pages/Dashboard/Home/Admin/RoutineFolder/DayShift/DayShiftRoutine";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import LoginRole from "../../Pages/LoginRole/LoginRole";
import AdminLogin from "../../Pages/Login/AdminLogin/AdminLogin";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import TeacherLogin from "../../Pages/Login/TeacherLogin/TeacherLogin";
import StudentLogin from "../../Pages/Login/StudentLogin/StudentLogin";
import AdmissionForm from "../../Pages/Dashboard/Home/Teacher/StudentFolder/AdmissionForm/AdmissionForm";
import TeacherAttendance from "../../Pages/Dashboard/Home/Admin/AttendanceFolder/TeacherAttendance/TeacherAttendance";
import TeacherAttendanceView from "../../Pages/Dashboard/Home/Admin/AttendanceFolder/TeacherAttendanceViewTable/TeacherAttendanceView";
import ExamSchedule from "../../Pages/Dashboard/Home/Admin/AttendanceFolder/ExamFolder/ExamSchedule/ExamSchedule";
import ExamGrades from "../../Pages/Dashboard/Home/Admin/AttendanceFolder/ExamFolder/ExamGrades/ExamGrades";
import AdvertisedStudent from "../../Pages/Dashboard/Home/Teacher/StudentFolder/AdvertisedStudent/AdvertisedStudent";

const Routes = () => {
  const { admin, student, teacher } = useContext(AuthContext);
  const [path, setPath] = useState();

  useEffect(() => {
    const role =
      admin?.role?.toLowerCase() ||
      teacher?.role?.toLowerCase() ||
      student?.role?.toLowerCase();
    setPath(role);
  }, [admin?.role, teacher?.role, student?.role]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
      ],
    },
    {
      path: "/select-role/login/admin",
      element: <AdminLogin />,
    },
    {
      path: "/select-role/login/teacher",
      element: <TeacherLogin />,
    },
    {
      path: "/select-role/login/student",
      element: <StudentLogin />,
    },
    {
      path: "/select-role",
      element: <LoginRole />,
    },
    {
      path: "*",
      element: <ErrorRoute />,
    },
    {
      path: `/dashboard/${path}`,
      element: (
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      ),
      children: [
        {
          path: `/dashboard/${path}`,
          element: (
            <PrivateRoute>
              <DashboardHome />
            </PrivateRoute>
          ),
        },

        {
          path: `/dashboard/${path}/students/student-information`,
          element: <StudentDetails />,
        },

        {
          path: `/dashboard/${path}/teachers/teacher-information`,
          element: <TeacherDetails />,
        },
        {
          path: `/dashboard/${path}/teachers/add-teacher`,
          element: <AddTeacher />,
        },

        {
          path: `/dashboard/${path}/class-schedule/every-class-schedule`,
          element: <EveryClassSchedule />,
        },
        {
          path: `/dashboard/${path}/class-schedule/add-new-class-schedule`,
          element: <AddNewClassSchedule />,
        },
        {
          path: `/dashboard/${path}/add-subject&all-subjects`,
          element: <Subjects />,
        },
        {
          path: `/dashboard/${path}/class-routine/morning-shift`,
          element: <MorningShiftRoutine />,
        },
        {
          path: `/dashboard/${path}/class-routine/day-shift`,
          element: <DayShiftRoutine />,
        },
        {
          path: `/dashboard/${path}/attendance/teacher-attendance`,
          element: <TeacherAttendance />,
        },
        {
          path: `/dashboard/${path}/attendance/teacher-attendance-table`,
          element: <TeacherAttendanceView />,
        },
        {
          path: `/dashboard/${path}/exams/exams-schedule`,
          element: <ExamSchedule />,
        },
        {
          path: `/dashboard/${path}/exams/exam-grades`,
          element: <ExamGrades />,
        },
        {
          path: `/dashboard/${path}/students/advertised-students`,
          element: <AdvertisedStudent />,
        },
        {
          path: `/dashboard/${path}/students/admission-form`,
          element: <AdmissionForm />,
        },
      ],
    },

    // {
    //   path: `/dashboard/${teacher?.role?.toLowerCase()}`,
    //   element: (
    //     <PrivateRoute>
    //       <Dashboard />
    //     </PrivateRoute>
    //   ),
    //   children: [
    //     {
    //       path: `/dashboard/${teacher?.role?.toLowerCase()}`,
    //       element: (
    //         <PrivateRoute>
    //           <DashboardHome />
    //         </PrivateRoute>
    //       ),
    //     },
    //   ],
    // },

    // {
    //   path: `/dashboard/${student?.role?.toLowerCase()}`,
    //   element: (
    //     <PrivateRoute>
    //       <Dashboard />
    //     </PrivateRoute>
    //   ),
    //   children: [
    //     {
    //       path: `/dashboard/${student?.role?.toLowerCase()}`,
    //       element: (
    //         <PrivateRoute>
    //           <DashboardHome />
    //         </PrivateRoute>
    //       ),
    //     },
    //   ],
    // },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;
