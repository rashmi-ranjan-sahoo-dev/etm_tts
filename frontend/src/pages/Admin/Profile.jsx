import React, { useState } from 'react';

const Profile = () => {
    const [user, setUser] = useState({
        firstName: "Sarah",
        lastName: "Smith",
        email: "sarah.smith@admin.com",
        phone: "+1 234-567-8900",
        currentAddress: "123 Main St, New York, NY 10001",
        permanentAddress: "456 Oak Ave, Los Angeles, CA 90001"
    });

    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="p-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Profile Information</h2>

                <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                        SS
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-800 text-lg">Sarah Smith</h3>
                        <button className="text-teal-600 text-sm hover:underline font-medium">Change photo</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={user.firstName}
                            onChange={handleChange}
                            disabled={!isEditing}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-teal-500 focus:outline-none transition-all text-gray-700"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={user.lastName}
                            onChange={handleChange}
                            disabled={!isEditing}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-teal-500 focus:outline-none transition-all text-gray-700"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            disabled={!isEditing}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-teal-500 focus:outline-none transition-all text-gray-700"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={user.phone}
                            onChange={handleChange}
                            disabled={!isEditing}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-teal-500 focus:outline-none transition-all text-gray-700"
                        />
                    </div>
                </div>

                <div className="space-y-2 mb-6">
                    <label className="text-sm font-bold text-gray-700">Current Address</label>
                    <input
                        type="text"
                        name="currentAddress"
                        value={user.currentAddress}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-teal-500 focus:outline-none transition-all text-gray-700"
                    />
                </div>

                <div className="space-y-2 mb-8">
                    <label className="text-sm font-bold text-gray-700">Permanent Address</label>
                    <input
                        type="text"
                        name="permanentAddress"
                        value={user.permanentAddress}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-teal-500 focus:outline-none transition-all text-gray-700"
                    />
                </div>

                <div className="flex justify-end">
                    <button
                        onClick={() => setIsEditing(!isEditing)}
                        className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors shadow-lg"
                    >
                        {isEditing ? "Save Profile" : "Edit Profile"}
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Profile;
