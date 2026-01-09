import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Calendar, User, DollarSign, CheckCircle2, Clock, AlertCircle, FileText, Download } from 'lucide-react';

const sampleInvoices = [
  {
    invoiceNo: "#IN7865",
    id: "#IN7865",
    generatedBy: "John Doe",
    date: "2023-09-01",
    dueDate: "2023-09-20",
    status: "Paid",
    amount: "$500",
    description: "Frontend Development Services",
    items: [
      { description: "Frontend Development", quantity: 40, rate: "$12.50", total: "$500" },
    ],
  },
  {
    invoiceNo: "#IN2301",
    id: "#IN2301",
    generatedBy: "Sarah Smith",
    date: "2023-09-02",
    dueDate: "2023-09-22",
    status: "Not Paid",
    amount: "$372",
    description: "Backend API development and database design services.",
    items: [
      { description: "Backend Development", quantity: 30, rate: "$12.40", total: "$372" },
    ],
  },
  {
    invoiceNo: "#IN7239",
    id: "#IN7239",
    generatedBy: "Airi Satou",
    date: "2023-09-03",
    dueDate: "2023-09-23",
    status: "Partially Paid",
    amount: "$1038",
    description: "Complete system testing and quality assurance.",
    items: [
      { description: "QA Testing", quantity: 50, rate: "$20.76", total: "$1038" },
    ],
  },
];

const BillingDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const invoice = sampleInvoices.find((inv) => inv.invoiceNo === id || inv.id === id);

  if (!invoice) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate('/client/billing')}
            className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Billing
          </button>
          <div className="bg-white rounded-2xl p-8 text-center">
            <p className="text-gray-600 text-lg">Invoice not found</p>
          </div>
        </div>
      </div>
    );
  }

  const getStatusColor = (status) => {
    const colors = {
      Paid: 'bg-emerald-100 text-emerald-700',
      "Not Paid": 'bg-rose-100 text-rose-700',
      "Partially Paid": 'bg-amber-100 text-amber-700',
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  const getStatusIcon = (status) => {
    const icons = {
      Paid: <CheckCircle2 className="w-5 h-5" />,
      "Not Paid": <AlertCircle className="w-5 h-5" />,
      "Partially Paid": <Clock className="w-5 h-5" />,
    };
    return icons[status];
  };

  const subtotal = invoice.items.reduce((acc, item) => acc + parseFloat(item.total.replace('$', '')), 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate('/client/billing')}
          className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Billing
        </button>

        {/* Header Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8 border border-gray-100">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-indigo-600" />
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Invoice {invoice.invoiceNo}</h1>
              </div>
              <div className="flex flex-wrap gap-3 items-center">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center gap-2 ${getStatusColor(invoice.status)}`}>
                  {getStatusIcon(invoice.status)}
                  {invoice.status}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Left Section – 2/3 */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            {/* Invoice Information */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Invoice Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="p-4 md:p-5 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl border border-indigo-100">
                  <div className="flex items-center gap-2 mb-2">
                    <CreditCard className="w-4 h-4 text-indigo-600" />
                    <label className="text-sm font-semibold text-gray-700">Invoice Number</label>
                  </div>
                  <p className="text-lg font-bold text-gray-800">{invoice.invoiceNo}</p>
                </div>

                <div className="p-4 md:p-5 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl border border-indigo-100">
                  <div className="flex items-center gap-2 mb-2">
                    <User className="w-4 h-4 text-indigo-600" />
                    <label className="text-sm font-semibold text-gray-700">Generated By</label>
                  </div>
                  <p className="text-lg font-bold text-gray-800">{invoice.generatedBy}</p>
                </div>

                <div className="p-4 md:p-5 bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-xl border border-emerald-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-emerald-600" />
                    <label className="text-sm font-semibold text-gray-700">Invoice Date</label>
                  </div>
                  <p className="text-lg font-bold text-gray-800">{invoice.date}</p>
                </div>

                <div className="p-4 md:p-5 bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-xl border border-emerald-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-emerald-600" />
                    <label className="text-sm font-semibold text-gray-700">Due Date</label>
                  </div>
                  <p className="text-lg font-bold text-gray-800">{invoice.dueDate}</p>
                </div>
              </div>
            </div>

            {/* Invoice Description */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Description</h3>
              <div className="p-4 md:p-6 bg-gray-50 rounded-xl border border-gray-200">
                <p className="text-gray-700 leading-relaxed">{invoice.description}</p>
              </div>
            </div>

            {/* Line Items */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Line Items</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm md:text-base">
                  <thead className="border-b-2 border-gray-200">
                    <tr>
                      <th className="text-left py-3 font-bold text-gray-800">Description</th>
                      <th className="text-right py-3 font-bold text-gray-800">Qty</th>
                      <th className="text-right py-3 font-bold text-gray-800">Rate</th>
                      <th className="text-right py-3 font-bold text-gray-800">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoice.items.map((item, idx) => (
                      <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="py-4 text-gray-700">{item.description}</td>
                        <td className="text-right py-4 text-gray-700">{item.quantity}</td>
                        <td className="text-right py-4 text-gray-700">{item.rate}</td>
                        <td className="text-right py-4 font-semibold text-gray-800">{item.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Totals */}
              <div className="mt-6 pt-6 border-t-2 border-gray-200 space-y-2">
                <div className="flex justify-end gap-4">
                  <span className="text-gray-700 font-semibold">Subtotal:</span>
                  <span className="text-gray-800 font-bold w-24 text-right">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-end gap-4">
                  <span className="text-gray-700 font-semibold">Tax (10%):</span>
                  <span className="text-gray-800 font-bold w-24 text-right">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-end gap-4 pt-3 border-t-2 border-gray-200">
                  <span className="text-gray-800 font-bold">Total:</span>
                  <span className="text-indigo-600 font-bold text-xl w-24 text-right">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section – 1/3 */}
          <div className="space-y-6 md:space-y-8">
            {/* Status Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Status Overview</h3>
              <div className={`p-6 rounded-xl text-center ${getStatusColor(invoice.status)}`}>
                <div className="text-3xl font-bold mb-2 flex items-center justify-center gap-2">
                  {getStatusIcon(invoice.status)}
                </div>
                <div className="text-lg font-bold">{invoice.status}</div>
                <p className="text-sm opacity-80 mt-2">Payment Status</p>
              </div>
            </div>

            {/* Amount Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Amount</h3>
              <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 text-white text-center">
                <div className="text-sm opacity-90 mb-2">Total Amount</div>
                <div className="text-4xl font-bold">{invoice.amount}</div>
              </div>
            </div>

            {/* Actions */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Actions</h3>
              <div className="space-y-3">
                <button className="w-full px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-semibold transition-colors flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
                <button className="w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-semibold transition-colors">
                  Send Email
                </button>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Info</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b">
                  <span className="text-gray-600 text-sm">Invoice #</span>
                  <span className="font-semibold text-gray-800">{invoice.invoiceNo}</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b">
                  <span className="text-gray-600 text-sm">Created</span>
                  <span className="font-semibold text-gray-800">{invoice.date}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Due Date</span>
                  <span className="font-semibold text-gray-800">{invoice.dueDate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingDetailsPage;
