import React, { useContext } from "react";
import { FaBars, FaSchool } from "react-icons/fa";
import { MdEmojiTransportation } from "react-icons/md";
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
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import TeacherDropdown from "./Dropdown/TeacherDropdown";

const TeacherSidebar = ({ isOpen, setIsOpen }) => {
  const { teacher } = useContext(AuthContext);
  const teacherSideBarOptions = [
    {
      title: "Dashboard",
      icon: <AiFillDashboard size={!isOpen ? 30 : 25} />,
      isArrowOpen: <IoIosArrowForward size={25} />,
      subMenus: [
        {
          title: "Teacher",
          path: "/dashboard/teacher",
          icon: <IoIosArrowForward size={20} />,
        },
      ],
    },
    teacher &&
      teacher?.classTeacher === "Yes" && {
        title: "Students",
        icon: <SidebarStudentIcon isOpen={isOpen} />,
        isArrowOpen: <IoIosArrowForward size={25} />,
        subMenus: [
          {
            title: "Advised Students",
            path: "/dashboard/teacher/students/advised-students",
            icon: <IoIosArrowForward size={20} />,
          },
          {
            title: "Add Student",
            path: "/dashboard/teacher/students/admission-form",
            icon: <IoIosArrowForward size={20} />,
          },
          {
            title: "Attendance",
            path: "/dashboard/teacher/students/student-attendance",
            icon: <IoIosArrowForward size={20} />,
          },
          {
            title: "View Attendance",
            path: "/dashboard/teacher/students/view-attendance",
            icon: <IoIosArrowForward size={20} />,
          },
        ],
      },
    {
      title: "Class schedule",
      path: "/dashboard/teacher/class-schedule",
      icon: <AiOutlineSchedule size={!isOpen ? 30 : 25} />,
    },
    {
      title: "Attendance",
      path: "/dashboard/teacher/attendance",
      icon: <GoGraph size={!isOpen ? 30 : 25} />,
    },
    {
      title: "Results",
      path: "/dashboard/teacher/results",
      icon: <GoGraph size={!isOpen ? 30 : 25} />,
      isArrowOpen: <IoIosArrowForward size={25} />,
      subMenus: [
        {
          title: "Add Result",
          path: "/dashboard/teacher/results/add-result",
          icon: <IoIosArrowForward size={20} />,
        },
        {
          title: "Show Results",
          path: "/dashboard/teacher/results/view-result",
          icon: <IoIosArrowForward size={20} />,
        },
      ],
    },
    {
      title: "Notices",
      path: "/dashboard/teacher/notice-board",
      icon: <HiOutlineBellAlert size={!isOpen ? 30 : 25} />,
    },
    {
      title: "Update Profile",
      path: "/dashboard/teacher/update-profile",
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
            <Link to="/dashboard/teacher">
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
          {teacherSideBarOptions.map((option, i) => {
            if (option.subMenus) {
              return (
                <TeacherDropdown
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
              <Link to="/dashboard/teacher">
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
            {teacherSideBarOptions.map((option, i) => {
              if (option.subMenus) {
                return (
                  <TeacherDropdown
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

export default TeacherSidebar;
