import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import SaveButton from "../../../../../SmallComponents/SaveButton";
import ResetButton from "../../../../../SmallComponents/ResetButton";
import { Link } from "react-router-dom";

const AddRoutineMorning = ({ refetch, assignedClass, setAssignedClass }) => {
  const { register, handleSubmit } = useForm();
  const [selectShift, setSelectShift] = useState(false);

  const handleAddNewRoutine = (data, event) => {
    event.preventDefault();
    const routineInfo = {
      day: data.day,
      assignedClass: data.class,
      shift: data.shift,
      subject: data.subject,
      section: data.section.toUpperCase(),
      group: data.group,
      teacherName: data.teacherName,
      time: data.time,
    };
    
    if (routineInfo) {
      axios
        .post("http://localhost:8080/api/v1/add-routine", routineInfo, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
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
            ? "bg-white xl:min-h-[1060px]"
            : "bg-white xl:min-h-[950px]"
        }`}
      >
        <div>
          <h1 className="text-2xl font-bold py-8 px-10">
            Add Morning Shift Routine
          </h1>
        </div>
        <div>
          <form
            onSubmit={handleSubmit(handleAddNewRoutine)}
            className="flex flex-col w-full gap-12 h-[410px] px-10 pb-5"
          >
            {/* 1st row */}
            <div className="grid grid-cols-1 gap-5 lg:gap-4">
              <div>
                <label className="label">
                  <h1 className="font-bold opacity-70 text-[17px]">
                    Day of the Week {""}
                    <span className="text-red-500 ">(Required)*</span>
                  </h1>
                </label>
                <select
                  {...register("day")}
                  required
                  className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3"
                >
                  <option defaultValue={true}>Select Class Day</option>
                  <option value="Sunday">Sunday</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
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
                  {...register("class")}
                  className="outline-[#FFBE15] h-12 w-full px-3 bg-black bg-opacity-5 rounded-md"
                  onChange={(e) => {
                    setAssignedClass(e.target.value);
                  }}
                >
                  <option value="Select Class">Select Class</option>
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

              <div>
                <label className="label">
                  <span className="text-[17px] opacity-70 font-bold">
                    Shift
                  </span>
                </label>
                <select
                  required
                  {...register("shift")}
                  className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3"
                  onChange={(e) => setSelectShift(e.target.value)}
                >
                  <option defaultValue={true}>Select Shift</option>
                  <option value="Morning">Morning</option>
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
                    {...register("group")}
                    className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3"
                  >
                    <option defaultValue={true}>Select Group</option>
                    <option value="Science">Science</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Arts">Arts</option>
                  </select>
                </div>
              ) : null}

              <div>
                <label className="label">
                  <h1 className="font-bold opacity-70 text-[17px]">Subject</h1>
                </label>
                <input
                  className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3"
                  required
                  type="text"
                  placeholder="Name of the Subject"
                  {...register("subject")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="text-[17px] opacity-70 font-bold">
                    Section
                  </span>
                </label>
                <select
                  required
                  {...register("section")}
                  className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3"
                >
                  <option defaultValue={true}>Select Section</option>
                  <option value="a">A</option>
                  <option value="b">B</option>
                  <option value="c">C</option>
                  <option value="d">D</option>
                  <option value="e">E</option>
                  <option value="f">F</option>
                  <option value="g">G</option>
                  <option value="h">H</option>
                  <option value="i">I</option>
                  <option value="j">J</option>
                </select>
              </div>
              <div>
                <label className="label ">
                  <h1 className="font-bold opacity-70 text-[17px]">
                    Teacher Name
                  </h1>
                </label>
                <input
                  className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3"
                  required
                  type="text"
                  placeholder="Name of the Teacher"
                  {...register("teacherName")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="text-[17px] opacity-70 font-bold">
                    Class Time{" "}
                    <span className="text-red-500 ">(Required)*</span>
                  </span>
                </label>

                {selectShift && selectShift === "Morning" ? (
                  <select
                    required
                    {...register("time")}
                    className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3"
                  >
                    <option defaultValue={true}>Select Class Time</option>
                    <option value="07:45am - 08:25am">07:45am - 08:25am</option>
                    <option value="08:25am - 09:05am">08:25am - 09:05am</option>
                    <option value="09:05am - 09:45am">09:05am - 09:45am</option>
                    <option value="10:20am - 10:55am">10:20am - 10:55am</option>
                    <option value="10:55am - 11:30am">10:55am - 11:30am</option>
                    <option value="11:30am - 12:05pm">11:30am - 12:05pm</option>
                  </select>
                ) : (
                  <input
                    className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3"
                    disabled
                    type="text"
                    placeholder="Please select shift first"
                  />
                )}
              </div>
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

export default AddRoutineMorning;
