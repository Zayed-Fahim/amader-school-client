import React, { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import Profile from "./SmallComponents/Profile";
// import Notification from "./SmallComponents/Notification";

const DashboardTop = ({ isOpen }) => {
  const { admin, teacher, student } = useContext(AuthContext);

  const commonStyles =
    "fixed top-0 right-0 ml-auto bg-white drop-shadow-xl lg:px-5 lg:py-1 xl:px-8 z-[100]";
  const extraLargeStyles = isOpen
    ? "w-[85%] xl:block hidden"
    : "w-[96.875%] xl:block hidden";
  const largeStyles = isOpen
    ? "lg:w-[80%] lg:block xl:hidden hidden"
    : "lg:w-[95%] lg:block xl:hidden hidden";

  return (
    <AnimatePresence>
      {/* for extra large device */}
      <motion.div
        key="extraLarge"
        initial={{ width: "96.875%" }}
        animate={{ width: isOpen ? "83%" : "96.875%" }}
        exit={{ width: "96.875%" }}
        transition={{ duration: 0.5 }}
        className={`${commonStyles} ${extraLargeStyles}`}
      >
        <div className="flex gap-2 justify-end items-center">
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
            {/* <Notification /> */}
          </div>
        </div>
      </motion.div>

      {/* for large device */}
      <motion.div
        key="large"
        initial={{ width: "95%" }}
        animate={{ width: isOpen ? "80%" : "95%" }}
        exit={{ width: "95%" }}
        transition={{ duration: 0.5 }}
        className={`${commonStyles} ${largeStyles}`}
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
              {/* <Notification /> */}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DashboardTop;
