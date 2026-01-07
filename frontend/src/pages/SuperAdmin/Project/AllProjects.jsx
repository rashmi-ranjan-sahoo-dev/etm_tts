import React, { useState } from "react";
import { Search, User, Calendar, Flag, FileText, Download, ChevronRight } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    projectName: "Client Website Revamp",
    clientName: "ABC Pvt Ltd",
    leader: "Sangram Singh",
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
    status: "New",
    priority: "Medium",
    description:
      "Create mobile-first UI screens for Android & iOS application.",
    attachments: [],
  },
];

const AllProjects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [selectedProject, setSelectedProject] = useState(null);
  const [search, setSearch] = useState("");

  const filteredProjects = projects.filter(
    (p) =>
      p.projectName.toLowerCase().includes(search.toLowerCase()) ||
      p.clientName.toLowerCase().includes(search.toLowerCase())
  );

  const updateStatus = (id, status) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status } : p))
    );
  };

  const getStatusColor = (status) => {
    const colors = {
      "New": "bg-blue-50 text-blue-700 border-blue-200",
      "Open": "bg-purple-50 text-purple-700 border-purple-200",
      "In Progress": "bg-amber-50 text-amber-700 border-amber-200",
      "Pending": "bg-orange-50 text-orange-700 border-orange-200",
      "Hold": "bg-red-50 text-red-700 border-red-200",
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
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-gray-800">{projects.length}</div>
              <div className="text-sm text-gray-600">Total Projects</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-amber-600">
                {projects.filter(p => p.status === "In Progress").length}
              </div>
              <div className="text-sm text-gray-600">In Progress</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-blue-600">
                {projects.filter(p => p.status === "New").length}
              </div>
              <div className="text-sm text-gray-600">New Projects</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-green-600">
                {projects.filter(p => p.status === "Completed").length}
              </div>
              <div className="text-sm text-gray-600">Completed</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* PROJECT LIST */}
          <div className="lg:col-span-2 space-y-4">
            {filteredProjects.length === 0 && (
              <div className="bg-white rounded-xl p-12 text-center shadow-sm border border-gray-100">
                <div className="text-gray-400 mb-2">
                  <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
                </div>
                <p className="text-gray-500 text-lg font-medium">No projects found</p>
                <p className="text-gray-400 text-sm mt-2">Try adjusting your search criteria</p>
              </div>
            )}

            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`cursor-pointer bg-white p-6 rounded-xl shadow-sm
                border-2 hover:shadow-lg transition-all transform hover:-translate-y-1
                ${
                  selectedProject?.id === project.id
                    ? "border-indigo-500 shadow-lg ring-2 ring-indigo-200"
                    : "border-gray-100"
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h2 className="font-bold text-xl text-gray-800 mb-2">
                      {project.projectName}
                    </h2>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <User className="w-4 h-4" />
                      <span>Client: <span className="font-semibold">{project.clientName}</span></span>
                    </div>
                  </div>

                  <span
                    className={`px-4 py-2 text-xs rounded-lg font-semibold border-2
                    ${getStatusColor(project.status)}`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-sm">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{project.leader}</span>
                    </div>
                    <span className={`px-3 py-1 text-xs rounded-lg font-semibold border ${getPriorityColor(project.priority)}`}>
                      {project.priority}
                    </span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            ))}
          </div>

          {/* PROJECT DETAILS */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 h-fit sticky top-8">
            {!selectedProject ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-10 h-10 text-indigo-600" />
                </div>
                <p className="text-gray-400 font-medium">Select a project to view details</p>
                <p className="text-gray-400 text-sm mt-2">Click on any project from the list</p>
              </div>
            ) : (
              <>
                <div className="mb-6 pb-6 border-b border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    {selectedProject.projectName}
                  </h2>

                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <User className="w-4 h-4" />
                    <span>Client: <span className="font-semibold text-gray-800">{selectedProject.clientName}</span></span>
                  </div>

                  <span className={`inline-block px-4 py-2 text-xs rounded-lg font-semibold border-2 ${getStatusColor(selectedProject.status)}`}>
                    {selectedProject.status}
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <User className="w-5 h-5 text-indigo-600 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Project Leader</p>
                      <p className="font-semibold text-gray-800">{selectedProject.leader}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <Flag className="w-5 h-5 text-indigo-600 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Priority Level</p>
                      <span className={`inline-block px-3 py-1 text-xs rounded-lg font-semibold border ${getPriorityColor(selectedProject.priority)}`}>
                        {selectedProject.priority}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>
                </div>

                {/* STATUS UPDATE */}
                <div className="mb-6 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                  <label className="block text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-600" />
                    Update Status
                  </label>
                  <select
                    value={selectedProject.status}
                    onChange={(e) => {
                      updateStatus(
                        selectedProject.id,
                        e.target.value
                      );
                      setSelectedProject({
                        ...selectedProject,
                        status: e.target.value,
                      });
                    }}
                    className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl
                    focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none
                    bg-white font-medium text-gray-700 shadow-sm transition-all"
                  >
                    <option>New</option>
                    {/* <option>Open</option> */}
                    <option>In Progress</option>
                    <option>Pending</option>
                    <option>Hold</option>
                    <option>Completed</option>
                  </select>
                </div>

                {/* ATTACHMENTS */}
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
                  <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-green-600" />
                    Attachments
                  </h3>

                  {selectedProject.attachments.length === 0 ? (
                    <div className="text-center py-6">
                      <FileText className="w-12 h-12 text-gray-300 mx-auto mb-2" />
                      <p className="text-gray-400 text-sm">No attachments available</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {selectedProject.attachments.map((file, i) => (
                        <div
                          key={i}
                          onClick={() =>
                            window.open(file.url, "_blank")
                          }
                          className="flex justify-between items-center
                          p-4 bg-white border-2 border-green-200 rounded-lg cursor-pointer
                          hover:bg-green-50 hover:border-green-300 transition-all
                          group shadow-sm"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg flex items-center justify-center">
                              <FileText className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                              <span className="text-gray-800 font-semibold block group-hover:text-green-700 transition-colors">
                                {file.name}
                              </span>
                              <span className="text-xs text-gray-500">
                                {file.size}
                              </span>
                            </div>
                          </div>
                          <Download className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;