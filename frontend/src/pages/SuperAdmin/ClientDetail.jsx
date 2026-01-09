import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, Phone, MapPin, Calendar, Building, User, FileText, Edit, Trash2, Eye, DollarSign, Briefcase } from "lucide-react";

const ClientDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample client data - same as Client.jsx
  const clientsData = [
    {
      id: 1,
      clientId: "CL-0001",
      name: "Ashton Cox",
      avatar: "https://i.pravatar.cc/150?u=1",
      mobile: "1234567890",
      email: "test@email.com",
      company: "ABC Infotech",
      currency: "USD",
      billing: "Hourly User Rate",
      contactPerson: "John Doe",
      contactPhone: "1234567892",
      status: "Active",
      address: "123 Main St, New York, NY 10001",
      joinDate: "2023-01-15",
      activeProjects: 1,
      completedProjects: 1,
      totalRevenue: "$80,000",
      projects: [
        { id: 1, name: "E-commerce Platform", status: "In Progress", budget: "$50,000", deadline: "2024-03-15" },
        { id: 2, name: "Mobile App Development", status: "Completed", budget: "$30,000", deadline: "2024-01-30" }
      ],
      payments: [
        { id: 1, amount: "$15,000", date: "2024-01-15", status: "Paid", description: "Initial Payment" },
        { id: 2, amount: "$10,000", date: "2024-01-20", status: "Pending", description: "Milestone Payment" }
      ],
      contractDocuments: [
        { id: 1, name: "Service_Agreement.pdf", type: "PDF", size: "2.5 MB", uploadDate: "2023-01-10" },
        { id: 2, name: "NDA.pdf", type: "PDF", size: "1.2 MB", uploadDate: "2023-01-12" }
      ]
    },
    {
      id: 2,
      clientId: "CL-0002",
      name: "Sarah Smith",
      avatar: "https://i.pravatar.cc/150?u=2",
      mobile: "1234567890",
      email: "test@email.com",
      company: "XYZ Software",
      currency: "EUR",
      billing: "Fixed Price",
      contactPerson: "Jane Smith",
      contactPhone: "2345678901",
      status: "Inactive",
      address: "456 Elm St, Boston, MA 02101",
      joinDate: "2023-03-20",
      activeProjects: 0,
      completedProjects: 1,
      totalRevenue: "€25,000",
      projects: [
        { id: 1, name: "Website Redesign", status: "Completed", budget: "€25,000", deadline: "2023-12-15" }
      ],
      payments: [
        { id: 1, amount: "€25,000", date: "2023-12-20", status: "Paid", description: "Project Completion" }
      ],
      contractDocuments: [
        { id: 1, name: "Contract.pdf", type: "PDF", size: "1.8 MB", uploadDate: "2023-03-15" }
      ]
    }
  ];

  const clientData = clientsData.find(client => client.id === parseInt(id));

  if (!clientData) {
    return (
      <div className="min-h-screen bg-slate-50 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Client Not Found</h2>
            <p className="text-slate-600 mb-6">The client you're looking for doesn't exist.</p>
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
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center gap-2">
                <Edit className="w-4 h-4" />
                Edit
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-6 rounded-2xl text-white shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <DollarSign className="w-8 h-8 opacity-80" />
            </div>
            <h3 className="text-2xl font-bold mb-1">{clientData.totalSpent}</h3>
            <p className="text-green-100">Total Spent</p>
          </div>

          <div className="bg-gradient-to-br from-blue-400 to-indigo-500 p-6 rounded-2xl text-white shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <Briefcase className="w-8 h-8 opacity-80" />
            </div>
            <h3 className="text-2xl font-bold mb-1">{clientData.activeProjects}</h3>
            <p className="text-blue-100">Active Projects</p>
          </div>

          <div className="bg-gradient-to-br from-purple-400 to-pink-500 p-6 rounded-2xl text-white shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <Calendar className="w-8 h-8 opacity-80" />
            </div>
            <h3 className="text-2xl font-bold mb-1">{clientData.completedProjects}</h3>
            <p className="text-purple-100">Completed Projects</p>
          </div>

          <div className="bg-gradient-to-br from-orange-400 to-red-500 p-6 rounded-2xl text-white shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <FileText className="w-8 h-8 opacity-80" />
            </div>
            <h3 className="text-2xl font-bold mb-1">1</h3>
            <p className="text-orange-100">Contracts</p>
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

            {/* Billing Information */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-600" />
                Billing Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-100">
                  <p className="text-sm text-gray-500 mb-1">Billing Type</p>
                  <p className="font-semibold text-gray-800">{clientData.billing}</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                  <p className="text-sm text-gray-500 mb-1">Currency</p>
                  <p className="font-semibold text-gray-800">{clientData.currency}</p>
                </div>
              </div>
            </div>

            {/* Projects */}
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
                      <span className="font-semibold text-green-600">{project.value}</span>
                      <span className={`px-3 py-1 text-xs rounded-full font-semibold border ${getProjectStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Notes</h2>
              <p className="text-gray-700 leading-relaxed">{clientData.notes}</p>
            </div>
          </div>

          {/* Right Column - Additional Info */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Quick Stats</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Join Date</span>
                  <span className="font-semibold text-gray-800">{new Date(clientData.joinDate).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Last Activity</span>
                  <span className="font-semibold text-gray-800">{new Date(clientData.lastActivity).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Projects</span>
                  <span className="font-semibold text-gray-800">{clientData.activeProjects + clientData.completedProjects}</span>
                </div>
              </div>
            </div>

            {/* Contract Documents */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5 text-green-600" />
                Contract Documents
              </h2>
              <div className="space-y-3">
                {clientData.contractDocuments.map((doc) => (
                  <div key={doc.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FileText className="w-6 h-6 text-gray-500" />
                        <div>
                          <p className="font-medium text-gray-800">{doc.name}</p>
                          <p className="text-sm text-gray-500">{doc.size} • Uploaded {doc.uploadDate}</p>
                        </div>
                      </div>
                      <button className="text-green-600 hover:text-green-800">
                        <Eye className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Payments */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-600" />
                Recent Payments
              </h2>
              <div className="space-y-3">
                {clientData.payments.slice(0, 3).map((payment) => (
                  <div key={payment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <div>
                      <p className="font-medium text-gray-800">{payment.amount}</p>
                      <p className="text-sm text-gray-500">{payment.description}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-2 py-1 text-xs rounded-full font-semibold border ${getPaymentStatusColor(payment.status)}`}>
                        {payment.status}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">{new Date(payment.date).toLocaleDateString()}</p>
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
            Delete Client
          </button>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
            <Edit className="w-5 h-5" />
            Edit Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientDetail;