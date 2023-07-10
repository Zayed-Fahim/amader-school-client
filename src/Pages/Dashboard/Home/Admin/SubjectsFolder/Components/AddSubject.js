import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import SaveButton from "../../../../../SmallComponents/SaveButton";
import ResetButton from "../../../../../SmallComponents/ResetButton";

const AddSubject = ({ refetch, assignedClass, setAssignedClass }) => {
  const { register, handleSubmit } = useForm();
  const handleAddNewSubject = (data, event) => {
    event.preventDefault();

    const subjectInfo = {
      subjectName: data.subjectName,
      subjectCode: data.subjectCode.toUpperCase(),
      subjectType: data.subjectType,
      assignedClass: data.assignedClass,
      assignedGroup: data.assignedGroup,
    };
    if (subjectInfo) {
      axios
        .post(
          "http://localhost:8080/api/v1/add-subject&all-subjects",
          subjectInfo,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((result) => {
          if (result.status === 200) {
            toast.success(`${result.data.message}`);
            refetch();
            event.target.reset();
          }
        })
        .catch((error) => {
          if (error.response.status === 409) {
            toast.error(`${error.response.data.message}`);
          }
        });
    }
  };
  return (
    <div className="min-w-[550px]">
      <div
        className={`${
          assignedClass
            ? "bg-white xl:min-h-[750px]"
            : "bg-white xl:min-h-[640px]"
        }`}
      >
        <div>
          <h1 className="text-2xl font-bold py-8 px-10">Add Subject</h1>
        </div>
        <div>
          <form
            onSubmit={handleSubmit(handleAddNewSubject)}
            className="flex flex-col w-full gap-12 h-[410px] px-10 pb-5"
          >
            {/* 1st row */}
            <div className="grid grid-cols-1 gap-5 lg:gap-4">
              <div>
                <label className="label">
                  <h1 className="font-bold opacity-70 text-[17px]">
                    Subject Name
                  </h1>
                </label>
                <input
                  className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3"
                  required
                  type="text"
                  placeholder="Name of the Subject"
                  {...register("subjectName")}
                />
              </div>
              <div>
                <label className="label ">
                  <h1 className="font-bold opacity-70 text-[17px]">
                    Subject Code
                  </h1>
                </label>
                <input
                  className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3 uppercase"
                  required
                  type="text"
                  {...register("subjectCode")}
                />
              </div>
              <div>
                <label className="label">
                  <h1 className="font-bold opacity-70 text-[17px]">
                    Subject Type
                    <span className="text-red-500 ">(Required)*</span>
                  </h1>
                </label>
                <select
                  {...register("subjectType")}
                  required
                  className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3"
                >
                  <option defaultValue={true}>Select Subject Type</option>
                  <option value="Theory">Theory</option>
                  <option value="Practical">Practical</option>
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="text-[17px] opacity-70 font-bold">
                    Assigned Class{" "}
                    <span className="text-red-500 ">(Required)*</span>
                  </span>
                </label>
                <select
                  required
                  {...register("assignedClass")}
                  className="outline-[#FFBE15] h-12 w-full px-3 bg-black bg-opacity-5 rounded-md"
                  onChange={(e) => {
                    setAssignedClass(e.target.value);
                  }}
                >
                  <option value="Select class">Select Class</option>
                  <option value="Play">Play</option>
                  <option value="Kg">KG</option>
                  <option value="One">One</option>
                  <option value="Two">Two</option>
                  <option value="Three">Three</option>
                  <option value="Four">Four</option>
                  <option value="Five">Five</option>
                  <option value="Six">Six</option>
                  <option value="Seven">Seven</option>
                  <option value="Eight">Eight</option>
                  <option value="Nine">Nine</option>
                  <option value="Ten">Ten</option>
                  <option value="Eleven">Eleven</option>
                  <option value="Twelve">Twelve</option>
                </select>
              </div>
              {assignedClass &&
              (assignedClass === "Nine" ||
                assignedClass === "Ten" ||
                assignedClass === "Eleven" ||
                assignedClass === "Twelve") ? (
                <div>
                  <label className="label">
                    <span className="text-[17px] opacity-70 font-bold">
                      Assigned Group{" "}
                      <span className="text-red-500 ">(Required)*</span>
                    </span>
                  </label>
                  <select
                    required
                    {...register("assignedGroup")}
                    className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3"
                  >
                    <option defaultValue={true}>Select Group</option>
                    <option value="Science">Science</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Arts">Arts</option>
                  </select>
                </div>
              ) : null}
            </div>
            {/* 5th row */}
            <div className="flex items-center gap-4 pb-5">
              <SaveButton />
              <ResetButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSubject;
