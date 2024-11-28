"use client";
import React from "react";

const BlogTableItem = ({ title, author, date, onDelete }) => {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      
      <td className="hidden md:table-cell px-4 py-2">{author}</td>

      <td className="px-4 py-2 text-gray-900">{title}</td>

      <td className="hidden md:table-cell px-4 py-2">{date || "N/A"}</td>

      <td className="px-4 py-2">
        <button
          onClick={onDelete}
          className="text-red-500 hover:underline"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default BlogTableItem;
