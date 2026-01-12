


// import React from "react";
// import { Lock, User, MapPin, Save, Shield } from "lucide-react";
// import { Link } from "react-router-dom";

// const Settings = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 p-4 md:p-8">
//       <div className="max-w-5xl mx-auto space-y-6">
//         {/* PAGE HEADER */}
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
//           <div>
//             <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//               Settings
//             </h1>
//             <p className="text-sm text-gray-500 mt-1">Manage your account preferences and security</p>
//           </div>

//           {/* <div className="flex items-center gap-2 text-sm text-gray-500 bg-white px-4 py-2 rounded-full shadow-sm border border-purple-100/50">
//             <span className="text-gray-700 font-medium"><Link to="/employee/dashboard">Home</Link></span>
//             <span className="text-gray-300">›</span>
//             <span className="text-purple-600 font-medium">Settings</span>
//           </div> */}
          
//         </div>

//         {/* SECURITY SETTINGS */}
//         <div className="bg-white rounded-2xl shadow-lg shadow-purple-100/50 p-6 sm:p-8 border border-purple-100/50 hover:shadow-xl hover:shadow-purple-200/50 transition-all duration-300">
//           <div className="flex items-center gap-3 mb-6">
//             <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
//               <Shield className="w-6 h-6 text-white" />
//             </div>
//             <div>
//               <h2 className="text-xl font-bold text-gray-800">
//                 Security Settings
//               </h2>
//               <p className="text-sm text-gray-500">Update your password and security credentials</p>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 gap-5">
//             <div className="relative group">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                User ID
//               </label>
//               <div className="relative">
//                 <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-600 transition-colors" />
//                 <input
//                   type="text"
//                   placeholder="Enter your id"
//                   className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50
//                     focus:outline-none focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-500/10 transition-all"
//                 />
//               </div>
//             </div>

//             <div className="relative group">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Current Password
//               </label>
//               <div className="relative">
//                 <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-600 transition-colors" />
//                 <input
//                   type="password"
//                   placeholder="Enter current password"
//                   className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50
//                     focus:outline-none focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-500/10 transition-all"
//                 />
//               </div>
//             </div>

//             <div className="relative group">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 New Password
//               </label>
//               <div className="relative">
//                 <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-600 transition-colors" />
//                 <input
//                   type="password"
//                   placeholder="Enter new password"
//                   className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50
//                     focus:outline-none focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-500/10 transition-all"
//                 />
//               </div>
//             </div>

//             <button
//               className="w-fit bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl
//                 hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl 
//                 hover:scale-105 active:scale-95 font-semibold flex items-center gap-2"
//             >
//               <Save className="w-5 h-5" />
//               Save
//             </button>
//           </div>
//         </div>

//         {/* ACCOUNT SETTINGS */}
//         <div className="bg-white rounded-2xl shadow-lg shadow-purple-100/50 p-6 sm:p-8 border border-purple-100/50 hover:shadow-xl hover:shadow-purple-200/50 transition-all duration-300">
//           <div className="flex items-center gap-3 mb-6">
//             <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
//               <User className="w-6 h-6 text-white" />
//             </div>
//             <div>
//               <h2 className="text-xl font-bold text-gray-800">
//                 Account Settings
//               </h2>
//               <p className="text-sm text-gray-500">Manage your personal information and details</p>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//             <div className="group">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 First Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter first name"
//                 className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50
//                   focus:outline-none focus:border-pink-500 focus:bg-white focus:ring-4 focus:ring-pink-500/10 transition-all"
//               />
//             </div>

//             <div className="group">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter last name"
//                 className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50
//                   focus:outline-none focus:border-pink-500 focus:bg-white focus:ring-4 focus:ring-pink-500/10 transition-all"
//               />
//             </div>

//             <div className="relative group">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 City
//               </label>
//               <div className="relative">
//                 <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-pink-600 transition-colors" />
//                 <input
//                   type="text"
//                   placeholder="Enter your city"
//                   className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50
//                     focus:outline-none focus:border-pink-500 focus:bg-white focus:ring-4 focus:ring-pink-500/10 transition-all"
//                 />
//               </div>
//             </div>

//             <div className="group">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Country
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your country"
//                 className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50
//                   focus:outline-none focus:border-pink-500 focus:bg-white focus:ring-4 focus:ring-pink-500/10 transition-all"
//               />
//             </div>

//             <div className="md:col-span-2 group">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Address
//               </label>
//               <textarea
//                 rows="4"
//                 placeholder="Enter your full address"
//                 className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50
//                   resize-none focus:outline-none focus:border-pink-500 focus:bg-white 
//                   focus:ring-4 focus:ring-pink-500/10 transition-all"
//               />
//             </div>
//           </div>

//           <button
//             className="mt-6 bg-gradient-to-r from-pink-600 to-orange-600 text-white px-8 py-3 rounded-xl
//               hover:from-pink-700 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl 
//               hover:scale-105 active:scale-95 font-semibold flex items-center gap-2"
//           >
//             <Save className="w-5 h-5" />
//             Save Changes
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Settings;
//.......................................................................

import React, { useState, useRef } from "react";
import { Lock, User, MapPin, Save, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Settings = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: 'Sarah',
    lastName: 'Smith',
    email: 'sarah.smith@admin.com',
    phone: '+1 234-567-8900',
    // role: 'HR Admin',
    image: null,
    currentAddress: '123 Main St, New York, NY 10001',
    permanentAddress: '456 Oak Ave, Los Angeles, CA 90001'
  });
  const [tempProfile, setTempProfile] = useState(profile);

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      // If editing, update temp, else update profile directly (or maybe restart edit mode?)
      // Actually, image upload is outside the "Edit" flow in the UI (it has its own button).
      // Let's assume image update is immediate for now, or bind it to tempProfile if in edit mode.
      if (isEditing) {
        setTempProfile({ ...tempProfile, image: imageUrl });
      } else {
        setProfile({ ...profile, image: imageUrl });
      }
    }
  };

  const handleChange = (e) => {
    setTempProfile({
      ...tempProfile,
      [e.target.name]: e.target.value
    });
  };

  const handleEditToggle = () => {
    if (!isEditing) {
      setTempProfile(profile); // Initialize temp with current profile when starting edit
    }
    setIsEditing(!isEditing);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setTempProfile(profile); // Reset temp to profile
  }

  const handleSave = () => {
    setProfile(tempProfile);
    setIsEditing(false);
    // Here you would typically send data to backend
    alert("Profile updated successfully!");
  };

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

          {/* <div className="flex items-center gap-2 text-sm text-gray-500 bg-white px-4 py-2 rounded-full shadow-sm border border-purple-100/50">
            <span className="text-gray-700 font-medium"><Link to="/employee/dashboard">Home</Link></span>
            <span className="text-gray-300">›</span>
            <span className="text-purple-600 font-medium">Settings</span>
          </div> */}

        </div>

        {/* PROFILE INFORMATION */}
        <div className="bg-white rounded-2xl shadow-lg shadow-purple-100/50 p-6 sm:p-8 border border-purple-100/50 hover:shadow-xl hover:shadow-purple-200/50 transition-all duration-300">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Profile</h2>

          <div className="flex items-center gap-4 mb-8">
            <div className="relative">
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
              />
              {(isEditing ? tempProfile.image : profile.image) ? (
                <img
                  src={isEditing ? tempProfile.image : profile.image}
                  alt="Profile"
                  className="w-16 h-16 rounded-full object-cover border-2 border-teal-100"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-teal-600 flex items-center justify-center text-white text-xl font-bold">
                  {profile.firstName[0]}{profile.lastName[0]}
                </div>
              )}
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">{profile.firstName} {profile.lastName}</h3>
              <p className="text-gray-500 text-sm">{profile.role}</p>
              <button
                onClick={() => fileInputRef.current.click()}
                className="text-teal-600 text-sm font-medium hover:text-teal-700 mt-1"
              >
                Change photo
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={isEditing ? tempProfile.firstName : profile.firstName}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all ${isEditing ? 'bg-white border-teal-200' : ''}`}
              />
            </div>

            <div className="group">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={isEditing ? tempProfile.lastName : profile.lastName}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all ${isEditing ? 'bg-white border-teal-200' : ''}`}
              />
            </div>

            <div className="group">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="text"
                name="email"
                value={isEditing ? tempProfile.email : profile.email}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all ${isEditing ? 'bg-white border-teal-200' : ''}`}
              />
            </div>

            <div className="group">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                value={isEditing ? tempProfile.phone : profile.phone}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all ${isEditing ? 'bg-white border-teal-200' : ''}`}
              />
            </div>
            <div className="group md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Current Address
              </label>
              <input
                type="text"
                name="currentAddress"
                value={isEditing ? tempProfile.currentAddress : profile.currentAddress}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all ${isEditing ? 'bg-white border-teal-200' : ''}`}
              />
            </div>

            <div className="group md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Permanent Address
              </label>
              <input
                type="text"
                name="permanentAddress"
                value={isEditing ? tempProfile.permanentAddress : profile.permanentAddress}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all ${isEditing ? 'bg-white border-teal-200' : ''}`}
              />
            </div>
          </div>

          <div className="flex justify-end mt-8 gap-3">
            {isEditing ? (
              <>
                <button
                  onClick={handleCancel}
                  className="px-6 py-2.5 rounded-lg font-medium text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="bg-teal-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-teal-700 transition-colors"
                >
                  Save Changes
                </button>
              </>
            ) : (
              <button
                onClick={handleEditToggle}
                className="bg-teal-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-teal-700 transition-colors"
              >
                Edit Profile
              </button>
            )}
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
                User ID
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-600 transition-colors" />
                <input
                  type="text"
                  placeholder="Enter your id"
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

            <div className="relative group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-600 transition-colors" />
                <input
                  type="password"
                  placeholder="Confirm new password"
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

      </div>
    </div>
  );
};

export default Settings;
