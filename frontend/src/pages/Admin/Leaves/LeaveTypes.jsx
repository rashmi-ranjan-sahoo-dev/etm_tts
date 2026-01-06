import React, { useState, useEffect } from "react";
import { Plus, Pencil, Trash2, Search, Settings, AlertCircle, Calendar, CheckCircle2, XCircle, Clock } from "lucide-react";

const LeaveTypeModal = ({ close, save, editData }) => {
  const [form, setForm] = useState({
    leaveName: "",
    leaveType: "",
    leaveUnit: "",
    status: "",
    durationDays: "",
    notificationPeriod: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editData) {
      setForm(editData);
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
    if (!form.leaveName.trim()) newErrors.leaveName = "Required";
    if (!form.leaveType) newErrors.leaveType = "Required";
    if (!form.leaveUnit) newErrors.leaveUnit = "Required";
    if (!form.status) newErrors.status = "Required";
    if (form.durationDays === "") newErrors.durationDays = "Required";
    if (form.notificationPeriod === "") newErrors.notificationPeriod = "Required";

    // Numeric validation
    if (form.durationDays !== "" && (isNaN(form.durationDays) || Number(form.durationDays) <= 0)) {
      newErrors.durationDays = "Must be a positive number";
    }
    if (form.notificationPeriod !== "" && (isNaN(form.notificationPeriod) || Number(form.notificationPeriod) < 0)) {
      newErrors.notificationPeriod = "Must be a non-negative number";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      save(form);
      close();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-orange-600 to-amber-600 p-6 rounded-t-2xl">
          <h3 className="text-2xl font-bold text-white">
            {editData ? "Edit Leave Type" : "Add New Leave Type"}
          </h3>
          <p className="text-orange-100 text-sm mt-1">
            {editData ? "Update leave type configuration" : "Configure a new leave type in the system"}
          </p>
        </div>
        
        <div className="p-6 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Leave Name */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Leave Name
              </label>
              <input
                type="text"
                name="leaveName"
                value={form.leaveName}
                onChange={handleChange}
                placeholder="e.g., Annual Leave, Sick Leave"
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.leaveName
                    ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                    : "border-gray-200 focus:border-orange-500 focus:ring-orange-500/10"
                }`}
              />
              {errors.leaveName && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.leaveName}</span>
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
                    : "border-gray-200 focus:border-orange-500 focus:ring-orange-500/10"
                }`}
              >
                <option value="">Select Type</option>
                <option>Paid</option>
                <option>Unpaid</option>
                <option>Compensatory</option>
                <option>Mandatory</option>
              </select>
              {errors.leaveType && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.leaveType}</span>
                </div>
              )}
            </div>
            
            {/* Leave Unit */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Leave Unit
              </label>
              <select
                name="leaveUnit"
                value={form.leaveUnit}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.leaveUnit
                    ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                    : "border-gray-200 focus:border-orange-500 focus:ring-orange-500/10"
                }`}
              >
                <option value="">Select Unit</option>
                <option>Days</option>
                <option>Hours</option>
                <option>Half Days</option>
              </select>
              {errors.leaveUnit && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.leaveUnit}</span>
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
                    : "border-gray-200 focus:border-orange-500 focus:ring-orange-500/10"
                }`}
              >
                <option value="">Select Status</option>
                <option>Active</option>
                <option>Inactive</option>
                <option>Suspended</option>
              </select>
              {errors.status && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.status}</span>
                </div>
              )}
            </div>
            
            {/* Duration Days */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Duration Days
              </label>
              <input
                type="number"
                name="durationDays"
                value={form.durationDays}
                onChange={handleChange}
                placeholder="e.g., 15"
                min="1"
                step="0.5"
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.durationDays
                    ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                    : "border-gray-200 focus:border-orange-500 focus:ring-orange-500/10"
                }`}
              />
              {errors.durationDays && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.durationDays}</span>
                </div>
              )}
            </div>
            
            {/* Notification Period */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Notification Period (days)
              </label>
              <input
                type="number"
                name="notificationPeriod"
                value={form.notificationPeriod}
                onChange={handleChange}
                placeholder="e.g., 7"
                min="0"
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.notificationPeriod
                    ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                    : "border-gray-200 focus:border-orange-500 focus:ring-orange-500/10"
                }`}
              />
              {errors.notificationPeriod && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.notificationPeriod}</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex gap-3 pt-4 border-t">
            <button
              onClick={handleSubmit}
              className="flex-1 bg-gradient-to-r from-orange-600 to-amber-600 text-white px-6 py-3 rounded-xl hover:from-orange-700 hover:to-amber-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 font-semibold"
            >
              {editData ? "Update Leave Type" : "Add Leave Type"}
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

// Main LeaveTypes Component
const LeaveTypes = () => {
  const [selectedIds, setSelectedIds] = useState([]);

  const [leaveTypes, setLeaveTypes] = useState([
    {
      id: 1,
      leaveName: "Annual Leave",
      leaveType: "Paid",
      leaveUnit: "Days",
      status: "Active",
      durationDays: "15",
      notificationPeriod: "7",
    },
    {
      id: 2,
      leaveName: "Sick Leave",
      leaveType: "Paid",
      leaveUnit: "Days",
      status: "Active",
      durationDays: "10",
      notificationPeriod: "0",
    },
    {
      id: 3,
      leaveName: "Maternity Leave",
      leaveType: "Paid",
      leaveUnit: "Days",
      status: "Active",
      durationDays: "90",
      notificationPeriod: "30",
    },
    {
      id: 4,
      leaveName: "Unpaid Leave",
      leaveType: "Unpaid",
      leaveUnit: "Days",
      status: "Active",
      durationDays: "30",
      notificationPeriod: "14",
    },
    {
      id: 5,
      leaveName: "Compensatory Off",
      leaveType: "Compensatory",
      leaveUnit: "Days",
      status: "Active",
      durationDays: "5",
      notificationPeriod: "3",
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
    setLeaveTypes(leaveTypes.filter((item) => item.id !== id));
  };

  const handleSave = (data) => {
    if (editData) {
      setLeaveTypes(leaveTypes.map((lt) => (lt.id === data.id ? data : lt)));
    } else {
      setLeaveTypes([...leaveTypes, { ...data, id: Date.now() }]);
    }
    setOpenModal(false);
  };

  const filteredLeaveTypes = leaveTypes.filter((lt) => {
    if (!search.trim()) return true;

    const s = search.toLowerCase();

    return (
      lt.leaveName.toLowerCase().includes(s) ||
      lt.leaveType.toLowerCase().includes(s) ||
      lt.leaveUnit.toLowerCase().includes(s) ||
      lt.status.toLowerCase().includes(s) ||
      lt.durationDays.toString().includes(s) ||
      lt.notificationPeriod.toString().includes(s)
    );
  });

  const statusBadge = (status) => {
    const statusMap = {
      Active: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
      Inactive: "bg-gray-500/10 text-gray-600 border-gray-500/20",
      Suspended: "bg-rose-500/10 text-rose-600 border-rose-500/20",
    };
    
    return (
      <span className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${statusMap[status] || "bg-gray-100 text-gray-700 border-gray-200"}`}>
        {status}
      </span>
    );
  };

  const getStatusIcon = (status) => {
    if (status === "Active") return <CheckCircle2 className="w-4 h-4 text-emerald-600" />;
    if (status === "Suspended") return <XCircle className="w-4 h-4 text-rose-600" />;
    return <Clock className="w-4 h-4 text-gray-600" />;
  };

  const Item = ({ label, value }) => (
    <div className="flex justify-between border-b pb-1 text-sm">
      <span className="font-medium">{label}:</span>
      <span className="text-gray-700 font-semibold">{value}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* HEADER BAR */}
        <div className="bg-white rounded-2xl shadow-lg shadow-orange-100/50 p-6 mb-6 border border-orange-100/50">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                <Settings className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  Leave Types
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {filteredLeaveTypes.length} {filteredLeaveTypes.length === 1 ? 'type' : 'types'} configured
                  {selectedIds.length > 0 && ` • ${selectedIds.length} selected`}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative flex-1 lg:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search leave types, status..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 bg-white focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"
                />
              </div>

              <button
                onClick={handleAdd}
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-orange-600 hover:to-amber-600 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              >
                <Plus size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* TABLE */}
        <div className="hidden lg:block overflow-hidden bg-white rounded-2xl shadow-lg shadow-orange-100/50 border border-orange-100/50">
          <div className="overflow-x-auto max-h-[650px] overflow-y-auto">
            <table className="w-full text-sm">
              <thead className="sticky top-0 z-10">
                <tr className="bg-gradient-to-r from-orange-50 to-amber-50 border-b-2 border-orange-100">
                  <th className="p-4 text-left">
                    <input
                      type="checkbox"
                      checked={
                        filteredLeaveTypes.length > 0 &&
                        selectedIds.length === filteredLeaveTypes.length
                      }
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedIds(filteredLeaveTypes.map((row) => row.id));
                        } else {
                          setSelectedIds([]);
                        }
                      }}
                      className="w-4 h-4 rounded border-gray-300 text-orange-600 focus:ring-2 focus:ring-orange-500/50 cursor-pointer"
                    />
                  </th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Leave Name</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Leave Type</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Leave Unit</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Status</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Duration Days</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Notification Period</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {filteredLeaveTypes.map((row, index) => (
                  <tr key={index} className="hover:bg-orange-50/50 transition-colors duration-150 cursor-pointer group">
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
                        className="w-4 h-4 rounded border-gray-300 text-orange-600 focus:ring-2 focus:ring-orange-500/50 cursor-pointer"
                      />
                    </td>

                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-orange-600" />
                        <span className="font-semibold text-orange-700 group-hover:text-orange-800">{row.leaveName}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-100 text-blue-700">
                        {row.leaveType}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-indigo-100 text-indigo-700">
                        {row.leaveUnit}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(row.status)}
                        {statusBadge(row.status)}
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-purple-100 text-purple-700">
                        {row.durationDays} {row.leaveUnit.toLowerCase()}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-100 text-amber-700">
                        {row.notificationPeriod} days
                      </span>
                    </td>
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
        <div className="block lg:hidden space-y-4 max-h-[650px] overflow-y-auto">
          {filteredLeaveTypes.map((row, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg shadow-orange-100/50 p-5 space-y-3 border border-orange-100/50 hover:shadow-xl hover:shadow-orange-200/50 transition-all duration-300">
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
                    className="w-4 h-4 rounded border-gray-300 text-orange-600 focus:ring-2 focus:ring-orange-500/50 cursor-pointer mt-1"
                  />
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-orange-600" />
                    <span className="font-bold text-lg text-orange-700">{row.leaveName}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {getStatusIcon(row.status)}
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

              <div className="space-y-2.5">
                <Item label="Leave Type" value={row.leaveType} />
                <Item label="Leave Unit" value={row.leaveUnit} />
                
                <div className="flex justify-between items-center pt-2">
                  <span className="font-medium text-sm">Status:</span>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(row.status)}
                    {statusBadge(row.status)}
                  </div>
                </div>
                
                <Item label="Duration Days" value={`${row.durationDays} ${row.leaveUnit.toLowerCase()}`} />
                <Item label="Notification Period" value={`${row.notificationPeriod} days`} />
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

        {filteredLeaveTypes.length === 0 && (
          <div className="bg-white rounded-2xl shadow-lg shadow-orange-100/50 p-12 text-center border border-orange-100/50">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No leave types found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      {/* MODAL */}
      {openModal && (
        <LeaveTypeModal
          close={() => setOpenModal(false)}
          save={handleSave}
          editData={editData}
        />
      )}
    </div>
  );
};

export default LeaveTypes;