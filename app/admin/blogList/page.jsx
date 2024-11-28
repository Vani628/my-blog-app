// "use client";
// import React, { useEffect, useState } from "react";
// import { blog_data } from "@/Imgs/imgs";
// import BlogTableItem from "@/components/AdminComponents/BlogTableItem";

// const Page = () => {
//   const [posts, setPosts] = useState([]);

//   const fetchPosts = () => {
//     const localPosts = JSON.parse(localStorage.getItem("posts")) || [];
//     const mergedPosts = [...blog_data, ...localPosts];
//     setPosts(mergedPosts);
//   };

//   const addPost = (newPost) => {
//     const localPosts = JSON.parse(localStorage.getItem("posts")) || [];
//     localPosts.push(newPost);
//     localStorage.setItem("posts", JSON.stringify(localPosts));
//     fetchPosts(); 
//   };

//   const deletePost = (postId) => {
//     const updatedPosts = posts.filter((post) => post.id !== postId);
//     setPosts(updatedPosts);

//     localStorage.setItem("posts", JSON.stringify(updatedPosts));

//     alert("Post deleted successfully!");
//   };

//   useEffect(() => {
//     fetchPosts();

//     const storageChangeListener = () => {
//       fetchPosts();
//     };
//     window.addEventListener("storage", storageChangeListener);

//     return () => {
//       window.removeEventListener("storage", storageChangeListener);
//     };
//   }, []); 

//   return (
//     <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
//       <h1>All Blogs</h1>
//       <div className="relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
//         <table className="w-full text-sm text-gray-500">
//           <thead className="text-sm text-gray-700 text-left uppercase bg-gray-50">
//             <tr>
//               <th scope="col" className="hidden sm:block px-6 py-3">
//                 Author name
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Blog Title
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Date
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Action
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {posts.length === 0 ? (
//               <tr>
//                 <td colSpan="4" className="text-center py-4">
//                   No blog posts available.
//                 </td>
//               </tr>
//             ) : (
//               posts.map((post) => (
//                 <BlogTableItem
//                   key={post.id}
//                   title={post.title}
//                   author={post.author || `User ${post.userId}`} 
//                   onDelete={() => deletePost(post.id)}
//                 />
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Page;
// "use client";
// import React, { useEffect, useState } from "react";
// import { blog_data } from "@/Imgs/imgs"; // Static blog data
// import BlogTableItem from "@/components/AdminComponents/BlogTableItem";

// const Page = () => {
//   const [posts, setPosts] = useState([]);
  
//   // Fetch posts and merge blog_data with localStorage posts
//   const fetchPosts = () => {
//     const localPosts = JSON.parse(localStorage.getItem("posts")) || [];
//     const mergedPosts = [...blog_data, ...localPosts];

//     // Remove duplicates by filtering out posts with the same ID
//     const uniquePosts = mergedPosts.filter(
//       (value, index, self) =>
//         index === self.findIndex((t) => t.id === value.id)
//     );

//     setPosts(uniquePosts);
//   };

//   // Add multiple posts to localStorage and fetch the updated list
//   const addMultiplePosts = (newPosts) => {
//     const localPosts = JSON.parse(localStorage.getItem("posts")) || [];
    
//     // Combine the current local posts with the new posts
//     const updatedPosts = [...localPosts, ...newPosts];

//     // Remove duplicates based on post.id
//     const uniquePosts = updatedPosts.filter(
//       (value, index, self) => index === self.findIndex((t) => t.id === value.id)
//     );

//     localStorage.setItem("posts", JSON.stringify(uniquePosts)); // Save to localStorage
//     fetchPosts(); // Fetch updated list
//   };

//   // Delete a post by ID and update localStorage and the state
//   const deletePost = (postId) => {
//     const updatedPosts = posts.filter((post) => post.id !== postId);
//     setPosts(updatedPosts);

//     const localPosts = JSON.parse(localStorage.getItem("posts")) || [];
//     const updatedLocalPosts = localPosts.filter((post) => post.id !== postId); // Remove from localStorage
//     localStorage.setItem("posts", JSON.stringify(updatedLocalPosts)); // Update localStorage

//     alert("Post deleted successfully!");
//   };

//   // Fetch posts when component mounts
//   useEffect(() => {
//     fetchPosts(); // Fetch posts initially, merging blog_data and localStorage posts

//     const storageChangeListener = () => {
//       fetchPosts(); // Re-fetch merged posts on storage change
//     };
//     window.addEventListener("storage", storageChangeListener);

//     return () => {
//       window.removeEventListener("storage", storageChangeListener);
//     };
//   }, []); // Empty dependency array ensures this only runs on mount

//   return (
//     <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
//       <h1>All Blogs</h1>
//       <div className="relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
//         <table className="w-full text-sm text-gray-500">
//           <thead className="text-sm text-gray-700 text-left uppercase bg-gray-50">
//             <tr>
//               <th scope="col" className="hidden sm:block px-6 py-3">
//                 Author name
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Blog Title
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Date
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Action
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {posts.length === 0 ? (
//               <tr>
//                 <td colSpan="4" className="text-center py-4">
//                   No blog posts available.
//                 </td>
//               </tr>
//             ) : (
//               posts.map((post) => (
//                 <BlogTableItem
//                   key={post.id}
//                   title={post.title}
//                   author={post.author || `User ${post.userId}`}
//                   onDelete={() => deletePost(post.id)}
//                 />
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Page;
"use client";
import React, { useEffect, useState } from "react";
import { blog_data } from "@/Imgs/imgs"; // Static blog data
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
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);

    const localPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const updatedLocalPosts = localPosts.filter((post) => post.id !== postId);
    localStorage.setItem("posts", JSON.stringify(updatedLocalPosts));

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
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:px-16">
      <h1 className="text-lg sm:text-2xl font-bold">All Blogs</h1>
      <div className="relative h-[80vh] max-w-full overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-xs text-gray-700 text-left uppercase bg-gray-50">
            <tr>
              {/* Hide Author and Date columns on screens smaller than 768px */}
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
    </div>
  );
};

export default Page;
