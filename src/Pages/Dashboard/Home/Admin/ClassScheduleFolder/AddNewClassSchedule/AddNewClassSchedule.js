import React, { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import icon from "../../../../../../Assets/dashboard-icon/dashboard.png";
import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";

const AddNewClassSchedule = () => {
  const { register, handleSubmit } = useForm();
  const [group, setGroup] = useState(false);
  const [teachingShift, setTeachingShift] = useState();
  const { admin } = useContext(AuthContext);
  const formRef = useRef();

  const handleAddNewClassSchedule = async (data, event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://v1-amader-school-server.vercel.app/api/v1/class-schedules",
        {
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
          classTime: data.classTime,
          admin: { id: admin?._id, schoolTag: admin?.schoolTag },
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (response.status === 200) {
        toast.success(`${response.data.message}`);
        formRef.current.reset();
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        toast.error(`${error.response.data.message}`);
      } else {
        toast.error("Error adding new class schedule");
      }
    }
  };
  return (
    <div className="min-h-[89vh] relative 2xl:left-[360px] top-24 2xl:w-[79.3%] ">
      <div className="text-[17px] font-semibold breadcrumbs mb-8">
        <ul>
          <li className="hover:text-[#FFBE15] ">
            <Link to={`/dashboard/admin`}>Dashboard</Link>
          </li>
          <li>Class Schedule</li>
          <li className="text-[#FFBE15]">Add New Class Schedule</li>
        </ul>
      </div>
      <div className="flex flex-col xl:min-h-[620px] bg-white 2xl:px-8">
        <div>
          <h1 className="text-2xl font-bold py-8">Add New Class Schedule</h1>
        </div>
        <div>
          <form
            onSubmit={handleSubmit(handleAddNewClassSchedule)}
            className="flex flex-col w-full gap-5 h-[410px]"
            ref={formRef}
          >
            {/* 1st row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 lg:gap-4">
              <div>
                <label className="block font-bold mb-4">
                  Teacher Name {""}
                </label>
                <input
                  className="w-full px-3 py-2 border rounded focus:outline-none"
                  required
                  type="text"
                  placeholder="Name of Teacher"
                  {...register("teacherName")}
                />
              </div>
              <div>
                <label className="block font-bold mb-4">
                  Teacher ID NO {""}
                </label>
                <input
                  className="w-full px-3 py-2 border rounded focus:outline-none"
                  required
                  type="text"
                  placeholder="Teacher ID"
                  {...register("teacherId")}
                />
              </div>

              <div>
                <label className="block font-bold mb-4">Gender {""}</label>
                <select
                  {...register("gender")}
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none"
                >
                  <option defaultValue={true}>Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block font-bold mb-4">
                  Teacher Phone Number
                </label>
                <input
                  className="w-full px-3 py-2 border rounded focus:outline-none"
                  required
                  type="text"
                  placeholder="Teacher Phone Number"
                  {...register("teacherPhoneNumber")}
                />
              </div>
              <div>
                <label className="block font-bold mb-4">Teacher Email</label>
                <input
                  className="w-full px-3 py-2 border rounded focus:outline-none"
                  required
                  type="text"
                  placeholder="Teacher Email"
                  {...register("teacherEmail")}
                />
              </div>
              <div>
                <label className="block font-bold mb-4">Teaching Shift</label>
                <select
                  required
                  {...register("teachingShift")}
                  onChange={(e) => setTeachingShift(e.target.value)}
                  className="w-full px-3 py-2 border rounded focus:outline-none"
                >
                  <option defaultValue={true}>Select Shift</option>
                  <option value="Morning">Morning</option>
                  <option value="Day">Day</option>
                </select>
              </div>
              <div>
                <label className="block font-bold mb-4">Class</label>
                <select
                  required
                  {...register("teachingClass")}
                  className="w-full px-3 py-2 border rounded focus:outline-none"
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
                  <label className="block font-bold mb-4">Group</label>
                  <select
                    required
                    {...register("group")}
                    className="w-full px-3 py-2 border rounded focus:outline-none"
                  >
                    <option defaultValue={true}>Select Group</option>
                    <option value="Science">Science</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Arts">Arts</option>
                  </select>
                </div>
              ) : null}
              <div>
                <label className="block font-bold mb-4">Section</label>
                <select
                  required
                  {...register("teachingSection")}
                  className="w-full px-3 py-2 border rounded focus:outline-none"
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
                <label className="block font-bold mb-4">Teaching Subject</label>
                <select
                  required
                  {...register("subjectName")}
                  className="w-full px-3 py-2 border rounded focus:outline-none"
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
                <label className="block font-bold mb-4">Date</label>
                <input
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none"
                  placeholder="Date of class"
                  type="date"
                  {...register("dateOfClass")}
                />
              </div>
              <div>
                <label className="block font-bold mb-4">Class Time</label>
                {teachingShift && teachingShift === "Day" ? (
                  <select
                    required
                    {...register("classTime")}
                    className="w-full px-3 py-2 border rounded focus:outline-none"
                  >
                    <option defaultValue={true}>Select Class Time</option>
                    <option value="12:25pm - 01:05pm">12:25pm - 01:05pm</option>
                    <option value="01:05pm - 01:45pm">01:05pm - 01:45pm</option>
                    <option value="01:45pm - 02:25pm">01:45pm - 02:25pm</option>
                    <option value="02:25pm - 03:05pm">02:25pm - 03:05pm</option>
                    <option value="03:05pm - 03:40pm">03:05pm - 03:40pm</option>
                    <option value="03:40pm - 04:15pm">03:40pm - 04:15pm</option>
                    <option value="04:15pm - 04:50pm">04:15pm - 04:50pm</option>
                  </select>
                ) : (
                  <input
                    className="w-full px-3 py-2 border rounded focus:outline-none"
                    disabled
                    type="text"
                    placeholder="Please select shift first"
                  />
                )}
              </div>
            </div>
            {/* 5th row */}

            <div className="flex items-center gap-4 mt-6">
              <input
                className="uppercase px-10 py-3 text-white  text-xl font-bold  bg-[#FFBE15] rounded-md hover:bg-[#042954] cursor-pointer"
                type="submit"
                value="Save"
              />
              <input
                className="uppercase px-10 py-3 text-white  text-xl font-bold  bg-[#042954] hover:bg-[#FFBE15] rounded-md cursor-pointer"
                type="reset"
                value="Reset"
                onClick={() => formRef.current.reset()}
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
