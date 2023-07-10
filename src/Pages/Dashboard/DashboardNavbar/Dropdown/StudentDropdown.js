import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./DashboardSidebar.css";

const StudentDropdown = ({ option, isOpen, animation, setIsOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsOpen(true);
  };
  useEffect(() => {
    if (!isOpen) {
      setIsMenuOpen(false);
    }
  }, [isOpen]);
  const menuAnimation = {
    hidden: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
      },
    },
    show: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
      },
    },
  };
  const menuItemAnimation = {
    hidden: (i) => ({
      padding: 0,
      x: "-100%",
      transition: {
        duration: (i + 1) * 0.1,
      },
    }),
    show: (i) => ({
      x: 0,
      transition: {
        duration: (i + 1) * 0.1,
      },
    }),
  };
  return (
    <>
      {/* for extra large device */}
      <div onClick={toggleMenu} className="xl:block hidden cursor-pointer">
        <div
          to={option.path}
          activeClassName="active"
          className={
            isOpen
              ? `xl:flex hidden justify-between px-5 py-3 border-b border-black border-opacity-20 hover:border-r-4 hover:border-r-[#042954] transition duration-[.2s] ease-[cubic-bezier(.6,-0.28,0.735,0.045)] hover:bg-black hover:bg-opacity-20`
              : `xl:flex hidden items-center justify-center py-3 border-b border-black border-opacity-20 hover:border-r-4 hover:border-r-[#042954] transition duration-[.2s] ease-[cubic-bezier(.6,-0.28,0.735,0.045)] hover:bg-black hover:bg-opacity-20`
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
          {isOpen && (
            <motion.div animate={isMenuOpen ? { rotate: 90 } : { rotate: 0 }}>
              {option.isArrowOpen}
            </motion.div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && isOpen && (
          <motion.div
            variants={menuAnimation}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {option.subMenus.map((subMenu, i) => {
              return (
                <motion.div key={i} variants={menuItemAnimation} custom={i}>
                  <NavLink
                    to={subMenu.path}
                    activeClassName="active"
                    className={
                      isOpen
                        ? "xl:flex hidden justify-between pl-10 py-2 border-b border-black border-opacity-20 hover:border-r-4 bg-[#F2ED6F] hover:border-r-[#042954] transition duration-[.2s] ease-[cubic-bezier(.6,-0.28,0.735,0.045)] hover:bg-black hover:bg-opacity-20 "
                        : "xl:flex hidden items-center justify-center pl-10 py-2 border-b border-black border-opacity-20 hover:border-r-4 hover:border-r-[#042954] transition duration-[.2s] ease-[cubic-bezier(.6,-0.28,0.735,0.045)] hover:bg-black hover:bg-opacity-20 "
                    }
                  >
                    <div className="flex gap-2 items-center">
                      <div>{subMenu.icon}</div>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            variants={animation}
                            className="lg:text-[17px] xl:text-[18px] font-semibold whitespace-nowrap"
                          >
                            {subMenu.title}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </NavLink>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* for large device */}
      <div onClick={toggleMenu} className="lg:block xl:hidden hidden">
        <div
          to={option.path}
          activeClassName="active"
          className={
            isOpen
              ? `lg:flex hidden justify-between px-5 py-3 border-b border-black border-opacity-20 hover:border-r-4 hover:border-r-[#042954] transition duration-[.2s] ease-[cubic-bezier(.6,-0.28,0.735,0.045)] hover:bg-black hover:bg-opacity-20`
              : `lg:flex hidden items-center justify-center py-3 border-b border-black border-opacity-20 hover:border-r-4 hover:border-r-[#042954] transition duration-[.2s] ease-[cubic-bezier(.6,-0.28,0.735,0.045)] hover:bg-black hover:bg-opacity-20`
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
          {isOpen && (
            <motion.div animate={isMenuOpen ? { rotate: 90 } : { rotate: 0 }}>
              {option.isArrowOpen}
            </motion.div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && isOpen && (
          <motion.div
            variants={menuAnimation}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {option.subMenus.map((subMenu, i) => {
              return (
                <motion.div key={i} variants={menuItemAnimation} custom={i}>
                  <NavLink
                    to={subMenu.path}
                    activeClassName="active"
                    className={
                      isOpen
                        ? "flex justify-between pl-10 py-2 border-b xl:hidden lg:block  border-black border-opacity-20 hover:border-r-4 bg-[#F2ED6F] hover:border-r-[#042954] transition duration-[.2s] ease-[cubic-bezier(.6,-0.28,0.735,0.045)] hover:bg-black hover:bg-opacity-20"
                        : "flex xl:hidden lg:block items-center justify-center pl-10 py-2 border-b border-black border-opacity-20 hover:border-r-4 hover:border-r-[#042954] transition duration-[.2s] ease-[cubic-bezier(.6,-0.28,0.735,0.045)] hover:bg-black hover:bg-opacity-20"
                    }
                  >
                    <div className="flex gap-2 items-center">
                      <div>{subMenu.icon}</div>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            variants={animation}
                            className="lg:text-[16px] xl:text-[18px] font-semibold whitespace-nowrap"
                          >
                            {subMenu.title}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </NavLink>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default StudentDropdown;
