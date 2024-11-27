import { imgs } from "@/Imgs/imgs";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);

    console.log("Form Submitted with Email:", email);
    setEmail("");
  };

  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
  <div className="flex justify-between items-center w-full">
    <Image
      src={imgs.logo}
      width={180}
      alt="Logo"
      className="w-[130px] sm:w-auto"
    />
    <div className="flex gap-3">
      <Link
        href="/sign-in"
        className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 md:px-8 lg:px-10 border border-solid border-black shadow-[-7px_7px_0px_#000000] text-sm sm:text-base md:text-lg"
      >
        Get Started
      </Link>
      <Link
        href="/contact"
        className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 md:px-8 lg:px-10 border border-solid border-black shadow-[-7px_7px_0px_#000000] text-sm sm:text-base md:text-lg"
      >
        Contact Us
      </Link>
    </div>
  </div>

      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs</h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
          Welcome to our Blog App! Here, you can explore a variety of insightful
          articles, stay updated with the latest trends, and share your thoughts
          with the community. Whether you're here to read, write, or interact,
          we aim to create an engaging space where ideas come to life. Enjoy
          your journey through our collection of blogs!
        </p>
        <form
          onSubmit={onSubmitHandler}
          className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]"
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter your email"
            className="pl-4 outline-none"
          />
          <button
            type="submit"
            className="border-l border-black py-4  sm:px-8 active:bg-gray-600 active:text-white"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
