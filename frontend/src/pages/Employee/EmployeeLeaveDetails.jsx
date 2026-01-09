/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { ArrowLeft, Calendar, Clock, CheckCircle2, AlertCircle, FileText, Download, Eye, Edit2, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EmployeeLeaveDetails = () => {
  const navigate = useNavigate();
  const [expandedRequest, setExpandedRequest] = useState(null);
  const [filterStatus, setFilterStatus] = useState("all");

  // Sample current employee data
  const currentEmployee = {
    id: 1,
    name: "John Deo",
    email: "john.deo@company.com",
    designation: "Senior Developer",
    department: "Technology",
    avatar: "https://i.pravatar.cc/150?img=1",
    leaveBalance: {
      totalBalance: 20,
      usedLeave: 8,
      availableLeave: 12,
      pendingApproval: 2,
    },
    leaveTypes: [
      { name: "Vacation", total: 10, used: 3, available: 7, color: "blue" },
      { name: "Sick Leave", total: 5, used: 2, available: 3, color: "red" },
      { name: "Casual Leave", total: 5, used: 3, available: 2, color: "green" },
    ],
    leaveRequests: [
      {
        id: 1,
        leaveType: "Sick Leave",
        startDate: "01/15/2026",
        endDate: "01/17/2026",
        days: 3,
        reason: "Medical appointment and recovery",
        status: "Approved",
        appliedDate: "01/10/2026",
        approvedBy: "Manager - Jasmin Sen",
      },
      {
        id: 2,
        leaveType: "Casual Leave",
        startDate: "01/25/2026",
        endDate: "01/25/2026",
        days: 1,
        reason: "Personal work",
        status: "Pending",
        appliedDate: "01/08/2026",
        approvedBy: null,
      },
      {
        id: 3,
        leaveType: "Vacation",
        startDate: "02/01/2026",
        endDate: "02/05/2026",
        days: 5,
        reason: "Annual vacation",
        status: "Pending",
        appliedDate: "12/20/2025",
        approvedBy: null,
      },
    ],
  };

  const filteredRequests =
    filterStatus === "all"
      ? currentEmployee.leaveRequests
      : currentEmployee.leaveRequests.filter((r) => r.status === filterStatus);

  const getStatusColor = (status) => {
    switch (status) {
      case "Approved":
        return "bg-emerald-100 text-emerald-700 border-emerald-300";
      case "Pending":
        return "bg-amber-100 text-amber-700 border-amber-300";
      case "Rejected":
        return "bg-red-100 text-red-700 border-red-300";
      default:
        return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  const getLeaveTypeColor = (leaveType) => {
    switch (leaveType) {
      case "Vacation":
        return "bg-blue-100 text-blue-700";
      case "Sick Leave":
        return "bg-red-100 text-red-700";
      case "Casual Leave":
        return "bg-green-100 text-green-700";
      case "Personal Leave":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getProgressBarColor = (type) => {
    switch (type) {
      case "Vacation":
        return "from-blue-400 to-blue-600";
      case "Sick Leave":
        return "from-red-400 to-red-600";
      case "Casual Leave":
        return "from-green-400 to-green-600";
      default:
        return "from-gray-400 to-gray-600";
    }
  };

  const usedPercent = Math.round(
    (currentEmployee.leaveBalance.usedLeave / currentEmployee.leaveBalance.totalBalance) *
      100
  );
  const availablePercent = Math.round(
    (currentEmployee.leaveBalance.availableLeave / currentEmployee.leaveBalance.totalBalance) *
      100
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => navigate("/employee/dashboard")}
            className="p-2 hover:bg-white rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              My Leave Details
            </h1>
            <p className="text-gray-600 mt-1">
              View and manage your leave balance and requests
            </p>
          </div>
        </div>

        {/* EMPLOYEE INFO CARD */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-blue-100">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={currentEmployee.avatar}
              alt={currentEmployee.name}
              className="w-20 h-20 rounded-full border-4 border-blue-200"
            />
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-900">
                {currentEmployee.name}
              </h2>
              <p className="text-gray-600">
                {currentEmployee.designation} • {currentEmployee.department}
              </p>
              <p className="text-sm text-gray-500">{currentEmployee.email}</p>
            </div>
          </div>
        </div>

        {/* OVERVIEW CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-2">Total Balance</p>
                <h3 className="text-3xl font-bold text-gray-900">
                  {currentEmployee.leaveBalance.totalBalance}
                </h3>
                <p className="text-xs text-gray-400 mt-1">days per year</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-2">Available</p>
                <h3 className="text-3xl font-bold text-emerald-600">
                  {currentEmployee.leaveBalance.availableLeave}
                </h3>
                <p className="text-xs text-gray-400 mt-1">{availablePercent}% remaining</p>
              </div>
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-2">Used</p>
                <h3 className="text-3xl font-bold text-orange-600">
                  {currentEmployee.leaveBalance.usedLeave}
                </h3>
                <p className="text-xs text-gray-400 mt-1">{usedPercent}% utilized</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-2">Pending</p>
                <h3 className="text-3xl font-bold text-amber-600">
                  {currentEmployee.leaveBalance.pendingApproval}
                </h3>
                <p className="text-xs text-gray-400 mt-1">awaiting approval</p>
              </div>
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-amber-600" />
              </div>
            </div>
          </div>
        </div>

        {/* LEAVE UTILIZATION */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-blue-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Leave Utilization</h3>

          <div className="space-y-6">
            {/* Overall Progress */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium text-gray-700">
                  Overall Leave Usage
                </span>
                <span className="text-sm font-bold text-gray-900">
                  {currentEmployee.leaveBalance.usedLeave} /{" "}
                  {currentEmployee.leaveBalance.totalBalance}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-orange-400 to-red-500 h-full rounded-full transition-all"
                  style={{
                    width: `${usedPercent}%`,
                  }}
                />
              </div>
            </div>

            {/* Available Progress */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium text-gray-700">
                  Leave Available
                </span>
                <span className="text-sm font-bold text-emerald-600">
                  {availablePercent}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-emerald-400 to-green-500 h-full rounded-full transition-all"
                  style={{
                    width: `${availablePercent}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* LEAVE TYPES BREAKDOWN */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-blue-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Leave Types Breakdown</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentEmployee.leaveTypes.map((type, idx) => {
              const usedPercent = Math.round((type.used / type.total) * 100);
              return (
                <div key={idx} className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">{type.name}</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLeaveTypeColor(type.name)}`}>
                      {type.available} available
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Used</span>
                      <span className="font-medium">
                        {type.used} / {type.total}
                      </span>
                    </div>
                    <div className={`w-full bg-gray-300 rounded-full h-2 overflow-hidden`}>
                      <div
                        className={`bg-gradient-to-r ${getProgressBarColor(type.name)} h-full rounded-full`}
                        style={{ width: `${usedPercent}%` }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div>
                      <p className="text-gray-500">Total</p>
                      <p className="font-bold text-gray-900">{type.total}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Used</p>
                      <p className="font-bold text-orange-600">{type.used}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Available</p>
                      <p className="font-bold text-emerald-600">{type.available}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* LEAVE REQUESTS */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h3 className="text-xl font-bold text-gray-900">My Leave Requests</h3>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setFilterStatus("all")}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                  filterStatus === "all"
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterStatus("Approved")}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                  filterStatus === "Approved"
                    ? "bg-emerald-600 text-white shadow-md"
                    : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                }`}
              >
                Approved
              </button>
              <button
                onClick={() => setFilterStatus("Pending")}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                  filterStatus === "Pending"
                    ? "bg-amber-600 text-white shadow-md"
                    : "bg-amber-50 text-amber-700 border border-amber-200"
                }`}
              >
                Pending
              </button>
            </div>
          </div>

          {/* DESKTOP VIEW */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">
                    Leave Type
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">
                    Duration
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">
                    Days
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">
                    Applied Date
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredRequests.map((request) => (
                  <tr key={request.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${getLeaveTypeColor(request.leaveType)}`}
                      >
                        {request.leaveType}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-700">
                      {request.startDate} to {request.endDate}
                    </td>
                    <td className="px-4 py-3 text-gray-700 font-medium">
                      {request.days}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(request.status)}`}
                      >
                        {request.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-xs">
                      {request.appliedDate}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button className="p-2 hover:bg-blue-100 rounded-lg transition-colors">
                          <Eye className="w-4 h-4 text-blue-600" />
                        </button>
                        <button className="p-2 hover:bg-yellow-100 rounded-lg transition-colors">
                          <Edit2 className="w-4 h-4 text-yellow-600" />
                        </button>
                        <button className="p-2 hover:bg-red-100 rounded-lg transition-colors">
                          <Trash2 className="w-4 h-4 text-red-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* MOBILE VIEW */}
          <div className="md:hidden space-y-4">
            {filteredRequests.map((request) => (
              <div
                key={request.id}
                className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex-1">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getLeaveTypeColor(request.leaveType)}`}
                    >
                      {request.leaveType}
                    </span>
                    <div className="mt-2">
                      <p className="text-sm font-semibold text-gray-900">
                        {request.days} days
                      </p>
                      <p className="text-xs text-gray-500">
                        {request.startDate} to {request.endDate}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border whitespace-nowrap ${getStatusColor(request.status)}`}
                  >
                    {request.status}
                  </span>
                </div>

                <div className="bg-gray-50 rounded-lg p-3 mb-3 border border-gray-200">
                  <p className="text-xs text-gray-500 mb-1">Reason</p>
                  <p className="text-sm text-gray-700">{request.reason}</p>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <span>Applied: {request.appliedDate}</span>
                  {request.approvedBy && (
                    <span>Approved by: {request.approvedBy}</span>
                  )}
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 p-2 hover:bg-blue-100 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <Eye className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-600">View</span>
                  </button>
                  <button className="flex-1 p-2 hover:bg-yellow-100 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <Edit2 className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm font-medium text-yellow-600">Edit</span>
                  </button>
                  <button className="flex-1 p-2 hover:bg-red-100 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <Trash2 className="w-4 h-4 text-red-600" />
                    <span className="text-sm font-medium text-red-600">Delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredRequests.length === 0 && (
            <div className="text-center py-8 bg-gray-50 rounded-lg">
              <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">
                No leave requests found with the selected filter
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeLeaveDetails;
