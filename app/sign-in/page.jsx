"use client";
import React, { useState } from "react";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = ({ onSignup, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulating login success
    console.log("Login data:", { email, password });
    toast.success("Login successful!"); // Display success toast

    // Clear input fields
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white p-6 shadow-md rounded-md">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 border rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            disabled={!email || !password} // Disable if fields are empty
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          Do not have an account?{" "}
          <button className="text-blue-500 underline" onClick={onSignup}>
            <Link href="/sign-up">Sign up</Link>
          </button>
        </p>
        <button
          onClick={onClose}
          className="mt-4 w-full text-center bg-gray-300 text-black py-2 rounded-md hover:bg-gray-400"
        >
          <Link href="/">Back to Home</Link>
        </button>

        <Link href="/admin">
          <button className="mt-4 w-full text-center bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
            Go to Admin Panel
          </button>
        </Link>
      </div>

      {/* ToastContainer to display notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Page;
