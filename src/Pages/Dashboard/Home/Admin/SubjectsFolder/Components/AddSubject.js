import axios from "axios";
import React, { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import SaveButton from "../../../../../SmallComponents/SaveButton";
import ResetButton from "../../../../../SmallComponents/ResetButton";
import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const AddSubject = ({
  assignedClass,
  setAssignedClass,
  isLoading,
  setIsLoading,
}) => {
  const { register, handleSubmit } = useForm();
  const { admin } = useContext(AuthContext);
  const formRef = useRef();

  const queryClient = useQueryClient();
  const addSubjectMutation = useMutation(
    (subjectInfo) =>
      axios.post("http://localhost:8080/api/v1/subjects", subjectInfo, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }),
    {
      onSuccess: (data) => {
        window.location.reload(); // Reload the page
        formRef.current.reset();
        queryClient.invalidateQueries("subjects");
        toast.success(`${data.data.message}`);
      },
      onError: (error) => {
        toast.error(`${error.response.data.message}`);
      },
    }
  );

  const handleAddNewSubject = (data, event) => {
    const subjectInfo = {
      subjectName: data.subjectName,
      subjectCode: data.subjectCode.toUpperCase(),
      subjectType: data.subjectType,
      assignedClass: data.assignedClass,
      assignedGroup: data.assignedGroup,
      admin: { id: admin._id },
    };
    setIsLoading(true);
    addSubjectMutation.mutate(subjectInfo);
  };
  return (
    <div className="min-w-[550px]">
      <div
        className={`${
          assignedClass
            ? "bg-white xl:min-h-[750px]"
            : "bg-white xl:min-h-[640px]"
        }`}
      >
        <div>
          <h1 className="text-2xl font-bold py-8 px-10">Add Subject</h1>
        </div>
        <div>
          <form
            onSubmit={handleSubmit(handleAddNewSubject)}
            className="flex flex-col w-full gap-12 h-[410px] px-10 pb-5"
            ref={formRef}
          >
            {/* 1st row */}
            <div className="grid grid-cols-1 gap-5 lg:gap-4">
              <div className="mb-4">
                <label className="block mb-1 font-bold">Subject Name</label>
                <input
                  className="w-full px-3 py-2 border rounded focus:outline-none"
                  required
                  type="text"
                  placeholder="Name of the Subject"
                  {...register("subjectName")}
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-bold ">Subject Code</label>
                <input
                  className="w-full px-3 py-2 border rounded focus:outline-none"
                  required
                  type="text"
                  placeholder="Subject Code"
                  {...register("subjectCode")}
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-bold">Subject Type</label>
                <select
                  {...register("subjectType")}
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none"
                >
                  <option defaultValue={true}>Select Subject Type</option>
                  <option value="Theory">Theory</option>
                  <option value="Practical">Practical</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-bold">Assigned Class </label>
                <select
                  required
                  {...register("assignedClass")}
                  className="w-full px-3 py-2 border rounded focus:outline-none"
                  onChange={(e) => {
                    setAssignedClass(e.target.value);
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
              {assignedClass &&
              (assignedClass === "Nine" ||
                assignedClass === "Ten" ||
                assignedClass === "Eleven" ||
                assignedClass === "Twelve") ? (
                <div className="mb-4">
                  <label className="block mb-1 font-bold">Assigned Group</label>
                  <select
                    required
                    {...register("assignedGroup")}
                    className="w-full px-3 py-2 border rounded focus:outline-none"
                  >
                    <option defaultValue={true}>Select Group</option>
                    <option value="Science">Science</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Arts">Arts</option>
                  </select>
                </div>
              ) : null}
            </div>
            {/* 5th row */}
            <div className="flex items-center gap-4 pb-5">
              {isLoading ? (
                <>
                  <button
                    className="px-4 py-1 font-semibold rounded-lg bg-gray-400 flex gap-1 justify-center items-center"
                    disabled
                  >
                    Loading...
                  </button>
                </>
              ) : (
                <>
                  <SaveButton />
                  <ResetButton formRef={formRef} />
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSubject;
