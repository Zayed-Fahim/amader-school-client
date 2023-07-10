import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
// import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";

const AdmissionForm = () => {
  const { register, handleSubmit } = useForm({});
  // const { admin } = useContext(AuthContext);

  // conditional showing of group
  const [group, setGroup] = useState(false);
  const [image, setImage] = useState(null);

  const handleAdmissionForm = (data, event) => {
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
            // admin: { id: admin._id },
          };

          axios
            .post("http://localhost:8080/api/v1/students", studentDetails, {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            })
            .then((data) => {
              if (data) {
                toast.success("Admission Successful!");
                event.target.reset();
              }
            })
            .catch((error) => {
              if (error) {
                toast.error("Admission Unsuccessful!");
              }
            });
        } else if (imgData.status_code === 400) {
          toast.error("Admission Unsuccessful!");
        }
      });
  };
  return (
    <div className="overflow-y-hidden overflow-x-hidden">
      <div className="relative left-[320px] top-28 w-[81.5%] bg-white">
        <h1 className="text-2xl font-bold px-10 pt-8 ">Add New Student</h1>
        {/* form start */}
        <form
          onSubmit={handleSubmit(handleAdmissionForm)}
          className="flex flex-col w-full h-auto gap-8 px-10 py-8"
        >
          {/* 1st row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-y-5 lg:gap-x-10 xl:gap-x-20">
            <div>
              <label className="label">
                <span className="text-[17px] opacity-70 font-semibold">
                  Full Name
                </span>
              </label>
              <input
                required
                className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3"
                placeholder="Full Name"
                {...register("fullName")}
              />
            </div>
            <div>
              <label className="label">
                <span className="text-[17px] opacity-70 font-semibold">
                  User Name
                </span>
              </label>
              <input
                required
                className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3"
                placeholder="User Name"
                {...register("userName")}
              />
            </div>
            <div>
              <label className="label">
                <span className="text-[17px] opacity-70 font-semibold">
                  Gender
                </span>
              </label>
              <select
                required
                {...register("gender")}
                className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3"
              >
                <option defaultValue={true}>Select Gender</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="label">
                <span className="text-[17px] opacity-70 font-semibold">
                  Role
                </span>
              </label>
              <input
                required
                className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3"
                readOnly
                value="Student"
                {...register("role")}
              />
            </div>

            {/* 2nd row */}

            <div>
              <label className="label">
                <span className="text-[17px] opacity-70 font-semibold">
                  Father's Name
                </span>
              </label>
              <input
                required
                className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3"
                placeholder="Father's name"
                {...register("fatherName")}
              />
            </div>
            <div>
              <label className="label">
                <span className="text-[17px] opacity-70 font-semibold">
                  Mother's Name
                </span>
              </label>
              <input
                required
                className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3"
                placeholder="Mother's name"
                {...register("motherName")}
              />
            </div>
            <div>
              <label className="label">
                <span className="text-[17px] opacity-70 font-semibold">
                  Date Of Birth
                </span>
              </label>
              <input
                required
                className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3"
                placeholder="Date Of Birth"
                type="date"
                {...register("dateOfBirth")}
              />
            </div>
            <div>
              <label className="label">
                <span className="text-[17px] opacity-70 font-semibold">
                  Religion
                </span>
              </label>
              <select
                required
                {...register("religion")}
                className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3"
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
              <label className="label">
                <span className="text-[17px] opacity-70 font-semibold">
                  Email
                </span>
              </label>
              <input
                required
                className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3"
                placeholder="Your Email"
                {...register("email")}
              />
            </div>
            <div>
              <label className="label">
                <span className="text-[17px] opacity-70 font-semibold">
                  Phone Number
                </span>
              </label>
              <input
                required
                className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3"
                type="tel"
                placeholder="Your Phone"
                {...register("phone")}
              />
            </div>
            <div>
              <label className="label">
                <span className="text-[17px] opacity-70 font-semibold">
                  Password
                </span>
              </label>
              <input
                required
                className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3"
                type="text"
                placeholder="Your Password"
                {...register("password")}
              />
            </div>
            <div>
              <label className="label">
                <span className="text-[17px] opacity-70 font-semibold">
                  School Tag
                </span>
              </label>
              <input
                required
                className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3 uppercase"
                type="text"
                {...register("schoolTag")}
              />
            </div>
            <div>
              <label className="label">
                <span className="text-[17px] opacity-70 font-semibold">
                  Shift
                </span>
              </label>
              <select
                required
                {...register("shift")}
                className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3"
              >
                <option defaultValue={true}>Select Shift</option>
                <option value="Morning">Morning</option>
                <option value="Day">Day</option>
              </select>
            </div>
            {/* 4th row */}
            <div>
              <label className="label">
                <span className="text-[17px] opacity-70 font-semibold">
                  Class
                </span>
              </label>
              <select
                required
                {...register("class")}
                className="outline-[#FFBE15] h-12 w-full px-3 bg-black bg-opacity-5 rounded-md"
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
                <label className="label">
                  <span className="text-[17px] opacity-70 font-semibold">
                    Group
                  </span>
                </label>
                <select
                  required
                  {...register("group")}
                  className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3"
                >
                  <option defaultValue={true}>Select Group</option>
                  <option value="Science">Science</option>
                  <option value="Commerce">Commerce</option>
                  <option value="Arts">Arts</option>
                </select>
              </div>
            ) : null}
            <div>
              <label className="label">
                <span className="text-[17px] opacity-70 font-semibold">
                  Section
                </span>
              </label>
              <select
                required
                {...register("section")}
                className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3"
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
              <label className="label">
                <span className="text-[17px] opacity-70 font-semibold">
                  Roll Number
                </span>
              </label>
              <input
                required
                className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3"
                type="number"
                min={1}
                placeholder="Your Roll"
                {...register("roll")}
              />
            </div>
            {/* 5th row */}
            <div>
              <label className="label">
                <span className="text-[17px] opacity-70 font-semibold">
                  ID Number
                </span>
              </label>
              <input
                required
                className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3 uppercase"
                type="text"
                {...register("id")}
              />
            </div>
            <div>
              <label className="label">
                <span className="text-[17px] opacity-70 font-semibold">
                  Your Photo
                </span>
              </label>
              <input
                required
                type="file"
                className="border pl-3 h-12 bg-black bg-opacity-5 pt-2 rounded-md w-full"
                {...register("picture")}
                onChange={(event) => setImage(event.target.files[0])}
              />
            </div>
            <div>
              <label className="label">
                <span className="text-[17px] opacity-70 font-semibold">
                  Address
                </span>
              </label>
              <input
                required
                type="text"
                className="outline-[#FFBE15] w-full h-12 px-3 bg-black bg-opacity-5 rounded-md "
                placeholder="Your Address"
                {...register("address")}
              />
            </div>
            <div>
              <label className="label">
                <span className="text-[17px] opacity-70 font-semibold">
                  Short Bio
                </span>
              </label>
              <textarea
                cols="91"
                required
                rows="6"
                className="outline-[#FFBE15] pl-3 pt-2.5 bg-black bg-opacity-5 rounded-md"
                placeholder="Say Something"
                {...register("bio")}
              ></textarea>
            </div>
          </div>
          {/* 5th row */}

          <div className="mb-[120px] flex items-center gap-4">
            <input
              className="uppercase px-10 py-3 text-white  text-xl font-bold  bg-[#FFBE15] rounded-md hover:bg-[#042954]"
              type="submit"
              value="Save"
            />
            <input
              className="uppercase px-10 py-3 text-white  text-xl font-bold  bg-[#042954] rounded-md hover:bg-[#FFBE15]"
              type="reset"
              value="Reset"
              onClick={(e) => e.target.reset()}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;
