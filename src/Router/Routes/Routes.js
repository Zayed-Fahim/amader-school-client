import React from "react";
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
import TeacherLogin from "../../Pages/Login/TeacherLogin/TeacherLogin";
import StudentLogin from "../../Pages/Login/StudentLogin/StudentLogin";
import AdmissionForm from "../../Pages/Dashboard/Home/Teacher/StudentFolder/AdmissionForm/AdmissionForm";
import TeacherAttendance from "../../Pages/Dashboard/Home/Admin/AttendanceFolder/TeacherAttendance/TeacherAttendance";
import TeacherAttendanceView from "../../Pages/Dashboard/Home/Admin/AttendanceFolder/TeacherAttendanceViewTable/TeacherAttendanceView";
import ExamSchedule from "../../Pages/Dashboard/Home/Admin/AttendanceFolder/ExamFolder/ExamSchedule/ExamSchedule";
import ExamGrades from "../../Pages/Dashboard/Home/Admin/AttendanceFolder/ExamFolder/ExamGrades/ExamGrades";
import AdvisedStudents from "../../Pages/Dashboard/Home/Teacher/StudentFolder/AdvisedStudents/AdvisedStudents";
import ClassScheduleViewTable from "../../Pages/Dashboard/Home/Teacher/ClassScheduleFolder/ClassScheduleViewTable";
import AttendanceViewTable from "../../Pages/Dashboard/Home/Teacher/AttendanceFolder/AttendanceViewTable";
import StudentAttendance from "../../Pages/Dashboard/Home/Teacher/StudentFolder/StudentAttendance/StudentAttendance";
import StudentAttendanceViewTable from "../../Pages/Dashboard/Home/Teacher/StudentFolder/StudentAttendanceViewTable/StudentAttendanceViewTable";
import AddStudentResult from "../../Pages/Dashboard/Home/Teacher/ResultFolder/AddStudentResult/AddStudentResult";
import ShowAllStudentResult from "../../Pages/Dashboard/Home/Teacher/ResultFolder/ShowAllStudentResult/ShowAllStudentResult";
import TeacherNoticeBoard from "../../Pages/Dashboard/Home/Teacher/NoticeBoard/TeacherEventsManager";
import ClassRoutine from "../../Pages/Dashboard/Home/Student/ClassRoutineFolder/ClassRoutine";
import MyAttendance from "../../Pages/Dashboard/Home/Student/AttendanceFolder/MyAttendance/MyAttendance";
import StudentExamSchedule from "../../Pages/Dashboard/Home/Student/ExamsFolder/StudentExamSchedule/StudentExamSchedule";
import ResultTable from "../../Pages/Dashboard/Home/Student/ResultFolder/ResultTable";
import StudentEvents from "../../Pages/Dashboard/Home/Student/EventsFolder/StudentEvents";
import StudentUpdateProfilePage from "../../Pages/Dashboard/Home/Student/AccountSettingFolder/StudentUpdateProfilePage";
import TeacherUpdateProfile from "../../Pages/Dashboard/Home/Teacher/UpdateProfileFolder/TeacherUpdateProfile";
import AdminUpdateProfile from "../../Pages/Dashboard/Home/Admin/UpdateProfileFolder/AdminUpdateProfile";
import NoticeBoard from "../../Pages/Dashboard/Home/Admin/NoticeFolder/NoticeBoard/NoticeBoard";

const Routes = () => {
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
      path: "/dashboard/admin",
      element: (
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      ),
      children: [
        {
          path: "/dashboard/admin",
          element: (
            <PrivateRoute>
              <DashboardHome />
            </PrivateRoute>
          ),
        },

        {
          path: `/dashboard/admin/students/student-information`,
          element: <StudentDetails />,
        },

        {
          path: `/dashboard/admin/teachers/teacher-information`,
          element: <TeacherDetails />,
        },
        {
          path: `/dashboard/admin/teachers/add-teacher`,
          element: <AddTeacher />,
        },

        {
          path: `/dashboard/admin/class-schedule/every-class-schedule`,
          element: <EveryClassSchedule />,
        },
        {
          path: `/dashboard/admin/class-schedule/add-new-class-schedule`,
          element: <AddNewClassSchedule />,
        },
        {
          path: `/dashboard/admin/add-subject&all-subjects`,
          element: <Subjects />,
        },
        {
          path: `/dashboard/admin/class-routine/morning-shift`,
          element: <MorningShiftRoutine />,
        },
        {
          path: `/dashboard/admin/class-routine/day-shift`,
          element: <DayShiftRoutine />,
        },
        {
          path: `/dashboard/admin/attendance/teacher-attendance`,
          element: <TeacherAttendance />,
        },
        {
          path: `/dashboard/admin/attendance/teacher-attendance-table`,
          element: <TeacherAttendanceView />,
        },
        {
          path: `/dashboard/admin/exams/exams-schedule`,
          element: <ExamSchedule />,
        },
        {
          path: `/dashboard/admin/exams/exam-grades`,
          element: <ExamGrades />,
        },
        {
          path: "/dashboard/admin/notice-board",
          element: <NoticeBoard />,
        },
        {
          path: "/dashboard/admin/update-profile",
          element: <AdminUpdateProfile />,
        },
      ],
    },

    {
      path: "/dashboard/teacher",
      element: (
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      ),
      children: [
        {
          path: "/dashboard/teacher",
          element: (
            <PrivateRoute>
              <DashboardHome />
            </PrivateRoute>
          ),
        },
        {
          path: `/dashboard/teacher/students/advised-students`,
          element: <AdvisedStudents />,
        },
        {
          path: `/dashboard/teacher/students/admission-form`,
          element: <AdmissionForm />,
        },
        {
          path: `/dashboard/teacher/students/student-attendance`,
          element: <StudentAttendance />,
        },
        {
          path: `/dashboard/teacher/students/view-attendance`,
          element: <StudentAttendanceViewTable />,
        },
        {
          path: `/dashboard/teacher/class-schedule`,
          element: <ClassScheduleViewTable />,
        },
        {
          path: `/dashboard/teacher/attendance`,
          element: <AttendanceViewTable />,
        },
        {
          path: "/dashboard/teacher/results/add-result",
          element: <AddStudentResult />,
        },
        {
          path: "/dashboard/teacher/results/view-result",
          element: <ShowAllStudentResult />,
        },
        {
          path: "/dashboard/teacher/events",
          element: <TeacherNoticeBoard />,
        },
        {
          path: "/dashboard/teacher/update-profile",
          element: <TeacherUpdateProfile />,
        },
      ],
    },

    {
      path: "/dashboard/student",
      element: (
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      ),
      children: [
        {
          path: "/dashboard/student",
          element: (
            <PrivateRoute>
              <DashboardHome />
            </PrivateRoute>
          ),
        },
        {
          path: "/dashboard/student/class-routine",
          element: <ClassRoutine />,
        },
        {
          path: "/dashboard/student/attendance",
          element: <MyAttendance />,
        },
        {
          path: "/dashboard/student/exam-schedule",
          element: <StudentExamSchedule />,
        },
        {
          path: "/dashboard/student/result",
          element: <ResultTable />,
        },
        {
          path: "/dashboard/student/events",
          element: <StudentEvents />,
        },
        {
          path: "/dashboard/student/user-update-profile",
          element: <StudentUpdateProfilePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;
