

import React from "react";
import cat from "../../assets/AuthImage/bg-02.png";
import { Link } from "react-router-dom";
Link

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-blue-100 to-cyan-100 px-4 sm:px-6 md:px-10 lg:px-20 py-6">
      
      {/* Card */}
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl flex flex-col md:flex-row overflow-hidden">
        
        {/* Left Form Section */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10">
          <h2 className="text-xl sm:text-2xl font-bold mb-1">
            Create account
          </h2>
          <p className="text-gray-500 mb-6 text-sm sm:text-base">
            Enter details to create your account
          </p>

          {/* Inputs */}
          <div className="space-y-5 sm:space-y-6">
            <input
              type="text"
              placeholder="Name*"
              className="w-full border rounded-lg px-4 sm:px-5 py-3 sm:py-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />

            <input
              type="email"
              placeholder="Email*"
              className="w-full border rounded-lg px-4 sm:px-5 py-3 sm:py-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />

            <input
              type="password"
              placeholder="Password*"
              className="w-full border rounded-lg px-4 sm:px-5 py-3 sm:py-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Create Account Button */}
          <button className="w-full mt-6 py-3 rounded-lg bg-linear-to-r from-stone-500 to-purple-400 text-white font-semibold hover:opacity-90 active:scale-95 transition">
            Create account
          </button>

          {/* Login Link */}
          <p className="text-center text-sm mt-4">
            Already have an account?
            <Link to="/signin" className="text-purple-600 ml-1 hover:underline">
              Login
            </Link>
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mt-6">
            <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border rounded-full cursor-pointer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
                alt=""
                className="w-5 h-5"
              />
            </div>
            <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border rounded-full cursor-pointer">
              <img src="" alt="" />
            </div>
            <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border rounded-full cursor-pointer">
              f
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 bg-[#f6ede4] flex items-center justify-center p-6">
          <img
            src={cat}
            alt="cat illustration"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md object-contain"
          />
        </div>

      </div>
    </div>
  );
};

export default SignUp;

