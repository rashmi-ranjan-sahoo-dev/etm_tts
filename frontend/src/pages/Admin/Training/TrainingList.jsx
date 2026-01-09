import React, { useState } from "react";
import {
  Search,
  Plus,
  Pencil,
  Trash2,
  BookOpen,
  User,
  Clock,
  DollarSign,
  Calendar,
  Activity,
  X,
  ChevronDown,
  ArrowLeft,
  Mail,
  Phone,
  Briefcase,
  MapPin,
} from "lucide-react";

// TrainingModal Component
// Mock employees list for selection
const AVAILABLE_EMPLOYEES = [
  {
    id: 1,
    name: "John Doe",
    role: "Software Engineer",
    department: "Development",
    email: "john.doe@techcorp.com",
    phone: "+1 (555) 123-4567",
    status: "Active",
    joinedDate: "Jan 15, 2023",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    name: "Alice Smith",
    role: "UI/UX Designer",
    department: "Design",
    email: "alice.smith@techcorp.com",
    phone: "+1 (555) 234-5678",
    status: "Active",
    joinedDate: "Feb 20, 2023",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    name: "Bob Brown",
    role: "Product Manager",
    department: "Product",
    email: "bob.brown@techcorp.com",
    phone: "+1 (555) 345-6789",
    status: "On Leave",
    joinedDate: "Mar 10, 2022",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 4,
    name: "Jane Smith",
    role: "Data Scientist",
    department: "Data",
    email: "jane.smith@techcorp.com",
    phone: "+1 (555) 456-7890",
    status: "Active",
    joinedDate: "Apr 05, 2023",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 5,
    name: "Mike Ross",
    role: "DevOps Engineer",
    department: "Engineering",
    email: "mike.ross@techcorp.com",
    phone: "+1 (555) 567-8901",
    status: "Active",
    joinedDate: "May 12, 2023",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 6,
    name: "Sarah Connor",
    role: "Security Analyst",
    department: "Security",
    email: "sarah.connor@techcorp.com",
    phone: "+1 (555) 678-9012",
    status: "Active",
    joinedDate: "Jun 18, 2022",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 7,
    name: "Tom Hardy",
    role: "Backend Developer",
    department: "Development",
    email: "tom.hardy@techcorp.com",
    phone: "+1 (555) 789-0123",
    status: "Inactive",
    joinedDate: "Jul 25, 2023",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 8,
    name: "Emma Wilson",
    role: "Product Designer",
    department: "Design",
    email: "emma.wilson@techcorp.com",
    phone: "+1 (555) 890-1234",
    status: "Active",
    joinedDate: "Aug 30, 2023",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 9,
    name: "Chris Evans",
    role: "QA Engineer",
    department: "QA",
    email: "chris.evans@techcorp.com",
    phone: "+1 (555) 901-2345",
    status: "Active",
    joinedDate: "Sep 14, 2022",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 10,
    name: "Diana Prince",
    role: "Project Manager",
    department: "Product",
    email: "diana.prince@techcorp.com",
    phone: "+1 (555) 012-3456",
    status: "Active",
    joinedDate: "Oct 22, 2023",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const TrainingModal = ({ close, save, editData }) => {
  const [formData, setFormData] = useState(
    editData || {
      trainingType: "",
      trainer: "",
      trainees: [], // Array of {name, image}
      timeDuration: "",
      cost: "",
      status: "Upcoming",
      trainingDate: "",
      certificationDate: "",
    }
  );
  const [showTraineeDropdown, setShowTraineeDropdown] = useState(false);

  const handleSubmit = () => {
    const {
      trainingType,
      trainer,
      trainees,
      timeDuration,
      cost,
      trainingDate,
      certificationDate,
    } = formData;

    if (!trainingType.trim()) return alert("Training Type is required");
    if (!trainer.trim()) return alert("Trainer is required");
    // if (!trainee.trim()) return alert("Trainee is required");
    if (!timeDuration.trim()) return alert("Time Duration is required");
    if (!cost.trim()) return alert("Cost is required");
    if (!trainingDate) return alert("Training Date is required");
    if (!certificationDate) return alert("Certification Date is required");

    // Mock handling of trainees for save (preserving existing images or placeholders)
    save(formData);
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
              {editData
                ? "Update training details"
                : "Schedule a new training session"}
            </p>
          </div>
          <button
            onClick={close}
            className="text-white/80 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Training Type
              </label>
              <input
                type="text"
                value={formData.trainingType}
                onChange={(e) =>
                  setFormData({ ...formData, trainingType: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
                placeholder="e.g., Technical Workshop"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Trainer
              </label>
              <input
                type="text"
                value={formData.trainer}
                onChange={(e) =>
                  setFormData({ ...formData, trainer: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
                placeholder="e.g., Alex Johnson"
              />
            </div>

            {/* Trainees Selection - Standard Input Style */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Trainees
              </label>

              <div
                className={`w-full px-4 py-3 rounded-xl border-2 cursor-pointer flex justify-between items-center transition-all ${
                  showTraineeDropdown
                    ? "border-violet-500 bg-white ring-4 ring-violet-500/10"
                    : "border-gray-200 bg-gray-50 hover:border-violet-300"
                }`}
                onClick={() => setShowTraineeDropdown(!showTraineeDropdown)}
              >
                <span
                  className={`text-gray-700 ${
                    formData.trainees.length === 0 && "text-gray-400"
                  }`}
                >
                  {formData.trainees.length > 0
                    ? formData.trainees.map((t) => t.name).join(", ")
                    : "Select Trainees..."}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-gray-400 transition-transform duration-200 ${
                    showTraineeDropdown ? "rotate-180 text-violet-500" : ""
                  }`}
                />
              </div>

              {/* Dropdown with Checkbox style selection */}
              {showTraineeDropdown && (
                <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-xl shadow-xl border border-gray-100 max-h-60 overflow-y-auto z-20 p-2">
                  <div className="text-xs font-semibold text-gray-400 px-2 py-1 mb-1 uppercase tracking-wider">
                    All Employees
                  </div>
                  {AVAILABLE_EMPLOYEES.map((emp) => {
                    const isSelected = formData.trainees.some(
                      (t) => t.name === emp.name
                    );
                    return (
                      <div
                        key={emp.id}
                        onClick={() => {
                          let newTrainees;
                          if (isSelected) {
                            // Remove
                            newTrainees = formData.trainees.filter(
                              (t) => t.name !== emp.name
                            );
                          } else {
                            // Add
                            newTrainees = [
                              ...formData.trainees,
                              { name: emp.name, image: emp.image },
                            ];
                          }
                          setFormData({ ...formData, trainees: newTrainees });
                          // Don't close dropdown to allow multiple selections easily
                        }}
                        className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-colors ${
                          isSelected ? "bg-violet-50" : "hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-full overflow-hidden border ${
                              isSelected
                                ? "border-violet-200"
                                : "border-gray-200"
                            }`}
                          >
                            <img
                              src={emp.image}
                              alt={emp.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span
                            className={`font-medium ${
                              isSelected ? "text-violet-700" : "text-gray-700"
                            }`}
                          >
                            {emp.name}
                          </span>
                        </div>
                        {isSelected && (
                          <div className="w-2 h-2 rounded-full bg-violet-500 mr-2"></div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Time Duration
              </label>
              <input
                type="text"
                value={formData.timeDuration}
                onChange={(e) =>
                  setFormData({ ...formData, timeDuration: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
                placeholder="e.g., 2 Weeks"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Cost
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">
                  $
                </span>
                <input
                  type="text"
                  value={formData.cost}
                  onChange={(e) =>
                    setFormData({ ...formData, cost: e.target.value })
                  }
                  className="w-full pl-8 pr-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
                  placeholder="500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Status
              </label>
              <select
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
              >
                <option value="Upcoming">Upcoming</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Training Date
              </label>
              <input
                type="date"
                value={formData.trainingDate}
                onChange={(e) =>
                  setFormData({ ...formData, trainingDate: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Certification Date
              </label>
              <input
                type="date"
                value={formData.certificationDate}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    certificationDate: e.target.value,
                  })
                }
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
// View Trainees Modal
const TraineesListModal = ({ close, trainees }) => {
  const [selectedTrainee, setSelectedTrainee] = useState(null);

  // Helper to find full details
  const getFullDetails = (name) => {
    return AVAILABLE_EMPLOYEES.find((e) => e.name === name) || {};
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <div className="flex items-center gap-2">
            {selectedTrainee && (
              <button
                onClick={() => setSelectedTrainee(null)}
                className="p-1 hover:bg-white rounded-full transition-colors text-gray-500 hover:shadow-sm"
              >
                <ArrowLeft size={18} />
              </button>
            )}
            <h3 className="font-bold text-gray-800">
              {selectedTrainee ? "Trainee Details" : "Trainees List"}
            </h3>
          </div>
          <button
            onClick={close}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 max-h-[400px] overflow-y-auto">
          {!selectedTrainee ? (
            // List View
            <div className="space-y-3">
              {trainees.map((t, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedTrainee(getFullDetails(t.name))}
                  className="flex items-center justify-between p-2 hover:bg-violet-50 rounded-xl transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full border border-gray-100 overflow-hidden bg-gray-100 shadow-sm shrink-0">
                      {t.image ? (
                        <img
                          src={t.image}
                          alt={t.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-violet-100 text-violet-600 font-bold text-sm">
                          {t.name[0]}
                        </div>
                      )}
                    </div>
                    <span className="font-semibold text-gray-700 group-hover:text-violet-700 transition-colors">
                      {t.name}
                    </span>
                  </div>
                  <div className="text-gray-400 group-hover:text-violet-400">
                    <ArrowLeft size={16} className="rotate-180" />
                  </div>
                </div>
              ))}
              {trainees.length === 0 && (
                <div className="text-center py-4 text-gray-500 text-sm">
                  No trainees assigned
                </div>
              )}
            </div>
          ) : (
            // Detailed View
            <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
              {/* Profile Header */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden mb-3">
                  <img
                    src={
                      selectedTrainee.image ||
                      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop"
                    }
                    alt={selectedTrainee.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  {selectedTrainee.name || "Unknown"}
                </h2>
                <span className="px-3 py-1 bg-violet-100 text-violet-600 rounded-full text-xs font-semibold mt-2">
                  {selectedTrainee.role || "Trainee"}
                </span>
              </div>

              {/* Info Grid */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <Briefcase size={18} className="text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase">
                      Department
                    </p>
                    <p className="text-sm font-semibold text-gray-700">
                      {selectedTrainee.department || "N/A"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <Mail size={18} className="text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase">
                      Email
                    </p>
                    <p className="text-sm font-semibold text-gray-700">
                      {selectedTrainee.email || "N/A"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <Phone size={18} className="text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase">
                      Phone
                    </p>
                    <p className="text-sm font-semibold text-gray-700">
                      {selectedTrainee.phone || "N/A"}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between pt-2">
                  <div className="text-xs text-gray-400">
                    Joined:{" "}
                    <span className="text-gray-600 font-medium">
                      {selectedTrainee.joinedDate || "N/A"}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    Status:{" "}
                    <span className="text-green-600 font-medium">
                      {selectedTrainee.status || "Active"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const TrainingList = () => {
  // Mock Data
  const [trainings, setTrainings] = useState([
    {
      id: 1,
      trainingType: "Web Development Bootcamp",
      trainer: "Alex Johnson",
      trainees: [
        {
          name: "John Doe",
          image:
            "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
          name: "Alice Smith",
          image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
          name: "Bob Brown",
          image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      ],
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
      trainees: [
        {
          name: "Jane Smith",
          image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
          name: "Mike Ross",
          image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      ],
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
      trainees: [
        {
          name: "Sarah Connor",
          image:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
          name: "Tom Hardy",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
          name: "Emily Blunt",
          image:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
          name: "Chris Evans",
          image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        { name: "Scarlett Rose", image: "" },
      ],
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
      trainees: [
        {
          name: "Alice Brown",
          image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      ],
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
      trainees: [
        {
          name: "Charlie Davis",
          image:
            "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
          name: "Diana Prince",
          image:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
          name: "Bruce Wayne",
          image:
            "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      ],
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
  const [visibleTraineeIds, setVisibleTraineeIds] = useState([]); // Kept for future use if needed, though removed from display now

  // View Modal State
  const [showViewModal, setShowViewModal] = useState(false);
  const [viewTrainees, setViewTrainees] = useState([]);

  const toggleTraineeName = (id) => {
    setVisibleTraineeIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const filteredTrainings = trainings.filter((t) =>
    Object.values(t).join(" ").toLowerCase().includes(search.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";
      case "In Progress":
        return "bg-blue-100 text-blue-700";
      case "Upcoming":
        return "bg-orange-100 text-orange-700";
      default:
        return "bg-gray-100 text-gray-700";
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
                  {filteredTrainings.length}{" "}
                  {filteredTrainings.length === 1 ? "record" : "records"} found
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
                  <th className="p-4 font-bold text-gray-700 uppercase tracking-wider">
                    Training Type
                  </th>
                  <th className="p-4 font-bold text-gray-700 uppercase tracking-wider">
                    Trainer
                  </th>
                  <th className="p-4 font-bold text-gray-700 uppercase tracking-wider">
                    Trainees
                  </th>
                  <th className="p-4 font-bold text-gray-700 uppercase tracking-wider">
                    Time Duration
                  </th>
                  <th className="p-4 font-bold text-gray-700 uppercase tracking-wider">
                    Cost
                  </th>
                  <th className="p-4 font-bold text-gray-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="p-4 font-bold text-gray-700 uppercase tracking-wider">
                    Training Date
                  </th>
                  <th className="p-4 font-bold text-gray-700 uppercase tracking-wider">
                    Completion
                  </th>
                  <th className="p-4 font-bold text-gray-700 uppercase tracking-wider text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredTrainings.map((t) => (
                  <tr
                    key={t.id}
                    className="hover:bg-violet-50/50 transition-colors duration-150 cursor-pointer group"
                  >
                    <td className="p-4 font-semibold text-gray-900">
                      {t.trainingType}
                    </td>
                    <td className="p-4 text-gray-700">{t.trainer}</td>
                    <td className="p-4">
                      {/* Stacked Avatars - Click to View Trainees */}
                      <div
                        className="flex -space-x-4 cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={(e) => {
                          e.stopPropagation();
                          setViewTrainees(t.trainees);
                          setShowViewModal(true);
                        }}
                      >
                        {t.trainees.slice(0, 3).map((trainee, idx) => (
                          <div
                            key={idx}
                            className="w-10 h-10 rounded-full border-2 border-white shadow-sm overflow-hidden bg-gray-100 relative hover:z-10 transition-all hover:scale-110"
                            title={trainee.name}
                          >
                            {trainee.image ? (
                              <img
                                src={trainee.image}
                                alt={trainee.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-violet-100 text-violet-600 font-bold text-xs">
                                {trainee.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")
                                  .slice(0, 2)}
                              </div>
                            )}
                          </div>
                        ))}
                        {t.trainees.length > 3 && (
                          <div className="w-10 h-10 rounded-full border-2 border-white shadow-sm bg-violet-500 text-white flex items-center justify-center text-xs font-bold relative hover:z-10 transition-all hover:scale-110">
                            +{t.trainees.length - 3}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="p-4 text-gray-700">{t.timeDuration}</td>
                    <td className="p-4 text-gray-700 font-medium">${t.cost}</td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${getStatusColor(
                          t.status
                        )}`}
                      >
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
                  <h3 className="font-bold text-lg text-violet-600">
                    {t.trainingType}
                  </h3>
                  <span
                    className={`inline-block mt-1 px-2 py-0.5 rounded-md text-xs font-semibold whitespace-nowrap ${getStatusColor(
                      t.status
                    )}`}
                  >
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
                  <span className="text-gray-500 font-medium">Trainees</span>
                  <div
                    className="flex -space-x-3 cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={(e) => {
                      e.stopPropagation();
                      setViewTrainees(t.trainees);
                      setShowViewModal(true);
                    }}
                  >
                    {t.trainees.slice(0, 3).map((trainee, idx) => (
                      <div
                        key={idx}
                        className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-50"
                      >
                        {trainee.image ? (
                          <img
                            src={trainee.image}
                            alt={trainee.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-violet-100 text-violet-600 text-xs font-bold">
                            {trainee.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .slice(0, 2)}
                          </div>
                        )}
                      </div>
                    ))}
                    {t.trainees.length > 3 && (
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-violet-500 text-white flex items-center justify-center text-xs font-bold">
                        +{t.trainees.length - 3}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium">Duration</span>
                  <span className="text-gray-900">{t.timeDuration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium">
                    Training Date
                  </span>
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
          close={() => {
            setOpenModal(false);
            setEditData(null);
          }}
          editData={editData}
          save={(data) => {
            if (editData) {
              setTrainings(
                trainings.map((t) =>
                  t.id === editData.id ? { ...t, ...data } : t
                )
              );
            } else {
              setTrainings([...trainings, { ...data, id: Date.now() }]);
            }
            setOpenModal(false);
            setEditData(null);
          }}
        />
      )}

      {/* View Trainees Modal */}
      {showViewModal && (
        <TraineesListModal
          close={() => setShowViewModal(false)}
          trainees={viewTrainees}
        />
      )}
    </div>
  );
};

export default TrainingList;