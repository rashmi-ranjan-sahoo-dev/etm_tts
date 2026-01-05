

/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { ChevronDown, ChevronUp, Plus, Users, CheckCircle, Clock, AlertCircle, X, Edit, Trash2, MoreVertical, Search, Paperclip, Upload, FileText, Download } from "lucide-react";

const AddProjects = () => {
  const [projects, setProjects] = useState([
    // {
    //   id: 1,
    //   name: "E-Commerce Platform",
    //   code: "ECOM-2024",
    //   client: "TechCorp Inc.",
    //   manager: "Sarah Johnson",
    //   startDate: "2024-01-15",
    //   endDate: "2024-06-30",
    //   status: "Active",
    //   priority: "High",
    //   attachments: [],
    //   teams: [
    //     {
    //       id: 1,
    //       name: "Frontend Team",
    //       lead: "Rahul Sharma",
    //       members: 5,
    //       taskCount: 12,
    //       tasksOpen: 7,
    //       tasksInProgress: 3,
    //       tasksDone: 2,
    //       status: "Active",
    //       attachments: [],
    //     },
    //     {
    //       id: 2,
    //       name: "Backend Team",
    //       lead: "Priya Patel",
    //       members: 4,
    //       taskCount: 15,
    //       tasksOpen: 5,
    //       tasksInProgress: 6,
    //       tasksDone: 4,
    //       status: "Active",
    //       attachments: [],
    //     },
    //   ],
    // },
    // {
    //   id: 2,
    //   name: "Mobile App Redesign",
    //   code: "MOB-2024",
    //   client: "StartupXYZ",
    //   manager: "Michael Chen",
    //   startDate: "2024-02-01",
    //   endDate: "2024-05-15",
    //   status: "On Hold",
    //   priority: "Medium",
    //   attachments: [],
    //   teams: [
    //     {
    //       id: 3,
    //       name: "UI/UX Team",
    //       lead: "Anita Desai",
    //       members: 3,
    //       taskCount: 8,
    //       tasksOpen: 3,
    //       tasksInProgress: 4,
    //       tasksDone: 1,
    //       status: "Active",
    //       attachments: [],
    //     },
    //   ],
    // },
  ]);

  const [expandedProjects, setExpandedProjects] = useState({});
  const [showCreateTeamModal, setShowCreateTeamModal] = useState(false);
  const [showCreateProjectModal, setShowCreateProjectModal] = useState(false);
  const [showProjectSelector, setShowProjectSelector] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [newTeam, setNewTeam] = useState({
    name: "",
    description: "",
    lead: "",
    status: "Active",
    members: [],
    attachments: [],
  });
  const [newProject, setNewProject] = useState({
    name: "",
    code: "",
    client: "",
    manager: "",
    startDate: "",
    endDate: "",
    status: "Active",
    priority: "Medium",
    description: "",
    attachments: [],
  });
  const [editingTeam, setEditingTeam] = useState(null);
  const [editingProject, setEditingProject] = useState(null);
  const [editingProjectId, setEditingProjectId] = useState(null);

  const toggleProject = (projectId) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  const openCreateTeamModal = (projectId) => {
    setSelectedProjectId(projectId);
    setShowCreateTeamModal(true);
  };

  const closeCreateTeamModal = () => {
    setShowCreateTeamModal(false);
    setEditingTeam(null);
    setNewTeam({
      name: "",
      description: "",
      lead: "",
      status: "Active",
      members: [],
      attachments: [],
    });
  };

  const defaultProjectMeta = {
    status: "Active",
    priority: "Medium",
    startDate: new Date().toISOString().split("T")[0],
    endDate: "",
  };

  const handleCreateTeam = () => {
    if (!newTeam.name || !newTeam.lead) {
      alert("Please fill in required fields");
      return;
    }

    const defaultProjectMeta = {
      status: "Active",
      priority: "Medium",
      startDate: new Date().toISOString().split("T")[0],
      endDate: "",
    };

    setProjects((prev) =>
      prev.map((project) => {
        if (project.id !== selectedProjectId) return project;

        const shouldAutoFill =
          !editingTeam &&
          project.teams.length === 0 &&
          (!project.status || !project.priority || !project.startDate);

        const updatedProject = shouldAutoFill
          ? {
            ...project,
            status: project.status || defaultProjectMeta.status,
            priority: project.priority || defaultProjectMeta.priority,
            startDate: project.startDate || defaultProjectMeta.startDate,
            endDate: project.endDate || defaultProjectMeta.endDate,
          }
          : project;

        if (editingTeam) {
          return {
            ...updatedProject,
            teams: updatedProject.teams.map((team) =>
              team.id === editingTeam.id
                ? {
                  ...team,
                  name: newTeam.name,
                  lead: newTeam.lead,
                  status: newTeam.status,
                  members: newTeam.members.length,
                  attachments: newTeam.attachments,
                }
                : team
            ),
          };
        }

        return {
          ...updatedProject,
          teams: [
            ...updatedProject.teams,
            {
              id: Date.now(),
              name: newTeam.name,
              lead: newTeam.lead,
              members: newTeam.members.length,
              taskCount: 0,
              tasksOpen: 0,
              tasksInProgress: 0,
              tasksDone: 0,
              status: newTeam.status,
              attachments: newTeam.attachments,
            },
          ],
        };
      })
    );

    setEditingTeam(null);
    closeCreateTeamModal();
  };

  const closeCreateProjectModal = () => {
    setShowCreateProjectModal(false);
    setEditingProject(null);
    setNewProject({
      name: "",
      code: "",
      client: "",
      manager: "",
      startDate: "",
      endDate: "",
      status: "Active",
      priority: "Medium",
      description: "",
      attachments: [],
    });
  };

  const handleCreateProject = () => {
    if (!newProject.name || !newProject.code || !newProject.manager) {
      alert("Please fill in required fields (Name, Code, Manager)");
      return;
    }

    if (editingProject) {
      setProjects((prev) =>
        prev.map((project) =>
          project.id === editingProject.id
            ? { ...project, ...newProject }
            : project
        )
      );

      setEditingProject(null);
      closeCreateProjectModal();
      return;
    }
    const project = {
      id: Date.now(),
      ...newProject,
      teams: [],
    };

    setProjects((prev) => [...prev, project]);
    closeCreateProjectModal();
  };

  const handleEditProject = (project) => {
    setEditingProject(project);

    setNewProject({
      name: project.name,
      code: project.code,
      client: project.client,
      manager: project.manager,
      startDate: project.startDate,
      endDate: project.endDate,
      status: project.status,
      priority: project.priority,
      description: project.description || "",
      attachments: project.attachments || [],
    });

    setShowCreateProjectModal(true);
  };

  const handleDeleteTeam = (projectId, teamId) => {
    if (!window.confirm("Are you sure you want to delete this team?")) return;

    setProjects((prev) =>
      prev.map((project) =>
        project.id === projectId
          ? {
            ...project,
            teams: project.teams.filter((team) => team.id !== teamId),
          }
          : project
      )
    );
  };
  
  const handleDeleteProject = (projectId) => {
    if (!window.confirm("Are you sure you want to delete this project?"))
      return;

    setProjects((prev) => prev.filter((project) => project.id !== projectId));
  };

  const handleEditTeam = (projectId, team) => {
    setEditingProjectId(projectId);
    setEditingTeam(team);
    setSelectedProjectId(projectId);

    setNewTeam({
      name: team.name,
      description: "",
      lead: team.lead,
      status: team.status,
      members: [],
      attachments: team.attachments || [],
    });

    setShowCreateTeamModal(true);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "On Hold":
        return "bg-yellow-100 text-yellow-800";
      case "Completed":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800";
      case "Medium":
        return "bg-orange-100 text-orange-800";
      case "Low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredProjects = projects.filter((project) => {
    if (!searchQuery) return true;

    const query = searchQuery.toLowerCase();

    const projectMatch =
      project.name.toLowerCase().includes(query) ||
      project.code.toLowerCase().includes(query) ||
      project.client.toLowerCase().includes(query) ||
      project.manager.toLowerCase().includes(query);

    const teamMatch = project.teams.some(
      (team) =>
        team.name.toLowerCase().includes(query) ||
        team.lead.toLowerCase().includes(query)
    );

    return projectMatch || teamMatch;
  });
  
  const membersList = [
    "John Doe - Developer",
    "Jane Smith - Designer",
    "Mike Johnson - Tester",
    "Sarah Williams - Developer",
    "David Brown - Developer",
  ];

  const handleProjectFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const newAttachments = files.map((file) => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: (file.size / 1024).toFixed(2) + " KB",
      type: file.type,
      uploadDate: new Date().toISOString().split("T")[0],
      url: URL.createObjectURL(file), // Create URL for file preview/download
    }));

    setNewProject({
      ...newProject,
      attachments: [...newProject.attachments, ...newAttachments],
    });
  };

  const handleProjectFileDelete = (attachmentId) => {
    setNewProject({
      ...newProject,
      attachments: newProject.attachments.filter((att) => att.id !== attachmentId),
    });
  };

  const handleTeamFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const newAttachments = files.map((file) => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: (file.size / 1024).toFixed(2) + " KB",
      type: file.type,
      uploadDate: new Date().toISOString().split("T")[0],
      url: URL.createObjectURL(file), // Create URL for file preview/download
    }));

    setNewTeam({
      ...newTeam,
      attachments: [...newTeam.attachments, ...newAttachments],
    });
  };

  const handleTeamFileDelete = (attachmentId) => {
    setNewTeam({
      ...newTeam,
      attachments: newTeam.attachments.filter((att) => att.id !== attachmentId),
    });
  };

  // Handle opening attachment in new tab
  const handleOpenAttachment = (file) => {
    if (file.url) {
      window.open(file.url, '_blank');
    } else {
      alert('File preview not available');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Projects Management
            </h1>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Manage your projects and teams efficiently
            </p>
          </div>
          <button
            onClick={() => setShowCreateProjectModal(true)}
            className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium shadow-lg hover:shadow-xl text-sm sm:text-base"
          >
            <Plus className="w-5 h-5" />
            Create Project
          </button>
        </div>

        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects, teams, clients..."
              className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="text-sm text-gray-600 mt-2">
              Found {filteredProjects.length}{" "}
              {filteredProjects.length === 1 ? "project" : "projects"}
            </p>
          )}
        </div>

        <div className="space-y-4">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-md">
              <Search className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <h3 className="text-lg font-medium text-gray-900 mb-1">
                No projects found
              </h3>
              <p className="text-gray-500">Try adjusting your search query</p>
            </div>
          ) : (
            filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-4 sm:p-6 border-b border-gray-200">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 truncate">
                          {project.name}
                        </h2>
                        <span
                          className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            project.status
                          )}`}
                        >
                          {project.status}
                        </span>
                        <span
                          className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(
                            project.priority
                          )}`}
                        >
                          {project.priority}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        Project Code: {project.code}
                      </p>
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition flex-shrink-0">
                      <MoreVertical className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                    <div>
                      <p className="text-xs text-gray-500">Client</p>
                      <p className="text-sm font-medium text-gray-900">
                        {project.client}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Start Date</p>
                      <p className="text-sm font-medium text-gray-900">
                        {project.startDate}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">End Date</p>
                      <p className="text-sm font-medium text-gray-900">
                        {project.endDate}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Manager</p>
                      <p className="text-sm font-medium text-gray-900">
                        {project.manager}
                      </p>
                    </div>
                  </div>

                  {/* Project Attachments Display */}
                  {project.attachments && project.attachments.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-xs font-medium text-gray-700 mb-2 flex items-center gap-1">
                        <Paperclip className="w-3.5 h-3.5" />
                        Project Attachments ({project.attachments.length})
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                        {project.attachments.map((file) => (
                          <div 
                            key={file.id} 
                            onClick={() => handleOpenAttachment(file)}
                            className="flex items-center gap-2 p-2 bg-gray-50 rounded border border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition cursor-pointer group"
                            title="Click to open attachment"
                          >
                            <FileText className="w-4 h-4 text-blue-600 flex-shrink-0 group-hover:scale-110 transition" />
                            <div className="flex-1 min-w-0">
                              <p className="text-xs text-gray-900 truncate font-medium group-hover:text-blue-700">{file.name}</p>
                              <p className="text-xs text-gray-500">{file.size}</p>
                            </div>
                            <Download className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-600 flex-shrink-0" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="border-b border-gray-200">
                  <button
                    onClick={() => toggleProject(project.id)}
                    className="w-full px-4 sm:px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
                  >
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-gray-600" />
                      <span className="font-semibold text-gray-900 text-sm sm:text-base">
                        Team Details
                      </span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        {project.teams.length}{" "}
                        {project.teams.length === 1 ? "team" : "teams"}
                      </span>
                    </div>
                    {expandedProjects[project.id] ? (
                      <ChevronUp className="w-5 h-5 text-gray-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    )}
                  </button>

                  {expandedProjects[project.id] && (
                    <div className="px-4 sm:px-6 pb-6 pt-2 bg-gray-50">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                        <h3 className="text-sm font-medium text-gray-700">
                          All Teams
                        </h3>
                        <button
                          onClick={() => openCreateTeamModal(project.id)}
                          className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium"
                        >
                          <Plus className="w-4 h-4" />
                          Create New Team
                        </button>
                      </div>

                      <div className="space-y-3">
                        {project.teams.map((team) => (
                          <div
                            key={team.id}
                            className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex-1 min-w-0">
                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                                    {team.name}
                                  </h4>
                                  <span
                                    className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(
                                      team.status
                                    )}`}
                                  >
                                    {team.status}
                                  </span>
                                </div>

                                <div className="grid grid-cols-2 gap-3 text-sm">
                                  <div>
                                    <p className="text-gray-500">Team Lead</p>
                                    <p className="font-medium text-gray-900">
                                      {team.lead}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-gray-500">Members</p>
                                    <p className="font-medium text-gray-900">
                                      {team.members} members
                                    </p>
                                  </div>
                                </div>

                                {/* Project Details in Team Card */}
                                <div className="mt-3 pt-3 border-t border-gray-100">
                                  <p className="text-xs font-medium text-gray-700 mb-2">Project Details</p>
                                  <div className="grid grid-cols-2 gap-2 text-xs">
                                    <div>
                                      <p className="text-gray-500">Status</p>
                                      <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium mt-0.5 ${getStatusColor(project.status)}`}>
                                        {project.status}
                                      </span>
                                    </div>
                                    <div>
                                      <p className="text-gray-500">Priority</p>
                                      <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium mt-0.5 ${getPriorityColor(project.priority)}`}>
                                        {project.priority}
                                      </span>
                                    </div>
                                    <div>
                                      <p className="text-gray-500">Start Date</p>
                                      <p className="font-medium text-gray-900 mt-0.5">{project.startDate || 'N/A'}</p>
                                    </div>
                                    <div>
                                      <p className="text-gray-500">Due Date</p>
                                      <p className="font-medium text-gray-900 mt-0.5">{project.endDate || 'N/A'}</p>
                                    </div>
                                  </div>
                                </div>

                                {team.attachments && team.attachments.length > 0 && (
                                  <div className="mt-3 pt-3 border-t border-gray-100">
                                    <p className="text-xs text-gray-500 mb-2 flex items-center gap-1">
                                      <Paperclip className="w-3 h-3" />
                                      {team.attachments.length} attachment{team.attachments.length > 1 ? 's' : ''}
                                    </p>
                                    <div className="space-y-1.5">
                                      {team.attachments.map((file) => (
                                        <div 
                                          key={file.id} 
                                          onClick={() => handleOpenAttachment(file)}
                                          className="flex items-center gap-2 p-1.5 bg-gray-50 rounded border border-gray-200 hover:border-blue-400 hover:bg-blue-50 cursor-pointer group transition"
                                          title="Click to open attachment"
                                        >
                                          <FileText className="w-3 h-3 text-blue-600 flex-shrink-0 group-hover:scale-110 transition" />
                                          <div className="flex-1 min-w-0">
                                            <p className="text-xs text-gray-900 truncate group-hover:text-blue-700">{file.name}</p>
                                            <p className="text-xs text-gray-500">{file.size}</p>
                                          </div>
                                          <Download className="w-3 h-3 text-gray-400 group-hover:text-blue-600 flex-shrink-0" />
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>

                              <div className="flex gap-2 flex-shrink-0">
                                <button
                                  onClick={() =>
                                    handleEditTeam(project.id, team)
                                  }
                                  className="p-2 hover:bg-gray-100 rounded-lg transition"
                                  title="Edit Team"
                                >
                                  <Edit className="w-4 h-4 text-gray-600" />
                                </button>
                                <button
                                  onClick={() =>
                                    handleDeleteTeam(project.id, team.id)
                                  }
                                  className="p-2 hover:bg-red-50 rounded-lg transition"
                                  title="Delete Team"
                                >
                                  <Trash2 className="w-4 h-4 text-red-600" />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="px-4 sm:px-6 py-3 bg-gray-50 flex flex-wrap gap-2">
                  <button
                    onClick={() => handleEditProject(project)}
                    className="px-3 sm:px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-lg transition"
                  >
                    Edit Project
                  </button>

                  <button
                    onClick={() => handleDeleteProject(project.id)}
                    className="px-3 sm:px-4 py-2 text-sm text-red-600 hover:bg-red-100 rounded-lg transition"
                  >
                    Delete Project
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {showCreateProjectModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-4 sm:px-6 py-4 flex items-center justify-between">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                {editingProject ? "Edit Project" : "Create New Project"}
              </h2>

              <button
                onClick={closeCreateProjectModal}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="p-4 sm:p-6 space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4">
                  Project Information
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Project Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={newProject.name}
                        onChange={(e) =>
                          setNewProject({ ...newProject, name: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="e.g., E-Commerce Platform"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Project Code <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={newProject.code}
                        onChange={(e) =>
                          setNewProject({ ...newProject, code: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="e.g., ECOM-2024"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Project Description
                    </label>
                    <textarea
                      value={newProject.description}
                      onChange={(e) =>
                        setNewProject({
                          ...newProject,
                          description: e.target.value,
                        })
                      }
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      placeholder="Brief description of the project..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Attachments
                    </label>
                    
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-400 transition">
                      <input
                        type="file"
                        id="project-file-upload"
                        multiple
                        onChange={handleProjectFileUpload}
                        className="hidden"
                      />
                      <label
                        htmlFor="project-file-upload"
                        className="flex flex-col items-center justify-center cursor-pointer"
                      >
                        <Upload className="w-6 sm:w-8 h-6 sm:h-8 text-gray-400 mb-2" />
                        <p className="text-xs sm:text-sm text-gray-600 mb-1 text-center">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 text-center">
                          PDF, DOC, DOCX, XLS, XLSX, PNG, JPG (Max 10MB)
                        </p>
                      </label>
                    </div>

                    {newProject.attachments.length > 0 && (
                      <div className="mt-3 space-y-2">
                        <p className="text-xs font-medium text-gray-700">
                          Attached Files ({newProject.attachments.length})
                        </p>
                        <div className="space-y-2 max-h-32 overflow-y-auto">
                          {newProject.attachments.map((file) => (
                            <div
                              key={file.id}
                              className="flex items-center justify-between p-2 bg-gray-50 border border-gray-200 rounded-lg hover:border-blue-300 transition group"
                            >
                              <div 
                                onClick={() => handleOpenAttachment(file)}
                                className="flex items-center gap-2 flex-1 min-w-0 cursor-pointer"
                                title="Click to open attachment"
                              >
                                <FileText className="w-4 h-4 text-blue-600 flex-shrink-0 group-hover:scale-110 transition" />
                                <div className="min-w-0 flex-1">
                                  <p className="text-xs sm:text-sm text-gray-900 truncate group-hover:text-blue-700">
                                    {file.name}
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    {file.size}
                                  </p>
                                </div>
                                <Download className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-600 opacity-0 group-hover:opacity-100 transition" />
                              </div>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleProjectFileDelete(file.id);
                                }}
                                className="p-1 hover:bg-red-100 rounded transition flex-shrink-0 ml-2"
                                title="Remove file"
                              >
                                <X className="w-4 h-4 text-red-600" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Client Name
                      </label>
                      <input
                        type="text"
                        value={newProject.client}
                        onChange={(e) =>
                          setNewProject({
                            ...newProject,
                            client: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="e.g., TechCorp Inc."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Project Manager <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={newProject.manager}
                        onChange={(e) =>
                          setNewProject({
                            ...newProject,
                            manager: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="e.g., Sarah Johnson"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Start Date
                      </label>
                      <input
                        type="date"
                        value={newProject.startDate}
                        onChange={(e) =>
                          setNewProject({
                            ...newProject,
                            startDate: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        End Date
                      </label>
                      <input
                        type="date"
                        value={newProject.endDate}
                        onChange={(e) =>
                          setNewProject({
                            ...newProject,
                            endDate: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Project Status
                      </label>
                      <select
                        value={newProject.status}
                        onChange={(e) =>
                          setNewProject({
                            ...newProject,
                            status: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      >
                        <option value="Active">Active</option>
                        <option value="On Hold">On Hold</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Priority
                      </label>
                      <select
                        value={newProject.priority}
                        onChange={(e) =>
                          setNewProject({
                            ...newProject,
                            priority: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                <button
                  onClick={handleCreateProject}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-sm sm:text-base"
                >
                  {editingProject ? "Update Project" : "Create Project"}
                </button>
                <button
                  onClick={closeCreateProjectModal}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium text-sm sm:text-base"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showProjectSelector && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="border-b border-gray-200 px-4 sm:px-6 py-4 flex items-center justify-between">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                Select Project
              </h2>
              <button
                onClick={() => setShowProjectSelector(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="p-4 sm:p-6">
              <p className="text-sm text-gray-600 mb-4">
                Choose a project to create the team for:
              </p>
              <div className="space-y-2">
                {projects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => {
                      setShowProjectSelector(false);
                      openCreateTeamModal(project.id);
                    }}
                    className="w-full text-left px-4 py-3 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition"
                  >
                    <div className="flex items-center justify-between">
                      <div className="min-w-0 flex-1 mr-2">
                        <p className="font-medium text-gray-900 text-sm sm:text-base truncate">
                          {project.name}
                        </p>
                        <p className="text-sm text-gray-500">{project.code}</p>
                      </div>
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium flex-shrink-0 ${getStatusColor(
                          project.status
                        )}`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {showCreateTeamModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-4 sm:px-6 py-4 flex items-center justify-between">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                {editingTeam ? "Edit Team" : "Create New Team"}
              </h2>

              <button
                onClick={closeCreateTeamModal}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="p-4 sm:p-6 space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4">
                  Basic Team Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Team Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={newTeam.name}
                      onChange={(e) =>
                        setNewTeam({ ...newTeam, name: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      placeholder="e.g., Frontend Team"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Project
                    </label>
                    <input
                      type="text"
                      value={
                        projects.find((p) => p.id === selectedProjectId)
                          ?.name || ""
                      }
                      disabled
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Team Description
                    </label>
                    <textarea
                      value={newTeam.description}
                      onChange={(e) =>
                        setNewTeam({ ...newTeam, description: e.target.value })
                      }
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      placeholder="Brief description of the team's responsibilities..."
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Team Lead <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={newTeam.lead}
                        onChange={(e) =>
                          setNewTeam({ ...newTeam, lead: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      >
                        <option value="">Select Team Lead</option>
                        <option value="Rahul Sharma">Rahul Sharma</option>
                        <option value="Priya Patel">Priya Patel</option>
                        <option value="Anita Desai">Anita Desai</option>
                        <option value="Michael Chen">Michael Chen</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Team Status
                      </label>
                      <select
                        value={newTeam.status}
                        onChange={(e) =>
                          setNewTeam({ ...newTeam, status: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4">
                  Team Members
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Members
                    </label>

                    <div className="border border-gray-300 rounded-lg p-3 space-y-2 max-h-40 overflow-y-auto">
                      {membersList.map((member) => (
                        <label
                          key={member}
                          className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            value={member}
                            checked={newTeam.members.includes(member)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setNewTeam({
                                  ...newTeam,
                                  members: [...newTeam.members, member],
                                });
                              } else {
                                setNewTeam({
                                  ...newTeam,
                                  members: newTeam.members.filter(
                                    (m) => m !== member
                                  ),
                                });
                              }
                            }}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          {member}
                        </label>
                      ))}
                    </div>

                    <p className="text-xs text-gray-500 mt-1">
                      Select one or more team members
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4">
                  Team Attachments
                </h3>
                
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-400 transition">
                  <input
                    type="file"
                    id="team-file-upload"
                    multiple
                    onChange={handleTeamFileUpload}
                    className="hidden"
                  />
                  <label
                    htmlFor="team-file-upload"
                    className="flex flex-col items-center justify-center cursor-pointer"
                  >
                    <Upload className="w-6 sm:w-8 h-6 sm:h-8 text-gray-400 mb-2" />
                    <p className="text-xs sm:text-sm text-gray-600 mb-1 text-center">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 text-center">
                      PDF, DOC, DOCX, XLS, XLSX, PNG, JPG (Max 10MB)
                    </p>
                  </label>
                </div>

                {newTeam.attachments.length > 0 && (
                  <div className="mt-3 space-y-2">
                    <p className="text-xs font-medium text-gray-700">
                      Attached Files ({newTeam.attachments.length})
                    </p>
                    <div className="space-y-2 max-h-32 overflow-y-auto">
                      {newTeam.attachments.map((file) => (
                        <div
                          key={file.id}
                          className="flex items-center justify-between p-2 bg-gray-50 border border-gray-200 rounded-lg hover:border-blue-300 transition group"
                        >
                          <div 
                            onClick={() => handleOpenAttachment(file)}
                            className="flex items-center gap-2 flex-1 min-w-0 cursor-pointer"
                            title="Click to open attachment"
                          >
                            <FileText className="w-4 h-4 text-blue-600 flex-shrink-0 group-hover:scale-110 transition" />
                            <div className="min-w-0 flex-1">
                              <p className="text-xs sm:text-sm text-gray-900 truncate group-hover:text-blue-700">
                                {file.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                {file.size}
                              </p>
                            </div>
                            <Download className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-600 opacity-0 group-hover:opacity-100 transition" />
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleTeamFileDelete(file.id);
                            }}
                            className="p-1 hover:bg-red-100 rounded transition flex-shrink-0 ml-2"
                            title="Remove file"
                          >
                            <X className="w-4 h-4 text-red-600" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                <button
                  onClick={handleCreateTeam}
                  className="flex-1 px-4 sm:px-6 py-2 sm:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold text-sm sm:text-base shadow-md"
                >
                  {editingTeam ? "Update Team" : "💾 Save Team"}
                </button>
                <button
                  onClick={closeCreateTeamModal}
                  className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium text-sm sm:text-base"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddProjects;