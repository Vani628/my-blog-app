"use client";
import React from "react";

const BlogTableItem = ({ title, author, date, onDelete, onEdit }) => {
  // Null checks for props
  const safeTitle = title || "Untitled";
  const safeAuthor = author || "Unknown";
  const safeDate = date || "N/A";

  const handleEdit = onEdit ?? (() => console.warn("Edit function not provided"));
  const handleDelete = onDelete ?? (() => console.warn("Delete function not provided"));

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="hidden md:table-cell px-4 py-2">{safeAuthor}</td>
      <td className="px-4 py-2 text-gray-900">{safeTitle}</td>
      <td className="hidden md:table-cell px-4 py-2">{safeDate}</td>
      <td className="px-4 py-2">
        <button
          onClick={handleEdit}
          className="text-blue-500 hover:underline mr-2"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="text-red-500 hover:underline"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default BlogTableItem;
