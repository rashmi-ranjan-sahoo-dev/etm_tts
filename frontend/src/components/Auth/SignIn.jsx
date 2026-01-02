
import flower from "../../assets/AuthImage/bg-01.png";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-blue-100 to-cyan-100 px-4 sm:px-6 md:px-10 lg:px-20 py-6">
      
      {/* Card */}
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl flex overflow-hidden flex-col md:flex-row">
        
        {/* Left Form Section */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10">
          <h2 className="text-xl sm:text-2xl font-bold mb-1">
            Sign in
          </h2>
          <p className="text-gray-500 mb-6 text-sm sm:text-base">
            Enter your credentials to log in
          </p>

          {/* Role Buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-6">
            <Link
              to='/admin'
              className="px-5 py-2 rounded-full bg-green-700 text-white text-sm"
            >
              Admin
            </Link>
            <Link
              to="/employee"
              className="px-5 py-2 rounded-full bg-orange-400 text-white text-sm"
            >
              Employee
            </Link>
            <Link
              to="/client"
              className="px-5 py-2 rounded-full bg-blue-600 text-white text-sm"
            >
              Client
            </Link>
          </div>

          {/* Inputs */}
          <div className="space-y-5 sm:space-y-6">
            <input
              type="text"
              placeholder="Username"
              className="w-full border rounded-lg px-4 sm:px-5 py-3 sm:py-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-lg px-4 sm:px-5 py-3 sm:py-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Remember / Forgot */}
          <div className="flex flex-wrap justify-between items-center mt-4 text-sm py-4 gap-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#" className="text-gray-700 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button className="w-full mt-4 sm:mt-6 py-3 rounded-lg bg-linear-to-r from-yellow-700 to-purple-800 text-white font-semibold">
            Login
          </button>

          {/* Signup */}
          <p className="text-center text-sm mt-4">
            Don’t have an account?
            <Link to="/signup" className="text-purple-600 ml-1 hover:underline">
              Sign up
            </Link>
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mt-6">
            <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border rounded-full cursor-pointer">
              G
            </div>
            <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border rounded-full cursor-pointer">
              f
            </div>
            <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border rounded-full cursor-pointer">
              
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center p-6">
          <img
            src={flower}
            alt="Flower picture"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
