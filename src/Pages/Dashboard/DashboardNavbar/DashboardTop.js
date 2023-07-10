import React, { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import Profile from "./SmallComponents/Profile";
import Message from "./SmallComponents/Message";
import Notification from "./SmallComponents/Notification";

const DashboardTop = ({ isOpen }) => {
  const { admin, teacher, student } = useContext(AuthContext);

  return (
    <>
      {/* for extra large device */}
      <motion.div
        animate={{
          width: isOpen ? "85%" : "96.875%",
          transition: {
            duration: 0.5,
          },
        }}
        className={
          isOpen
            ? "w-[85%] fixed top-0 right-0 ml-auto bg-white drop-shadow-xl xl:block  hidden lg:px-5 lg:py-1 xl:px-8 z-[100]"
            : "fixed top-0 right-0 ml-auto bg-white drop-shadow-xl xl:block  hidden lg:px-5 lg:py-1 xl:px-8  w-[96.875%] z-[100]"
        }
      >
        <div className="flex justify-between items-center ">
          <div className="flex justify-center items-center lg:gap-2 xl:gap-4">
            <FiSearch className="stroke-gray-400 xl:h-[25px] xl:w-[25px] lg:h-[20px] lg:w-[20px]" />
            <input
              type="text"
              placeholder="Find your desire things..."
              className="outline-none xl:text-xl lg:text-[18px]"
            />
          </div>
          <div className="flex gap-2 justify-center items-center">
            <div>
              <h1 className="text-black font-semibold">
                {admin?.userName || teacher?.userName || student?.userName}
              </h1>
              <p className="text-sm text-right">
                {admin?.role || teacher?.role || student?.role}
              </p>
            </div>
            <div className="flex justify-center items-center xl:gap-3 lg:gap-2">
              <Profile />
              <Notification />
            </div>
          </div>
        </div>
      </motion.div>

      {/* for large device */}
      <motion.div
        animate={{
          width: isOpen ? "80%" : "95%",
          transition: {
            duration: 0.5,
          },
        }}
        className={
          isOpen
            ? "lg:w-[80%] fixed top-0 right-0 ml-auto bg-white drop-shadow-xl lg:block xl:hidden hidden lg:px-5 lg:py-1 xl:px-8 z-[100]"
            : "fixed top-0 right-0 ml-auto bg-white drop-shadow-xl  lg:block xl:hidden hidden lg:px-5 lg:py-1 xl:px-8  lg:w-[95%] z-[100]"
        }
      >
        <div className="flex justify-between items-center ">
          <div className="flex justify-center items-center xl:gap-4 lg:gap-3">
            <FiSearch className="stroke-gray-400 lg:h-[20px] lg:w-[20px]" />
            <input
              type="text"
              placeholder="Find your desire things..."
              className="outline-none text-xl"
            />
          </div>
          <div className="flex gap-2 justify-center items-center">
            <div>
              <h1 className="text-black font-semibold">
                {admin?.userName || teacher?.userName || student?.userName}
              </h1>
              <p className="text-sm text-right font-semibold">
                {admin?.role || teacher?.role || student?.role}
              </p>
            </div>
            <div className="flex justify-center items-center xl:gap-3">
              <Profile />
              <Notification />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default DashboardTop;
