"use client";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { blog_data } from "@/Imgs/imgs";
import BlogTableItem from "@/components/AdminComponents/BlogTableItem";

const Page = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    const localPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const mergedPosts = [...blog_data, ...localPosts];
    const uniquePosts = mergedPosts.filter(
      (value, index, self) =>
        index === self.findIndex((t) => t.id === value.id)
    );
    setPosts(uniquePosts);
  };

  const deletePost = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));

    setTimeout(() => {
      const localPosts = JSON.parse(localStorage.getItem("posts")) || [];
      const updatedLocalPosts = localPosts.filter((post) => post.id !== postId);
      localStorage.setItem("posts", JSON.stringify(updatedLocalPosts));
    }, 0);

    toast.success("Post deleted successfully!");
  };

  useEffect(() => {
    fetchPosts();

    const storageChangeListener = () => {
      fetchPosts();
    };
    window.addEventListener("storage", storageChangeListener);

    return () => {
      window.removeEventListener("storage", storageChangeListener);
    };
  }, []);

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:px-16">
      <h1 className="text-lg sm:text-2xl font-bold">All Blogs</h1>
      <div className="relative h-[80vh] max-w-full overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-xs text-gray-700 text-left uppercase bg-gray-50">
            <tr>
              <th scope="col" className="hidden md:table-cell px-4 py-2">
                Author Name
              </th>
              <th scope="col" className="px-4 py-2">Blog Title</th>
              <th scope="col" className="hidden md:table-cell px-4 py-2">
                Date
              </th>
              <th scope="col" className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {posts.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No blog posts available.
                </td>
              </tr>
            ) : (
              posts.map((post) => (
                <BlogTableItem
                  key={post.id}
                  title={post.title}
                  author={post.author || `User ${post.userId}`}
                  onDelete={() => deletePost(post.id)}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Page;
