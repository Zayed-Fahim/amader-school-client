import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { BsSearch } from "react-icons/bs";

const ViewRoutineMorning = () => {
  const { handleSubmit } = useForm();
  const [assignedClass, setAssignedClass] = useState(false);
  const [group, setGroup] = useState(false);
  const [shift, setShift] = useState(false);
  const [section, setSection] = useState(false);
  const [routines, setRoutines] = useState([]);
  const [message, setMessage] = useState(false);

  const handleViewRoutine = () => {
    const searchInfo = {
      assignedClass: assignedClass,
      group: group,
      section: section.toUpperCase(),
      shift: shift,
    };
    setMessage(searchInfo);
    if (searchInfo) {
      axios
        .post("http://localhost:8080/api/v1/view-routine", searchInfo, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((result) => {
          return setRoutines(result.data.payload.result);
        })
        .catch((error) => {});
    }
  };

  return (
    <div className="min-w-[940px] ">
      <div className="bg-white">
        <div className="flex flex-col py-10">
          <div className="overflow-x-auto">
            <form
              className="pb-5 px-8 flex justify-between items-center"
              onSubmit={handleSubmit(handleViewRoutine)}
            >
              <div className="flex gap-3 items-center">
                <div className="relative w-[170px] bg-[#1F2937] rounded-md text-white">
                  <select
                    required
                    className="h-10 w-full px-3 bg-[#1F2937]  rounded-md"
                    onChange={(e) => {
                      setAssignedClass(e.target.value);
                    }}
                  >
                    <option value="Select Class">Select Class</option>
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

                <div className="relative w-[170px] bg-[#1F2937] rounded-md text-white">
                  <select
                    required
                    className="h-10 w-full bg-[#1F2937] rounded-md px-3"
                    onChange={(e) => setSection(e.target.value)}
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

                {assignedClass &&
                (assignedClass === "Nine" ||
                  assignedClass === "Ten" ||
                  assignedClass === "Eleven" ||
                  assignedClass === "Twelve") ? (
                  <div className="relative w-[170px] bg-[#1F2937] rounded-md text-white">
                    <select
                      required
                      onChange={(e) => setGroup(e.target.value)}
                      className="h-10 w-full bg-[#1F2937] rounded-md px-3"
                    >
                      <option defaultValue={true}>Select Group</option>
                      <option value="Science">Science</option>
                      <option value="Commerce">Commerce</option>
                      <option value="Arts">Arts</option>
                    </select>
                  </div>
                ) : null}

                <div className="relative w-[170px] bg-[#1F2937] rounded-md text-white">
                  <select
                    required
                    className="h-10 w-full bg-[#1F2937] rounded-md px-3"
                    onChange={(e) => setShift(e.target.value)}
                  >
                    <option defaultValue={true}>Select Shift</option>
                    <option value="Morning">Morning</option>
                  </select>
                </div>
              </div>
              <button className="px-4 py-1 font-semibold rounded-lg bg-[#FFBE15] flex gap-1 justify-center items-center hover:text-white">
                <BsSearch />
                SEARCH
              </button>
            </form>

            {!message ? (
              <div className="w-full h-[500px] bg-white grid place-items-center">
                <h1 className="text-5xl font-bold">Search Routine Here.</h1>
              </div>
            ) : routines && !routines?.length ? (
              <div className="w-full h-[500px] bg-white grid place-items-center">
                <h1 className="text-5xl font-bold">Ops!! No Routine Found</h1>
              </div>
            ) : (
              routines &&
              routines?.length && (
                <div className="w-full mt-2 inline-block align-middle px-8 pb-[40px]">
                  <div className="overflow-x-auto border rounded">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="py-3 pl-4">
                            <div className="flex items-center h-5">
                              <input
                                id="checkbox-all"
                                type="checkbox"
                                className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                              />
                              <label htmlFor="checkbox" className="sr-only">
                                Checkbox
                              </label>
                            </div>
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                          >
                            Day
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                          >
                            Shift
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                          >
                            Subject
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                          >
                            Class
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                          >
                            Section
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                          >
                            Group
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                          >
                            Teacher Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                          >
                            Time
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {/* row 1 */}
                        {routines?.map((routine) => (
                          <tr key={routine?._id}>
                            <td className="py-3 pl-4">
                              <div className="flex items-center h-5">
                                <input
                                  type="checkbox"
                                  className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                                />
                                <label htmlFor="checkbox" className="sr-only">
                                  Checkbox
                                </label>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                              {routine?.day}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                              {routine?.shift}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                              {routine?.subject}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                              {routine?.assignedClass}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                              {routine?.section}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                              {routine ? routine?.group : "N/A"}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                              {routine?.teacherName}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                              {routine?.time[0]}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewRoutineMorning;
