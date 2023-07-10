import React from "react";
import "./Pagination.css";

const Pagination = ({ pages, page, setPage }) => {
  return (
    <div className="py-8 flex justify-end rounded-none">
      {[...Array(pages).keys()].map((i) => (
        <button
          className={`py-2 border px-3 bg-black bg-opacity-5 ${page === i + 1 && "selected"}`}
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
