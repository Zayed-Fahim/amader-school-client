import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { BiCurrentLocation } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required("Must fill up your name field.")
    .matches(/^[A-Za-z_ ]+$/i, "Alphabetical characters only"),
  schoolName: yup
    .string()
    .required("Must write your school name.")
    .matches(
      /^[A-Za-z_.,:; ]+$/i,
      "Alphabetical & Alphanumeric characters only"
    ),
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      "The Email you entered is invalid"
    ),
  phone: yup
    .string()
    .required("Phone Number is required")
    .matches(
      /^(?:(?:\+|00)88|01)?\d{11}$/,
      "Phone Number you entered is invalid"
    ),
  message: yup.string().required("Message is required"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mood: "onTouched",
    resolver: yupResolver(formSchema),
  });
  const sendMail = (data, e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bt76dyc",
        "template_3yngzmg",
        e.target,
        "sl9qWJ_VLA9KQrDMV"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            toast.success(
              "Thanks for messaging us.We received your message.We will contact your soon."
            );
            e.target.reset();
          }
        },
        (error) => {}
      );
  };
  return (
    <section
      className="2xl:max-h-max container mx-auto py-10 xl:py-16 md:py-14 2xl:py-0 2xl:pb-12 text-black"
      id="contact-us"
    >
      <div className="mb-10 md:mb-14 xl:mb-16 2xl:my-20">
        <h1 className="text-center text-white font-bold text-2xl md:text-3xl xl:text-[2.6rem] 2xl:text-5xl">
          Contact Info_
        </h1>
      </div>
      <div className="flex flex-col xl:flex-row md:flex-row gap-5 xl:gap-0 md:gap-0 2xl:gap-0 2xl:flex-row md:justify-between 2xl:justify-between">
        <div className="bg-white shadow-lg p-2 xl:p-5 md:p-5 xl:ml-[100px] xl:px-14 md:max-h-[420px] md:max-w-[370px] xl:max-w-[450px] xl:min-h-[480px] 2xl:max-w-max mx-5 xl:mx-0 md:mx-0 2xl:mx-0 xl:pb-10">
          <div className="grid place-items-center xl:mb-0 py-8">
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold">
              Contact Info
            </h1>
            <p className="xl:text-xl font-bold xl:text-center">
              If you want to get more info, Contact us now.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-6">
              <BiCurrentLocation className="h-[38px] w-[38px] md:h-[44px] md:w-[44px] lg::h-[48px] lg::w-[48px] xl:h-[52px] xl:w-[52px]" />
              <div>
                <h1 className="xl:text-xl font-bold">Our address</h1>
                <h1 className="">
                  House: 941, Road: 14, Avenue: 2 Mirpur DOHS, Dhaka 1216
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <MdEmail className="h-[38px] w-[38px] md:h-[44px] md:w-[44px] lg::h-[48px] lg::w-[48px] xl:h-[52px] xl:w-[52px]" />
              <div>
                <h1 className="xl:text-xl font-bold">Email address</h1>
                Email:{" "}
                <Link
                  to="mailto:amaderschool@gmail.com"
                  onClick={() => {
                    window.location = "mailto:amaderschool@gmail.com";
                  }}
                >
                  amaderschool@gmail.com
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <FaPhoneSquareAlt className="h-[38px] w-[38px] md:h-[44px] md:w-[44px] lg::h-[48px] lg::w-[48px] xl:h-[52px] xl:w-[52px]" />
              <div>
                <h1 className="xl:text-xl font-bold">Our support</h1>
                <h1>
                  Phone:{" "}
                  <Link
                    to="tel:+880 1891 988693"
                    onClick={() => {
                      window.location = "tel:+880 1891 988693";
                    }}
                  >
                    +880 1891 988693
                  </Link>
                </h1>
              </div>
            </div>
          </div>
        </div>

        <form
          className="flex flex-col gap-4 xl:gap-0 md:gap-0 2xl:gap-0 min-w-full md:min-w-[360px] md:max-w-full xl:min-w-[500px] xl:max-w-full  2xl:min-w-[600px] 2xl:max-w-max text-white md:-mt-4 xl:-mt-4 2xl:-mt-4 xl:mr-[100px]"
          onSubmit={handleSubmit(sendMail)}
        >
          <div className="max-w-full mx-5 lg:mx-0 md:mx-0 xl:mx-0">
            <label className="label">
              <span className="text-xl">Name*</span>
            </label>
            <input
              {...register("name")}
              className="border min-w-full lg:max-w-full h-9 xl:h-10 px-4 outline-[#FFBE15]"
            />
            <p className="text-red-500">{errors.name?.message}</p>
          </div>
          <div className="max-w-full mx-5 lg:mx-0 md:mx-0 xl:mx-0">
            <label className="label">
              <span className="text-xl">School Name*</span>
            </label>
            <input
              {...register("schoolName")}
              className="border min-w-full h-9 xl:h-10 px-4 outline-[#FFBE15]"
            />
            <p className="text-red-500">{errors.schoolName?.message}</p>
          </div>
          <div className="max-w-full mx-5 lg:mx-0 md:mx-0 xl:mx-0">
            <label className="label">
              <span className="text-xl">Email*</span>
            </label>
            <input
              {...register("email")}
              className="border min-w-full h-9 xl:h-10 px-4 outline-[#FFBE15]"
            />
            <p className="text-red-500">{errors.email?.message}</p>
          </div>
          <div className="max-w-full mx-5 lg:mx-0 md:mx-0 xl:mx-0">
            <label className="label">
              <span className="text-xl">Phone*</span>
            </label>
            <input
              {...register("phone")}
              className="border min-w-full h-9 xl:h-10 px-4 outline-[#FFBE15]"
            />
            <p className="text-red-500">{errors.phone?.message}</p>
          </div>
          <div className="max-w-full mx-5 lg:mx-0 md:mx-0 xl:mx-0">
            <label className="label">
              <span className="text-xl">Message*</span>
            </label>
            <textarea
              rows={3}
              {...register("message")}
              className="border min-w-full xl:h-full px-4 pt-2 outline-[#FFBE15]"
            />
            <p className="text-red-500">{errors.message?.message}</p>
          </div>

          <div className="bg-[#FFBE15] text-black mx-5 lg:mx-0 md:mx-0 xl:mx-0 mt-5 md:mt-10 lg:mt-10 xl:mt-24 xl:w-28 grid place-items-center border border-[#FFBE15] hover:bg-white hover:border hover:border-[#FFBE15] hover:text-[#FFBE15] ">
            <input
              type="submit"
              value="SEND"
              className="font-bold xl:text-xl py-1"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
