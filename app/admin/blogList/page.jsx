"use client";
import React, { useEffect, useState } from "react";
import { blog_data } from "@/Imgs/imgs";
import BlogTableItem from "@/components/AdminComponents/BlogTableItem";

const page = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    const localPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const mergedPosts = [...blog_data, ...localPosts];
    setPosts(mergedPosts);
  };

  const addPost = (newPost) => {
    const localPosts = JSON.parse(localStorage.getItem("posts")) || [];
    localPosts.push(newPost);
    localStorage.setItem("posts", JSON.stringify(localPosts));
    fetchPosts(); 
  };

  const deletePost = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);

    localStorage.setItem("posts", JSON.stringify(updatedPosts));

    alert("Post deleted successfully!");
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
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1>All Blogs</h1>
      <div className="relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-sm text-gray-700 text-left uppercase bg-gray-50">
            <tr>
              <th scope="col" className="hidden sm:block px-6 py-3">
                Author name
              </th>
              <th scope="col" className="px-6 py-3">
                Blog Title
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
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
    </div>
  );
};

export default page;
