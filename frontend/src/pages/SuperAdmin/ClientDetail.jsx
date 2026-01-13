/* eslint-disable no-unused-vars */
import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Mail, Phone, MapPin, Calendar, Building, User, FileText, Eye,Briefcase, Download} from "lucide-react";

const ClientDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Get client data from location state (passed from Client.jsx list)
  // Fallback to empty object if no data is passed
  const clientData = location.state?.clientData || {};

  if (!clientData || !clientData.name) {
    return (
      <div className="min-h-screen bg-slate-50 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Client Not Found</h2>
            <p className="text-slate-600 mb-6">The client you're looking for doesn't exist or no data was provided.</p>
            <button
              onClick={() => navigate('/super-admin/client')}
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Back to Client List
            </button>
          </div>
        </div>
      </div>
    );
  }

  const getStatusColor = (status) => {
    const colors = {
      "Active": "bg-green-50 text-green-700 border-green-200",
      "Inactive": "bg-red-50 text-red-700 border-red-200",
      "Pending": "bg-yellow-50 text-yellow-700 border-yellow-200"
    };
    return colors[status] || "bg-gray-50 text-gray-700 border-gray-200";
  };

  const getProjectStatusColor = (status) => {
    const colors = {
      "In Progress": "bg-blue-50 text-blue-700 border-blue-200",
      "Completed": "bg-green-50 text-green-700 border-green-200",
      "Pending": "bg-yellow-50 text-yellow-700 border-yellow-200",
      "On Hold": "bg-red-50 text-red-700 border-red-200"
    };
    return colors[status] || "bg-gray-50 text-gray-700 border-gray-200";
  };

  const getPaymentStatusColor = (status) => {
    return status === "Paid"
      ? "bg-green-50 text-green-700 border-green-200"
      : "bg-yellow-50 text-yellow-700 border-yellow-200";
  };

  const handleViewAttachment = (doc) => {
    if (!doc) return alert("No attachment available");

    if (typeof doc === "string") {
      window.open(doc, "_blank");
    } else {
      const url = URL.createObjectURL(doc);
      window.open(url, "_blank");
    }
  };

  const handleDownloadAttachment = (doc) => {
    if (!doc) return alert("No attachment available");

    let url;
    let filename = "attachment";

    if (typeof doc === "string") {
      url = doc;
      filename = doc.split("/").pop();
    } else {
      url = URL.createObjectURL(doc);
      filename = doc.name;
    }

    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    if (typeof doc !== "string") {
      URL.revokeObjectURL(url);
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/super-admin/client')}
            className="flex items-center gap-2 text-green-600 hover:text-green-800 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Clients
          </button>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <img
                src={clientData.avatar}
                alt={clientData.name}
                className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
              />
              <div>
                <h1 className="text-3xl font-bold text-gray-800">{clientData.name}</h1>
                <p className="text-gray-600">{clientData.company}</p>
                <p className="text-sm text-gray-500">ID: {clientData.clientId}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className={`px-4 py-2 text-sm rounded-full font-semibold border ${getStatusColor(clientData.status)}`}>
                {clientData.status}
              </span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Basic Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-green-600" />
                Contact Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-semibold text-gray-800">{clientData.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-semibold text-gray-800">{clientData.mobile}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Building className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Company</p>
                      <p className="font-semibold text-gray-800">{clientData.company}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Contact Person</p>
                      <p className="font-semibold text-gray-800">{clientData.contactPerson}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Contact Phone</p>
                      <p className="font-semibold text-gray-800">{clientData.contactPhone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="font-semibold text-gray-800">{clientData.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Attachments */}
            {/* Attachment */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-green-600" />
                Contract Document
              </h2>

              {clientData.contractDocument ? (
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <p className="font-semibold text-gray-800">
                      {clientData.contractDocument.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      Uploaded on{" "}
                      {new Date(
                        clientData.contractDocument.uploadedAt
                      ).toLocaleDateString()}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        handleViewAttachment(clientData.contractDocument.file)
                      }
                      className="flex items-center gap-1 px-4 py-2 text-sm rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
                    >
                      <Eye className="w-4 h-4" />
                      View
                    </button>

                    <button
                      onClick={() =>
                        handleDownloadAttachment(clientData.contractDocument.file)
                      }
                      className="flex items-center gap-1 px-4 py-2 text-sm rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-gray-500">No contract uploaded</p>
              )}
            </div>



            {/* Projects */}
            {clientData.projects && clientData.projects.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-green-600" />
                  Projects
                </h2>
                <div className="space-y-4">
                  {clientData.projects.map((project) => (
                    <div key={project.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">{project.name}</h3>
                        <p className="text-sm text-gray-500">Deadline: {new Date(project.deadline).toLocaleDateString()}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-semibold text-green-600">{project.budget}</span>
                        <span className={`px-3 py-1 text-xs rounded-full font-semibold border ${getProjectStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ClientDetail;