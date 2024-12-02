"use client"; 

import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 
import { blog_data } from "@/Imgs/imgs"; 
import BlogTableItem from "@/components/AdminComponents/BlogTableItem"; 

const Page = () => {
  // State for storing all blog posts
  const [posts, setPosts] = useState([]);

  // State for managing the currently edited post
  const [editingPost, setEditingPost] = useState(null);

  // State for the updated post's title and author during editing
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedAuthor, setUpdatedAuthor] = useState("");

  // Fetches posts from localStorage and merges with predefined blog data
  const fetchPosts = () => {
    const localPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const mergedPosts = [...blog_data, ...localPosts];

    // Ensures unique posts based on ID
    const uniquePosts = mergedPosts.filter(
      (value, index, self) =>
        index === self.findIndex((t) => t.id === value.id)
    );

    setPosts(uniquePosts); // Update state with fetched posts
  };

  // Deletes a post by its ID
  const deletePost = (postId) => {
    // Remove the post from the current state
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));

    // Update localStorage to persist the deletion
    setTimeout(() => {
      const localPosts = JSON.parse(localStorage.getItem("posts")) || [];
      const updatedLocalPosts = localPosts.filter((post) => post.id !== postId);
      localStorage.setItem("posts", JSON.stringify(updatedLocalPosts));
    }, 0);

    toast.success("Post deleted successfully!"); // Notify the user
  };

  // Initiates editing for a specific post
  const handleEditPost = (post) => {
    setEditingPost(post); 
    setUpdatedTitle(post.title); 
    setUpdatedAuthor(post.author || `User ${post.userId}`); 
  };

  // Saves updates to the edited post
  const saveUpdatedPost = () => {
    // Update the post in the state
    const updatedPosts = posts.map((post) =>
      post.id === editingPost.id
        ? { ...post, title: updatedTitle, author: updatedAuthor }
        : post
    );

    setPosts(updatedPosts); // Update the state

    // Update localStorage with the changes
    const localPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const updatedLocalPosts = localPosts.map((post) =>
      post.id === editingPost.id
        ? { ...post, title: updatedTitle, author: updatedAuthor }
        : post
    );
    localStorage.setItem("posts", JSON.stringify(updatedLocalPosts));

    setEditingPost(null); // Reset the editing state
    toast.success("Post updated successfully!"); // Notify the user
  };

  // Cancels editing a post
  const cancelEdit = () => {
    setEditingPost(null); 
  };

  // Runs on component mount and listens for localStorage changes
  useEffect(() => {
    fetchPosts(); 

    // Listener for localStorage changes (if multiple tabs are used)
    const storageChangeListener = () => {
      fetchPosts();
    };
    window.addEventListener("storage", storageChangeListener);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("storage", storageChangeListener);
    };
  }, []);

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:px-16">
      <h1 className="text-lg sm:text-2xl font-bold">All Blogs</h1>
      
      {/* Table displaying all blog posts */}
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
            {/* If no posts are available */}
            {posts.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No blog posts available.
                </td>
              </tr>
            ) : (
              /* Render each post using BlogTableItem component */
              posts.map((post) => (
                <BlogTableItem
                  key={post.id}
                  title={post.title}
                  author={post.author || `User ${post.userId}`}
                  onDelete={() => deletePost(post.id)} // Pass delete handler
                  onEdit={() => handleEditPost(post)} // Pass edit handler
                />
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Form for editing posts */}
      {editingPost && (
        <div className="mt-8">
          <h2 className="text-xl font-bold">Edit Post</h2>
          <form>
            <label className="block text-lg">Title</label>
            <input
              type="text"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
              className="w-full mt-2 px-4 py-2 border"
            />
            <label className="block text-lg mt-4">Author Name</label>
            <input
              type="text"
              value={updatedAuthor}
              onChange={(e) => setUpdatedAuthor(e.target.value)}
              className="w-full mt-2 px-4 py-2 border"
            />
            <div className="mt-4 flex space-x-2">
              <button
                type="button"
                onClick={saveUpdatedPost}
                className="px-4 py-2 bg-blue-500 text-white"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={cancelEdit}
                className="px-4 py-2 bg-gray-500 text-white"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Page;
