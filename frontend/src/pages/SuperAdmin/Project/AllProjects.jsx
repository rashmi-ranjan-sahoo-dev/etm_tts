/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, User, Calendar, Flag, FileText, Download, ChevronRight, BarChart3, Plus, Clock, CheckCircle, XCircle, AlertTriangle, Play, Pause } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    projectName: "Client Website Revamp",
    clientName: "ABC Pvt Ltd",    leader: "Sangram Singh",
    projectManager: "John Doe",
    status: "In Progress",
    priority: "High",
    description:
      "Redesign and develop a responsive company website with dashboard.",
    attachments: [
      {
        name: "Requirements.pdf",
        size: "2.4 MB",
        url: "/files/requirements.pdf",
      },
    ],
  },
  {
    id: 2,
    projectName: "Mobile App UI",
    clientName: "XYZ Solutions",
    leader: "Rinku Sahoo",
    projectManager: "",
    status: "New",
    priority: "Medium",
    description:
      "Create mobile-first UI screens for Android & iOS application.",
    attachments: [],
  },
  {
    id: 3,
    projectName: "E-commerce Platform",
    clientName: "TechCorp",
    leader: "Alice Johnson",
    projectManager: "Bob Smith",
    status: "Pending",
    priority: "High",
    description: "Build a full-featured e-commerce platform with payment integration.",
    attachments: [],
  },
  {
    id: 4,
    projectName: "Data Analytics Dashboard",
    clientName: "DataInc",
    leader: "Charlie Brown",
    projectManager: "",
    status: "Hold",
    priority: "Medium",
    description: "Create comprehensive analytics dashboard for business intelligence.",
    attachments: [],
  },
  {
    id: 5,
    projectName: "API Development",
    clientName: "APICorp",
    leader: "Diana Prince",
    projectManager: "",
    status: "Rejected",
    priority: "Low",
    description: "Develop RESTful APIs for mobile application backend.",
    attachments: [],
  },
];

const projectManagers = ["John Doe", "Bob Smith", "Alice Johnson", "Charlie Brown"];

const AllProjects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState(projectsData);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [selectedProjectForAssign, setSelectedProjectForAssign] = useState(null);
  const [assignedPM, setAssignedPM] = useState("");

  const filteredProjects = projects.filter(
    (p) =>
      (p.projectName.toLowerCase().includes(search.toLowerCase()) ||
      p.clientName.toLowerCase().includes(search.toLowerCase())) &&
      (statusFilter === "All" || p.status === statusFilter)
  );

  const updateStatus = (id, status) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status } : p))
    );
  };

  const acceptProject = (id) => {
    const project = projects.find(p => p.id === id);
    setSelectedProjectForAssign(project);
    setAssignedPM("");
    setShowAssignModal(true);
  };

  const assignProjectManager = () => {
    if (!assignedPM.trim()) return;

    setProjects((prev) =>
      prev.map((p) => (p.id === selectedProjectForAssign.id ? { ...p, status: "Pending", projectManager: assignedPM } : p))
    );
    setShowAssignModal(false);
    setSelectedProjectForAssign(null);
    setAssignedPM("");
  };

  const rejectProject = (id) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: "Rejected" } : p))
    );
  };

  const getStatusColor = (status) => {
    const colors = {
      "New": "bg-blue-50 text-blue-700 border-blue-200",
      "Open": "bg-purple-50 text-purple-700 border-purple-200",
      "In Progress": "bg-amber-50 text-amber-700 border-amber-200",
      "Pending": "bg-orange-50 text-orange-700 border-orange-200",
      "Hold": "bg-red-50 text-red-700 border-red-200",
      "Rejected": "bg-gray-50 text-gray-700 border-gray-200",
      "Completed": "bg-green-50 text-green-700 border-green-200"
    };
    return colors[status] || "bg-gray-50 text-gray-700 border-gray-200";
  };

  const getPriorityColor = (priority) => {
    const colors = {
      "High": "text-red-600 bg-red-50 border-red-200",
      "Medium": "text-yellow-600 bg-yellow-50 border-yellow-200",
      "Low": "text-green-600 bg-green-50 border-green-200"
    };
    return colors[priority] || "text-gray-600 bg-gray-50 border-gray-200";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                All Projects
              </h1>
              <p className="text-gray-600">Manage and track all your projects in one place</p>
            </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search project or client..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full md:w-96 pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl
                    focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none
                    bg-white shadow-sm transition-all"
                  />
                </div>

                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-4 py-3 border-2 border-gray-200 rounded-xl
                  focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none
                  bg-white shadow-sm transition-all text-gray-700"
                >
                  <option value="All">All Status</option>
                  <option value="New">New</option>
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Hold">Hold</option>
                  <option value="Rejected">Rejected</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-6">
              <div 
                className="group bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-5 shadow-lg border border-slate-200 cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:-translate-y-1"
                onClick={() => setStatusFilter("All")}
              >
                <div className="flex items-center justify-between mb-3">
                  <BarChart3 className="w-8 h-8 text-slate-600 group-hover:text-slate-800 transition-colors" />
                  <div className="w-3 h-3 bg-slate-400 rounded-full group-hover:bg-slate-600 transition-colors"></div>
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-1">{projects.length}</div>
                <div className="text-sm font-medium text-slate-600 group-hover:text-slate-800 transition-colors">Total Projects</div>
              </div>
              <div 
                className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-5 shadow-lg border border-blue-200 cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:-translate-y-1"
                onClick={() => setStatusFilter("New")}
              >
                <div className="flex items-center justify-between mb-3">
                  <Plus className="w-8 h-8 text-blue-600 group-hover:text-blue-800 transition-colors" />
                  <div className="w-3 h-3 bg-blue-400 rounded-full group-hover:bg-blue-600 transition-colors"></div>
                </div>
                <div className="text-3xl font-bold text-blue-800 mb-1">
                  {projects.filter(p => p.status === "New").length}
                </div>
                <div className="text-sm font-medium text-blue-600 group-hover:text-blue-800 transition-colors">New Projects</div>
              </div>
              <div 
                className="group bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-5 shadow-lg border border-orange-200 cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:-translate-y-1"
                onClick={() => setStatusFilter("Pending")}
              >
                <div className="flex items-center justify-between mb-3">
                  <Clock className="w-8 h-8 text-orange-600 group-hover:text-orange-800 transition-colors" />
                  <div className="w-3 h-3 bg-orange-400 rounded-full group-hover:bg-orange-600 transition-colors"></div>
                </div>
                <div className="text-3xl font-bold text-orange-800 mb-1">
                  {projects.filter(p => p.status === "Pending").length}
                </div>
                <div className="text-sm font-medium text-orange-600 group-hover:text-orange-800 transition-colors">Pending</div>
              </div>
              <div 
                className="group bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-5 shadow-lg border border-amber-200 cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:-translate-y-1"
                onClick={() => setStatusFilter("In Progress")}
              >
                <div className="flex items-center justify-between mb-3">
                  <Play className="w-8 h-8 text-amber-600 group-hover:text-amber-800 transition-colors" />
                  <div className="w-3 h-3 bg-amber-400 rounded-full group-hover:bg-amber-600 transition-colors"></div>
                </div>
                <div className="text-3xl font-bold text-amber-800 mb-1">
                  {projects.filter(p => p.status === "In Progress").length}
                </div>
                <div className="text-sm font-medium text-amber-600 group-hover:text-amber-800 transition-colors">In Progress</div>
              </div>
              <div 
                className="group bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-5 shadow-lg border border-red-200 cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:-translate-y-1"
                onClick={() => setStatusFilter("Hold")}
              >
                <div className="flex items-center justify-between mb-3">
                  <Pause className="w-8 h-8 text-red-600 group-hover:text-red-800 transition-colors" />
                  <div className="w-3 h-3 bg-red-400 rounded-full group-hover:bg-red-600 transition-colors"></div>
                </div>
                <div className="text-3xl font-bold text-red-800 mb-1">
                  {projects.filter(p => p.status === "Hold").length}
                </div>
                <div className="text-sm font-medium text-red-600 group-hover:text-red-800 transition-colors">Hold</div>
              </div>
              <div 
                className="group bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-5 shadow-lg border border-red-200 cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:-translate-y-1"
                onClick={() => setStatusFilter("Rejected")}
              >
                <div className="flex items-center justify-between mb-3">
                  <XCircle className="w-8 h-8 text-red-500 group-hover:text-red-700 transition-colors" />
                  <div className="w-3 h-3 bg-red-400 rounded-full group-hover:bg-red-600 transition-colors"></div>
                </div>
                <div className="text-3xl font-bold text-red-700 mb-1">
                  {projects.filter(p => p.status === "Rejected").length}
                </div>
                <div className="text-sm font-medium text-red-500 group-hover:text-red-700 transition-colors">Rejected</div>
              </div>
              <div 
                className="group bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-5 shadow-lg border border-green-200 cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:-translate-y-1"
                onClick={() => setStatusFilter("Completed")}
              >
                <div className="flex items-center justify-between mb-3">
                  <CheckCircle className="w-8 h-8 text-green-600 group-hover:text-green-800 transition-colors" />
                  <div className="w-3 h-3 bg-green-400 rounded-full group-hover:bg-green-600 transition-colors"></div>
                </div>
                <div className="text-3xl font-bold text-green-800 mb-1">
                  {projects.filter(p => p.status === "Completed").length}
                </div>
                <div className="text-sm font-medium text-green-600 group-hover:text-green-800 transition-colors">Completed</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {/* PROJECT LIST */}
          <div className="space-y-4">
            {filteredProjects.length === 0 && (
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-16 text-center shadow-lg border border-gray-200">
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-indigo-500" />
                </div>
                <p className="text-gray-600 text-2xl font-bold mb-2">No projects found</p>
                <p className="text-gray-500 text-lg">Try adjusting your search criteria or create a new project</p>
                <div className="mt-6 flex justify-center">
                  <div className="w-16 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
                </div>
              </div>
            )}

            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => navigate(`/super-admin/projects/${project.id}`)}
                className="cursor-pointer bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg border-2 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] border-gray-200 hover:border-indigo-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h2 className="font-bold text-xl text-gray-800 mb-2 hover:text-indigo-700 transition-colors">
                      {project.projectName}
                    </h2>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                        <User className="w-3 h-3 text-blue-600" />
                      </div>
                      <span>Client: <span className="font-semibold text-gray-800">{project.clientName}</span></span>
                    </div>
                  </div>

                  <span
                    className={`px-4 py-2 text-xs rounded-xl font-bold border-2 shadow-sm
                    ${getStatusColor(project.status)}`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm bg-gray-100 px-3 py-1 rounded-lg">
                      <div className="w-4 h-4 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                        <User className="w-2.5 h-2.5 text-gray-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{project.leader}</span>
                    </div>
                    {project.projectManager && (
                      <div className="flex items-center gap-2 text-sm bg-blue-100 px-3 py-1 rounded-lg">
                        <div className="w-4 h-4 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full flex items-center justify-center">
                          <User className="w-2.5 h-2.5 text-blue-600" />
                        </div>
                        <span className="text-blue-700 font-medium">PM: {project.projectManager}</span>
                      </div>
                    )}
                    <span className={`px-3 py-1 text-xs rounded-lg font-bold border-2 ${getPriorityColor(project.priority)}`}>
                      {project.priority}
                    </span>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center group-hover:from-indigo-100 group-hover:to-indigo-200 transition-all">
                    <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-indigo-600 transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>



        </div>

        {/* ASSIGN PROJECT MANAGER MODAL */}
        {showAssignModal && selectedProjectForAssign && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 mx-4">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Assign Project Manager</h3>
                <p className="text-gray-600 text-sm">
                  Assign a project manager for "{selectedProjectForAssign.projectName}"
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Project Manager
                  </label>
                  <select
                    value={assignedPM}
                    onChange={(e) => setAssignedPM(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none"
                  >
                    <option value="">Select a manager...</option>
                    {projectManagers.map((pm) => (
                      <option key={pm} value={pm}>
                        {pm}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Or Enter Custom Name/ID
                  </label>
                  <input
                    type="text"
                    value={assignedPM}
                    onChange={(e) => setAssignedPM(e.target.value)}
                    placeholder="Enter project manager name or ID"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none"
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setShowAssignModal(false)}
                  className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={assignProjectManager}
                  disabled={!assignedPM.trim()}
                  className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Assign & Accept
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
  );
};

export default AllProjects;