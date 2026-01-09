import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Ticket, User, Calendar, AlertCircle, CheckCircle2, FileText, Download } from 'lucide-react';

const sampleTickets = [
  {
    id: "TI1254",
    ticketId: "TI1254",
    title: "HR Portal",
    status: "Closed",
    assignedTo: "John Deo",
    date: "2020-02-25",
    detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    attachment: null,
  },
];

const TicketDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const ticket = sampleTickets.find((t) => t.ticketId === id);

  if (!ticket) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate('/client/supports')}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Supports
          </button>
          <div className="bg-white rounded-2xl p-8 text-center">
            <p className="text-gray-600 text-lg">Ticket not found</p>
          </div>
        </div>
      </div>
    );
  }

  const getStatusColor = (status) => {
    const colors = {
      Open: 'bg-emerald-100 text-emerald-700',
      Closed: 'bg-slate-100 text-slate-700',
      Pending: 'bg-rose-100 text-rose-700',
      Holding: 'bg-yellow-100 text-yellow-700',
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  const getStatusIcon = (status) => {
    const icons = {
      Open: <CheckCircle2 className="w-5 h-5" />,
      Closed: <CheckCircle2 className="w-5 h-5" />,
      Pending: <AlertCircle className="w-5 h-5" />,
      Holding: <AlertCircle className="w-5 h-5" />,
    };
    return icons[status];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate('/client/supports')}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Supports
        </button>

        {/* Header Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8 border border-gray-100">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Ticket className="w-6 h-6 text-blue-600" />
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{ticket.ticketId}</h1>
              </div>
              <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">{ticket.title}</h2>
              <div className="flex flex-wrap gap-3 items-center">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center gap-2 ${getStatusColor(ticket.status)}`}>
                  {getStatusIcon(ticket.status)}
                  {ticket.status}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Left Section – 2/3 */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            {/* Ticket Information */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Ticket Information</h3>
              <div className="space-y-4">
                <div className="p-4 md:p-5 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Ticket className="w-4 h-4 text-blue-600" />
                    <label className="text-sm font-semibold text-gray-700">Ticket ID</label>
                  </div>
                  <p className="text-lg font-bold text-gray-800">{ticket.ticketId}</p>
                </div>

                <div className="p-4 md:p-5 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="w-4 h-4 text-blue-600" />
                    <label className="text-sm font-semibold text-gray-700">Project Title</label>
                  </div>
                  <p className="text-lg font-bold text-gray-800">{ticket.title}</p>
                </div>

                <div className="p-4 md:p-5 bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-xl border border-emerald-100">
                  <div className="flex items-center gap-2 mb-2">
                    <User className="w-4 h-4 text-emerald-600" />
                    <label className="text-sm font-semibold text-gray-700">Assigned To</label>
                  </div>
                  <p className="text-lg font-bold text-gray-800">{ticket.assignedTo}</p>
                </div>

                <div className="p-4 md:p-5 bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-xl border border-emerald-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-emerald-600" />
                    <label className="text-sm font-semibold text-gray-700">Date</label>
                  </div>
                  <p className="text-lg font-bold text-gray-800">{ticket.date}</p>
                </div>
              </div>
            </div>

            {/* Issue Details */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Issue Details</h3>
              <div className="p-4 md:p-6 bg-gray-50 rounded-xl border border-gray-200">
                <p className="text-gray-700 leading-relaxed">{ticket.detail}</p>
              </div>
            </div>

            {/* Attachments */}
            {ticket.attachment && (
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-blue-600" />
                  Attachments
                </h3>
                <div className="p-4 md:p-5 flex items-center justify-between bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-800">{ticket.attachment}</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 font-semibold transition-colors flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Section – 1/3 */}
          <div className="space-y-6 md:space-y-8">
            {/* Status Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Status Overview</h3>
              <div className={`p-6 rounded-xl text-center ${getStatusColor(ticket.status)}`}>
                <div className="text-3xl font-bold mb-2 flex items-center justify-center gap-2">
                  {getStatusIcon(ticket.status)}
                  {ticket.status}
                </div>
                <p className="text-sm opacity-80">Current Ticket Status</p>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Info</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b">
                  <span className="text-gray-600 text-sm">Ticket ID</span>
                  <span className="font-semibold text-gray-800">{ticket.ticketId}</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b">
                  <span className="text-gray-600 text-sm">Assigned To</span>
                  <span className="font-semibold text-gray-800">{ticket.assignedTo}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Created</span>
                  <span className="font-semibold text-gray-800">{ticket.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetailsPage;
