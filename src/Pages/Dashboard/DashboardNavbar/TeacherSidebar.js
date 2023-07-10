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
import DashboardNavbarDropdown from "./Dropdown/AdminDropdown";
import SidebarStudentIcon from "./SidebarIcon/SidebarStudentIcon";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const TeacherSidebar = ({ isOpen, setIsOpen }) => {
  const { teacher } = useContext(AuthContext);
  const adminSideBarOptions = [
    {
      title: "Dashboard",
      path: "/dashboard/teacher",
      icon: <AiFillDashboard size={!isOpen ? 30 : 25} />,
      isArrowOpen: <IoIosArrowForward size={25} />,
      subMenus: [
        {
          title: "Teachers",
          path: "/dashboard/teacher",
          icon: <IoIosArrowForward size={20} />,
        },
      ],
    },
    teacher?.classTeacher === "Yes"
      ? {
          title: "Students",
          icon: <SidebarStudentIcon isOpen={isOpen} />,
          isArrowOpen: <IoIosArrowForward size={25} />,
          subMenus: [
            {
              title: "Advertised Students",
              path: "/dashboard/teacher/students/advertised-students",
              icon: <IoIosArrowForward size={20} />,
            },
            {
              title: "Add Student",
              path: "/dashboard/teacher/students/admission-form",
              icon: <IoIosArrowForward size={20} />,
            },
            // {
            //   title: "Admission Form",
            //   path: "/dashboard/admission-form",
            //   icon: <IoIosArrowForward size={20} />,
            // },
          ],
        }
      : null,
    // {
    //   title: "Teachers",
    //   path: "/dashboard/teachers",
    //   icon: <TeachersIcon isOpen={isOpen} />,
    //   isArrowOpen: <IoIosArrowForward size={25} />,
    //   subMenus: [
    //     {
    //       title: "All Teachers",
    //       path: "/dashboard/all-teachers",
    //       icon: <IoIosArrowForward size={20} />,
    //     },
    //     {
    //       title: "Teacher Details",
    //       path: "/dashboard/teacher-details",
    //       icon: <IoIosArrowForward size={20} />,
    //     },
    //     {
    //       title: "Add Teacher",
    //       path: "/dashboard/add-teacher",
    //       icon: <IoIosArrowForward size={20} />,
    //     },
    //     {
    //       title: "All Teachers Salary",
    //       path: "/dashboard/teachers-salary",
    //       icon: <IoIosArrowForward size={20} />,
    //     },
    //   ],
    // },

    // {
    //   title: "Classes",
    //   path: "/dashboard/teacher/classes",
    //   icon: <SiGoogleclassroom size={!isOpen ? 30 : 25} />,
    //   isArrowOpen: <IoIosArrowForward size={25} />,
    //   subMenus: [
    //     {
    //       title: "All Classes",
    //       path: "/dashboard/teacher/all-classes",
    //       icon: <IoIosArrowForward size={20} />,
    //     },
    //     {
    //       title: "Add new Class",
    //       path: "/dashboard/teacher/add-new-class",
    //       icon: <IoIosArrowForward size={20} />,
    //     },
    //   ],
    // },
    // {
    //   title: "Subject",
    //   path: "/dashboard/subjects",
    //   icon: <MdSubject size={!isOpen ? 30 : 25} />,
    // },
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
      path: "/dashboard/teacher/attendance",
      icon: <GoGraph size={!isOpen ? 30 : 25} />,
    },
    {
      title: "Exams",
      path: "/dashboard/teacher/exams",
      icon: <FaSchool size={!isOpen ? 30 : 25} />,
      isArrowOpen: <IoIosArrowForward size={25} />,
      subMenus: [
        {
          title: "Exam Schedule",
          path: "/dashboard/teacher/exam-schedule",
          icon: <IoIosArrowForward size={20} />,
        },
        {
          title: "Exam Grades",
          path: "/dashboard/teacher/exam-grades",
          icon: <IoIosArrowForward size={20} />,
        },
      ],
    },
    {
      title: "Transport",
      path: "/dashboard/teacher/transport-schedule",
      icon: <MdEmojiTransportation size={!isOpen ? 30 : 25} />,
    },
    {
      title: "Notices",
      path: "/dashboard/teacher/notice-board",
      icon: <HiOutlineBellAlert size={!isOpen ? 30 : 25} />,
    },
    // {
    //   title: "Messages",
    //   path: "/dashboard/teacher/messaging",
    //   icon: <TiMessages size={!isOpen ? 30 : 25} />,
    // },
    {
      title: "Account Setting",
      path: "/dashboard/teacher/user-account-setting",
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
          width: isOpen ? "15%" : "3.125%",
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
            width: isOpen ? "15%" : "3.125%",
            transition: {
              duration: 0.5,
              type: spring,
              damping: 100,
            },
          }}
          className="xl:h-[60px] hidden z-[100] xl:fixed xl:top-0  xl:bg-[#042954] xl:flex items-center justify-around"
        >
          {isOpen ? (
            <Link to="/dashboard">
              {isOpen && (
                <img
                  className="w-[220px] pt-[11px]"
                  src={icon}
                  alt="amader-school"
                />
              )}
            </Link>
          ) : null}
          <Link>
            <FaBars
              className="text-white hidden xl:block cursor-pointer"
              size={isOpen ? 27 : 30}
              onClick={toggle}
            />
          </Link>
        </motion.div>
        <section className="overflow-y-auto overflow-x-hidden relative top-[60px]">
          {adminSideBarOptions.map((option, i) => {
            if (option.subMenus) {
              return (
                <DashboardNavbarDropdown
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
              <Link to="/dashboard">
                {isOpen && (
                  <img
                    className="w-[220px] pt-[11px]"
                    src={icon}
                    alt="amader-school"
                  />
                )}
              </Link>
            ) : null}
            <Link>
              <FaBars
                className="text-white"
                size={isOpen ? 27 : 30}
                onClick={toggle}
              />
            </Link>
          </motion.div>
          <section className="overflow-y-auto overflow-x-hidden relative lg:top-[60px] hidden xl:hidden lg:block">
            {adminSideBarOptions.map((option, i) => {
              if (option.subMenus) {
                return (
                  <DashboardNavbarDropdown
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
