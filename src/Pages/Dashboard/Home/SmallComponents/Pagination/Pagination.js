import React from "react";
import "./Pagination.css";

const Pagination = ({ pages, page, setPage }) => {
  return (
    <div className="py-8 flex justify-end rounded-none">
      {[...Array(pages).keys()].map((i) => (
        <button
          className={`py-[2px] px-[8px] rounded ${
            page === i + 1 && "selected"
          }`}
          key={i}
          onClick={() => setPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
