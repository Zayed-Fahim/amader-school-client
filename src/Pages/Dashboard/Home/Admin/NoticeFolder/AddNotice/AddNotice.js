import axios from "axios";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

const AddNotice = () => {
  const { register, handleSubmit } = useForm();
  const formRef = useRef();
  const fileInputRef = useRef(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const handleFileChange = (event) => {
    fileInputRef.current.click();
    const files = event.target.files;
    setSelectedImages([...files]);
  };
  const handleCreateNotice = async (data) => {
    // await axios.post("http://localhost:8080/api/v1/notices", {
    //   title: data.title,
    //   description: data.description,
    //   images: selectedImages,
    // });
  };

  return (
    <div className="min-w-[40%] max-w-full bg-white rounded-lg 2xl:py-10 2xl:px-8">
      <h1 className="text-2xl font-bold mb-10">Add Notice</h1>
      <form
        onSubmit={handleSubmit(handleCreateNotice)}
        ref={formRef}
        className="space-y-7"
      >
        <div>
          <label className="block font-bold mb-1">Title</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded focus:outline-none bg-[#042954] bg-opacity-5"
            {...register("title")}
          />
        </div>

        <div>
          <label className="block font-bold mb-1">Description</label>
          <textarea
            className="w-full px-3 py-2 border rounded focus:outline-none bg-[#042954] bg-opacity-5"
            rows={4}
            {...register("description")}
          />
        </div>
        <div>
          <label className="block font-bold mb-1 ">Images(Optional)</label>
          <input
            type="file"
            multiple
            placeholder="Can select multiple images"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border rounded focus:outline-none bg-[#042954] bg-opacity-5"
          />
        </div>
        <div>
          <label className="block font-bold mb-1">Posted By</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded focus:outline-none bg-[#042954] bg-opacity-5"
            {...register("postedBy")}
          />
        </div>
        <div>
          <label className="block font-bold mb-1">Posted Date</label>
          <input
            type="date"
            className="w-full px-3 py-2 border rounded focus:outline-none bg-[#042954] bg-opacity-5"
            {...register("postedDate")}
          />
        </div>

        <div className="text-center flex">
          <button
            onClick={() => formRef.current.reset()}
            type="submit"
            className="bg-[#FFBE15] hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
          >
            Add Notice
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNotice;
