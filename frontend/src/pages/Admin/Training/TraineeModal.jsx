import React, { useState, useEffect } from "react";
import { X, User, Mail, Phone, Briefcase, Award, MapPin } from "lucide-react";

const TraineeModal = ({ close, save, editData }) => {
    const [formData, setFormData] = useState({
        name: "",
        traineeId: "",
        role: "",
        trainingType: "",
        status: "Active",
        type: "Full Time",
        gender: "",
        email: "",
        phone: ""
    });

    useEffect(() => {
        if (editData) {
            setFormData(editData);
        }
    }, [editData]);

    const handleSubmit = () => {
        const { name, traineeId, role, trainingType, email } = formData;

        if (!name.trim()) return alert("Name is required");
        if (!traineeId.trim()) return alert("Trainee ID is required");
        if (!role.trim()) return alert("Role is required");
        if (!trainingType.trim()) return alert("Training Type is required");

        save(formData);
    };

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-t-2xl flex justify-between items-center z-10">
                    <div>
                        <h3 className="text-2xl font-bold text-white">
                            {editData ? "Edit Trainee" : "Add New Trainee"}
                        </h3>
                        <p className="text-blue-100 text-sm mt-1">
                            {editData ? "Update trainee information" : "Register a new trainee"}
                        </p>
                    </div>
                    <button onClick={close} className="text-white/80 hover:text-white transition-colors">
                        <X size={24} />
                    </button>
                </div>

                <div className="p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
                                    placeholder="e.g., John Doe"
                                />
                            </div>
                        </div>

                        {/* Trainee ID */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Trainee ID</label>
                            <input
                                type="text"
                                value={formData.traineeId}
                                onChange={(e) => setFormData({ ...formData, traineeId: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
                                placeholder="e.g., TR-2024-001"
                            />
                        </div>

                        {/* Status */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Status</label>
                            <select
                                value={formData.status}
                                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
                            >
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                        </div>

                        {/* Role */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Role</label>
                            <div className="relative">
                                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="text"
                                    value={formData.role}
                                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
                                    placeholder="e.g., Software Engineer"
                                />
                            </div>
                        </div>

                        {/* Training Type */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Training Type</label>
                            <div className="relative">
                                <Award className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <select
                                    value={formData.trainingType}
                                    onChange={(e) => setFormData({ ...formData, trainingType: e.target.value })}
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
                                >
                                    <option value="">Select Training Type</option>
                                    <option value="Web Development">Web Development</option>
                                    <option value="Design Fundamentals">Design Fundamentals</option>
                                    <option value="Product Management">Product Management</option>
                                    <option value="Data Analytics">Data Analytics</option>
                                    <option value="Cloud Architecture">Cloud Architecture</option>
                                    <option value="Cybersecurity">Cybersecurity</option>
                                    <option value="Backend Development">Backend Development</option>
                                    <option value="UX/UI Design">UX/UI Design</option>
                                    <option value="Testing & QA">Testing & QA</option>
                                    <option value="Agile & Scrum">Agile & Scrum</option>
                                </select>
                            </div>
                        </div>

                        {/* Employment Type */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Employment Type</label>
                            <select
                                value={formData.type}
                                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
                            >
                                <option value="Full Time">Full Time</option>
                                <option value="Part Time">Part Time</option>
                                <option value="Internship">Internship</option>
                                <option value="Contract">Contract</option>
                            </select>
                        </div>

                        {/* Gender */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Gender</label>
                            <select
                                value={formData.gender}
                                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
                                    placeholder="e.g., john@example.com"
                                />
                            </div>
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                            <div className="relative">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
                                    placeholder="e.g., +1 (555) 000-0000"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-3 pt-4 border-t border-gray-100">
                        <button
                            onClick={handleSubmit}
                            className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 font-semibold"
                        >
                            {editData ? "Update Trainee" : "Add Trainee"}
                        </button>
                        <button
                            onClick={close}
                            className="px-6 py-3 rounded-xl border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all font-semibold"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TraineeModal;
