import React, { useContext, useState } from "react";
import user from "../../../../Assets/icon/user.png";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";
import Pagination from "../SmallComponents/Pagination/Pagination";

const StudentsTable = () => {
  const { students } = useContext(AuthContext);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(10);
  const pages = Math.ceil(students?.length / count);

  return (
    <div>
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
          <div className="relative max-w-xs">
            <input
              type="text"
              name="hs-table-search"
              id="hs-table-search"
              className="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              placeholder="Search by Roll"
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
              placeholder="Search by Class"
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
              placeholder="Search by Section"
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
      <div className="overflow-x-auto overflow-y-auto h-[1100px]">
        <table className="table w-full border rounded-lg">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>ID</th>
              <th>Roll</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Class</th>
              <th>Section</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </td>
              <td>VNC-06-001</td>
              <td>001</td>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={user} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </td>
              <td>Zayed Fahim</td>
              <td>Male</td>
              <td>10</td>
              <td>A</td>
              <td>Hazaribagh</td>
              <td>01891988693</td>
              <td>zayedfahim33.cse@gmail.com</td>
            </tr>
            {/* row 2 */}
            <tr>
              <td>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </td>
              <td>VNC-06-001</td>
              <td>001</td>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={user} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </td>
              <td>Zayed Fahim</td>
              <td>Male</td>
              <td>10</td>
              <td>A</td>
              <td>Hazaribagh</td>
              <td>01891988693</td>
              <td>zayedfahim33.cse@gmail.com</td>
            </tr>
            {/* row 3 */}
            <tr>
              <td>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </td>
              <td>VNC-06-001</td>
              <td>001</td>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={user} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </td>
              <td>Zayed Fahim</td>
              <td>Male</td>
              <td>10</td>
              <td>A</td>
              <td>Hazaribagh</td>
              <td>01891988693</td>
              <td>zayedfahim33.cse@gmail.com</td>
            </tr>
            {/* row 4 */}
            <tr>
              <td>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </td>
              <td>VNC-06-001</td>
              <td>001</td>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={user} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </td>
              <td>Zayed Fahim</td>
              <td>Male</td>
              <td>10</td>
              <td>A</td>
              <td>Hazaribagh</td>
              <td>01891988693</td>
              <td>zayedfahim33.cse@gmail.com</td>
            </tr>
            {/* row 5 */}
            <tr>
              <td>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </td>
              <td>VNC-06-001</td>
              <td>001</td>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={user} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </td>
              <td>Zayed Fahim</td>
              <td>Male</td>
              <td>10</td>
              <td>A</td>
              <td>Hazaribagh</td>
              <td>01891988693</td>
              <td>zayedfahim33.cse@gmail.com</td>
            </tr>
            {/* row 6 */}
            <tr>
              <td>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </td>
              <td>VNC-06-001</td>
              <td>001</td>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={user} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </td>
              <td>Zayed Fahim</td>
              <td>Male</td>
              <td>10</td>
              <td>A</td>
              <td>Hazaribagh</td>
              <td>01891988693</td>
              <td>zayedfahim33.cse@gmail.com</td>
            </tr>
            {/* row 7 */}
            <tr>
              <td>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </td>
              <td>VNC-06-001</td>
              <td>001</td>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={user} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </td>
              <td>Zayed Fahim</td>
              <td>Male</td>
              <td>10</td>
              <td>A</td>
              <td>Hazaribagh</td>
              <td>01891988693</td>
              <td>zayedfahim33.cse@gmail.com</td>
            </tr>
            {/* row 8 */}
            <tr>
              <td>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </td>
              <td>VNC-06-001</td>
              <td>001</td>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={user} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </td>
              <td>Zayed Fahim</td>
              <td>Male</td>
              <td>10</td>
              <td>A</td>
              <td>Hazaribagh</td>
              <td>01891988693</td>
              <td>zayedfahim33.cse@gmail.com</td>
            </tr>
            {/* row 9 */}
            <tr>
              <td>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </td>
              <td>VNC-06-001</td>
              <td>001</td>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={user} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </td>
              <td>Zayed Fahim</td>
              <td>Male</td>
              <td>10</td>
              <td>A</td>
              <td>Hazaribagh</td>
              <td>01891988693</td>
              <td>zayedfahim33.cse@gmail.com</td>
            </tr>
            {/* row 10 */}
            <tr>
              <td>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </td>
              <td>VNC-06-001</td>
              <td>001</td>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={user} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </td>
              <td>Zayed Fahim</td>
              <td>Male</td>
              <td>10</td>
              <td>A</td>
              <td>Hazaribagh</td>
              <td>01891988693</td>
              <td>zayedfahim33.cse@gmail.com</td>
            </tr>
          </tbody>
        </table>
        <Pagination pages={pages} setPage={setPage} page={page} />
      </div>
    </div>
  );
};

export default StudentsTable;
