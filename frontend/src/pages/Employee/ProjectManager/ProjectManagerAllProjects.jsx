/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Search,
  User,
  Calendar,
  Flag,
  FileText,
  Download,
  ChevronRight,
  BarChart3,
  Plus,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Play,
  Pause,
  Edit,
  Trash2,
  MoreVertical,
  Users,
  ChevronDown,
  ChevronUp,
  Paperclip,
  Upload,
  AlertCircle,
  X
} from 'lucide-react';

// Sample projects data - in real app this would come from API
const initialProjectsData = [
  {
    id: 1,
    projectName: "Client Website Revamp",
    clientName: "ABC Pvt Ltd",
    leader: "Sangram Singh",
    projectManager: "John Doe",
    status: "New", // New projects from Super Admin
    priority: "High",
    description: "Redesign and develop a responsive company website with dashboard.",
    startDate: "2024-01-15",
    endDate: "2024-03-15",
    budget: "$25,000",
    attachments: [
      {
        name: "Requirements.pdf",
        size: "2.4 MB",
        url: "/files/requirements.pdf",
      },
    ],
    teams: [],
    progress: 0
  },
  {
    id: 2,
    projectName: "Mobile App UI",
    clientName: "XYZ Solutions",
    leader: "Rinku Sahoo",
    projectManager: "",
    status: "In Progress", // Active projects
    priority: "Medium",
    description: "Create mobile-first UI screens for Android & iOS application.",
    startDate: "2024-01-10",
    endDate: "2024-04-10",
    budget: "$18,000",
    attachments: [],
    teams: [
      {
        id: 1,
        name: "UI/UX Team",
        lead: "Alice Johnson",
        members: ["Bob Smith", "Charlie Brown", "Diana Prince"],
        status: "Active",
        taskCount: 8,
        tasksOpen: 3,
        tasksInProgress: 3,
        tasksDone: 2
      }
    ],
    progress: 35
  },
  {
    id: 3,
    projectName: "E-commerce Platform",
    clientName: "TechCorp",
    leader: "Alice Johnson",
    projectManager: "Bob Smith",
    status: "Pending", // Projects waiting for approval/start
    priority: "High",
    description: "Build a full-featured e-commerce platform with payment integration.",
    startDate: "2024-02-01",
    endDate: "2024-06-01",
    budget: "$45,000",
    attachments: [],
    teams: [],
    progress: 0
  },
  {
    id: 4,
    projectName: "Data Analytics Dashboard",
    clientName: "DataFlow Inc",
    leader: "Mike Wilson",
    projectManager: "Sarah Davis",
    status: "Completed",
    priority: "Medium",
    description: "Create comprehensive analytics dashboard for business intelligence.",
    startDate: "2023-11-01",
    endDate: "2024-01-15",
    budget: "$30,000",
    attachments: [
      {
        name: "Analytics_Specs.pdf",
        size: "1.8 MB",
        url: "/files/analytics_specs.pdf",
      },
    ],
    teams: [
      {
        id: 1,
        name: "Analytics Team",
        lead: "Tom Anderson",
        members: ["Lisa Garcia", "Kevin Lee"],
        status: "Completed",
        taskCount: 12,
        tasksOpen: 0,
        tasksInProgress: 0,
        tasksDone: 12
      }
    ],
    progress: 100
  }
];

// Sample team leads and employees data
const teamLeadsData = [
  { id: 1, name: "Alice Johnson", department: "Frontend", experience: "5 years" },
  { id: 2, name: "Bob Smith", department: "Backend", experience: "7 years" },
  { id: 3, name: "Charlie Brown", department: "UI/UX", experience: "4 years" },
  { id: 4, name: "Diana Prince", department: "Mobile", experience: "6 years" },
  { id: 5, name: "Tom Anderson", department: "Data Science", experience: "8 years" }
];

const employeesData = [
  { id: 1, name: "Lisa Garcia", department: "Frontend", role: "Developer" },
  { id: 2, name: "Kevin Lee", department: "Backend", role: "Developer" },
  { id: 3, name: "Maria Rodriguez", department: "UI/UX", role: "Designer" },
  { id: 4, name: "James Wilson", department: "Mobile", role: "Developer" },
  { id: 5, name: "Sarah Davis", department: "Frontend", role: "Developer" },
  { id: 6, name: "Mike Johnson", department: "Backend", role: "Developer" },
  { id: 7, name: "Emma Taylor", department: "Data Science", role: "Analyst" },
  { id: 8, name: "David Brown", department: "DevOps", role: "Engineer" }
];

const ProjectManagerAllProjects = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [projects, setProjects] = useState(initialProjectsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showTeamModal, setShowTeamModal] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState({});
  const [selectedProjectForTeam, setSelectedProjectForTeam] = useState(null);
  const [editingProject, setEditingProject] = useState(null);


  // New team form state
  const [newTeam, setNewTeam] = useState({
    name: "",
    description: "",
    lead: "",
    status: "Active",
    members: [],
    attachments: []
  });

  // Team editing state
  const [editingTeam, setEditingTeam] = useState(null);
  const [showEmployeeSelection, setShowEmployeeSelection] = useState(false);
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [employeeSearchTerm, setEmployeeSearchTerm] = useState("");

  const itemsPerPage = 10;

  // Filter projects based on search and filters
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === "All" || project.status === statusFilter;
    const matchesPriority = priorityFilter === "All" || project.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  // Pagination
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

  // Status update functions
  const updateStatus = (id, status) => {
    setProjects(prev =>
      prev.map(p => p.id === id ? { ...p, status } : p)
    );
  };

  const acceptProject = (id) => {
    updateStatus(id, "In Progress");
  };

  const rejectProject = (id) => {
    updateStatus(id, "Rejected");
  };

  const holdProject = (id) => {
    updateStatus(id, "Hold");
  };

  const completeProject = (id) => {
    updateStatus(id, "Completed");
  };

  // Project CRUD functions

  const updateProject = () => {
    if (!editingProject) return;

    setProjects(prev =>
      prev.map(p => p.id === editingProject.id ? editingProject : p)
    );
    setEditingProject(null);
  };

  const deleteProject = (id) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  const viewProjectDetails = (project) => {
    navigate(`/employee/projectmanager/project/${project.id}`);
  };

  // Team management functions
  const createTeam = () => {
    if (!selectedProjectForTeam || !newTeam.name.trim()) return;

    const team = {
      id: selectedProjectForTeam.teams.length > 0 ? Math.max(...selectedProjectForTeam.teams.map(t => t.id)) + 1 : 1,
      ...newTeam,
      taskCount: 0,
      tasksOpen: 0,
      tasksInProgress: 0,
      tasksDone: 0
    };

    setProjects(prev =>
      prev.map(p =>
        p.id === selectedProjectForTeam.id
          ? { ...p, teams: [...p.teams, team] }
          : p
      )
    );

    setNewTeam({
      name: "",
      description: "",
      lead: "",
      status: "Active",
      members: [],
      attachments: []
    });
    setShowTeamModal(false);
    setSelectedProjectForTeam(null);
  };

  const deleteTeam = (projectId, teamId) => {
    setProjects(prev =>
      prev.map(p =>
        p.id === projectId
          ? { ...p, teams: p.teams.filter(t => t.id !== teamId) }
          : p
      )
    );
  };

  // Team editing functions
  const editTeam = (projectId, teamId) => {
    const project = projects.find(p => p.id === projectId);
    const team = project.teams.find(t => t.id === teamId);
    setEditingTeam({ ...team, projectId });
    setNewTeam({
      name: team.name,
      description: team.description,
      lead: team.lead,
      status: team.status,
      members: team.members,
      attachments: team.attachments
    });
    setSelectedProjectForTeam(project);
    setShowTeamModal(true);
  };

  const updateTeam = () => {
    if (!editingTeam || !newTeam.name.trim()) return;

    setProjects(prev =>
      prev.map(p =>
        p.id === editingTeam.projectId
          ? {
            ...p,
            teams: p.teams.map(t =>
              t.id === editingTeam.id
                ? { ...t, ...newTeam }
                : t
            )
          }
          : p
      )
    );

    setNewTeam({
      name: "",
      description: "",
      lead: "",
      status: "Active",
      members: [],
      attachments: []
    });
    setShowTeamModal(false);
    setEditingTeam(null);
    setSelectedProjectForTeam(null);
  };

  // Employee selection functions
  const openEmployeeSelection = () => {
    setShowEmployeeSelection(true);
    setSelectedEmployees(newTeam.members);
  };

  const closeEmployeeSelection = () => {
    setShowEmployeeSelection(false);
    setEmployeeSearchTerm("");
  };

  const toggleEmployeeSelection = (employeeId) => {
    setSelectedEmployees(prev =>
      prev.includes(employeeId)
        ? prev.filter(id => id !== employeeId)
        : [...prev, employeeId]
    );
  };

  const confirmEmployeeSelection = () => {
    setNewTeam(prev => ({ ...prev, members: selectedEmployees }));
    closeEmployeeSelection();
  };

  // Attachment handling
  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const newAttachments = files.map(file => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: file.size,
      type: file.type,
      url: URL.createObjectURL(file)
    }));
    setNewTeam(prev => ({
      ...prev,
      attachments: [...prev.attachments, ...newAttachments]
    }));
  };

  const removeAttachment = (attachmentId) => {
    setNewTeam(prev => ({
      ...prev,
      attachments: prev.attachments.filter(a => a.id !== attachmentId)
    }));
  };

  // Utility functions
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

  const toggleProjectExpansion = (projectId) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  // Stats calculations
  const stats = {
    total: projects.length,
    new: projects.filter(p => p.status === "New").length,
    inProgress: projects.filter(p => p.status === "In Progress").length,
    completed: projects.filter(p => p.status === "Completed").length,
    pending: projects.filter(p => p.status === "Pending").length,
    hold: projects.filter(p => p.status === "Hold").length
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
            Project Management Dashboard
          </h1>
          <p className="text-slate-600">
            Manage projects assigned by Super Admin, create teams, and track progress
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
          <div
            onClick={() => setStatusFilter("All")}
            className={`bg-white rounded-lg shadow-sm p-4 border cursor-pointer transition-all hover:shadow-md ${statusFilter === "All" ? "border-indigo-500 bg-indigo-50" : "border-slate-200"
              }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Total Projects</p>
                <p className="text-2xl font-bold text-slate-800">{stats.total}</p>
              </div>
              <BarChart3 className="w-8 h-8 text-slate-400" />
            </div>
          </div>

          <div
            onClick={() => setStatusFilter("New")}
            className={`bg-white rounded-lg shadow-sm p-4 border cursor-pointer transition-all hover:shadow-md ${statusFilter === "New" ? "border-blue-500 bg-blue-50" : "border-slate-200"
              }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">New Projects</p>
                <p className="text-2xl font-bold text-blue-600">{stats.new}</p>
              </div>
              <Plus className="w-8 h-8 text-blue-400" />
            </div>
          </div>

          <div
            onClick={() => setStatusFilter("In Progress")}
            className={`bg-white rounded-lg shadow-sm p-4 border cursor-pointer transition-all hover:shadow-md ${statusFilter === "In Progress" ? "border-amber-500 bg-amber-50" : "border-slate-200"
              }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">In Progress</p>
                <p className="text-2xl font-bold text-amber-600">{stats.inProgress}</p>
              </div>
              <Play className="w-8 h-8 text-amber-400" />
            </div>
          </div>

          <div
            onClick={() => setStatusFilter("Completed")}
            className={`bg-white rounded-lg shadow-sm p-4 border cursor-pointer transition-all hover:shadow-md ${statusFilter === "Completed" ? "border-green-500 bg-green-50" : "border-slate-200"
              }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Completed</p>
                <p className="text-2xl font-bold text-green-600">{stats.completed}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
          </div>

          <div
            onClick={() => setStatusFilter("Pending")}
            className={`bg-white rounded-lg shadow-sm p-4 border cursor-pointer transition-all hover:shadow-md ${statusFilter === "Pending" ? "border-orange-500 bg-orange-50" : "border-slate-200"
              }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Pending</p>
                <p className="text-2xl font-bold text-orange-600">{stats.pending}</p>
              </div>
              <Clock className="w-8 h-8 text-orange-400" />
            </div>
          </div>

          <div
            onClick={() => setStatusFilter("Hold")}
            className={`bg-white rounded-lg shadow-sm p-4 border cursor-pointer transition-all hover:shadow-md ${statusFilter === "Hold" ? "border-red-500 bg-red-50" : "border-slate-200"
              }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">On Hold</p>
                <p className="text-2xl font-bold text-red-600">{stats.hold}</p>
              </div>
              <Pause className="w-8 h-8 text-red-400" />
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-6 border border-slate-200">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-2">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="All">All Status</option>
                <option value="New">New</option>
                <option value="In Progress">In Progress</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
                <option value="Hold">Hold</option>
                <option value="Rejected">Rejected</option>
              </select>

              <select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
                className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="All">All Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-4">
          {paginatedProjects.length > 0 ? (
            paginatedProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => viewProjectDetails(project)}
              >
                {/* Project Header */}
                <div className="p-4 md:p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3
                              className="text-lg md:text-xl font-semibold text-slate-800 hover:text-indigo-600 cursor-pointer transition-colors"
                            >
                              {project.projectName}
                            </h3>
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
                              {project.status}
                            </span>
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${getPriorityColor(project.priority)}`}>
                              {project.priority}
                            </span>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-slate-600 mb-3">
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4" />
                              <span>{project.clientName}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{project.startDate} - {project.endDate}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Flag className="w-4 h-4" />
                              <span>{project.leader}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <BarChart3 className="w-4 h-4" />
                              <span>Progress: {project.progress}%</span>
                            </div>
                          </div>

                          <p className="text-slate-700 text-sm mb-3 line-clamp-2">
                            {project.description}
                          </p>

                          {/* Progress Bar */}
                          <div className="w-full bg-slate-200 rounded-full h-2 mb-3">
                            <div
                              className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-2">
                      {project.status === "New" && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              acceptProject(project.id);
                            }}
                            className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm flex items-center gap-1"
                          >
                            <Play className="w-4 h-4" />
                            Start Project
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              rejectProject(project.id);
                            }}
                            className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm flex items-center gap-1"
                          >
                            <XCircle className="w-4 h-4" />
                            Reject
                          </button>
                        </>
                      )}

                      {project.status === "In Progress" && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              holdProject(project.id);
                            }}
                            className="bg-yellow-600 text-white px-3 py-2 rounded-lg hover:bg-yellow-700 transition-colors text-sm flex items-center gap-1"
                          >
                            <Pause className="w-4 h-4" />
                            Hold
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              completeProject(project.id);
                            }}
                            className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm flex items-center gap-1"
                          >
                            <CheckCircle className="w-4 h-4" />
                            Complete
                          </button>
                        </>
                      )}

                      {project.status === "Hold" && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            updateStatus(project.id, "In Progress");
                          }}
                          className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm flex items-center gap-1"
                        >
                          <Play className="w-4 h-4" />
                          Resume
                        </button>
                      )}

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleProjectExpansion(project.id);
                        }}
                        className="bg-slate-600 text-white px-3 py-2 rounded-lg hover:bg-slate-700 transition-colors text-sm flex items-center gap-1"
                      >
                        {expandedProjects[project.id] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        Teams ({project.teams?.length || 0})
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setEditingProject(project);
                        }}
                        className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm flex items-center gap-1"
                      >
                        <Edit className="w-4 h-4" />
                        Edit
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteProject(project.id);
                        }}
                        className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm flex items-center gap-1"
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>

                {/* Teams Section */}
                {expandedProjects[project.id] && (
                  <div
                    className="border-t border-slate-200 bg-slate-50 p-4 md:p-6"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-slate-800">Teams</h4>
                      {project.status === "In Progress" && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProjectForTeam(project);
                            setShowTeamModal(true);
                          }}
                          className="bg-indigo-600 text-white px-3 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-sm flex items-center gap-1"
                        >
                          <Plus className="w-4 h-4" />
                          Add Team
                        </button>
                      )}
                    </div>

                    {project.teams && project.teams.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {project.teams.map((team) => (
                          <div key={team.id} className="bg-white rounded-lg p-4 border border-slate-200">
                            <div className="flex items-center justify-between mb-3">
                              <h5 className="font-semibold text-slate-800">{team.name}</h5>
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => editTeam(project.id, team.id)}
                                  className="text-blue-600 hover:text-blue-800"
                                  title="Edit Team"
                                >
                                  <Edit className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => deleteTeam(project.id, team.id)}
                                  className="text-red-600 hover:text-red-800"
                                  title="Delete Team"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </div>

                            <div className="space-y-2 text-sm text-slate-600">
                              <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Lead: {team.lead}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                <span>Members: {team.members.length}</span>
                              </div>
                              {team.members.length > 0 && (
                                <div className="ml-6 text-xs text-slate-500">
                                  {team.members.slice(0, 2).map(memberId => {
                                    const employee = employeesData.find(e => e.id === memberId);
                                    return employee ? employee.name : 'Unknown';
                                  }).join(', ')}
                                  {team.members.length > 2 && ` +${team.members.length - 2} more`}
                                </div>
                              )}
                              <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4" />
                                <span>Tasks: {team.taskCount} ({team.tasksDone}/{team.taskCount} done)</span>
                              </div>
                              {team.attachments && team.attachments.length > 0 && (
                                <div className="flex items-center gap-2">
                                  <FileText className="w-4 h-4" />
                                  <span>Attachments: {team.attachments.length}</span>
                                </div>
                              )}
                              <div className="flex items-center gap-2">
                                <span className={`px-2 py-1 rounded-full text-xs ${team.status === 'Active' ? 'bg-green-100 text-green-700' :
                                  team.status === 'Inactive' ? 'bg-red-100 text-red-700' :
                                    'bg-yellow-100 text-yellow-700'
                                  }`}>
                                  {team.status}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8 text-slate-500">
                        <Users className="w-12 h-12 mx-auto mb-3 opacity-50" />
                        <p>No teams assigned to this project yet.</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Attachments Section */}
                <div className="mt-6 pt-4 border-t border-slate-200">
                  <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-600" />
                    Project Attachments
                  </h4>

                  {project.attachments && project.attachments.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {project.attachments.map((attachment, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-slate-100 rounded-lg">
                          <div className="flex items-center gap-3">
                            <FileText className="w-5 h-5 text-slate-500" />
                            <div>
                              <p className="font-medium text-slate-800 text-sm">{attachment.name}</p>
                              <p className="text-xs text-slate-500">{attachment.size}</p>
                            </div>
                          </div>
                          <button className="text-blue-600 hover:text-blue-800">
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-6 text-slate-500">
                      <FileText className="w-12 h-12 mx-auto mb-3 opacity-50" />
                      <p>No attachments uploaded for this project.</p>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center border border-slate-200">
              <BarChart3 className="w-16 h-16 mx-auto mb-4 text-slate-400" />
              <h3 className="text-lg font-semibold text-slate-800 mb-2">No projects found</h3>
              <p className="text-slate-600">
                {searchTerm || statusFilter !== "All" || priorityFilter !== "All"
                  ? "Try adjusting your search or filters."
                  : "Get started by creating your first project."}
              </p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-6">
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-2 border rounded-lg ${currentPage === page
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'border-slate-300 hover:bg-slate-50'
                    }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Employee Selection Modal */}
        {showEmployeeSelection && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-slate-800">Select Team Members</h2>
                  <button
                    onClick={closeEmployeeSelection}
                    className="text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Search */}
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Search employees..."
                    value={employeeSearchTerm}
                    onChange={(e) => setEmployeeSearchTerm(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                {/* Employee List */}
                <div className="max-h-96 overflow-y-auto border border-slate-200 rounded-lg">
                  {employeesData
                    .filter(employee =>
                      employee.name.toLowerCase().includes(employeeSearchTerm.toLowerCase()) ||
                      employee.department.toLowerCase().includes(employeeSearchTerm.toLowerCase())
                    )
                    .map(employee => (
                      <div
                        key={employee.id}
                        className="flex items-center justify-between p-3 border-b border-slate-100 hover:bg-slate-50"
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={selectedEmployees.includes(employee.id)}
                            onChange={() => toggleEmployeeSelection(employee.id)}
                            className="w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500"
                          />
                          <div>
                            <div className="font-medium text-slate-800">{employee.name}</div>
                            <div className="text-sm text-slate-500">{employee.department} • {employee.role}</div>
                          </div>
                        </div>
                        <div className="text-sm text-slate-500">
                          {employee.experience} years exp
                        </div>
                      </div>
                    ))}
                </div>

                {/* Selected Count */}
                <div className="mt-4 text-sm text-slate-600">
                  {selectedEmployees.length} employee{selectedEmployees.length !== 1 ? 's' : ''} selected
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-3 mt-6">
                  <button
                    onClick={closeEmployeeSelection}
                    className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmEmployeeSelection}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Confirm Selection ({selectedEmployees.length})
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Edit Project Modal */}
        {editingProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-slate-800">Edit Project</h2>
                  <button
                    onClick={() => setEditingProject(null)}
                    className="text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Basic Information */}
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">Basic Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Project Name *
                        </label>
                        <input
                          type="text"
                          value={editingProject.projectName}
                          onChange={(e) => setEditingProject({ ...editingProject, projectName: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Enter project name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Client Name *
                        </label>
                        <input
                          type="text"
                          value={editingProject.clientName}
                          onChange={(e) => setEditingProject({ ...editingProject, clientName: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Enter client name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Project Leader
                        </label>
                        <input
                          type="text"
                          value={editingProject.leader}
                          onChange={(e) => setEditingProject({ ...editingProject, leader: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Enter project leader name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Status
                        </label>
                        <select
                          value={editingProject.status}
                          onChange={(e) => setEditingProject({ ...editingProject, status: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        >
                          <option value="New">New</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Pending">Pending</option>
                          <option value="Hold">Hold</option>
                          <option value="Completed">Completed</option>
                          <option value="Rejected">Rejected</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Description
                      </label>
                      <textarea
                        value={editingProject.description}
                        onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
                        rows={3}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter project description"
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">Project Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Start Date
                        </label>
                        <input
                          type="date"
                          value={editingProject.startDate}
                          onChange={(e) => setEditingProject({ ...editingProject, startDate: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          End Date
                        </label>
                        <input
                          type="date"
                          value={editingProject.endDate}
                          onChange={(e) => setEditingProject({ ...editingProject, endDate: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Budget
                        </label>
                        <input
                          type="text"
                          value={editingProject.budget}
                          onChange={(e) => setEditingProject({ ...editingProject, budget: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="$0.00"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Status
                        </label>
                        <select
                          value={editingProject.status}
                          onChange={(e) => setEditingProject({ ...editingProject, status: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        >
                          <option value="New">New</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Hold">Hold</option>
                          <option value="Completed">Completed</option>
                          <option value="Rejected">Rejected</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Priority
                        </label>
                        <select
                          value={editingProject.priority}
                          onChange={(e) => setEditingProject({ ...editingProject, priority: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        >
                          <option value="Low">Low</option>
                          <option value="Medium">Medium</option>
                          <option value="High">High</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Progress (%)
                        </label>
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={editingProject.progress}
                          onChange={(e) => setEditingProject({ ...editingProject, progress: parseInt(e.target.value) || 0 })}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="0"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Teams Management */}
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-blue-600" />
                        Teams ({editingProject.teams?.length || 0})
                      </span>
                      {editingProject.status === "In Progress" && (
                        <button
                          onClick={() => {
                            setSelectedProjectForTeam(editingProject);
                            setShowTeamModal(true);
                          }}
                          className="bg-indigo-600 text-white px-3 py-1 rounded-lg hover:bg-indigo-700 transition-colors text-sm flex items-center gap-1"
                        >
                          <Plus className="w-4 h-4" />
                          Add Team
                        </button>
                      )}
                    </h3>

                    {editingProject.teams && editingProject.teams.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {editingProject.teams.map((team) => (
                          <div key={team.id} className="bg-white rounded-lg p-4 border border-slate-200">
                            <div className="flex items-center justify-between mb-3">
                              <h5 className="font-semibold text-slate-800">{team.name}</h5>
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => editTeam(editingProject.id, team.id)}
                                  className="text-blue-600 hover:text-blue-800"
                                  title="Edit Team"
                                >
                                  <Edit className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => deleteTeam(editingProject.id, team.id)}
                                  className="text-red-600 hover:text-red-800"
                                  title="Delete Team"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </div>

                            <div className="space-y-2 text-sm text-slate-600">
                              <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Lead: {team.lead}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                <span>Members: {team.members.length}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4" />
                                <span>Tasks: {team.taskCount} ({team.tasksDone}/{team.taskCount} done)</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className={`px-2 py-1 rounded-full text-xs ${team.status === 'Active' ? 'bg-green-100 text-green-700' :
                                  team.status === 'Inactive' ? 'bg-red-100 text-red-700' :
                                    'bg-yellow-100 text-yellow-700'
                                  }`}>
                                  {team.status}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8 text-slate-500">
                        <Users className="w-12 h-12 mx-auto mb-3 opacity-50" />
                        <p>No teams assigned to this project yet.</p>
                        {editingProject.status === "In Progress" && (
                          <p className="text-sm mt-2">Click "Add Team" to create your first team.</p>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Attachments Management */}
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-blue-600" />
                      Project Attachments
                    </h3>

                    <div className="mb-4">
                      <input
                        type="file"
                        multiple
                        onChange={(event) => {
                          const files = Array.from(event.target.files);
                          const newAttachments = files.map(file => ({
                            name: file.name,
                            size: `${(file.size / 1024).toFixed(1)} KB`,
                            url: URL.createObjectURL(file),
                          }));
                          setEditingProject(prev => ({
                            ...prev,
                            attachments: [...(prev.attachments || []), ...newAttachments]
                          }));
                        }}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                      />
                    </div>

                    {editingProject.attachments && editingProject.attachments.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {editingProject.attachments.map((attachment, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200">
                            <div className="flex items-center gap-3">
                              <FileText className="w-5 h-5 text-slate-500" />
                              <div>
                                <p className="font-medium text-slate-800 text-sm">{attachment.name}</p>
                                <p className="text-xs text-slate-500">{attachment.size}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <button className="text-blue-600 hover:text-blue-800">
                                <Download className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => {
                                  setEditingProject(prev => ({
                                    ...prev,
                                    attachments: prev.attachments.filter((_, i) => i !== index)
                                  }));
                                }}
                                className="text-red-600 hover:text-red-800"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-6 text-slate-500">
                        <FileText className="w-12 h-12 mx-auto mb-3 opacity-50" />
                        <p>No attachments uploaded for this project.</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-200">
                  <button
                    onClick={() => {
                      if (window.confirm('Are you sure you want to delete this project?')) {
                        deleteProject(editingProject.id);
                        setEditingProject(null);
                      }
                    }}
                    className="px-4 py-2 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition-colors flex items-center gap-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete Project
                  </button>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setEditingProject(null)}
                      className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={updateProject}
                      className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      Update Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}



        {/* New Team Modal */}
        {showTeamModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-slate-800">
                    {editingTeam ? 'Edit Team' : 'Create New Team'}
                  </h2>
                  <button
                    onClick={() => {
                      setShowTeamModal(false);
                      setEditingTeam(null);
                      setNewTeam({
                        name: "",
                        description: "",
                        lead: "",
                        status: "Active",
                        members: [],
                        attachments: []
                      });
                    }}
                    className="text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Project Information */}
                {selectedProjectForTeam && (
                  <div className="bg-slate-50 p-4 rounded-lg mb-6">
                    <h3 className="font-medium text-slate-700 mb-2">Project Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-slate-500">Name:</span>
                        <span className="ml-2 font-medium">{selectedProjectForTeam.name}</span>
                      </div>
                      <div>
                        <span className="text-slate-500">Status:</span>
                        <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedProjectForTeam.status)}`}>
                          {selectedProjectForTeam.status}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-500">Priority:</span>
                        <span className="ml-2 font-medium">{selectedProjectForTeam.priority}</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Team Name *
                      </label>
                      <input
                        type="text"
                        value={newTeam.name}
                        onChange={(e) => setNewTeam({ ...newTeam, name: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter team name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Team Lead *
                      </label>
                      <select
                        value={newTeam.lead}
                        onChange={(e) => setNewTeam({ ...newTeam, lead: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="">Select Team Lead</option>
                        {teamLeadsData.map(lead => (
                          <option key={lead.id} value={lead.name}>
                            {lead.name} - {lead.department}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Description
                      </label>
                      <textarea
                        value={newTeam.description}
                        onChange={(e) => setNewTeam({ ...newTeam, description: e.target.value })}
                        rows={3}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter team description"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Status
                      </label>
                      <select
                        value={newTeam.status}
                        onChange={(e) => setNewTeam({ ...newTeam, status: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                        <option value="On Hold">On Hold</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Team Members ({newTeam.members.length} selected)
                      </label>
                      <button
                        onClick={openEmployeeSelection}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
                      >
                        <Users className="w-4 h-4" />
                        Select Team Members
                      </button>
                      {newTeam.members.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1">
                          {newTeam.members.slice(0, 3).map(memberId => {
                            const employee = employeesData.find(e => e.id === memberId);
                            return employee ? (
                              <span key={memberId} className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-indigo-100 text-indigo-700">
                                {employee.name}
                              </span>
                            ) : null;
                          })}
                          {newTeam.members.length > 3 && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-slate-100 text-slate-600">
                              +{newTeam.members.length - 3} more
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Attachments ({newTeam.attachments.length})
                      </label>
                      <input
                        type="file"
                        multiple
                        onChange={handleFileUpload}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                      />
                      {newTeam.attachments.length > 0 && (
                        <div className="mt-2 space-y-1">
                          {newTeam.attachments.map(attachment => (
                            <div key={attachment.id} className="flex items-center justify-between bg-slate-50 p-2 rounded">
                              <div className="flex items-center gap-2">
                                <FileText className="w-4 h-4 text-slate-500" />
                                <span className="text-sm text-slate-700 truncate">{attachment.name}</span>
                                <span className="text-xs text-slate-500">
                                  ({(attachment.size / 1024).toFixed(1)} KB)
                                </span>
                              </div>
                              <button
                                onClick={() => removeAttachment(attachment.id)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-3 mt-6">
                  <button
                    onClick={() => {
                      setShowTeamModal(false);
                      setEditingTeam(null);
                      setNewTeam({
                        name: "",
                        description: "",
                        lead: "",
                        status: "Active",
                        members: [],
                        attachments: []
                      });
                    }}
                    className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={editingTeam ? updateTeam : createTeam}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    {editingTeam ? 'Update Team' : 'Create Team'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectManagerAllProjects;