import { imgs, blog_data } from "@/Imgs/imgs";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Blog_item = ({ title, description, category, image, id }) => {
  return (
    <div className=" text-center max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]">
      <Link href={`/blogs/${id}`}>
        <Image
          src={image}
          alt=""
          width={400}
          height={400}
          className="border border-black"
        ></Image>

        <p className=" mt-5 px-1 inline-block bg-black text-white text-l">
          {category}
        </p>
        <div className="p-5">
          <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
            {title}
          </h5>
          <p className="mb-3 text-sm tracking-tight text-gray-700">
            {description}
          </p>
          <div className="inline-flex items-center py-2 font-semibold text-center">
            Read more{" "}
            <Image src={imgs.arrow} className="ml-2" width={20} alt="" />
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Blog_item;
