import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import icon from "../../../../../Assets/dashboard-icon/dashboard.png";
import { BiEdit } from "react-icons/bi";
import { AuthContext } from "../../../../../Contexts/AuthProvider/AuthProvider";
import axios from "axios";
import { toast } from "react-hot-toast";

const StudentUpdateProfilePage = () => {
  const { student } = useContext(AuthContext);
  const [isEditMode, setIsEditMode] = useState(false);
  const [image, setImage] = useState(null);
  const { register, handleSubmit, setValue } = useForm();

  // Fetch user profile data from an API or data source
  useEffect(() => {
    // Simulating fetching user data from an API
    setTimeout(() => {
      setValue("fullName", student.fullName);
      setValue("userName", student.userName);
      setValue("gender", student.gender);
      setValue("fatherName", student.fatherName);
      setValue("motherName", student.motherName);
      setValue("dateOfBirth", student.dateOfBirth);
      setValue("email", student.email);
      setValue("phoneNumber", student.phoneNumber);
      setValue("schoolTag", student.schoolTag);
      setValue("assignedClass", student.assignedClass);
      setValue("section", student.section);
      setValue("group", student.group);
      setValue("rollNumber", student.rollNumber);
      setValue("id", student.id);
      setValue("photo", student.photo);
      setValue("address", student.address);
      setValue("shortBio", student.shortBio);
      setValue("shift", student.shift);
      setValue("religion", student.religion);
    }, 500);
  }, [setValue, student]);

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleCancelEdit = () => {
    setIsEditMode(false);
  };

  const onSubmit = async (data, event) => {
    event.preventDefault();
    let imgDataUrl = student?.photo; // Default value is the current student photo URL

    if (image) {
      // If a new image is selected, upload it to imgbb
      const formData = new FormData();
      formData.append("image", image);
      const imgBbUrl = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_key}`;

      try {
        const res = await fetch(imgBbUrl, {
          method: "POST",
          body: formData,
        });
        const imgData = await res.json();
        imgDataUrl = imgData?.data?.url;
      } catch (error) {
        toast.error("Error uploading image. Please try again.");
        return;
      }
    }

    // Prepare the data to be sent to the server
    const updatedData = {
      id: student?._id,
      fullName: data.fullName || student?.fullName,
      userName: data.userName || student?.userName,
      photo: imgDataUrl, // Use the new image URL from imgbb, or the existing URL
      fatherName: data.fatherName || student?.fatherName,
      motherName: data.motherName || student?.motherName,
      email: data.email || student?.email,
      phoneNumber: data.phoneNumber || student?.phoneNumber,
      address: data.address || student?.address,
      shortBio: data.shortBio || student?.shortBio,
    };

    try {
      const response = await axios.patch(
        "https://v1-amader-school-server.vercel.app/api/v1/update-profile/update-student-info",
        updatedData
      );

      if (response.status === 200) {
        setIsEditMode(false);
        toast.success("Profile updated successfully!");
        setTimeout(() => {
          window.location.reload();
        }, 500);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error updating profile. Please try again.");
    }
  };

  return (
    <div className="2xl:w-[79.3%] relative top-24 2xl:left-[360px]">
      <div className="text-[17px] font-semibold breadcrumbs mb-8">
        <ul>
          <li className="hover:text-[#FFBE15] ">
            <Link to={`/dashboard/student`}>Dashboard</Link>
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
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
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
                {...register("fullName")}
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
                {...register("userName")}
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
                {...register("gender")}
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
                {...register("religion")}
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
                {...register("fatherName")}
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
                {...register("motherName")}
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
                {...register("dateOfBirth")}
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
                {...register("email")}
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
                {...register("phoneNumber")}
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
                className="mt-1 focus:outline-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm text-sm bg-gray-100"
                {...register("schoolTag")}
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
                {...register("shift")}
                readOnly
              />
            </div>
            <div>
              <label
                htmlFor="assignedClass"
                className="block text-sm font-medium text-gray-700"
              >
                Class
              </label>
              <input
                id="assignedClass"
                className="mt-1 focus:outline-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm text-sm bg-gray-100"
                {...register("assignedClass")}
                readOnly
              />
            </div>
            <div>
              <label
                htmlFor="section"
                className="block text-sm font-medium text-gray-700"
              >
                Section
              </label>
              <input
                id="section"
                className="mt-1 focus:outline-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm text-sm bg-gray-100"
                {...register("section")}
                readOnly
              />
            </div>
            <div>
              <label
                htmlFor="group"
                className="block text-sm font-medium text-gray-700"
              >
                Group
              </label>
              <input
                id="group"
                className="mt-1 focus:outline-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm text-sm bg-gray-100"
                {...register("group")}
                readOnly
              />
            </div>
            <div>
              <label
                htmlFor="rollNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Roll
              </label>
              <input
                id="rollNumber"
                className="mt-1 focus:outline-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm text-sm bg-gray-100"
                {...register("rollNumber")}
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
                {...register("id")}
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
                type={`${isEditMode ? "file" : student?.photo}`}
                className={`mt-1 focus:outline-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm text-sm ${
                  isEditMode ? "bg-white" : "bg-gray-100"
                }`}
                {...register("photo")}
                readOnly={!isEditMode}
                onChange={(e) => setImage(e.target.files[0])}
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
                {...register("address")}
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
                {...register("shortBio")}
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
      <div className="container flex items-center justify-center xl:gap-2 lg:gap-2 gap-1 xl:text-[18px] font-semibold text-black h-[100px] mb-24 mt-4">
        <h1 className="xl:text-[18px] font-semibold text-black">
          © 2023 - All rights reserved by
        </h1>
        <img className="h-[26px] mt-[6.5px]" src={icon} alt="amader-school" />
        <h1>Ltd.</h1>
      </div>
    </div>
  );
};

export default StudentUpdateProfilePage;
