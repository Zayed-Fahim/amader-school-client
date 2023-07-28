import React from "react";
import { useForm } from "react-hook-form";
import { BsPersonCircle } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { AiTwotonePrinter } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";

const TeacherDetailsCard = ({ teacherDetails }) => {
  const { register, handleSubmit } = useForm();

  const handleTeacherDetails = (data) => {};
  return (
    <div>
      <div className="flex items-center justify-between px-5 py-8">
        <h1 className="font-bold text-2xl ">Teacher Details</h1>
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
      <div className="flex justify-between pt-5 px-5">
        <div className="h-[250px] w-[250px] grid place-items-center bg-black bg-opacity-10 rounded-lg">
          {teacherDetails ? (
            <img
              className="h-[270px] w-[250px] rounded-lg"
              src={teacherDetails?.photo}
              alt="teacherPhoto"
            />
          ) : (
            <BsPersonCircle className="h-[120px] w-[120px]" />
          )}
        </div>

        <div>
          <div className="flex flex-col gap-1 pl-5">
            <h1 className="text-[20px] font-semibold">
              {teacherDetails ? (
                teacherDetails?.userName
              ) : (
                <span>Teacher Name</span>
              )}
            </h1>
            <p>
              {teacherDetails ? (
                teacherDetails?.shortBio
              ) : (
                <span>Teacher Bio</span>
              )}
            </p>
          </div>
          <form
            onSubmit={handleSubmit(handleTeacherDetails)}
            className="flex flex-col gap-5 md:px-3 p-5 lg:px-5 xl:px-5 lg:py-5 xl:py-5"
          >
            <div className="flex flex-col gap-2 w-full">
              <div className="flex justify-between items-center 2xl:gap-12">
                <h1 className="w-[50%] font-semibold">Full Name:</h1>
                <input
                  className="w-full bg-white h-10 pl-2"
                  disabled
                  value={teacherDetails?.fullName}
                  placeholder="Full Name"
                  {...register("fullName")}
                />
              </div>
              <div className="flex justify-between items-center 2xl:gap-12">
                <h1 className="w-[50%] font-semibold">Gender:</h1>
                <input
                  className="w-full bg-white h-10 pl-2"
                  disabled
                  value={teacherDetails?.gender}
                  placeholder="Gender"
                  {...register("gender")}
                />
              </div>
              <div className="flex justify-between items-center 2xl:gap-12">
                <h1 className="w-[50%] font-semibold">Father Name:</h1>
                <input
                  className="w-full bg-white h-10 pl-2"
                  disabled
                  value={teacherDetails?.fatherName}
                  placeholder="Father Name"
                  {...register("fatherName")}
                />
              </div>
              <div className="flex justify-between items-center 2xl:gap-12">
                <h1 className="w-[50%] font-semibold">Mother Name:</h1>
                <input
                  className="w-full bg-white h-10 pl-2"
                  disabled
                  value={teacherDetails?.motherName}
                  placeholder="Mother Name"
                  {...register("motherName")}
                />
              </div>
              <div className="flex justify-between items-center 2xl:gap-12">
                <h1 className="w-[50%] font-semibold">Date of Birth:</h1>
                <input
                  className="w-full bg-white h-10 pl-2"
                  disabled
                  value={teacherDetails?.dateOfBirth}
                  placeholder="Date of Birth "
                  {...register("dateOfBirth")}
                />
              </div>
              <div className="flex justify-between items-center 2xl:gap-12">
                <h1 className="w-[50%] font-semibold">Religion:</h1>
                <input
                  className="w-full bg-white h-10 pl-2"
                  disabled
                  value={teacherDetails?.religion}
                  placeholder="Religion"
                  {...register("religion")}
                />
              </div>
              <div className="flex justify-between items-center 2xl:gap-12">
                <h1 className="w-[50%] font-semibold">Email:</h1>
                <input
                  className="w-full bg-white h-10 pl-2"
                  value={teacherDetails?.email}
                  disabled
                  placeholder="Email"
                  {...register("email")}
                />
              </div>
              <div className="flex justify-between items-center 2xl:gap-12">
                <h1 className="w-[50%] font-semibold">Phone Number:</h1>
                <input
                  className="w-full bg-white h-10 pl-2"
                  value={teacherDetails?.phoneNumber}
                  disabled
                  placeholder="Phone Number"
                  {...register("phoneNumber")}
                />
              </div>
              <div className="flex justify-between items-center 2xl:gap-12">
                <h1 className="w-[50%] font-semibold">Joining Date:</h1>
                <input
                  className="w-full bg-white h-10 pl-2"
                  disabled
                  value={teacherDetails?.createdAt.split("T")[0]}
                  placeholder="Joining Date"
                />
              </div>
              <div className="flex justify-between items-center 2xl:gap-12">
                <h1 className="w-[50%] font-semibold">Class Teacher:</h1>
                <input
                  className="w-full bg-white h-10 pl-2"
                  disabled
                  value={teacherDetails?.classTeacher || "N/A"}
                  placeholder="Class Teacher"
                  {...register("classTeacher")}
                />
              </div>
              <div className="flex justify-between items-center 2xl:gap-12">
                <h1 className="w-[50%] font-semibold">Teacher Of Class:</h1>
                <input
                  className="w-full bg-white h-10 pl-2"
                  disabled
                  value={teacherDetails?.teacherOfClass || "N/A"}
                  placeholder="Teacher Of Class"
                  {...register("teacherOfClass")}
                />
              </div>
              <div className="flex justify-between items-center 2xl:gap-12">
                <h1 className="w-[50%] font-semibold">Teacher Of Section:</h1>
                <input
                  className="w-full bg-white h-10 pl-2"
                  disabled
                  value={teacherDetails?.sectionOfClass || "N/A"}
                  placeholder="Roll"
                  {...register("sectionOfClass")}
                />
              </div>
              <div className="flex justify-between items-center 2xl:gap-12">
                <h1 className="w-[50%] font-semibold">Teacher Of Group:</h1>
                <input
                  className="w-full bg-white h-10 pl-2"
                  disabled
                  value={teacherDetails?.teacherOfGroup || "N/A"}
                  placeholder="Teacher Of Group"
                  {...register("teacherOfGroup")}
                />
              </div>
              <div className="flex justify-between items-center 2xl:gap-12">
                <h1 className="w-[50%] font-semibold">Teaching Subject:</h1>
                <input
                  className="w-full bg-white h-10 pl-2"
                  disabled
                  value={teacherDetails?.subjectName}
                  placeholder="Subject Name"
                  {...register("subjectName")}
                />
              </div>
              <div className="flex justify-between items-center 2xl:gap-12">
                <h1 className="w-[50%] font-semibold">Teacher ID:</h1>
                <input
                  className="w-full bg-white h-10 pl-2"
                  disabled
                  value={teacherDetails?.id}
                  placeholder="Teacher ID"
                  {...register("id")}
                />
              </div>
              <div className="flex justify-between items-center 2xl:gap-12">
                <h1 className="w-[50%] font-semibold">Shift:</h1>
                <input
                  className="w-full bg-white h-10 pl-2"
                  disabled
                  value={teacherDetails?.shift}
                  placeholder="shift"
                  {...register("shift")}
                />
              </div>
              <div className="flex justify-between items-center 2xl:gap-12">
                <h1 className="w-[50%] font-semibold">Address:</h1>
                <input
                  className="w-full bg-white h-10 pl-2"
                  disabled
                  value={teacherDetails?.address}
                  placeholder="Address"
                  {...register("address")}
                />
              </div>
            </div>

            {/* <input
          className="w-full border-2 h-10"
          type="submit"
          value="create account"
        /> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetailsCard;
