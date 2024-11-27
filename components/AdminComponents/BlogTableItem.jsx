import React from "react";
import { imgs } from "@/Imgs/imgs";
import Image from "next/image";

const BlogTableItem = ({ title, author, date, onDelete }) => {
  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        <Image src={imgs.profile} alt="Author" width={40} height={40} />
        <p>{author ? author : "No author"}</p>
      </th>
      <td className="px-6 py-4">{title ? title : "No Title"}</td>
      <td className="px-6 py-4">{date ? date : "No Date"}</td>
      <td className="px-6 py-4 cursor-pointer text-red-500 hover:underline">
        <span onClick={onDelete}>Delete</span>
      </td>
    </tr>
  );
};

export default BlogTableItem;
