/* eslint-disable react-hooks/set-state-in-effect */

import React, { useState, useEffect } from "react";
import {Pencil,Trash2,Search,CheckCircle2,Clock,AlertCircle,User,Calendar,Ticket,RotateCcw,Plus,PauseCircle,FileText,Download,Paperclip} from "lucide-react";

/* ===================== STATUS BADGE ===================== */
const StatusBadge = ({ status }) => {
  const styles = {
    Open: "bg-emerald-100 text-emerald-700 border-2 border-emerald-200",
    Closed: "bg-slate-100 text-slate-700 border-2 border-slate-200",
    Pending: "bg-rose-100 text-rose-700 border-2 border-rose-200",
    Holding: "bg-yellow-100 text-yellow-700 border-2 border-yellow-200"
  };

  const icons = {
    Open: <CheckCircle2 className="w-4 h-4" />,
    Closed: <Clock className="w-4 h-4" />,
    Pending: <AlertCircle className="w-4 h-4" />,
    Holding: <PauseCircle className="w-4 h-4" />,
  };

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold ${styles[status]}`}
    >
      {icons[status]}
      {status}
    </span>
  );
};

/* ===================== TICKET MODAL ===================== */
const TicketModal = ({ close, save, editData }) => {
  const [form, setForm] = useState({
    ticketId: "",
    title: "",
    status: "",
    assignedTo: "",
    date: "",
    detail: "",
    attachment: null,
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!form.ticketId.trim()) newErrors.ticketId = "Ticket ID is required";
    if (!form.title.trim()) newErrors.title = "Project title is required";
    if (!form.assignedTo.trim())
      newErrors.assignedTo = "Assigned person is required";
    if (!form.status) newErrors.status = "Status is required";
    if (!form.date) newErrors.date = "Date is required";
    if (!form.detail.trim()) newErrors.detail = "Issue detail is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    if (editData) setForm(editData);
  }, [editData]);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setForm({ ...form, [name]: value });
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setForm({ ...form, attachment: file });
    }
  };

  // const handleSubmit = () => {
  // save({ ...form, id: editData?.id || Date.now() });
  // close();
  const handleSubmit = () => {
    if (!validate()) return;

    save({ ...form, id: editData?.id || Date.now() });
    close();
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-lg md:max-w-xl lg:max-w-2xl shadow-2xl transform transition-all animate-in zoom-in-95 duration-200 overflow-y-auto max-h-[90vh]">
        <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-6 md:p-8 rounded-t-3xl relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-white relative z-10 flex items-center gap-3">
            {editData ? (
              <>
                <Pencil className="w-6 h-6 md:w-8 md:h-8" />
                Edit Ticket
              </>
            ) : (
              <>
                <Plus className="w-6 h-6 md:w-8 md:h-8" />
                New Ticket
              </>
            )}
          </h2>
          <p className="text-blue-100 mt-2 relative z-10 text-sm md:text-base">
            {editData
              ? "Update ticket information"
              : "Create a new support ticket"}
          </p>
        </div>

        <div className="p-6 md:p-8 space-y-4 md:space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 md:mb-2">
              Ticket ID <span className="text-red-500">*</span>
            </label>
            <input
              name="ticketId"
              placeholder="Enter ticket ID (e.g., TI1254)"
              value={form.ticketId}
              onChange={handleChange}
              className="w-full border-2 border-gray-200 p-3 md:p-4 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
            />
            {errors.ticketId && (
              <p className="text-red-500 text-xs mt-1">{errors.ticketId}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 md:mb-2">
              Project Title
            </label>
            <input
              name="title"
              placeholder="Enter project title"
              value={form.title}
              onChange={handleChange}
              className="w-full border-2 border-gray-200 p-3 md:p-4 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
            />
            {errors.title && (
              <p className="text-red-500 text-xs mt-1">{errors.title}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 md:mb-2">
              Assigned To
            </label>
            <div className="relative">
              <User className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
              <input
                name="assignedTo"
                placeholder="Enter assignee name"
                value={form.assignedTo}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 p-3 md:p-4 pl-10 md:pl-12 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 md:mb-2">
              Status
            </label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full border-2 border-gray-200 p-3 md:p-4 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all bg-white"
            >
              <option value="">Select Status</option>
              <option>Open</option>
              <option>Closed</option>
              <option>Pending</option>
              <option>Holding</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 md:mb-2 flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-600" />
              Date
            </label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full border-2 border-gray-200 p-3 md:p-4 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 md:mb-2">
              Issue Detail
            </label>
            <textarea
              name="detail"
              placeholder="Describe the issue in detail..."
              value={form.detail}
              onChange={handleChange}
              rows="4"
              className="w-full border-2 border-gray-200 p-3 md:p-4 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 md:mb-2 flex items-center gap-2">
              <Paperclip className="w-4 h-4 text-blue-600" />
              Attachment
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 bg-gray-50">
              <label className="flex items-center justify-center gap-2 cursor-pointer text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                <Plus className="w-5 h-5" />
                <span>Add Attachment</span>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.xlsx,.xls,.txt"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
              {form.attachment && (
                <div className="mt-3 flex items-center justify-between bg-white p-3 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">
                      {form.attachment.name || form.attachment}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, attachment: null })}
                    className="text-red-500 hover:text-red-700 text-sm font-semibold"
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-3 p-6 md:p-8 pt-0">
          <button
            onClick={handleSubmit}
            className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 md:py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
          >
            Save Ticket
          </button>
          <button
            onClick={close}
            className="flex-1 border-2 border-gray-300 py-3 md:py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

/* ===================== MAIN ===================== */
const Supports = () => {
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [editData, setEditData] = useState(null);

  const [tickets, setTickets] = useState([
    {
      id: "TI1254",
      ticketId: "TI1254",
      title: "HR Portal",
      status: "Closed",
      assignedTo: "John Deo",
      date: "2020-02-25",
      detail: "Lorem Ipsum is simply",
      attachment: null,
    },
  ]);

  const handleSave = (data) => {
    const payload = {
      ...data,
      id: data.ticketId || data.id,
      attachment: data.attachment instanceof File ? data.attachment : data.attachment,
    };
    
    if (editData) {
      setTickets(tickets.map((t) => (t.id === editData.id ? payload : t)));
    } else {
      setTickets([...tickets, payload]);
    }
  };

  const handleAttachmentClick = (ticket) => {
    if (!ticket.attachment) {
      alert("No attachment available for this ticket.");
      return;
    }

    if (ticket.attachment instanceof File) {
      const url = URL.createObjectURL(ticket.attachment);
      const link = document.createElement("a");
      link.href = url;
      link.download = ticket.attachment.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } else if (typeof ticket.attachment === "string") {
      window.open(ticket.attachment, "_blank");
    }
  };

  const filtered = tickets.filter((t) =>
    Object.values(t).join(" ").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Ticket className="w-6 h-6 text-white" />
            </div>
            Ticket Management
          </h1>
          <p className="text-gray-600 ml-15">
            Track and manage support tickets
          </p>
        </div>

        {/* ===================== CARDS ===================== */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card
            title="Total Tickets"
            value={tickets.length}
            color="bg-gradient-to-br from-blue-500 to-blue-600"
            icon={<Ticket className="w-6 h-6" />}
          />
          <Card
            title="Reply"
            value="865"
            color="bg-gradient-to-br from-emerald-500 to-green-600"
            icon={<RotateCcw className="w-6 h-6" />}
          />
          <Card
            title="Resolve"
            value="457"
            color="bg-gradient-to-br from-amber-500 to-orange-600"
            icon={<CheckCircle2 className="w-6 h-6" />}
          />
          <Card
            title="Pending"
            value="239"
            color="bg-gradient-to-br from-rose-500 to-red-600"
            icon={<Clock className="w-6 h-6" />}
          />
        </div>

        {/* ===================== SEARCH + ADD ===================== */}
        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              placeholder="Search tickets..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all bg-white shadow-sm"
            />
          </div>

          <button
            onClick={() => {
              setEditData(null);
              setOpenModal(true);
            }}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
          >
            <Plus className="w-5 h-5" />
            New Ticket
          </button>
        </div>

        {/* ===================== TABLE ===================== */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-gray-100">
          {/* Large screens: table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200">
                <tr>
                  {[
                    "Ticket ID",
                    "Project Title",
                    "Status",
                    "Assigned To",
                    "Date",
                    "Issue Detail",
                    "Attachment",
                    "Actions",
                  ].map((h) => (
                    <th
                      key={h}
                      className="p-5 text-left text-sm font-bold text-gray-700 uppercase tracking-wider"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((t) => (
                  <tr
                    key={t.id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="p-5 font-bold whitespace-nowrap">
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-lg font-semibold">
                        <Ticket className="w-4 h-4" />
                        {t.id}
                      </span>
                    </td>
                    <td className="p-5 whitespace-nowrap">{t.title}</td>
                    <td className="p-5 whitespace-nowrap">
                      <StatusBadge status={t.status} />
                    </td>
                    <td className="p-5 whitespace-nowrap">{t.assignedTo}</td>
                    <td className="p-5 whitespace-nowrap">{t.date}</td>
                    <td className="p-5 text-gray-600 max-w-xs">{t.detail}</td>
                    <td className="p-5 whitespace-nowrap">
                      {t.attachment ? (
                        <button
                          onClick={() => handleAttachmentClick(t)}
                          className="flex items-center gap-2 px-3 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition-colors font-medium text-sm cursor-pointer"
                        >
                          <FileText className="w-4 h-4" />
                          <span>
                            {t.attachment instanceof File
                              ? t.attachment.name
                              : typeof t.attachment === "string"
                              ? "View File"
                              : "Attachment"}
                          </span>
                          <Download className="w-3 h-3" />
                        </button>
                      ) : (
                        <span className="text-gray-400 text-sm">No attachment</span>
                      )}
                    </td>
                    <td className="p-5 whitespace-nowrap">
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setEditData(t);
                            setOpenModal(true);
                          }}
                          className="p-2.5 bg-blue-100 text-blue-600 rounded-xl hover:bg-blue-200 transition-all hover:scale-110 shadow-sm"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() =>
                            setTickets(tickets.filter((x) => x.id !== t.id))
                          }
                          className="p-2.5 bg-red-100 text-red-600 rounded-xl hover:bg-red-200 transition-all hover:scale-110 shadow-sm"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Small screens: stacked cards */}
          <div className="md:hidden space-y-4 p-4">
            {filtered.map((t) => (
              <div
                key={t.id}
                className="bg-gray-50 rounded-2xl p-4 shadow-sm border border-gray-100"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold">Ticket ID:</span>
                  <span>{t.id}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold">Created By:</span>
                  <span>{t.assignedTo}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold">Subject:</span>
                  <span>{t.title}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold">Status:</span>
                  <StatusBadge status={t.status} />
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold">Assigned To:</span>
                  <span>{t.assignedTo}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold">Date:</span>
                  <span>{t.date}</span>
                </div>
                <div className="flex justify-between items-start mb-2">
                  <span className="font-bold">Details:</span>
                  <span className="truncate max-w-[60%]">{t.detail}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold">Attachment:</span>
                  {t.attachment ? (
                    <button
                      onClick={() => handleAttachmentClick(t)}
                      className="flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium"
                    >
                      <FileText className="w-3 h-3" />
                      View
                    </button>
                  ) : (
                    <span className="text-gray-400 text-xs">No attachment</span>
                  )}
                </div>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => {
                      setEditData(t);
                      setOpenModal(true);
                    }}
                    className="flex-1 p-2 bg-blue-100 text-blue-600 rounded-xl hover:bg-blue-200 transition-all"
                  >
                    <Pencil className="w-4 h-4 mx-auto" />
                  </button>
                  <button
                    onClick={() =>
                      setTickets(tickets.filter((x) => x.id !== t.id))
                    }
                    className="flex-1 p-2 bg-red-100 text-red-600 rounded-xl hover:bg-red-200 transition-all"
                  >
                    <Trash2 className="w-4 h-4 mx-auto" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ticket Count */}
        <div className="mt-6 text-center text-gray-600">
          Showing{" "}
          <span className="font-semibold text-blue-600">{filtered.length}</span>{" "}
          of{" "}
          <span className="font-semibold text-blue-600">{tickets.length}</span>{" "}
          tickets
        </div>
      </div>

      {openModal && (
        <TicketModal
          close={() => setOpenModal(false)}
          save={handleSave}
          editData={editData}
        />
      )}
    </div>
  );
};

/* ===================== CARD ===================== */
const Card = ({ title, value, color, icon }) => (
  <div
    className={`${color} text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300`}
  >
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm opacity-90 font-medium mb-1">{title}</p>
        <h2 className="text-4xl font-bold tracking-tight">{value}</h2>
      </div>
      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
        {icon}
      </div>
    </div>
    <div className="mt-4 pt-4 border-t border-white/20">
      <p className="text-xs opacity-75 font-medium">Updated recently</p>
    </div>
  </div>
);

export default Supports;
