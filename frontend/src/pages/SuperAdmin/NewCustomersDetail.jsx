import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Users, Search, ArrowLeft, Mail, Phone, Calendar, MapPin, Building, DollarSign, TrendingUp, Filter } from "lucide-react";

const NewCustomersDetail = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Sample customer data with comprehensive information
  const customers = [
    {
      id: 1,
      name: "ABC Pvt Ltd",
      email: "contact@abc.com",
      phone: "+1-234-567-8900",
      company: "ABC Pvt Ltd",
      location: "New York, USA",
      joinDate: "2024-01-15",
      status: "Active",
      totalProjects: 3,
      totalSpent: "$45,000",
      lastActivity: "2024-01-20",
      industry: "E-commerce",
      companySize: "50-100 employees",
      website: "www.abc.com",
      source: "Referral",
      assignedManager: "John Doe",
      paymentTerms: "Net 30",
      creditLimit: "$50,000",
      outstandingBalance: "$5,000",
      satisfactionScore: 4.8,
      contractValue: "$120,000",
      contractEndDate: "2025-01-15",
      supportTickets: 2,
      lastPaymentDate: "2024-01-18"
    },
    {
      id: 2,
      name: "XYZ Solutions",
      email: "info@xyz.com",
      phone: "+1-234-567-8901",
      company: "XYZ Solutions",
      location: "California, USA",
      joinDate: "2024-01-10",
      status: "Active",
      totalProjects: 1,
      totalSpent: "$12,000",
      lastActivity: "2024-01-18",
      industry: "Technology",
      companySize: "10-50 employees",
      website: "www.xyzsolutions.com",
      source: "Website",
      assignedManager: "Jane Smith",
      paymentTerms: "Net 15",
      creditLimit: "$25,000",
      outstandingBalance: "$2,000",
      satisfactionScore: 4.5,
      contractValue: "$50,000",
      contractEndDate: "2024-12-10",
      supportTickets: 1,
      lastPaymentDate: "2024-01-15"
    },
    {
      id: 3,
      name: "TechCorp Inc",
      email: "hello@techcorp.com",
      phone: "+1-234-567-8902",
      company: "TechCorp Inc",
      location: "Texas, USA",
      joinDate: "2024-01-08",
      status: "Pending",
      totalProjects: 0,
      totalSpent: "$0",
      lastActivity: "2024-01-16",
      industry: "Healthcare",
      companySize: "100-500 employees",
      website: "www.techcorp.com",
      source: "LinkedIn",
      assignedManager: "Pending Assignment",
      paymentTerms: "Net 30",
      creditLimit: "$100,000",
      outstandingBalance: "$0",
      satisfactionScore: null,
      contractValue: "$200,000",
      contractEndDate: "2025-01-08",
      supportTickets: 0,
      lastPaymentDate: null
    },
    {
      id: 4,
      name: "Global Enterprises",
      email: "contact@globalent.com",
      phone: "+1-234-567-8903",
      company: "Global Enterprises",
      location: "Florida, USA",
      joinDate: "2024-01-05",
      status: "Active",
      totalProjects: 5,
      totalSpent: "$85,000",
      lastActivity: "2024-01-19",
      industry: "Finance",
      companySize: "500+ employees",
      website: "www.globalent.com",
      source: "Direct Sales",
      assignedManager: "Mike Johnson",
      paymentTerms: "Net 30",
      creditLimit: "$150,000",
      outstandingBalance: "$15,000",
      satisfactionScore: 4.9,
      contractValue: "$300,000",
      contractEndDate: "2025-01-05",
      supportTickets: 3,
      lastPaymentDate: "2024-01-17"
    },
    {
      id: 5,
      name: "StartupHub",
      email: "team@startuphub.io",
      phone: "+1-234-567-8904",
      company: "StartupHub",
      location: "Washington, USA",
      joinDate: "2024-01-12",
      status: "Active",
      totalProjects: 2,
      totalSpent: "$28,000",
      lastActivity: "2024-01-17",
      industry: "SaaS",
      companySize: "10-50 employees",
      website: "www.startuphub.io",
      source: "Google Ads",
      assignedManager: "Sarah Wilson",
      paymentTerms: "Net 15",
      creditLimit: "$30,000",
      outstandingBalance: "$3,000",
      satisfactionScore: 4.7,
      contractValue: "$80,000",
      contractEndDate: "2024-12-12",
      supportTickets: 1,
      lastPaymentDate: "2024-01-16"
    }
  ];

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || customer.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    return status === "Active"
      ? "bg-green-50 text-green-700 border-green-200"
      : "bg-yellow-50 text-yellow-700 border-yellow-200";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/super-admin/dashboard')}
            className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </button>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">New Customers</h1>
              <p className="text-gray-600">Manage and view details of newly registered customers</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg">
                Total: {customers.length} Customers
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-6 rounded-2xl text-white shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-8 h-8 opacity-80" />
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-bold mb-1">{customers.filter(c => c.status === 'Active').length}</h3>
            <p className="text-green-100">Active Customers</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-6 rounded-2xl text-white shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <Calendar className="w-8 h-8 opacity-80" />
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-bold mb-1">{customers.filter(c => c.status === 'Pending').length}</h3>
            <p className="text-yellow-100">Pending Approval</p>
          </div>

          <div className="bg-gradient-to-br from-purple-400 to-pink-500 p-6 rounded-2xl text-white shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <DollarSign className="w-8 h-8 opacity-80" />
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-bold mb-1">
              ${customers.reduce((sum, c) => sum + parseInt(c.totalSpent.replace(/[$,]/g, '')), 0).toLocaleString()}
            </h3>
            <p className="text-purple-100">Total Revenue</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search customers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none"
              />
            </div>

            <div className="flex gap-2">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none"
              >
                <option value="All">All Status</option>
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
          </div>
        </div>

        {/* Customers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredCustomers.map((customer) => (
            <div
              key={customer.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">{customer.name}</h3>
                    <p className="text-sm text-gray-500">{customer.company}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 text-xs rounded-full font-semibold border ${getStatusColor(customer.status)}`}>
                  {customer.status}
                </span>
              </div>

              <div className="space-y-3 mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span>{customer.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>{customer.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{customer.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Building className="w-4 h-4" />
                    <span>{customer.industry}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>{customer.companySize}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>Joined: {new Date(customer.joinDate).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4 space-y-3">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-xl font-bold text-indigo-600">{customer.totalProjects}</p>
                    <p className="text-xs text-gray-500">Projects</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-green-600">{customer.totalSpent}</p>
                    <p className="text-xs text-gray-500">Total Spent</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-lg font-bold text-blue-600">{customer.contractValue}</p>
                    <p className="text-xs text-gray-500">Contract Value</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-orange-600">{customer.outstandingBalance}</p>
                    <p className="text-xs text-gray-500">Outstanding</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <div className="text-xs text-gray-500">
                    Manager: <span className="font-medium text-gray-700">{customer.assignedManager}</span>
                  </div>
                  {customer.satisfactionScore && (
                    <div className="text-xs text-gray-500">
                      Rating: <span className="font-medium text-yellow-600">⭐ {customer.satisfactionScore}</span>
                    </div>
                  )}
                </div>

                <div className="text-xs text-gray-500 pt-1">
                  Last Activity: {new Date(customer.lastActivity).toLocaleDateString()}
                  {customer.lastPaymentDate && (
                    <span className="ml-4">
                      • Last Payment: {new Date(customer.lastPaymentDate).toLocaleDateString()}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCustomers.length === 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-16 text-center border border-gray-100">
            <Users className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-600 mb-2">No customers found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewCustomersDetail;