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
        // Note: In a real app, we would also update the backend/global state here.
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors font-medium"
                    >
                        <ArrowLeft size={20} />
                        Back to Trainees
                    </button>

                    <button
                        onClick={() => setShowEditModal(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg font-medium"
                    >
                        <Pencil size={18} />
                        Edit Profile
                    </button>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {/* Header Banner */}
                    <div className="h-32 bg-blue-600"></div>

                    <div className="px-8 pb-8">
                        <div className="relative flex justify-between items-end -mt-12 mb-6">
                            <div className="flex items-end gap-5">
                                {/* Avatar Card */}
                                <div className="w-28 h-28 bg-white p-1.5 rounded-2xl shadow-lg shrink-0">
                                    <div className="w-full h-full bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold text-4xl">
                                        {trainee.name ? trainee.name.split(" ").map((n) => n[0]).join("") : <User size={40} />}
                                    </div>
                                </div>

                                {/* Name, Role, and Badge */}
                                <div className="mb-1 flex-1 flex justify-between items-end mt-11">
                                    <div>
                                        <h1 className="text-3xl font-extrabold text-gray-900 leading-[0.9] mt-10 tracking-tight">
                                            {trainee.name.split(" ").map((n, i) => (
                                                <div key={i}>{n}</div>
                                            ))}
                                        </h1>
                                        <p className="text-blue-600 font-bold text-lg mt-2">{trainee.role}</p>
                                    </div>

                                    <span className={`px-5 py-2 rounded-full text-sm font-bold mb-1 shadow-sm ${trainee.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                        }`}>
                                        {trainee.status}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                            <div className="space-y-6">
                                <div className="bg-gray-50 rounded-xl p-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <Briefcase className="text-blue-600" size={20} />
                                        Professional Info
                                    </h3>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-sm text-gray-500 mb-1">Trainee ID</p>
                                            <p className="font-medium text-gray-900">{trainee.traineeId}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 mb-1">Training Type</p>
                                            <p className="font-medium text-gray-900">{trainee.trainingType}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 mb-1">Employment Type</p>
                                            <p className="font-medium text-gray-900">{trainee.type || "Full Time"}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-gray-50 rounded-xl p-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <User className="text-blue-600" size={20} />
                                        Personal Info
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <Mail className="text-gray-400" size={18} />
                                            <div>
                                                <p className="text-sm text-gray-500">Email</p>
                                                <p className="font-medium text-gray-900">{trainee.email || `${trainee.name.toLowerCase().replace(/\s/g, '.')}@example.com`}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Phone className="text-gray-400" size={18} />
                                            <div>
                                                <p className="text-sm text-gray-500">Phone</p>
                                                <p className="font-medium text-gray-900">{trainee.phone || "+1 (555) 000-0000"}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <User className="text-gray-400" size={18} />
                                            <div>
                                                <p className="text-sm text-gray-500">Gender</p>
                                                <p className="font-medium text-gray-900">{trainee.gender || "Not Specified"}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-blue-900 mb-2">Training Progress</h3>
                            <p className="text-blue-700 text-sm mb-4">Current progress in {trainee.trainingType} module.</p>
                            <div className="w-full bg-blue-200 rounded-full h-2.5">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                            </div>
                            <div className="flex justify-between text-xs font-semibold text-blue-800 mt-2">
                                <span>Module 1 Completed</span>
                                <span>65%</span>
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