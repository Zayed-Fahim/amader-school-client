import React from "react";
import { FaBars, FaSchool } from "react-icons/fa";
import {  MdSubject } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { GoGraph } from "react-icons/go";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { GrUserSettings } from "react-icons/gr";
import { AnimatePresence, motion, spring } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillDashboard, AiOutlineSchedule } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import "./DashboardSidebar.css";
import icon from "../../../Assets/dashboard-icon/dashboard.png";
import SidebarStudentIcon from "./SidebarIcon/SidebarStudentIcon";
import SidebarTeacherIcon from "./SidebarIcon/SidebarTeacherIcon";
import AdminDropdown from "./Dropdown/AdminDropdown";

const AdminSidebar = ({ isOpen, setIsOpen }) => {
  const adminSideBarOptions = [
    {
      title: "Dashboard",
      icon: <AiFillDashboard size={!isOpen ? 30 : 25} />,
      isArrowOpen: <IoIosArrowForward size={25} />,
      subMenus: [
        {
          title: "Admin",
          path: "/dashboard/admin",
          icon: <IoIosArrowForward size={20} />,
        },
      ],
    },
    {
      title: "Students",
      icon: <SidebarStudentIcon isOpen={isOpen} />,
      isArrowOpen: <IoIosArrowForward size={25} />,
      subMenus: [
        {
          title: "Student Information",
          path: "/dashboard/admin/students/student-information",
          icon: <IoIosArrowForward size={20} />,
        },
      ],
    },
    {
      title: "Teachers",
      icon: <SidebarTeacherIcon isOpen={isOpen} />,
      isArrowOpen: <IoIosArrowForward size={25} />,
      subMenus: [
        {
          title: "Teacher Information",
          path: "/dashboard/admin/teachers/teacher-information",
          icon: <IoIosArrowForward size={20} />,
        },
        {
          title: "Add Teacher",
          path: "/dashboard/admin/teachers/add-teacher",
          icon: <IoIosArrowForward size={20} />,
        },
      ],
    },
    {
      title: "Class Schedule",
      icon: <SiGoogleclassroom size={!isOpen ? 30 : 25} />,
      isArrowOpen: <IoIosArrowForward size={25} />,
      subMenus: [
        {
          title: "Every Class Schedule",
          path: "/dashboard/admin/class-schedule/every-class-schedule",
          icon: <IoIosArrowForward size={20} />,
        },
        {
          title: "Add new Class Schedule",
          path: "/dashboard/admin/class-schedule/add-new-class-schedule",
          icon: <IoIosArrowForward size={20} />,
        },
      ],
    },
    {
      title: "Subject",
      path: "/dashboard/admin/add-subject&all-subjects",
      icon: <MdSubject size={!isOpen ? 30 : 25} />,
    },
    {
      title: "Class Routine",
      icon: <AiOutlineSchedule size={!isOpen ? 30 : 25} />,
      isArrowOpen: <IoIosArrowForward size={25} />,
      subMenus: [
        {
          title: "Morning Shift",
          path: "/dashboard/admin/class-routine/morning-shift",
          icon: <IoIosArrowForward size={20} />,
        },
        {
          title: "Day Shift",
          path: "/dashboard/admin/class-routine/day-shift",
          icon: <IoIosArrowForward size={20} />,
        },
      ],
    },
    {
      title: "Attendance",
      icon: <GoGraph size={!isOpen ? 30 : 25} />,
      isArrowOpen: <IoIosArrowForward size={25} />,
      subMenus: [
        {
          title: "Teacher Attendance",
          path: "/dashboard/admin/attendance/teacher-attendance",
          icon: <IoIosArrowForward size={20} />,
        },
        {
          title: "Teacher Attendance Table",
          path: "/dashboard/admin/attendance/teacher-attendance-table",
          icon: <IoIosArrowForward size={20} />,
        },
      ],
    },
    {
      title: "Exams",
      icon: <FaSchool size={!isOpen ? 30 : 25} />,
      isArrowOpen: <IoIosArrowForward size={25} />,
      subMenus: [
        {
          title: "Exam Schedule",
          path: "/dashboard/admin/exams/exams-schedule",
          icon: <IoIosArrowForward size={20} />,
        },
        {
          title: "Exam Grades",
          path: "/dashboard/admin/exams/exam-grades",
          icon: <IoIosArrowForward size={20} />,
        },
      ],
    },
    {
      title: "Notices",
      path: "/dashboard/admin/notice-board",
      icon: <HiOutlineBellAlert size={!isOpen ? 30 : 25} />,
    },
    {
      title: "Update Profile",
      path: "/dashboard/admin/update-profile",
      icon: <GrUserSettings size={!isOpen ? 30 : 25} />,
    },
  ];

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const animation = {
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        type: spring,
        damping: 10,
      },
    },
  };

  return (
    <div>
      {/* for extra large device */}
      <motion.div
        animate={{
          width: isOpen ? "17%" : "3.125%",
          transition: {
            duration: 0.5,
            type: spring,
            damping: 10,
          },
        }}
        className="fixed top-0 left-0 xl:bg-[#ffbe15] h-screen overflow-y-auto hidden xl:block xl:pb-10"
      >
        <motion.div
          animate={{
            width: isOpen ? "17%" : "3.125%",
            transition: {
              duration: 0.5,
              type: spring,
              damping: 100,
            },
          }}
          className="xl:h-[60px] hidden z-[100] xl:fixed xl:top-0  xl:bg-[#042954] xl:flex items-center justify-around"
        >
          {isOpen ? (
            <Link to="/dashboard/admin">
              {isOpen && (
                <img
                  className="w-[220px] pt-[11px]"
                  src={icon}
                  alt="amader-school"
                />
              )}
            </Link>
          ) : null}
          
            <FaBars
              className="text-white hidden xl:block cursor-pointer"
              size={isOpen ? 27 : 30}
              onClick={toggle}
            />
          
        </motion.div>
        <section className="overflow-y-auto overflow-x-hidden relative top-[60px]">
          {adminSideBarOptions.map((option, i) => {
            if (option.subMenus) {
              return (
                <AdminDropdown
                  animation={animation}
                  isOpen={isOpen}
                  option={option}
                  key={i}
                  setIsOpen={setIsOpen}
                />
              );
            }
            return (
              <NavLink
                to={option.path}
                key={i}
                activeClassName="active"
                className={
                  isOpen
                    ? "xl:flex hidden justify-between px-5 py-3 border-b border-black border-opacity-20 hover:border-r-4 hover:border-r-[#042954] transition duration-[.2s] ease-[cubic-bezier(.6,-0.28,0.735,0.045)] hover:bg-black hover:bg-opacity-20 focus:bg-black focus:bg-opacity-20 focus:border-b focus:border-black focus:border-r-4 focus:border-r-[#042954]"
                    : "xl:flex hidden items-center justify-center py-3 border-b border-black border-opacity-20 hover:border-r-4 hover:border-r-[#042954] transition duration-[.2s] ease-[cubic-bezier(.6,-0.28,0.735,0.045)] hover:bg-black hover:bg-opacity-20 focus:bg-black focus:bg-opacity-20 focus:border-b  focus:border-black focus:border-r-4 focus:border-r-[#042954]"
                }
              >
                <div className="flex gap-2 items-center">
                  <div>{option.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={animation}
                        animate="show"
                        className="lg:text-[17px] xl:text-xl font-semibold whitespace-nowrap"
                      >
                        {option.title}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </NavLink>
            );
          })}
        </section>
      </motion.div>

      {/* for large device */}
      <section className="md:hidden hidden xl:hidden lg:block">
        <motion.div
          animate={{
            width: isOpen ? "20%" : "5%",
            transition: {
              duration: 0.5,
              type: spring,
              damping: 10,
            },
          }}
          className="lg:fixed lg:top-0 left-0 bg-[#ffbe15] h-screen overflow-y-auto hidden lg:block "
        >
          <motion.div
            animate={{
              width: isOpen ? "20%" : "5%",
              transition: {
                duration: 0.5,
                type: spring,
                damping: 100,
              },
            }}
            className="py-3 lg:h-[60px] z-[100] lg:fixed lg:top-0 xl:hidden md:hidden hidden  lg:bg-[#042954] lg:flex items-center justify-around"
          >
            {isOpen ? (
              <Link to="/dashboard/admin">
                {isOpen && (
                  <img
                    className="w-[220px] pt-[11px]"
                    src={icon}
                    alt="amader-school"
                  />
                )}
              </Link>
            ) : null}
            
              <FaBars
                className="text-white"
                size={isOpen ? 27 : 30}
                onClick={toggle}
              />
            
          </motion.div>
          <section className="overflow-y-auto overflow-x-hidden relative lg:top-[60px] hidden xl:hidden lg:block">
            {adminSideBarOptions.map((option, i) => {
              if (option.subMenus) {
                return (
                  <AdminDropdown
                    animation={animation}
                    isOpen={isOpen}
                    option={option}
                    key={i}
                    setIsOpen={setIsOpen}
                  />
                );
              }
              return (
                <div className="md:hidden hidden xl:hidden lg:block">
                  <NavLink
                    to={option.path}
                    key={i}
                    activeClassName="active"
                    className={
                      isOpen
                        ? "lg:flex hidden justify-between px-5 py-3 border-b  border-black border-opacity-20 hover:border-r-4 hover:border-r-[#042954] transition duration-[.2s] ease-[cubic-bezier(.6,-0.28,0.735,0.045)] hover:bg-black hover:bg-opacity-20 focus:bg-black focus:bg-opacity-20 focus:border-b focus:border-black focus:border-r-4 focus:border-r-[#042954]"
                        : "lg:flex hidden  items-center justify-center py-3 border-b border-black border-opacity-20 hover:border-r-4 hover:border-r-[#042954] transition duration-[.2s] ease-[cubic-bezier(.6,-0.28,0.735,0.045)] hover:bg-black hover:bg-opacity-20 focus:bg-black focus:bg-opacity-20 focus:border-b  focus:border-black focus:border-r-4 focus:border-r-[#042954]"
                    }
                  >
                    <div className="flex gap-2 items-center">
                      <div>{option.icon}</div>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            variants={animation}
                            animate="show"
                            className="lg:text-[17px] xl:text-xl font-semibold whitespace-nowrap"
                          >
                            {option.title}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </NavLink>
                </div>
              );
            })}
          </section>
        </motion.div>
      </section>
    </div>
  );
};

export default AdminSidebar;
