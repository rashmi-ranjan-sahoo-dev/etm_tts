import React, { useState, useEffect } from "react";
import { Plus, Search, CheckCircle2, XCircle, Clock, Calendar, AlertCircle, Check, X } from "lucide-react";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const [year, month, day] = dateStr.split("-");
  return `${day}/${month}/${year}`;
};

const toISO = (date) => {
  if (!date) return "";
  const [d, m, y] = date.split("/");
  return `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`;
};

const LeaveModal = ({ close, save, editData }) => {
  const [form, setForm] = useState({
    employeeName: "",
    empId: "",
    department: "",
    leaveType: "",
    leaveFrom: "",
    leaveTo: "",
    requestedOn: "",
    approvalDate: "",
    reason: "",
  });
  const today = new Date().toISOString().split("T")[0];
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editData) {
      setForm({
        ...editData,
        leaveFrom: toISO(editData.leaveFrom),
        leaveTo: toISO(editData.leaveTo),
        requestedOn: toISO(editData.requestedOn),
        approvalDate: editData.approvalDate ? toISO(editData.approvalDate) : "",
      });
    }
  }, [editData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = () => {
    let newErrors = {};

    if (!form.employeeName.trim()) newErrors.employeeName = "Required";
    if (!form.empId.trim()) newErrors.empId = "Required";
    if (!form.department) newErrors.department = "Required";
    if (!form.leaveType) newErrors.leaveType = "Required";
    if (!form.leaveFrom) newErrors.leaveFrom = "Required";
    if (!form.leaveTo) newErrors.leaveTo = "Required";
    if (!form.requestedOn) newErrors.requestedOn = "Required";
    if (!form.reason.trim()) newErrors.reason = "Required";

    if (form.leaveFrom && form.leaveTo && form.leaveFrom > form.leaveTo)
      newErrors.leaveFrom = "Must be before Leave To date";

    if (form.requestedOn && form.leaveTo && form.requestedOn > form.leaveTo)
      newErrors.requestedOn = "Must be before Leave To date";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      save({
        ...form,
        leaveFrom: formatDate(form.leaveFrom),
        leaveTo: formatDate(form.leaveTo),
        requestedOn: formatDate(form.requestedOn),
        approvalDate: form.approvalDate ? formatDate(form.approvalDate) : "",
      });
      close();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-teal-600 to-cyan-600 p-6 rounded-t-2xl">
          <h3 className="text-2xl font-bold text-white">
            {editData ? "Edit Leave Request" : "New Leave Request"}
          </h3>
          <p className="text-teal-100 text-sm mt-1">
            {editData ? "Update leave information" : "Add a new leave application"}
          </p>
        </div>
        
        <div className="p-6 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Employee Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Admin Name
              </label>
              <input
                type="text"
                name="employeeName"
                value={form.employeeName}
                onChange={handleChange}
                placeholder="Enter admin name"
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.employeeName
                    ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                    : "border-gray-200 focus:border-teal-500 focus:ring-teal-500/10"
                }`}
              />
              {errors.employeeName && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.employeeName}</span>
                </div>
              )}
            </div>
            
            {/* Employee ID */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Admin ID
              </label>
              <input
                type="text"
                name="empId"
                value={form.empId}
                onChange={handleChange}
                placeholder="Enter admin ID"
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.empId
                    ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                    : "border-gray-200 focus:border-teal-500 focus:ring-teal-500/10"
                }`}
              />
              {errors.empId && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.empId}</span>
                </div>
              )}
            </div>
            
            {/* Department */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Department
              </label>
              <select
                name="department"
                value={form.department}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.department
                    ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                    : "border-gray-200 focus:border-teal-500 focus:ring-teal-500/10"
                }`}
              >
                <option value="">Select Department</option>
                <option>IT</option>
                <option>HR</option>
                <option>Finance</option>
                <option>Marketing</option>
                <option>Operations</option>
              </select>
              {errors.department && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.department}</span>
                </div>
              )}
            </div>
            
            {/* Leave Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Leave Type
              </label>
              <select
                name="leaveType"
                value={form.leaveType}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.leaveType
                    ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                    : "border-gray-200 focus:border-teal-500 focus:ring-teal-500/10"
                }`}
              >
                <option value="">Select Leave Type</option>
                <option>Casual Leave</option>
                <option>Sick Leave</option>
                <option>Marriage Leave</option>
                <option>Maternity Leave</option>
              </select>
              {errors.leaveType && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.leaveType}</span>
                </div>
              )}
            </div>
            
            {/* Leave From */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Leave From
              </label>
              <input
                type="date"
                name="leaveFrom"
                value={form.leaveFrom}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.leaveFrom
                    ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                    : "border-gray-200 focus:border-teal-500 focus:ring-teal-500/10"
                }`}
              />
              {errors.leaveFrom && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.leaveFrom}</span>
                </div>
              )}
            </div>
            
            {/* Leave To */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Leave To
              </label>
              <input
                type="date"
                name="leaveTo"
                value={form.leaveTo}
                onChange={handleChange}
                min={form.leaveFrom || ""}
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.leaveTo
                    ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                    : "border-gray-200 focus:border-teal-500 focus:ring-teal-500/10"
                }`}
              />
              {errors.leaveTo && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.leaveTo}</span>
                </div>
              )}
            </div>
            
            {/* Requested On */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Requested On
              </label>
              <input
                type="date"
                name="requestedOn"
                value={form.requestedOn}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.requestedOn
                    ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                    : "border-gray-200 focus:border-teal-500 focus:ring-teal-500/10"
                }`}
              />
              {errors.requestedOn && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.requestedOn}</span>
                </div>
              )}
            </div>
            
            {/* Approval Date */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Approval Date (Optional)
              </label>
              <input
                type="date"
                name="approvalDate"
                value={form.approvalDate}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all border-gray-200 focus:border-teal-500 focus:ring-teal-500/10"
              />
            </div>
            
            {/* Reason */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Reason
              </label>
              <textarea
                name="reason"
                rows="4"
                value={form.reason}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 resize-none focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.reason
                    ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                    : "border-gray-200 focus:border-teal-500 focus:ring-teal-500/10"
                }`}
                placeholder="Please provide a reason for the leave request..."
              />
              {errors.reason && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.reason}</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex gap-3 pt-4 border-t">
            <button
              onClick={handleSubmit}
              className="flex-1 bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-3 rounded-xl hover:from-teal-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 font-semibold"
            >
              {editData ? "Update Request" : "Add Request"}
            </button>
            <button
              onClick={close}
              className="px-6 py-3 rounded-xl border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all font-semibold"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main AdminLeaves Component
const AdminLeaves = () => {
  const [selectedIds, setSelectedIds] = useState([]);

  const [leaves, setLeaves] = useState([
    {
      id: 1,
      employeeName: "John Doe",
      empId: "EMP001",
      department: "IT",
      leaveType: "Casual Leave",
      leaveFrom: "22/02/2025",
      leaveTo: "26/02/2025",
      status: "Pending",
      requestedOn: "20/02/2025",
      approvalDate: "",
      approvedBy: "HR",
      reason: "Personal work",
    },
    {
      id: 2,
      employeeName: "Jane Smith",
      empId: "EMP002",
      department: "HR",
      leaveType: "Sick Leave",
      leaveFrom: "18/02/2025",
      leaveTo: "20/02/2025",
      status: "Pending",
      requestedOn: "17/02/2025",
      approvalDate: "",
      approvedBy: "Manager & HR",
      reason: "Medical emergency",
    },
    {
      id: 3,
      employeeName: "Mike Johnson",
      empId: "EMP003",
      department: "Finance",
      leaveType: "Marriage Leave",
      leaveFrom: "01/03/2025",
      leaveTo: "05/03/2025",
      status: "Pending",
      requestedOn: "15/02/2025",
      approvalDate: "",
      approvedBy: "Manager",
      reason: "Wedding ceremony",
    },
  ]);

  const [openModal, setOpenModal] = useState(false);
  const [editData, setEditData] = useState(null);
  const [search, setSearch] = useState("");

  const handleAdd = () => {
    setEditData(null);
    setOpenModal(true);
  };

  const handleEdit = (row) => {
    setEditData(row);
    setOpenModal(true);
  };

  const handleApprove = (id) => {
    const today = new Date().toISOString().split("T")[0];
    setLeaves(leaves.map((l) => 
      l.id === id ? { ...l, status: "Approved", approvalDate: formatDate(today) } : l
    ));
  };

  const handleReject = (id) => {
    const today = new Date().toISOString().split("T")[0];
    setLeaves(leaves.map((l) => 
      l.id === id ? { ...l, status: "Rejected", approvalDate: formatDate(today) } : l
    ));
  };

  const handleSave = (data) => {
    if (editData) {
      setLeaves(leaves.map((l) => (l.id === data.id ? data : l)));
    } else {
      // Admin added leaves are not shown in this table as per requirement
      // setLeaves([...leaves, { ...data, id: Date.now(), status: "Pending", approvedBy: "HR" }]);
      console.log("New Admin Leave Created (Hidden):", data);
    }
    setOpenModal(false);
  };

  const filteredLeaves = leaves.filter((l) => {
    if (!search.trim()) return true;

    const s = search.toLowerCase();

    return (
      l.employeeName.toLowerCase().includes(s) ||
      l.empId.toLowerCase().includes(s) ||
      l.department.toLowerCase().includes(s) ||
      l.leaveType.toLowerCase().includes(s) ||
      l.status.toLowerCase().includes(s) ||
      l.leaveFrom.toLowerCase().includes(s) ||
      l.leaveTo.toLowerCase().includes(s) ||
      l.requestedOn.toLowerCase().includes(s)
    );
  });

  const statusBadge = (status) => {
    const statusMap = {
      Approved: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
      Rejected: "bg-rose-500/10 text-rose-600 border-rose-500/20",
      Pending: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    };
    
    return (
      <span className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${statusMap[status] || "bg-gray-100 text-gray-700 border-gray-200"}`}>
        {status}
      </span>
    );
  };

  const getStatusIcon = (status) => {
    if (status === "Approved") return <CheckCircle2 className="w-4 h-4 text-emerald-600" />;
    if (status === "Rejected") return <XCircle className="w-4 h-4 text-rose-600" />;
    return <Clock className="w-4 h-4 text-amber-600" />;
  };

  const Item = ({ label, value }) => (
    <div className="flex justify-between border-b pb-1 text-sm">
      <span className="font-medium">{label}:</span>
      <span className="text-gray-700">{value}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* HEADER BAR */}
        <div className="bg-white rounded-2xl shadow-lg shadow-teal-100/50 p-6 mb-6 border border-teal-100/50">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Manager Leave Management
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {filteredLeaves.length} {filteredLeaves.length === 1 ? 'request' : 'requests'} found
                  {selectedIds.length > 0 && ` • ${selectedIds.length} selected`}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative flex-1 lg:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search employees, status..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 bg-white focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all"
                />
              </div>

              <button
                onClick={handleAdd}
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              >
                <Plus size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* TABLE */}
        <div className="hidden md:block overflow-hidden bg-white rounded-2xl shadow-lg shadow-teal-100/50 border border-teal-100/50">
          <div className="overflow-x-auto max-h-[650px] overflow-y-auto">
            <table className="w-full text-sm">
              <thead className="sticky top-0 z-10">
                <tr className="bg-gradient-to-r from-teal-50 to-cyan-50 border-b-2 border-teal-100">
                  <th className="p-4 text-left">
                    <input
                      type="checkbox"
                      checked={
                        filteredLeaves.length > 0 &&
                        selectedIds.length === filteredLeaves.length
                      }
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedIds(filteredLeaves.map((row) => row.id));
                        } else {
                          setSelectedIds([]);
                        }
                      }}
                      className="w-4 h-4 rounded border-gray-300 text-teal-600 focus:ring-2 focus:ring-teal-500/50 cursor-pointer"
                    />
                  </th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Employee Name</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">EMP ID</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Department</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Leave Type</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Leave From</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Leave To</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Status</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Requested On</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Approval Date</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Approved By</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {filteredLeaves.map((row, index) => (
                  <tr key={index} className="hover:bg-teal-50/50 transition-colors duration-150 cursor-pointer group">
                    <td className="p-4">
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(row.id)}
                        onChange={() => {
                          if (selectedIds.includes(row.id)) {
                            setSelectedIds(
                              selectedIds.filter((id) => id !== row.id)
                            );
                          } else {
                            setSelectedIds([...selectedIds, row.id]);
                          }
                        }}
                        className="w-4 h-4 rounded border-gray-300 text-teal-600 focus:ring-2 focus:ring-teal-500/50 cursor-pointer"
                      />
                    </td>

                    <td className="p-4">
                      <span className="font-semibold text-teal-600 group-hover:text-teal-700">{row.employeeName}</span>
                    </td>
                    <td className="p-4 text-gray-700">{row.empId}</td>
                    <td className="p-4">
                      <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-700">
                        {row.department}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="font-medium text-gray-900">{row.leaveType}</span>
                    </td>
                    <td className="p-4 text-gray-700">{row.leaveFrom}</td>
                    <td className="p-4 text-gray-700">{row.leaveTo}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(row.status)}
                        {statusBadge(row.status)}
                      </div>
                    </td>
                    <td className="p-4 text-gray-700">{row.requestedOn}</td>
                    <td className="p-4 text-gray-700">{row.approvalDate || "-"}</td>
                    <td className="p-4 text-gray-700">{row.approvedBy || "-"}</td>
                    <td className="p-4">
                      {row.status === "Pending" && (row.approvedBy === "Manager" || row.approvedBy === "Manager & HR") ? (
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleApprove(row.id)}
                            className="p-2 rounded-lg text-emerald-600 hover:bg-emerald-50 transition-colors"
                            title="Approve"
                          >
                            <Check size={18} />
                          </button>
                          <button
                            onClick={() => handleReject(row.id)}
                            className="p-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
                            title="Reject"
                          >
                            <X size={18} />
                          </button>
                        </div>
                      ) : (
                        <span className="text-gray-400 text-xs">No action</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* MOBILE VIEW */}
        <div className="block md:hidden space-y-4 max-h-[650px] overflow-y-auto">
          {filteredLeaves.map((row, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg shadow-teal-100/50 p-5 space-y-3 border border-teal-100/50 hover:shadow-xl hover:shadow-teal-200/50 transition-all duration-300">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3 flex-1">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(row.id)}
                    onChange={() => {
                      if (selectedIds.includes(row.id)) {
                        setSelectedIds(selectedIds.filter((id) => id !== row.id));
                      } else {
                        setSelectedIds([...selectedIds, row.id]);
                      }
                    }}
                    className="w-4 h-4 rounded border-gray-300 text-teal-600 focus:ring-2 focus:ring-teal-500/50 cursor-pointer mt-1"
                  />
                  <div>
                    <span className="font-bold text-lg text-teal-600">{row.employeeName}</span>
                    <p className="text-sm text-gray-500 mt-0.5">{row.empId} • {row.department}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {getStatusIcon(row.status)}
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

              <div className="space-y-2.5">
                <Item label="Leave Type" value={row.leaveType} />
                <Item label="Leave From" value={row.leaveFrom} />
                <Item label="Leave To" value={row.leaveTo} />
                
                <div className="flex justify-between items-center pt-2">
                  <span className="font-medium text-sm">Status:</span>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(row.status)}
                    {statusBadge(row.status)}
                  </div>
                </div>
                
                <Item label="Requested On" value={row.requestedOn} />
                <Item label="Approval Date" value={row.approvalDate} />
                <Item label="Approved By" value={row.approvedBy} />
              </div>

              {row.status === "Pending" && (row.approvedBy === "Manager" || row.approvedBy === "Manager & HR") && (
                <div className="flex gap-3 pt-3 border-t border-gray-100">
                  <button
                    onClick={() => handleApprove(row.id)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-emerald-600 bg-emerald-50 hover:bg-emerald-100 transition-colors font-semibold"
                  >
                    <Check size={18} />
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(row.id)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-red-600 bg-red-50 hover:bg-red-100 transition-colors font-semibold"
                  >
                    <X size={18} />
                    Reject
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredLeaves.length === 0 && (
          <div className="bg-white rounded-2xl shadow-lg shadow-teal-100/50 p-12 text-center border border-teal-100/50">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No leave requests found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      {/* MODAL */}
      {openModal && (
        <LeaveModal
          close={() => setOpenModal(false)}
          save={handleSave}
          editData={editData}
        />
      )}
    </div>
  );
};

export default AdminLeaves;