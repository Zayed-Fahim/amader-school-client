import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import swal from "sweetalert";
import { toast } from "react-hot-toast";
import { FaTelegramPlane } from "react-icons/fa";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const TeacherLogin = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { setTeacher } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = (data) => {
    setIsLoading(true);
    axios
      .post("https://v1-amader-school-server.vercel.app/api/v1/teacher-login", {
        id: data.id,
        password: data.password,
      })
      .then((result) => {
        if (result) {
          localStorage.setItem("token", result?.data?.payload?.token);
          localStorage.setItem(
            "role",
            result?.data?.payload?.teacher?.role?.toLowerCase()
          );
          setTeacher(result?.data?.payload?.teacher);
          navigate("/dashboard/teacher");
          setTimeout(() => {
            toast.success("Login Successful!");
          }, 1000);
        } else {
          setIsLoading(false);
          swal(
            "Invalid Teacher!",
            "Try with your valid Teacher credential!",
            "error"
          );
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error.message);
      });
  };
  return (
    <div className="grid place-items-center min-h-screen bg-black bg-opacity-5">
      <div className="w-[500px] h-[350px] border flex flex-col gap-16 rounded-[5px] bg-white">
        <div className="w-[450px] h-[90px] bg-[#FFC61A] rounded-[5px] mx-auto -my-6 py-1">
          <h1 className="text-center text-white text-[2rem] font-semibold">
            Teacher Login
          </h1>
          <p className="text-center text-white">
            Please enter your Login details !
          </p>
        </div>
        <form
          className="px-7 flex flex-col gap-12"
          onSubmit={handleSubmit(handleLogin)}
        >
          <div>
            <input
              type="text"
              className="w-full border-b focus:outline-none pb-1 pl-2 text-black"
              placeholder="Enter ID"
              {...register("id")}
              required
            />
          </div>
          <div>
            <input
              type="password"
              className="w-full border-b focus:outline-none pb-1 pl-2 text-black"
              placeholder="Enter Password"
              {...register("password")}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="form-control">
              <label className="cursor-pointer label">
                <input type="checkbox" className="checkbox checkbox-warning" />
                <span className="label-text pl-2">Remember me</span>
              </label>
            </div>
            <div>
              <Link className="text-sm link link-hover">Forgot password?</Link>
            </div>
          </div>
          <div className="grid place-items-center -mt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-[#FFC61A] text-white text-[1.25rem] font-semibold flex gap-1 items-center px-6 rounded-[5px]"
            >
              <FaTelegramPlane /> <h1>Submit</h1>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeacherLogin;
