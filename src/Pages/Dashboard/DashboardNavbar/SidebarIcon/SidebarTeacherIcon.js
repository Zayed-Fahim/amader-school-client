import React from "react";

const SidebarTeacherIcon = ({ isOpen }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={!isOpen ? "h-[30px] w-[30px]" : "h-[25px] w-[25px]"}
    >
      <g data-name="Layer 2">
        <circle cx="6" cy="10" r="3"></circle>
        <path d="M8 2h14v2H8zm4 4h10v2H12zm4 4h6v2h-6zm-6 8.36l4.77-5.72-1.54-1.28-3.82 4.58A4 4 0 002 18v4h8z"></path>
      </g>
    </svg>
  );
};

export default SidebarTeacherIcon;
