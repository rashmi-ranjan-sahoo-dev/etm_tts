// import React, { useState } from "react";
// import { Plus, Pencil, Trash2, Search } from "lucide-react";
// import TaskModal from "./TaskModal";

// const Tasks = () => {
//   const [selectedIds, setSelectedIds] = useState([]);
//   const [Tasks, setTasks] = useState([
//     {
//       id: 1,
//       TaskNumber: "TASK-01",
//       Employee_ID: "EMP20215",
//       Project: "PHP Website",
//       Client: "Cara Stevens",
//       Status: "Open",
//       Priority: "Medium",
//       Type: "Development",
//       TaskDate: "2018-03-22",
//       Details: "wrong data received",
//     },
//     {
//       id: 2,
//       TaskNumber: "TASK-14",
//       Employee_ID: "EMP20216",
//       Project: "IOS App",
//       Client: "Airi Satou",
//       Status: "Open",
//       Priority: "Medium",
//       Type: "Bug",
//       TaskDate: "2018-10-12",
//       Details: "",
//     },
//   ]);

//   const [openModal, setOpenModal] = useState(false);
//   const [editData, setEditData] = useState(null);
//   const [search, setSearch] = useState("");

//   const handleAdd = () => {
//     setEditData(null); // blank form
//     setOpenModal(true);
//   };

//   const handleEdit = (task) => {
//     setEditData(task); // pre-fill form
//     setOpenModal(true);
//   };

//   const handleDelete = (id) => {
//     setTasks(Tasks.filter((task) => task.id !== id));
//   };

//   const handleSave = (data) => {
//     if (editData) {
//       // Update existing
//       setTasks(Tasks.map((t) => (t.id === data.id ? data : t)));
//     } else {
//       // Add new
//       setTasks([...Tasks, { ...data, id: Date.now() }]);
//     }
//     setOpenModal(false);
//   };

//   const filteredTasks = Tasks.filter((t) => {
//     if (!search.trim()) return true;
//     const s = search.toLowerCase();
//     return (
//       t.TaskNumber.toLowerCase().includes(s) ||
//       t.Employee_ID.toLowerCase().includes(s) ||
//       t.Project.toLowerCase().includes(s) ||
//       t.Client.toLowerCase().includes(s) ||
//       t.Status.toLowerCase().includes(s) ||
//       t.Priority.toLowerCase().includes(s) ||
//       t.Type.toLowerCase().includes(s) ||
//       t.TaskDate.toLowerCase().includes(s) ||
//       t.Details.toLowerCase().includes(s)
//     );
//   });

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* HEADER */}
//       <div className="bg-blue-100 rounded-lg p-4 flex items-center justify-between mb-4">
//         <div className="flex items-center gap-4">
//           <h2 className="text-lg font-semibold text-gray-800">
//             Project Manager Tasks
//           </h2>
//           <div className="relative">
//             <Search
//               className="absolute left-3 top-2.5 text-gray-500"
//               size={18}
//             />
//             <input
//               type="text"
//               placeholder="Search"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="pl-10 pr-4 py-3 w-55 rounded-md border border-gray-300 bg-white
//                    focus:outline-none focus:ring-1 focus:ring-blue-400"
//             />
//           </div>
//         </div>
//         <button
//           onClick={handleAdd}
//           className="w-8 h-8 flex items-center justify-center rounded-full border border-green-800 text-green-800 hover:bg-green-50 border-2"
//         >
//           <Plus />
//         </button>
//       </div>

//       {/* TABLE */}
//       <div className="overflow-x-auto bg-white rounded-lg shadow max-h-[650px] overflow-y-auto">
//         <table className="min-w-[1000px] w-full text-sm border-collapse border border-gray-200">
//           <thead className="bg-gray-100 sticky top-0">
//             <tr>
//               <th className="p-3 border-b text-left w-10">
//                 <input
//                   type="checkbox"
//                   checked={
//                     filteredTasks.length > 0 &&
//                     selectedIds.length === filteredTasks.length
//                   }
//                   onChange={(e) => {
//                     if (e.target.checked) {
//                       setSelectedIds(filteredTasks.map((row) => row.id));
//                     } else {
//                       setSelectedIds([]);
//                     }
//                   }}
//                 />
//               </th>
//               <th className="p-3 border-b min-w-[120px] text-left">
//                 Task Number
//               </th>
//               <th className="p-3 border-b min-w-[140px] text-left">
//                 Employee_ID
//               </th>
//               <th className="p-3 border-b min-w-35 text-left">Project</th>
//               <th className="p-3 border-b min-w-35 text-left">Client</th>
//               <th className="p-3 border-b min-w-[100px] text-left">Status</th>
//               <th className="p-3 border-b min-w-[100px] text-left">Priority</th>
//               <th className="p-3 border-b min-w-[120px] text-left">
//                 Task Type
//               </th>
//               <th className="p-3 border-b min-w-[120px] text-left">
//                 Task Date
//               </th>
//               <th className="p-3 border-b min-w-[100px] text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredTasks.map((t) => (
//               <tr key={t.id} className="hover:bg-gray-50 border-b">
//                 <td className="p-2 border-b">
//                   <input
//                     type="checkbox"
//                     checked={selectedIds.includes(t.id)}
//                     onChange={() => {
//                       if (selectedIds.includes(t.id)) {
//                         setSelectedIds(selectedIds.filter((id) => id !== t.id));
//                       } else {
//                         setSelectedIds([...selectedIds, t.id]);
//                       }
//                     }}
//                   />
//                 </td>
//                 <td className="p-3 border-b">{t.TaskNumber}</td>
//                 <td className="p-3 border-b">{t.Employee_ID}</td>
//                 <td className="p-3 border-b">{t.Project}</td>
//                 <td className="p-3 border-b">{t.Client}</td>
//                 <td className="p-3 border-b">{t.Status}</td>
//                 <td className="p-3 border-b">{t.Priority}</td>
//                 <td className="p-3 border-b">{t.Type}</td>
//                 <td className="p-3 border-b">{t.TaskDate}</td>
//                 <td className="p-3 flex gap-3">
//                   <Pencil
//                     onClick={() => handleEdit(t)}
//                     className="text-blue-600 cursor-pointer"
//                   />
//                   <Trash2
//                     onClick={() => handleDelete(t.id)}
//                     className="text-red-600 cursor-pointer"
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* MOBILE VIEW */}
//       <div className="block md:hidden space-y-4 max-h-[400px] overflow-y-auto">
//         {filteredTasks.map((t) => (
//           <div key={t.id} className="bg-white rounded-lg shadow p-4 space-y-3">
//             <div>
//               <input
//                 type="checkbox"
//                 checked={selectedIds.includes(t.id)}
//                 onChange={() => {
//                   if (selectedIds.includes(t.id)) {
//                     setSelectedIds(selectedIds.filter((id) => id !== t.id));
//                   } else {
//                     setSelectedIds([...selectedIds, t.id]);
//                   }
//                 }}
//               />
//             </div>
//             <div>Task Number: {t.TaskNumber}</div>
//             <div>Project: {t.Project}</div>
//             <div>Client: {t.Client}</div>
//             <div>Status: {t.Status}</div>
//             <div>Priority: {t.Priority}</div>
//             <div>Type: {t.Type}</div>
//             <div>Employee_ID: {t.Employee_ID}</div>
//             <div>Task Date: {t.TaskDate}</div>
//             <div>Details: {t.Details}</div>
//             <div className="flex gap-4 pt-2 border-b">
//               <Pencil
//                 onClick={() => handleEdit(t)}
//                 className="text-blue-600 cursor-pointer "
//               />
//               <Trash2
//                 onClick={() => handleDelete(t.id)}
//                 className="text-red-600 cursor-pointer"
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* MODAL */}
//       {openModal && (
//         <TaskModal
//           close={() => setOpenModal(false)}
//           save={handleSave}
//           editData={editData}
//         />
//       )}
//     </div>
//   );
// };

// export default Tasks;

import React, { useState } from "react";
import { Plus, Pencil, Trash2, Search, CheckCircle2, Clock, AlertCircle, Briefcase } from "lucide-react";

// TaskModal Component (embedded)
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
    }
  );

  const handleSubmit = () => {
    save(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
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
              <label className="block text-sm font-semibold text-gray-700 mb-2">Task Number</label>
              <input
                type="text"
                required
                value={formData.TaskNumber}
                onChange={(e) => setFormData({ ...formData, TaskNumber: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all"
                placeholder="e.g., TASK-01"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Employee ID</label>
              <input
                type="text"
                required
                value={formData.Employee_ID}
                onChange={(e) => setFormData({ ...formData, Employee_ID: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all"
                placeholder="e.g., EMP20215"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Project</label>
              <input
                type="text"
                required
                value={formData.Project}
                onChange={(e) => setFormData({ ...formData, Project: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all"
                placeholder="e.g., PHP Website"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Client</label>
              <input
                type="text"
                required
                value={formData.Client}
                onChange={(e) => setFormData({ ...formData, Client: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all"
                placeholder="e.g., Cara Stevens"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Status</label>
              <select
                value={formData.Status}
                onChange={(e) => setFormData({ ...formData, Status: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all"
              >
                <option>Open</option>
                <option>Closed</option>
                <option>In Progress</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Priority</label>
              <select
                value={formData.Priority}
                onChange={(e) => setFormData({ ...formData, Priority: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all"
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Task Type</label>
              <select
                value={formData.Type}
                onChange={(e) => setFormData({ ...formData, Type: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all"
              >
                <option>Development</option>
                <option>Bug</option>
                <option>Error</option>
                <option>Testing</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Task Date</label>
              <input
                type="date"
                required
                value={formData.TaskDate}
                onChange={(e) => setFormData({ ...formData, TaskDate: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all"
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Details</label>
              <textarea
                rows="3"
                value={formData.Details}
                onChange={(e) => setFormData({ ...formData, Details: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 resize-none focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all"
                placeholder="Additional task details..."
              />
            </div>
          </div>
          
          <div className="flex gap-3 pt-4 border-t">
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
const Tasks = () => {
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
      <span className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${map[text] || "bg-gray-100 text-gray-700 border-gray-200"}`}>
        {text}
      </span>
    );
  };

  const getStatusIcon = (status) => {
    if (status === "Open") return <Clock className="w-4 h-4 text-emerald-600" />;
    if (status === "Closed") return <CheckCircle2 className="w-4 h-4 text-slate-600" />;
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
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Project Manager Tasks
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {filteredTasks.length} {filteredTasks.length === 1 ? 'task' : 'tasks'} found
                  {selectedIds.length > 0 && ` • ${selectedIds.length} selected`}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="relative flex-1 lg:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
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
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
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
                      checked={filteredTasks.length > 0 && selectedIds.length === filteredTasks.length}
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
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider min-w-[120px]">Task Number</th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider min-w-[140px]">Employee ID</th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Project</th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Client</th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider min-w-[100px]">Status</th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider min-w-[100px]">Priority</th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider min-w-[120px]">Task Type</th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider min-w-[120px]">Task Date</th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider min-w-[100px]">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredTasks.map((t) => (
                  <tr key={t.id} className="hover:bg-indigo-50/50 transition-colors duration-150 cursor-pointer group">
                    <td className="p-4">
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
                        className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-2 focus:ring-indigo-500/50 cursor-pointer"
                      />
                    </td>
                    <td className="p-4">
                      <span className="font-semibold text-indigo-600 group-hover:text-indigo-700">{t.TaskNumber}</span>
                    </td>
                    <td className="p-4 text-gray-700">{t.Employee_ID}</td>
                    <td className="p-4">
                      <span className="font-medium text-gray-900">{t.Project}</span>
                    </td>
                    <td className="p-4 text-gray-700">{t.Client}</td>
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
            <div key={t.id} className="bg-white rounded-2xl shadow-lg shadow-indigo-100/50 p-5 space-y-3 border border-indigo-100/50 hover:shadow-xl hover:shadow-indigo-200/50 transition-all duration-300">
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
                    <span className="font-bold text-lg text-indigo-600">{t.TaskNumber}</span>
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
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide min-w-24">Project:</span>
                  <span className="text-sm font-semibold text-gray-900">{t.Project}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide min-w-24">Client:</span>
                  <span className="text-sm text-gray-700">{t.Client}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide min-w-24">Employee:</span>
                  <span className="text-sm text-gray-700">{t.Employee_ID}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide min-w-24">Type:</span>
                  <span className="px-3 py-1 rounded-lg text-xs font-medium bg-gray-100 text-gray-700">{t.Type}</span>
                </div>
                {t.Details && (
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide min-w-24">Details:</span>
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
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No tasks found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
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

export default Tasks;
