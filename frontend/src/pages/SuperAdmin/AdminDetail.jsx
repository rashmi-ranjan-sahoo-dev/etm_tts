import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, Phone, MapPin, Calendar, User, FileText, Edit, Trash2, Eye } from "lucide-react";

const AdminDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample admin data - same as Admin.jsx
  const adminsData = [
    {
      id: 1,
      adminId: "AD-0001",
      name: "Ashton Cox",
      avatar: "https://i.pravatar.cc/150?u=101",
      mobile: "1234567890",
      email: "admin1@example.com",
      position: "Senior Admin",
      status: "Active",
      address: "123 Main St, New York, NY 10001",
      joinDate: "2023-01-15",
      permissions: ["User Management", "System Settings", "Reports", "Dashboard Access"],
      documents: [
        { id: 1, name: "ID Proof.pdf", type: "PDF", size: "2.5 MB", uploadDate: "2023-01-10" },
        { id: 2, name: "Contract.pdf", type: "PDF", size: "1.8 MB", uploadDate: "2023-01-12" }
      ],
      activities: [
        { id: 1, action: "Created new user account", date: "2024-01-15", time: "10:30 AM" },
        { id: 2, action: "Updated system settings", date: "2024-01-14", time: "2:15 PM" },
        { id: 3, action: "Generated monthly report", date: "2024-01-13", time: "9:45 AM" }
      ]
    },
    {
      id: 2,
      adminId: "AD-0002",
      name: "Sarah Smith",
      avatar: "https://i.pravatar.cc/150?u=102",
      mobile: "1234567890",
      email: "admin2@example.com",
      position: "Junior Admin",
      status: "Inactive",
      address: "456 Elm St, Boston, MA 02101",
      joinDate: "2023-03-20",
      permissions: ["User Management", "Reports"],
      documents: [
        { id: 1, name: "Resume.pdf", type: "PDF", size: "1.2 MB", uploadDate: "2023-03-15" }
      ],
      activities: [
        { id: 1, action: "Logged into system", date: "2024-01-10", time: "8:00 AM" },
        { id: 2, action: "Viewed user reports", date: "2024-01-09", time: "11:20 AM" }
      ]
    }
  ];

  const adminData = adminsData.find(admin => admin.id === parseInt(id));

  if (!adminData) {
    return (
      <div className="min-h-screen bg-slate-50 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Admin Not Found</h2>
            <p className="text-slate-600 mb-6">The admin you're looking for doesn't exist.</p>
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
            <div className="flex items-center gap-3">
              <span className={`px-4 py-2 text-sm rounded-full font-semibold border ${getStatusColor(adminData.status)}`}>
                {adminData.status}
              </span>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2">
                <Edit className="w-4 h-4" />
                Edit
              </button>
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

            {/* Permissions */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Permissions & Access</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {adminData.permissions.map((permission, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg border border-indigo-100">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{permission}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Notes</h2>
              <p className="text-gray-700 leading-relaxed">{adminData.notes}</p>
            </div>
          </div>

          {/* Right Column - Additional Info */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Quick Stats</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Last Login</span>
                  <span className="font-semibold text-gray-800">{new Date(adminData.lastLogin).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Documents</span>
                  <span className="font-semibold text-gray-800">{adminData.documents.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Permissions</span>
                  <span className="font-semibold text-gray-800">{adminData.permissions.length}</span>
                </div>
              </div>
            </div>

            {/* Documents */}
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

            {/* Recent Activities */}
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
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-end">
          <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
            <Trash2 className="w-5 h-5" />
            Delete Admin
          </button>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
            <Edit className="w-5 h-5" />
            Edit Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDetail;