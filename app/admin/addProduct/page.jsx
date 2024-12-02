"use client"; 

import React, { useState } from "react";
import Image from "next/image"; 
import { imgs } from "@/Imgs/imgs"; 
import { toast, ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 

const Page = () => {
  // State for the uploaded image file
  const [image, setImage] = useState(null);

  // State for blog data input
  const [data, setData] = useState({
    title: "", // Blog title
    description: "", // Blog description
    category: "Fashion", // Default category
    author: "", // Blog author's name
    author_img: "/prof.png", // Default author image
  });

  // Handler for input field changes
  const onChangeHandler = (event) => {
    const name = event.target.name; // Field name
    const value = event.target.value; // Field value

    // Update the specific field in the state
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Form submission handler
  const onSubmitHandler = async (e) => {
    e.preventDefault(); 

    // Validation checks with user feedback
    if (!image) {
      toast.error("Please upload an image!"); // Notify user if no image is uploaded
      return;
    }
    if (!data.title) {
      toast.error("Please enter the blog title!"); // Notify user if no title
      return;
    }
    if (!data.description) {
      toast.error("Please enter the blog description!"); // Notify user if no description
      return;
    }
    if (!data.author) {
      toast.error("Please enter the author name!"); // Notify user if no author name
      return;
    }

    // Prepare new post data
    const newPost = {
      title: data.title,
      body: data.description,
      category: data.category,
      author: data.author,
      authorImg: data.author_img,
    };

    try {
      // Send POST request to the server
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(newPost), 
      });

      // Handle server response
      if (response.ok) {
        const result = await response.json();
        toast.success("Post added successfully!"); // Success notification

        // Save the new post to localStorage
        const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];
        localStorage.setItem("posts", JSON.stringify([...existingPosts, result]));

        // Reset form fields
        setImage(null); // Clear image
        setData({
          title: "",
          description: "",
          category: "Fashion",
          author: "",
          author_img: "/prof.png",
        });
      } else {
        throw new Error("Failed to add post");
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`); // Notify user of any errors
    }
  };

  return (
    <>
      {/* Blog form */}
      <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
        {/* Image upload section */}
        <p className="text-xl">Upload Thumbnail</p>
        <label htmlFor="image">
          <Image
            className="mt-4"
            src={!image ? imgs.upload : URL.createObjectURL(image)} // Show uploaded image or default
            width={140}
            height={70}
            alt="Thumbnail"
          />
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])} // Set uploaded image
          type="file"
          id="image"
          hidden
          required
        />

        {/* Blog title input */}
        <p className="text-xl mt-4">Blog Title</p>
        <input
          name="title"
          onChange={onChangeHandler}
          value={data.title}
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
          type="text"
          placeholder="Type here"
          required
        />

        {/* Blog description input */}
        <p className="text-xl mt-4">Blog Description</p>
        <textarea
          name="description"
          onChange={onChangeHandler}
          value={data.description}
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
          placeholder="Write content here"
          rows={6}
          required
        />

        {/* Blog category selection */}
        <p className="text-xl mt-4">Blog Category</p>
        <select
          name="category"
          onChange={onChangeHandler}
          value={data.category}
          className="w-40 mt-4 px-4 py-3 border text-gray-500"
        >
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Fashion">Fashion</option>
        </select>

        {/* Author name input */}
        <p className="text-xl mt-4">Author Name</p>
        <input
          name="author"
          onChange={onChangeHandler}
          value={data.author}
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
          type="text"
          placeholder="Enter author name"
          required
        />

        {/* Submit button */}
        <button type="submit" className="mt-8 w-40 h-12 bg-black text-white">
          ADD
        </button>
      </form>

      {/* Toast notification container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Page;
