import React, { useContext } from "react";
import { useState } from "react";
import Pagination from "../../../SmallComponents/Pagination/Pagination";
import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";

const Expenses = () => {
  const { expenses } = useContext(AuthContext);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(20);
  const pages = Math.ceil(expenses?.length / count);

  return (
    <div className="overflow-y-hidden overflow-x-hidden min-h-screen">
      <div className="relative xl:top-28 2xl:left-[360px] z-[1] 2xl:w-[79.3%] bg-white max-h-max">
        <h1 className="font-bold text-2xl py-8 px-8">
          Expense Information Table
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
                <div className="relative max-w-xs">
                  <input
                    type="text"
                    name="hs-table-search"
                    id="hs-table-search"
                    className="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                    placeholder="dd/mm/yyyy"
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
                        Issued By
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Issuer name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Issuer Email
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Issuer Phone Number
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Expense Type
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Expense Amount
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Expense Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Issue Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {/* row 1 */}
                    {expenses?.map((expense) => (
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
                          {expense?.adminID}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {expense?.adminName}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {expense?.adminEmail}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {expense?.adminPhoneNumber}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {expense?.expenseType}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {expense?.expenseAmount}/-
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          <button
                            type="submit"
                            className="h-7 w-[4.5rem] text-center font-bold bg-red-600 text-white rounded-xl"
                          >
                            {expense?.expenseStatus}
                          </button>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {expense?.issueDate}
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

export default Expenses;
