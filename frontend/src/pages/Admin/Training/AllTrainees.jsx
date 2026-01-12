import React, { useState } from "react";
import { Plus, Search, ChevronDown, ChevronUp, Pencil, Trash2, X } from "lucide-react";
import TraineeModal from "./TraineeModal";



// Delete Confirmation Modal
const DeleteConfirmModal = ({ close, confirm, traineeName }) => {
    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Delete Trainee</h3>
                    <p className="text-gray-600 mb-6">
                        Are you sure you want to delete <span className="font-semibold text-gray-900">{traineeName}</span>? This action cannot be undone.
                    </p>
                    <div className="flex gap-3">
                        <button
                            onClick={close}
                            className="flex-1 px-6 py-3 rounded-xl border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all font-semibold"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={confirm}
                            className="flex-1 bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition-all shadow-lg hover:shadow-xl font-semibold"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Mock trainees list
const AVAILABLE_TRAINEES = [
    { id: 1, name: "John Doe", traineeId: "0001", role: "Software Engineer", trainingType: "Web Development", status: "Active", type: "Full Time", gender: "Male" },
    { id: 2, name: "Alice Smith", traineeId: "0002", role: "UI/UX Designer", trainingType: "Design Fundamentals", status: "Active", type: "Full Time", gender: "Female" },
    { id: 3, name: "Bob Brown", traineeId: "0003", role: "Product Manager", trainingType: "Product Management", status: "Inactive", type: "Full Time", gender: "Male" },
    { id: 4, name: "Jane Smith", traineeId: "0004", role: "Data Scientist", trainingType: "Data Analytics", status: "Active", type: "Full Time", gender: "Female" },
    { id: 5, name: "Mike Ross", traineeId: "0005", role: "DevOps Engineer", trainingType: "Cloud Architecture", status: "Active", type: "Full Time", gender: "Male" },
    { id: 6, name: "Sarah Connor", traineeId: "0006", role: "Security Analyst", trainingType: "Cybersecurity", status: "Active", type: "Full Time", gender: "Female" },
    { id: 7, name: "Tom Hardy", traineeId: "0007", role: "Backend Developer", trainingType: "Backend Development", status: "Inactive", type: "Full Time", gender: "Male" },
    { id: 8, name: "Emma Wilson", traineeId: "0008", role: "Product Designer", trainingType: "UX/UI Design", status: "Active", type: "Full Time", gender: "Female" },
    { id: 9, name: "Chris Evans", traineeId: "0009", role: "QA Engineer", trainingType: "Testing & QA", status: "Active", type: "Full Time", gender: "Male" },
    { id: 10, name: "Diana Prince", traineeId: "0010", role: "Project Manager", trainingType: "Agile & Scrum", status: "Active", type: "Full Time", gender: "Female" },
];

import { useLocation, useNavigate } from "react-router-dom";

// ... (existing imports)

const AllTrainees = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [trainees, setTrainees] = useState(AVAILABLE_TRAINEES);
    const [isFilterOpen, setIsFilterOpen] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editData, setEditData] = useState(null);
    const [deleteTrainee, setDeleteTrainee] = useState(null);
    const [filters, setFilters] = useState({
        name: "",
        traineeId: "",
        status: "",
        include: "current",
        role: "",
        trainingType: location.state?.trainingType || ""
    });

    // Filter trainees based on search criteria
    const filteredTrainees = trainees.filter(trainee => {
        const matchesName = !filters.name || trainee.name.toLowerCase().includes(filters.name.toLowerCase());
        const matchesId = !filters.traineeId || trainee.traineeId.includes(filters.traineeId);
        const matchesStatus = !filters.status || trainee.status === filters.status;
        const matchesRole = !filters.role || trainee.role === filters.role;
        const matchesTrainingType = !filters.trainingType || trainee.trainingType === filters.trainingType;

        return matchesName && matchesId && matchesStatus && matchesRole && matchesTrainingType;
    });

    const getTrainingTypeBadgeColor = (type) => {
        const colors = {
            "Web Development": "bg-purple-100 text-purple-700",
            "Design Fundamentals": "bg-pink-100 text-pink-700",
            "Product Management": "bg-blue-100 text-blue-700",
            "Data Analytics": "bg-indigo-100 text-indigo-700",
            "Cloud Architecture": "bg-cyan-100 text-cyan-700",
            "Cybersecurity": "bg-red-100 text-red-700",
            "Backend Development": "bg-green-100 text-green-700",
            "UX/UI Design": "bg-yellow-100 text-yellow-700",
            "Testing & QA": "bg-orange-100 text-orange-700",
            "Agile & Scrum": "bg-teal-100 text-teal-700",
        };
        return colors[type] || "bg-gray-100 text-gray-700";
    };

    const handleReset = () => {
        setFilters({
            name: "",
            traineeId: "",
            status: "",
            include: "current",
            role: "",
            trainingType: ""
        });
    };

    const handleDeleteConfirm = () => {
        if (deleteTrainee) {
            setTrainees(trainees.filter((t) => t.id !== deleteTrainee.id));
            setDeleteTrainee(null);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                {/* HEADER */}
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">Trainees</h1>
                    <button
                        onClick={() => {
                            setEditData(null);
                            setShowModal(true);
                        }}
                        className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-md"
                    >
                        <Plus size={20} />
                        Add Trainee
                    </button>
                </div>

                {/* FILTER SECTION */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
                    <button
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                        className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors"
                    >
                        <h2 className="text-lg font-bold text-gray-900">Trainee Information</h2>
                        {isFilterOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>

                    {isFilterOpen && (
                        <div className="p-5 border-t border-gray-200">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                                {/* Trainee Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Trainee Name</label>
                                    <input
                                        type="text"
                                        placeholder="Type..."
                                        value={filters.name}
                                        onChange={(e) => setFilters({ ...filters, name: e.target.value })}
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>

                                {/* Trainee Id */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Trainee Id</label>
                                    <input
                                        type="text"
                                        placeholder="Type..."
                                        value={filters.traineeId}
                                        onChange={(e) => setFilters({ ...filters, traineeId: e.target.value })}
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>

                                {/* Status */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Training Status</label>
                                    <select
                                        value={filters.status}
                                        onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                                    >
                                        <option value="">-- Select --</option>
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                    </select>
                                </div>

                                {/* Include */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Include</label>
                                    <select
                                        value={filters.include}
                                        onChange={(e) => setFilters({ ...filters, include: e.target.value })}
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                                    >
                                        <option value="current">Current Trainees Only</option>
                                        <option value="all">All Trainees</option>
                                    </select>
                                </div>

                                {/* Role */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                                    <select
                                        value={filters.role}
                                        onChange={(e) => setFilters({ ...filters, role: e.target.value })}
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                                    >
                                        <option value="">-- Select --</option>
                                        <option value="Software Engineer">Software Engineer</option>
                                        <option value="UI/UX Designer">UI/UX Designer</option>
                                        <option value="Product Manager">Product Manager</option>
                                        <option value="Data Scientist">Data Scientist</option>
                                    </select>
                                </div>

                                {/* Training Type */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Training Type</label>
                                    <select
                                        value={filters.trainingType}
                                        onChange={(e) => setFilters({ ...filters, trainingType: e.target.value })}
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                                    >
                                        <option value="">-- Select --</option>
                                        <option value="Web Development">Web Development</option>
                                        <option value="Design Fundamentals">Design Fundamentals</option>
                                        <option value="Product Management">Product Management</option>
                                        <option value="Data Analytics">Data Analytics</option>
                                    </select>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex justify-end gap-3">
                                <button
                                    onClick={handleReset}
                                    className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                                >
                                    Reset
                                </button>
                                <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                                    Search
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* TABLE */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="px-4 py-4 text-left">
                                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                                    </th>
                                    <th className="px-4 py-4 text-left text-sm font-semibold text-gray-900">Trainee Name</th>
                                    <th className="px-4 py-4 text-left text-sm font-semibold text-gray-900">Trainee ID</th>
                                    <th className="px-4 py-4 text-left text-sm font-semibold text-gray-900">Role</th>
                                    <th className="px-4 py-4 text-left text-sm font-semibold text-gray-900">Training Type</th>
                                    <th className="px-4 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                                    <th className="px-4 py-4 text-left text-sm font-semibold text-gray-900">Type</th>
                                    <th className="px-4 py-4 text-left text-sm font-semibold text-gray-900">Gender</th>
                                    <th className="px-4 py-4 text-center text-sm font-semibold text-gray-900">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {filteredTrainees.map((trainee) => (
                                    <tr key={trainee.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-4 py-4">
                                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                                        </td>
                                        <td className="px-4 py-4">
                                            <span
                                                onClick={() => navigate(`/trainee/${trainee.id}`, { state: { trainee } })}
                                                className="text-blue-600 font-medium hover:underline cursor-pointer"
                                            >
                                                {trainee.name}
                                            </span>
                                        </td>
                                        <td className="px-4 py-4 text-gray-700">{trainee.traineeId}</td>
                                        <td className="px-4 py-4 text-gray-700">{trainee.role}</td>
                                        <td className="px-4 py-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTrainingTypeBadgeColor(trainee.trainingType)}`}>
                                                {trainee.trainingType}
                                            </span>
                                        </td>
                                        <td className="px-4 py-4">
                                            <span className={`px-3 py-1 rounded-md text-xs font-semibold ${trainee.status === 'Active'
                                                ? 'bg-green-100 text-green-700'
                                                : 'bg-red-100 text-red-700'
                                                }`}>
                                                {trainee.status}
                                            </span>
                                        </td>
                                        <td className="px-4 py-4">
                                            <span className="text-blue-600 text-sm font-medium">{trainee.type}</span>
                                        </td>
                                        <td className="px-4 py-4 text-gray-700">{trainee.gender}</td>
                                        <td className="px-4 py-4">
                                            <div className="flex items-center justify-center gap-2">
                                                <button
                                                    onClick={() => {
                                                        setEditData(trainee);
                                                        setShowModal(true);
                                                    }}
                                                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                                >
                                                    <Pencil size={18} />
                                                </button>
                                                <button
                                                    onClick={() => setDeleteTrainee(trainee)}
                                                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* ADD/EDIT MODAL */}
                {showModal && (
                    <TraineeModal
                        close={() => {
                            setShowModal(false);
                            setEditData(null);
                        }}
                        editData={editData}
                        save={(data) => {
                            if (editData) {
                                // Update existing trainee
                                setTrainees(trainees.map(t =>
                                    t.id === editData.id ? { ...t, ...data } : t
                                ));
                            } else {
                                // Add new trainee
                                setTrainees([...trainees, { ...data, id: Date.now() }]);
                            }
                            setShowModal(false);
                            setEditData(null);
                        }}
                    />
                )}

                {/* DELETE CONFIRMATION MODAL */}
                {deleteTrainee && (
                    <DeleteConfirmModal
                        close={() => setDeleteTrainee(null)}
                        confirm={handleDeleteConfirm}
                        traineeName={deleteTrainee.name}
                    />
                )}
            </div>
        </div>
    );
};

export default AllTrainees;