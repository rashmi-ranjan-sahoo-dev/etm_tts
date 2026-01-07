import React, { useState } from "react";
import { Search, Plus, Pencil, Trash2, CheckCircle2, User, Mail, Phone, BookOpen, Clock, Globe, Briefcase, X } from "lucide-react";

// TrainerModal Component
const TrainerModal = ({ close, save, editData }) => {
    const [formData, setFormData] = useState(
        editData || {
            name: "",
            image: "",
            specialization: "",
            technicalSkills: "",
            trainingArea: "",
            experience: "",
            languages: "",
            phone: "",
            email: "",
        }
    );

    const handleSubmit = () => {
        const { name, specialization, technicalSkills, trainingArea, experience, languages, phone, email } = formData;

        if (!name.trim()) return alert("Name is required");
        if (!specialization.trim()) return alert("Specialization is required");
        if (!technicalSkills.trim()) return alert("Technical Skills are required");
        if (!trainingArea.trim()) return alert("Training Area is required");
        if (!experience) return alert("Experience is required");
        if (!languages.trim()) return alert("Languages are required");
        if (!phone.trim()) return alert("Phone Number is required");
        if (!email.trim()) return alert("Email is required");

        save(formData);
    };

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-gradient-to-r from-violet-600 to-purple-600 p-6 rounded-t-2xl flex justify-between items-center">
                    <div>
                        <h3 className="text-2xl font-bold text-white">
                            {editData ? "Edit Trainer" : "New Trainer"}
                        </h3>
                        <p className="text-violet-100 text-sm mt-1">
                            {editData ? "Update trainer information" : "Add a new trainer to the database"}
                        </p>
                    </div>
                    <button onClick={close} className="text-white/80 hover:text-white transition-colors">
                        <X size={24} />
                    </button>
                </div>

                <div className="p-6 space-y-5">
                    <div className="flex justify-center mb-6">
                        <div className="relative group">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-violet-100 shadow-lg bg-gray-100 flex items-center justify-center">
                                {formData.image ? (
                                    <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                                ) : (
                                    <User className="w-10 h-10 text-gray-300" />
                                )}
                            </div>
                            <div className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-md border border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors">
                                <label className="cursor-pointer">
                                    <Pencil className="w-4 h-4 text-violet-600" />
                                    <input
                                        type="file"
                                        className="hidden"
                                        accept="image/*"
                                        onChange={(e) => {
                                            const file = e.target.files[0];
                                            if (file) {
                                                const reader = new FileReader();
                                                reader.onloadend = () => {
                                                    setFormData({ ...formData, image: reader.result });
                                                };
                                                reader.readAsDataURL(file);
                                            }
                                        }}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
                                placeholder="e.g., John Doe"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Specialization</label>
                            <input
                                type="text"
                                required
                                value={formData.specialization}
                                onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
                                placeholder="e.g., Cloud Computing"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Technical Skills</label>
                            <input
                                type="text"
                                required
                                value={formData.technicalSkills}
                                onChange={(e) => setFormData({ ...formData, technicalSkills: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
                                placeholder="e.g., AWS, Azure, Python"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Training Area</label>
                            <input
                                type="text"
                                required
                                value={formData.trainingArea}
                                onChange={(e) => setFormData({ ...formData, trainingArea: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
                                placeholder="e.g., Backend Development"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Training Experience</label>
                            <input
                                type="text"
                                required
                                value={formData.experience}
                                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
                                placeholder="e.g., 5 years"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Languages</label>
                            <input
                                type="text"
                                required
                                value={formData.languages}
                                onChange={(e) => setFormData({ ...formData, languages: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
                                placeholder="e.g., English, Spanish"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                            <input
                                type="text"
                                required
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
                                placeholder="e.g., +1 234 567 8900"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
                                placeholder="e.g., trainer@example.com"
                            />
                        </div>
                    </div>

                    <div className="flex gap-3 pt-4 border-t">
                        <button
                            onClick={handleSubmit}
                            className="flex-1 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 font-semibold"
                        >
                            {editData ? "Update Trainer" : "Add Trainer"}
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

// Main Trainers Component
const Trainers = () => {
    const [trainers, setTrainers] = useState([
        {
            id: 1,
            name: "Alex Johnson",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            specialization: "Full Stack",
            technicalSkills: "React, Node.js, MongoDB",
            trainingArea: "Web Development",
            experience: "8 Years",
            languages: "English, German",
            phone: "+1 555-0123",
            email: "alex.j@example.com",
        },
        {
            id: 2,
            name: "Maria Garcia",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            specialization: "Data Science",
            technicalSkills: "Python, Pandas, TensorFlow",
            trainingArea: "AI & ML",
            experience: "5 Years",
            languages: "English, Spanish",
            phone: "+1 555-0124",
            email: "maria.g@example.com",
        },
        {
            id: 3,
            name: "David Kim",
            image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            specialization: "Cybersecurity",
            technicalSkills: "Ethical Hacking, Network Security",
            trainingArea: "Security",
            experience: "6 Years",
            languages: "English, Korean",
            phone: "+1 555-0125",
            email: "david.kim@example.com",
        },
        {
            id: 4,
            name: "Sarah Conner",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            specialization: "DevOps",
            technicalSkills: "Docker, Kubernetes, AWS",
            trainingArea: "Cloud Infrastructure",
            experience: "10 Years",
            languages: "English, French",
            phone: "+1 555-0126",
            email: "sarah.conner@example.com",
        },
        {
            id: 5,
            name: "Michael Chen",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            specialization: "Mobile Development",
            technicalSkills: "React Native, Swift, Kotlin",
            trainingArea: "App Development",
            experience: "4 Years",
            languages: "English, Mandarin",
            phone: "+1 555-0127",
            email: "michael.chen@example.com",
        },
    ]);

    const [search, setSearch] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [editData, setEditData] = useState(null);

    const filteredTrainers = trainers.filter((t) =>
        Object.values(t).join(" ").toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50 to-purple-50 p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                {/* HEADER */}
                <div className="bg-white rounded-2xl shadow-lg shadow-violet-100/50 p-6 mb-6 border border-violet-100/50">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-violet-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                                <User className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                                    Trainers
                                </h2>
                                <p className="text-sm text-gray-500 mt-1">
                                    {filteredTrainers.length}{" "}
                                    {filteredTrainers.length === 1 ? "trainer" : "trainers"} found
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
                                    placeholder="Search trainers..."
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
                    <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-gradient-to-r from-violet-50 to-purple-50 border-b-2 border-violet-100">
                                <tr>
                                    <th className="p-4 font-bold text-gray-700 uppercase tracking-wider">Name</th>
                                    <th className="p-4 font-bold text-gray-700 uppercase tracking-wider">Specialization</th>
                                    <th className="p-4 font-bold text-gray-700 uppercase tracking-wider">Technical Skills</th>
                                    <th className="p-4 font-bold text-gray-700 uppercase tracking-wider">Training Area</th>
                                    <th className="p-4 font-bold text-gray-700 uppercase tracking-wider">Experience</th>
                                    <th className="p-4 font-bold text-gray-700 uppercase tracking-wider">Languages</th>
                                    <th className="p-4 font-bold text-gray-700 uppercase tracking-wider">Phone No</th>
                                    <th className="p-4 font-bold text-gray-700 uppercase tracking-wider">Email</th>
                                    <th className="p-4 font-bold text-gray-700 uppercase tracking-wider text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {filteredTrainers.map((t) => (
                                    <tr
                                        key={t.id}
                                        className="hover:bg-violet-50/50 transition-colors duration-150 cursor-pointer group"
                                    >
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center overflow-hidden border border-violet-200">
                                                    {t.image ? (
                                                        <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                                                    ) : (
                                                        <span className="font-bold text-violet-600 text-sm">
                                                            {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="font-semibold text-gray-900">{t.name}</div>
                                            </div>
                                        </td>
                                        <td className="p-4 text-gray-700">{t.specialization}</td>
                                        <td className="p-4 text-gray-700">
                                            <span className="line-clamp-2" title={t.technicalSkills}>
                                                {t.technicalSkills}
                                            </span>
                                        </td>
                                        <td className="p-4 text-gray-700">{t.trainingArea}</td>
                                        <td className="p-4 text-gray-700">{t.experience}</td>
                                        <td className="p-4 text-gray-700">{t.languages}</td>
                                        <td className="p-4 text-gray-700 whitespace-nowrap">
                                            <div className="flex items-center gap-2">
                                                <Phone size={16} className="text-violet-500" />
                                                {t.phone}
                                            </div>
                                        </td>
                                        <td className="p-4 text-gray-700">
                                            <div className="flex items-center gap-2">
                                                <Mail size={16} className="text-violet-500" />
                                                {t.email}
                                            </div>
                                        </td>
                                        <td className="p-4 text-center">
                                            <div className="flex items-center justify-center gap-2">
                                                <button
                                                    onClick={() => {
                                                        setEditData(t);
                                                        setOpenModal(true);
                                                    }}
                                                    className="p-2 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
                                                    title="Edit"
                                                >
                                                    <Pencil size={18} />
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        setTrainers(trainers.filter((x) => x.id !== t.id))
                                                    }
                                                    className="p-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
                                                    title="Delete"
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
                    {filteredTrainers.map((t) => (
                        <div
                            key={t.id}
                            className="bg-white rounded-2xl shadow-lg shadow-violet-100/50 p-5 space-y-3 border border-violet-100/50 hover:shadow-xl hover:shadow-violet-200/50 transition-all duration-300"
                        >
                            <div className="flex items-start justify-between gap-3">
                                <div className="flex-1 flex gap-3">
                                    <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center overflow-hidden border border-violet-200 flex-shrink-0">
                                        {t.image ? (
                                            <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                                        ) : (
                                            <span className="font-bold text-violet-600 text-sm">
                                                {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-violet-600">{t.name}</h3>
                                        <p className="text-gray-700 font-medium text-sm">{t.specialization}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

                            <div className="space-y-2.5 text-sm">
                                <div className="flex items-center gap-2">
                                    <Briefcase className="w-4 h-4 text-violet-400" />
                                    <span className="text-gray-500 font-semibold w-24">Skills:</span>
                                    <span className="text-gray-900 flex-1">{t.technicalSkills}</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <BookOpen className="w-4 h-4 text-violet-400" />
                                    <span className="text-gray-500 font-semibold w-24">Area:</span>
                                    <span className="text-gray-900 flex-1">{t.trainingArea}</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-violet-400" />
                                    <span className="text-gray-500 font-semibold w-24">Exp:</span>
                                    <span className="text-gray-900 flex-1">{t.experience}</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Globe className="w-4 h-4 text-violet-400" />
                                    <span className="text-gray-500 font-semibold w-24">Lang:</span>
                                    <span className="text-gray-900 flex-1">{t.languages}</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-violet-400" />
                                    <span className="text-gray-500 font-semibold w-24">Phone:</span>
                                    <span className="text-gray-900 flex-1">{t.phone}</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-violet-400" />
                                    <span className="text-gray-500 font-semibold w-24">Email:</span>
                                    <span className="text-gray-900 flex-1 truncate">{t.email}</span>
                                </div>
                            </div>

                            <div className="flex gap-3 pt-3 border-t border-gray-100">
                                <button
                                    onClick={() => {
                                        setEditData(t);
                                        setOpenModal(true);
                                    }}
                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors font-semibold"
                                >
                                    <Pencil size={18} />
                                    Edit
                                </button>
                                <button
                                    onClick={() =>
                                        setTrainers(trainers.filter((x) => x.id !== t.id))
                                    }
                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-red-600 bg-red-50 hover:bg-red-100 transition-colors font-semibold"
                                >
                                    <Trash2 size={18} />
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredTrainers.length === 0 && (
                    <div className="bg-white rounded-2xl shadow-lg shadow-violet-100/50 p-12 text-center border border-violet-100/50">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Search className="w-8 h-8 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            No trainers found
                        </h3>
                        <p className="text-gray-500">Try adjusting your search criteria</p>
                    </div>
                )}
            </div>

            {/* MODAL */}
            {openModal && (
                <TrainerModal
                    close={() => setOpenModal(false)}
                    editData={editData}
                    save={(data) => {
                        if (editData) {
                            setTrainers(
                                trainers.map((t) => (t.id === editData.id ? { ...t, ...data } : t))
                            );
                        } else {
                            setTrainers([...trainers, { ...data, id: Date.now() }]);
                        }
                        setOpenModal(false);
                    }}
                />
            )}
        </div>
    );
};

export default Trainers;