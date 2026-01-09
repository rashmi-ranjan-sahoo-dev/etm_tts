// import React, { useState } from "react";
// import { Search, Plus, Pencil, Trash2, BookOpen, Clock, DollarSign, Award, Users, Monitor, CheckCircle2, X } from "lucide-react";

// // TrainingTypeModal Component
// const TrainingTypeModal = ({ close, save, editData }) => {
//     const [formData, setFormData] = useState(
//         editData || {
//             trainingType: "",
//             category: "",
//             duration: "",
//             deliveryMethod: "Online",
//             targetAudience: "",
//             status: "Active",
//             isMandatory: false,
//             cost: "",
//             certification: "Yes",
//         }
//     );

//     const handleSubmit = () => {
//         const { trainingType, category, duration, targetAudience, cost } = formData;

//         if (!trainingType.trim()) return alert("Training Type is required");
//         if (!category.trim()) return alert("Category is required");
//         if (!duration.trim()) return alert("Duration is required");
//         if (!targetAudience.trim()) return alert("Target Audience is required");
//         if (!cost.trim()) return alert("Cost is required");

//         save(formData);
//     };

//     return (
//         <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//             <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//                 <div className="sticky top-0 bg-gradient-to-r from-violet-600 to-purple-600 p-6 rounded-t-2xl flex justify-between items-center">
//                     <div>
//                         <h3 className="text-2xl font-bold text-white">
//                             {editData ? "Edit Training Type" : "New Training Type"}
//                         </h3>
//                         <p className="text-violet-100 text-sm mt-1">
//                             {editData ? "Update training type details" : "Define a new type of training"}
//                         </p>
//                     </div>
//                     <button onClick={close} className="text-white/80 hover:text-white transition-colors">
//                         <X size={24} />
//                     </button>
//                 </div>

//                 <div className="p-6 space-y-5">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

//                         {/* Training Type */}
//                         <div className="md:col-span-2">
//                             <label className="block text-sm font-semibold text-gray-700 mb-2">Training Type Name</label>
//                             <input
//                                 type="text"
//                                 value={formData.trainingType}
//                                 onChange={(e) => setFormData({ ...formData, trainingType: e.target.value })}
//                                 className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
//                                 placeholder="e.g., Leadership Development 101"
//                             />
//                         </div>

//                         {/* Category */}
//                         <div>
//                             <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
//                             <select
//                                 value={formData.category}
//                                 onChange={(e) => setFormData({ ...formData, category: e.target.value })}
//                                 className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
//                             >
//                                 <option value="">Select Category</option>
//                                 <option value="Technical">Technical</option>
//                                 <option value="Soft Skills">Soft Skills</option>
//                                 <option value="Compliance">Compliance</option>
//                                 <option value="Management">Management</option>
//                                 <option value="Onboarding">Onboarding</option>
//                             </select>
//                         </div>

//                         {/* Duration */}
//                         <div>
//                             <label className="block text-sm font-semibold text-gray-700 mb-2">Duration</label>
//                             <input
//                                 type="text"
//                                 value={formData.duration}
//                                 onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
//                                 className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
//                                 placeholder="e.g., 4 Hours"
//                             />
//                         </div>

//                         {/* Delivery Method */}
//                         <div>
//                             <label className="block text-sm font-semibold text-gray-700 mb-2">Delivery Method</label>
//                             <select
//                                 value={formData.deliveryMethod}
//                                 onChange={(e) => setFormData({ ...formData, deliveryMethod: e.target.value })}
//                                 className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
//                             >
//                                 <option value="Online">Online</option>
//                                 <option value="In-Person">In-Person</option>
//                                 <option value="Hybrid">Hybrid</option>
//                             </select>
//                         </div>

//                         {/* Target Audience */}
//                         <div>
//                             <label className="block text-sm font-semibold text-gray-700 mb-2">Target Audience</label>
//                             <input
//                                 type="text"
//                                 value={formData.targetAudience}
//                                 onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
//                                 className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
//                                 placeholder="e.g., Junior Developers"
//                             />
//                         </div>

//                         {/* Cost */}
//                         <div>
//                             <label className="block text-sm font-semibold text-gray-700 mb-2">Cost</label>
//                             <div className="relative">
//                                 <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
//                                 <input
//                                     type="text"
//                                     value={formData.cost}
//                                     onChange={(e) => setFormData({ ...formData, cost: e.target.value })}
//                                     className="w-full pl-8 pr-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
//                                     placeholder="0"
//                                 />
//                             </div>
//                         </div>

//                         {/* Status */}
//                         <div>
//                             <label className="block text-sm font-semibold text-gray-700 mb-2">Status</label>
//                             <select
//                                 value={formData.status}
//                                 onChange={(e) => setFormData({ ...formData, status: e.target.value })}
//                                 className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
//                             >
//                                 <option value="Active">Active</option>
//                                 <option value="Inactive">Inactive</option>
//                                 <option value="Draft">Draft</option>
//                             </select>
//                         </div>

//                         {/* Certification */}
//                         <div>
//                             <label className="block text-sm font-semibold text-gray-700 mb-2">Certification</label>
//                             <select
//                                 value={formData.certification}
//                                 onChange={(e) => setFormData({ ...formData, certification: e.target.value })}
//                                 className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
//                             >
//                                 <option value="Yes">Yes</option>
//                                 <option value="No">No</option>
//                             </select>
//                         </div>

//                         {/* Is Mandatory Checkbox */}
//                         <div className="flex items-center gap-3 pt-4 md:col-span-2">
//                             <input
//                                 type="checkbox"
//                                 id="isMandatory"
//                                 checked={formData.isMandatory}
//                                 onChange={(e) => setFormData({ ...formData, isMandatory: e.target.checked })}
//                                 className="w-5 h-5 text-violet-600 rounded border-gray-300 focus:ring-violet-500"
//                             />
//                             <label htmlFor="isMandatory" className="text-sm font-semibold text-gray-700 select-none cursor-pointer">
//                                 This training is Mandatory for all employees
//                             </label>
//                         </div>

//                     </div>

//                     <div className="flex gap-3 pt-4 border-t border-gray-100">
//                         <button
//                             onClick={handleSubmit}
//                             className="flex-1 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 font-semibold"
//                         >
//                             {editData ? "Update Type" : "Add Type"}
//                         </button>
//                         <button
//                             onClick={close}
//                             className="px-6 py-3 rounded-xl border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all font-semibold"
//                         >
//                             Cancel
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// // Main TrainingType Component
// const TrainingType = () => {
//     // Mock Data
//     const [trainingTypes, setTrainingTypes] = useState([
//         {
//             id: 1,
//             trainingType: "Advanced React Patterns",
//             category: "Technical",
//             duration: "10 Hours",
//             deliveryMethod: "Online",
//             targetAudience: "Senior Developers",
//             status: "Active",
//             isMandatory: false,
//             cost: "200",
//             certification: "Yes",
//         },
//         {
//             id: 2,
//             trainingType: "Workplace Safety 2024",
//             category: "Compliance",
//             duration: "2 Hours",
//             deliveryMethod: "Online",
//             targetAudience: "All Employees",
//             status: "Active",
//             isMandatory: true,
//             cost: "0",
//             certification: "Yes",
//         },
//         {
//             id: 3,
//             trainingType: "Effective Communication",
//             category: "Soft Skills",
//             duration: "1 Day",
//             deliveryMethod: "In-Person",
//             targetAudience: "Managers",
//             status: "Inactive",
//             isMandatory: false,
//             cost: "500",
//             certification: "No",
//         },
//         {
//             id: 4,
//             trainingType: "Cyber Security Fundamentals",
//             category: "Technical",
//             duration: "5 Hours",
//             deliveryMethod: "Hybrid",
//             targetAudience: "IT Staff",
//             status: "Active",
//             isMandatory: true,
//             cost: "150",
//             certification: "Yes",
//         },
//     ]);

//     const [search, setSearch] = useState("");
//     const [openModal, setOpenModal] = useState(false);
//     const [editData, setEditData] = useState(null);

//     const filteredTrainingTypes = trainingTypes.filter((t) =>
//         Object.values(t).join(" ").toLowerCase().includes(search.toLowerCase())
//     );

//     const getStatusColor = (status) => {
//         switch (status) {
//             case "Active": return "bg-green-100 text-green-700";
//             case "Inactive": return "bg-gray-100 text-gray-600";
//             case "Draft": return "bg-orange-100 text-orange-700";
//             default: return "bg-gray-100 text-gray-700";
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50 to-purple-50 p-4 md:p-8">
//             <div className="max-w-7xl mx-auto">
//                 {/* HEADER */}
//                 <div className="bg-white rounded-2xl shadow-lg shadow-violet-100/50 p-6 mb-6 border border-violet-100/50">
//                     <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
//                         <div className="flex items-center gap-4">
//                             <div className="w-14 h-14 bg-gradient-to-br from-violet-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
//                                 <BookOpen className="w-7 h-7 text-white" />
//                             </div>
//                             <div>
//                                 <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
//                                     Training Types
//                                 </h2>
//                                 <p className="text-sm text-gray-500 mt-1">
//                                     {filteredTrainingTypes.length} {filteredTrainingTypes.length === 1 ? "type" : "types"} found
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="flex items-center gap-3">
//                             <div className="relative flex-1 lg:w-80">
//                                 <Search
//                                     className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
//                                     size={20}
//                                 />
//                                 <input
//                                     placeholder="Search training types..."
//                                     value={search}
//                                     onChange={(e) => setSearch(e.target.value)}
//                                     className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 bg-white focus:outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 transition-all"
//                                 />
//                             </div>

//                             <button
//                                 onClick={() => {
//                                     setEditData(null);
//                                     setOpenModal(true);
//                                 }}
//                                 className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
//                             >
//                                 <Plus size={24} />
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* DESKTOP TABLE VIEW */}
//                 <div className="hidden lg:block overflow-hidden bg-white rounded-2xl shadow-lg shadow-violet-100/50 border border-violet-100/50">
//                     <div className="overflow-x-auto">
//                         <table className="w-full text-sm text-left">
//                             <thead className="bg-gradient-to-r from-violet-50 to-purple-50 border-b-2 border-violet-100">
//                                 <tr>
//                                     <th className="p-4 font-bold text-gray-700 uppercase tracking-wider">Training Type</th>
//                                     <th className="p-4 font-bold text-gray-700 uppercase tracking-wider">Category</th>
//                                     <th className="p-4 font-bold text-gray-700 uppercase tracking-wider">Duration</th>
//                                     <th className="p-4 font-bold text-gray-700 uppercase tracking-wider">Delivery</th>
//                                     <th className="p-4 font-bold text-gray-700 uppercase tracking-wider">Audience</th>
//                                     <th className="p-4 font-bold text-gray-700 uppercase tracking-wider">Status</th>
//                                     <th className="p-4 font-bold text-gray-700 uppercase tracking-wider text-center">Mandatory</th>
//                                     <th className="p-4 font-bold text-gray-700 uppercase tracking-wider">Cost</th>
//                                     <th className="p-4 font-bold text-gray-700 uppercase tracking-wider text-center">Cert.</th>
//                                     <th className="p-4 font-bold text-gray-700 uppercase tracking-wider text-center">Actions</th>
//                                 </tr>
//                             </thead>
//                             <tbody className="divide-y divide-gray-100">
//                                 {filteredTrainingTypes.map((t) => (
//                                     <tr
//                                         key={t.id}
//                                         className="hover:bg-violet-50/50 transition-colors duration-150 cursor-pointer group"
//                                     >
//                                         <td className="p-4 font-semibold text-gray-900">{t.trainingType}</td>
//                                         <td className="p-4 text-gray-700">{t.category}</td>
//                                         <td className="p-4 text-gray-700">{t.duration}</td>
//                                         <td className="p-4 text-gray-700">{t.deliveryMethod}</td>
//                                         <td className="p-4 text-gray-700">{t.targetAudience}</td>
//                                         <td className="p-4">
//                                             <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(t.status)}`}>
//                                                 {t.status}
//                                             </span>
//                                         </td>
//                                         <td className="p-4 text-center">
//                                             <span className={`px-2 py-1 rounded text-xs font-semibold ${t.isMandatory
//                                                     ? "bg-red-100 text-red-600"
//                                                     : "bg-gray-100 text-gray-500"
//                                                 }`}>
//                                                 {t.isMandatory ? "Yes" : "No"}
//                                             </span>
//                                         </td>
//                                         <td className="p-4 text-gray-700 font-medium">${t.cost}</td>
//                                         <td className="p-4 text-center">
//                                             <span className={`px-2 py-1 rounded text-xs font-semibold ${t.certification === "Yes"
//                                                 ? "bg-green-100 text-green-700"
//                                                 : "bg-gray-100 text-gray-500"
//                                                 }`}>
//                                                 {t.certification}
//                                             </span>
//                                         </td>
//                                         <td className="p-4 text-center">
//                                             <div className="flex items-center justify-center gap-2">
//                                                 <button
//                                                     onClick={() => {
//                                                         setEditData(t);
//                                                         setOpenModal(true);
//                                                     }}
//                                                     className="p-2 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
//                                                 >
//                                                     <Pencil size={18} />
//                                                 </button>
//                                                 <button
//                                                     onClick={() =>
//                                                         setTrainingTypes(trainingTypes.filter((x) => x.id !== t.id))
//                                                     }
//                                                     className="p-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
//                                                 >
//                                                     <Trash2 size={18} />
//                                                 </button>
//                                             </div>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>

//                 {/* MOBILE CARD VIEW */}
//                 <div className="block lg:hidden space-y-4">
//                     {filteredTrainingTypes.map((t) => (
//                         <div
//                             key={t.id}
//                             className="bg-white rounded-2xl shadow-lg shadow-violet-100/50 p-5 space-y-3 border border-violet-100/50 hover:shadow-xl "
//                         >
//                             <div className="flex items-start justify-between gap-3">
//                                 <div>
//                                     <h3 className="font-bold text-lg text-violet-600">{t.trainingType}</h3>
//                                     <div className="flex gap-2 mt-1">
//                                         <span className={`px-2 py-0.5 rounded-md text-xs font-semibold ${getStatusColor(t.status)}`}>
//                                             {t.status}
//                                         </span>

//                                     </div>
//                                 </div>
//                                 <div className="font-bold text-gray-700">${t.cost}</div>
//                             </div>

//                             <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

//                             <div className="space-y-2 text-sm">
//                                 <div className="flex justify-between">
//                                     <span className="text-gray-500 font-medium">Category</span>
//                                     <span className="text-gray-900">{t.category}</span>
//                                 </div>
//                                 <div className="flex justify-between">
//                                     <span className="text-gray-500 font-medium">Duration</span>
//                                     <span className="text-gray-900">{t.duration}</span>
//                                 </div>
//                                 <div className="flex justify-between">
//                                     <span className="text-gray-500 font-medium">Method</span>
//                                     <span className="text-gray-900">{t.deliveryMethod}</span>
//                                 </div>
//                                 <div className="flex justify-between">
//                                     <span className="text-gray-500 font-medium">Audience</span>
//                                     <span className="text-gray-900">{t.targetAudience}</span>
//                                 </div>
//                                 <div className="flex justify-between">
//                                     <span className="text-gray-500 font-medium">Mandatory</span>
//                                     <span className="text-gray-900 font-medium">
//                                         {t.isMandatory ? "Yes" : "No"}
//                                     </span>
//                                 </div>
//                                 <div className="flex justify-between items-center">
//                                     <span className="text-gray-500 font-medium">Certification</span>
//                                     <span className="text-gray-900 font-medium">
//                                         {t.certification}
//                                     </span>
//                                 </div>
//                             </div>

//                             <div className="flex gap-3 pt-3 border-t border-gray-100">
//                                 <button
//                                     onClick={() => {
//                                         setEditData(t);
//                                         setOpenModal(true);
//                                     }}
//                                     className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-blue-600 bg-blue-50 hover:bg-blue-100 font-semibold text-sm"
//                                 >
//                                     <Pencil size={16} /> Edit
//                                 </button>
//                                 <button
//                                     onClick={() =>
//                                         setTrainingTypes(trainingTypes.filter((x) => x.id !== t.id))
//                                     }
//                                     className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-red-600 bg-red-50 hover:bg-red-100 font-semibold text-sm"
//                                 >
//                                     <Trash2 size={16} /> Delete
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* MODAL */}
//             {openModal && (
//                 <TrainingTypeModal
//                     close={() => setOpenModal(false)}
//                     editData={editData}
//                     save={(data) => {
//                         if (editData) {
//                             setTrainingTypes(
//                                 trainingTypes.map((t) => (t.id === editData.id ? { ...t, ...data } : t))
//                             );
//                         } else {
//                             setTrainingTypes([...trainingTypes, { ...data, id: Date.now() }]);
//                         }
//                         setOpenModal(false);
//                     }}
//                 />
//             )}
//         </div>
//     );
// };

// export default TrainingType;

//-------------------------------------------------------------------------------------

import React, { useState } from "react";
import { Search, Plus, Pencil, Trash2, BookOpen, Clock, DollarSign, Award, Users, Monitor, CheckCircle2, X } from "lucide-react";

// TrainingTypeModal Component
const TrainingTypeModal = ({ close, save, editData }) => {
    const [formData, setFormData] = useState(
        editData || {
            trainingType: "",
            category: "",
            duration: "",
            deliveryMethod: "Online",

            status: "Active",
            status: "Active",
            cost: "",
            certification: "Yes",
        }
    );

    const handleSubmit = () => {
        const { trainingType, category, duration, cost } = formData;

        if (!trainingType.trim()) return alert("Training Type is required");
        if (!category.trim()) return alert("Category is required");
        if (!duration.trim()) return alert("Duration is required");

        if (!cost.trim()) return alert("Cost is required");

        save(formData);
    };

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-gradient-to-r from-violet-600 to-purple-600 p-6 rounded-t-2xl flex justify-between items-center">
                    <div>
                        <h3 className="text-2xl font-bold text-white">
                            {editData ? "Edit Training Type" : "New Training Type"}
                        </h3>
                        <p className="text-violet-100 text-sm mt-1">
                            {editData ? "Update training type details" : "Define a new type of training"}
                        </p>
                    </div>
                    <button onClick={close} className="text-white/80 hover:text-white transition-colors">
                        <X size={24} />
                    </button>
                </div>

                <div className="p-6 space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        {/* Training Type */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Training Type Name</label>
                            <input
                                type="text"
                                value={formData.trainingType}
                                onChange={(e) => setFormData({ ...formData, trainingType: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
                                placeholder="e.g., Leadership Development 101"
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                            <select
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
                            >
                                <option value="">Select Category</option>
                                <option value="Technical">Technical</option>
                                <option value="Soft Skills">Soft Skills</option>
                                <option value="Compliance">Compliance</option>
                                <option value="Management">Management</option>
                                <option value="Onboarding">Onboarding</option>
                            </select>
                        </div>

                        {/* Duration */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Duration</label>
                            <input
                                type="text"
                                value={formData.duration}
                                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
                                placeholder="e.g., 4 Hours"
                            />
                        </div>

                        {/* Delivery Method */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Delivery Method</label>
                            <select
                                value={formData.deliveryMethod}
                                onChange={(e) => setFormData({ ...formData, deliveryMethod: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
                            >
                                <option value="Online">Online</option>
                                <option value="In-Person">In-Person</option>
                                <option value="Hybrid">Hybrid</option>
                            </select>
                        </div>



                        {/* Cost */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Cost</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                                <input
                                    type="text"
                                    value={formData.cost}
                                    onChange={(e) => setFormData({ ...formData, cost: e.target.value })}
                                    className="w-full pl-8 pr-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
                                    placeholder="0"
                                />
                            </div>
                        </div>

                        {/* Status */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Status</label>
                            <select
                                value={formData.status}
                                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
                            >
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                                <option value="Draft">Draft</option>
                            </select>
                        </div>

                        {/* Certification */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Certification</label>
                            <select
                                value={formData.certification}
                                onChange={(e) => setFormData({ ...formData, certification: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
                            >
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>



                    </div>

                    <div className="flex gap-3 pt-4 border-t border-gray-100">
                        <button
                            onClick={handleSubmit}
                            className="flex-1 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 font-semibold"
                        >
                            {editData ? "Update Type" : "Add Type"}
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

// Main TrainingType Component
const TrainingType = () => {
    // Mock Data
    const [trainingTypes, setTrainingTypes] = useState([
        {
            id: 1,
            trainingType: "Advanced React Patterns",
            category: "Technical",
            duration: "10 Hours",
            deliveryMethod: "Online",

            status: "Active",
            cost: "200",
            certification: "Yes",
        },
        {
            id: 2,
            trainingType: "Workplace Safety 2024",
            category: "Compliance",
            duration: "2 Hours",
            deliveryMethod: "Online",

            status: "Active",
            cost: "0",
            certification: "Yes",
        },
        {
            id: 3,
            trainingType: "Effective Communication",
            category: "Soft Skills",
            duration: "1 Day",
            deliveryMethod: "In-Person",

            status: "Inactive",
            cost: "500",
            certification: "No",
        },
        {
            id: 4,
            trainingType: "Cyber Security Fundamentals",
            category: "Technical",
            duration: "5 Hours",
            deliveryMethod: "Hybrid",

            status: "Active",
            cost: "150",
            certification: "Yes",
        },
    ]);

    const [search, setSearch] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [editData, setEditData] = useState(null);

    const filteredTrainingTypes = trainingTypes.filter((t) =>
        Object.values(t).join(" ").toLowerCase().includes(search.toLowerCase())
    );

    const getStatusColor = (status) => {
        switch (status) {
            case "Active": return "bg-green-100 text-green-700";
            case "Inactive": return "bg-gray-100 text-gray-600";
            case "Draft": return "bg-orange-100 text-orange-700";
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
                                    Training Types
                                </h2>
                                <p className="text-sm text-gray-500 mt-1">
                                    {filteredTrainingTypes.length} {filteredTrainingTypes.length === 1 ? "type" : "types"} found
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
                                    placeholder="Search training types..."
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
                                    <th className="p-4 font-bold text-gray-700 uppercase tracking-wider">Category</th>
                                    <th className="p-4 font-bold text-gray-700 uppercase tracking-wider">Duration</th>
                                    <th className="p-4 font-bold text-gray-700 uppercase tracking-wider">Delivery</th>

                                    <th className="p-4 font-bold text-gray-700 uppercase tracking-wider">Status</th>
                                    <th className="p-4 font-bold text-gray-700 uppercase tracking-wider">Cost</th>
                                    <th className="p-4 font-bold text-gray-700 uppercase tracking-wider text-center">Cert.</th>
                                    <th className="p-4 font-bold text-gray-700 uppercase tracking-wider text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {filteredTrainingTypes.map((t) => (
                                    <tr
                                        key={t.id}
                                        className="hover:bg-violet-50/50 transition-colors duration-150 cursor-pointer group"
                                    >
                                        <td className="p-4 font-semibold text-gray-900">{t.trainingType}</td>
                                        <td className="p-4 text-gray-700">{t.category}</td>
                                        <td className="p-4 text-gray-700">{t.duration}</td>
                                        <td className="p-4 text-gray-700">{t.deliveryMethod}</td>

                                        <td className="p-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(t.status)}`}>
                                                {t.status}
                                            </span>
                                        </td>
                                        <td className="p-4 text-gray-700 font-medium">${t.cost}</td>
                                        <td className="p-4 text-center">
                                            <span className={`px-2 py-1 rounded text-xs font-semibold ${t.certification === "Yes"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-gray-100 text-gray-500"
                                                }`}>
                                                {t.certification}
                                            </span>
                                        </td>
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
                                                        setTrainingTypes(trainingTypes.filter((x) => x.id !== t.id))
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
                    {filteredTrainingTypes.map((t) => (
                        <div
                            key={t.id}
                            className="bg-white rounded-2xl shadow-lg shadow-violet-100/50 p-5 space-y-3 border border-violet-100/50 hover:shadow-xl "
                        >
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <h3 className="font-bold text-lg text-violet-600">{t.trainingType}</h3>
                                    <div className="flex gap-2 mt-1">
                                        <span className={`px-2 py-0.5 rounded-md text-xs font-semibold ${getStatusColor(t.status)}`}>
                                            {t.status}
                                        </span>

                                    </div>
                                </div>
                                <div className="font-bold text-gray-700">${t.cost}</div>
                            </div>

                            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-500 font-medium">Category</span>
                                    <span className="text-gray-900">{t.category}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500 font-medium">Duration</span>
                                    <span className="text-gray-900">{t.duration}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500 font-medium">Method</span>
                                    <span className="text-gray-900">{t.deliveryMethod}</span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-gray-500 font-medium">Certification</span>
                                    <span className="text-gray-900 font-medium">
                                        {t.certification}
                                    </span>
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
                                        setTrainingTypes(trainingTypes.filter((x) => x.id !== t.id))
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
                <TrainingTypeModal
                    close={() => setOpenModal(false)}
                    editData={editData}
                    save={(data) => {
                        if (editData) {
                            setTrainingTypes(
                                trainingTypes.map((t) => (t.id === editData.id ? { ...t, ...data } : t))
                            );
                        } else {
                            setTrainingTypes([...trainingTypes, { ...data, id: Date.now() }]);
                        }
                        setOpenModal(false);
                    }}
                />
            )}
        </div>
    );
};

export default TrainingType;