import React from "react"
import flower from "../../assets/AuthImage/bg-01.png";

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-blue-100 to-cyan-100 px-28 py-5">
      
      {/* Card */}
      <div className="max-w-4xl  bg-white rounded-3xl shadow-xl flex overflow-hidden flex-col md:flex-row ">
        
        {/* Left Form Section */}
        <div className=" w-full md:w-1/2 p-10 px-15">
          <h2 className="text-2xl font-bold mb-1">Sign in</h2>
          <p className="text-gray-500 mb-6">
            Enter your credentials to log in
          </p>

          {/* Role Buttons */}
          <div className="flex  gap-4 mb-6 ">
            <button className="px-6 py-2 rounded-full bg-green-700 text-white text-sm cursor-pointer">
              Admin
            </button>
            <button className="px-6 py-2 rounded-full bg-orange-400 text-white text-sm cursor-pointer">
              Employee
            </button>
            <button className="px-6 py-2 rounded-full bg-blue-600 text-white text-sm cursor-pointer">
              Client
            </button>
          </div>

          {/* Inputs */}
          <div className="space-y-8">
            <input
              type="text"
              placeholder="Username"
              className="w-full border rounded-lg px-5 py-5 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-lg px-5 py-5 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Remember / Forgot */}
          <div className="flex justify-between items-center mt-4 text-sm py-6">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#" className="text-gray-700 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button className="w-full mt-6 py-3 rounded-lg bg-linear-to-r from-yellow-700 to-purple-800 text-white font-semibold">
            Login
          </button>

          {/* Signup */}
          <p className="text-center text-sm mt-4">
            Don’t have an account?
            <a href="#" className="text-purple-600 ml-1 hover:underline">
              Sign up
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mt-6">
            <div className="w-10 h-10 flex items-center justify-center border rounded-full cursor-pointer">
              G
            </div>
            <div className="w-10 h-10 flex items-center justify-center border rounded-full cursor-pointer">
              f
            </div>
            <div className="w-10 h-10 flex items-center justify-center border rounded-full cursor-pointer">
              
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center">
          
          <div className="text-gray-400 text-center">
            <img src={flower} alt="Flower picture" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn



