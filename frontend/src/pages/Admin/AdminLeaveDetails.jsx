/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo } from "react";
import { Search, ChevronDown, Plus, Eye, Edit2, Trash2, Calendar, User, AlertCircle } from "lucide-react";

const AdminLeaveDetails = () => {
  const [search, setSearch] = useState("");
  const [expandedEmployee, setExpandedEmployee] = useState(null);
  const [filterLeaveStatus, setFilterLeaveStatus] = useState("all");
  const [filterLeaveType, setFilterLeaveType] = useState("all");

  // Sample employee leave data
  const employeesLeaveData = [
    {
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
        },
      ],
    },
    {
      id: 2,
      name: "Cara Stevens",
      email: "cara.stevens@company.com",
      designation: "UI/UX Designer",
      department: "Design",
      avatar: "https://i.pravatar.cc/150?img=2",
      leaveBalance: {
        totalBalance: 20,
        usedLeave: 12,
        availableLeave: 8,
        pendingApproval: 0,
      },
      leaveRequests: [
        {
          id: 1,
          leaveType: "Vacation",
          startDate: "01/10/2026",
          endDate: "01/14/2026",
          days: 5,
          reason: "Family vacation",
          status: "Approved",
          appliedDate: "12/15/2025",
        },
        {
          id: 2,
          leaveType: "Sick Leave",
          startDate: "01/20/2026",
          endDate: "01/21/2026",
          days: 2,
          reason: "Fever and flu",
          status: "Approved",
          appliedDate: "01/19/2026",
        },
      ],
    },
    {
      id: 3,
      name: "Airi Satou",
      email: "airi.satou@company.com",
      designation: "Project Manager",
      department: "Management",
      avatar: "https://i.pravatar.cc/150?img=3",
      leaveBalance: {
        totalBalance: 20,
        usedLeave: 5,
        availableLeave: 15,
        pendingApproval: 1,
      },
      leaveRequests: [
        {
          id: 1,
          leaveType: "Vacation",
          startDate: "02/10/2026",
          endDate: "02/15/2026",
          days: 6,
          reason: "Planned vacation",
          status: "Pending",
          appliedDate: "01/05/2026",
        },
      ],
    },
    {
      id: 4,
      name: "Brielle Williamson",
      email: "brielle.w@company.com",
      designation: "QA Engineer",
      department: "Quality Assurance",
      avatar: "https://i.pravatar.cc/150?img=4",
      leaveBalance: {
        totalBalance: 20,
        usedLeave: 10,
        availableLeave: 10,
        pendingApproval: 0,
      },
      leaveRequests: [
        {
          id: 1,
          leaveType: "Sick Leave",
          startDate: "01/05/2026",
          endDate: "01/07/2026",
          days: 3,
          reason: "Medical leave",
          status: "Approved",
          appliedDate: "01/04/2026",
        },
        {
          id: 2,
          leaveType: "Casual Leave",
          startDate: "01/30/2026",
          endDate: "01/30/2026",
          days: 1,
          reason: "Personal appointment",
          status: "Approved",
          appliedDate: "01/28/2026",
        },
      ],
    },
    {
      id: 5,
      name: "Herrod Chandler",
      email: "herrod.c@company.com",
      designation: "Backend Developer",
      department: "Technology",
      avatar: "https://i.pravatar.cc/150?img=5",
      leaveBalance: {
        totalBalance: 20,
        usedLeave: 15,
        availableLeave: 5,
        pendingApproval: 2,
      },
      leaveRequests: [
        {
          id: 1,
          leaveType: "Vacation",
          startDate: "02/20/2026",
          endDate: "02/28/2026",
          days: 9,
          reason: "Extended vacation",
          status: "Pending",
          appliedDate: "01/15/2026",
        },
        {
          id: 2,
          leaveType: "Casual Leave",
          startDate: "01/22/2026",
          endDate: "01/22/2026",
          days: 1,
          reason: "Doctor appointment",
          status: "Pending",
          appliedDate: "01/20/2026",
        },
      ],
    },
  ];

  // Filter and search logic
  const filteredEmployees = useMemo(() => {
    return employeesLeaveData.filter((emp) => {
      const searchLower = search.toLowerCase();
      const matchSearch =
        emp.name.toLowerCase().includes(searchLower) ||
        emp.email.toLowerCase().includes(searchLower) ||
        emp.designation.toLowerCase().includes(searchLower) ||
        emp.department.toLowerCase().includes(searchLower);

      return matchSearch;
    });
  }, [search]);

  // Filter leave requests
  const getFilteredLeaveRequests = (requests) => {
    return requests.filter((req) => {
      if (filterLeaveStatus !== "all" && req.status !== filterLeaveStatus)
        return false;
      if (filterLeaveType !== "all" && req.leaveType !== filterLeaveType)
        return false;
      return true;
    });
  };

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Employee Leave Management
          </h1>
          <p className="text-gray-600">
            Manage and track all employee leave requests and balances
          </p>
        </div>

        {/* STATS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Total Employees</p>
                <h3 className="text-3xl font-bold text-gray-900">
                  {employeesLeaveData.length}
                </h3>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Approved Leaves</p>
                <h3 className="text-3xl font-bold text-gray-900">
                  {employeesLeaveData.reduce(
                    (sum, emp) =>
                      sum +
                      emp.leaveRequests.filter((r) => r.status === "Approved")
                        .length,
                    0
                  )}
                </h3>
              </div>
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Pending Requests</p>
                <h3 className="text-3xl font-bold text-gray-900">
                  {employeesLeaveData.reduce(
                    (sum, emp) =>
                      sum +
                      emp.leaveRequests.filter((r) => r.status === "Pending")
                        .length,
                    0
                  )}
                </h3>
              </div>
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-amber-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Total Leave Days</p>
                <h3 className="text-3xl font-bold text-gray-900">
                  {employeesLeaveData.reduce(
                    (sum, emp) => sum + emp.leaveBalance.totalBalance,
                    0
                  )}
                </h3>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* FILTERS */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-blue-100">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Employee
              </label>
              <div className="relative">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search by name, email, designation..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-12 pr-4 py-3 w-full rounded-xl border-2 border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                />
              </div>
            </div>

            <div className="lg:w-48">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Leave Status
              </label>
              <select
                value={filterLeaveStatus}
                onChange={(e) => setFilterLeaveStatus(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
              >
                <option value="all">All Status</option>
                <option value="Approved">Approved</option>
                <option value="Pending">Pending</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>

            <div className="lg:w-48">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Leave Type
              </label>
              <select
                value={filterLeaveType}
                onChange={(e) => setFilterLeaveType(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
              >
                <option value="all">All Types</option>
                <option value="Vacation">Vacation</option>
                <option value="Sick Leave">Sick Leave</option>
                <option value="Casual Leave">Casual Leave</option>
                <option value="Personal Leave">Personal Leave</option>
              </select>
            </div>
          </div>
        </div>

        {/* EMPLOYEE LIST */}
        <div className="space-y-4">
          {filteredEmployees.map((employee) => {
            const filteredRequests = getFilteredLeaveRequests(
              employee.leaveRequests
            );
            const availablePercent = Math.round(
              (employee.leaveBalance.availableLeave /
                employee.leaveBalance.totalBalance) *
              100
            );

            return (
              <div
                key={employee.id}
                className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-all"
              >
                {/* EMPLOYEE HEADER */}
                <div
                  onClick={() =>
                    setExpandedEmployee(
                      expandedEmployee === employee.id ? null : employee.id
                    )
                  }
                  className="p-6 cursor-pointer hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 flex-1">
                      <img
                        src={employee.avatar}
                        alt={employee.name}
                        className="w-14 h-14 rounded-full border-2 border-blue-200"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900">
                          {employee.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {employee.designation} • {employee.department}
                        </p>
                        <p className="text-xs text-gray-400">{employee.email}</p>
                      </div>
                    </div>

                    <div className="hidden sm:flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Available</p>
                        <p className="text-2xl font-bold text-emerald-600">
                          {employee.leaveBalance.availableLeave}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Used</p>
                        <p className="text-2xl font-bold text-orange-600">
                          {employee.leaveBalance.usedLeave}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Pending</p>
                        <p className="text-2xl font-bold text-blue-600">
                          {employee.leaveBalance.pendingApproval}
                        </p>
                      </div>
                    </div>

                    <ChevronDown
                      className={`w-6 h-6 text-gray-400 transition-transform ${expandedEmployee === employee.id ? "rotate-180" : ""
                        }`}
                    />
                  </div>

                  {/* MOBILE VIEW - LEAVE BALANCE */}
                  <div className="sm:hidden mt-4 grid grid-cols-3 gap-2">
                    <div className="bg-emerald-50 rounded-lg p-3 text-center">
                      <p className="text-xs text-gray-600">Available</p>
                      <p className="text-lg font-bold text-emerald-600">
                        {employee.leaveBalance.availableLeave}
                      </p>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-3 text-center">
                      <p className="text-xs text-gray-600">Used</p>
                      <p className="text-lg font-bold text-orange-600">
                        {employee.leaveBalance.usedLeave}
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 text-center">
                      <p className="text-xs text-gray-600">Pending</p>
                      <p className="text-lg font-bold text-blue-600">
                        {employee.leaveBalance.pendingApproval}
                      </p>
                    </div>
                  </div>
                </div>

                {/* LEAVE DETAILS - EXPANDED */}
                {expandedEmployee === employee.id && (
                  <div className="border-t border-gray-200 p-6 bg-gradient-to-b from-blue-50/50 to-transparent">
                    {/* LEAVE BALANCE PROGRESS */}
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-4">
                        Leave Balance Overview
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-700">
                              Leave Utilization
                            </span>
                            <span className="text-sm font-bold text-gray-900">
                              {employee.leaveBalance.usedLeave} /{" "}
                              {employee.leaveBalance.totalBalance}
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                            <div
                              className="bg-gradient-to-r from-orange-400 to-red-500 h-full rounded-full transition-all"
                              style={{
                                width: `${(employee.leaveBalance.usedLeave / employee.leaveBalance.totalBalance) * 100}%`,
                              }}
                            />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-700">
                              Available Leave
                            </span>
                            <span className="text-sm font-bold text-emerald-600">
                              {availablePercent}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
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

                    {/* LEAVE REQUESTS TABLE */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-bold text-gray-900">
                          Leave Requests ({filteredRequests.length})
                        </h4>
                      </div>

                      {filteredRequests.length > 0 ? (
                        <>
                          <div className="hidden lg:block overflow-x-auto">
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
                                  <tr
                                    key={request.id}
                                    className="hover:bg-gray-50 transition-colors"
                                  >
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
                          {/* Mobile View Requests */}
                          <div className="lg:hidden space-y-3">
                            {filteredRequests.map((request) => (
                              <div key={request.id} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                <div className="flex justify-between items-start mb-2">
                                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLeaveTypeColor(request.leaveType)}`}>
                                    {request.leaveType}
                                  </span>
                                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(request.status)}`}>
                                    {request.status}
                                  </span>
                                </div>
                                <div className="mb-3 space-y-1">
                                  <p className="text-sm font-medium text-gray-800 flex items-center gap-2">
                                    <Calendar size={14} className="text-gray-400" />
                                    {request.startDate} - {request.endDate}
                                  </p>
                                  <p className="text-xs text-gray-500">Duration: {request.days} days</p>
                                  <p className="text-xs text-gray-500">Applied: {request.appliedDate}</p>
                                </div>
                                <div className="flex justify-end gap-2 pt-2 border-t border-gray-50">
                                  <button className="p-2 hover:bg-blue-50 text-blue-600 rounded-lg transition-colors bg-blue-50/50">
                                    <Eye className="w-4 h-4" />
                                  </button>
                                  <button className="p-2 hover:bg-yellow-50 text-yellow-600 rounded-lg transition-colors bg-yellow-50/50">
                                    <Edit2 className="w-4 h-4" />
                                  </button>
                                  <button className="p-2 hover:bg-red-50 text-red-600 rounded-lg transition-colors bg-red-50/50">
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      ) : (
                        <div className="text-center py-8 bg-gray-50 rounded-lg">
                          <p className="text-gray-500">
                            No leave requests match the selected filters
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredEmployees.length === 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center border border-blue-100">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No employees found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminLeaveDetails;
