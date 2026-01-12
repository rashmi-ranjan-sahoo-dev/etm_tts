/* eslint-disable no-unused-vars */
import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Mail, Phone, MapPin, Calendar, User, FileText, Edit, Trash2, Eye } from "lucide-react";

const AdminDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Get admin data from location state (passed from Admin.jsx list)
  // Fallback to empty object if no data is passed
  const adminData = location.state?.adminData || {};

  if (!adminData || !adminData.name) {
    return (
      <div className="min-h-screen bg-slate-50 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Admin Not Found</h2>
            <p className="text-slate-600 mb-6">The admin you're looking for doesn't exist or no data was provided.</p>
            <button
              onClick={() => navigate('/super-admin/admin')}
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Back to Admin List
            </button>
          </div>
        </div>
      </div>
    );
  }

  const getStatusColor = (status) => {
    return status === "Active"
      ? "bg-green-50 text-green-700 border-green-200"
      : "bg-red-50 text-red-700 border-red-200";
  };

  //   const handleViewDoc = (doc) => {
  //   let url;

  //   if (typeof doc === "string") {
  //     url = doc;
  //   } else {
  //     url = URL.createObjectURL(doc);
  //   }

  //   window.open(url, "_blank");

  //   if (typeof doc !== "string") {
  //     setTimeout(() => URL.revokeObjectURL(url), 5000);
  //   }
  // };

  // const handleDownloadDoc = (doc, index) => {
  //   let url;
  //   let filename;

  //   if (typeof doc === "string") {
  //     url = doc;
  //     filename = `document_${index + 1}`;
  //   } else {
  //     url = URL.createObjectURL(doc);
  //     filename = doc.name;
  //   }

  //   const link = document.createElement("a");
  //   link.href = url;
  //   link.download = filename;
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);

  //   if (typeof doc !== "string") {
  //     URL.revokeObjectURL(url);
  //   }
  // };

  const formatFileSize = (size) => {
    if (!size) return "—";
    const kb = size / 1024;
    if (kb < 1024) return `${kb.toFixed(1)} KB`;
    return `${(kb / 1024).toFixed(1)} MB`;
  };

  const handleViewDoc = (doc) => {
    let url = typeof doc === "string" ? doc : URL.createObjectURL(doc);
    window.open(url, "_blank");

    if (typeof doc !== "string") {
      setTimeout(() => URL.revokeObjectURL(url), 5000);
    }
  };

  const handleDownloadDoc = (doc, index) => {
    const url = typeof doc === "string" ? doc : URL.createObjectURL(doc);
    const filename =
      typeof doc === "string" ? `document_${index + 1}` : doc.name;

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/super-admin/admin')}
            className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Admins
          </button>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <img
                src={adminData.avatar}
                alt={adminData.name}
                className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
              />
              <div>
                <h1 className="text-3xl font-bold text-gray-800">{adminData.name}</h1>
                <p className="text-gray-600">{adminData.position}</p>
                <p className="text-sm text-gray-500">ID: {adminData.adminId}</p>
              </div>
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
                <User className="w-5 h-5 text-indigo-600" />
                Contact Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-semibold text-gray-800">{adminData.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-semibold text-gray-800">{adminData.mobile}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="font-semibold text-gray-800">{adminData.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Join Date</p>
                      <p className="font-semibold text-gray-800">{new Date(adminData.joinDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Additional Info */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Quick Stats</h2>
              <div className="space-y-4">
                {adminData.position && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Position</span>
                    <span className="font-semibold text-gray-800">{adminData.position}</span>
                  </div>
                )}
                {adminData.status && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Status</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${adminData.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{adminData.status}</span>
                  </div>
                )}
                {adminData.documents && adminData.documents.length > 0 && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Documents</span>
                    <span className="font-semibold text-gray-800">{adminData.documents.length}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Documents */}
            {/* {adminData.documents && adminData.documents.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-indigo-600" />
                  Documents
                </h2>
                <div className="space-y-3">
                  {adminData.documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-gray-500" />
                        <div>
                          <p className="font-medium text-gray-800">{doc.name}</p>
                          <p className="text-sm text-gray-500">{doc.size}</p>
                        </div>
                      </div>
                      <button className="text-indigo-600 hover:text-indigo-800">
                        <Eye className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )} */}

            {adminData.documents && adminData.documents.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100">
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-indigo-600" />
                  Attachments
                </h2>

                <div className="space-y-3">
                  {adminData.documents.map((doc, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-3 bg-gray-50 rounded-xl border"
                    >
                      {/* File Info */}
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-gray-500" />
                        <div>
                          <p className="text-sm font-medium text-gray-800 truncate max-w-[180px] sm:max-w-[260px]">
                            {typeof doc === "string" ? `Document ${index + 1}` : doc.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {typeof doc === "string"
                              ? "Online File"
                              : formatFileSize(doc.size)}
                          </p>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2 justify-end">
                        <button
                          onClick={() => handleViewDoc(doc)}
                          className="p-2 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
                          title="View"
                        >
                          <Eye className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => handleDownloadDoc(doc, index)}
                          className="p-2 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white transition"
                          title="Download"
                        >
                          <FileText className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}


            {/* Recent Activities */}
            {adminData.activities && adminData.activities.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Recent Activities</h2>
                <div className="space-y-4">
                  {adminData.activities.slice(0, 5).map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-b-0 last:pb-0">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="text-gray-800 font-medium">{activity.action}</p>
                        <p className="text-sm text-gray-500">{activity.date} at {activity.time}</p>
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

export default AdminDetail;