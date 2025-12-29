

import React, { useState,useEffect } from "react";
import { Plus, Pencil, Trash2, Search, CheckCircle2, XCircle, Clock, Calendar } from "lucide-react";


// const formatDate = (dateStr) => {
//   if (!dateStr) return "";
//   const [year, month, day] = dateStr.split("-");
//   return `${day}/${month}/${year}`;
// };

// LeaveModal Component (embedded)
// const LeaveModal = ({ close, save, editData }) => {
//   const [formData, setFormData] = useState(
//     editData || {
//       applyDate: "",
//       fromDate: "",
//       toDate: "",
//       halfDay: "No",
//       type: "Casual Leave",
//       reason: "",
//     }
//   );

//   const handleSubmit = () => {
//     save(formData);
//   };

//   return (
//     <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//         <div className="sticky top-0 bg-gradient-to-r from-teal-600 to-cyan-600 p-6 rounded-t-2xl">
//           <h3 className="text-2xl font-bold text-white">
//             {editData ? "Edit Leave Request" : "New Leave Request"}
//           </h3>
//           <p className="text-teal-100 text-sm mt-1">
//             {editData ? "Update your leave information" : "Submit a new leave application"}
//           </p>
//         </div>
        
//         <div className="p-6 space-y-5">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Application Date</label>
//               <input
//                 type="date"
//                 required
//                 value={formData.applyDate}
//                 onChange={(e) => setFormData({ ...formData, applyDate: e.target.value })}
//                 className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 transition-all"
//               />
//             </div>
            
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Leave Type</label>
//               <select
//                 value={formData.type}
//                 onChange={(e) => setFormData({ ...formData, type: e.target.value })}
//                 className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 transition-all"
//               >
//                 <option>Casual Leave</option>
//                 <option>Sick Leave</option>
//                 <option>Annual Leave</option>
//                 <option>Personal Leave</option>
//               </select>
//             </div>
            
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">From Date</label>
//               <input
//                 type="date"
//                 required
//                 value={formData.fromDate}
//                 onChange={(e) => setFormData({ ...formData, fromDate: e.target.value })}
//                 className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 transition-all"
//               />
//             </div>
            
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">To Date</label>
//               <input
//                 type="date"
//                 required
//                 value={formData.toDate}
//                 onChange={(e) => setFormData({ ...formData, toDate: e.target.value })}
//                 className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 transition-all"
//               />
//             </div>
            
//             <div className="md:col-span-2">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Half Day</label>
//               <select
//                 value={formData.halfDay}
//                 onChange={(e) => setFormData({ ...formData, halfDay: e.target.value })}
//                 className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 transition-all"
//               >
//                 <option>Yes</option>
//                 <option>No</option>
//               </select>
//             </div>
            
//             <div className="md:col-span-2">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Reason</label>
//               <textarea
//                 rows="4"
//                 required
//                 value={formData.reason}
//                 onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
//                 className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 resize-none focus:outline-none focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 transition-all"
//                 placeholder="Please provide a reason for your leave request..."
//               />
//             </div>
//           </div>
          
//           <div className="flex gap-3 pt-4 border-t">
//             <button
//               onClick={handleSubmit}
//               className="flex-1 bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-3 rounded-xl hover:from-teal-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 font-semibold"
//             >
//               {editData ? "Update Request" : "Submit Request"}
//             </button>
//             <button
//               onClick={close}
//               className="px-6 py-3 rounded-xl border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all font-semibold"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

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

// LeaveModal Component with Full Validation
const LeaveModal = ({ close, save, editData }) => {
  const [form, setForm] = useState({
    applyDate: "",
    fromDate: "",
    toDate: "",
    halfDay: "",
    type: "",
    status: "",
    reason: "",
  });
  const today = new Date().toISOString().split("T")[0];
  const [errors, setErrors] = useState({});

  // Pre-fill data when editing
  useEffect(() => {
    if (editData) {
      setForm({
        ...editData,
        applyDate: toISO(editData.applyDate),
        fromDate: toISO(editData.fromDate),
        toDate: toISO(editData.toDate),
      });
    }
  }, [editData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = () => {
    let newErrors = {};

    // Required fields validation
    if (!form.applyDate) newErrors.applyDate = "Required";
    if (!form.fromDate) newErrors.fromDate = "Required";
    if (!form.toDate) newErrors.toDate = "Required";
    if (!form.halfDay) newErrors.halfDay = "Required";
    if (!form.type) newErrors.type = "Required";
    if (!form.reason.trim()) newErrors.reason = "Required";

    // Dates should not be before today (only for new requests)
    if (!editData) {
      if (form.applyDate && form.applyDate < today)
        newErrors.applyDate = "Cannot be before today";

      if (form.fromDate && form.fromDate < today)
        newErrors.fromDate = "Cannot be before today";

      if (form.toDate && form.toDate < today)
        newErrors.toDate = "Cannot be before today";
    }

    // Apply date must be <= to date
    if (form.applyDate && form.toDate && form.applyDate > form.toDate)
      newErrors.applyDate = "Must be before To Date";

    // From date must be <= to date
    if (form.fromDate && form.toDate && form.fromDate > form.toDate)
      newErrors.fromDate = "Must be before To Date";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      save({
        ...form,
        applyDate: formatDate(form.applyDate),
        fromDate: formatDate(form.fromDate),
        toDate: formatDate(form.toDate),
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
            {editData ? "Update your leave information" : "Submit a new leave application"}
          </p>
        </div>
        
        <div className="p-6 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Application Date */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Application Date
              </label>
              <input
                type="date"
                name="applyDate"
                value={form.applyDate}
                onChange={handleChange}
                min={today}
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.applyDate
                    ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                    : "border-gray-200 focus:border-teal-500 focus:ring-teal-500/10"
                }`}
              />
              {errors.applyDate && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.applyDate}</span>
                </div>
              )}
            </div>
            
            {/* Leave Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Leave Type
              </label>
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.type
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
              {errors.type && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.type}</span>
                </div>
              )}
            </div>
            
            {/* From Date */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                From Date
              </label>
              <input
                type="date"
                name="fromDate"
                value={form.fromDate}
                onChange={handleChange}
                min={today}
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.fromDate
                    ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                    : "border-gray-200 focus:border-teal-500 focus:ring-teal-500/10"
                }`}
              />
              {errors.fromDate && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.fromDate}</span>
                </div>
              )}
            </div>
            
            {/* To Date */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                To Date
              </label>
              <input
                type="date"
                name="toDate"
                value={form.toDate}
                onChange={handleChange}
                min={form.fromDate || today}
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.toDate
                    ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                    : "border-gray-200 focus:border-teal-500 focus:ring-teal-500/10"
                }`}
              />
              {errors.toDate && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.toDate}</span>
                </div>
              )}
            </div>
            
            {/* Half Day */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Half Day
              </label>
              <select
                name="halfDay"
                value={form.halfDay}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.halfDay
                    ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                    : "border-gray-200 focus:border-teal-500 focus:ring-teal-500/10"
                }`}
              >
                <option value="">Select Option</option>
                <option>Yes</option>
                <option>No</option>
              </select>
              {errors.halfDay && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.halfDay}</span>
                </div>
              )}
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
                placeholder="Please provide a reason for your leave request..."
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
              {editData ? "Update Request" : "Submit Request"}
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


// Main MyLeaves Component
const MyLeaves = () => {
  const [selectedIds, setSelectedIds] = useState([]);

  const [leaves, setLeaves] = useState([
    {
      id: 1,
      applyDate: "02/22/2019",
      fromDate: "02/22/2019",
      toDate: "02/26/2019",
      halfDay: "Yes",
      type: "Casual Leave",
      status: "Approved",
      reason: "Lorem Ipsum is sim..",
    },
    {
      id: 2,
      applyDate: "02/17/2019",
      fromDate: "02/22/2019",
      toDate: "02/26/2019",
      halfDay: "No",
      type: "Sick Leave",
      status: "Rejected",
      reason: "Lorem Ipsum is sim..",
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
    setLeaves(leaves.filter((item) => item.id !== id));
  };

  const handleSave = (data) => {
    if (editData) {
      setLeaves(leaves.map((l) => (l.id === data.id ? data : l)));
    } else {
      setLeaves([...leaves, { ...data, id: Date.now(), status: "Pending" }]);
    }
    setOpenModal(false);
  };

  const filteredLeaves = leaves.filter((l) => {
    if (!search.trim()) return true;

    const s = search.toLowerCase();

    return (
      l.type.toLowerCase().includes(s) ||
      l.status.toLowerCase().includes(s) ||
      l.reason.toLowerCase().includes(s) ||
      l.applyDate.toLowerCase().includes(s) ||
      l.fromDate.toLowerCase().includes(s) ||
      l.toDate.toLowerCase().includes(s)
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
                  My Leaves
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
                  placeholder="Search leaves, dates, status..."
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
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Application Date</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">From Date</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">To Date</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Half Day</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Leave Type</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Status</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Reason</th>
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
                      <span className="font-semibold text-teal-600 group-hover:text-teal-700">{row.applyDate}</span>
                    </td>
                    <td className="p-4 text-gray-700">{row.fromDate}</td>
                    <td className="p-4 text-gray-700">{row.toDate}</td>
                    <td className="p-4">
                      <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-700">
                        {row.halfDay}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="font-medium text-gray-900">{row.type}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(row.status)}
                        {statusBadge(row.status)}
                      </div>
                    </td>
                    <td className="p-4 text-gray-600">{row.reason}</td>
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
                    <span className="font-bold text-lg text-teal-600">{row.type}</span>
                    <p className="text-sm text-gray-500 mt-0.5">Applied: {row.applyDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {getStatusIcon(row.status)}
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

              <div className="space-y-2.5">
                <Item label="From Date" value={row.fromDate} />
                <Item label="To Date" value={row.toDate} />
                <Item label="Half Day" value={row.halfDay} />

                <div className="flex justify-between items-center pt-2">
                  <span className="font-medium text-sm">Status:</span>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(row.status)}
                    {statusBadge(row.status)}
                  </div>
                </div>

                <Item label="Reason" value={row.reason} />
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

export default MyLeaves;