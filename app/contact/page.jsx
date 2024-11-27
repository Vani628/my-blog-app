'use client';

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");
    try {
      console.log("Form Data:", data);
      setSuccessMessage("Your message has been successfully sent!");
      reset();
    } catch (error) {
      setErrorMessage("There was an error submitting your form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 p-6">
      <div className="w-full max-w-md bg-white p-8 shadow-md rounded-md">
        <h1 className="text-2xl font-semibold mb-6 text-center">Contact Us</h1>
        {successMessage && (
          <div className="mb-4 text-green-500 text-sm text-center">{successMessage}</div>
        )}
        {errorMessage && (
          <div className="mb-4 text-red-500 text-sm text-center">{errorMessage}</div>
        )}
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              className={`w-full px-4 py-2 border rounded-md ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              className={`w-full px-4 py-2 border rounded-md ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@]+@[^@]+\.[^@]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">
              Message
            </label>
            <textarea
              id="message"
              className={`w-full px-4 py-2 border rounded-md ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
              rows="4"
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters",
                },
              })}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              className={`w-full px-4 py-2 border rounded-md ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^\d{10}$/,
                  message: "Phone number must be 10 digits",
                },
              })}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

          <Link href="/">
            <button
              className="mt-4 w-full text-center bg-gray-300 text-black py-2 rounded-md hover:bg-gray-400"
            >
              Back to Home
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Page;
