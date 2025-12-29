


import React from "react";
import { Lock, User, MapPin, Save, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* PAGE HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Settings
            </h1>
            <p className="text-sm text-gray-500 mt-1">Manage your account preferences and security</p>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500 bg-white px-4 py-2 rounded-full shadow-sm border border-purple-100/50">
            <span className="text-gray-700 font-medium"><Link to="/employee/dashboard">Home</Link></span>
            <span className="text-gray-300">›</span>
            <span className="text-purple-600 font-medium">Settings</span>
          </div>
        </div>

        {/* SECURITY SETTINGS */}
        <div className="bg-white rounded-2xl shadow-lg shadow-purple-100/50 p-6 sm:p-8 border border-purple-100/50 hover:shadow-xl hover:shadow-purple-200/50 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Security Settings
              </h2>
              <p className="text-sm text-gray-500">Update your password and security credentials</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5">
            <div className="relative group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-600 transition-colors" />
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50
                    focus:outline-none focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-500/10 transition-all"
                />
              </div>
            </div>

            <div className="relative group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Current Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-600 transition-colors" />
                <input
                  type="password"
                  placeholder="Enter current password"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50
                    focus:outline-none focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-500/10 transition-all"
                />
              </div>
            </div>

            <div className="relative group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                New Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-600 transition-colors" />
                <input
                  type="password"
                  placeholder="Enter new password"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50
                    focus:outline-none focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-500/10 transition-all"
                />
              </div>
            </div>

            <button
              className="w-fit bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl
                hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl 
                hover:scale-105 active:scale-95 font-semibold flex items-center gap-2"
            >
              <Save className="w-5 h-5" />
              Save
            </button>
          </div>
        </div>

        {/* ACCOUNT SETTINGS */}
        <div className="bg-white rounded-2xl shadow-lg shadow-purple-100/50 p-6 sm:p-8 border border-purple-100/50 hover:shadow-xl hover:shadow-purple-200/50 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Account Settings
              </h2>
              <p className="text-sm text-gray-500">Manage your personal information and details</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter first name"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50
                  focus:outline-none focus:border-pink-500 focus:bg-white focus:ring-4 focus:ring-pink-500/10 transition-all"
              />
            </div>

            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter last name"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50
                  focus:outline-none focus:border-pink-500 focus:bg-white focus:ring-4 focus:ring-pink-500/10 transition-all"
              />
            </div>

            <div className="relative group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                City
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-pink-600 transition-colors" />
                <input
                  type="text"
                  placeholder="Enter your city"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50
                    focus:outline-none focus:border-pink-500 focus:bg-white focus:ring-4 focus:ring-pink-500/10 transition-all"
                />
              </div>
            </div>

            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Country
              </label>
              <input
                type="text"
                placeholder="Enter your country"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50
                  focus:outline-none focus:border-pink-500 focus:bg-white focus:ring-4 focus:ring-pink-500/10 transition-all"
              />
            </div>

            <div className="md:col-span-2 group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Address
              </label>
              <textarea
                rows="4"
                placeholder="Enter your full address"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50
                  resize-none focus:outline-none focus:border-pink-500 focus:bg-white 
                  focus:ring-4 focus:ring-pink-500/10 transition-all"
              />
            </div>
          </div>

          <button
            className="mt-6 bg-gradient-to-r from-pink-600 to-orange-600 text-white px-8 py-3 rounded-xl
              hover:from-pink-700 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl 
              hover:scale-105 active:scale-95 font-semibold flex items-center gap-2"
          >
            <Save className="w-5 h-5" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;