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
  ChevronDown,
  ChevronUp,
  FolderOpen,
} from "lucide-react";

const TaskDetailModal = ({ task, close, onMarkReview, isReviewed }) => {
  // Debug logging
  console.log("TaskDetailModal - task:", task);
  console.log("TaskDetailModal - attachments:", task.attachments);

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={close}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-t-2xl flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">{task.TaskNumber}</h2>
            <p className="text-indigo-100 text-sm mt-1">{task.Project}</p>
          </div>
          <button onClick={close} className="text-white/80 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100/50 p-4 rounded-xl border-2 border-indigo-200">
              <label className="block text-xs font-bold text-indigo-700 uppercase mb-1">
                Task Number
              </label>
              <p className="text-xl font-bold text-indigo-600">
                {task.TaskNumber}
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 p-4 rounded-xl border-2 border-purple-200">
              <label className="block text-xs font-bold text-purple-700 uppercase mb-1">
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
              <label className="block text-xs font-bold text-pink-700 uppercase mb-1">
                Task Date
              </label>
              <p className="text-sm font-bold text-pink-600 mt-1">
                {task.TaskDate}
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-5 rounded-2xl shadow-lg">
            <label className="block text-xs font-bold text-white/80 uppercase mb-2">
              Project Name
            </label>
            <p className="text-2xl font-bold text-white">{task.Project}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100/50 p-4 rounded-xl border-2 border-cyan-200">
              <label className="block text-xs font-bold text-cyan-700 uppercase mb-2">
                Assigned To
              </label>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-cyan-600" />
                <span className="text-gray-900 font-semibold">
                  {task.Employee_ID}
                </span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 p-4 rounded-xl border-2 border-teal-200">
              <label className="block text-xs font-bold text-teal-700 uppercase mb-2">
                Due Date
              </label>
              <span className="text-gray-900 font-semibold">
                {task.DueDate}
              </span>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex-1 bg-white p-3 rounded-xl border-2 border-gray-200">
              <label className="block text-xs font-bold text-gray-600 uppercase mb-2">
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
              <label className="block text-xs font-bold text-gray-600 uppercase mb-2">
                Task Type
              </label>
              <span className="inline-flex px-4 py-2 rounded-lg text-sm font-bold bg-gray-700 text-white shadow-sm">
                {task.Type}
              </span>
            </div>
          </div>

          {/* ATTACHMENTS SECTION */}
          {task.attachments?.length > 0 && (
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-2xl border-2 border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                  <FolderOpen className="w-5 h-5 text-white" />
                </div>
                <label className="text-sm font-bold text-amber-900 uppercase">
                  Attachments ({task.attachments.length})
                </label>
              </div>

              <div className="space-y-2">
                {task.attachments.map((file, idx) => (
                  <a
                    key={idx}
                    href={file.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-between items-center bg-white p-4 rounded-xl hover:bg-amber-50 border border-amber-200 hover:border-amber-300 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center group-hover:bg-amber-200">
                        <FolderOpen className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {file.name}
                        </p>
                        <p className="text-xs text-gray-500">{file.size}</p>
                      </div>
                    </div>
                    <span className="text-xs text-amber-600 font-medium">
                      View →
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={() => onMarkReview(task.TaskNumber)}
            className={`w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 ${
              isReviewed
                ? "bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white"
                : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
            }`}
          >
            <CheckCircle2 className="w-6 h-6" />
            {isReviewed ? "Marked for Review ✓" : "Mark for Review"}
          </button>
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

const TaskModal = ({ close, save, editData, projects }) => {
  const [formData, setFormData] = useState(
    editData
      ? { ...editData, attachments: editData.attachments || [] }
      : {
          TaskNumber: "",
          Employee_ID: "",
          Project: "",
          Status: "Open",
          Priority: "Medium",
          Type: "Development",
          TaskDate: "",
          DueDate: "",
          attachments: [],
        }
  );

  const handleAttachmentAdd = (e) => {
    const files = Array.from(e.target.files);

    const newFiles = files.map((file) => ({
      name: file.name,
      size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
      type: file.type,
      url: URL.createObjectURL(file),
    }));

    setFormData({
      ...formData,
      attachments: [...(formData.attachments || []), ...newFiles],
    });
  };

  const handleSubmit = () => {
    if (!formData.TaskNumber.trim()) return alert("Task Number is required");
    if (!formData.Employee_ID.trim()) return alert("Employee ID is required");
    if (!formData.Project.trim()) return alert("Project is required");
    if (!formData.TaskDate) return alert("Task Date is required");
    if (!formData.DueDate) return alert("Due Date is required");

    console.log("Saving task with attachments:", formData.attachments);
    save(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
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
                value={formData.TaskNumber}
                onChange={(e) =>
                  setFormData({ ...formData, TaskNumber: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                placeholder="e.g., TASK-01"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Employee ID
              </label>
              <input
                type="text"
                value={formData.Employee_ID}
                onChange={(e) =>
                  setFormData({ ...formData, Employee_ID: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                placeholder="e.g., EMP20215"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Project
              </label>
              <input
                type="text"
                value={formData.Project}
                onChange={(e) =>
                  setFormData({ ...formData, Project: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                placeholder="e.g., Employee Task Management"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Status
              </label>
              <select
                value={formData.Status}
                onChange={(e) =>
                  setFormData({ ...formData, Status: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
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
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
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
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
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
                value={formData.TaskDate}
                onChange={(e) =>
                  setFormData({ ...formData, TaskDate: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Due Date
              </label>
              <input
                type="date"
                value={formData.DueDate}
                onChange={(e) =>
                  setFormData({ ...formData, DueDate: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Attachments
              </label>

              <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 bg-gray-50">
                <label className="flex items-center gap-2 cursor-pointer text-indigo-600 font-semibold">
                  <Plus className="w-4 h-4" />
                  Add Attachment
                  <input
                    type="file"
                    multiple
                    className="hidden"
                    onChange={handleAttachmentAdd}
                  />
                </label>

                {formData.attachments?.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {formData.attachments.map((file, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-center bg-white p-3 rounded-lg border"
                      >
                        <div>
                          <p className="text-sm font-medium">{file.name}</p>
                          <p className="text-xs text-gray-500">{file.size}</p>
                        </div>
                        <button
                          onClick={() =>
                            setFormData({
                              ...formData,
                              attachments: formData.attachments.filter(
                                (_, i) => i !== idx
                              ),
                            })
                          }
                          className="text-red-600 text-sm font-medium hover:text-red-700"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              onClick={handleSubmit}
              className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 font-semibold"
            >
              {editData ? "Update Task" : "Create Task"}
            </button>
            <button
              onClick={close}
              className="px-6 py-3 rounded-xl border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectModal = ({ close, save }) => {
  const [projectData, setProjectData] = useState({
    name: "",
    code: "",
    client: "",
    startDate: "",
    endDate: "",
    status: "Active",
    priority: "Medium",
    tasks: [],
  });

  const handleSubmit = () => {
    if (!projectData.name.trim()) return alert("Project name is required");
    if (!projectData.code.trim()) return alert("Project code is required");
    if (!projectData.client.trim()) return alert("Client name is required");
    if (!projectData.startDate) return alert("Start date is required");
    if (!projectData.endDate) return alert("End date is required");

    save(projectData);
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-t-2xl">
          <h3 className="text-2xl font-bold text-white">Create New Project</h3>
        </div>

        <div className="p-6 space-y-4">
          <input
            placeholder="Project Name"
            className="w-full px-4 py-3 rounded-xl border-gray-200 border-2"
            onChange={(e) =>
              setProjectData({ ...projectData, name: e.target.value })
            }
          />

          <input
            placeholder="Project Code"
            className="w-full px-4 py-3 rounded-xl border-gray-200 border-2"
            onChange={(e) =>
              setProjectData({ ...projectData, code: e.target.value })
            }
          />

          <input
            placeholder="Client Name"
            className="w-full px-4 py-3 rounded-xl border-gray-200 border-2"
            onChange={(e) =>
              setProjectData({ ...projectData, client: e.target.value })
            }
          />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Status
              </label>
              <select
                value={projectData.status}
                onChange={(e) =>
                  setProjectData({ ...projectData, status: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50"
              >
                <option>Active</option>
                <option>On Hold</option>
                <option>Completed</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Priority
              </label>
              <select
                value={projectData.priority}
                onChange={(e) =>
                  setProjectData({ ...projectData, priority: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50"
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Start Date
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 rounded-xl border-gray-200 border-2"
                onChange={(e) =>
                  setProjectData({ ...projectData, startDate: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                End Date
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 rounded-xl border-gray-200 border-2"
                onChange={(e) =>
                  setProjectData({ ...projectData, endDate: e.target.value })
                }
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              onClick={handleSubmit}
              className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700"
            >
              Create Project
            </button>
            <button
              onClick={close}
              className="px-6 py-3 rounded-xl border-2 font-semibold"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamLeaderTasks = () => {
  const [projects] = useState([
    {
      id: 1,
      name: "E-Commerce Platform",
      code: "ECOM-2024",
      client: "TechCorp Inc.",
      startDate: "2024-01-15",
      endDate: "2024-06-30",
      status: "Active",
      priority: "High",
      tasks: [
        {
          id: 1,
          TaskNumber: "TASK-01",
          Employee_ID: "EMP2015",
          Project: "E-Commerce Platform",
          Status: "Open",
          Priority: "Medium",
          Type: "Development",
          TaskDate: "2024-03-22",
          DueDate: "2024-04-02",
          attachments: [
            {
              name: "requirements.pdf",
              size: "2.45 MB",
              url: "#",
              type: "application/pdf",
            },
            {
              name: "design-mockup.png",
              size: "1.23 MB",
              url: "#",
              type: "image/png",
            },
          ],
        },
        {
          id: 2,
          TaskNumber: "TASK-02",
          Employee_ID: "EMP2016",
          Project: "E-Commerce Platform",
          Status: "In Progress",
          Priority: "High",
          Type: "Bug",
          TaskDate: "2024-03-20",
          DueDate: "2024-03-28",
          attachments: [],
        },
      ],
    },
    {
      id: 2,
      name: "Mobile App Redesign",
      code: "MOB-2024",
      client: "StartupXYZ",
      startDate: "2024-02-01",
      endDate: "2024-05-15",
      status: "Active",
      priority: "Medium",
      tasks: [
        {
          id: 3,
          TaskNumber: "TASK-03",
          Employee_ID: "EMP2017",
          Project: "Mobile App Redesign",
          Status: "Open",
          Priority: "Low",
          Type: "Development",
          TaskDate: "2024-03-25",
          DueDate: "2024-04-10",
          attachments: [],
        },
      ],
    },
  ]);

  const [tasksData, setTasksData] = useState(projects);
  const [expandedProjects, setExpandedProjects] = useState({});
  const [search, setSearch] = useState("");
  const [viewTask, setViewTask] = useState(null);
  const [reviewedTasks, setReviewedTasks] = useState(new Set());
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [editTaskData, setEditTaskData] = useState(null);
  const [selectedProjectForTask, setSelectedProjectForTask] = useState(null);
  const [showProjectModal, setShowProjectModal] = useState(false);

  const handleCreateProject = (project) => {
    setTasksData((prev) => [
      ...prev,
      {
        ...project,
        id: Date.now(),
        tasks: [],
      },
    ]);
    setShowProjectModal(false);
  };

  const toggleProject = (projectId) => {
    setExpandedProjects((prev) => ({ ...prev, [projectId]: !prev[projectId] }));
  };

  const handleAddTask = (projectId) => {
    setSelectedProjectForTask(projectId);
    setEditTaskData(null);
    setShowTaskModal(true);
  };

  const handleEditTask = (projectId, task) => {
    setSelectedProjectForTask(projectId);
    setEditTaskData(task);
    setShowTaskModal(true);
  };

  const handleDeleteTask = (projectId, taskId) => {
    if (!window.confirm("Delete this task?")) return;
    setTasksData(
      tasksData.map((p) =>
        p.id === projectId
          ? { ...p, tasks: p.tasks.filter((t) => t.id !== taskId) }
          : p
      )
    );
  };

  const handleSaveTask = (data) => {
    console.log("handleSaveTask called with:", data);

    setTasksData(
      tasksData.map((p) => {
        if (p.id !== selectedProjectForTask) return p;
        if (editTaskData) {
          return {
            ...p,
            tasks: p.tasks.map((t) =>
              t.id === editTaskData.id
                ? {
                    ...t,
                    ...data,
                    attachments: data.attachments || t.attachments || [],
                  }
                : t
            ),
          };
        } else {
          return {
            ...p,
            tasks: [
              ...p.tasks,
              { ...data, id: Date.now(), attachments: data.attachments || [] },
            ],
          };
        }
      })
    );
    setShowTaskModal(false);
  };

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

  const getStatusColor = (status) => {
    const map = {
      Active: "bg-green-100 text-green-800",
      "On Hold": "bg-yellow-100 text-yellow-800",
      Completed: "bg-blue-100 text-blue-800",
    };
    return map[status] || "bg-gray-100 text-gray-800";
  };

  const getPriorityColor = (priority) => {
    const map = {
      High: "bg-red-100 text-red-800",
      Medium: "bg-orange-100 text-orange-800",
      Low: "bg-green-100 text-green-800",
    };
    return map[priority] || "bg-gray-100 text-gray-800";
  };

  const filteredProjects = tasksData.filter((project) => {
    if (!search.trim()) return true;
    const s = search.toLowerCase();
    return (
      project.name.toLowerCase().includes(s) ||
      project.code.toLowerCase().includes(s) ||
      project.tasks.some(
        (t) =>
          t.TaskNumber.toLowerCase().includes(s) ||
          t.Employee_ID.toLowerCase().includes(s)
      )
    );
  });

  const allTasks = tasksData.flatMap((p) => p.tasks);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-indigo-100">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Briefcase className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Team Leader - Task Management
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {allTasks.length} total tasks across {filteredProjects.length}{" "}
                  projects
                </p>
              </div>
            </div>
            <div className="relative flex-1 lg:w-80">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search projects, tasks..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 bg-white focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
              />
            </div>
            <button
              onClick={() => setShowProjectModal(true)}
              className="flex items-center gap-2 px-5 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 shadow-lg"
            >
              <Plus className="w-5 h-5" />
              Create Project
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg border border-indigo-100"
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <FolderOpen className="w-6 h-6 text-indigo-600" />
                      <h2 className="text-xl font-semibold text-gray-900">
                        {project.name}
                      </h2>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          project.status
                        )}`}
                      >
                        {project.status}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(
                          project.priority
                        )}`}
                      >
                        {project.priority}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">
                      Code: {project.code} • Client: {project.client}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {project.startDate} → {project.endDate}
                    </p>
                  </div>

                  <span className="self-start sm:self-auto px-3 py-2 bg-indigo-100 text-indigo-800 text-sm font-semibold rounded-lg">
                    {project.tasks.length}{" "}
                    {project.tasks.length === 1 ? "Task" : "Tasks"}
                  </span>
                </div>
              </div>

              <div className="border-b border-gray-200">
                <button
                  onClick={() => toggleProject(project.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50"
                >
                  <span className="font-semibold text-gray-700">
                    View Tasks
                  </span>
                  {expandedProjects[project.id] ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>

                {expandedProjects[project.id] && (
                  <div className="px-6 pb-6 pt-2 bg-gray-50">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-medium text-gray-700">
                        All Tasks for {project.name}
                      </h3>
                      <button
                        onClick={() => handleAddTask(project.id)}
                        className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm font-medium shadow-lg"
                      >
                        <Plus className="w-4 h-4" />
                        Add New Task
                      </button>
                    </div>

                    {project.tasks.length === 0 ? (
                      <div className="text-center py-8 bg-white rounded-lg border-2 border-dashed border-gray-300">
                        <Briefcase className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                        <p className="text-gray-500 text-sm">
                          No tasks yet. Click "Add New Task" to get started.
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {project.tasks.map((task) => (
                          <div
                            key={task.id}
                            className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md"
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <span
                                    onClick={() => {
                                      const latestTask = tasksData
                                        .find((p) => p.id === project.id)
                                        ?.tasks.find((t) => t.id === task.id);
                                      console.log("Opening task:", latestTask);
                                      setViewTask(latestTask);
                                    }}
                                    className="font-semibold text-lg text-indigo-600 cursor-pointer hover:underline"
                                  >
                                    {task.TaskNumber}
                                  </span>
                                  {reviewedTasks.has(task.TaskNumber) && (
                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                  )}
                                  {getStatusIcon(task.Status)}
                                  {task.attachments?.length > 0 && (
                                    <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
                                      {task.attachments.length} files
                                    </span>
                                  )}
                                </div>
                                <div className="flex flex-wrap gap-2 mb-2">
                                  {badge(task.Status, "status")}
                                  {badge(task.Priority, "priority")}
                                  <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-700">
                                    {task.Type}
                                  </span>
                                </div>
                                <div className="text-xs text-gray-500 space-y-1">
                                  <div className="flex items-center gap-2">
                                    <User className="w-3 h-3" />
                                    <span>Assigned: {task.Employee_ID}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Clock className="w-3 h-3" />
                                    <span>
                                      Created: {task.TaskDate} • Due:{" "}
                                      {task.DueDate}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-2 ml-4">
                                <button
                                  onClick={() =>
                                    handleEditTask(project.id, task)
                                  }
                                  className="p-2 hover:bg-blue-50 rounded-lg"
                                >
                                  <Pencil className="w-4 h-4 text-blue-600" />
                                </button>
                                <button
                                  onClick={() =>
                                    handleDeleteTask(project.id, task.id)
                                  }
                                  className="p-2 hover:bg-red-50 rounded-lg"
                                >
                                  <Trash2 className="w-4 h-4 text-red-600" />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {showTaskModal && (
        <TaskModal
          close={() => setShowTaskModal(false)}
          save={handleSaveTask}
          editData={editTaskData}
          projects={projects}
        />
      )}
      {viewTask && (
        <TaskDetailModal
          task={viewTask}
          close={() => setViewTask(null)}
          onMarkReview={(num) =>
            setReviewedTasks((prev) => {
              const newSet = new Set(prev);
              newSet.has(num) ? newSet.delete(num) : newSet.add(num);
              return newSet;
            })
          }
          isReviewed={reviewedTasks.has(viewTask.TaskNumber)}
        />
      )}
      {showProjectModal && (
        <ProjectModal
          close={() => setShowProjectModal(false)}
          save={handleCreateProject}
        />
      )}
    </div>
  );
};

export default TeamLeaderTasks;
