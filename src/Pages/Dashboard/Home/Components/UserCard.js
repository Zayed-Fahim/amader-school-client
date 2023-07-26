import React, { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsPersonCircle } from "react-icons/bs";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";

const UserCard = () => {
  const { student } = useContext(AuthContext);
  const [image] = useState(null);
  const { register, handleSubmit } = useForm();

  const handleSignUp = (data) => {
    const formData = new FormData();
    formData.append("image", image);
    fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_key}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const studentDetails = {
            fullName: data.fullName,
            userName: data.userName,
            gender: data.gender,
            role: data.role.toLowerCase(),
            fatherName: data.fullName,
            motherName: data.fullName,
            dateOfBirth: data.dateOfBirth,
            religion: data.religion,
            email: data.email,
            phone: data.phone,
            address: data.address,
            class: data.class,
            confirmPassword: data.confirmPassword,
            password: data.password,
            picture: imgData.data.url,
            section: data.section,
            group: data.group,
          };

          fetch("https://v1-amader-school-server.vercel.app/students-details", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(studentDetails),
          })
            .then((res) => res.json())
            .then((data) => {});
        }
      });
  };
  return (
    <div>
      <div className="flex gap-14 items-center pt-5">
        <div className="h-[120px] w-[120px] rounded-[50%]">
          <img src={student?.photo || <BsPersonCircle />} alt="" />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-[20px] font-semibold">Zayed Fahim</h1>
          <p>{student?.shortBio}</p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(handleSignUp)}
        className="flex flex-col gap-5 md:px-3 p-5 lg:px-5 xl:px-5 lg:py-5 xl:py-5"
      >
        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between items-center gap-4">
            <h1 className="w-[50%] font-semibold">Full Name:</h1>
            <input
              className="w-full bg-white h-10 pl-2"
              disabled
              value={student?.fullName}
              placeholder="Full Name"
              {...register("fullName")}
            />
          </div>
          <div className="flex justify-between items-center gap-4">
            <h1 className="w-[50%] font-semibold">Gender:</h1>
            <input
              className="w-full bg-white h-10 pl-2"
              disabled
              value={student?.gender}
              placeholder="Gender"
              {...register("gender")}
            />
          </div>
          <div className="flex justify-between items-center gap-4">
            <h1 className="w-[50%] font-semibold">Father Name:</h1>
            <input
              className="w-full bg-white h-10 pl-2"
              disabled
              value={student?.fatherName}
              placeholder="Father Name"
              {...register("fatherName")}
            />
          </div>
          <div className="flex justify-between items-center gap-4">
            <h1 className="w-[50%] font-semibold">Mother Name:</h1>
            <input
              className="w-full bg-white h-10 pl-2"
              disabled
              value={student?.motherName}
              placeholder="Mother Name"
              {...register("motherName")}
            />
          </div>
          <div className="flex justify-between items-center gap-4">
            <h1 className="w-[50%] font-semibold">Date of Birth:</h1>
            <input
              className="w-full bg-white h-10 pl-2"
              disabled
              value={student?.dateOfBirth}
              placeholder="Date of Birth "
              {...register("dateOfBirth")}
            />
          </div>
          <div className="flex justify-between items-center gap-4">
            <h1 className="w-[50%] font-semibold">Religion:</h1>
            <input
              className="w-full bg-white h-10 pl-2"
              disabled
              value={student?.religion}
              placeholder="Religion"
              {...register("religion")}
            />
          </div>
          <div className="flex justify-between items-center gap-4">
            <h1 className="w-[50%] font-semibold">Email:</h1>
            <input
              className="w-full bg-white h-10 pl-2"
              disabled
              value={student?.email}
              placeholder="Email"
              {...register("email")}
            />
          </div>
          <div className="flex justify-between items-center gap-4">
            <h1 className="w-[50%] font-semibold">Admission Date:</h1>
            <input
              className="w-full bg-white h-10 pl-2"
              disabled
              value={student?.createdAt.split("T")[0]}
              placeholder="Admission Date"
              {...register("admissionDate")}
            />
          </div>
          <div className="flex justify-between items-center gap-4">
            <h1 className="w-[50%] font-semibold">Class:</h1>
            <input
              className="w-full bg-white h-10 pl-2"
              disabled
              value={student?.assignedClass}
              placeholder="Class"
              {...register("class")}
            />
          </div>
          <div className="flex justify-between items-center gap-4">
            <h1 className="w-[50%] font-semibold">Section:</h1>
            <input
              className="w-full bg-white h-10 pl-2"
              disabled
              value={student?.section}
              placeholder="Section"
              {...register("section")}
            />
          </div>
          <div className="flex justify-between items-center gap-4">
            <h1 className="w-[50%] font-semibold">Roll:</h1>
            <input
              className="w-full bg-white h-10 pl-2"
              disabled
              value={student?.rollNumber}
              placeholder="Roll"
              {...register("roll")}
            />
          </div>
          <div className="flex justify-between items-center gap-4">
            <h1 className="w-[50%] font-semibold">Address:</h1>
            <input
              className="w-full bg-white h-10 pl-2"
              disabled
              value={student?.address}
              placeholder="Address"
              {...register("address")}
            />
          </div>
          <div className="flex justify-between items-center gap-4">
            <h1 className="w-[50%] font-semibold">Phone:</h1>
            <input
              className="w-full bg-white h-10 pl-2"
              disabled
              value={student?.phoneNumber}
              placeholder="Phone"
              {...register("phone")}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserCard;
