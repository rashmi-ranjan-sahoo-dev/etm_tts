import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { ArrowLeft, Mail, Phone, Calendar, Briefcase, User, MapPin, Pencil } from "lucide-react";
import TraineeModal from "./TraineeModal";

const TraineeDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [trainee, setTrainee] = useState(location.state?.trainee);
    const [showEditModal, setShowEditModal] = useState(false);

    useEffect(() => {
        if (location.state?.trainee) {
            setTrainee(location.state.trainee);
        }
    }, [location.state]);

    if (!trainee) {
        return <Navigate to="/admin/all-trainees" replace />;
    }

    const handleUpdateTrainee = (updatedData) => {
        setTrainee({ ...trainee, ...updatedData });
        setShowEditModal(false);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6 font-sans">
            {/* Minimal Header */}
            <div className="max-w-4xl mx-auto mb-6 flex justify-between items-center">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors font-medium"
                >
                    <ArrowLeft size={20} />
                    Back to Employees
                </button>
                <button
                    onClick={() => setShowEditModal(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors text-sm font-medium shadow-sm"
                >
                    <Pencil size={16} />
                    Edit
                </button>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">

                {/* Personal Info Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-50 bg-gray-50/30 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 font-bold overflow-hidden">
                                {trainee.image ? (
                                    <img src={trainee.image} alt={trainee.name} className="w-full h-full object-cover" />
                                ) : (
                                    <span>{trainee.name ? trainee.name.charAt(0) : "T"}</span>
                                )}
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-gray-900">Personal Information</h2>
                                <p className="text-sm text-gray-500">{trainee.name}</p>
                            </div>
                        </div>
                        <User className="text-gray-300" size={24} />
                    </div>

                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                        <div className="group">
                            <p className="text-xs font-medium text-gray-400 mb-1.5">Email Address</p>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-violet-50 rounded-lg text-violet-600">
                                    <Mail size={18} />
                                </div>
                                <span className="text-gray-900 font-medium">{trainee.email || "N/A"}</span>
                            </div>
                        </div>
                        <div className="group">
                            <p className="text-xs font-medium text-gray-400 mb-1.5">Phone Number</p>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-violet-50 rounded-lg text-violet-600">
                                    <Phone size={18} />
                                </div>
                                <span className="text-gray-900 font-medium">{trainee.phone || "N/A"}</span>
                            </div>
                        </div>
                        <div className="group">
                            <p className="text-xs font-medium text-gray-400 mb-1.5">Date of Birth</p>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-violet-50 rounded-lg text-violet-600">
                                    <Calendar size={18} />
                                </div>
                                <span className="text-gray-900 font-medium">{trainee.dob || "1990-01-01"}</span>
                            </div>
                        </div>
                        <div className="group">
                            <p className="text-xs font-medium text-gray-400 mb-1.5">Gender</p>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-violet-50 rounded-lg text-violet-600">
                                    <User size={18} />
                                </div>
                                <span className="text-gray-900 font-medium">{trainee.gender || "Not Specified"}</span>
                            </div>
                        </div>
                        <div className="group md:col-span-2">
                            <p className="text-xs font-medium text-gray-400 mb-1.5">Address</p>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-violet-50 rounded-lg text-violet-600">
                                    <MapPin size={18} />
                                </div>
                                <span className="text-gray-900 font-medium">New York, NY 10001, USA</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Professional Info Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-50 bg-gray-50/30 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                                <Briefcase size={20} />
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-gray-900">Professional Information</h2>
                            </div>
                        </div>
                        <Briefcase className="text-gray-300" size={24} />
                    </div>

                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                        <div className="group">
                            <p className="text-xs font-medium text-gray-400 mb-1.5">Trainee ID</p>
                            <div className="flex items-center gap-3">
                                <span className="text-gray-900 font-mono font-medium">{trainee.traineeId}</span>
                            </div>
                        </div>
                        <div className="group">
                            <p className="text-xs font-medium text-gray-400 mb-1.5">Role / Designation</p>
                            <div className="flex items-center gap-3">
                                <span className="text-gray-900 font-medium">{trainee.role}</span>
                            </div>
                        </div>
                        <div className="group">
                            <p className="text-xs font-medium text-gray-400 mb-1.5">Joining Date</p>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-violet-50 rounded-lg text-violet-600">
                                    <Calendar size={18} />
                                </div>
                                <span className="text-gray-900 font-medium">{trainee.joiningDate || "Not Specified"}</span>
                            </div>
                        </div>
                        <div className="group">
                            <p className="text-xs font-medium text-gray-400 mb-1.5">Employment Type</p>
                            <div className="flex items-center gap-3">
                                <span className="text-gray-900 font-medium">{trainee.type || "Full Time"}</span>
                            </div>
                        </div>
                        <div className="group md:col-span-2">
                            <p className="text-xs font-medium text-gray-400 mb-1.5">Current Program</p>
                            <div className="flex items-center gap-2">
                                <span className="px-3 py-1 bg-violet-50 text-violet-700 rounded-md font-medium text-sm border border-violet-100">
                                    {trainee.trainingType}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Edit Modal */}
            {showEditModal && (
                <TraineeModal
                    close={() => setShowEditModal(false)}
                    save={handleUpdateTrainee}
                    editData={trainee}
                />
            )}
        </div>
    );
};

export default TraineeDetails;