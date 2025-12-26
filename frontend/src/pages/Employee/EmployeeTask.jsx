import React, { useState } from "react";
import { Search } from "lucide-react";

const EmployeeTask = () => {
  const [search, setSearch] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);

  const Tasks = [
    {
      id: 1,
      TaskNumber: "TASK-01",
      ProjectManager: "John Leo",
      Project: "PHP Website",
      Client: "Cara Stevens",
      Status: "Open",
      Priority: "Medium",
      Type: "Development",
      TaskDate: "03/22/2018",
    },
    {
      id: 2,
      TaskNumber: "TASK-14",
      ProjectManager: "Richritis John",
      Project: "IOS App",
      Client: "Airi Satou",
      Status: "Open",
      Priority: "Medium",
      Type: "Bug",
      TaskDate: "10/12/2018",
    },
    {
      id: 3,
      TaskNumber: "TASK-25",
      ProjectManager: "Sun Microsystem",
      Project: "ERP System",
      Client: "Angelica Ramos",
      Status: "Closed",
      Priority: "High",
      Type: "Error",
      TaskDate: "01/14/2018",
    },
  ];

  const filteredTasks = Tasks.filter((t) => {
    if (!search.trim()) return true;
    const s = search.toLowerCase();
    return (
      t.TaskNumber.toLowerCase().includes(s) ||
      t.ProjectManager.toLowerCase().includes(s) ||
      t.Project.toLowerCase().includes(s) ||
      t.Client.toLowerCase().includes(s) ||
      t.Status.toLowerCase().includes(s) ||
      t.Priority.toLowerCase().includes(s) ||
      t.Type.toLowerCase().includes(s)
    );
  });

  const badge = (text) => {
    const map = {
      Open: "bg-green-100 text-green-700",
      Closed: "bg-orange-100 text-orange-700",
      High: "bg-red-100 text-red-700",
      Medium: "bg-purple-100 text-purple-700",
      Low: "bg-green-100 text-green-700",
    };
    return (
      <span
        className={`px-3 py-1 rounded-full text-xs font-medium ${map[text]}`}
      >
        {text}
      </span>
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* HEADER */}
      <div className="bg-blue-100 rounded-lg p-4 mb-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <h2 className="text-lg font-semibold text-gray-800">
            Employee Tasks
          </h2>

          <div className="relative w-full md:w-64">
            <Search
              className="absolute left-3 top-2.5 text-gray-500"
              size={18}
            />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 bg-white focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* TABLE VIEW */}
      <div className="overflow-x-auto bg-white rounded-lg shadow hidden md:block">
        <table className="min-w-275 w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">
                <input
                  type="checkbox"
                  checked={
                    filteredTasks.length > 0 &&
                    selectedIds.length === filteredTasks.length
                  }
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedIds(filteredTasks.map((t) => t.id));
                    } else {
                      setSelectedIds([]);
                    }
                  }}
                />
              </th>
              <th className="p-3 text-left">Task Number</th>
              <th className="p-3 text-left">Project Manager</th>
              <th className="p-3 text-left">Project</th>
              <th className="p-3 text-left">Client</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Priority</th>
              <th className="p-3 text-left">Task Type</th>
              <th className="p-3 text-left">Task Date</th>
            </tr>
          </thead>

          <tbody>
            {filteredTasks.map((t) => (
              <tr key={t.id} className="border-b hover:bg-gray-50">
                <td className="p-3">
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
                  />
                </td>
                <td className="p-3">{t.TaskNumber}</td>
                <td className="p-3">{t.ProjectManager}</td>
                <td className="p-3">{t.Project}</td>
                <td className="p-3">{t.Client}</td>
                <td className="p-3">{badge(t.Status)}</td>
                <td className="p-3">{badge(t.Priority)}</td>
                <td className="p-3">{t.Type}</td>
                <td className="p-3">{t.TaskDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MOBILE VIEW */}
      <div className="block md:hidden space-y-4 mt-4">
        {filteredTasks.map((t) => (
          <div key={t.id} className="bg-white rounded-lg shadow p-4 space-y-2">
            <div className="flex items-center gap-2">
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
              />
              <strong>{t.TaskNumber}</strong>
            </div>

            <div>
              <strong>Project Manager:</strong> {t.ProjectManager}
            </div>
            <div>
              <strong>Project:</strong> {t.Project}
            </div>
            <div>
              <strong>Client:</strong> {t.Client}
            </div>
            <div>
              <strong>Status:</strong> {badge(t.Status)}
            </div>
            <div>
              <strong>Priority:</strong> {badge(t.Priority)}
            </div>
            <div>
              <strong>Type:</strong> {t.Type}
            </div>
            <div>
              <strong>Date:</strong> {t.TaskDate}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeTask;
