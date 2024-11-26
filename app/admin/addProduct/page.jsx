"use client"
import React, { useState } from "react";
import Image from "next/image";
import { imgs } from "@/Imgs/imgs";

const Page = () => {
  const [image, setImage] = useState(false);

  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Fashion",
    author: "Manish Sarhotra",
    author_img: "/prof.png",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  
    const newPost = {
      title: data.title,
      body: data.description,
      category: data.category,
      author: data.author,
      authorImg: data.author_img,
    };
  
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });
  
      if (response.ok) {
        const result = await response.json();
        alert("Post added successfully!");
        console.log(result); 

        const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];
        localStorage.setItem("posts", JSON.stringify([...existingPosts, result]));

        setImage(false);
        setData({
          title: "",
          description: "",
          category: "Fashion",
          author: "Manish Sarhotra",
          author_img: "/prof.png",
        });
      } else {
        throw new Error("Failed to add post");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
      <p className="text-xl">Upload Thumbnail</p>
      <label htmlFor="image">
        <Image
          className="mt-4"
          src={!image ? imgs.upload : URL.createObjectURL(image)}
          width={140}
          height={70}
          alt=""
        />
      </label>
      <input
        onChange={(e) => setImage(e.target.files[0])}
        type="file"
        id="image"
        hidden
        required
      />

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

      <p className="text-xl mt-4">Blog Description</p>
      <textarea
        name="description"
        onChange={onChangeHandler}
        value={data.description}
        className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
        type="text"
        placeholder="Write Content here"
        rows={6}
        required
      />

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
      <br />
      <button type="submit" className="mt-8 w-40 h-12 bg-black text-white">
        ADD
      </button>
    </form>
  );
};

export default Page;
