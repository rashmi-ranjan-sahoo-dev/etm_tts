import React, { useState, useRef } from 'react';
import { X, Camera, Save, User, Mail, Phone, MapPin } from 'lucide-react';

const AdminProfileModal = ({ isOpen, onClose }) => {
    const [isEditing, setIsEditing] = useState(false);
    const fileInputRef = useRef(null);

    const [profile, setProfile] = useState({
        firstName: 'Sarah',
        lastName: 'Smith',
        email: 'sarah.smith@admin.com',
        phone: '+1 234-567-8900',
        role: 'HR Admin',
        location: 'New York, USA',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80'
    });
    const [tempProfile, setTempProfile] = useState(profile);

    if (!isOpen) return null;

    const handleChange = (e) => {
        setTempProfile({ ...tempProfile, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setTempProfile({ ...tempProfile, image: imageUrl });
        }
    };

    const handleEditClick = () => {
        setTempProfile(profile);
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setTempProfile(profile);
    };

    const handleSave = () => {
        setProfile(tempProfile);
        setIsEditing(false);
        // Logic to save to backend would go here
    };

    return (
        <div className="fixed inset-0 bg-black/50 z-[1000] flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">

                {/* Header */}
                <div className="relative h-32 bg-gradient-to-r from-purple-600 to-pink-600">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-all"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Profile Content */}
                <div className="px-8 pb-8">
                    <div className="relative -mt-16 mb-6 flex flex-col items-center">
                        <div className="relative group">
                            <img
                                src={isEditing ? tempProfile.image : profile.image}
                                alt="Profile"
                                className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover bg-white"
                            />
                            <button
                                onClick={() => fileInputRef.current?.click()}
                                className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-md text-gray-600 hover:text-purple-600 border border-gray-100 transition-all group-hover:scale-110"
                            >
                                <Camera size={18} />
                            </button>
                            <input
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                        </div>

                        <div className="text-center mt-3">
                            <h2 className="text-2xl font-bold text-gray-800">{profile.firstName} {profile.lastName}</h2>
                            <p className="text-purple-600 font-medium">{profile.role}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="group">
                                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-1.5">
                                    <User size={16} className="text-purple-500" /> First Name
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={isEditing ? tempProfile.firstName : profile.firstName}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className={`w-full px-4 py-2.5 rounded-xl border ${isEditing ? 'border-purple-200 bg-white focus:ring-2 focus:ring-purple-100' : 'border-transparent bg-gray-50'} transition-all outline-none`}
                                />
                            </div>

                            <div className="group">
                                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-1.5">
                                    <User size={16} className="text-purple-500" /> Last Name
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={isEditing ? tempProfile.lastName : profile.lastName}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className={`w-full px-4 py-2.5 rounded-xl border ${isEditing ? 'border-purple-200 bg-white focus:ring-2 focus:ring-purple-100' : 'border-transparent bg-gray-50'} transition-all outline-none`}
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="group">
                                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-1.5">
                                    <Mail size={16} className="text-purple-500" /> Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={isEditing ? tempProfile.email : profile.email}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className={`w-full px-4 py-2.5 rounded-xl border ${isEditing ? 'border-purple-200 bg-white focus:ring-2 focus:ring-purple-100' : 'border-transparent bg-gray-50'} transition-all outline-none`}
                                />
                            </div>

                            <div className="group">
                                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-1.5">
                                    <Phone size={16} className="text-purple-500" /> Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={isEditing ? tempProfile.phone : profile.phone}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className={`w-full px-4 py-2.5 rounded-xl border ${isEditing ? 'border-purple-200 bg-white focus:ring-2 focus:ring-purple-100' : 'border-transparent bg-gray-50'} transition-all outline-none`}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-end gap-3 pt-6 border-t border-gray-100">
                        {isEditing ? (
                            <>
                                <button
                                    onClick={handleCancel}
                                    className="px-6 py-2.5 rounded-xl font-medium text-gray-600 hover:bg-gray-100 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleSave}
                                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-xl font-medium hover:shadow-lg hover:shadow-purple-200 transition-all flex items-center gap-2"
                                >
                                    <Save size={18} /> Save Changes
                                </button>
                            </>
                        ) : (
                            <button
                                onClick={handleEditClick}
                                className="bg-gray-900 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-gray-800 transition-all shadow-lg shadow-gray-200"
                            >
                                Edit Profile
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminProfileModal;