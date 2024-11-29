"use client";
import React, { useState } from "react";
import Image from "next/image";
import { imgs } from "@/Imgs/imgs";
import { toast, ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 

const Page = () => {
  const [image, setImage] = useState(null); 

  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Fashion",
    author: "",
    author_img: "/prof.png",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!image) {
      toast.error("Please upload an image!"); 
      return;
    }

    if (!data.title) {
      toast.error("Please enter the blog title!"); 
      return;
    }

    if (!data.description) {
      toast.error("Please enter the blog description!"); 
      return;
    }

    if (!data.author) {
      toast.error("Please enter the author name!"); 
      return;
    }

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
        toast.success("Post added successfully!"); 

        const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];
        localStorage.setItem("posts", JSON.stringify([...existingPosts, result]));

        setImage(null);
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
      toast.error(`Error: ${error.message}`); 
    }
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
        <p className="text-xl">Upload Thumbnail</p>
        <label htmlFor="image">
          <Image
            className="mt-4"
            src={!image ? imgs.upload : URL.createObjectURL(image)}
            width={140}
            height={70}
            alt="Thumbnail"
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
          placeholder="Write content here"
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
        
        <button type="submit" className="mt-8 w-40 h-12 bg-black text-white">
          ADD
        </button>
      </form>

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
// "use client";
// import React, { useState, useEffect } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Page = () => {
//   const [image, setImage] = useState(null);
//   const [imageUrl, setImageUrl] = useState("");
//   const [data, setData] = useState({
//     title: "",
//     description: "",
//     category: "Fashion",
//     author: "",
//     author_img: "/prof.png",
//   });
//   const [images, setImages] = useState([]);

//   const pixabayApiKey = "47339926-0148b5cdb6f7439ddf2358c35"; // Replace with your Pixabay API Key

//   // Fetch images from Pixabay API
//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const response = await fetch(
//           `https://pixabay.com/api/?key=${pixabayApiKey}&q=flowers&image_type=photo&per_page=10`
//         );
//         const data = await response.json();
//         setImages(data.hits); // Images are returned in 'hits'
//       } catch (error) {
//         toast.error("Error fetching images from Pixabay");
//       }
//     };
//     fetchImages();
//   }, []);

//   const onChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     if (!image) {
//       toast.error("Please select an image!");
//       return;
//     }

//     const newPost = {
//       title: data.title,
//       body: data.description,
//       category: data.category,
//       author: data.author,
//       authorImg: data.author_img,
//     };

//     try {
//       const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newPost),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         toast.success("Post added successfully!");

//         const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];
//         localStorage.setItem("posts", JSON.stringify([...existingPosts, result]));

//         setImage(null);
//         setData({
//           title: "",
//           description: "",
//           category: "Fashion",
//           author: "",
//           author_img: "/prof.png",
//         });
//       } else {
//         throw new Error("Failed to add post");
//       }
//     } catch (error) {
//       toast.error(`Error: ${error.message}`);
//     }
//   };

//   const handleImageSelect = (imgUrl) => {
//     setImageUrl(imgUrl);
//     setImage(imgUrl); // Store the selected image URL
//   };

//   return (
//     <>
//       <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
//         <p className="text-xl">Select a Thumbnail</p>
        
//         {/* Display fetched images from Pixabay */}
//         <div className="flex flex-wrap gap-4 mt-4">
//           {images.map((img) => (
//             <div
//               key={img.id}
//               className="cursor-pointer"
//               onClick={() => handleImageSelect(img.webformatURL)}
//             >
//               <img
//                 src={img.webformatURL}
//                 alt="thumbnail"
//                 width={100}
//                 height={100}
//                 className="border"
//               />
//             </div>
//           ))}
//         </div>

//         {imageUrl && (
//           <div className="mt-4">
//             <p>Selected Image:</p>
//             <img src={imageUrl} alt="Selected" className="w-32 h-32 mt-2 border" />
//           </div>
//         )}

//         <p className="text-xl mt-4">Blog Title</p>
//         <input
//           name="title"
//           onChange={onChangeHandler}
//           value={data.title}
//           className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
//           type="text"
//           placeholder="Type here"
//           required
//         />

//         <p className="text-xl mt-4">Blog Description</p>
//         <textarea
//           name="description"
//           onChange={onChangeHandler}
//           value={data.description}
//           className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
//           placeholder="Write content here"
//           rows={6}
//           required
//         />

//         <p className="text-xl mt-4">Blog Category</p>
//         <select
//           name="category"
//           onChange={onChangeHandler}
//           value={data.category}
//           className="w-40 mt-4 px-4 py-3 border text-gray-500"
//         >
//           <option value="Technology">Technology</option>
//           <option value="Lifestyle">Lifestyle</option>
//           <option value="Fashion">Fashion</option>
//         </select>

//         <p className="text-xl mt-4">Author Name</p>
//         <input
//           name="author"
//           onChange={onChangeHandler}
//           value={data.author}
//           className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
//           type="text"
//           placeholder="Enter author name"
//           required
//         />

//         <button type="submit" className="mt-8 w-40 h-12 bg-black text-white">
//           ADD
//         </button>
//       </form>

//       <ToastContainer 
//         position="top-right" 
//         autoClose={5000} 
//         hideProgressBar={false} 
//         newestOnTop={false} 
//         closeOnClick 
//         rtl={false} 
//         pauseOnFocusLoss 
//         draggable 
//         pauseOnHover 
//       />
//     </>
//   );
// };

// export default Page;
