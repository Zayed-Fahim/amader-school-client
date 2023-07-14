import React from "react";

const ResetButton = ({ formRef }) => {
  return (
    <div>
      <input
        className="uppercase px-10 py-3 text-white  text-xl font-bold  bg-[#042954] hover:bg-[#FFBE15] rounded-md cursor-pointer"
        type="submit"
        value="Reset"
        onClick={() => formRef.reset()}
      />
    </div>
  );
};

export default ResetButton;
