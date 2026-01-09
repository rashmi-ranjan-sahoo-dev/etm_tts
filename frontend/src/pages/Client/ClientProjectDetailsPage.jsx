import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Users, CheckCircle2, AlertCircle, FileText, Download } from 'lucide-react';

// Sample data (same as in Projects.jsx)
const sampleProjects = [
  {
    id: 1,
    projectName: "HR Portal",
    projectCategory: "Software",
    projectLead: "John",
    status: "In Progress",
    startDate: "01/01/2025",
    endDate: "30/06/2025",
    attachments: [
      { name: "Requirements.pdf", url: "", size: "5MB" }
    ]
  },
];

const ClientProjectDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find project by ID
  const project = sampleProjects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 p-6">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => navigate('/client/projects')}
            className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </button>
          <div className="bg-white rounded-2xl p-8 text-center">
            <p className="text-gray-600 text-lg">Project not found</p>
          </div>
        </div>
      </div>
    );
  }

  const getStatusColor = (status) => {
    const colors = {
      Pending: 'bg-blue-100 text-blue-700',
      Hold: 'bg-yellow-100 text-yellow-700',
      "In Progress": 'bg-amber-100 text-amber-700',
      Completed: 'bg-green-100 text-green-700',
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate('/client/projects')}
          className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Projects
        </button>

        {/* Header Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8 border border-gray-100">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">{project.projectName}</h1>
              <div className="flex flex-wrap gap-4 items-center">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
                <span className="text-gray-600">
                  <strong>Category:</strong> {project.projectCategory}
                </span>
                <span className="text-gray-600">
                  <strong>Lead:</strong> {project.projectLead}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section – 2/3 */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Information */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Project Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-4 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-teal-600" />
                    <label className="text-sm font-semibold text-gray-700">Start Date</label>
                  </div>
                  <p className="text-lg font-bold text-gray-800">{project.startDate}</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-teal-600" />
                    <label className="text-sm font-semibold text-gray-700">End Date</label>
                  </div>
                  <p className="text-lg font-bold text-gray-800">{project.endDate}</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="w-4 h-4 text-blue-600" />
                    <label className="text-sm font-semibold text-gray-700">Project Category</label>
                  </div>
                  <p className="text-lg font-bold text-gray-800">{project.projectCategory}</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-blue-600" />
                    <label className="text-sm font-semibold text-gray-700">Project Lead</label>
                  </div>
                  <p className="text-lg font-bold text-gray-800">{project.projectLead}</p>
                </div>
              </div>
            </div>

            {/* Attachments */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <FileText className="w-6 h-6 text-teal-600" />
                Attachments
              </h2>
              {project.attachments && project.attachments.length > 0 ? (
                <div className="space-y-3">
                  {project.attachments.map((att, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-teal-600" />
                        <div>
                          <p className="font-semibold text-gray-800">{att.name}</p>
                          <p className="text-xs text-gray-500">{att.size}</p>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-teal-100 text-teal-700 rounded-lg hover:bg-teal-200 font-semibold transition-colors flex items-center gap-2">
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">No attachments available</p>
              )}
            </div>
          </div>

          {/* Right Section – 1/3 */}
          <div className="space-y-8">
            {/* Status Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Status Overview</h3>
              <div className={`p-6 rounded-xl text-center ${getStatusColor(project.status)}`}>
                <div className="text-3xl font-bold mb-2">{project.status}</div>
                <p className="text-sm opacity-80">Current Project Status</p>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Info</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b">
                  <span className="text-gray-600">Project Type</span>
                  <span className="font-semibold text-gray-800">{project.projectCategory}</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b">
                  <span className="text-gray-600">Team Lead</span>
                  <span className="font-semibold text-gray-800">{project.projectLead}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Files</span>
                  <span className="font-semibold text-gray-800">{project.attachments?.length || 0}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientProjectDetailsPage;
