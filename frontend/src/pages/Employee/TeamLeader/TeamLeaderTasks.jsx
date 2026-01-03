/* eslint-disable no-undef */
import React, { useState } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  Search,
  CheckCircle2,
  Clock,
  AlertCircle,
  Briefcase,
  X,
  User,
} from "lucide-react";

const TaskDetailModal = ({ task, close, onMarkReview, isReviewed }) => {
  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-hidden"
      onClick={close}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-t-2xl flex items-center justify-between z-10">
          <div>
            <h2 className="text-2xl font-bold text-white">{task.TaskNumber}</h2>
            <p className="text-indigo-100 text-sm mt-1">{task.Project}</p>
          </div>
          <button
            onClick={close}
            className="text-white/80 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          {/* Top Info Cards - Task Number, Status, Date */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100/50 p-4 rounded-xl border-2 border-indigo-200">
              <label className="block text-xs font-bold text-indigo-700 uppercase tracking-wide mb-1">
                Task Number
              </label>
              <p className="text-xl font-bold text-indigo-600">
                {task.TaskNumber}
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 p-4 rounded-xl border-2 border-purple-200">
              <label className="block text-xs font-bold text-purple-700 uppercase tracking-wide mb-1">
                Status
              </label>
              <div className="flex items-center gap-2 mt-1">
                {task.Status === "Open" && (
                  <Clock className="w-5 h-5 text-emerald-600" />
                )}
                {task.Status === "Closed" && (
                  <CheckCircle2 className="w-5 h-5 text-slate-600" />
                )}
                {task.Status === "In Progress" && (
                  <AlertCircle className="w-5 h-5 text-blue-600" />
                )}
                <span
                  className={`text-sm font-bold ${
                    task.Status === "Open"
                      ? "text-emerald-600"
                      : task.Status === "Closed"
                      ? "text-slate-600"
                      : "text-blue-600"
                  }`}
                >
                  {task.Status}
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100/50 p-4 rounded-xl border-2 border-pink-200">
              <label className="block text-xs font-bold text-pink-700 uppercase tracking-wide mb-1">
                Task Date
              </label>
              <p className="text-sm font-bold text-pink-600 mt-1">
                {task.TaskDate}
              </p>
            </div>
          </div>

          {/* Project Name - Highlighted Section */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-5 rounded-2xl shadow-lg">
            <label className="block text-xs font-bold text-white/80 uppercase tracking-wide mb-2">
              Project Name
            </label>
            <p className="text-2xl font-bold text-white">{task.Project}</p>
          </div>

          {/* Client & Employee Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 p-4 rounded-xl border-2 border-teal-200">
              <label className="block text-xs font-bold text-teal-700 uppercase tracking-wide mb-2">
                Client
              </label>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {task.Client.charAt(0)}
                </div>
                <span className="text-gray-900 font-semibold">
                  {task.Client}
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100/50 p-4 rounded-xl border-2 border-cyan-200">
              <label className="block text-xs font-bold text-cyan-700 uppercase tracking-wide mb-2">
                Assigned To
              </label>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-cyan-600" />
                <span className="text-gray-900 font-semibold">
                  {task.Employee_ID}
                </span>
              </div>
            </div>
          </div>

          {/* Priority & Type Tags */}
          <div className="flex gap-3">
            <div className="flex-1 bg-white p-3 rounded-xl border-2 border-gray-200">
              <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">
                Priority
              </label>
              <span
                className={`inline-flex px-4 py-2 rounded-lg text-sm font-bold shadow-sm ${
                  task.Priority === "High"
                    ? "bg-rose-500 text-white"
                    : task.Priority === "Medium"
                    ? "bg-amber-500 text-white"
                    : "bg-blue-500 text-white"
                }`}
              >
                {task.Priority}
              </span>
            </div>

            <div className="flex-1 bg-white p-3 rounded-xl border-2 border-gray-200">
              <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">
                Task Type
              </label>
              <span className="inline-flex px-4 py-2 rounded-lg text-sm font-bold bg-gray-700 text-white shadow-sm">
                {task.Type}
              </span>
            </div>
          </div>

          {/* Task Details Section */}
          <div className="bg-gradient-to-br from-blue-50 via-blue-50 to-indigo-50 p-5 rounded-2xl border-2 border-blue-200 shadow-inner">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-white" />
              </div>
              <label className="text-sm font-bold text-blue-900 uppercase tracking-wide">
                Task Details
              </label>
            </div>
            <div className="bg-white rounded-xl p-4 border border-blue-200">
              <p className="text-gray-800 leading-relaxed">
                {task.Details || "No details provided for this task."}
              </p>
            </div>
          </div>

          {/* Solution Section */}
          <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-5 rounded-2xl border-2 border-green-200 shadow-inner">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <label className="text-sm font-bold text-green-900 uppercase tracking-wide">
                Solution
              </label>
            </div>
            <div className="bg-white rounded-xl p-4 border border-green-200">
              <p className="text-gray-800 leading-relaxed">
                {task.Solution ||
                  "Solution is pending or not yet documented for this task."}
              </p>
            </div>
          </div>

          {/* Mark for Review Button */}
          <div className="pt-2">
            <button
              onClick={() => onMarkReview(task.TaskNumber)}
              className={`w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-95 ${
                isReviewed
                  ? "bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white"
                  : "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white"
              }`}
            >
              <CheckCircle2 className="w-6 h-6" />
              {isReviewed ? "Marked for Review ✓" : "Mark for Review"}
            </button>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end gap-3 p-6 border-t-2 border-gray-200 bg-gray-50 rounded-b-2xl">
          <button
            onClick={close}
            className="px-6 py-2 text-gray-700 bg-white border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-colors font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const TaskModal = ({ close, save, editData }) => {
  const [formData, setFormData] = useState(
    editData || {
      TaskNumber: "",
      Employee_ID: "",
      Project: "",
      Client: "",
      Status: "Open",
      Priority: "Medium",
      Type: "Development",
      TaskDate: "",
      Details: "",
      // Solution: "",
    }
  );

  const handleSubmit = () => {
    const {
      TaskNumber,
      Employee_ID,
      Project,
      Client,
      Status,
      Priority,
      Type,
      TaskDate,
      Details,
    } = formData;

    if (!TaskNumber.trim()) return alert("Task Number is required");
    if (!Employee_ID.trim()) return alert("TeamLeader ID is required");
    if (!Project.trim()) return alert("Project is required");
    if (!Client.trim()) return alert("Client is required");
    if (!Status) return alert("Status is required");
    if (!Priority) return alert("Priority is required");
    if (!Type) return alert("Task Type is required");
    if (!TaskDate) return alert("Task Date is required");
    if (!Details.trim()) return alert("Task Details are required");

    save(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 overflow-hidden">
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto overflow-x-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-t-2xl">
          <h3 className="text-2xl font-bold text-white">
            {editData ? "Edit Task" : "Add New Task"}
          </h3>
          <p className="text-indigo-100 text-sm mt-1">
            {editData ? "Update task information" : "Create a new task entry"}
          </p>
        </div>

        <div className="p-6 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Task Number
              </label>
              <input
                type="text"
                required
                value={formData.TaskNumber}
                onChange={(e) =>
                  setFormData({ ...formData, TaskNumber: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all"
                placeholder="e.g., TASK-01"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Employee ID
              </label>
              <input
                type="text"
                required
                value={formData.Employee_ID}
                onChange={(e) =>
                  setFormData({ ...formData, Employee_ID: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all"
                placeholder="e.g., EMP20215"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Project
              </label>
              <input
                type="text"
                required
                value={formData.Project}
                onChange={(e) =>
                  setFormData({ ...formData, Project: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all"
                placeholder="e.g., PHP Website"
              />
            </div>

            {/* <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Client
              </label>
              <input
                type="text"
                required
                value={formData.Client}
                onChange={(e) =>
                  setFormData({ ...formData, Client: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all"
                placeholder="e.g., Cara Stevens"
              />
            </div> */}

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Status
              </label>
              <select
                value={formData.Status}
                onChange={(e) =>
                  setFormData({ ...formData, Status: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all"
              >
                <option>Open</option>
                <option>Closed</option>
                <option>In Progress</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Priority
              </label>
              <select
                value={formData.Priority}
                onChange={(e) =>
                  setFormData({ ...formData, Priority: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all"
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Task Type
              </label>
              <select
                value={formData.Type}
                onChange={(e) =>
                  setFormData({ ...formData, Type: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all"
              >
                <option>Development</option>
                <option>Bug</option>
                <option>Error</option>
                <option>Testing</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Task Date
              </label>
              <input
                type="date"
                required
                value={formData.TaskDate}
                onChange={(e) =>
                  setFormData({ ...formData, TaskDate: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Due Date
              </label>
              <input
                type="date"
                required
                value={formData.DueDate}
                onChange={(e) =>
                  setFormData({ ...formData, DueDate: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Details
              </label>
              <textarea
                rows="3"
                value={formData.Details}
                onChange={(e) =>
                  setFormData({ ...formData, Details: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 resize-none focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all"
                placeholder="Additional task details..."
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              onClick={handleSubmit}
              className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 font-semibold"
            >
              {editData ? "Update Task" : "Create Task"}
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

// Main Tasks Component
const TeamLeaderTasks = () => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [Tasks, setTasks] = useState([
    {
      id: 1,
      TaskNumber: "TASK-01",
      Employee_ID: "EMP2015",
      Project: "PHP Website",
      Status: "Open",
      Priority: "Medium",
      Type: "Development",
      TaskDate: "2018-03-22",
      DueDate: "2019-01-02",
      Details:
        "Wrong data received from API endpoint causing display issues on the user dashboard. Need to validate data structure and implement error handling.",
      Solution:
        "Implemented data validation middleware to check incoming API responses. Added try-catch blocks with proper error messages. Created a fallback UI component for when data is malformed.",
    },
    {
      id: 2,
      TaskNumber: "TASK-14",
      Employee_ID: "EMP2016",
      Project: "IOS App",
      Status: "Open",
      Priority: "Medium",
      Type: "Bug",
      TaskDate: "2018-10-12",
      DueDate: "2018-12-02",
      Details:
        "App crashes when user tries to upload images larger than 5MB. Need to implement file size validation before upload.",
      Solution:
        "Currently working on implementation. Planning to add client-side validation that checks file size before upload attempt and displays user-friendly error message.",
    },
  ]);

  const [openModal, setOpenModal] = useState(false);
  const [editData, setEditData] = useState(null);
  const [search, setSearch] = useState("");

  // NEW: State for task detail view modal
  const [viewTask, setViewTask] = useState(null);
  const [reviewedTasks, setReviewedTasks] = useState(new Set());

  const handleAdd = () => {
    setEditData(null);
    setOpenModal(true);
  };

  const handleEdit = (task) => {
    setEditData(task);
    setOpenModal(true);
  };

  const handleDelete = (id) => {
    setTasks(Tasks.filter((task) => task.id !== id));
  };

  const handleSave = (data) => {
    if (editData) {
      setTasks(Tasks.map((t) => (t.id === data.id ? data : t)));
    } else {
      setTasks([...Tasks, { ...data, id: Date.now() }]);
    }
    setOpenModal(false);
  };

  // NEW: Handle task number click
  const handleTaskClick = (task) => {
    setViewTask(task);
  };

  // NEW: Handle mark for review
  const handleMarkReview = (taskNumber) => {
    setReviewedTasks((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(taskNumber)) {
        newSet.delete(taskNumber);
      } else {
        newSet.add(taskNumber);
      }
      return newSet;
    });
  };

  const filteredTasks = Tasks.filter((t) => {
    if (!search.trim()) return true;
    const s = search.toLowerCase();
    return (
      t.TaskNumber.toLowerCase().includes(s) ||
      t.Employee_ID.toLowerCase().includes(s) ||
      t.Project.toLowerCase().includes(s) ||
      t.Status.toLowerCase().includes(s) ||
      t.Priority.toLowerCase().includes(s) ||
      t.Type.toLowerCase().includes(s) ||
      t.TaskDate.toLowerCase().includes(s) ||
      t.DueDate.toLowerCase().includes(s) ||
      t.Details.toLowerCase().includes(s)
    );
  });

  const badge = (text, type) => {
    const statusMap = {
      Open: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
      Closed: "bg-slate-500/10 text-slate-600 border-slate-500/20",
      "In Progress": "bg-blue-500/10 text-blue-600 border-blue-500/20",
    };

    const priorityMap = {
      High: "bg-rose-500/10 text-rose-600 border-rose-500/20",
      Medium: "bg-amber-500/10 text-amber-600 border-amber-500/20",
      Low: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    };

    const map = type === "status" ? statusMap : priorityMap;

    return (
      <span
        className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${
          map[text] || "bg-gray-100 text-gray-700 border-gray-200"
        }`}
      >
        {text}
      </span>
    );
  };

  const getStatusIcon = (status) => {
    if (status === "Open")
      return <Clock className="w-4 h-4 text-emerald-600" />;
    if (status === "Closed")
      return <CheckCircle2 className="w-4 h-4 text-slate-600" />;
    return <AlertCircle className="w-4 h-4 text-blue-600" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="bg-white rounded-2xl shadow-lg shadow-indigo-100/50 p-6 mb-6 border border-indigo-100/50">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Briefcase className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  TeamLeader Tasks
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {filteredTasks.length}{" "}
                  {filteredTasks.length === 1 ? "task" : "tasks"} found
                  {selectedIds.length > 0 &&
                    ` • ${selectedIds.length} selected`}
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
                  type="text"
                  placeholder="Search tasks, projects, clients..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 bg-white focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all"
                />
              </div>

              <button
                onClick={handleAdd}
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-linear-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              >
                <Plus size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* TABLE */}
        <div className="hidden md:block overflow-hidden bg-white rounded-2xl shadow-lg shadow-indigo-100/50 border border-indigo-100/50">
          <div className="overflow-x-auto max-h-[650px] overflow-y-auto">
            <table className="min-w-full w-full text-sm">
              <thead className="sticky top-0 z-10">
                <tr className="bg-gradient-to-r from-indigo-50 to-purple-50 border-b-2 border-indigo-100">
                  <th className="p-4 text-left">
                    <input
                      type="checkbox"
                      checked={
                        filteredTasks.length > 0 &&
                        selectedIds.length === filteredTasks.length
                      }
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedIds(filteredTasks.map((row) => row.id));
                        } else {
                          setSelectedIds([]);
                        }
                      }}
                      className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-2 focus:ring-indigo-500/50 cursor-pointer"
                    />
                  </th>

                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider min-w-[120px]">
                    Task ID
                  </th>

                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider min-w-[140px]">
                    Emp ID
                  </th>

                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Project Name
                  </th>

                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Status
                  </th>

                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider min-w-[100px]">
                    Priority
                  </th>

                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider min-w-[120px]">
                    Task Type
                  </th>

                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider min-w-[120px]">
                    Task Date
                  </th>

                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider min-w-[120px]">
                    Due Date
                  </th>

                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider min-w-[100px]">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {filteredTasks.map((t) => (
                  <tr
                    key={t.id}
                    className="hover:bg-indigo-50/50 transition-colors duration-150 cursor-pointer group"
                  >
                    <td className="p-4">
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(t.id)}
                        onChange={() => {
                          if (selectedIds.includes(t.id)) {
                            setSelectedIds(
                              selectedIds.filter((id) => id !== t.id)
                            );
                          } else {
                            setSelectedIds([...selectedIds, t.id]);
                          }
                        }}
                        className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-2 focus:ring-indigo-500/50 cursor-pointer"
                      />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <span
                          className="font-semibold text-indigo-600 group-hover:text-indigo-700 cursor-pointer hover:underline"
                          onClick={() => handleTaskClick(t)}
                        >
                          {t.TaskNumber}
                        </span>
                        {reviewedTasks.has(t.TaskNumber) && (
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                        )}
                      </div>
                    </td>
                    <td className="p-4 text-gray-700">{t.Employee_ID}</td>
                    <td className="p-4">
                      <span className="font-medium text-gray-900">
                        {t.Project}
                      </span>
                    </td>

                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(t.Status)}
                        {badge(t.Status, "status")}
                      </div>
                    </td>
                    <td className="p-4">{badge(t.Priority, "priority")}</td>
                    <td className="p-4">
                      <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-700">
                        {t.Type}
                      </span>
                    </td>
                    <td className="p-4 text-gray-600 text-xs">{t.TaskDate}</td>
                    <td className="p-4 text-gray-600 text-xs">{t.DueDate}</td>
                    <td className="p-4">
                      <div className="flex gap-3">
                        <button
                          onClick={() => handleEdit(t)}
                          className="p-2 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
                        >
                          <Pencil size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(t.id)}
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
          {filteredTasks.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl shadow-lg shadow-indigo-100/50 p-5 space-y-3 border border-indigo-100/50 hover:shadow-xl hover:shadow-indigo-200/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3 flex-1">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(t.id)}
                    onChange={() => {
                      if (selectedIds.includes(t.id)) {
                        setSelectedIds(selectedIds.filter((id) => id !== t.id));
                      } else {
                        setSelectedIds([...selectedIds, t.id]);
                      }
                    }}
                    className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-2 focus:ring-indigo-500/50 cursor-pointer mt-1"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className="font-bold text-lg text-indigo-600 cursor-pointer hover:underline"
                        onClick={() => handleTaskClick(t)}
                      >
                        {t.TaskNumber}
                      </span>
                      {reviewedTasks.has(t.TaskNumber) && (
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                      )}
                    </div>
                    <p className="text-sm text-gray-500 mt-0.5">{t.TaskDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {getStatusIcon(t.Status)}
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

              <div className="space-y-2.5">
                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide min-w-24">
                    Project:
                  </span>
                  <span className="text-sm font-semibold text-gray-900">
                    {t.Project}
                  </span>
                </div>
                {/* <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide min-w-24">
                    Client:
                  </span>
                  <span className="text-sm text-gray-700">{t.Client}</span>
                </div> */}
                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide min-w-24">
                    Employee:
                  </span>
                  <span className="text-sm text-gray-700">{t.Employee_ID}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide min-w-24">
                    Type:
                  </span>
                  <span className="px-3 py-1 rounded-lg text-xs font-medium bg-gray-100 text-gray-700">
                    {t.Type}
                  </span>
                </div>
                {t.Details && (
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide min-w-24">
                      Details:
                    </span>
                    <span className="text-sm text-gray-700">{t.Details}</span>
                  </div>
                )}
              </div>

              <div className="flex gap-2 pt-2">
                {badge(t.Status, "status")}
                {badge(t.Priority, "priority")}
              </div>

              <div className="flex gap-3 pt-3 border-t border-gray-100">
                <button
                  onClick={() => handleEdit(t)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors font-semibold"
                >
                  <Pencil size={18} />
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(t.id)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-red-600 bg-red-50 hover:bg-red-100 transition-colors font-semibold"
                >
                  <Trash2 size={18} />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredTasks.length === 0 && (
          <div className="bg-white rounded-2xl shadow-lg shadow-indigo-100/50 p-12 text-center border border-indigo-100/50">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No tasks found
            </h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      {/* EDIT/ADD MODAL */}
      {openModal && (
        <TaskModal
          close={() => setOpenModal(false)}
          save={handleSave}
          editData={editData}
        />
      )}

      {viewTask && (
        <TaskDetailModal
          task={viewTask}
          close={() => setViewTask(null)}
          onMarkReview={handleMarkReview}
          isReviewed={reviewedTasks.has(viewTask.TaskNumber)}
        />
      )}
    </div>
  );
};

export default TeamLeaderTasks;
