// import axios from "axios";
// import React, { useContext, useRef, useState } from "react";
// import { useForm } from "react-hook-form";
// import { toast } from "react-hot-toast";
// import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";

// const AddNotice = () => {
//   const { admin } = useContext(AuthContext);
//   const { register, handleSubmit } = useForm();
//   const formRef = useRef();
//   const fileInputRef = useRef(null);
//   const [selectedImages, setSelectedImages] = useState([]);
//   const handleFileChange = (event) => {
//     fileInputRef.current.click();
//     const files = event.target.files;
//     setSelectedImages([...files]);
//   };
//   const handleAddNotice = async (data) => {
//     await axios
//       .post("https://v1-amader-school-server.vercel.app/api/v1/notices", {
//         title: data.title,
//         description: data.description,
//         images: selectedImages,
//         postedBy: data.postedBy,
//         postedDate: data.postedDate,
//         admin: { id: admin?._id },
//       })
//       .then((result) => {
//         if (result) {
//           toast.success("Successfully Added!");
//           formRef.current.reset();
//           window.location.reload();
//         }
//       })
//       .catch((error) => {
//         if (error) {
//           toast.error("Ops! Something went Wrong!");
//         }
//       });
//   };

//   return (
//     <div className="min-w-[40%] max-w-full bg-white rounded-lg 2xl:py-10 2xl:px-8">
//       <h1 className="text-2xl font-bold mb-10">Add Notice</h1>
//       <form
//         onSubmit={handleSubmit(handleAddNotice)}
//         ref={formRef}
//         className="space-y-7"
//       >
//         <div>
//           <label className="block font-bold mb-1">Title</label>
//           <input
//             required
//             type="text"
//             className="w-full px-3 py-2 border rounded focus:outline-none"
//             {...register("title")}
//           />
//         </div>
//         <div>
//           <label className="block font-bold mb-1">Description</label>
//           <textarea
//             required
//             className="w-full px-3 py-2 border rounded focus:outline-none"
//             rows={4}
//             {...register("description")}
//           />
//         </div>
//         <div>
//           <label className="block font-bold mb-1 ">Images(Optional)</label>
//           <input
//             type="file"
//             multiple
//             placeholder="Can select multiple images"
//             onChange={handleFileChange}
//             className="w-full px-3 py-2 border rounded focus:outline-none"
//           />
//         </div>
//         <div>
//           <label className="block font-bold mb-1">Posted By</label>
//           <select
//             required
//             className="w-full px-3 py-2 border rounded focus:outline-none"
//             {...register("postedBy")}
//           >
//             <option value="">Posted By</option>
//             <option value="Admin">Admin</option>
//           </select>
//         </div>
//         <div>
//           <label className="block font-bold mb-1">Posted Date</label>
//           <input
//             required
//             type="date"
//             className="w-full px-3 py-2 border rounded focus:outline-none"
//             {...register("postedDate")}
//           />
//         </div>
//         <div className="text-center flex gap-5">
//           <button
//             type="submit"
//             className="bg-[#FFBE15] hover:bg-[#042954] text-white font-bold py-2 px-4 rounded"
//           >
//             Add Notice
//           </button>
//           <button
//             onClick={() => formRef.current.reset()}
//             type="submit"
//             className="hover:bg-[#FFBE15] bg-[#042954] text-white font-bold py-2 px-4 rounded"
//           >
//             Reset
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddNotice;

import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";

const AddNotice = () => {
  const { admin } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const formRef = useRef();
  const fileInputRef = useRef(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const handleFileChange = (event) => {
    fileInputRef.current.click();
    const files = event.target.files;
    setSelectedImages([...files]);
  };

  const uploadImageToImgBB = async (imageFile) => {
    const formData = new FormData();
    formData.append("image", imageFile);

    const response = await axios.post(
      `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_key}`,
      formData
    );

    if (response?.data?.data?.url) {
      return response.data.data.url;
    } else {
      throw new Error("Image upload failed.");
    }
  };

  const handleAddNotice = async (data) => {
    try {
      const imageLinks = await Promise.all(
        selectedImages.map((imageFile) => uploadImageToImgBB(imageFile))
      );

      await axios.post(
        "https://v1-amader-school-server.vercel.app/api/v1/notices",
        {
          title: data.title,
          description: data.description,
          images: imageLinks,
          postedBy: data.postedBy,
          postedDate: data.postedDate,
          admin: { id: admin?._id },
        }
      );

      toast.success("Successfully Added!");
      formRef.current.reset();
      window.location.reload();
    } catch (error) {
      toast.error("Ops! Something went Wrong!");
    }
  };

  return (
    <div className="min-w-[40%] max-w-full bg-white rounded-lg 2xl:py-10 2xl:px-8">
      <h1 className="text-2xl font-bold mb-10">Add Notice</h1>
      <form
        onSubmit={handleSubmit(handleAddNotice)}
        ref={formRef}
        className="space-y-7"
      >
        <div>
          <label className="block font-bold mb-1">Title</label>
          <input
            required
            type="text"
            className="w-full px-3 py-2 border rounded focus:outline-none"
            {...register("title")}
          />
        </div>
        <div>
          <label className="block font-bold mb-1">Description</label>
          <textarea
            required
            className="w-full px-3 py-2 border rounded focus:outline-none"
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
            className="w-full px-3 py-2 border rounded focus:outline-none"
            ref={fileInputRef}
          />
        </div>
        <div>
          <label className="block font-bold mb-1">Posted By</label>
          <select
            required
            className="w-full px-3 py-2 border rounded focus:outline-none"
            {...register("postedBy")}
          >
            <option value="">Posted By</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <div>
          <label className="block font-bold mb-1">Posted Date</label>
          <input
            required
            type="date"
            className="w-full px-3 py-2 border rounded focus:outline-none"
            {...register("postedDate")}
          />
        </div>
        <div className="text-center flex gap-5">
          <button
            type="submit"
            className="bg-[#FFBE15] hover:bg-[#042954] text-white font-bold py-2 px-4 rounded"
          >
            Add Notice
          </button>
          <button
            onClick={() => formRef.current.reset()}
            type="button"
            className="hover:bg-[#FFBE15] bg-[#042954] text-white font-bold py-2 px-4 rounded"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNotice;
