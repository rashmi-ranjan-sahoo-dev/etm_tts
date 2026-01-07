
import { useState, useEffect } from "react";
import {
  Plus,
  Search,
  CheckCircle2,
  Clock,
  AlertCircle,
  X,
  User,
  Calendar,
  MessageSquare,
  Send,
  ArrowRight,
  TrendingUp,
  FileText,
  Download,
  Paperclip,
  Pencil,
  Briefcase,
} from "lucide-react";

// Status Badge Component
const StatusBadge = ({ status }) => {
  const styles = {
    Open: "bg-emerald-100 text-emerald-700 border-2 border-emerald-200",
    Closed: "bg-slate-100 text-slate-700 border-2 border-slate-200",
    Pending: "bg-rose-100 text-rose-700 border-2 border-rose-200",
    Holding: "bg-yellow-100 text-yellow-700 border-2 border-yellow-200",
  };

  const icons = {
    Open: <CheckCircle2 className="w-4 h-4" />,
    Closed: <Clock className="w-4 h-4" />,
    Pending: <AlertCircle className="w-4 h-4" />,
    Holding: <Clock className="w-4 h-4" />,
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

// Modal to add/edit PM ticket
const PMTicketModal = ({ close, save, editData = null }) => {
  const [formData, setFormData] = useState({
    ticketId: "",
    title: "",
    status: "Open",
    assignedTo: "",
    date: new Date().toISOString().split("T")[0],
    detail: "",
    attachment: null,
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editData) {
      setFormData({
        ticketId: editData.ticketId || editData.id || "",
        title: editData.title || "",
        status: editData.status || "Open",
        assignedTo: editData.assignedTo || "",
        date: editData.date || editData.raisedDate || new Date().toISOString().split("T")[0],
        detail: editData.detail || editData.description || "",
        attachment: editData.attachment || null,
      });
    }
  }, [editData]);

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setFormData({ ...formData, attachment: file });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.ticketId.trim()) newErrors.ticketId = "Ticket ID is required";
    if (!formData.title.trim()) newErrors.title = "Project title is required";
    if (!formData.assignedTo.trim()) newErrors.assignedTo = "Assigned person is required";
    if (!formData.status) newErrors.status = "Status is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.detail.trim()) newErrors.detail = "Issue detail is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    save({
      ...formData,
      id: formData.ticketId,
      description: formData.detail,
      raisedBy: editData?.raisedBy || "Project Manager",
      raisedDate: formData.date,
      comments: editData?.comments || [],
      source: "project_manager",
    }, editData?.id || formData.ticketId);
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-lg md:max-w-xl lg:max-w-2xl shadow-2xl transform transition-all animate-in zoom-in-95 duration-200 overflow-y-auto max-h-[90vh]">
        <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 p-6 md:p-8 rounded-t-3xl relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-white relative z-10 flex items-center gap-3">
            {editData ? (
              <>
                <Pencil className="w-6 h-6 md:w-8 md:h-8" />
                Edit PM Ticket
              </>
            ) : (
              <>
                <Plus className="w-6 h-6 md:w-8 md:h-8" />
                New PM Ticket
              </>
            )}
          </h2>
          <p className="text-purple-100 mt-2 relative z-10 text-sm md:text-base">
            {editData
              ? "Update project manager ticket information"
              : "Create a new project manager ticket"}
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
              value={formData.ticketId}
              onChange={(e) => {
                setFormData({ ...formData, ticketId: e.target.value });
                if (errors.ticketId) setErrors({ ...errors, ticketId: "" });
              }}
              className="w-full border-2 border-gray-200 p-3 md:p-4 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all"
              disabled={!!editData}
            />
            {errors.ticketId && (
              <p className="text-red-500 text-xs mt-1">{errors.ticketId}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 md:mb-2">
              Project Title <span className="text-red-500">*</span>
            </label>
            <input
              name="title"
              placeholder="Enter project title"
              value={formData.title}
              onChange={(e) => {
                setFormData({ ...formData, title: e.target.value });
                if (errors.title) setErrors({ ...errors, title: "" });
              }}
              className="w-full border-2 border-gray-200 p-3 md:p-4 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all"
            />
            {errors.title && (
              <p className="text-red-500 text-xs mt-1">{errors.title}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 md:mb-2">
              Assigned To <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
              <input
                name="assignedTo"
                placeholder="Enter assignee name"
                value={formData.assignedTo}
                onChange={(e) => {
                  setFormData({ ...formData, assignedTo: e.target.value });
                  if (errors.assignedTo) setErrors({ ...errors, assignedTo: "" });
                }}
                className="w-full border-2 border-gray-200 p-3 md:p-4 pl-10 md:pl-12 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all"
              />
            </div>
            {errors.assignedTo && (
              <p className="text-red-500 text-xs mt-1">{errors.assignedTo}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 md:mb-2">
              Status <span className="text-red-500">*</span>
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={(e) => {
                setFormData({ ...formData, status: e.target.value });
                if (errors.status) setErrors({ ...errors, status: "" });
              }}
              className="w-full border-2 border-gray-200 p-3 md:p-4 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all bg-white"
            >
              <option value="">Select Status</option>
              <option>Open</option>
              <option>Closed</option>
              <option>Pending</option>
              <option>Holding</option>
            </select>
            {errors.status && (
              <p className="text-red-500 text-xs mt-1">{errors.status}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 md:mb-2 flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-600" />
              Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={(e) => {
                setFormData({ ...formData, date: e.target.value });
                if (errors.date) setErrors({ ...errors, date: "" });
              }}
              className="w-full border-2 border-gray-200 p-3 md:p-4 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all"
            />
            {errors.date && (
              <p className="text-red-500 text-xs mt-1">{errors.date}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 md:mb-2">
              Issue Detail <span className="text-red-500">*</span>
            </label>
            <textarea
              name="detail"
              placeholder="Describe the issue in detail..."
              value={formData.detail}
              onChange={(e) => {
                setFormData({ ...formData, detail: e.target.value });
                if (errors.detail) setErrors({ ...errors, detail: "" });
              }}
              rows="4"
              className="w-full border-2 border-gray-200 p-3 md:p-4 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all resize-none"
            />
            {errors.detail && (
              <p className="text-red-500 text-xs mt-1">{errors.detail}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 md:mb-2 flex items-center gap-2">
              <Paperclip className="w-4 h-4 text-purple-600" />
              Attachment
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 bg-gray-50">
              <label className="flex items-center justify-center gap-2 cursor-pointer text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                <Plus className="w-5 h-5" />
                <span>Add Attachment</span>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.xlsx,.xls,.txt"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
              {formData.attachment && (
                <div className="mt-3 flex items-center justify-between bg-white p-3 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-purple-600" />
                    <span className="text-sm font-medium text-gray-700">
                      {formData.attachment.name || formData.attachment}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attachment: null })}
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
            className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 md:py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
          >
            {editData ? "Update Ticket" : "Save Ticket"}
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

// Modal to view ticket details & comments
const TicketDetailModal = ({ ticket, close, onAddComment, currentUser, onEdit, canEdit }) => {
  const [comment, setComment] = useState("");

  const handleAddComment = () => {
    if (!comment.trim()) return;
    onAddComment(ticket.id, {
      user: currentUser,
      text: comment,
      date: new Date().toISOString().split("T")[0],
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });
    setComment("");
  };

  const handleDownload = () => {
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

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-indigo-600 p-6 rounded-t-2xl flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Ticket {ticket.ticketId || ticket.id}
            </h2>
            <p className="text-purple-100 text-sm mt-1">{ticket.title}</p>
            <span className="inline-block mt-2 px-3 py-1 bg-purple-500/30 text-white rounded-lg text-xs font-semibold">
              Project Manager Ticket
            </span>
          </div>
          <div className="flex items-center gap-3">
            {canEdit && onEdit && (
              <button
                onClick={() => {
                  close();
                  onEdit(ticket);
                }}
                className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-xl transition-all font-semibold"
              >
                <Pencil className="w-4 h-4" />
                Edit Ticket
              </button>
            )}
            <button onClick={close} className="text-white/80 hover:text-white">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-5">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{ticket.title}</h3>
            <div className="flex flex-wrap gap-2">
              <StatusBadge status={ticket.status} />
            </div>
          </div>

          {/* Raised By / Date / Assigned To */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-4 rounded-xl border-2 border-blue-200">
              <label className="text-xs font-bold text-blue-700 uppercase mb-1 block">
                Raised By
              </label>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-gray-900">
                  {ticket.raisedBy || "Project Manager"}
                </span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-4 rounded-xl border-2 border-green-200">
              <label className="text-xs font-bold text-green-700 uppercase mb-1 block">
                Raised On
              </label>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-green-600" />
                <span className="text-sm font-semibold text-gray-900">
                  {ticket.raisedDate || ticket.date}
                </span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 p-4 rounded-xl border-2 border-purple-200">
              <label className="text-xs font-bold text-purple-700 uppercase mb-1 block">
                Assigned To
              </label>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-semibold text-gray-900">
                  {ticket.assignedTo || "Unassigned"}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-gray-50 p-5 rounded-2xl border-2 border-gray-200">
            <label className="text-sm font-bold text-gray-700 uppercase mb-2 block">
              Description
            </label>
            <p className="text-gray-800 leading-relaxed">
              {ticket.description || ticket.detail}
            </p>
          </div>

          {/* Attachment */}
          {ticket.attachment && (
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-5 rounded-2xl border-2 border-purple-200">
              <label className="text-sm font-bold text-purple-900 uppercase mb-2 block flex items-center gap-2">
                <Paperclip className="w-4 h-4" />
                Attachment
              </label>
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
              >
                <FileText className="w-4 h-4" />
                <span>
                  {ticket.attachment instanceof File
                    ? ticket.attachment.name
                    : typeof ticket.attachment === "string"
                    ? "View File"
                    : "Download Attachment"}
                </span>
                <Download className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Comments */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-5 rounded-2xl border-2 border-indigo-200">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-5 h-5 text-indigo-600" />
              <label className="text-sm font-bold text-indigo-900 uppercase">
                Comments ({ticket.comments?.length || 0})
              </label>
            </div>

            <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
              {ticket.comments?.map((c, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-xl border border-indigo-200"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">
                          {c.user[0]}
                        </span>
                      </div>
                      <span className="font-semibold text-gray-900 text-sm">
                        {c.user}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {c.date} {c.time}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">{c.text}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add a comment..."
                className="flex-1 px-4 py-3 rounded-xl border-2 border-indigo-200 focus:border-indigo-500 focus:outline-none"
                onKeyPress={(e) => e.key === "Enter" && handleAddComment()}
              />
              <button
                onClick={handleAddComment}
                className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 flex items-center gap-2"
              >
                <Send className="w-4 h-4" /> Send
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 p-6 border-t-2 border-gray-200 bg-gray-50 rounded-b-2xl">
          <button
            onClick={close}
            className="px-6 py-2 text-gray-700 bg-white border-2 border-gray-300 rounded-xl hover:bg-gray-50 font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// Main component
export default function ProjectManagerIssueTracker() {
  const currentUser = "Project Manager";
  const [tickets, setTickets] = useState([
    {
      id: "TI2001",
      ticketId: "TI2001",
      title: "Database Migration Task",
      status: "Pending",
      assignedTo: "John Smith (EMP2015)",
      date: "2024-03-26",
      detail: "Need to migrate database to new server. Requires coordination with DevOps team.",
      raisedBy: "Project Manager",
      raisedDate: "2024-03-26",
      description: "Need to migrate database to new server. Requires coordination with DevOps team.",
      comments: [],
      source: "project_manager",
    },
    {
      id: "TI2002",
      ticketId: "TI2002",
      title: "API Integration Review",
      status: "Open",
      assignedTo: "Tech Lead",
      date: "2024-03-27",
      detail: "Review and approve new API integration for payment gateway.",
      raisedBy: "Project Manager",
      raisedDate: "2024-03-27",
      description: "Review and approve new API integration for payment gateway.",
      comments: [],
      source: "project_manager",
    },
  ]);

  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [viewTicket, setViewTicket] = useState(null);
  const [editData, setEditData] = useState(null);

  // Check if ticket can be edited by PM
  const canEditTicket = (ticket) => {
    return (
      ticket.assignedTo === currentUser ||
      ticket.source === "project_manager" ||
      ticket.raisedBy === "Project Manager"
    );
  };

  const handleSaveTicket = (data, existingId = null) => {
    if (existingId) {
      // Update existing ticket
      setTickets(
        tickets.map((ticket) =>
          (ticket.id === existingId || ticket.ticketId === existingId)
            ? { ...ticket, ...data }
            : ticket
        )
      );
    } else {
      // Add new ticket
      setTickets([{ ...data, raisedBy: currentUser }, ...tickets]);
    }
    setShowModal(false);
    setEditData(null);
  };

  const handleEditTicket = (ticket) => {
    setEditData(ticket);
    setShowModal(true);
  };

  const handleAddComment = (ticketId, comment) => {
    setTickets(
      tickets.map((ticket) =>
        ticket.id === ticketId
          ? { ...ticket, comments: [...(ticket.comments || []), comment] }
          : ticket
      )
    );
  };

  // Filter tickets
  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearch =
      search.trim() === "" ||
      ticket.title.toLowerCase().includes(search.toLowerCase()) ||
      ticket.ticketId?.toLowerCase().includes(search.toLowerCase()) ||
      ticket.assignedTo?.toLowerCase().includes(search.toLowerCase());
    if (filter === "All") return matchesSearch;
    if (filter === "Raised by Me")
      return matchesSearch && ticket.raisedBy === currentUser;
    if (filter === "Assigned to Me")
      return matchesSearch && ticket.assignedTo === currentUser;
    if (filter === "Pending")
      return matchesSearch && ticket.status !== "Resolved" && ticket.status !== "Closed";
    if (filter === "Resolved")
      return matchesSearch && (ticket.status === "Resolved" || ticket.status === "Closed");
    return matchesSearch;
  });

  const stats = {
    total: tickets.length,
    raisedByMe: tickets.filter((t) => t.raisedBy === currentUser).length,
    assignedToMe: tickets.filter((t) => t.assignedTo === currentUser).length,
    pending: tickets.filter((t) => t.status !== "Resolved" && t.status !== "Closed").length,
    resolved: tickets.filter((t) => t.status === "Resolved" || t.status === "Closed").length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header & Raise Ticket */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-purple-100 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <Briefcase className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Project Manager Ticket Tracker
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Manage and track project manager tickets
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              setEditData(null);
              setShowModal(true);
            }}
            className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl hover:from-purple-700 hover:to-indigo-700 shadow-lg"
          >
            <Plus className="w-5 h-5" /> Raise PM Ticket
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          <div className="bg-white p-4 rounded-xl shadow-md border-2 border-purple-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-gray-600 uppercase">
                Total Tickets
              </span>
              <Briefcase className="w-5 h-5 text-purple-600" />
            </div>
            <p className="text-3xl font-bold text-purple-600">{stats.total}</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md border-2 border-blue-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-gray-600 uppercase">
                Raised by Me
              </span>
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-blue-600">
              {stats.raisedByMe}
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md border-2 border-indigo-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-gray-600 uppercase">
                Assigned to Me
              </span>
              <User className="w-5 h-5 text-indigo-600" />
            </div>
            <p className="text-3xl font-bold text-indigo-600">
              {stats.assignedToMe}
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md border-2 border-orange-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-gray-600 uppercase">
                Pending
              </span>
              <Clock className="w-5 h-5 text-orange-600" />
            </div>
            <p className="text-3xl font-bold text-orange-600">
              {stats.pending}
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md border-2 border-green-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-gray-600 uppercase">
                Resolved
              </span>
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-3xl font-bold text-green-600">
              {stats.resolved}
            </p>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-purple-100 flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search tickets..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {[
              "All",
              "Raised by Me",
              "Assigned to Me",
              "Pending",
              "Resolved",
            ].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-xl font-medium text-sm ${
                  filter === f
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Ticket List */}
        <div className="space-y-4">
          {filteredTickets.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center border border-gray-200">
              <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No tickets found</p>
            </div>
          ) : (
            filteredTickets.map((ticket) => (
              <div
                key={ticket.id}
                className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div 
                    className="flex-1 cursor-pointer"
                    onClick={() => setViewTicket(ticket)}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold text-gray-500">
                        #{ticket.ticketId || ticket.id}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900">
                        {ticket.title}
                      </h3>
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-lg text-xs font-semibold">
                        PM Ticket
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {ticket.description || ticket.detail}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {canEditTicket(ticket) && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEditTicket(ticket);
                        }}
                        className="p-2 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-200 transition-all"
                        title="Edit Ticket"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                    )}
                    <span className="text-xs font-medium text-gray-500">
                      {ticket.assignedTo}
                    </span>
                    {ticket.attachment && (
                      <div className="flex items-center gap-1 text-xs text-purple-600">
                        <FileText className="w-3 h-3" />
                        <span>Has Attachment</span>
                      </div>
                    )}
                    <ArrowRight 
                      className="w-5 h-5 text-purple-600 cursor-pointer"
                      onClick={() => setViewTicket(ticket)}
                    />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {showModal && (
        <PMTicketModal
          close={() => {
            setShowModal(false);
            setEditData(null);
          }}
          save={handleSaveTicket}
          editData={editData}
        />
      )}
      {viewTicket && (
        <TicketDetailModal
          ticket={viewTicket}
          close={() => setViewTicket(null)}
          onAddComment={handleAddComment}
          currentUser={currentUser}
          onEdit={handleEditTicket}
          canEdit={canEditTicket(viewTicket)}
        />
      )}
    </div>
  );
}

