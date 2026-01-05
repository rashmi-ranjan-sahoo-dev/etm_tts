import React, { useState } from "react";
import {
  Search,
  AlertCircle,
  Clock,
  CheckCircle2,
  Briefcase,
} from "lucide-react";

const initialTasks = [
  {
    id: 1,
    TaskNumber: "TASK-01",
    Project: "PHP Website",
    Status: "Open",
    Priority: "Medium",
    TaskDate: "22/03/2018",
    DueDate: "02/01/2019",
    Attachments: [
      {
    name: "Task01.pdf",
    size: "2 MB",
    url: "#",
  },
    ],
  },
  {
    id: 2,
    TaskNumber: "TASK-02",
    Project: "React Dashboard",
    Status: "In Progress",
    Priority: "High",
    TaskDate: "15/04/2018",
    DueDate: "20/05/2018",
    Attachments: [
      {
    name: "Task20.pdf",
    size: "2 MB",
    url: "#",
  },
    ],
  },
  {
    id: 3,
    TaskNumber: "TASK-03",
    Project: "Mobile App",
    Status: "Completed",
    Priority: "Low",
    TaskDate: "10/01/2018",
    DueDate: "18/02/2018",
    Attachments: [],
  },
];

/* ===================== BADGES ===================== */
const badge = (value, type) => {
  const styles = {
    status: {
      Open: "bg-red-100 text-red-700",
      "In Progress": "bg-yellow-100 text-yellow-700",
      Completed: "bg-green-100 text-green-700",
    },
    priority: {
      High: "bg-red-100 text-red-700",
      Medium: "bg-orange-100 text-orange-700",
      Low: "bg-green-100 text-green-700",
    },
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${
        styles[type][value]
      }`}
    >
      {value}
    </span>
  );
};

const getStatusIcon = (status) => {
  if (status === "Open")
    return <AlertCircle size={16} className="text-red-500" />;
  if (status === "In Progress")
    return <Clock size={16} className="text-yellow-500" />;
  return <CheckCircle2 size={16} className="text-green-500" />;
};

/* ===================== MAIN COMPONENT ===================== */
const AllTasks = () => {
  const [tasks] = useState(initialTasks);
  const [search, setSearch] = useState("");

  const filteredTasks = tasks.filter((t) => {
    const s = search.toLowerCase();
    return (
      t.TaskNumber.toLowerCase().includes(s) ||
      t.Project.toLowerCase().includes(s) ||
      t.Status.toLowerCase().includes(s) ||
      t.Priority.toLowerCase().includes(s)
    );
  });

  const handleTaskClick = (task) => {
    alert(`Viewing details for ${task.TaskNumber}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md">
        {/* ================= HEADER ================= */}
        <div className="p-6 border-b border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-blue-600">
              Assigned Tasks
            </h1>
            <p className="text-sm text-gray-500">
              View tasks assigned by the Project Manager
            </p>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search tasks..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>


{/* ================= MOBILE VIEW ================= */}
<div className="md:hidden p-4 space-y-4">
  {filteredTasks.map((t) => (
    <div
      key={t.id}
      className="bg-white border rounded-xl p-4 shadow-sm space-y-3"
    >
      {/* Task Number */}
      <div className="text-indigo-600 font-bold text-sm">
        {t.TaskNumber}
      </div>

      {/* Project */}
      <div className="text-lg font-semibold text-gray-900">
        {t.Project}
      </div>

      {/* Status + Priority */}
      <div className="flex flex-wrap gap-2">
        <div className="flex items-center gap-1">
          {getStatusIcon(t.Status)}
          {badge(t.Status, "status")}
        </div>
        {badge(t.Priority, "priority")}
      </div>

      {/* Dates */}
      <div className="text-sm text-gray-600 space-y-1">
        <div>📅 Task: {t.TaskDate}</div>
        <div>⏳ Due: {t.DueDate}</div>
      </div>

      {/* Attachments */}
      <div>
        <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
          Attachments
        </p>
        {t.Attachments.length > 0 ? (
          <div className="flex flex-col gap-1">
            {t.Attachments.map((file, idx) => (
              <a
                key={idx}
                href={file.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-indigo-600 hover:underline"
              >
                {file.name}
              </a>
            ))}
          </div>
        ) : (
          <span className="text-xs text-gray-400">No files</span>
        )}
      </div>
    </div>
  ))}
</div>


        {/* ================= TABLE ================= */}
        {/* <div className="overflow-x-auto"> */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-left text-xs font-bold uppercase">
                  Task ID
                </th>
                <th className="p-4 text-left text-xs font-bold uppercase">
                  Project
                </th>
                <th className="p-4 text-left text-xs font-bold uppercase">
                  Status
                </th>
                <th className="p-4 text-left text-xs font-bold uppercase">
                  Priority
                </th>
                <th className="p-4 text-left text-xs font-bold uppercase">
                  Task Date
                </th>
                <th className="p-4 text-left text-xs font-bold uppercase">
                  Due Date
                </th>
                <th className="p-4 text-left text-xs font-bold uppercase">
                  Attachments
                </th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {filteredTasks.length === 0 && (
                <tr>
                  <td
                    colSpan="7"
                    className="p-6 text-center text-gray-500"
                  >
                    No tasks found
                  </td>
                </tr>
              )}

              {filteredTasks.map((t) => (
                <tr
                  key={t.id}
                  className="hover:bg-indigo-50 transition cursor-pointer"
                >
                  <td
                    className="p-4 font-semibold text-indigo-600 hover:underline"
                    onClick={() => handleTaskClick(t)}
                  >
                    {t.TaskNumber}
                  </td>

                  <td className="p-4 font-medium text-gray-900">
                    {t.Project}
                  </td>

                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(t.Status)}
                      {badge(t.Status, "status")}
                    </div>
                  </td>

                  <td className="p-4">
                    {badge(t.Priority, "priority")}
                  </td>

                  <td className="p-4 text-sm text-gray-600">
                    {t.TaskDate}
                  </td>

                  <td className="p-4 text-sm text-gray-600">
                    {t.DueDate}
                  </td>

<td className="p-4">
  {t.Attachments.length > 0 ? (
    <div className="flex flex-col gap-1">
      {t.Attachments.map((file, idx) => (
        <a
          key={idx}
          href={file.url}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-indigo-600 hover:underline"
        >
           {file.name}
        </a>
      ))}
    </div>
  ) : (
    <span className="text-xs text-gray-400">No files</span>
  )}
</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllTasks;

