import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const AddNotice = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleAddProduct = (data) => {
    const productDetails = {
      // Phone_name: data.phoneName,
      //   image: imgData.data.url,
      //   condition: condition,
      //   seller_number: data.phone,
      //   location: data.location,
      //   category_name: category,
      // description: data.description,
      // year_of_use: data.purchaseYear,
      // brand: data.brand,
    };
    fetch(
      "https://used-products-resale-server-five.vercel.app/sellers-product",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("access-token")}`,
        },
        body: JSON.stringify(productDetails),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        
        toast.success("Product posted successfully");
      });
  };

  return (
    <div>
      <input type="checkbox" id="add-notice" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form onSubmit={handleSubmit(handleAddProduct)}>
            <h1 className="text-4xl font-bold text-center">Add Notice</h1>
            <div className="py-5">
              <div className="">
                <label className="label">
                  <span className="text-[16px] font-semibold">Role</span>
                </label>
                <select
                  {...register("role")}
                  className="border-2 border-base-400 h-12 pl-3 rounded-lg outline-none w-full"
                >
                  <option defaultValue={true}>Select your role</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="text-[16px] font-semibold">
                    Notice Title
                  </span>
                </label>
                <input
                  {...register("title", { required: true })}
                  aria-invalid={errors.title ? "true" : "false"}
                  type="text"
                  placeholder="Title"
                  className="input input-bordered w-full"
                />
              </div>
              {errors.title?.type === "required" && (
                <p className="text-red-600" role="alert">
                  Title is required
                </p>
              )}
              <div>
                <label className="label">
                  <span className="text-[16px] font-semibold">
                    Notice Description
                  </span>
                </label>
                <input
                  {...register("description", { required: true })}
                  aria-invalid={errors.description ? "true" : "false"}
                  type="text"
                  placeholder="Description"
                  className="input input-bordered w-full"
                />
              </div>
              {errors.title?.type === "required" && (
                <p className="text-red-600" role="alert">
                  Title is required
                </p>
              )}
              <div>
                <label className="label">
                  <span className="text-[16px] font-semibold">
                    Published Date
                  </span>
                </label>
                <input
                  {...register("date")}
                  aria-invalid={errors.date ? "true" : "false"}
                  type="date"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
          </form>
          <div className="modal-action">
            <label htmlFor="add-notice" className="btn">
              Cancel
            </label>
            <label htmlFor="add-notice" className="btn">
              Submit
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNotice;
