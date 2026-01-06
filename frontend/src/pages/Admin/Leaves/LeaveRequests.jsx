import React, { useState, useEffect } from "react";
import { Plus, Pencil, Trash2, Search, ClipboardList, AlertCircle, CheckCircle2, XCircle, Clock } from "lucide-react";

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

const LeaveRequestModal = ({ close, save, editData }) => {
  const [form, setForm] = useState({
    empName: "",
    empId: "",
    dept: "",
    leaveType: "",
    leaveFrom: "",
    leaveTo: "",
    status: "",
    requestedOn: "",
    approvalDate: "",
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

    // Required fields validation
    if (!form.empName.trim()) newErrors.empName = "Required";
    if (!form.empId.trim()) newErrors.empId = "Required";
    if (!form.dept) newErrors.dept = "Required";
    if (!form.leaveType) newErrors.leaveType = "Required";
    if (!form.leaveFrom) newErrors.leaveFrom = "Required";
    if (!form.leaveTo) newErrors.leaveTo = "Required";
    if (!form.status) newErrors.status = "Required";
    if (!form.requestedOn) newErrors.requestedOn = "Required";

    // Requested On should not be in future
    if (form.requestedOn && form.requestedOn > today)
      newErrors.requestedOn = "Cannot be in future";

    // Leave From must be <= Leave To
    if (form.leaveFrom && form.leaveTo && form.leaveFrom > form.leaveTo)
      newErrors.leaveFrom = "Must be before Leave To date";

    // If status is Approved or Rejected, Approval Date is required
    if ((form.status === "Approved" || form.status === "Rejected") && !form.approvalDate)
      newErrors.approvalDate = "Required for Approved/Rejected status";

    // Approval date should not be before requested date
    if (form.approvalDate && form.requestedOn && form.approvalDate < form.requestedOn)
      newErrors.approvalDate = "Cannot be before Requested On date";

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
        <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-violet-600 p-6 rounded-t-2xl">
          <h3 className="text-2xl font-bold text-white">
            {editData ? "Edit Leave Request" : "Add New Leave Request"}
          </h3>
          <p className="text-purple-100 text-sm mt-1">
            {editData ? "Update leave request information" : "Add a new leave request to the system"}
          </p>
        </div>
        
        <div className="p-6 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Employee Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Employee Name
              </label>
              <input
                type="text"
                name="empName"
                value={form.empName}
                onChange={handleChange}
                placeholder="Enter employee name"
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.empName
                    ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                    : "border-gray-200 focus:border-purple-500 focus:ring-purple-500/10"
                }`}
              />
              {errors.empName && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.empName}</span>
                </div>
              )}
            </div>
            
            {/* Emp ID */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Employee ID
              </label>
              <input
                type="text"
                name="empId"
                value={form.empId}
                onChange={handleChange}
                placeholder="e.g., EMP001"
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.empId
                    ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                    : "border-gray-200 focus:border-purple-500 focus:ring-purple-500/10"
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
                name="dept"
                value={form.dept}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.dept
                    ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                    : "border-gray-200 focus:border-purple-500 focus:ring-purple-500/10"
                }`}
              >
                <option value="">Select Department</option>
                <option>Engineering</option>
                <option>Human Resources</option>
                <option>Marketing</option>
                <option>Sales</option>
                <option>Finance</option>
                <option>Operations</option>
              </select>
              {errors.dept && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.dept}</span>
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
                    : "border-gray-200 focus:border-purple-500 focus:ring-purple-500/10"
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
                    : "border-gray-200 focus:border-purple-500 focus:ring-purple-500/10"
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
                min={form.leaveFrom}
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.leaveTo
                    ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                    : "border-gray-200 focus:border-purple-500 focus:ring-purple-500/10"
                }`}
              />
              {errors.leaveTo && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.leaveTo}</span>
                </div>
              )}
            </div>
            
            {/* Status */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Status
              </label>
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.status
                    ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                    : "border-gray-200 focus:border-purple-500 focus:ring-purple-500/10"
                }`}
              >
                <option value="">Select Status</option>
                <option>Pending</option>
                <option>Approved</option>
                <option>Rejected</option>
              </select>
              {errors.status && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.status}</span>
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
                max={today}
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.requestedOn
                    ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                    : "border-gray-200 focus:border-purple-500 focus:ring-purple-500/10"
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
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Approval Date
                <span className="text-gray-500 font-normal ml-2">(Required for Approved/Rejected)</span>
              </label>
              <input
                type="date"
                name="approvalDate"
                value={form.approvalDate}
                onChange={handleChange}
                min={form.requestedOn}
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.approvalDate
                    ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                    : "border-gray-200 focus:border-purple-500 focus:ring-purple-500/10"
                }`}
              />
              {errors.approvalDate && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.approvalDate}</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex gap-3 pt-4 border-t">
            <button
              onClick={handleSubmit}
              className="flex-1 bg-gradient-to-r from-purple-600 to-violet-600 text-white px-6 py-3 rounded-xl hover:from-purple-700 hover:to-violet-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 font-semibold"
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

// Main LeaveRequests Component
const LeaveRequests = () => {
  const [selectedIds, setSelectedIds] = useState([]);

  const [requests, setRequests] = useState([
    {
      id: 1,
      empName: "John Doe",
      empId: "EMP001",
      dept: "Engineering",
      leaveType: "Casual Leave",
      leaveFrom: "15/01/2026",
      leaveTo: "18/01/2026",
      status: "Approved",
      requestedOn: "10/01/2026",
      approvalDate: "12/01/2026",
    },
    {
      id: 2,
      empName: "Jane Smith",
      empId: "EMP002",
      dept: "Human Resources",
      leaveType: "Sick Leave",
      leaveFrom: "20/01/2026",
      leaveTo: "22/01/2026",
      status: "Pending",
      requestedOn: "18/01/2026",
      approvalDate: "",
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

  const handleDelete = (id) => {
    setRequests(requests.filter((item) => item.id !== id));
  };

  const handleSave = (data) => {
    if (editData) {
      setRequests(requests.map((r) => (r.id === data.id ? data : r)));
    } else {
      setRequests([...requests, { ...data, id: Date.now() }]);
    }
    setOpenModal(false);
  };

  const filteredRequests = requests.filter((r) => {
    if (!search.trim()) return true;

    const s = search.toLowerCase();

    return (
      r.empName.toLowerCase().includes(s) ||
      r.empId.toLowerCase().includes(s) ||
      r.dept.toLowerCase().includes(s) ||
      r.leaveType.toLowerCase().includes(s) ||
      r.status.toLowerCase().includes(s) ||
      r.leaveFrom.toLowerCase().includes(s) ||
      r.leaveTo.toLowerCase().includes(s) ||
      r.requestedOn.toLowerCase().includes(s) ||
      (r.approvalDate && r.approvalDate.toLowerCase().includes(s))
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
      <span className="text-gray-700">{value || "N/A"}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-violet-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* HEADER BAR */}
        <div className="bg-white rounded-2xl shadow-lg shadow-purple-100/50 p-6 mb-6 border border-purple-100/50">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-violet-600 rounded-xl flex items-center justify-center shadow-lg">
                <ClipboardList className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                  Leave Requests
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {filteredRequests.length} {filteredRequests.length === 1 ? 'request' : 'requests'} found
                  {selectedIds.length > 0 && ` • ${selectedIds.length} selected`}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative flex-1 lg:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search requests, employee, status..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 bg-white focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all"
                />
              </div>

              <button
                onClick={handleAdd}
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-violet-500 text-white hover:from-purple-600 hover:to-violet-600 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              >
                <Plus size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* TABLE */}
        <div className="hidden md:block overflow-hidden bg-white rounded-2xl shadow-lg shadow-purple-100/50 border border-purple-100/50">
          <div className="overflow-x-auto max-h-[650px] overflow-y-auto">
            <table className="w-full text-sm">
              <thead className="sticky top-0 z-10">
                <tr className="bg-gradient-to-r from-purple-50 to-violet-50 border-b-2 border-purple-100">
                  <th className="p-4 text-left">
                    <input
                      type="checkbox"
                      checked={
                        filteredRequests.length > 0 &&
                        selectedIds.length === filteredRequests.length
                      }
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedIds(filteredRequests.map((row) => row.id));
                        } else {
                          setSelectedIds([]);
                        }
                      }}
                      className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-2 focus:ring-purple-500/50 cursor-pointer"
                    />
                  </th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Employee Name</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Emp ID</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Department</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Leave Type</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Leave From</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Leave To</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Status</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Requested On</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Approval Date</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {filteredRequests.map((row, index) => (
                  <tr key={index} className="hover:bg-purple-50/50 transition-colors duration-150 cursor-pointer group">
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
                        className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-2 focus:ring-purple-500/50 cursor-pointer"
                      />
                    </td>

                    <td className="p-4">
                      <span className="font-semibold text-purple-600 group-hover:text-purple-700">{row.empName}</span>
                    </td>
                    <td className="p-4 text-gray-700">{row.empId}</td>
                    <td className="p-4">
                      <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-indigo-100 text-indigo-700">
                        {row.dept}
                      </span>
                    </td>
                    <td className="p-4 text-gray-700">{row.leaveType}</td>
                    <td className="p-4 text-gray-700">{row.leaveFrom}</td>
                    <td className="p-4 text-gray-700">{row.leaveTo}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(row.status)}
                        {statusBadge(row.status)}
                      </div>
                    </td>
                    <td className="p-4 text-gray-700">{row.requestedOn}</td>
                    <td className="p-4 text-gray-600">{row.approvalDate || "N/A"}</td>
                    <td className="p-4">
                      <div className="flex gap-3">
                        <button
                          onClick={() => handleEdit(row)}
                          className="p-2 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
                        >
                          <Pencil size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(row.id)}
                          className="p-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* MOBILE VIEW */}
        <div className="block md:hidden space-y-4 max-h-[650px] overflow-y-auto">
          {filteredRequests.map((row, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg shadow-purple-100/50 p-5 space-y-3 border border-purple-100/50 hover:shadow-xl hover:shadow-purple-200/50 transition-all duration-300">
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
                    className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-2 focus:ring-purple-500/50 cursor-pointer mt-1"
                  />
                  <div>
                    <span className="font-bold text-lg text-purple-600">{row.empName}</span>
                    <p className="text-sm text-gray-500 mt-0.5">{row.empId} • {row.dept}</p>
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
              </div>

              <div className="flex gap-3 pt-3 border-t border-gray-100">
                <button
                  onClick={() => handleEdit(row)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors font-semibold"
                >
                  <Pencil size={18} />
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(row.id)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-red-600 bg-red-50 hover:bg-red-100 transition-colors font-semibold"
                >
                  <Trash2 size={18} />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredRequests.length === 0 && (
          <div className="bg-white rounded-2xl shadow-lg shadow-purple-100/50 p-12 text-center border border-purple-100/50">
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
        <LeaveRequestModal
          close={() => setOpenModal(false)}
          save={handleSave}
          editData={editData}
        />
      )}
    </div>
  );
};

export default LeaveRequests;