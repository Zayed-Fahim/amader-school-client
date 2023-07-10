import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";
import axios from "axios";
import { toast } from "react-hot-toast";
import TimeRangePicker from "@wojtekmaj/react-timerange-picker";
import "@wojtekmaj/react-timerange-picker/dist/TimeRangePicker.css";
import "react-clock/dist/Clock.css";
import "./AddNewClassSchedule.css";
import { Link } from "react-router-dom";
import icon from "../../../../../../Assets/dashboard-icon/dashboard.png";

const AddNewClassSchedule = () => {
  const { refetch } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const [group, setGroup] = useState(false);
  const [value, onChange] = useState("");

  const handleAddNewClassSchedule = (data, event) => {
    event.preventDefault();
    const classScheduleInfo = {
      teacherName: data.teacherName,
      teacherID: data.teacherId,
      gender: data.gender,
      teacherPhoneNumber: data.teacherPhoneNumber,
      teacherEmail: data.teacherEmail,
      teachingShift: data.teachingShift,
      teachingClass: data.teachingClass,
      teachingGroup: data.group,
      teachingSection: data.teachingSection.toUpperCase(),
      subjectName: data.subjectName,
      dateOfClass: data.dateOfClass,
      classTime: value,
    };
    if (classScheduleInfo) {
      axios
        .post(
          "http://localhost:8080/api/v1/class-schedules",
          classScheduleInfo,
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
    <div className="min-h-[89vh] relative left-[320px] top-24  w-[81.5%] ">
      <div className="text-[17px] font-semibold breadcrumbs mb-8">
        <ul>
          <li className="hover:text-[#FFBE15] ">
            <Link to={`/dashboard/admin`}>Dashboard</Link>
          </li>
          <li>Class Schedule</li>
          <li>Add New Class Schedule</li>
        </ul>
      </div>
      <div className="flex flex-col xl:min-h-[620px] bg-white">
        <div>
          <h1 className="text-2xl font-bold py-8 px-5">
            Add New Class Schedule
          </h1>
        </div>
        <div>
          <form
            onSubmit={handleSubmit(handleAddNewClassSchedule)}
            className="flex flex-col w-full gap-5 h-[410px] px-5"
          >
            {/* 1st row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 lg:gap-4">
              <div>
                <label className="label">
                  <h1 className="font-bold opacity-70 text-[17px]">
                    Teacher Name {""}
                    <span className="text-red-500 ">(Required)*</span>
                  </h1>
                </label>
                <input
                  className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3"
                  required
                  type="text"
                  placeholder="Name of Teacher"
                  {...register("teacherName")}
                />
              </div>
              <div>
                <label className="label ">
                  <h1 className="font-bold opacity-70 text-[17px]">
                    Teacher ID NO {""}
                    <span className="text-red-500 ">(Required)*</span>
                  </h1>
                </label>
                <input
                  className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3"
                  required
                  type="text"
                  placeholder="Teacher ID"
                  {...register("teacherId")}
                />
              </div>

              <div>
                <label className="label">
                  <h1 className="font-bold opacity-70 text-[17px]">
                    Gender {""}
                    <span className="text-red-500 ">(Required)*</span>
                  </h1>
                </label>
                <select
                  {...register("gender")}
                  required
                  className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3"
                >
                  <option defaultValue={true}>Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="label">
                  <h1 className="font-bold opacity-70 text-[17px]">
                    Teacher Phone Number
                    <span className="text-red-500 ">(Required)*</span>
                  </h1>
                </label>
                <input
                  className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3"
                  required
                  type="text"
                  placeholder="Teacher Phone Number"
                  {...register("teacherPhoneNumber")}
                />
              </div>
              <div>
                <label className="label">
                  <h1 className="font-bold opacity-70 text-[17px]">
                    Teacher Email {""}
                    <span className="text-red-500 ">(Required)*</span>
                  </h1>
                </label>
                <input
                  className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3"
                  required
                  type="text"
                  placeholder="Teacher Email"
                  {...register("teacherEmail")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="text-[17px] opacity-70 font-bold">
                    Teaching Shift {""}
                    <span className="text-red-500 ">(Required)*</span>
                  </span>
                </label>
                <select
                  required
                  {...register("teachingShift")}
                  className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3"
                >
                  <option defaultValue={true}>Select Shift</option>
                  <option value="Morning">Morning</option>
                  <option value="Day">Day</option>
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="text-[17px] opacity-70 font-bold">
                    Class <span className="text-red-500 ">(Required)*</span>
                  </span>
                </label>
                <select
                  required
                  {...register("teachingClass")}
                  className="outline-[#FFBE15] h-12 w-full px-3 bg-black bg-opacity-5 rounded-md"
                  onChange={(e) => {
                    setGroup(e.target.value);
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
              {group === "Nine" ||
              group === "Ten" ||
              group === "Eleven" ||
              group === "Twelve" ? (
                <div>
                  <label className="label">
                    <span className="text-[17px] opacity-70 font-bold">
                      Group <span className="text-red-500 ">(Required)*</span>
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
                  <span className="text-[17px] opacity-70 font-bold">
                    Section <span className="text-red-500 ">(Required)*</span>
                  </span>
                </label>
                <select
                  required
                  {...register("teachingSection")}
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
                <label className="label">
                  <span className="text-[17px] opacity-70 font-bold">
                    Teaching Subject {""}
                    <span className="text-red-500 ">(Required)*</span>
                  </span>
                </label>
                <select
                  required
                  {...register("subjectName")}
                  className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3"
                >
                  <option defaultValue={true}>Select Subject</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Physics">Physics</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="English">English</option>
                  <option value="Bangla">Bangla</option>
                  <option value="Bangladesh and Global Studies">
                    Bangladesh and Global Studies
                  </option>
                  <option value="Islam and Moral Education">
                    Islam and Moral Education
                  </option>
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="text-[17px] opacity-70 font-bold">
                    Date <span className="text-red-500 ">(Required)*</span>
                  </span>
                </label>
                <input
                  required
                  className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3"
                  placeholder="Date of class"
                  type="date"
                  {...register("dateOfClass")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="text-[17px] opacity-70 font-bold">
                    Class Time{" "}
                    <span className="text-red-500 ">(Required)*</span>
                  </span>
                </label>
                <TimeRangePicker
                  required={true}
                  className="h-12 bg-black bg-opacity-5 w-full rounded-md"
                  onChange={onChange}
                  value={value}
                />
              </div>
            </div>
            {/* 5th row */}

            <div className="flex items-center gap-4">
              <input
                className="uppercase px-10 py-3 text-white  text-xl font-bold  bg-[#FFBE15] rounded-md hover:bg-[#042954] cursor-pointer"
                type="submit"
                value="Save"
              />
              <input
                className="uppercase px-10 py-3 text-white  text-xl font-bold  bg-[#042954] hover:bg-[#FFBE15] rounded-md cursor-pointer"
                type="reset"
                value="Reset"
                onClick={(e) => e.target.reset()}
              />
            </div>
          </form>
        </div>
      </div>
      <div className="container flex items-center justify-center xl:gap-2 lg:gap-2 gap-1 xl:text-[18px] font-semibold text-black h-[100px] mb-24">
        <h1 className="xl:text-[18px] font-semibold text-black">
          Copyright © 2023 - All right reserved by
        </h1>
        <img className="h-[26px] mt-[6.5px]" src={icon} alt="amader-school" />
        <h1>Ltd.</h1>
      </div>
    </div>
  );
};

export default AddNewClassSchedule;
