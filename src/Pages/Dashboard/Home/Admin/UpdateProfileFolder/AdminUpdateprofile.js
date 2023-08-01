import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import icon from "../../../../../Assets/dashboard-icon/dashboard.png";
import { BiEdit } from "react-icons/bi";
import { AuthContext } from "../../../../../Contexts/AuthProvider/AuthProvider";
import axios from "axios";
import { toast } from "react-hot-toast";

const AdminUpdateProfile = () => {
  const { admin } = useContext(AuthContext);
  const [isEditMode, setIsEditMode] = useState(false);
  const [image, setImage] = useState(null);
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    setTimeout(() => {
      setValue("fullName", admin?.fullName);
      setValue("userName", admin?.userName);
      setValue("id", admin?.id);
      setValue("email", admin?.email);
      setValue("phoneNumber", admin?.phoneNumber);
      setValue("schoolTag", admin?.schoolTag);
      setValue("photo", admin?.photo);
    }, 1000);
  }, [setValue, admin]);

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleCancelEdit = () => {
    setIsEditMode(false);
    setTimeout(() => {
      setValue("photo", admin?.photo);
    }, 10);
  };

  const onSubmit = async (data, event) => {
    event.preventDefault();
    let imgDataUrl = admin?.photo; // Default value is the current admin photo URL

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
      fullName: data.fullName || admin?.fullName,
      userName: data.userName || admin?.userName,
      photo: imgDataUrl, // Use the new image URL from imgbb, or the existing URL
      id: admin._id,
    };

    try {
      const response = await axios.patch(
        "https://v1-amader-school-server.vercel.app/api/v1/update-profile/update-admin-info",
        updatedData
      );

      if (response.status === 200) {
        setIsEditMode(false);
        toast.success("Profile updated successfully!");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
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
            <Link to={`/dashboard/admin?`}>Dashboard</Link>
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
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                className="mt-1 focus:outline-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm text-sm bg-gray-100"
                {...register("email")}
                readOnly
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
                className="mt-1 focus:outline-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm text-sm bg-gray-100"
                {...register("phoneNumber")}
                readOnly
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
                {isEditMode ? <p>Photo (Required)</p> : <p>Photo</p>}
              </label>
              <input
                id="photo"
                type={`${isEditMode ? "file" : admin?.photo}`}
                className={`mt-1 focus:outline-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm text-sm ${
                  isEditMode ? "bg-white" : "bg-gray-100"
                }`}
                {...register("photo")}
                readOnly={!isEditMode}
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
          </div>
          {isEditMode && (
            <div className="text-left flex gap-5 mt-8">
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

export default AdminUpdateProfile;
