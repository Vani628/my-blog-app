'use client';

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

const Page = () => {
  
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // React Hook Form setup
  const {
    register, // Used to register input fields for validation
    handleSubmit, // Used to handle form submission
    formState: { errors }, // Captures validation errors for each field
    reset, // Resets the form fields after successful submission
  } = useForm();

  // Function to handle form submission
  const onSubmit = async (data) => {
    setLoading(true); 
    setErrorMessage(""); 
    setSuccessMessage(""); 
    try {
      console.log("Form Data:", data); // Simulate API call by logging data to console
      setSuccessMessage("Your message has been successfully sent!"); // Display success message
      reset(); // Reset form fields
    } catch (error) {
      setErrorMessage("There was an error submitting your form. Please try again."); // Display error message
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 p-6">
      <div className="w-full max-w-md bg-white p-8 shadow-md rounded-md">
        {/* Page Title */}
        <h1 className="text-2xl font-semibold mb-6 text-center">Contact Us</h1>
        
        {/* Display Success or Error Messages */}
        {successMessage && (
          <div className="mb-4 text-green-500 text-sm text-center">{successMessage}</div>
        )}
        {errorMessage && (
          <div className="mb-4 text-red-500 text-sm text-center">{errorMessage}</div>
        )}

        {/* Contact Form */}
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Name</label>
            <input
              id="name"
              type="text"
              className={`w-full px-4 py-2 border rounded-md ${errors.name ? "border-red-500" : "border-gray-300"}`}
              {...register("name", {
                required: "Name is required", // Validation rule: required
                minLength: { value: 3, message: "Name must be at least 3 characters" }, // Validation rule: min length
              })}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>} {/* Error message */}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              id="email"
              type="email"
              className={`w-full px-4 py-2 border rounded-md ${errors.email ? "border-red-500" : "border-gray-300"}`}
              {...register("email", {
                required: "Email is required", // Validation rule: required
                pattern: { value: /^[^@]+@[^@]+\.[^@]+$/, message: "Invalid email address" }, // Validation rule: pattern
              })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>} {/* Error message */}
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea
              id="message"
              className={`w-full px-4 py-2 border rounded-md ${errors.message ? "border-red-500" : "border-gray-300"}`}
              rows="4"
              {...register("message", {
                required: "Message is required", // Validation rule: required
                minLength: { value: 10, message: "Message must be at least 10 characters" }, // Validation rule: min length
              })}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>} {/* Error message */}
          </div>

          {/* Phone Field */}
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2">Phone</label>
            <input
              id="phone"
              type="tel"
              className={`w-full px-4 py-2 border rounded-md ${errors.phone ? "border-red-500" : "border-gray-300"}`}
              {...register("phone", {
                required: "Phone number is required", // Validation rule: required
                pattern: { value: /^\d{10}$/, message: "Phone number must be 10 digits" }, // Validation rule: pattern
              })}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>} {/* Error message */}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            disabled={loading} // Disable button during loading
          >
            {loading ? "Submitting..." : "Submit"} {/* Show "Submitting..." if loading */}
          </button>

          {/* Back to Home Button */}
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
