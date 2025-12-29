// import React, { useState } from "react";
// import { Search } from "lucide-react";

// const EmployeeTask = () => {
//   const [search, setSearch] = useState("");
//   const [selectedIds, setSelectedIds] = useState([]);

//   const Tasks = [
//     {
//       id: 1,
//       TaskNumber: "TASK-01",
//       ProjectManager: "John Leo",
//       Project: "PHP Website",
//       Client: "Cara Stevens",
//       Status: "Open",
//       Priority: "Medium",
//       Type: "Development",
//       TaskDate: "03/22/2018",
//     },
//     {
//       id: 2,
//       TaskNumber: "TASK-14",
//       ProjectManager: "Richritis John",
//       Project: "IOS App",
//       Client: "Airi Satou",
//       Status: "Open",
//       Priority: "Medium",
//       Type: "Bug",
//       TaskDate: "10/12/2018",
//     },
//     {
//       id: 3,
//       TaskNumber: "TASK-25",
//       ProjectManager: "Sun Microsystem",
//       Project: "ERP System",
//       Client: "Angelica Ramos",
//       Status: "Closed",
//       Priority: "High",
//       Type: "Error",
//       TaskDate: "01/14/2018",
//     },
//   ];

//   const filteredTasks = Tasks.filter((t) => {
//     if (!search.trim()) return true;
//     const s = search.toLowerCase();
//     return (
//       t.TaskNumber.toLowerCase().includes(s) ||
//       t.ProjectManager.toLowerCase().includes(s) ||
//       t.Project.toLowerCase().includes(s) ||
//       t.Client.toLowerCase().includes(s) ||
//       t.Status.toLowerCase().includes(s) ||
//       t.Priority.toLowerCase().includes(s) ||
//       t.Type.toLowerCase().includes(s)
//     );
//   });

//   const badge = (text) => {
//     const map = {
//       Open: "bg-green-100 text-green-700",
//       Closed: "bg-orange-100 text-orange-700",
//       High: "bg-red-100 text-red-700",
//       Medium: "bg-purple-100 text-purple-700",
//       Low: "bg-green-100 text-green-700",
//     };
//     return (
//       <span
//         className={`px-3 py-1 rounded-full text-xs font-medium ${map[text]}`}
//       >
//         {text}
//       </span>
//     );
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* HEADER */}
//       <div className="bg-blue-100 rounded-lg p-4 mb-4">
//         <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
//           <h2 className="text-lg font-semibold text-gray-800">
//             Employee Tasks
//           </h2>

//           <div className="relative w-full md:w-64">
//             <Search
//               className="absolute left-3 top-2.5 text-gray-500"
//               size={18}
//             />
//             <input
//               type="text"
//               placeholder="Search"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 bg-white focus:outline-none"
//             />
//           </div>
//         </div>
//       </div>

//       {/* TABLE VIEW */}
//       <div className="overflow-x-auto bg-white rounded-lg shadow hidden md:block">
//         <table className="min-w-275 w-full text-sm">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="p-3 text-left">
//                 <input
//                   type="checkbox"
//                   checked={
//                     filteredTasks.length > 0 &&
//                     selectedIds.length === filteredTasks.length
//                   }
//                   onChange={(e) => {
//                     if (e.target.checked) {
//                       setSelectedIds(filteredTasks.map((t) => t.id));
//                     } else {
//                       setSelectedIds([]);
//                     }
//                   }}
//                 />
//               </th>
//               <th className="p-3 text-left">Task Number</th>
//               <th className="p-3 text-left">Project Manager</th>
//               <th className="p-3 text-left">Project</th>
//               <th className="p-3 text-left">Client</th>
//               <th className="p-3 text-left">Status</th>
//               <th className="p-3 text-left">Priority</th>
//               <th className="p-3 text-left">Task Type</th>
//               <th className="p-3 text-left">Task Date</th>
//             </tr>
//           </thead>

//           <tbody>
//             {filteredTasks.map((t) => (
//               <tr key={t.id} className="border-b hover:bg-gray-50">
//                 <td className="p-3">
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
//                 <td className="p-3">{t.TaskNumber}</td>
//                 <td className="p-3">{t.ProjectManager}</td>
//                 <td className="p-3">{t.Project}</td>
//                 <td className="p-3">{t.Client}</td>
//                 <td className="p-3">{badge(t.Status)}</td>
//                 <td className="p-3">{badge(t.Priority)}</td>
//                 <td className="p-3">{t.Type}</td>
//                 <td className="p-3">{t.TaskDate}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* MOBILE VIEW */}
//       <div className="block md:hidden space-y-4 mt-4">
//         {filteredTasks.map((t) => (
//           <div key={t.id} className="bg-white rounded-lg shadow p-4 space-y-2">
//             <div className="flex items-center gap-2">
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
//               <strong>{t.TaskNumber}</strong>
//             </div>

//             <div>
//               <strong>Project Manager:</strong> {t.ProjectManager}
//             </div>
//             <div>
//               <strong>Project:</strong> {t.Project}
//             </div>
//             <div>
//               <strong>Client:</strong> {t.Client}
//             </div>
//             <div>
//               <strong>Status:</strong> {badge(t.Status)}
//             </div>
//             <div>
//               <strong>Priority:</strong> {badge(t.Priority)}
//             </div>
//             <div>
//               <strong>Type:</strong> {t.Type}
//             </div>
//             <div>
//               <strong>Date:</strong> {t.TaskDate}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EmployeeTask;


import React, { useState } from "react";
import { Search, CheckCircle2, Clock, AlertCircle } from "lucide-react";

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

  const badge = (text, type) => {
    const statusMap = {
      Open: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
      Closed: "bg-slate-500/10 text-slate-600 border-slate-500/20",
    };
    
    const priorityMap = {
      High: "bg-rose-500/10 text-rose-600 border-rose-500/20",
      Medium: "bg-amber-500/10 text-amber-600 border-amber-500/20",
      Low: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    };

    const map = type === "status" ? statusMap : priorityMap;
    
    return (
      <span
        className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${map[text] || "bg-gray-100 text-gray-700 border-gray-200"}`}
      >
        {text}
      </span>
    );
  };

  const getStatusIcon = (status) => {
    if (status === "Open") return <Clock className="w-4 h-4 text-emerald-600" />;
    if (status === "Closed") return <CheckCircle2 className="w-4 h-4 text-slate-600" />;
    return <AlertCircle className="w-4 h-4 text-gray-600" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="bg-white rounded-2xl shadow-lg shadow-blue-100/50 p-6 mb-6 border border-blue-100/50">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">
                Employee Tasks
              </h2>
              <p className="text-sm text-gray-500">
                {filteredTasks.length} {filteredTasks.length === 1 ? 'task' : 'tasks'} found
                {selectedIds.length > 0 && ` • ${selectedIds.length} selected`}
              </p>
            </div>

            <div className="relative w-full md:w-80">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search tasks, projects, clients..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-12 pr-4 py-3 w-full rounded-xl border-2 border-gray-200 bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
              />
            </div>
          </div>
        </div>

        {/* TABLE VIEW */}
        <div className="overflow-hidden bg-white rounded-2xl shadow-lg shadow-blue-100/50 hidden md:block border border-blue-100/50">
          <div className="overflow-x-auto">
            <table className="min-w-full w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b-2 border-blue-100">
                  <th className="p-4 text-left">
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
                      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500/50 cursor-pointer"
                    />
                  </th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Task Number</th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Project Manager</th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Project</th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Client</th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Status</th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Priority</th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Task Type</th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Task Date</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {filteredTasks.map((t) => (
                  <tr 
                    key={t.id} 
                    className="hover:bg-blue-50/50 transition-colors duration-150 cursor-pointer group"
                  >
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
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500/50 cursor-pointer"
                      />
                    </td>
                    <td className="p-4">
                      <span className="font-semibold text-blue-600 group-hover:text-blue-700">
                        {t.TaskNumber}
                      </span>
                    </td>
                    <td className="p-4 text-gray-700">{t.ProjectManager}</td>
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* MOBILE VIEW */}
        <div className="block md:hidden space-y-4">
          {filteredTasks.map((t) => (
            <div 
              key={t.id} 
              className="bg-white rounded-2xl shadow-lg shadow-blue-100/50 p-5 space-y-3 border border-blue-100/50 hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-300"
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
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500/50 cursor-pointer mt-1"
                  />
                  <div>
                    <span className="font-bold text-lg text-blue-600">{t.TaskNumber}</span>
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
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide min-w-24">Manager:</span>
                  <span className="text-sm text-gray-700">{t.ProjectManager}</span>
                </div>
                
                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide min-w-24">Client:</span>
                  <span className="text-sm text-gray-700">{t.Client}</span>
                </div>
                
                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide min-w-24">Type:</span>
                  <span className="px-3 py-1 rounded-lg text-xs font-medium bg-gray-100 text-gray-700">
                    {t.Type}
                  </span>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                {badge(t.Status, "status")}
                {badge(t.Priority, "priority")}
              </div>
            </div>
          ))}
        </div>

        {filteredTasks.length === 0 && (
          <div className="bg-white rounded-2xl shadow-lg shadow-blue-100/50 p-12 text-center border border-blue-100/50">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No tasks found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeTask;