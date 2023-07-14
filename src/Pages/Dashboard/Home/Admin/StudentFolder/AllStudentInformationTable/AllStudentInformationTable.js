import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import icon from "../../../../../../Assets/dashboard-icon/dashboard.png";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const AllStudentInformationTable = () => {
  const { teacher } = useContext(AuthContext);
  const handleEdit = (id) => {
    // Handle edit action
  };

  const handleDelete = (id) => {
    // Handle delete action
  };
  return (
    <div className="overflow-y-hidden overflow-x-hidden min-h-screen relative 2xl:top-24 2xl:left-[360px] z-[1] 2xl:w-[79.3%]  ">
      <div className="text-[17px] font-semibold breadcrumbs mb-8">
        <ul>
          <li className="hover:text-[#FFBE15] ">
            <Link to={`/dashboard/admin`}>Dashboard</Link>
          </li>
          <li>Students</li>
          <li className="text-[#FFBE15] ">Advised Students</li>
        </ul>
      </div>
      <div className="bg-white pb-12">
        <h1 className="font-bold text-2xl py-8 px-8">Advised Students</h1>
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
                    placeholder="Search by Student ID"
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
                <div className="relative max-w-xs">
                  <input
                    type="text"
                    name="hs-table-search"
                    id="hs-table-search"
                    className="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                    placeholder="Search by Email"
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
                <div className="relative max-w-xs">
                  <input
                    type="text"
                    name="hs-table-search"
                    id="hs-table-search"
                    className="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                    placeholder="Search by Name"
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
                        Roll
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
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {teacher?.advisedStudents?.map((advisedStudent) => (
                      <React.Fragment key={advisedStudent._id}>
                        <tr className="hover">
                          <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                            {advisedStudent?.id}
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                            {advisedStudent?.rollNumber}
                          </td>
                          <td className="pt-2 pl-6">
                            <div className="avatar">
                              <div className="mask mask-squircle w-10 h-10">
                                <img
                                  src={advisedStudent?.photo}
                                  alt="Avatar Tailwind CSS Component"
                                />
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            {advisedStudent?.fullName}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            {advisedStudent?.gender}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            {advisedStudent?.assignedClass}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            {advisedStudent?.section}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            {advisedStudent?.address}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            {advisedStudent?.phoneNumber}
                          </td>

                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            {advisedStudent?.email}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            <button
                              className="text-blue-500 hover:text-blue-700 mr-2"
                              onClick={() => handleEdit(advisedStudent._id)}
                            >
                              <AiOutlineEdit size={20} title="Edit" />
                            </button>
                            <button
                              className="text-red-500 hover:text-red-700"
                              onClick={() => handleDelete(advisedStudent._id)}
                            >
                              <AiOutlineDelete size={20} title="Delete" />
                            </button>
                          </td>
                        </tr>
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex items-center justify-center xl:gap-2 lg:gap-2 gap-1 xl:text-[18px] font-semibold text-black h-[100px] mb-24">
        <h1 className="xl:text-[18px] font-semibold text-black">
          Copyright © 2023 - All right reserved by
        </h1>
        <img className="h-[26px] mt-[6.5px]" src={icon} alt="amader-school" />
        <h1>Ltd.</h1>
      </div>
    </div>
  );
};

export default AllStudentInformationTable;
