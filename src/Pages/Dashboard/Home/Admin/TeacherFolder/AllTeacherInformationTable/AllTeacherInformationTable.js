import React, { useContext } from "react";
import user from "../../../../../../Assets/icon/user.png";
import { useState } from "react";
import Pagination from "../../../SmallComponents/Pagination/Pagination";
import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";

const AllTeacherInformationTable = () => {
  const { teachers } = useContext(AuthContext);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(20);
  const pages = Math.ceil(teachers?.length / count);

  return (
    <div className="overflow-y-hidden overflow-x-hidden min-h-screen">
      <div className="relative xl:top-28 2xl:left-[360px] z-[1] 2xl:w-[79.3%] bg-white max-h-max">
        <h1 className="font-bold text-2xl py-8 px-8">
          All Teacher Information
        </h1>
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="pb-5 px-8 flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <div className="relative max-w-xs">
                  <input
                    type="text"
                    name="hs-table-search"
                    id="hs-table-search"
                    className="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                    placeholder="Search by ID"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <svg
                      className="h-3.5 w-3.5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <button className="px-6 py-2 font-semibold text-xl rounded-lg bg-[#FFBE15]">
                SEARCH
              </button>
            </div>

            <div className="w-full mt-2 inline-block align-middle px-8">
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
                        ID
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Photo
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Gender
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Class Teacher
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Teacher Of Class
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Section of Class Teacher
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Teaching Shift
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Address
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Phone
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Email
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {teachers?.map((teacher) => (
                      <tr>
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
                          {teacher?.id}
                        </td>
                        <td className="pt-2 pl-6">
                          <div className="avatar">
                            <div className="mask mask-squircle w-10 h-10">
                              <img
                                src={teacher?.photo}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {teacher?.fullName}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {teacher?.gender}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {teacher?.classTeacher}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {teacher?.teacherOfClass}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {teacher?.sectionOfClass}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {teacher?.shift}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {teacher?.address}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {teacher?.phoneNumber}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {teacher?.email}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Pagination page={page} pages={pages} setPage={setPage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTeacherInformationTable;
