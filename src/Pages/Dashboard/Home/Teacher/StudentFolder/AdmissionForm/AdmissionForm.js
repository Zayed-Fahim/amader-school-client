import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import icon from "../../../../../../Assets/dashboard-icon/dashboard.png";
import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";

const AdmissionForm = () => {
  const { register, handleSubmit } = useForm({});
  const { teacher } = useContext(AuthContext);
  const formRef = useRef();
  // conditional showing of group
  const [group, setGroup] = useState(false);
  const [image, setImage] = useState(null);

  const handleAdmissionForm = (data, event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    const imgBbUrl = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_key}`;

    axios
      .post(imgBbUrl, formData)
      .then((res) => {
        const imgData = res.data;
        if (imgData.success) {
          const studentDetails = {
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
            assignedClass: data.class,
            group: data.group,
            section: data.section.toUpperCase(),
            rollNumber: data.roll,
            id: data.id.toUpperCase(),
            photo: imgData.data.url,
            address: data.address,
            shortBio: data.bio,
            shift: data.shift,
            classTeacher: { id: teacher?._id }, // Update this line
            schoolAuthority: { id: teacher?.admin?.id },
          };
          axios
            .post("http://localhost:8080/api/v1/students", studentDetails)
            .then((response) => {
              if (response) {
                toast.success("Admission Successful!");
                event.target.reset();
              }
            })
            .catch((error) => {
              toast.error("Admission Unsuccessful!");
            });
        } else if (imgData.status_code === 400) {
          toast.error("Admission Unsuccessful!");
        }
      })
      .catch((error) => {
        toast.error("Admission Unsuccessful!");
      });
  };

  return (
    <div className="overflow-y-hidden overflow-x-hidden relative left-[360px] top-24 2xl:w-[79.3%]">
      <div className="text-[17px] font-semibold breadcrumbs mb-8">
        <ul>
          <li className="hover:text-[#FFBE15] ">
            <Link to={`/dashboard/admin`}>Dashboard</Link>
          </li>
          <li>Student</li>
          <li className="text-[#FFBE15]">Add New Student</li>
        </ul>
      </div>

      <div className=" bg-white">
        <h1 className="text-2xl font-bold px-10 pt-8 ">Add Advised Student</h1>
        {/* form start */}
        <form
          onSubmit={handleSubmit(handleAdmissionForm)}
          className="flex flex-col w-full h-auto gap-8 px-10 py-8"
          ref={formRef}
        >
          {/* 1st row */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 2xl:gap-y-2 xl:gap-x-10 2xl:gap-x-5">
            <div>
              <label className="block mb-1 font-bold">Full Name</label>
              <input
                required
                className="w-full px-3 py-2 border rounded focus:outline-none"
                placeholder="Full Name"
                {...register("fullName")}
              />
            </div>
            <div>
              <label className="block mb-1 font-bold">User Name</label>
              <input
                required
                className="w-full px-3 py-2 border rounded focus:outline-none"
                placeholder="User Name"
                {...register("userName")}
              />
            </div>
            <div>
              <label className="block mb-1 font-bold">Gender</label>
              <select
                required
                {...register("gender")}
                className="w-full px-3 py-2 border rounded focus:outline-none"
              >
                <option defaultValue={true}>Select Gender</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-bold">Role</label>
              <input
                required
                className="w-full px-3 py-2 border rounded focus:outline-none"
                readOnly
                value="Student"
                {...register("role")}
              />
            </div>

            {/* 2nd row */}

            <div>
              <label className="block mb-1 font-bold">Father's Name</label>
              <input
                required
                className="w-full px-3 py-2 border rounded focus:outline-none"
                placeholder="Father's name"
                {...register("fatherName")}
              />
            </div>
            <div>
              <label className="block mb-1 font-bold">Mother's Name</label>
              <input
                required
                className="w-full px-3 py-2 border rounded focus:outline-none"
                placeholder="Mother's name"
                {...register("motherName")}
              />
            </div>
            <div>
              <label className="block mb-1 font-bold">Date Of Birth</label>
              <input
                required
                className="w-full px-3 py-2 border rounded focus:outline-none"
                placeholder="Date Of Birth"
                type="date"
                {...register("dateOfBirth")}
              />
            </div>
            <div>
              <label className="block mb-1 font-bold">Religion</label>
              <select
                required
                {...register("religion")}
                className="w-full px-3 py-2 border rounded focus:outline-none"
              >
                <option defaultValue={true}>Select Religion</option>
                <option value="Islam">Islam</option>
                <option value="Hindu">Hindu</option>
                <option value="Christian">Christian</option>
                <option value="Buddha">Buddha</option>
              </select>
            </div>

            {/* 3rd row */}

            <div>
              <label className="block mb-1 font-bold">Email</label>
              <input
                required
                className="w-full px-3 py-2 border rounded focus:outline-none"
                placeholder="Your Email"
                {...register("email")}
              />
            </div>
            <div>
              <label className="block mb-1 font-bold">Phone Number</label>
              <input
                required
                className="w-full px-3 py-2 border rounded focus:outline-none"
                type="tel"
                placeholder="Your Phone"
                {...register("phone")}
              />
            </div>
            <div>
              <label className="block mb-1 font-bold">Password</label>
              <input
                required
                className="w-full px-3 py-2 border rounded focus:outline-none"
                type="text"
                placeholder="Your Password"
                {...register("password")}
              />
            </div>
            <div>
              <label className="block mb-1 font-bold">School Tag</label>
              {teacher && teacher?.schoolTag ? (
                <select
                  required
                  {...register("schoolTag")}
                  className="w-full px-3 py-2 border rounded focus:outline-none"
                >
                  <option defaultValue={true}>Select School Tag</option>
                  <option value={teacher?.schoolTag}>
                    {teacher?.schoolTag}
                  </option>
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
            <div>
              <label className="block mb-1 font-bold">Shift</label>
              <select
                required
                {...register("shift")}
                className="w-full px-3 py-2 border rounded focus:outline-none"
              >
                <option defaultValue={true}>Select Shift</option>
                <option value={teacher.shift}>{teacher.shift}</option>
              </select>
            </div>
            {/* 4th row */}
            <div>
              <label className="block mb-1 font-bold">Class</label>
              <select
                required
                {...register("class")}
                className="w-full px-3 py-2 border rounded focus:outline-none"
                onChange={(e) => {
                  setGroup(e.target.value);
                }}
              >
                <option value="Select class">Select Class</option>
                <option value={teacher.teacherOfClass}>
                  {teacher.teacherOfClass}
                </option>
              </select>
            </div>

            {teacher && teacher?.teacherOfGroup ? (
              <div>
                <label className="block mb-1 font-bold">Group</label>
                <select
                  required
                  {...register("group")}
                  className="w-full px-3 py-2 border rounded focus:outline-none"
                >
                  <option defaultValue={true}>Select Group</option>
                  <option value={teacher?.teacherOfGroup}>
                    {teacher?.teacherOfGroup}
                  </option>
                </select>
              </div>
            ) : null}

            <div>
              <label className="block mb-1 font-bold">Section</label>
              <select
                required
                {...register("section")}
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
              <label className="block mb-1 font-bold">Roll Number</label>
              <input
                required
                className="w-full px-3 py-2 border rounded focus:outline-none"
                type="number"
                min={1}
                placeholder="Your Roll"
                {...register("roll")}
              />
            </div>
            {/* 5th row */}
            <div>
              <label className="block mb-1 font-bold">ID Number</label>
              <input
                required
                className="w-full px-3 py-2 border rounded focus:outline-none"
                placeholder="Your ID"
                type="text"
                {...register("id")}
              />
            </div>
            <div>
              <label className="block mb-1 font-bold">Your Photo</label>
              <input
                required
                type="file"
                className="w-full px-3 py-2 border rounded focus:outline-none"
                {...register("picture")}
                onChange={(event) => setImage(event.target.files[0])}
              />
            </div>
            <div>
              <label className="block mb-1 font-bold">Address</label>
              <input
                required
                type="text"
                className="w-full px-3 py-2 border rounded focus:outline-none"
                placeholder="Your Address"
                {...register("address")}
              />
            </div>
            <div>
              <label className="block mb-1 font-bold">Short Bio</label>
              <textarea
                cols="91"
                required
                rows="4"
                className="w-full px-3 py-2 border rounded focus:outline-none"
                placeholder="Say Something"
                {...register("bio")}
              ></textarea>
            </div>
          </div>
          {/* 5th row */}

          <div className="mb-[10px] flex items-center gap-4">
            <input
              className="uppercase px-10 py-3 text-white  text-xl font-bold  bg-[#FFBE15] rounded-md hover:bg-[#042954]"
              type="submit"
              value="Save"
            />
            <input
              className="uppercase px-10 py-3 text-white  text-xl font-bold  bg-[#042954] rounded-md hover:bg-[#FFBE15]"
              type="reset"
              value="Reset"
              onClick={(e) => formRef.current.reset()}
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

export default AdmissionForm;
