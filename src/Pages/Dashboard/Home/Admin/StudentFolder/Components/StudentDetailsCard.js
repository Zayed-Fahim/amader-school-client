import React from "react";
import { useForm } from "react-hook-form";
import { BsPersonCircle } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { AiTwotonePrinter } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";

const StudentDetailsCard = ({ studentDetails }) => {
  // const { admin } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const handleSignUp = (data) => {};

  return (
    <div>
      <div className="flex items-center justify-between px-5 py-8">
        <h1 className="font-bold text-2xl ">Student Details</h1>
        <div className="flex items-center 2xl:gap-4">
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

      <div className="flex justify-between pt-5 px-5">
        <div className="h-[250px] w-[250px] grid place-items-center bg-black bg-opacity-10 rounded-lg">
          {studentDetails ? (
            <img
              className="h-[270px] w-[250px] rounded-lg"
              src={studentDetails?.photo}
              alt="studentPhoto"
            />
          ) : (
            <BsPersonCircle className="h-[120px] w-[120px]" />
          )}
        </div>
        <div className="w-[400px]">
          <div className="flex flex-col gap-1 pl-5">
            <h1 className="text-[20px] font-semibold">
              {studentDetails? studentDetails?.userName :<span>Student Name</span>}
            </h1>
            <p className="break-words">
              {studentDetails ? (
                studentDetails?.shortBio
              ) : (
                <span>Student Bio</span>
              )}
            </p>
          </div>
          <form
            onSubmit={handleSubmit(handleSignUp)}
            className="flex flex-col gap-5 md:px-3 p-5 lg:px-5 xl:px-5 lg:py-5 xl:py-5"
          >
            <div className="flex flex-col gap-2 w-full">
              <div className="flex justify-between items-center 2xl:gap-4">
                <h1 className="w-[50%] font-semibold">Student ID:</h1>
                <input
                  className="w-full bg-white h-10 pl-2"
                  disabled
                  value={studentDetails?.id}
                  placeholder="Student ID"
                  {...register("id")}
                />
              </div>
              <div className="flex justify-between items-center 2xl:gap-4">
                <h1 className="w-[50%] font-semibold">Full Name:</h1>
                <input
                  className="w-full bg-white h-10 pl-2"
                  disabled
                  value={studentDetails?.fullName}
                  placeholder="Full Name"
                  {...register("fullName")}
                />
              </div>
              <div className="flex justify-between items-center 2xl:gap-4">
                <h1 className="w-[50%] font-semibold">Gender:</h1>
                <input
                  className="w-full bg-white h-10 pl-2"
                  disabled
                  value={studentDetails?.gender}
                  placeholder="Gender"
                  {...register("gender")}
                />
              </div>
              <div className="flex justify-between items-center 2xl:gap-4">
                <h1 className="w-[50%] font-semibold">Father Name:</h1>
                <input
                  className="w-full bg-white h-10 pl-2"
                  disabled
                  value={studentDetails?.fatherName}
                  placeholder="Father Name"
                  {...register("fatherName")}
                />
              </div>
              <div className="flex justify-between items-center 2xl:gap-4">
                <h1 className="w-[50%] font-semibold">Mother Name:</h1>
                <input
                  className="w-full bg-white h-10 pl-2"
                  disabled
                  value={studentDetails?.motherName}
                  placeholder="Mother Name"
                  {...register("motherName")}
                />
              </div>
              <div className="flex justify-between items-center 2xl:gap-4">
                <h1 className="w-[50%] font-semibold">Date of Birth:</h1>
                <input
                  className="w-full bg-white h-10 pl-2"
                  disabled
                  value={studentDetails?.dateOfBirth}
                  placeholder="Date of Birth "
                  {...register("dateOfBirth")}
                />
              </div>
              <div className="flex justify-between items-center 2xl:gap-4">
                <h1 className="w-[50%] font-semibold">Religion:</h1>
                <input
                  className="w-full bg-white h-10 pl-2"
                  disabled
                  value={studentDetails?.religion}
                  placeholder="Religion"
                  {...register("religion")}
                />
              </div>
              <div className="flex justify-between items-center 2xl:gap-4">
                <h1 className="w-[50%] font-semibold">Email:</h1>
                <input
                  className="w-full bg-white h-10 pl-2"
                  disabled
                  value={studentDetails?.email}
                  placeholder="Email"
                  {...register("email")}
                />
              </div>
              <div className="flex justify-between items-center 2xl:gap-4">
                <h1 className="w-[50%] font-semibold">Admission Date:</h1>
                <input
                  className="w-full bg-white h-10 pl-2"
                  disabled
                  value={
                    studentDetails
                      ? studentDetails.createdAt.split("T")[0]
                      : "Not Assigned"
                  }
                  placeholder="Admission Date"
                  {...register("admissionDate")}
                />
              </div>
              <div className="flex justify-between items-center 2xl:gap-4">
                <h1 className="w-[50%] font-semibold">Class:</h1>
                <input
                  className="w-full bg-white h-10 pl-2"
                  disabled
                  value={studentDetails?.assignedClass}
                  placeholder="Class"
                  {...register("class")}
                />
              </div>
              <div className="flex justify-between items-center 2xl:gap-4">
                <h1 className="w-[50%] font-semibold">Section:</h1>
                <input
                  className="w-full bg-white h-10 pl-2"
                  disabled
                  value={studentDetails?.section}
                  placeholder="Section"
                  {...register("section")}
                />
              </div>
              <div className="flex justify-between items-center 2xl:gap-4">
                <h1 className="w-[50%] font-semibold">Roll:</h1>
                <input
                  className="w-full bg-white h-10 pl-2"
                  disabled
                  value={studentDetails?.rollNumber}
                  placeholder="Roll"
                  {...register("roll")}
                />
              </div>
              <div className="flex justify-between items-center 2xl:gap-4">
                <h1 className="w-[50%] font-semibold">Shift:</h1>
                <input
                  className="w-full bg-white h-10 pl-2"
                  disabled
                  value={studentDetails?.shift}
                  placeholder="Shift"
                  {...register("shift")}
                />
              </div>
              <div className="flex justify-between items-center 2xl:gap-4">
                <h1 className="w-[50%] font-semibold">Address:</h1>
                <input
                  className="w-full bg-white h-10 pl-2"
                  disabled
                  value={studentDetails?.address}
                  placeholder="Address"
                  {...register("address")}
                />
              </div>
              <div className="flex justify-between items-center 2xl:gap-4">
                <h1 className="w-[50%] font-semibold">Phone:</h1>
                <input
                  className="w-full bg-white h-10 pl-2"
                  disabled
                  value={studentDetails?.phoneNumber}
                  placeholder="Phone"
                  {...register("phone")}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* </>
      ))} */}
    </div>
  );
};

export default StudentDetailsCard;
