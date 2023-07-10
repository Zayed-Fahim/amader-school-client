import React from "react";
import { BiMessage } from "react-icons/bi";

const Message = () => {
  return (
    <div className="dropdown dropdown-end rounded-[50%]">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <BiMessage className="xl:h-[30px] xl:w-[30px] lg:h-[25px] lg:w-[25px]" />
          <span className="badge badge-md indicator-item text-center bg-black text-white">
            8
          </span>
        </div>
      </label>
      <div
        tabIndex={0}
        className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
      >
        <div className="card-body">
          <span className="font-bold xl:text-lg lg:text-[16px]">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
