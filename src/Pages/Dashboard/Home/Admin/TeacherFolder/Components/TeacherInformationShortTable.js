import React, { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";
import Pagination from "../../../SmallComponents/Pagination/Pagination";
import { BsSearch } from "react-icons/bs";
import { FcDeleteDatabase } from "react-icons/fc";

const TeacherInformationShortTable = ({ setTeacherDetails }) => {
  const { admin } = useContext(AuthContext);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(10);
  const pages = Math.ceil(admin?.teachers?.length / count);

  const handleTeacherDetails = (id) => {
    const selectedTeacher = admin?.teachers?.find(
      (teacher) => teacher._id === id
    );
    setTeacherDetails(selectedTeacher);
  };
  return (
    <div className="px-5 w-full h-[910px]">
      <div className="flex justify-between items-center pb-5">
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
        <button className="px-4 py-1 font-semibold rounded-lg bg-[#FFBE15] flex gap-1 justify-center items-center hover:text-white">
          <BsSearch />
          SEARCH
        </button>
      </div>

      <div className="w-full h-[910px] mt-2 inline-block align-middle">
        <div className="overflow-y-hidden border rounded">
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
                  Details
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {/* row 1 */}
              {admin?.teachers?.map((teacher) => (
                <tr>
                  <td className="px-6 py-2 text-sm font-medium text-gray-800 whitespace-nowrap">
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
                  <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                    {teacher?.fullName}
                  </td>
                  <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                    {teacher?.gender}
                  </td>
                  <button
                    className="px-2 py-1 my-4 ml-6 font-semibold rounded-md hover:text-white text-sm bg-[#FFBE15] text-gray-800 whitespace-nowrap"
                    onClick={() => handleTeacherDetails(teacher?._id)}
                  >
                    Details
                  </button>
                  <td className="px-8 py-2 ">
                    <button type="submit">
                      <FcDeleteDatabase
                        className="h-8 w-8 hover:scale-110"
                        title="Delete"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination page={page} setPage={setPage} pages={pages} />
      </div>
    </div>
  );
};

export default TeacherInformationShortTable;
