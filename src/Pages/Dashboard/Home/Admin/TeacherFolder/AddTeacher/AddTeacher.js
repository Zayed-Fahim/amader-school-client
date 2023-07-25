import React, { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import axios from "axios";
import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import icon from "../../../../../../Assets/dashboard-icon/dashboard.png";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const AddTeacher = () => {
  const { register, handleSubmit } = useForm();
  // conditional showing of group
  const [classTeacher, setClassTeacher] = useState(null);
  const [image, setImage] = useState(null);
  const [assignedClass, setAssignedClass] = useState(null);
  const { admin } = useContext(AuthContext);
  const formRef = useRef();

  const queryClient = useQueryClient();
  const addTeacherMutation = useMutation(
    (teacherDetails) =>
      axios.post(
        "https://amader-school-server-v1.vercel.app/api/v1/teachers",
        teacherDetails,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      ),
    {
      onSuccess: () => {
        toast.success("Successfully added the teacher!");
        formRef.current.reset();
        queryClient.invalidateQueries("addTeacher");
      },
      onError: () => {
        toast.error("Oops! Addition Unsuccessful!");
      },
    }
  );

  const handleAddTeacher = (data, event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    const imgBbUrl = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_key}`;
    fetch(imgBbUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const teacherDetails = {
            fullName: data.fullName,
            userName: data.userName,
            gender: data.gender,
            role: data.role,
            fatherName: data.fatherName,
            motherName: data.motherName,
            dateOfBirth: data.dateOfBirth,
            religion: data.religion,
            email: data.email,
            phoneNumber: data.phone,
            password: data.password,
            schoolTag: data.schoolTag.toUpperCase(),
            classTeacher: data.classTeacher,
            teacherOfClass: data.teacherOfClass,
            sectionOfClass: data.sectionOfClass.toUpperCase(),
            teacherOfGroup: data.group,
            subjectName: data.subjectName,
            id: data.id,
            photo: imgData.data.url,
            shortBio: data.shortBio,
            address: data.address,
            shift: data.shift,
            admin: { id: admin._id },
          };
          addTeacherMutation.mutate(teacherDetails);
        } else if (imgData.status_code === 400) {
          toast.error("ops! Addition Unsuccessful!");
          toast.error("Couldn't create the user account!");
        }
      });
  };

  return (
    <div className="overflow-y-hidden overflow-x-hidden relative 2xl:left-[360px] top-24 2xl:w-[79.3%]">
      <div className="text-[17px] font-semibold breadcrumbs mb-8">
        <ul>
          <li className="hover:text-[#FFBE15]">
            <Link to="/dashboard/admin">Dashboard</Link>
          </li>
          <li>Teachers</li>
          <li className="text-[#FFBE15]">Add Teacher</li>
        </ul>
      </div>
      <div className="bg-white">
        <h1 className="text-2xl font-bold px-10 pt-8 ">Add New Teacher</h1>
        <form
          ref={formRef}
          onSubmit={handleSubmit(handleAddTeacher)}
          className="flex flex-col w-full h-auto gap-8 px-10 2xl:pb-10 2xl:pt-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 2xl:gap-y-2 xl:gap-x-10 2xl:gap-x-5">
            <div className="mb-4">
              <label className="block mb-1 font-bold">Full Name*</label>
              <input
                required
                className="w-full px-3 py-2 border rounded focus:outline-none"
                placeholder="Full Name"
                {...register("fullName")}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-bold">User Name*</label>
              <input
                required
                className="w-full px-3 py-2 border rounded focus:outline-none"
                placeholder="User Name"
                {...register("userName")}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-bold">Gender</label>
              <select
                required
                {...register("gender")}
                className="w-full px-3 py-2 border rounded focus:outline-none"
              >
                <option defaultValue={false}>Select Gender</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-bold">Role</label>
              <input
                required
                className="w-full px-3 py-2 border rounded focus:outline-none"
                readOnly
                value="Teacher"
                {...register("role")}
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-bold">Father's Name</label>
              <input
                required
                className="w-full px-3 py-2 border rounded focus:outline-none"
                placeholder="Father's name"
                {...register("fatherName")}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-bold">Mother's Name</label>
              <input
                required
                className="w-full px-3 py-2 border rounded focus:outline-none"
                placeholder="Mother's name"
                {...register("motherName")}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-bold">Date Of Birth</label>
              <input
                required
                className="w-full px-3 py-2 border rounded focus:outline-none"
                placeholder="Date Of Birth"
                type="date"
                {...register("dateOfBirth")}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-bold">Religion</label>
              <select
                required
                {...register("religion")}
                className="w-full px-3 py-2 border rounded focus:outline-none"
              >
                <option defaultValue={false}>Select Religion</option>
                <option value="Islam">Islam</option>
                <option value="Hindu">Hindu</option>
                <option value="Christian">Christian</option>
                <option value="Buddha">Buddha</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-bold">Email</label>
              <input
                required
                className="w-full px-3 py-2 border rounded focus:outline-none"
                placeholder="Your Email"
                {...register("email")}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-bold">Phone Number</label>
              <input
                required
                className="w-full px-3 py-2 border rounded focus:outline-none"
                type="tel"
                placeholder="Your Phone"
                {...register("phone")}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-bold">Password</label>
              <input
                required
                className="w-full px-3 py-2 border rounded focus:outline-none"
                type="text"
                placeholder="Your Password"
                {...register("password")}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-bold">School Tag</label>
              {admin && admin?.schoolTag ? (
                <select
                  required
                  {...register("schoolTag")}
                  className="w-full px-3 py-2 border rounded focus:outline-none"
                >
                  <option defaultValue={false}>Select School Tag</option>
                  <option value={admin?.schoolTag}>{admin?.schoolTag}</option>
                </select>
              ) : (
                <input
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none"
                  placeholder="Your School Tag"
                  {...register("schoolTag")}
                />
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-bold">Teaching Shift</label>
              <select
                required
                {...register("shift")}
                className="w-full px-3 py-2 border rounded focus:outline-none"
              >
                <option defaultValue={false}>Select Shift</option>
                <option value="Morning">Morning</option>
                <option value="Day">Day</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-bold">Class Teacher</label>
              <select
                required
                {...register("classTeacher")}
                className="w-full px-3 py-2 border rounded focus:outline-none"
                onChange={(e) => {
                  setClassTeacher(e.target.value);
                }}
              >
                <option defaultValue={false}>Select Option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            {classTeacher === "Yes" && (
              <div className="mb-4">
                <label className="block mb-1 font-bold">Teacher of</label>
                <select
                  required
                  {...register("teacherOfClass")}
                  className="w-full px-3 py-2 border rounded focus:outline-none"
                  onChange={(e) => setAssignedClass(e.target.value)}
                >
                  <option defaultValue={false}>Select Class</option>
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
            )}
            {classTeacher === "Yes" && (
              <div className="mb-4">
                <label className="block mb-1 font-bold">Group</label>
                <select
                  required
                  {...register("group")}
                  className="w-full px-3 py-2 border rounded focus:outline-none"
                >
                  <option defaultValue={false}>Select Group</option>
                  <option value="Science">Science</option>
                  <option value="Commerce">Commerce</option>
                  <option value="Arts">Arts</option>
                </select>
              </div>
            )}
            {classTeacher === "Yes" && (
              <div className="mb-4">
                <label className="block mb-1 font-bold">
                  Teacher of Section
                </label>
                <select
                  required
                  {...register("sectionOfClass")}
                  className="w-full px-3 py-2 border rounded focus:outline-none"
                >
                  <option defaultValue={false}>Select Section</option>
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
            )}
            <div className="mb-4">
              <label className="block mb-1 font-bold">Teaching Subject</label>
              <select
                required
                {...register("subjectName")}
                className="w-full px-3 py-2 border rounded focus:outline-none"
              >
                <option defaultValue={false}>Select Subject</option>
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

            <div className="mb-4">
              <label className="block mb-1 font-bold">ID Number</label>
              <input
                required
                className="w-full px-3 py-2 border rounded focus:outline-none"
                type="number"
                min={0}
                placeholder="Your ID"
                {...register("id")}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-bold">Your Photo</label>
              <input
                required
                type="file"
                className="w-full px-3 py-2 border rounded focus:outline-none"
                {...register("picture")}
                onChange={(event) => setImage(event.target.files[0])}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-bold">Address</label>
              <input
                required
                type="text"
                className="w-full px-3 py-2 border rounded focus:outline-none"
                placeholder="Your Address"
                {...register("address")}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-bold">Short Bio</label>
              <textarea
                cols="91"
                rows="4"
                className="w-full px-3 py-2 border rounded focus:outline-none"
                {...register("shortBio")}
                placeholder="Say Something"
              ></textarea>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <input
              required
              className="uppercase px-10 py-3 text-white  text-xl font-bold  bg-[#FFBE15] rounded-md hover:bg-[#042954]"
              type="submit"
              value="Save"
            />
            <input
              required
              className="uppercase px-10 py-3 text-white  text-xl font-bold  bg-[#042954] rounded-md hover:bg-[#FFBE15]"
              type="reset"
              value="Reset"
              onClick={() => formRef.current.reset()}
            />
          </div>
        </form>
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

export default AddTeacher;
