import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import icon from "../../../../../Assets/dashboard-icon/dashboard.png";
import { BiEdit } from "react-icons/bi";
import { AuthContext } from "../../../../../Contexts/AuthProvider/AuthProvider";

const TeacherUpdateProfile = () => {
  const { teacher } = useContext(AuthContext);
  const [isEditMode, setIsEditMode] = useState(false);
  const { register, handleSubmit, setValue } = useForm();

  // Fetch user profile data from an API or data source
  useEffect(() => {
    // Simulating fetching user data from an API
    setTimeout(() => {
      setValue("fullName", teacher?.fullName);
      setValue("userName", teacher?.userName);
      setValue("gender", teacher?.gender);
      setValue("fatherName", teacher?.fatherName);
      setValue("motherName", teacher?.motherName);
      setValue("dateOfBirth", teacher?.dateOfBirth);
      setValue("email", teacher?.email);
      setValue("phoneNumber", teacher?.phoneNumber);
      setValue("schoolTag", teacher?.schoolTag);
      setValue("classTeacher", teacher?.classTeacher);
      setValue("teacherOfClass", teacher?.teacherOfClass);
      setValue("sectionOfClass", teacher?.sectionOfClass);
      setValue("teacherOfGroup", teacher?.teacherOfGroup);
      setValue("subjectName", teacher?.subjectName);
      setValue("id", teacher?.id);
      setValue("photo", teacher?.photo);
      setValue("address", teacher?.address);
      setValue("shortBio", teacher?.shortBio);
      setValue("shift", teacher?.shift);
      setValue("religion", teacher?.religion);
    }, 1000);
  }, [setValue, teacher]);

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleCancelEdit = () => {
    setIsEditMode(false);
  };

  const onSubmit = (data) => {
    // Perform update profile logic here
    console.log("Name:", data.fullName);
    console.log("Email:", data.email);
    console.log("Bio:", data.bio);
    setIsEditMode(false);
  };

  return (
    <div className="2xl:w-[79.3%] relative top-24 2xl:left-[360px]">
      <div className="text-[17px] font-semibold breadcrumbs mb-8">
        <ul>
          <li className="hover:text-[#FFBE15] ">
            <Link to={`/dashboard/teacher?`}>Dashboard</Link>
          </li>
          <li className="text-[#FFBE15]">Update Profile</li>
        </ul>
      </div>
      <div className="bg-white 2xl:px-8 2xl:py-10 w-full">
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-semibold">Update Profile</h2>
          {!isEditMode && (
            <BiEdit
              size={20}
              className="hover:text-[#FFBE15]"
              onClick={handleEdit}
              title="Edit"
            />
          )}
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-3 gap-5 ">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className={`mt-1 focus:outline-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm text-sm ${
                  isEditMode ? "bg-white" : "bg-gray-100"
                }`}
                {...register("fullName", { required: true })}
                readOnly={!isEditMode}
              />
            </div>
            <div>
              <label
                htmlFor="userName"
                className="block text-sm font-medium text-gray-700"
              >
                User Name
              </label>
              <input
                type="userName"
                id="userName"
                className={`mt-1 focus:outline-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm text-sm ${
                  isEditMode ? "bg-white" : "bg-gray-100"
                }`}
                {...register("userName", { required: true })}
                readOnly={!isEditMode}
              />
            </div>
            <div>
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700"
              >
                Gender
              </label>
              <input
                id="gender"
                className="mt-1 focus:outline-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm text-sm bg-gray-100"
                {...register("gender", { required: true })}
                readOnly
              />
            </div>
            <div>
              <label
                htmlFor="religion"
                className="block text-sm font-medium text-gray-700"
              >
                Religion
              </label>
              <input
                id="religion"
                className="mt-1 focus:outline-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm text-sm bg-gray-100"
                {...register("religion", { required: true })}
                readOnly
              />
            </div>
            <div>
              <label
                htmlFor="fatherName"
                className="block text-sm font-medium text-gray-700"
              >
                Father Name
              </label>
              <input
                id="fatherName"
                className={`mt-1 focus:outline-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm text-sm ${
                  isEditMode ? "bg-white" : "bg-gray-100"
                }`}
                {...register("fatherName", { required: true })}
                readOnly={!isEditMode}
              />
            </div>
            <div>
              <label
                htmlFor="motherName"
                className="block text-sm font-medium text-gray-700"
              >
                Mother Name
              </label>
              <input
                id="motherName"
                className={`mt-1 focus:outline-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm text-sm ${
                  isEditMode ? "bg-white" : "bg-gray-100"
                }`}
                {...register("motherName", { required: true })}
                readOnly={!isEditMode}
              />
            </div>
            <div>
              <label
                htmlFor="dateOfBirth"
                className="block text-sm font-medium text-gray-700"
              >
                Date of Birth
              </label>
              <input
                id="dateOfBirth"
                className="mt-1 focus:outline-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm text-sm bg-gray-100"
                {...register("dateOfBirth", { required: true })}
                readOnly
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                className={`mt-1 focus:outline-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm text-sm ${
                  isEditMode ? "bg-white" : "bg-gray-100"
                }`}
                {...register("email", { required: true })}
                readOnly={!isEditMode}
              />
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                id="phoneNumber"
                className={`mt-1 focus:outline-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm text-sm ${
                  isEditMode ? "bg-white" : "bg-gray-100"
                }`}
                {...register("phoneNumber", { required: true })}
                readOnly={!isEditMode}
              />
            </div>
            <div>
              <label
                htmlFor="schoolTag"
                className="block text-sm font-medium text-gray-700"
              >
                School Tag
              </label>
              <input
                id="schoolTag"
                className="mt-1 focus:outline-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm text-smbg-gray-100"
                {...register("schoolTag", { required: true })}
                readOnly
              />
            </div>
            <div>
              <label
                htmlFor="shift"
                className="block text-sm font-medium text-gray-700"
              >
                Shift
              </label>
              <input
                id="shift"
                className="mt-1 focus:outline-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm text-sm bg-gray-100"
                {...register("shift", { required: true })}
                readOnly
              />
            </div>
            <div>
              <label
                htmlFor="classTeacher"
                className="block text-sm font-medium text-gray-700"
              >
                Class Teacher
              </label>
              <input
                id="classTeacher"
                className="mt-1 focus:outline-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm text-sm bg-gray-100"
                {...register("classTeacher", { required: true })}
                readOnly
              />
            </div>
            <div>
              <label
                htmlFor="teacherOfClass"
                className="block text-sm font-medium text-gray-700"
              >
                Teacher Of Class
              </label>
              <input
                id="teacherOfClass"
                className="mt-1 focus:outline-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm text-sm bg-gray-100"
                {...register("teacherOfClass", { required: true })}
                readOnly
              />
            </div>
            <div>
              <label
                htmlFor="sectionOfClass"
                className="block text-sm font-medium text-gray-700"
              >
                Teacher of Section
              </label>
              <input
                id="sectionOfClass"
                className="mt-1 focus:outline-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm text-sm bg-gray-100"
                {...register("sectionOfClass", { required: true })}
                readOnly
              />
            </div>
            <div>
              <label
                htmlFor="teacherOfGroup"
                className="block text-sm font-medium text-gray-700"
              >
                Teacher of Group
              </label>
              <input
                id="teacherOfGroup"
                className="mt-1 focus:outline-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm text-sm bg-gray-100"
                {...register("teacherOfGroup", { required: true })}
                readOnly
              />
            </div>
            <div>
              <label
                htmlFor="subjectName"
                className="block text-sm font-medium text-gray-700"
              >
                Teaching Subject
              </label>
              <input
                id="subjectName"
                className="mt-1 focus:outline-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm text-sm bg-gray-100"
                {...register("subjectName", { required: true })}
                readOnly
              />
            </div>
            <div>
              <label
                htmlFor="id"
                className="block text-sm font-medium text-gray-700"
              >
                ID
              </label>
              <input
                id="id"
                className="mt-1 focus:outline-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm text-sm bg-gray-100"
                {...register("id", { required: true })}
                readOnly
              />
            </div>
            <div>
              <label
                htmlFor="photo"
                className="block text-sm font-medium text-gray-700"
              >
                Photo
              </label>
              <input
                id="photo"
                type={`${isEditMode ? "file" : teacher?.photo}`}
                className={`mt-1 focus:outline-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm text-sm ${
                  isEditMode ? "bg-white" : "bg-gray-100"
                }`}
                {...register("photo", { required: true })}
                readOnly={!isEditMode}
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                id="address"
                className={`mt-1 focus:outline-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm text-sm ${
                  isEditMode ? "bg-white" : "bg-gray-100"
                }`}
                {...register("address", { required: true })}
                readOnly={!isEditMode}
              />
            </div>
            <div>
              <label
                htmlFor="shortBio"
                className="block text-sm font-medium text-gray-700"
              >
                Bio
              </label>
              <textarea
                id="shortBio"
                className={`mt-1 focus:outline-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm text-sm ${
                  isEditMode ? "bg-white" : "bg-gray-100"
                }`}
                {...register("shortBio", { required: true })}
                readOnly={!isEditMode}
              />
            </div>
          </div>
          {isEditMode && (
            <div className="text-left flex gap-5">
              <button
                type="submit"
                className="inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600"
              >
                Save
              </button>
              <button
                type="button"
                className="inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md bg-gray-200 hover:bg-gray-100"
                onClick={handleCancelEdit}
              >
                Cancel
              </button>
            </div>
          )}
        </form>
      </div>
      <div className="container flex items-center justify-center xl:gap-2 lg:gap-2 gap-1 xl:text-[18px] font-semibold text-black h-[100px] mb-24 mt-2">
        <h1 className="xl:text-[18px] font-semibold text-black">
          © 2023 - All rights reserved by
        </h1>
        <img className="h-[26px] mt-[6.5px]" src={icon} alt="amader-school" />
        <h1>Ltd.</h1>
      </div>
    </div>
  );
};

export default TeacherUpdateProfile;
