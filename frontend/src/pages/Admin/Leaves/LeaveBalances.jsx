import React, { useState, useEffect } from "react";
import { Plus, Pencil, Trash2, Search, Wallet, AlertCircle, TrendingUp } from "lucide-react";

const LeaveBalanceModal = ({ close, save, editData }) => {
  const [form, setForm] = useState({
    empName: "",
    previousBalance: "",
    currentBalance: "",
    totalBalance: "",
    usedLeave: "",
    acceptedLeave: "",
    rejectedLeave: "",
    expiredLeave: "",
    carryOverBalance: "",
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
    if (!form.empName.trim()) newErrors.empName = "Required";
    if (form.previousBalance === "") newErrors.previousBalance = "Required";
    if (form.currentBalance === "") newErrors.currentBalance = "Required";
    if (form.totalBalance === "") newErrors.totalBalance = "Required";
    if (form.usedLeave === "") newErrors.usedLeave = "Required";
    if (form.acceptedLeave === "") newErrors.acceptedLeave = "Required";
    if (form.rejectedLeave === "") newErrors.rejectedLeave = "Required";
    if (form.expiredLeave === "") newErrors.expiredLeave = "Required";
    if (form.carryOverBalance === "") newErrors.carryOverBalance = "Required";

    // Numeric validation
    const numericFields = ['previousBalance', 'currentBalance', 'totalBalance', 'usedLeave', 'acceptedLeave', 'rejectedLeave', 'expiredLeave', 'carryOverBalance'];
    numericFields.forEach(field => {
      if (form[field] !== "" && (isNaN(form[field]) || Number(form[field]) < 0)) {
        newErrors[field] = "Must be a non-negative number";
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      save(form);
      close();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-teal-600 to-cyan-600 p-6 rounded-t-2xl">
          <h3 className="text-2xl font-bold text-white">
            {editData ? "Edit Leave Balance" : "Add New Leave Balance"}
          </h3>
          <p className="text-teal-100 text-sm mt-1">
            {editData ? "Update employee leave balance information" : "Add a new employee leave balance record"}
          </p>
        </div>
        
        <div className="p-6 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Employee Name */}
            <div className="md:col-span-2">
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
                    : "border-gray-200 focus:border-teal-500 focus:ring-teal-500/10"
                }`}
              />
              {errors.empName && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.empName}</span>
                </div>
              )}
            </div>
            
            {/* Previous Balance */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Previous Balance
              </label>
              <input
                type="number"
                name="previousBalance"
                value={form.previousBalance}
                onChange={handleChange}
                placeholder="0"
                min="0"
                step="0.5"
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.previousBalance
                    ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                    : "border-gray-200 focus:border-teal-500 focus:ring-teal-500/10"
                }`}
              />
              {errors.previousBalance && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.previousBalance}</span>
                </div>
              )}
            </div>
            
            {/* Current Balance */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Current Balance
              </label>
              <input
                type="number"
                name="currentBalance"
                value={form.currentBalance}
                onChange={handleChange}
                placeholder="0"
                min="0"
                step="0.5"
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.currentBalance
                    ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                    : "border-gray-200 focus:border-teal-500 focus:ring-teal-500/10"
                }`}
              />
              {errors.currentBalance && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.currentBalance}</span>
                </div>
              )}
            </div>
            
            {/* Total Balance */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Total Balance
              </label>
              <input
                type="number"
                name="totalBalance"
                value={form.totalBalance}
                onChange={handleChange}
                placeholder="0"
                min="0"
                step="0.5"
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.totalBalance
                    ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                    : "border-gray-200 focus:border-teal-500 focus:ring-teal-500/10"
                }`}
              />
              {errors.totalBalance && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.totalBalance}</span>
                </div>
              )}
            </div>
            
            {/* Used Leave */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Used Leave
              </label>
              <input
                type="number"
                name="usedLeave"
                value={form.usedLeave}
                onChange={handleChange}
                placeholder="0"
                min="0"
                step="0.5"
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.usedLeave
                    ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                    : "border-gray-200 focus:border-teal-500 focus:ring-teal-500/10"
                }`}
              />
              {errors.usedLeave && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.usedLeave}</span>
                </div>
              )}
            </div>
            
            {/* Accepted Leave */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Accepted Leave
              </label>
              <input
                type="number"
                name="acceptedLeave"
                value={form.acceptedLeave}
                onChange={handleChange}
                placeholder="0"
                min="0"
                step="0.5"
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.acceptedLeave
                    ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                    : "border-gray-200 focus:border-teal-500 focus:ring-teal-500/10"
                }`}
              />
              {errors.acceptedLeave && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.acceptedLeave}</span>
                </div>
              )}
            </div>
            
            {/* Rejected Leave */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Rejected Leave
              </label>
              <input
                type="number"
                name="rejectedLeave"
                value={form.rejectedLeave}
                onChange={handleChange}
                placeholder="0"
                min="0"
                step="0.5"
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.rejectedLeave
                    ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                    : "border-gray-200 focus:border-teal-500 focus:ring-teal-500/10"
                }`}
              />
              {errors.rejectedLeave && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.rejectedLeave}</span>
                </div>
              )}
            </div>
            
            {/* Expired Leave */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Expired Leave
              </label>
              <input
                type="number"
                name="expiredLeave"
                value={form.expiredLeave}
                onChange={handleChange}
                placeholder="0"
                min="0"
                step="0.5"
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.expiredLeave
                    ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                    : "border-gray-200 focus:border-teal-500 focus:ring-teal-500/10"
                }`}
              />
              {errors.expiredLeave && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.expiredLeave}</span>
                </div>
              )}
            </div>
            
            {/* Carry Over Balance */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Carry Over Balance
              </label>
              <input
                type="number"
                name="carryOverBalance"
                value={form.carryOverBalance}
                onChange={handleChange}
                placeholder="0"
                min="0"
                step="0.5"
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.carryOverBalance
                    ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                    : "border-gray-200 focus:border-teal-500 focus:ring-teal-500/10"
                }`}
              />
              {errors.carryOverBalance && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.carryOverBalance}</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex gap-3 pt-4 border-t">
            <button
              onClick={handleSubmit}
              className="flex-1 bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-3 rounded-xl hover:from-teal-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 font-semibold"
            >
              {editData ? "Update Balance" : "Add Balance"}
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

// Main LeaveBalances Component
const LeaveBalances = () => {
  const [selectedIds, setSelectedIds] = useState([]);

  const [balances, setBalances] = useState([
    {
      id: 1,
      empName: "John Doe",
      previousBalance: "10",
      currentBalance: "15",
      totalBalance: "25",
      usedLeave: "8",
      acceptedLeave: "8",
      rejectedLeave: "2",
      expiredLeave: "0",
      carryOverBalance: "5",
    },
    {
      id: 2,
      empName: "Jane Smith",
      previousBalance: "8",
      currentBalance: "12",
      totalBalance: "20",
      usedLeave: "6",
      acceptedLeave: "6",
      rejectedLeave: "1",
      expiredLeave: "1",
      carryOverBalance: "3",
    },
    {
      id: 3,
      empName: "Mike Johnson",
      previousBalance: "12",
      currentBalance: "18",
      totalBalance: "30",
      usedLeave: "10",
      acceptedLeave: "9",
      rejectedLeave: "0",
      expiredLeave: "2",
      carryOverBalance: "8",
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
    setBalances(balances.filter((item) => item.id !== id));
  };

  const handleSave = (data) => {
    if (editData) {
      setBalances(balances.map((b) => (b.id === data.id ? data : b)));
    } else {
      setBalances([...balances, { ...data, id: Date.now() }]);
    }
    setOpenModal(false);
  };

  const filteredBalances = balances.filter((b) => {
    if (!search.trim()) return true;

    const s = search.toLowerCase();

    return (
      b.empName.toLowerCase().includes(s) ||
      b.previousBalance.toString().includes(s) ||
      b.currentBalance.toString().includes(s) ||
      b.totalBalance.toString().includes(s) ||
      b.usedLeave.toString().includes(s) ||
      b.acceptedLeave.toString().includes(s) ||
      b.rejectedLeave.toString().includes(s) ||
      b.expiredLeave.toString().includes(s) ||
      b.carryOverBalance.toString().includes(s)
    );
  });

  const Item = ({ label, value }) => (
    <div className="flex justify-between border-b pb-1 text-sm">
      <span className="font-medium">{label}:</span>
      <span className="text-gray-700 font-semibold">{value}</span>
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
                <Wallet className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  Leave Balance Tracker
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {filteredBalances.length} {filteredBalances.length === 1 ? 'employee' : 'employees'} found
                  {selectedIds.length > 0 && ` • ${selectedIds.length} selected`}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative flex-1 lg:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search by name or balance..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 bg-white focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all"
                />
              </div>

              <button
                onClick={handleAdd}
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:from-teal-600 hover:to-cyan-600 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              >
                <Plus size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* TABLE */}
        <div className="hidden lg:block overflow-hidden bg-white rounded-2xl shadow-lg shadow-teal-100/50 border border-teal-100/50">
          <div className="overflow-x-auto max-h-[650px] overflow-y-auto">
            <table className="w-full text-sm">
              <thead className="sticky top-0 z-10">
                <tr className="bg-gradient-to-r from-teal-50 to-cyan-50 border-b-2 border-teal-100">
                  <th className="p-4 text-left">
                    <input
                      type="checkbox"
                      checked={
                        filteredBalances.length > 0 &&
                        selectedIds.length === filteredBalances.length
                      }
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedIds(filteredBalances.map((row) => row.id));
                        } else {
                          setSelectedIds([]);
                        }
                      }}
                      className="w-4 h-4 rounded border-gray-300 text-teal-600 focus:ring-2 focus:ring-teal-500/50 cursor-pointer"
                    />
                  </th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider whitespace-nowrap">Employee Name</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider whitespace-nowrap">Previous Balance</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider whitespace-nowrap">Current Balance</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider whitespace-nowrap">Total Balance</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider whitespace-nowrap">Used Leave</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider whitespace-nowrap">Accepted Leave</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider whitespace-nowrap">Rejected Leave</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider whitespace-nowrap">Expired Leave</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider whitespace-nowrap">Carry Over Balance</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {filteredBalances.map((row, index) => (
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
                      <span className="font-semibold text-teal-700 group-hover:text-teal-800 whitespace-nowrap">{row.empName}</span>
                    </td>
                    <td className="p-4">
                      <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-100 text-blue-700 whitespace-nowrap">
                        {row.previousBalance} days
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-100 text-emerald-700 whitespace-nowrap">
                        {row.currentBalance} days
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-100 text-indigo-700 whitespace-nowrap">
                        {row.totalBalance} days
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-orange-100 text-orange-700 whitespace-nowrap">
                        {row.usedLeave} days
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-green-100 text-green-700 whitespace-nowrap">
                        {row.acceptedLeave} days
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-red-100 text-red-700 whitespace-nowrap">
                        {row.rejectedLeave} days
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-gray-100 text-gray-700 whitespace-nowrap">
                        {row.expiredLeave} days
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-teal-100 text-teal-700 flex items-center gap-1 w-fit whitespace-nowrap">
                        <TrendingUp size={14} />
                        {row.carryOverBalance} days
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
          {filteredBalances.map((row, index) => (
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
                    <span className="font-bold text-lg text-teal-700">{row.empName}</span>
                  </div>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

              <div className="space-y-2.5">
                <Item label="Previous Balance" value={`${row.previousBalance} days`} />
                <Item label="Current Balance" value={`${row.currentBalance} days`} />
                <Item label="Total Balance" value={`${row.totalBalance} days`} />
                <Item label="Used Leave" value={`${row.usedLeave} days`} />
                <Item label="Accepted Leave" value={`${row.acceptedLeave} days`} />
                <Item label="Rejected Leave" value={`${row.rejectedLeave} days`} />
                <Item label="Expired Leave" value={`${row.expiredLeave} days`} />
                <Item label="Carry Over Balance" value={`${row.carryOverBalance} days`} />
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

        {filteredBalances.length === 0 && (
          <div className="bg-white rounded-2xl shadow-lg shadow-teal-100/50 p-12 text-center border border-teal-100/50">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No leave balances found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      {/* MODAL */}
      {openModal && (
        <LeaveBalanceModal
          close={() => setOpenModal(false)}
          save={handleSave}
          editData={editData}
        />
      )}
    </div>
  );
};

export default LeaveBalances;