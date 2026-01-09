/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {Search,User,Calendar,Flag,FileText,Download,ChevronRight,BarChart3,Plus,Clock,CheckCircle,XCircle,AlertTriangle,Play,Pause,Edit,Trash2,MoreVertical,Users,ChevronDown,ChevronUp,Paperclip,Upload,AlertCircle,X,ArrowLeft
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

const ProjectDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API call
    const foundProject = initialProjectsData.find(p => p.id === parseInt(id));
    if (foundProject) {
      setProject(foundProject);
    }
    setLoading(false);
  }, [id]);

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

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Project Not Found</h2>
          <p className="text-slate-600 mb-4">The project you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/employee/project-manager/projects')}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto p-4 md:p-6">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={() => navigate('/employee/projectmanager/projects')}
            className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </button>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-slate-800 mb-2">
                  {project.projectName}
                </h1>
                <div className="flex items-center gap-3 mb-3">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${getPriorityColor(project.priority)}`}>
                    {project.priority} Priority
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-500">Progress</p>
                <p className="text-3xl font-bold text-indigo-600">{project.progress}%</p>
              </div>
            </div>

            <div className="w-full bg-slate-200 rounded-full h-4 mb-6">
              <div
                className="bg-indigo-600 h-4 rounded-full transition-all duration-300"
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>

            <p className="text-slate-700 text-lg mb-6">{project.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-slate-500" />
                <div>
                  <p className="text-sm text-slate-500">Client</p>
                  <p className="font-semibold text-slate-800">{project.clientName}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-slate-500" />
                <div>
                  <p className="text-sm text-slate-500">Duration</p>
                  <p className="font-semibold text-slate-800">{project.startDate} - {project.endDate}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Flag className="w-5 h-5 text-slate-500" />
                <div>
                  <p className="text-sm text-slate-500">Project Leader</p>
                  <p className="font-semibold text-slate-800">{project.leader}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <BarChart3 className="w-5 h-5 text-slate-500" />
                <div>
                  <p className="text-sm text-slate-500">Budget</p>
                  <p className="font-semibold text-slate-800">{project.budget}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Teams Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200 mb-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <Users className="w-6 h-6 text-blue-600" />
            Teams ({project.teams?.length || 0})
          </h2>

          {project.teams && project.teams.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.teams.map((team) => (
                <div key={team.id} className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-slate-800">{team.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      team.status === 'Active' ? 'bg-green-100 text-green-700' :
                      team.status === 'Inactive' ? 'bg-red-100 text-red-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {team.status}
                    </span>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-3">
                      <User className="w-5 h-5 text-slate-500" />
                      <div>
                        <p className="text-sm text-slate-500">Team Lead</p>
                        <p className="font-medium text-slate-800">{team.lead}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-slate-500" />
                      <div>
                        <p className="text-sm text-slate-500">Team Members</p>
                        <p className="font-medium text-slate-800">{team.members.length} members</p>
                        {team.members.length > 0 && (
                          <div className="mt-1 flex flex-wrap gap-1">
                            {team.members.slice(0, 3).map(memberId => {
                              const employee = employeesData.find(e => e.id === memberId);
                              return employee ? (
                                <span key={memberId} className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-indigo-100 text-indigo-700">
                                  {employee.name}
                                </span>
                              ) : null;
                            })}
                            {team.members.length > 3 && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-slate-100 text-slate-600">
                                +{team.members.length - 3} more
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-slate-500" />
                      <div>
                        <p className="text-sm text-slate-500">Tasks Progress</p>
                        <p className="font-medium text-slate-800">{team.taskCount} tasks ({team.tasksDone}/{team.taskCount} completed)</p>
                      </div>
                    </div>
                  </div>

                  {team.description && (
                    <div className="pt-4 border-t border-slate-200">
                      <p className="text-sm text-slate-500 mb-1">Description</p>
                      <p className="text-slate-700">{team.description}</p>
                    </div>
                  )}

                  {team.attachments && team.attachments.length > 0 && (
                    <div className="pt-4 border-t border-slate-200">
                      <p className="text-sm text-slate-500 mb-2">Team Attachments ({team.attachments.length})</p>
                      <div className="flex flex-wrap gap-2">
                        {team.attachments.map((attachment, index) => (
                          <div key={index} className="flex items-center gap-2 bg-white p-2 rounded border">
                            <FileText className="w-4 h-4 text-slate-500" />
                            <span className="text-sm text-slate-700">{attachment.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-slate-500">
              <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-semibold text-slate-800 mb-2">No Teams Assigned</h3>
              <p>No teams have been assigned to this project yet.</p>
            </div>
          )}
        </div>

        {/* Attachments Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-600" />
            Project Attachments
          </h2>

          {project.attachments && project.attachments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.attachments.map((attachment, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex items-center gap-3">
                    <FileText className="w-6 h-6 text-slate-500" />
                    <div>
                      <p className="font-medium text-slate-800">{attachment.name}</p>
                      <p className="text-sm text-slate-500">{attachment.size}</p>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 p-2">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-slate-500">
              <FileText className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-semibold text-slate-800 mb-2">No Attachments</h3>
              <p>No attachments have been uploaded for this project.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;