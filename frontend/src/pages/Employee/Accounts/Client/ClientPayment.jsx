import React, { useState } from "react";
import {
  Search,
  Plus,
  Pencil,
  Trash2, 
  CheckCircle2,
  Clock,
  XCircle,
  DollarSign,
  FileText,
} from "lucide-react";

// ClientModel Component (embedded)
const ClientModel = ({ close, save, editData }) => {
  const [formData, setFormData] = useState(
    editData || {
      clientId: "",
      clientName: "",
      invoiceName: "",
      date: "",
      amount: "",
      method: "Credit Card",
      transactionId: "",
      status: "Pending",
    }
  );

  const handleSubmit = () => {
    const{
      clientId,
      clientName,
      invoiceName,
      date,
      amount,
      method,

      status,
    }=formData;

    if (!clientId.trim()) return alert("Client ID is required");
    if (!clientName.trim()) return alert("ClientName is required");
    if (!date) return alert("Date is required");
    if (!amount) return alert("Amount is required");
    if (!method) return alert(" Payment Method is required");
    // if (!transactionId) return alert("Transaction Id is required");
    if (!status.trim()) return alert("Status is required");
    if (!invoiceName) return alert("Invoice file is required");

    save(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-violet-600 to-purple-600 p-6 rounded-t-2xl">
          <h3 className="text-2xl font-bold text-white">
            {editData ? "Edit Payment" : "New Payment Record"}
          </h3>
          <p className="text-violet-100 text-sm mt-1">
            {editData
              ? "Update payment information"
              : "Add a new client payment"}
          </p>
        </div>

        <div className="p-6 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Client ID
              </label>
              <input
                type="text"
                required
                onChange={(e) =>
                  setFormData({ ...formData, clientId: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
                placeholder="e.g., C101"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Client Name
              </label>
              <input
                type="text"
                required
                value={formData.clientName}
                onChange={(e) =>
                  setFormData({ ...formData, clientName: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
                placeholder="e.g., Alisha Jain"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Invoice File
              </label>
              <input
                type="file"
                required
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
               
                onChange={(e) =>
                  setFormData({ ...formData, invoiceName: e.target.files[0] })
                }
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
                placeholder="e.g., INV001.pdf"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Date
              </label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Amount
              </label>
              <input
                type="number"
                required
                value={formData.amount}
                onChange={(e) =>
                  setFormData({ ...formData, amount: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
                placeholder="e.g., 150"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Payment Method
              </label>
              <select
                value={formData.method}
                onChange={(e) =>
                  setFormData({ ...formData, method: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
              >
                <option>Credit Card</option>
                <option>Bank Transfer</option>
                <option>PayPal</option>
                <option>Cash</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Transaction ID
              </label>
              <input
                type="text"
                required
                value={formData.transactionId}
                onChange={(e) =>
                  setFormData({ ...formData, transactionId: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
                placeholder="e.g., TXN12345"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Status
              </label>
              <select
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all"
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
              className="flex-1 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 font-semibold"
            >
              {editData ? "Update Payment" : "Add Payment"}
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

// Main ClientPayment Component
const ClientPayment = () => {
  const [payments, setPayments] = useState([
    {
      id: 201,
      clientId: "C101",
      clientName: "Alisha Jain",
      invoiceId: "INV001.pdf",
      date: "2023-09-01",
      amount: 150,
      method: "Credit Card",
      transactionId: "TXN12345",
      status: "Completed",
    },
    {
      id: 202,
      clientId: "C102",
      clientName: "Bobby Ghosh",
      invoiceId: "INV002.pdf",
      date: "2023-09-02",
      amount: 200,
      method: "Bank Transfer",
      transactionId: "TXN12346",
      status: "Pending",
    },
  ]);

  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [editData, setEditData] = useState(null);

  const filteredPayments = payments.filter((p) =>
    Object.values(p).join(" ").toLowerCase().includes(search.toLowerCase())
  );

  const statusBadge = (status) => {
    const map = {
      Completed: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
      Pending: "bg-amber-500/10 text-amber-600 border-amber-500/20",
      Failed: "bg-rose-500/10 text-rose-600 border-rose-500/20",
    };
    return (
      <span
        className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${map[status]}`}
      >
        {status}
      </span>
    );
  };

  const getStatusIcon = (status) => {
    if (status === "Completed")
      return <CheckCircle2 className="w-4 h-4 text-emerald-600" />;
    if (status === "Pending")
      return <Clock className="w-4 h-4 text-amber-600" />;
    return <XCircle className="w-4 h-4 text-rose-600" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50 to-purple-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="bg-white rounded-2xl shadow-lg shadow-violet-100/50 p-6 mb-6 border border-violet-100/50">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-violet-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <DollarSign className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  Client Payment
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {filteredPayments.length}{" "}
                  {filteredPayments.length === 1 ? "payment" : "payments"} found
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative flex-1 lg:w-80">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  placeholder="Search payments, clients..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 bg-white focus:outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 transition-all"
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
        <div className="hidden md:block overflow-hidden bg-white rounded-2xl shadow-lg shadow-violet-100/50 border border-violet-100/50">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="sticky top-0 z-10">
                <tr className="bg-gradient-to-r from-violet-50 to-purple-50 border-b-2 border-violet-100">
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Client
                  </th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Invoice
                  </th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Method
                  </th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {filteredPayments.map((p) => (
                  <tr
                    key={p.id}
                    className="hover:bg-violet-50/50 transition-colors duration-150 cursor-pointer group"
                  >
                    <td className="p-4">
                      <span className="font-semibold text-violet-600 group-hover:text-violet-700">
                        #{p.id}
                      </span>
                    </td>
                    <td className="p-4">
                      <div>
                        <div className="font-semibold text-gray-900">
                          {p.clientName}
                        </div>
                        <div className="text-xs text-gray-500">
                          {p.clientId}
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-700">{p.invoiceId}</span>
                      </div>
                    </td>
                    <td className="p-4 text-gray-700">{p.date}</td>
                    <td className="p-4">
                      <span className="font-bold text-gray-900">
                        ${p.amount}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-700">
                        {p.method}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(p.status)}
                        {statusBadge(p.status)}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-3">
                        <button
                          onClick={() => {
                            setEditData(p);
                            setOpenModal(true);
                          }}
                          className="p-2 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
                        >
                          <Pencil size={18} />
                        </button>
                        <button
                          onClick={() =>
                            setPayments(payments.filter((x) => x.id !== p.id))
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
          {filteredPayments.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl shadow-lg shadow-violet-100/50 p-5 space-y-3 border border-violet-100/50 hover:shadow-xl hover:shadow-violet-200/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-lg text-violet-600">
                      #{p.id}
                    </span>
                    {getStatusIcon(p.status)}
                  </div>
                  <div className="font-semibold text-gray-900">
                    {p.clientName}
                  </div>
                  <div className="text-xs text-gray-500">{p.clientId}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-xl text-gray-900">
                    ${p.amount}
                  </div>
                  <div className="text-xs text-gray-500">{p.date}</div>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-700">{p.invoiceId}</span>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide min-w-20">
                    Method:
                  </span>
                  <span className="px-3 py-1 rounded-lg text-xs font-medium bg-gray-100 text-gray-700">
                    {p.method}
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide min-w-20">
                    TXN ID:
                  </span>
                  <span className="text-sm text-gray-700">
                    {p.transactionId}
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide min-w-20">
                    Status:
                  </span>
                  {statusBadge(p.status)}
                </div>
              </div>

              <div className="flex gap-3 pt-3 border-t border-gray-100">
                <button
                  onClick={() => {
                    setEditData(p);
                    setOpenModal(true);
                  }}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors font-semibold"
                >
                  <Pencil size={18} />
                  Edit
                </button>
                <button
                  onClick={() =>
                    setPayments(payments.filter((x) => x.id !== p.id))
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

        {filteredPayments.length === 0 && (
          <div className="bg-white rounded-2xl shadow-lg shadow-violet-100/50 p-12 text-center border border-violet-100/50">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No payments found
            </h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      {/* MODAL */}
      {openModal && (
        <ClientModel
          close={() => setOpenModal(false)}
          editData={editData}
          save={(data) => {
            const payload = {
              ...data,
              invoiceId:  data.invoiceName?.name || "",
            };

            if (editData) {
              setPayments(
                payments.map((p) => (p.id === payload.id ? payload : p))
              );
            } else {
              setPayments([...payments, { ...payload, id: Date.now() }]);
            }
            setOpenModal(false);
          }}
        />
      )}
    </div>
  );
};

export default ClientPayment;
