

import React, { useState } from "react";
import { Search, Plus, Pencil, Trash2, CheckCircle2, Clock, XCircle, Receipt, Wallet } from "lucide-react";

// ExpenseModel Component (embedded)
const ExpenseModel = ({ close, save, editData }) => {
  const [formData, setFormData] = useState(
    editData || {
      invoiceNo: "",
      date: "",
      expenseType: "Travel",
      expenseBy: "",
      amount: "",
      paymentMode: "Credit Card",
      paidTo: "",
      status: "Pending",
    }
  );

  const handleSubmit = () => {
    const{
      invoiceNo,
      date,
      expenseType,
      expenseBy,
      paymentMode,
      paidTo,
      status,
    }=formData;

    if (!invoiceNo.trim()) return alert("InvoiceNo is required");
    if (!expenseType.trim()) return alert("ExpenseType is required");
    if (!date) return alert("Date is required");
    if (!expenseBy) return alert("ExpenseBy is required");
    if (!paymentMode) return alert(" Payment Method is required");
    // if (!transactionId) return alert("Transaction Id is required");
    if (!status.trim()) return alert("Status is required");
    if (!paidTo) return alert("Paid is required");

    save(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-orange-600 to-red-600 p-6 rounded-t-2xl">
          <h3 className="text-2xl font-bold text-white">
            {editData ? "Edit Expense" : "New Expense Record"}
          </h3>
          <p className="text-orange-100 text-sm mt-1">
            {editData ? "Update expense information" : "Add a new expense entry"}
          </p>
        </div>
        
        <div className="p-6 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Invoice Number</label>
              <input
                type="text"
                required
                value={formData.invoiceNo}
                onChange={(e) => setFormData({ ...formData, invoiceNo: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 transition-all"
                placeholder="e.g., INV-001"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Date</label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 transition-all"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Expense Type</label>
              <select
                value={formData.expenseType}
                onChange={(e) => setFormData({ ...formData, expenseType: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 transition-all"
              >
                <option>Travel</option>
                <option>Food</option>
                <option>Office Supplies</option>
                <option>Utilities</option>
                <option>Other</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Expense By</label>
              <input
                type="text"
                required
                value={formData.expenseBy}
                onChange={(e) => setFormData({ ...formData, expenseBy: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 transition-all"
                placeholder="e.g., Alice"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Amount (₹)</label>
              <input
                type="number"
                required
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 transition-all"
                placeholder="e.g., 1500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Payment Mode</label>
              <select
                value={formData.paymentMode}
                onChange={(e) => setFormData({ ...formData, paymentMode: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 transition-all"
              >
                <option>Credit Card</option>
                <option>Debit Card</option>
                <option>Cash</option>
                <option>Bank Transfer</option>
                <option>UPI</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Paid To</label>
              <input
                type="text"
                required
                value={formData.paidTo}
                onChange={(e) => setFormData({ ...formData, paidTo: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 transition-all"
                placeholder="e.g., Uber"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 transition-all"
              >
                <option>Pending</option>
                <option>Completed</option>
                <option>Failed</option>
              </select>
            </div>
          </div>
          
          <div className="flex gap-3 pt-4 border-t">
            <button
              onClick={handleSubmit}
              className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-xl hover:from-orange-700 hover:to-red-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 font-semibold"
            >
              {editData ? "Update Expense" : "Add Expense"}
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

// Main Expense Component
const Expense = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      invoiceNo: "INV-001",
      date: "2023-09-01",
      expenseType: "Travel",
      expenseBy: "Alice",
      amount: 1500,
      paymentMode: "Credit Card",
      paidTo: "Uber",
      status: "Completed",
    },
    {
      id: 2,
      invoiceNo: "INV-002",
      date: "2023-09-03",
      expenseType: "Food",
      expenseBy: "Bob",
      amount: 800,
      paymentMode: "Cash",
      paidTo: "Restaurant",
      status: "Pending",
    },
  ]);

  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [editData, setEditData] = useState(null);

  const filteredExpenses = expenses.filter((e) =>
    Object.values(e)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const badge = (status) => {
    const map = {
      Completed: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
      Pending: "bg-amber-500/10 text-amber-600 border-amber-500/20",
      Failed: "bg-rose-500/10 text-rose-600 border-rose-500/20",
    };
    return (
      <span className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${map[status]}`}>
        {status}
      </span>
    );
  };

  const getStatusIcon = (status) => {
    if (status === "Completed") return <CheckCircle2 className="w-4 h-4 text-emerald-600" />;
    if (status === "Pending") return <Clock className="w-4 h-4 text-amber-600" />;
    return <XCircle className="w-4 h-4 text-rose-600" />;
  };

  const handleSave = (data) => {
    if (editData) {
      setExpenses(
        expenses.map((e) => (e.id === data.id ? data : e))
      );
    } else {
      setExpenses([...expenses, { ...data, id: Date.now() }]);
    }
    setOpenModal(false);
    setEditData(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-red-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="bg-white rounded-2xl shadow-lg shadow-orange-100/50 p-6 mb-6 border border-orange-100/50">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <Wallet className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Expense Management
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {filteredExpenses.length} {filteredExpenses.length === 1 ? 'expense' : 'expenses'} found
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative flex-1 lg:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  placeholder="Search expenses, invoices..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 bg-white focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"
                />
              </div>

              <button
                onClick={() => {
                  setEditData(null);
                  setOpenModal(true);
                }}
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              >
                <Plus size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* TABLE */}
        <div className="hidden md:block overflow-hidden bg-white rounded-2xl shadow-lg shadow-orange-100/50 border border-orange-100/50">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="sticky top-0 z-10">
                <tr className="bg-gradient-to-r from-orange-50 to-red-50 border-b-2 border-orange-100">
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Invoice No.</th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Date</th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Expense Type</th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Expense By</th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Amount</th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Payment Mode</th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Paid To</th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Status</th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {filteredExpenses.map((e) => (
                  <tr key={e.id} className="hover:bg-orange-50/50 transition-colors duration-150 cursor-pointer group">
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Receipt className="w-4 h-4 text-gray-400" />
                        <span className="font-semibold text-orange-600 group-hover:text-orange-700">{e.invoiceNo}</span>
                      </div>
                    </td>
                    <td className="p-4 text-gray-700">{e.date}</td>
                    <td className="p-4">
                      <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-700">
                        {e.expenseType}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="font-medium text-gray-900">{e.expenseBy}</span>
                    </td>
                    <td className="p-4">
                      <span className="font-bold text-gray-900">₹{e.amount}</span>
                    </td>
                    <td className="p-4 text-gray-700">{e.paymentMode}</td>
                    <td className="p-4 text-gray-700">{e.paidTo}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(e.status)}
                        {badge(e.status)}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-3">
                        <button
                          onClick={() => {
                            setEditData(e);
                            setOpenModal(true);
                          }}
                          className="p-2 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
                        >
                          <Pencil size={18} />
                        </button>
                        <button
                          onClick={() =>
                            setExpenses(expenses.filter((x) => x.id !== e.id))
                          }
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
        <div className="block md:hidden space-y-4">
          {filteredExpenses.map((e) => (
            <div key={e.id} className="bg-white rounded-2xl shadow-lg shadow-orange-100/50 p-5 space-y-3 border border-orange-100/50 hover:shadow-xl hover:shadow-orange-200/50 transition-all duration-300">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Receipt className="w-4 h-4 text-gray-400" />
                    <span className="font-bold text-lg text-orange-600">{e.invoiceNo}</span>
                  </div>
                  <div className="text-sm text-gray-500">{e.date}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-xl text-gray-900">₹{e.amount}</div>
                  <div className="flex items-center gap-1 justify-end mt-1">
                    {getStatusIcon(e.status)}
                  </div>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

              <div className="space-y-2.5">
                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide min-w-24">Type:</span>
                  <span className="px-3 py-1 rounded-lg text-xs font-medium bg-gray-100 text-gray-700">
                    {e.expenseType}
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide min-w-24">By:</span>
                  <span className="text-sm font-medium text-gray-900">{e.expenseBy}</span>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide min-w-24">Payment:</span>
                  <span className="text-sm text-gray-700">{e.paymentMode}</span>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide min-w-24">Paid To:</span>
                  <span className="text-sm text-gray-700">{e.paidTo}</span>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide min-w-24">Status:</span>
                  {badge(e.status)}
                </div>
              </div>

              <div className="flex gap-3 pt-3 border-t border-gray-100">
                <button
                  onClick={() => {
                    setEditData(e);
                    setOpenModal(true);
                  }}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors font-semibold"
                >
                  <Pencil size={18} />
                  Edit
                </button>
                <button
                  onClick={() =>
                    setExpenses(expenses.filter((x) => x.id !== e.id))
                  }
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-red-600 bg-red-50 hover:bg-red-100 transition-colors font-semibold"
                >
                  <Trash2 size={18} />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredExpenses.length === 0 && (
          <div className="bg-white rounded-2xl shadow-lg shadow-orange-100/50 p-12 text-center border border-orange-100/50">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No expenses found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      {/* MODAL */}
      {openModal && (
        <ExpenseModel
          close={() => setOpenModal(false)}
          editData={editData}
          save={handleSave}
        />
      )}
    </div>
  );
};

export default Expense;