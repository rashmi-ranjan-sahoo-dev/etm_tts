import React, { useState } from "react";
import { Search, Plus, Pencil, Trash2, BookOpen, User, Clock, DollarSign, Calendar, Activity, X } from "lucide-react";

// TrainingModal Component
const TrainingModal = ({ close, save, editData }) => {
    const [formData, setFormData] = useState(
        editData || {
            trainingType: "",
            trainer: "",
            employee: "", // Keeping the name for data, but display will be image in list
            employeeImage: "", // Added for consistency if needed, though mostly mock
            timeDuration: "",
            cost: "",
            status: "Upcoming",
            trainingDate: "",
            certificationDate: "",
        }
    );

    const handleSubmit = () => {
        const { trainingType, trainer, employee, timeDuration, cost, trainingDate, certificationDate } = formData;

        if (!trainingType.trim()) return alert("Training Type is required");
        if (!trainer.trim()) return alert("Trainer is required");
        // if (!employee.trim()) return alert("Employee is required"); // Relaxed for now or keep text? User said "not name", maybe just visual.
        if (!timeDuration.trim()) return alert("Time Duration is required");
        if (!cost.trim()) return alert("Cost is required");
        if (!trainingDate) return alert("Training Date is required");
        if (!certificationDate) return alert("Certification Date is required");

        // For new entries without an image, assign a random one or placeholder
        const dataToSave = {
            ...formData,
            employeeImage: formData.employeeImage || "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop"
        };

        save(dataToSave);
    };

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-gradient-to-r from-violet-600 to-purple-600 p-6 rounded-t-2xl flex justify-between items-center">
                    <div>
                        <h3 className="text-2xl font-bold text-white">
                            {editData ? "Edit Training" : "New Training"}
                        </h3>
                        <p className="text-violet-100 text-sm mt-1">
                            {editData ? "Update training details" : "Schedule a new training session"}
                        </p>
                    </div>
                    <button onClick={close} className="text-white/80 hover:text-white transition-colors">
                        <X size={24} />
                    </button>
                </div>

                <div className="p-6 space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Training Type</label>
                            <input
                                type="text"
                                value={formData.trainingType}
                                onChange={(e) => setFormData({ ...formData, trainingType: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
                                placeholder="e.g., Technical Workshop"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Trainer</label>
                            <input
                                type="text"
                                value={formData.trainer}
                                onChange={(e) => setFormData({ ...formData, trainer: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
                                placeholder="e.g., Alex Johnson"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Employee Name</label>
                            <input
                                type="text"
                                value={formData.employee}
                                onChange={(e) => setFormData({ ...formData, employee: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
                                placeholder="e.g., Sarah Smith (Internal use)"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Time Duration</label>
                            <input
                                type="text"
                                value={formData.timeDuration}
                                onChange={(e) => setFormData({ ...formData, timeDuration: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
                                placeholder="e.g., 2 Weeks"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Cost</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                                <input
                                    type="text"
                                    value={formData.cost}
                                    onChange={(e) => setFormData({ ...formData, cost: e.target.value })}
                                    className="w-full pl-8 pr-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
                                    placeholder="500"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Status</label>
                            <select
                                value={formData.status}
                                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
                            >
                                <option value="Upcoming">Upcoming</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Training Date</label>
                            <input
                                type="date"
                                value={formData.trainingDate}
                                onChange={(e) => setFormData({ ...formData, trainingDate: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Certification Date</label>
                            <input
                                type="date"
                                value={formData.certificationDate}
                                onChange={(e) => setFormData({ ...formData, certificationDate: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
                            />
                        </div>
                    </div>

                    <div className="flex gap-3 pt-4 border-t border-gray-100">
                        <button
                            onClick={handleSubmit}
                            className="flex-1 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 font-semibold"
                        >
                            {editData ? "Update Training" : "Add Training"}
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

// Main TrainingList Component
const TrainingList = () => {
    // Mock Data
    const [trainings, setTrainings] = useState([
        {
            id: 1,
            trainingType: "Web Development Bootcamp",
            trainer: "Alex Johnson",
            employee: "John Doe",
            employeeImage: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            timeDuration: "3 Months",
            cost: "1200",
            status: "In Progress",
            trainingDate: "2023-10-15",
            certificationDate: "2024-01-15",
        },
        {
            id: 2,
            trainingType: "Advanced Data Analysis",
            trainer: "Maria Garcia",
            employee: "Jane Smith",
            employeeImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            timeDuration: "4 Weeks",
            cost: "800",
            status: "Completed",
            trainingDate: "2023-08-01",
            certificationDate: "2023-09-01",
        },
        {
            id: 3,
            trainingType: "Cybersecurity Basics",
            trainer: "David Kim",
            employee: "Bob Wilson",
            employeeImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            timeDuration: "2 Weeks",
            cost: "500",
            status: "Upcoming",
            trainingDate: "2023-12-01",
            certificationDate: "2023-12-15",
        },
        {
            id: 4,
            trainingType: "Cloud Architecture (AWS)",
            trainer: "Sarah Conner",
            employee: "Alice Brown",
            employeeImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            timeDuration: "6 Weeks",
            cost: "1500",
            status: "In Progress",
            trainingDate: "2023-11-01",
            certificationDate: "2023-12-15",
        },
        {
            id: 5,
            trainingType: "React Native Masterclass",
            trainer: "Michael Chen",
            employee: "Charlie Davis",
            employeeImage: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            timeDuration: "3 Weeks",
            cost: "600",
            status: "Completed",
            trainingDate: "2023-09-10",
            certificationDate: "2023-10-01",
        },
    ]);

    const [search, setSearch] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [editData, setEditData] = useState(null);

    const filteredTrainings = trainings.filter((t) =>
        Object.values(t).join(" ").toLowerCase().includes(search.toLowerCase())
    );

    const getStatusColor = (status) => {
        switch (status) {
            case "Completed": return "bg-green-100 text-green-700";
            case "In Progress": return "bg-blue-100 text-blue-700";
            case "Upcoming": return "bg-orange-100 text-orange-700";
            default: return "bg-gray-100 text-gray-700";
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50 to-purple-50 p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                {/* HEADER */}
                <div className="bg-white rounded-2xl shadow-lg shadow-violet-100/50 p-6 mb-6 border border-violet-100/50">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-violet-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                                <BookOpen className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                                    Training List
                                </h2>
                                <p className="text-sm text-gray-500 mt-1">
                                    {filteredTrainings.length} {filteredTrainings.length === 1 ? "record" : "records"} found
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="relative flex-1 lg:w-80">
                                <Search
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                    size={20}
                                />
                                <input
                                    placeholder="Search trainings..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 bg-white focus:outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 transition-all"
                                />
                            </div>

                            <button
                                onClick={() => {
                                    setEditData(null);
                                    setOpenModal(true);
                                }}
                                className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                            >
                                <Plus size={24} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* DESKTOP TABLE VIEW */}
                <div className="hidden lg:block overflow-hidden bg-white rounded-2xl shadow-lg shadow-violet-100/50 border border-violet-100/50">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-gradient-to-r from-violet-50 to-purple-50 border-b-2 border-violet-100">
                                <tr>
                                    <th className="p-4 font-bold text-gray-700 uppercase tracking-wider">Training Type</th>
                                    <th className="p-4 font-bold text-gray-700 uppercase tracking-wider">Trainer</th>
                                    <th className="p-4 font-bold text-gray-700 uppercase tracking-wider">Employee</th>
                                    <th className="p-4 font-bold text-gray-700 uppercase tracking-wider">Time Duration</th>
                                    <th className="p-4 font-bold text-gray-700 uppercase tracking-wider">Cost</th>
                                    <th className="p-4 font-bold text-gray-700 uppercase tracking-wider">Status</th>
                                    <th className="p-4 font-bold text-gray-700 uppercase tracking-wider">Training Date</th>
                                    <th className="p-4 font-bold text-gray-700 uppercase tracking-wider">Completion</th>
                                    <th className="p-4 font-bold text-gray-700 uppercase tracking-wider text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {filteredTrainings.map((t) => (
                                    <tr
                                        key={t.id}
                                        className="hover:bg-violet-50/50 transition-colors duration-150 cursor-pointer group"
                                    >
                                        <td className="p-4 font-semibold text-gray-900">{t.trainingType}</td>
                                        <td className="p-4 text-gray-700">{t.trainer}</td>
                                        <td className="p-4">
                                            {/* Employee Image Only */}
                                            <div className="w-10 h-10 rounded-full border-2 border-white shadow-sm overflow-hidden bg-gray-100 relative group/avatar">
                                                {t.employeeImage ? (
                                                    <img src={t.employeeImage} alt={t.employee} className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center bg-violet-100 text-violet-600 font-bold">
                                                        {t.employee[0]}
                                                    </div>
                                                )}
                                                {/* Tooltip for name on hover */}
                                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover/avatar:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                                    {t.employee}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4 text-gray-700">{t.timeDuration}</td>
                                        <td className="p-4 text-gray-700 font-medium">${t.cost}</td>
                                        <td className="p-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(t.status)}`}>
                                                {t.status}
                                            </span>
                                        </td>
                                        <td className="p-4 text-gray-700">{t.trainingDate}</td>
                                        <td className="p-4 text-gray-700">{t.certificationDate}</td>
                                        <td className="p-4 text-center">
                                            <div className="flex items-center justify-center gap-2">
                                                <button
                                                    onClick={() => {
                                                        setEditData(t);
                                                        setOpenModal(true);
                                                    }}
                                                    className="p-2 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
                                                >
                                                    <Pencil size={18} />
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        setTrainings(trainings.filter((x) => x.id !== t.id))
                                                    }
                                                    className="p-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
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

                {/* MOBILE CARD VIEW */}
                <div className="block lg:hidden space-y-4">
                    {filteredTrainings.map((t) => (
                        <div
                            key={t.id}
                            className="bg-white rounded-2xl shadow-lg shadow-violet-100/50 p-5 space-y-3 border border-violet-100/50 hover:shadow-xl "
                        >
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <h3 className="font-bold text-lg text-violet-600">{t.trainingType}</h3>
                                    <span className={`inline-block mt-1 px-2 py-0.5 rounded-md text-xs font-semibold ${getStatusColor(t.status)}`}>
                                        {t.status}
                                    </span>
                                </div>
                                <div className="font-bold text-gray-700">${t.cost}</div>
                            </div>

                            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-500 font-medium">Trainer</span>
                                    <span className="text-gray-900">{t.trainer}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-500 font-medium">Employee</span>
                                    <div className="w-8 h-8 rounded-full border border-gray-100 overflow-hidden bg-gray-50">
                                        {t.employeeImage ? (
                                            <img src={t.employeeImage} alt={t.employee} className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-violet-100 text-violet-600 text-xs font-bold">
                                                {t.employee[0]}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500 font-medium">Duration</span>
                                    <span className="text-gray-900">{t.timeDuration}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500 font-medium">Training Date</span>
                                    <span className="text-gray-900">{t.trainingDate}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500 font-medium">Completion</span>
                                    <span className="text-gray-900">{t.certificationDate}</span>
                                </div>
                            </div>

                            <div className="flex gap-3 pt-3 border-t border-gray-100">
                                <button
                                    onClick={() => {
                                        setEditData(t);
                                        setOpenModal(true);
                                    }}
                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-blue-600 bg-blue-50 hover:bg-blue-100 font-semibold text-sm"
                                >
                                    <Pencil size={16} /> Edit
                                </button>
                                <button
                                    onClick={() =>
                                        setTrainings(trainings.filter((x) => x.id !== t.id))
                                    }
                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-red-600 bg-red-50 hover:bg-red-100 font-semibold text-sm"
                                >
                                    <Trash2 size={16} /> Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* MODAL */}
            {openModal && (
                <TrainingModal
                    close={() => setOpenModal(false)}
                    editData={editData}
                    save={(data) => {
                        if (editData) {
                            setTrainings(
                                trainings.map((t) => (t.id === editData.id ? { ...t, ...data } : t))
                            );
                        } else {
                            setTrainings([...trainings, { ...data, id: Date.now() }]);
                        }
                        setOpenModal(false);
                    }}
                />
            )}
        </div>
    );
};

export default TrainingList;