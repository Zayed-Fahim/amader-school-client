import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import icon from "../../../../../../Assets/dashboard-icon/dashboard.png";
import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";
import axios from "axios";
import { toast } from "react-hot-toast";

const Routine = () => {
  const { admin } = useContext(AuthContext);
  const steps = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Finish",
  ];
  const periodSteps = [
    "1st Period",
    "2nd Period",
    "3rd Period",
    "4th Period",
    "5th Period",
    "6th Period",
    "Done",
  ];
  const periodDataContent = ["1st", "2nd", "3rd", "4th", "5th", "6th", "?"];
  const dataContent = ["S", "M", "T", "W", "T", "?"];
  const initialFormData = {
    subjectName: "",
    teacherName: "",
    subjectType: "",
    roomNo: "",
  };

  const [assignedClass, setAssignedClass] = useState("");
  const [section, setSection] = useState("");
  const [group, setGroup] = useState("");
  const [routineVersion, setRoutineVersion] = useState("");
  const [shift, setShift] = useState("");
  const [submittedData, setSubmittedData] = useState([]);

  const [formData, setFormData] = useState({
    ...periodSteps.reduce(
      (obj, step) => ({ ...obj, [step]: initialFormData }),
      {}
    ),
  });
  const [periodCurrentStep, setPeriodCurrentStep] = useState(0);
  const [dayCurrentStep, setDayCurrentStep] = useState(0);

  const handlePreviousDayButton = () => {
    setDayCurrentStep(dayCurrentStep - 1);
    setPeriodCurrentStep(0);
  };
  const handlePeriodNextButton = () => {
    if (periodCurrentStep < periodSteps.length - 1) {
      if (isFormFilled()) {
        setPeriodCurrentStep(periodCurrentStep + 1);
      } else {
        alert("Please fill out the current form before proceeding.");
      }
    } else {
    }
  };

  const handlePeriodPreviousButton = () => {
    if (periodCurrentStep > 0) {
      setPeriodCurrentStep(periodCurrentStep - 1);
    }
  };

  const handleSubmitButton = () => {
    if (isFormFilled()) {
      const newData = {
        day: steps[dayCurrentStep],
        period: periodDataContent[periodCurrentStep],
        ...formData[periodSteps[periodCurrentStep]],
      };

      const existingIndex = submittedData.findIndex(
        (data) =>
          data.day === steps[dayCurrentStep] &&
          data.period === periodDataContent[periodCurrentStep]
      );

      if (existingIndex !== -1) {
        const updatedSubmittedData = [...submittedData];
        updatedSubmittedData[existingIndex] = newData;
        setSubmittedData(updatedSubmittedData);
      } else {
        setSubmittedData([...submittedData, newData]);
      }
      setPeriodCurrentStep(periodCurrentStep + 1);
    }
  };
  const handleDayChange = () => {
    setPeriodCurrentStep(0);
    setDayCurrentStep(dayCurrentStep + 1);
    clearForm();
  };
  const clearForm = () => {
    const clearedFormData = { ...formData };
    for (const step of periodSteps) {
      clearedFormData[step] = initialFormData;
    }
    setFormData(clearedFormData);
  };

  const handlePeriodClearButton = () => {
    setFormData((prevData) => ({
      ...prevData,
      [periodSteps[periodCurrentStep]]: initialFormData,
    }));
  };

  const isFormFilled = () => {
    const currentFormData = formData[periodSteps[periodCurrentStep]];
    return (
      currentFormData.subjectName !== "" &&
      currentFormData.teacherName !== "" &&
      currentFormData.subjectType !== "" &&
      currentFormData.roomNo !== ""
    );
  };

  const isFirstInputFilled = () => {
    const currentFormData = formData[periodSteps[periodCurrentStep]];
    return currentFormData.subjectName !== "";
  };
  const handleReset = () => {
    setAssignedClass("");
    setGroup("");
    setRoutineVersion("");
    setShift("");
    setSubmittedData([]);
    setPeriodCurrentStep(0);
    setDayCurrentStep(0);
  };
  console.log(submittedData);
  const handleSaveRoutineToDatabase = async () => {
    const shouldSave = window.confirm(
      "Are you sure you want to save this routine? Check again!"
    );

    if (!shouldSave) {
      return;
    } else if (shouldSave) {
      const routine = {
        assignedClass,
        section,
        group,
        routineVersion,
        shift,
        admin: { id: admin?._id },
        routine: submittedData,
      };
      console.log(routine);
      try {
        await axios
          .post(
            "https://v1-amader-school-server.vercel.app/api/v1/routines",
            routine,
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            }
          )
          .then((result) => {
            if (result.status === 200) {
              handleReset();
              setTimeout(() => {
                toast.success(`${result.data.message}`);
              }, 1000);
            }
          });
      } catch (error) {}
    }
  };

  return (
    <div className="relative 2xl:top-24 2xl:left-[360px]">
      <div className="text-[17px] font-semibold breadcrumbs mb-8">
        <ul>
          <li className="hover:text-[#FFBE15] ">
            <Link to={`/dashboard/admin`}>Dashboard</Link>
          </li>
          <li className="text-[#FFBE15]">Routine Generator</li>
        </ul>
      </div>

      <div className="flex flex-col bg-white py-10 px-8 w-[79.3%]">
        <h1 className="text-2xl mb-5 font-bold">Routine Generator</h1>
        <div className="flex gap-5 mb-8">
          <div>
            <label className="inline-block font-medium text-gray-600">
              Select Class:
            </label>
            <select
              value={assignedClass}
              onChange={(e) => setAssignedClass(e.target.value)}
              className="border ml-2 p-2 rounded-md focus:outline-none"
            >
              <option value="">Select Class First</option>
              <option value="One">One</option>
              <option value="Two">Two</option>
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
          {assignedClass === "Nine" ||
            assignedClass === "Ten" ||
            assignedClass === "Eleven" ||
            (assignedClass === "Twelve" && (
              <div>
                <label className="inline-block font-medium text-gray-600">
                  Select Group:
                </label>
                <select
                  value={group}
                  onChange={(e) => setGroup(e.target.value)}
                  className="border ml-2 p-2 rounded-md focus:outline-none "
                >
                  <option value="">Select Group</option>
                  <option value="Science">Science</option>
                  <option value="Arts">Arts</option>
                  <option value="Commerce">Commerce</option>
                </select>
              </div>
            ))}
          {assignedClass && (
            <div>
              <label className="inline-block font-medium text-gray-600">
                Select Section"
              </label>
              <select
                value={section}
                onChange={(e) => setSection(e.target.value)}
                className="border ml-2 p-2 rounded-md focus:outline-none"
              >
                <option value="">Select Section</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
                <option value="G">G</option>
                <option value="H">H</option>
                <option value="I">I</option>
                <option value="J">J</option>
              </select>
            </div>
          )}
          {assignedClass && section && (
            <div>
              <label className="inline-block font-medium text-gray-600">
                Select Routine Version:
              </label>
              <select
                value={routineVersion}
                onChange={(e) => setRoutineVersion(e.target.value)}
                className="border ml-2 p-2 rounded-md focus:outline-none"
              >
                <option value="">Select Version</option>
                <option value="V1">V1</option>
                <option value="V2">V2</option>
                <option value="V3">V3</option>
                <option value="V4">V4</option>
                <option value="V5">V5</option>
                <option value="V6">V6</option>
                <option value="V7">V7</option>
                <option value="V8">V8</option>
                <option value="V9">V9</option>
                <option value="V10">V10</option>
              </select>
            </div>
          )}
          {assignedClass && routineVersion && section && (
            <div>
              <label className="inline-block font-medium text-gray-600">
                Select Shift:
              </label>
              <select
                value={shift}
                onChange={(e) => setShift(e.target.value)}
                className="border ml-2 p-2 rounded-md focus:outline-none"
              >
                <option value="">Select Shift</option>
                <option value="Morning">Morning</option>
                <option value="Day">Day</option>
              </select>
            </div>
          )}
        </div>
        {assignedClass && routineVersion && shift && section && (
          <div className="flex flex-col gap-5">
            <ul className="steps mb-4">
              {steps.map((step, index) => (
                <li
                  key={index}
                  className={`step ${
                    index === dayCurrentStep ? "step-info" : "step-red"
                  } `}
                  data-content={dataContent[index]}
                >
                  {step}
                </li>
              ))}
            </ul>
            <ul className="steps mb-4">
              {periodSteps.map((periodStep, index) => (
                <li
                  key={index}
                  className={`step ${
                    index === periodCurrentStep ? "step-success" : "step-red"
                  } `}
                  data-content={periodDataContent[index]}
                >
                  {periodStep}
                </li>
              ))}
            </ul>
            <form className="mt-4">
              {periodCurrentStep !== periodSteps.length - 1 &&
                dayCurrentStep !== steps.length - 1 && (
                  <div className="mb-4 flex flex-col gap-5">
                    <div>
                      <label className="block font-medium text-gray-600 mb-2">
                        Subject Name:
                      </label>
                      <input
                        className="mt-1 px-4 py-2 border rounded-md focus:outline-none w-1/3"
                        type="text"
                        name="subjectName"
                        value={
                          formData[periodSteps[periodCurrentStep]]
                            .subjectName || ""
                        }
                        onChange={(e) => {
                          const { name, value } = e.target;
                          setFormData((prevData) => ({
                            ...prevData,
                            [periodSteps[periodCurrentStep]]: {
                              ...prevData[periodSteps[periodCurrentStep]],
                              [name]: value,
                            },
                          }));
                        }}
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-gray-600 mb-2">
                        Teacher Name:
                      </label>
                      <input
                        className="mt-1 px-4 py-2 border rounded-md focus:outline-none w-1/3"
                        type="text"
                        name="teacherName"
                        value={
                          formData[periodSteps[periodCurrentStep]]
                            .teacherName || ""
                        }
                        onChange={(e) => {
                          const { name, value } = e.target;
                          setFormData((prevData) => ({
                            ...prevData,
                            [periodSteps[periodCurrentStep]]: {
                              ...prevData[periodSteps[periodCurrentStep]],
                              [name]: value,
                            },
                          }));
                        }}
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-gray-600 mb-2">
                        Subject Type:
                      </label>
                      <select
                        className="mt-1 px-4 py-2 border rounded-md focus:outline-none w-1/3"
                        name="subjectType"
                        value={
                          formData[periodSteps[periodCurrentStep]]
                            .subjectType || ""
                        }
                        onChange={(e) => {
                          const { name, value } = e.target;
                          setFormData((prevData) => ({
                            ...prevData,
                            [periodSteps[periodCurrentStep]]: {
                              ...prevData[periodSteps[periodCurrentStep]],
                              [name]: value,
                            },
                          }));
                        }}
                        required
                      >
                        <option value="">Select Subject type</option>
                        <option value="Theory">Theory</option>
                        <option value="Practical">Practical</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-medium text-gray-600 mb-2">
                        Room No:
                      </label>
                      <input
                        className="mt-1 px-4 py-2 border rounded-md focus:outline-none w-1/3 uppercase"
                        type="text"
                        name="roomNo"
                        value={
                          formData[periodSteps[periodCurrentStep]].roomNo || ""
                        }
                        onChange={(e) => {
                          const { name, value } = e.target;
                          setFormData((prevData) => ({
                            ...prevData,
                            [periodSteps[periodCurrentStep]]: {
                              ...prevData[periodSteps[periodCurrentStep]],
                              [name]: value,
                            },
                          }));
                        }}
                        required
                      />
                    </div>
                  </div>
                )}
              <div className="mt-5">
                {dayCurrentStep > 0 && (
                  <button
                    type="button"
                    className="bg-blue-500 text-white px-4 py-2 rounded "
                    onClick={handlePreviousDayButton}
                  >
                    Previous Day
                  </button>
                )}
                {periodCurrentStep > 0 && (
                  <button
                    type="button"
                    className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
                    onClick={handlePeriodPreviousButton}
                  >
                    Previous
                  </button>
                )}
                {periodCurrentStep === periodSteps.length - 1 && (
                  <button
                    type="button"
                    className="bg-green-500 text-white px-4 py-2 rounded ml-4"
                    onClick={handleDayChange}
                  >
                    Submit
                  </button>
                )}
                {dayCurrentStep === steps.length - 1 && (
                  <button
                    type="button"
                    className="bg-green-500 text-white px-4 py-2 rounded ml-4"
                    onClick={handleSaveRoutineToDatabase}
                  >
                    Save
                  </button>
                )}
                {periodCurrentStep < periodSteps.length - 1 && (
                  <>
                    <button
                      type="button"
                      className={`bg-red-500 text-white px-4 py-2 rounded ml-2 ${
                        !isFirstInputFilled() &&
                        "cursor-not-allowed bg-opacity-50"
                      }`}
                      onClick={handlePeriodClearButton}
                      disabled={!isFirstInputFilled()}
                    >
                      Clear
                    </button>
                    <button
                      type="button"
                      className={`bg-blue-500 text-white px-4 py-2 rounded ml-2 ${
                        !isFormFilled() && "cursor-not-allowed bg-opacity-50"
                      }`}
                      onClick={() => {
                        handlePeriodNextButton();
                        handleSubmitButton();
                      }}
                      disabled={!isFormFilled()}
                    >
                      Next
                    </button>
                  </>
                )}
              </div>
            </form>
          </div>
        )}

        {submittedData.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl font-bold mb-4">Generated Routine</h2>
            <table className="border-collapse border table text-left border-gray-300 w-full">
              <thead>
                <tr>
                  <th className="text-[18px] font-semibold text-black ml-10">
                    Day
                  </th>
                  {periodSteps.slice(0, -1).map((periodStep, index) => (
                    <th
                      key={index}
                      className="text-[18px] font-semibold text-black ml-10"
                    >
                      {periodStep}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-[14px]">
                {steps.slice(0, -1).map((dayStep, dayIndex) => (
                  <tr key={dayIndex}>
                    <td className="ml-10 text-[16px]">{dayStep}</td>
                    {periodSteps.slice(0, -1).map((periodStep, periodIndex) => (
                      <td key={periodIndex} className="ml-10 text-[16px]">
                        {submittedData.find(
                          (data) =>
                            data.day === dayStep &&
                            data.period === periodDataContent[periodIndex]
                        ) && (
                          <>
                            <h1>
                              SubjectName:{" "}
                              {
                                submittedData.find(
                                  (data) =>
                                    data.day === dayStep &&
                                    data.period ===
                                      periodDataContent[periodIndex]
                                )?.subjectName
                              }
                            </h1>
                            <h1>
                              Teacher Name:{" "}
                              {
                                submittedData.find(
                                  (data) =>
                                    data.day === dayStep &&
                                    data.period ===
                                      periodDataContent[periodIndex]
                                )?.teacherName
                              }
                            </h1>
                            <h1>
                              Subject Type:{" "}
                              {
                                submittedData.find(
                                  (data) =>
                                    data.day === dayStep &&
                                    data.period ===
                                      periodDataContent[periodIndex]
                                )?.subjectType
                              }
                            </h1>
                            <h1>
                              Room No:{" "}
                              {
                                submittedData.find(
                                  (data) =>
                                    data.day === dayStep &&
                                    data.period ===
                                      periodDataContent[periodIndex]
                                )?.roomNo
                              }
                            </h1>
                          </>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="container flex items-center justify-center xl:gap-2 lg:gap-2 gap-1 xl:text-[18px] font-semibold text-black h-[100px] mb-24 mt-2">
        <h1 className="xl:text-[18px] font-semibold text-black">
          Copyright © 2023 - All right reserved by
        </h1>
        <img className="h-[26px] mt-[6.5px]" src={icon} alt="amader-school" />
        <h1>Ltd.</h1>
      </div>
    </div>
  );
};

export default Routine;
