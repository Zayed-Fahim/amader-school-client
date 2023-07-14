import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsPersonCircle } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { AiTwotonePrinter } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";

const StudentDetailsCard = () => {
  const { students } = useContext(AuthContext);
  const [image, setImage] = useState(null);
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

          fetch("http://localhost:8080/students-details", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(studentDetails),
          })
            .then((res) => res.json())
            .then((data) => {
              
            });
        }
      });
  };
  return (
    <div>
      <div className="flex items-center justify-between px-5 py-8">
        <h1 className="font-bold text-2xl ">Student Details</h1>
        <div className="flex items-center gap-4">
          <Link>
            <FaRegEdit className="p-2 bg-black bg-opacity-5 hover:bg-[#FFBE15] hover:text-white h-8 w-8 rounded" />
          </Link>
          <Link>
            <AiTwotonePrinter className="p-2 bg-black bg-opacity-5 hover:bg-[#FFBE15] hover:text-white h-8 w-8 rounded" />
          </Link>
          <Link>
            <FiDownload className="p-2 bg-black bg-opacity-5 hover:bg-[#FFBE15] hover:text-white h-8 w-8 rounded" />
          </Link>
        </div>
      </div>
      {students?.map((student) => (
        <>
          <div className="flex justify-between 2xl:gap-10 pt-5 px-5" key={student?.id}>
            <div className="h-[270px] w-[270px] grid place-items-center bg-black bg-opacity-10 rounded-lg">
              <img
                src={
                  student ? (
                    student.photo
                  ) : (
                    <BsPersonCircle className="h-[120px] w-[120px]" />
                  )
                }
                alt=""
              />
            </div>

            <div className="w-[400px]">
              <div className="flex flex-col gap-1 pl-5">
                <h1 className="text-[20px] font-semibold">
                  {student?.userName}
                </h1>
                <p className="break-words">{student?.shortBio}</p>
              </div>
              <form
                onSubmit={handleSubmit(handleSignUp)}
                className="flex flex-col gap-5 md:px-3 p-5 lg:px-5 xl:px-5 lg:py-5 xl:py-5"
              >
                <div className="flex flex-col gap-2 w-full">
                  <div className="flex justify-between items-center gap-4">
                    <h1 className="w-[50%] font-semibold">Student ID:</h1>
                    <input
                      className="w-full bg-white h-10 pl-2"
                      disabled
                      value={student?.id}
                      placeholder="Student ID"
                      {...register("id")}
                    />
                  </div>
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
                      value={student ? student.admissionDate : "Not Assigned"}
                      placeholder="Admission Date"
                      {...register("admissionDate")}
                    />
                  </div>
                  <div className="flex justify-between items-center gap-4">
                    <h1 className="w-[50%] font-semibold">Class:</h1>
                    <input
                      className="w-full bg-white h-10 pl-2"
                      disabled
                      value={student?.class}
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
          </div>
        </>
      ))}
    </div>
  );
};

export default StudentDetailsCard;
