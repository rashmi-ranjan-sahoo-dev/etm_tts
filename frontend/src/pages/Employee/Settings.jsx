import React from "react";

const Settings = () => {
  return (
    <div className="space-y-6">
      {/* PAGE HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h1 className="text-2xl font-semibold text-gray-800">
          Settings
        </h1>

        <div className="text-sm text-gray-500">
          Home <span className="mx-1">›</span> Settings
        </div>
      </div>

      {/* SECURITY SETTINGS */}
      <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Security Settings
        </h2>

        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full rounded-lg border border-gray-300 px-4 py-2
              focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <input
            type="password"
            placeholder="Current Password"
            className="w-full rounded-lg border border-gray-300 px-4 py-2
              focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <input
            type="password"
            placeholder="New Password"
            className="w-full rounded-lg border border-gray-300 px-4 py-2
              focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <button
            className="w-fit bg-blue-600 text-white px-6 py-2 rounded-lg
              hover:bg-blue-700 transition shadow-sm"
          >
            Save
          </button>
        </div>
      </div>

      {/* ACCOUNT SETTINGS */}
      <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Account Settings
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full rounded-lg border border-gray-300 px-4 py-2
              focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <input
            type="text"
            placeholder="Last Name"
            className="w-full rounded-lg border border-gray-300 px-4 py-2
              focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <input
            type="text"
            placeholder="City"
            className="w-full rounded-lg border border-gray-300 px-4 py-2
              focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          {/* <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border border-gray-300 px-4 py-2
              focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          /> */}

          <input
            type="text"
            placeholder="Country"
            className="w-full rounded-lg border border-gray-300 px-4 py-2
              focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <textarea
            rows="3"
            placeholder="Address"
            className="w-full md:col-span-2 rounded-lg border border-gray-300
              px-4 py-2 resize-none focus:outline-none
              focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <button
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg
            hover:bg-blue-700 transition shadow-sm"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;
