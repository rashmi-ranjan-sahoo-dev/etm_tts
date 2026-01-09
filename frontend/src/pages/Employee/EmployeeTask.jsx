import React, { useState } from "react";
import { Search, CheckCircle2, Clock, AlertCircle, Paperclip, Download, FileText, Image, File, X } from "lucide-react";

const EmployeeTask = () => {
  const [search, setSearch] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);
  const [viewingAttachment, setViewingAttachment] = useState(null);
  const [activeTab, setActiveTab] = useState("tasks");

  const Tasks = [
    {
      id: 1,
      TaskNumber: "TASK-01",
      ProjectManager: "Jasmin Sen",
      Project: "PHP Website",
      Status: "Open",
      Priority: "Medium",
      Type: "Development",
      TaskDate: "03/22/2018",
      Attachments: [
        { name: "requirements.pdf", size: "2.4 MB", type: "pdf", url: "#" },
        { name: "design-mockup.png", size: "1.8 MB", type: "image", url: "#" }
      ]
    },
    {
      id: 2,
      TaskNumber: "TASK-14",
      ProjectManager: "Richa Deshmukh",
      Project: "IOS App",
      Status: "Open",
      Priority: "Medium",
      Type: "Bug",
      TaskDate: "10/12/2018",
      Attachments: [
        { name: "bug-report.docx", size: "856 KB", type: "document", url: "#" }
      ]
    },
    {
      id: 3,
      TaskNumber: "TASK-25",
      ProjectManager: "Sunil Setti",
      Project: "ERP System",
      Status: "Closed",
      Priority: "High",
      Type: "Error",
      TaskDate: "01/14/2018",
      Attachments: [
        { name: "error-logs.txt", size: "124 KB", type: "document", url: "#" },
        { name: "screenshot.jpg", size: "3.2 MB", type: "image", url: "#" },
        { name: "fix-details.pdf", size: "1.1 MB", type: "pdf", url: "#" }
      ]
    },
  ];

  const Tickets = [
    {
      id: 1,
      TaskNumber: "TICKET-101",
      ProjectManager: "Amit Kumar",
      Project: "Customer Portal",
      Status: "Open",
      Priority: "High",
      Type: "Support",
      TaskDate: "01/05/2026",
      Attachments: [
        { name: "customer-complaint.pdf", size: "1.2 MB", type: "pdf", url: "#" },
        { name: "screenshot-issue.png", size: "2.1 MB", type: "image", url: "#" }
      ]
    },
    {
      id: 2,
      TaskNumber: "TICKET-102",
      ProjectManager: "Priya Sharma",
      Project: "Mobile Banking App",
      Status: "Closed",
      Priority: "Medium",
      Type: "Technical",
      TaskDate: "01/03/2026",
      Attachments: [
        { name: "resolution-report.docx", size: "945 KB", type: "document", url: "#" }
      ]
    },
    {
      id: 3,
      TaskNumber: "TICKET-103",
      ProjectManager: "Rahul Verma",
      Project: "E-commerce Platform",
      Status: "Open",
      Priority: "Low",
      Type: "Query",
      TaskDate: "12/28/2025",
      Attachments: [
        { name: "query-details.txt", size: "89 KB", type: "document", url: "#" },
        { name: "product-screenshot.jpg", size: "1.7 MB", type: "image", url: "#" },
        { name: "user-feedback.pdf", size: "780 KB", type: "pdf", url: "#" }
      ]
    },
  ];

  const currentData = activeTab === "tasks" ? Tasks : Tickets;

  const filteredTasks = currentData.filter((t) => {
    if (!search.trim()) return true;
    const s = search.toLowerCase();
    return (
      t.TaskNumber.toLowerCase().includes(s) ||
      t.ProjectManager.toLowerCase().includes(s) ||
      t.Project.toLowerCase().includes(s) ||
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

  const getFileIcon = (type) => {
    if (type === "pdf") return <FileText className="w-4 h-4 text-red-600" />;
    if (type === "image") return <Image className="w-4 h-4 text-blue-600" />;
    return <File className="w-4 h-4 text-gray-600" />;
  };

  const handleDownload = (attachment, e) => {
    e.stopPropagation();

    if (!attachment?.url || attachment.url === "#") {
      alert(`No downloadable file is configured for "${attachment.name}".`);
      return;
    }

    const link = document.createElement("a");
    link.href = attachment.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.download = attachment.name || "attachment";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const openAttachmentModal = (task, e) => {
    e.stopPropagation();
    setViewingAttachment(task);
  };

  const AttachmentModal = ({ task, onClose }) => {
    if (!task) return null;
    
    return (
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50" 
        onClick={onClose}
      >
        <div 
          className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden" 
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold">{task.TaskNumber} - Attachments</h3>
                <p className="text-blue-100 text-sm mt-1">{task.Project}</p>
              </div>
              <button 
                onClick={onClose} 
                className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
          
          <div className="p-6 overflow-y-auto max-h-[calc(80vh-120px)]">
            <div className="space-y-3">
              {task.Attachments.map((att, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-200"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                      {getFileIcon(att.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 truncate">{att.name}</p>
                      <p className="text-xs text-gray-500">{att.size}</p>
                    </div>
                  </div>
                  <button
                    onClick={(e) => handleDownload(att, e)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium text-sm"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="bg-white rounded-2xl shadow-lg shadow-blue-100/50 p-6 mb-6 border border-blue-100/50">
          <div className="flex flex-col gap-4">
            {/* Tab Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setActiveTab("tasks");
                  setSearch("");
                  setSelectedIds([]);
                }}
                className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                  activeTab === "tasks"
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Tasks
              </button>
              <button
                onClick={() => {
                  setActiveTab("tickets");
                  setSearch("");
                  setSelectedIds([]);
                }}
                className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                  activeTab === "tickets"
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Tickets
              </button>
            </div>

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">
                  Employee {activeTab === "tasks" ? "Tasks" : "Tickets"}
                </h2>
                <p className="text-sm text-gray-500">
                  {filteredTasks.length} {filteredTasks.length === 1 ? (activeTab === "tasks" ? 'task' : 'ticket') : (activeTab === "tasks" ? 'tasks' : 'tickets')} found
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
                  placeholder={`Search ${activeTab}, projects...`}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-12 pr-4 py-3 w-full rounded-xl border-2 border-gray-200 bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                />
              </div>
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
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    {activeTab === "tasks" ? "Task Number" : "Ticket Number"}
                  </th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Team Leader</th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Project</th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Attachments</th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Status</th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Priority</th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    {activeTab === "tasks" ? "Task Type" : "Ticket Type"}
                  </th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    {activeTab === "tasks" ? "Task Date" : "Ticket Date"}
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {filteredTasks.map((t) => (
                  <tr 
                    key={t.id} 
                    className="hover:bg-blue-50/50 transition-colors duration-150 group"
                  >
                    <td className="p-4">
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(t.id)}
                        onChange={(e) => {
                          e.stopPropagation();
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
                    <td className="p-4">
                      <button
                        onClick={(e) => openAttachmentModal(t, e)}
                        className="flex items-center gap-2 px-3 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition-colors font-medium text-xs"
                      >
                        <Paperclip className="w-4 h-4" />
                        {t.Attachments.length} {t.Attachments.length === 1 ? 'file' : 'files'}
                      </button>
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
                    onChange={(e) => {
                      e.stopPropagation();
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
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide min-w-24">Type:</span>
                  <span className="px-3 py-1 rounded-lg text-xs font-medium bg-gray-100 text-gray-700">
                    {t.Type}
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide min-w-24">Attachments:</span>
                  <button
                    onClick={(e) => openAttachmentModal(t, e)}
                    className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition-colors font-medium text-xs"
                  >
                    <Paperclip className="w-3 h-3" />
                    {t.Attachments.length} {t.Attachments.length === 1 ? 'file' : 'files'}
                  </button>
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
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No {activeTab === "tasks" ? "tasks" : "tickets"} found
            </h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      {/* Attachment Modal */}
      {viewingAttachment && (
        <AttachmentModal task={viewingAttachment} onClose={() => setViewingAttachment(null)} />
      )}
    </div>
  );
};

export default EmployeeTask;