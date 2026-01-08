/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {ArrowLeft,User,Calendar,Flag,FileText,Download,CheckCircle,XCircle,Clock,Play,Pause,BarChart3,Mail,Phone,MapPin,Calendar as CalendarIcon,DollarSign,Users,Target,TrendingUp,Activity, Plus
} from 'lucide-react';

const projectsData = [
  {
    id: 1,
    projectName: "Client Website Revamp",
    clientName: "ABC Pvt Ltd",
    leader: "Sangram Singh",
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
    startDate: "2024-01-15",
    endDate: "2024-03-15",
    budget: "$25,000",
    progress: 65,
    teamSize: 5,
    clientContact: {
      email: "contact@abc.com",
      phone: "+1-234-567-8900",
      address: "123 Business St, City, State 12345"
    }
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
    startDate: "2024-02-01",
    endDate: "2024-04-01",
    budget: "$18,000",
    progress: 10,
    teamSize: 3,
    clientContact: {
      email: "info@xyz.com",
      phone: "+1-234-567-8901",
      address: "456 Tech Ave, City, State 12346"
    }
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
    startDate: "2024-01-20",
    endDate: "2024-05-20",
    budget: "$45,000",
    progress: 25,
    teamSize: 8,
    clientContact: {
      email: "projects@techcorp.com",
      phone: "+1-234-567-8902",
      address: "789 Commerce Blvd, City, State 12347"
    }
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
    startDate: "2024-03-01",
    endDate: "2024-06-01",
    budget: "$32,000",
    progress: 40,
    teamSize: 4,
    clientContact: {
      email: "analytics@datainc.com",
      phone: "+1-234-567-8903",
      address: "321 Data Dr, City, State 12348"
    }
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
    startDate: "2024-02-15",
    endDate: "2024-04-15",
    budget: "$15,000",
    progress: 0,
    teamSize: 2,
    clientContact: {
      email: "dev@apicorp.com",
      phone: "+1-234-567-8904",
      address: "654 API St, City, State 12349"
    }
  },
];

const projectManagers = ["John Doe", "Bob Smith", "Alice Johnson", "Charlie Brown"];

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [assignedPM, setAssignedPM] = useState("");

  useEffect(() => {
    const foundProject = projectsData.find(p => p.id === parseInt(id));
    if (foundProject) {
      setProject(foundProject);
    } else {
      navigate('/super-admin/projects');
    }
  }, [id, navigate]);

  const acceptProject = () => {
    setProject(prev => ({ ...prev, status: "Pending" }));
    setShowAssignModal(true);
  };

  const rejectProject = () => {
    setProject(prev => ({ ...prev, status: "Rejected" }));
  };

  const assignProjectManager = () => {
    if (!assignedPM.trim()) return;

    setProject(prev => ({
      ...prev,
      status: "Pending",
      projectManager: assignedPM
    }));
    setShowAssignModal(false);
    setAssignedPM("");
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
      "Low": "text-green-600 bg-green-50 border-green-200",
      "Critical": "text-purple-600 bg-purple-50 border-purple-200"
    };
    return colors[priority] || "text-gray-600 bg-gray-50 border-gray-200";
  };

  const getStatusIcon = (status) => {
    const icons = {
      "New": <Plus className="w-5 h-5" />,
      "In Progress": <Play className="w-5 h-5" />,
      "Pending": <Clock className="w-5 h-5" />,
      "Hold": <Pause className="w-5 h-5" />,
      "Rejected": <XCircle className="w-5 h-5" />,
      "Completed": <CheckCircle className="w-5 h-5" />
    };
    return icons[status] || <Activity className="w-5 h-5" />;
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 md:p-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/super-admin/projects')}
            className="flex items-center gap-3 mb-6 px-4 py-2 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600 group-hover:text-indigo-600 transition-colors" />
            <span className="text-gray-700 font-medium group-hover:text-indigo-700 transition-colors">Back to Projects</span>
          </button>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
                {project.projectName}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-lg text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-blue-600" />
                  </div>
                  <span>Client: <span className="font-bold text-gray-800">{project.clientName}</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-gray-500" />
                  <span>{project.startDate} - {project.endDate}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className={`flex items-center gap-3 px-6 py-4 rounded-2xl border-2 shadow-lg ${getStatusColor(project.status)}`}>
                {getStatusIcon(project.status)}
                <span className="font-bold text-lg">{project.status}</span>
              </div>
              <div className={`flex items-center gap-3 px-6 py-4 rounded-2xl border-2 shadow-lg ${getPriorityColor(project.priority)}`}>
                <Flag className="w-5 h-5" />
                <span className="font-bold text-lg">{project.priority}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl p-6 shadow-lg border border-emerald-200">
            <div className="flex items-center justify-between mb-3">
              <DollarSign className="w-8 h-8 text-emerald-600" />
              <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
            </div>
            <div className="text-3xl font-bold text-emerald-800 mb-1">{project.budget}</div>
            <div className="text-sm font-medium text-emerald-600">Budget</div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 shadow-lg border border-blue-200">
            <div className="flex items-center justify-between mb-3">
              <Users className="w-8 h-8 text-blue-600" />
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            </div>
            <div className="text-3xl font-bold text-blue-800 mb-1">{project.teamSize}</div>
            <div className="text-sm font-medium text-blue-600">Team Size</div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-6 shadow-lg border border-purple-200">
            <div className="flex items-center justify-between mb-3">
              <Target className="w-8 h-8 text-purple-600" />
              <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
            </div>
            <div className="text-3xl font-bold text-purple-800 mb-1">{project.progress}%</div>
            <div className="text-sm font-medium text-purple-600">Progress</div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-2xl p-6 shadow-lg border border-amber-200">
            <div className="flex items-center justify-between mb-3">
              <TrendingUp className="w-8 h-8 text-amber-600" />
              <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
            </div>
            <div className="text-3xl font-bold text-amber-800 mb-1">
              {Math.ceil((new Date(project.endDate) - new Date()) / (1000 * 60 * 60 * 24))}d
            </div>
            <div className="text-sm font-medium text-amber-600">Days Left</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-800">Project Progress</h3>
            <span className="text-2xl font-bold text-indigo-600">{project.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-gradient-to-r from-indigo-500 to-purple-600 h-4 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Description */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <FileText className="w-6 h-6 text-indigo-600" />
                Project Description
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {project.description}
              </p>
            </div>

            {/* Team Information */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-indigo-600" />
                Team Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1 font-semibold uppercase tracking-wide">Project Leader</p>
                    <p className="font-bold text-gray-800 text-xl">{project.leader}</p>
                  </div>
                </div>

                {project.projectManager && (
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-600 mb-1 font-semibold uppercase tracking-wide">Project Manager</p>
                      <p className="font-bold text-blue-800 text-xl">{project.projectManager}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Client Information */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Mail className="w-6 h-6 text-indigo-600" />
                Client Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500 font-semibold">Email</p>
                    <p className="font-bold text-gray-800 text-lg">{project.clientContact.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                  <Phone className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="text-sm text-gray-500 font-semibold">Phone</p>
                    <p className="font-bold text-gray-800 text-lg">{project.clientContact.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                  <MapPin className="w-6 h-6 text-purple-600" />
                  <div>
                    <p className="text-sm text-gray-500 font-semibold">Address</p>
                    <p className="font-bold text-gray-800 text-lg">{project.clientContact.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Actions */}
            {project.status === "New" && (
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 shadow-lg border-2 border-green-200">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-green-600" />
                  Project Actions
                </h3>
                <div className="space-y-4">
                  <button
                    onClick={acceptProject}
                    className="w-full px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    ✅ Accept Project
                  </button>
                  <button
                    onClick={rejectProject}
                    className="w-full px-6 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-bold hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    ❌ Reject Project
                  </button>
                </div>
              </div>
            )}

            {/* Attachments */}
            <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl p-6 shadow-lg border-2 border-emerald-200">
              <h3 className="font-bold text-gray-800 mb-6 flex items-center gap-3 text-xl">
                <FileText className="w-6 h-6 text-emerald-600" />
                Attachments
              </h3>

              {project.attachments.length === 0 ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-gray-500 text-lg font-medium">No attachments available</p>
                  <p className="text-gray-400 text-sm mt-2">Files will appear here when uploaded</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {project.attachments.map((file, i) => (
                    <div
                      key={i}
                      onClick={() =>
                        window.open(file.url, "_blank")
                      }
                      className="flex justify-between items-center p-4 bg-white border-2 border-emerald-200 rounded-xl cursor-pointer hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300 transform hover:scale-105 hover:shadow-md group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center">
                          <FileText className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                          <span className="text-gray-800 font-bold block group-hover:text-emerald-700 transition-colors text-lg">
                            {file.name}
                          </span>
                          <span className="text-sm text-gray-500 font-medium">
                            {file.size}
                          </span>
                        </div>
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center group-hover:from-emerald-200 group-hover:to-emerald-300 transition-all">
                        <Download className="w-5 h-5 text-emerald-600 group-hover:text-emerald-700 transition-colors" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Assign Project Manager Modal */}
        {showAssignModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md animate-in fade-in duration-300">
            <div className="w-full max-w-lg bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 mx-4 border border-gray-200 animate-in zoom-in-95 duration-300">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">Assign Project Manager</h3>
                <p className="text-gray-600 text-center text-lg">
                  Assign a project manager for <span className="font-bold text-indigo-600">"{project.projectName}"</span>
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-full flex items-center justify-center">
                      <User className="w-3 h-3 text-indigo-600" />
                    </div>
                    Select Project Manager
                  </label>
                  <select
                    value={assignedPM}
                    onChange={(e) => setAssignedPM(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-indigo-200 focus:border-indigo-400 outline-none bg-white shadow-sm text-lg"
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
                  <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center">
                      <User className="w-3 h-3 text-purple-600" />
                    </div>
                    Or Enter Custom Name/ID
                  </label>
                  <input
                    type="text"
                    value={assignedPM}
                    onChange={(e) => setAssignedPM(e.target.value)}
                    placeholder="Enter project manager name or ID"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-400 outline-none bg-white shadow-sm text-lg"
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => setShowAssignModal(false)}
                  className="flex-1 px-6 py-4 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 rounded-xl font-bold hover:from-gray-300 hover:to-gray-400 transition-all duration-300 transform hover:scale-105"
                >
                  Cancel
                </button>
                <button
                  onClick={assignProjectManager}
                  disabled={!assignedPM.trim()}
                  className="flex-1 px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-bold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  Assign & Accept
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;