import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";
import axios from "axios";
import { toast } from "react-hot-toast";

const AddExpense = () => {
  const { admins } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const handleExpenseData = (data, event) => {
    const expenseDetail = {
      adminName: data.name,
      adminID: data.id,
      expenseType: data.expenseType,
      expenseAmount: data.expenseAmount,
      adminEmail: data.email,
      adminPhoneNumber: data.phoneNumber,
      expenseStatus: data.expenseStatus,
      issueDate: data.issueDate,
    };

    if (expenseDetail) {
      axios
        .post("http://localhost:8080/api/v1/expenses", expenseDetail, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((result) => {
          if (result) {
            toast.success("Expense data saving Successful!");
            event.target.reset();
          } else {
            toast.error(
              "Ops! Something went wrong. Couldn't save expense data to the database!"
            );
          }
        })
        .catch((error) => {
          if (error) {
            toast.error(
              "Ops! Something went wrong. Couldn't save expense data to the database!"
            );
          }
        });
    }
  };
  return (
    <div className="h-[90vh]">
      <div className="flex flex-col relative left-[320px] top-28 bg-white w-[81.5%] h-auto">
        <div>
          <h1 className="text-2xl font-bold py-8 px-5">Add Expenses</h1>
        </div>
        <div>
          <form
            onSubmit={handleSubmit(handleExpenseData)}
            className="flex flex-col w-full gap-5 h-[410px] px-5"
          >
            {/* 1st row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 lg:gap-4">
              <div>
                <label className="label">
                  <h1 className="font-bold">
                    Admin Name
                    <span className="text-red-500 ">(Required)*</span>
                  </h1>
                </label>
                <select
                  {...register("name")}
                  className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3"
                >
                  <option defaultValue={true}>Select Your name</option>
                  {admins?.map((admin) => (
                    <option value={admin?.fullName}>{admin?.fullName}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="label">
                  <h1 className="font-bold">
                    Admin ID NO
                    <span className="text-red-500 ">(Required)*</span>
                  </h1>
                </label>
                <select
                  {...register("id")}
                  className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3"
                >
                  <option defaultValue={true}>Select Your ID</option>
                  {admins?.map((admin) => (
                    <option value={admin?.id}>{admin?.id}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="label">
                  <h1 className="font-bold">
                    Admin Email
                    <span className="text-red-500 ">(Required)*</span>
                  </h1>
                </label>
                <select
                  {...register("email")}
                  className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3"
                >
                  <option defaultValue={true}>Select Your Email</option>
                  {admins?.map((admin) => (
                    <option value={admin?.email}>{admin?.email}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="label">
                  <h1 className="font-bold">
                    Admin Phone Number
                    <span className="text-red-500 ">(Required)*</span>
                  </h1>
                </label>
                <select
                  {...register("phoneNumber")}
                  className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3"
                >
                  <option defaultValue={true}>Select Your Phone Number</option>
                  {admins?.map((admin) => (
                    <option value={admin?.phoneNumber}>
                      {admin?.phoneNumber}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="label">
                  <h1 className="font-bold">
                    Expense Type {""}
                    <span className="text-red-500 ">(Required)*</span>
                  </h1>
                </label>
                <select
                  {...register("expenseType")}
                  className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3"
                >
                  <option defaultValue={true}>Select Expense Type</option>
                  <option value="Salary">Salary</option>
                  <option value="Transport">Transport</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="Purchase">Purchase</option>
                  <option value="Utilities">Utilities</option>
                </select>
              </div>
              <div>
                <label className="label">
                  <h1 className="font-bold">
                    Expense Amount {""}
                    <span className="text-red-500 ">(Required)*</span>
                  </h1>
                </label>
                <input
                  className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3"
                  type="text"
                  placeholder="Amount of Expenses"
                  {...register("expenseAmount")}
                />
              </div>
              <div>
                <label className="label">
                  <h1 className="font-bold">
                    Expense Status {""}
                    <span className="text-red-500 ">(Required)*</span>
                  </h1>
                </label>
                <select
                  {...register("expenseStatus")}
                  className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3"
                >
                  <option defaultValue={true}>Select Expense Status</option>
                  <option value="Paid">Paid</option>
                  <option value="Unpaid">Unpaid</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
              <div>
                <label className="label">
                  <h1 className="font-bold">
                    Issue Date {""}
                    <span className="text-red-500">(Required)*</span>
                  </h1>
                </label>
                <input
                  className="outline-[#FFBE15] h-12 w-full bg-black bg-opacity-5 rounded-md px-3"
                  placeholder="Issue Date"
                  type="date"
                  {...register("issueDate")}
                />
              </div>
            </div>
            {/* 5th row */}

            <div className="flex items-center gap-4">
              <input
                className="uppercase px-10 py-3 text-white  text-xl font-bold  bg-[#FFBE15] rounded-md hover:bg-[#042954]"
                type="submit"
                value="Save"
              />
              <input
                className="uppercase px-10 py-3 text-white  text-xl font-bold  bg-[#042954] hover:bg-[#FFBE15] rounded-md"
                type="reset"
                value="Reset"
                onClick={(e) => e.target.reset()}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddExpense;
