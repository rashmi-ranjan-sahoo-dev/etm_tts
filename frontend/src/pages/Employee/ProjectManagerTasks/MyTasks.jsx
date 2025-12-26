import React, { useState } from "react";
import { Plus, Pencil, Trash2, Search } from "lucide-react";
import TaskModal from "./TaskModal";

const MyTasks = () => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [Tasks, setTasks] = useState([
    {
      id: 1,
      TaskNumber: "TASK-01",
      Employee_ID: "EMP20215",
      Project: "PHP Website",
      Client: "Cara Stevens",
      Status: "Open",
      Priority: "Medium",
      Type: "Development",
      TaskDate: "2018-03-22",
      Details: "wrong data received",
    },
    {
      id: 2,
      TaskNumber: "TASK-14",
      Employee_ID: "EMP20216",
      Project: "IOS App",
      Client: "Airi Satou",
      Status: "Open",
      Priority: "Medium",
      Type: "Bug",
      TaskDate: "2018-10-12",
      Details: "",
    },
  ]);

  const [openModal, setOpenModal] = useState(false);
  const [editData, setEditData] = useState(null);
  const [search, setSearch] = useState("");

  const handleAdd = () => {
    setEditData(null); // blank form
    setOpenModal(true);
  };

  const handleEdit = (task) => {
    setEditData(task); // pre-fill form
    setOpenModal(true);
  };

  const handleDelete = (id) => {
    setTasks(Tasks.filter((task) => task.id !== id));
  };

  const handleSave = (data) => {
    if (editData) {
      // Update existing
      setTasks(Tasks.map((t) => (t.id === data.id ? data : t)));
    } else {
      // Add new
      setTasks([...Tasks, { ...data, id: Date.now() }]);
    }
    setOpenModal(false);
  };

  const filteredTasks = Tasks.filter((t) => {
    if (!search.trim()) return true;
    const s = search.toLowerCase();
    return (
      t.TaskNumber.toLowerCase().includes(s) ||
      t.Employee_ID.toLowerCase().includes(s) ||
      t.Project.toLowerCase().includes(s) ||
      t.Client.toLowerCase().includes(s) ||
      t.Status.toLowerCase().includes(s) ||
      t.Priority.toLowerCase().includes(s) ||
      t.Type.toLowerCase().includes(s) ||
      t.TaskDate.toLowerCase().includes(s) ||
      t.Details.toLowerCase().includes(s)
    );
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* HEADER */}
      <div className="bg-blue-100 rounded-lg p-4 flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Project Manager Tasks
          </h2>
          <div className="relative">
            <Search
              className="absolute left-3 top-2.5 text-gray-500"
              size={18}
            />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-3 w-55 rounded-md border border-gray-300 bg-white
                   focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </div>
        </div>
        <button
          onClick={handleAdd}
          className="w-8 h-8 flex items-center justify-center rounded-full border border-green-800 text-green-800 hover:bg-green-50 border-2"
        >
          <Plus />
        </button>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto bg-white rounded-lg shadow max-h-[650px] overflow-y-auto">
        <table className="min-w-[1000px] w-full text-sm border-collapse border border-gray-200">
          <thead className="bg-gray-100 sticky top-0">
            <tr>
              <th className="p-3 border-b text-left w-10">
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
                />
              </th>
              <th className="p-3 border-b min-w-[120px] text-left">
                Task Number
              </th>
              <th className="p-3 border-b min-w-[140px] text-left">
                Employee_ID
              </th>
              <th className="p-3 border-b min-w-35 text-left">Project</th>
              <th className="p-3 border-b min-w-35 text-left">Client</th>
              <th className="p-3 border-b min-w-[100px] text-left">Status</th>
              <th className="p-3 border-b min-w-[100px] text-left">Priority</th>
              <th className="p-3 border-b min-w-[120px] text-left">
                Task Type
              </th>
              <th className="p-3 border-b min-w-[120px] text-left">
                Task Date
              </th>
              <th className="p-3 border-b min-w-[100px] text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map((t) => (
              <tr key={t.id} className="hover:bg-gray-50 border-b">
                <td className="p-2 border-b">
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
                <td className="p-3 border-b">{t.TaskNumber}</td>
                <td className="p-3 border-b">{t.Employee_ID}</td>
                <td className="p-3 border-b">{t.Project}</td>
                <td className="p-3 border-b">{t.Client}</td>
                <td className="p-3 border-b">{t.Status}</td>
                <td className="p-3 border-b">{t.Priority}</td>
                <td className="p-3 border-b">{t.Type}</td>
                <td className="p-3 border-b">{t.TaskDate}</td>
                <td className="p-3 flex gap-3">
                  <Pencil
                    onClick={() => handleEdit(t)}
                    className="text-blue-600 cursor-pointer"
                  />
                  <Trash2
                    onClick={() => handleDelete(t.id)}
                    className="text-red-600 cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MOBILE VIEW */}
      <div className="block md:hidden space-y-4 max-h-[400px] overflow-y-auto">
        {filteredTasks.map((t) => (
          <div key={t.id} className="bg-white rounded-lg shadow p-4 space-y-3">
            <div>
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
            </div>
            <div>Task Number: {t.TaskNumber}</div>
            <div>Project: {t.Project}</div>
            <div>Client: {t.Client}</div>
            <div>Status: {t.Status}</div>
            <div>Priority: {t.Priority}</div>
            <div>Type: {t.Type}</div>
            <div>Employee_ID: {t.Employee_ID}</div>
            <div>Task Date: {t.TaskDate}</div>
            <div>Details: {t.Details}</div>
            <div className="flex gap-4 pt-2 border-b">
              <Pencil
                onClick={() => handleEdit(t)}
                className="text-blue-600 cursor-pointer "
              />
              <Trash2
                onClick={() => handleDelete(t.id)}
                className="text-red-600 cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {openModal && (
        <TaskModal
          close={() => setOpenModal(false)}
          save={handleSave}
          editData={editData}
        />
      )}
    </div>
  );
};

export default MyTasks;
