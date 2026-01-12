import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Globe, Search, ArrowLeft, Mail, Phone, MessageSquare, Calendar, Clock, CheckCircle, XCircle, AlertCircle,DollarSign, Filter, Users } from "lucide-react";

const InquiriesDetail = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Sample inquiry data with comprehensive information
  const inquiries = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@company.com",
      phone: "+1-234-567-8900",
      company: "Tech Solutions Inc",
      subject: "Website Development Inquiry",
      message: "We are looking for a comprehensive website development solution for our e-commerce platform. We need modern design, payment integration, and mobile responsiveness. Our budget is around $15,000-$20,000 and we need this completed within 6 weeks.",
      status: "New",
      priority: "High",
      submittedDate: "2024-01-20",
      category: "Web Development",
      budget: "$15,000-$20,000",
      timeline: "6 weeks",
      source: "Website",
      assignedTo: "Sarah Wilson",
      followUpDate: "2024-01-22",
      estimatedValue: "$18,000",
      companySize: "50-100 employees",
      industry: "E-commerce",
      previousClient: false,
      attachments: 2,
      notes: "Interested in Shopify integration. Has specific requirements for payment gateways."
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.j@startup.com",
      phone: "+1-234-567-8901",
      company: "StartupXYZ",
      subject: "Mobile App Development",
      message: "Interested in developing a cross-platform mobile application for our fitness tracking service. Need both iOS and Android versions. Looking for MVP development with core features like user registration, workout tracking, and social features.",
      status: "In Progress",
      priority: "Medium",
      submittedDate: "2024-01-18",
      category: "Mobile Development",
      budget: "$25,000-$35,000",
      timeline: "8-10 weeks",
      source: "LinkedIn",
      assignedTo: "Mike Chen",
      followUpDate: "2024-01-25",
      estimatedValue: "$30,000",
      companySize: "10-50 employees",
      industry: "Health & Fitness",
      previousClient: false,
      attachments: 1,
      notes: "Startup with seed funding. Need to move quickly. Interested in React Native for cross-platform development."
    },
    {
      id: 3,
      name: "Mike Davis",
      email: "mike.davis@enterprise.com",
      phone: "+1-234-567-8902",
      company: "Enterprise Corp",
      subject: "Data Analytics Solution",
      message: "Looking for a comprehensive data analytics dashboard with real-time reporting capabilities and integration with our existing systems. We have large datasets from multiple sources that need to be consolidated and visualized.",
      status: "Pending",
      priority: "High",
      submittedDate: "2024-01-16",
      category: "Data Analytics",
      budget: "$40,000-$60,000",
      timeline: "12-16 weeks",
      source: "Referral",
      assignedTo: "John Doe",
      followUpDate: "2024-01-23",
      estimatedValue: "$50,000",
      companySize: "500+ employees",
      industry: "Enterprise Software",
      previousClient: true,
      attachments: 3,
      notes: "Existing client from previous project. High priority enterprise account. Need detailed technical proposal."
    },
    {
      id: 4,
      name: "Lisa Chen",
      email: "lisa.chen@consulting.com",
      phone: "+1-234-567-8903",
      company: "Consulting Pro",
      subject: "UI/UX Design Services",
      message: "Need professional UI/UX design services for our client management portal. Focus on user experience and modern design principles. We have wireframes ready and need high-fidelity designs with prototyping.",
      status: "Completed",
      priority: "Low",
      submittedDate: "2024-01-14",
      category: "Design Services",
      budget: "$8,000-$12,000",
      timeline: "4 weeks",
      source: "Google Ads",
      assignedTo: "Emma Rodriguez",
      followUpDate: null,
      estimatedValue: "$10,000",
      companySize: "10-50 employees",
      industry: "Consulting",
      previousClient: false,
      attachments: 1,
      notes: "Completed successfully. Client was very satisfied with the design deliverables."
    },
    {
      id: 5,
      name: "David Wilson",
      email: "david.w@manufacturing.com",
      phone: "+1-234-567-8904",
      company: "Wilson Manufacturing",
      subject: "ERP System Integration",
      message: "We need to integrate our existing ERP system with modern web interfaces. The system handles inventory, orders, and financial data. We need API development and dashboard creation for better visibility.",
      status: "New",
      priority: "High",
      submittedDate: "2024-01-19",
      category: "System Integration",
      budget: "$35,000-$45,000",
      timeline: "10-12 weeks",
      source: "Trade Show",
      assignedTo: "Pending Assignment",
      followUpDate: "2024-01-21",
      estimatedValue: "$40,000",
      companySize: "100-500 employees",
      industry: "Manufacturing",
      previousClient: false,
      attachments: 4,
      notes: "Legacy system integration project. Need experienced developers with ERP knowledge. High potential for future work."
    }
  ];

  const filteredInquiries = inquiries.filter(inquiry => {
    const matchesSearch = inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         inquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         inquiry.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         inquiry.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || inquiry.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    const colors = {
      "New": "bg-blue-50 text-blue-700 border-blue-200",
      "In Progress": "bg-yellow-50 text-yellow-700 border-yellow-200",
      "Pending": "bg-orange-50 text-orange-700 border-orange-200",
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

  const getStatusIcon = (status) => {
    switch (status) {
      case "New":
        return <AlertCircle className="w-5 h-5 text-blue-600" />;
      case "In Progress":
        return <Clock className="w-5 h-5 text-yellow-600" />;
      case "Pending":
        return <MessageSquare className="w-5 h-5 text-orange-600" />;
      case "Completed":
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/super-admin/dashboard')}
            className="flex items-center gap-2 text-purple-600 hover:text-purple-800 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </button>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">Customer Inquiries</h1>
              <p className="text-gray-600">Manage and respond to customer inquiries and requests</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg">
                Total: {inquiries.length} Inquiries
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-400 to-indigo-500 p-6 rounded-2xl text-white shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <AlertCircle className="w-8 h-8 opacity-80" />
            </div>
            <h3 className="text-2xl font-bold mb-1">{inquiries.filter(i => i.status === 'New').length}</h3>
            <p className="text-blue-100">New Inquiries</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-6 rounded-2xl text-white shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <Clock className="w-8 h-8 opacity-80" />
            </div>
            <h3 className="text-2xl font-bold mb-1">{inquiries.filter(i => i.status === 'In Progress').length}</h3>
            <p className="text-yellow-100">In Progress</p>
          </div>

          <div className="bg-gradient-to-br from-orange-400 to-red-500 p-6 rounded-2xl text-white shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <MessageSquare className="w-8 h-8 opacity-80" />
            </div>
            <h3 className="text-2xl font-bold mb-1">{inquiries.filter(i => i.status === 'Pending').length}</h3>
            <p className="text-orange-100">Pending</p>
          </div>

          <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-6 rounded-2xl text-white shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <CheckCircle className="w-8 h-8 opacity-80" />
            </div>
            <h3 className="text-2xl font-bold mb-1">{inquiries.filter(i => i.status === 'Completed').length}</h3>
            <p className="text-green-100">Completed</p>
          </div>
        </div> */}

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search inquiries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none"
              />
            </div>

            <div className="flex gap-2">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none"
              >
                <option value="All">All Status</option>
                <option value="New">New</option>
                <option value="In Progress">In Progress</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Inquiries List */}
        <div className="space-y-6">
          {filteredInquiries.map((inquiry) => (
            <div
              key={inquiry.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-200 rounded-full flex items-center justify-center">
                    {getStatusIcon(inquiry.status)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-bold text-xl text-gray-800">{inquiry.subject}</h3>
                      <span className={`px-3 py-1 text-xs rounded-full font-semibold border ${getStatusColor(inquiry.status)}`}>
                        {inquiry.status}
                      </span>
                      <span className={`px-3 py-1 text-xs rounded-full font-semibold border ${getPriorityColor(inquiry.priority)}`}>
                        {inquiry.priority}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center gap-1">
                        <Globe className="w-4 h-4" />
                        {inquiry.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(inquiry.submittedDate).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        {inquiry.estimatedValue}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {inquiry.timeline}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-semibold text-gray-700">Name:</span>
                        <span>{inquiry.name}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-semibold text-gray-700">Company:</span>
                        <span>{inquiry.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-semibold text-gray-700">Industry:</span>
                        <span>{inquiry.industry}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="w-4 h-4 text-gray-500" />
                        <span>{inquiry.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="w-4 h-4 text-gray-500" />
                        <span>{inquiry.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span>{inquiry.companySize}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-lg">
                        <div className="text-xs text-gray-500 mb-1">Budget Range</div>
                        <div className="font-semibold text-blue-700">{inquiry.budget}</div>
                      </div>
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg">
                        <div className="text-xs text-gray-500 mb-1">Assigned To</div>
                        <div className="font-semibold text-green-700">{inquiry.assignedTo}</div>
                      </div>
                    </div>

                    {inquiry.notes && (
                      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-3 rounded-lg mb-4">
                        <div className="text-xs text-gray-500 mb-1">Internal Notes</div>
                        <div className="text-sm text-gray-700">{inquiry.notes}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
                <h4 className="font-semibold text-gray-800 mb-2">Message:</h4>
                <p className="text-gray-700 leading-relaxed">{inquiry.message}</p>
              </div>

              <div className="flex justify-end gap-3 mt-4">
                {inquiry.status === "New" && (
                  <>
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
                      Accept
                    </button>
                    <button className="px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors">
                      Reject
                    </button>
                  </>
                )}
                {inquiry.status === "In Progress" && (
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Mark Complete
                  </button>
                )}
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Reply
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredInquiries.length === 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-16 text-center border border-gray-100">
            <Globe className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-600 mb-2">No inquiries found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InquiriesDetail;