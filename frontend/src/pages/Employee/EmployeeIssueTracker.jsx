// import { useState } from "react";
// import {
//   Plus, Search, CheckCircle2, Clock, AlertCircle, X, User,
//   Calendar, MessageSquare, Send, ArrowRight, TrendingUp
// } from "lucide-react";

// const IssueModal = ({ close, save }) => {
//   const [formData, setFormData] = useState({
//     title: "", category: "Bug", priority: "Medium", description: "", project: ""
//   });

//   const handleSubmit = () => {
//     if (!formData.title.trim()) return alert("Issue title is required");
//     if (!formData.description.trim()) return alert("Description is required");
//     if (!formData.project.trim()) return alert("Project is required");
//     save({
//       ...formData, id: Date.now(), status: "Open",
//       raisedDate: new Date().toISOString().split('T')[0], comments: []
//     });
//   };

//   return (
//     <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//         <div className="sticky top-0 bg-gradient-to-r from-rose-600 to-pink-600 p-6 rounded-t-2xl flex justify-between items-center">
//           <div>
//             <h3 className="text-2xl font-bold text-white">Raise New Issue</h3>
//             <p className="text-rose-100 text-sm mt-1">Report a problem or request</p>
//           </div>
//           <button onClick={close} className="text-white/80 hover:text-white">
//             <X className="w-6 h-6" />
//           </button>
//         </div>
//         <div className="p-6 space-y-4">
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">Issue Title *</label>
//             <input type="text" value={formData.title}
//               onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//               className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-rose-500 focus:outline-none"
//               placeholder="Brief description of the issue" />
//           </div>
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Category *</label>
//               <select value={formData.category}
//                 onChange={(e) => setFormData({ ...formData, category: e.target.value })}
//                 className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-rose-500 focus:outline-none">
//                 <option>Bug</option>
//                 <option>Feature Request</option>
//                 <option>Technical Issue</option>
//                 <option>Access Issue</option>
//                 <option>Performance</option>
//                 <option>Other</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Priority *</label>
//               <select value={formData.priority}
//                 onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
//                 className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-rose-500 focus:outline-none">
//                 <option>Low</option>
//                 <option>Medium</option>
//                 <option>High</option>
//                 <option>Critical</option>
//               </select>
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">Project *</label>
//             <select value={formData.project}
//               onChange={(e) => setFormData({ ...formData, project: e.target.value })}
//               className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-rose-500 focus:outline-none">
//               <option value="">Select Project</option>
//               <option>E-Commerce Platform</option>
//               <option>Mobile App Redesign</option>
//               <option>CRM System</option>
//               <option>Analytics Dashboard</option>
//             </select>
//           </div>
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">Description *</label>
//             <textarea rows="4" value={formData.description}
//               onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//               className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-rose-500 focus:outline-none resize-none"
//               placeholder="Detailed description of the issue..." />
//           </div>
//           <div className="flex gap-3 pt-4">
//             <button onClick={handleSubmit}
//               className="flex-1 bg-gradient-to-r from-rose-600 to-pink-600 text-white px-6 py-3 rounded-xl hover:from-rose-700 hover:to-pink-700 shadow-lg font-semibold">
//               Submit Issue
//             </button>
//             <button onClick={close}
//               className="px-6 py-3 rounded-xl border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold">
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const IssueDetailModal = ({ issue, close, onAddComment, currentUser }) => {
//   const [comment, setComment] = useState("");

//   const handleAddComment = () => {
//     if (!comment.trim()) return;
//     onAddComment(issue.id, {
//       user: currentUser, text: comment,
//       date: new Date().toISOString().split('T')[0],
//       time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
//     });
//     setComment("");
//   };

//   return (
//     <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//         <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-t-2xl flex items-center justify-between">
//           <div>
//             <h2 className="text-2xl font-bold text-white">Issue #{issue.id}</h2>
//             <p className="text-indigo-100 text-sm mt-1">{issue.project}</p>
//           </div>
//           <button onClick={close} className="text-white/80 hover:text-white">
//             <X className="w-6 h-6" />
//           </button>
//         </div>
//         <div className="p-6 space-y-5">
//           <div>
//             <h3 className="text-xl font-bold text-gray-900 mb-2">{issue.title}</h3>
//             <div className="flex flex-wrap gap-2">
//               <span className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
//                 issue.status === "Open" ? "bg-emerald-100 text-emerald-700" :
//                 issue.status === "In Progress" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"}`}>
//                 {issue.status}
//               </span>
//               <span className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
//                 issue.priority === "Critical" ? "bg-red-100 text-red-700" :
//                 issue.priority === "High" ? "bg-orange-100 text-orange-700" :
//                 issue.priority === "Medium" ? "bg-yellow-100 text-yellow-700" : "bg-blue-100 text-blue-700"}`}>
//                 {issue.priority}
//               </span>
//               <span className="px-3 py-1.5 rounded-lg text-xs font-bold bg-purple-100 text-purple-700">
//                 {issue.category}
//               </span>
//             </div>
//           </div>
//           <div className="grid grid-cols-3 gap-4">
//             <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-4 rounded-xl border-2 border-blue-200">
//               <label className="text-xs font-bold text-blue-700 uppercase mb-1 block">Raised By</label>
//               <div className="flex items-center gap-2">
//                 <User className="w-4 h-4 text-blue-600" />
//                 <span className="text-sm font-semibold text-gray-900">{issue.raisedBy}</span>
//               </div>
//             </div>
//             <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-4 rounded-xl border-2 border-green-200">
//               <label className="text-xs font-bold text-green-700 uppercase mb-1 block">Raised On</label>
//               <div className="flex items-center gap-2">
//                 <Calendar className="w-4 h-4 text-green-600" />
//                 <span className="text-sm font-semibold text-gray-900">{issue.raisedDate}</span>
//               </div>
//             </div>
//             <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 p-4 rounded-xl border-2 border-purple-200">
//               <label className="text-xs font-bold text-purple-700 uppercase mb-1 block">Assigned To</label>
//               <div className="flex items-center gap-2">
//                 <User className="w-4 h-4 text-purple-600" />
//                 <span className="text-sm font-semibold text-gray-900">{issue.assignedTo || "Unassigned"}</span>
//               </div>
//             </div>
//           </div>
//           <div className="bg-gray-50 p-5 rounded-2xl border-2 border-gray-200">
//             <label className="text-sm font-bold text-gray-700 uppercase mb-2 block">Description</label>
//             <p className="text-gray-800 leading-relaxed">{issue.description}</p>
//           </div>
//           <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-5 rounded-2xl border-2 border-indigo-200">
//             <div className="flex items-center gap-2 mb-4">
//               <MessageSquare className="w-5 h-5 text-indigo-600" />
//               <label className="text-sm font-bold text-indigo-900 uppercase">
//                 Comments ({issue.comments?.length || 0})
//               </label>
//             </div>
//             <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
//               {issue.comments?.map((c, idx) => (
//                 <div key={idx} className="bg-white p-4 rounded-xl border border-indigo-200">
//                   <div className="flex items-center justify-between mb-2">
//                     <div className="flex items-center gap-2">
//                       <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
//                         <span className="text-white text-xs font-bold">{c.user[0]}</span>
//                       </div>
//                       <span className="font-semibold text-gray-900 text-sm">{c.user}</span>
//                     </div>
//                     <span className="text-xs text-gray-500">{c.date} {c.time}</span>
//                   </div>
//                   <p className="text-sm text-gray-700">{c.text}</p>
//                 </div>
//               ))}
//             </div>
//             <div className="flex gap-2">
//               <input type="text" value={comment} onChange={(e) => setComment(e.target.value)}
//                 placeholder="Add a comment..."
//                 className="flex-1 px-4 py-3 rounded-xl border-2 border-indigo-200 focus:border-indigo-500 focus:outline-none"
//                 onKeyPress={(e) => e.key === 'Enter' && handleAddComment()} />
//               <button onClick={handleAddComment}
//                 className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 flex items-center gap-2">
//                 <Send className="w-4 h-4" /> Send
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-end gap-3 p-6 border-t-2 border-gray-200 bg-gray-50 rounded-b-2xl">
//           <button onClick={close}
//             className="px-6 py-2 text-gray-700 bg-white border-2 border-gray-300 rounded-xl hover:bg-gray-50 font-semibold">
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function EmployeeIssueTracker() {
//   const currentUser = "John Smith (EMP2015)";
//   const [issues, setIssues] = useState([
//     { id: 1001, title: "Login page not loading on mobile devices", category: "Bug", priority: "High",
//       status: "In Progress", project: "E-Commerce Platform", raisedBy: "John Smith (EMP2015)",
//       raisedDate: "2024-03-20", assignedTo: "Tech Lead",
//       description: "The login page fails to load on iOS Safari and Chrome mobile browsers.",
//       comments: [
//         { user: "Tech Lead", text: "Looking into this issue.", date: "2024-03-20", time: "10:30 AM" }
//       ]
//     },
//     { id: 1002, title: "Payment gateway timeout during checkout", category: "Bug", priority: "Critical",
//       status: "Open", project: "E-Commerce Platform", raisedBy: "John Smith (EMP2015)",
//       raisedDate: "2024-03-22", assignedTo: "Backend Team",
//       description: "Users experiencing 30-second timeout when processing payments.", comments: []
//     },
//     { id: 1003, title: "Add dark mode to user dashboard", category: "Feature Request", priority: "Low",
//       status: "Open", project: "Mobile App Redesign", raisedBy: "Sarah Johnson (EMP2020)",
//       raisedDate: "2024-03-18", assignedTo: "John Smith (EMP2015)",
//       description: "Users requested dark mode option for the dashboard.", comments: []
//     },
//     { id: 1004, title: "Database connection errors in production", category: "Technical Issue", priority: "Critical",
//       status: "Resolved", project: "CRM System", raisedBy: "Mike Chen (EMP2018)",
//       raisedDate: "2024-03-15", assignedTo: "John Smith (EMP2015)",
//       description: "Production database showing intermittent connection failures.", comments: []
//     }
//   ]);

//   const [filter, setFilter] = useState("All");
//   const [search, setSearch] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [viewIssue, setViewIssue] = useState(null);

//   const handleAddIssue = (data) => {
//     setIssues([{ ...data, raisedBy: currentUser }, ...issues]);
//     setShowModal(false);
//   };

//   const handleAddComment = (issueId, comment) => {
//     setIssues(issues.map(issue =>
//       issue.id === issueId ? { ...issue, comments: [...(issue.comments || []), comment] } : issue
//     ));
//   };

//   const filteredIssues = issues.filter(issue => {
//     const matchesSearch = search.trim() === "" ||
//       issue.title.toLowerCase().includes(search.toLowerCase()) ||
//       issue.category.toLowerCase().includes(search.toLowerCase()) ||
//       issue.project.toLowerCase().includes(search.toLowerCase());
//     if (filter === "All") return matchesSearch;
//     if (filter === "Raised by Me") return matchesSearch && issue.raisedBy === currentUser;
//     if (filter === "Assigned to Me") return matchesSearch && issue.assignedTo?.includes("EMP2015");
//     if (filter === "Pending") return matchesSearch && issue.status !== "Resolved";
//     if (filter === "Resolved") return matchesSearch && issue.status === "Resolved";
//     return matchesSearch;
//   });

//   const stats = {
//     total: issues.length,
//     raisedByMe: issues.filter(i => i.raisedBy === currentUser).length,
//     assignedToMe: issues.filter(i => i.assignedTo?.includes("EMP2015")).length,
//     pending: issues.filter(i => i.status !== "Resolved").length,
//     resolved: issues.filter(i => i.status === "Resolved").length
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 md:p-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-indigo-100">
//           <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
//             <div className="flex items-center gap-4">
//               <div className="w-14 h-14 bg-gradient-to-br from-rose-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
//                 <AlertCircle className="w-7 h-7 text-white" />
//               </div>
//               <div>
//                 <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
//                   Issue Tracker
//                 </h2>
//                 <p className="text-sm text-gray-500 mt-1">Track and manage project issues</p>
//               </div>
//             </div>
//             <button onClick={() => setShowModal(true)}
//               className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-xl hover:from-rose-700 hover:to-pink-700 shadow-lg">
//               <Plus className="w-5 h-5" /> Raise New Issue
//             </button>
//           </div>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
//           <div className="bg-white p-4 rounded-xl shadow-md border-2 border-indigo-200">
//             <div className="flex items-center justify-between mb-2">
//               <span className="text-xs font-bold text-gray-600 uppercase">Total Issues</span>
//               <AlertCircle className="w-5 h-5 text-indigo-600" />
//             </div>
//             <p className="text-3xl font-bold text-indigo-600">{stats.total}</p>
//           </div>
//           <div className="bg-white p-4 rounded-xl shadow-md border-2 border-blue-200">
//             <div className="flex items-center justify-between mb-2">
//               <span className="text-xs font-bold text-gray-600 uppercase">Raised by Me</span>
//               <TrendingUp className="w-5 h-5 text-blue-600" />
//             </div>
//             <p className="text-3xl font-bold text-blue-600">{stats.raisedByMe}</p>
//           </div>
//           <div className="bg-white p-4 rounded-xl shadow-md border-2 border-purple-200">
//             <div className="flex items-center justify-between mb-2">
//               <span className="text-xs font-bold text-gray-600 uppercase">Assigned to Me</span>
//               <User className="w-5 h-5 text-purple-600" />
//             </div>
//             <p className="text-3xl font-bold text-purple-600">{stats.assignedToMe}</p>
//           </div>
//           <div className="bg-white p-4 rounded-xl shadow-md border-2 border-orange-200">
//             <div className="flex items-center justify-between mb-2">
//               <span className="text-xs font-bold text-gray-600 uppercase">Pending</span>
//               <Clock className="w-5 h-5 text-orange-600" />
//             </div>
//             <p className="text-3xl font-bold text-orange-600">{stats.pending}</p>
//           </div>
//           <div className="bg-white p-4 rounded-xl shadow-md border-2 border-green-200">
//             <div className="flex items-center justify-between mb-2">
//               <span className="text-xs font-bold text-gray-600 uppercase">Resolved</span>
//               <CheckCircle2 className="w-5 h-5 text-green-600" />
//             </div>
//             <p className="text-3xl font-bold text-green-600">{stats.resolved}</p>
//           </div>
//         </div>

//         <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-indigo-100">
//           <div className="flex flex-col lg:flex-row gap-4">
//             <div className="flex-1 relative">
//               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
//               <input type="text" placeholder="Search issues..." value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none" />
//             </div>
//             <div className="flex gap-2 flex-wrap">
//               {["All", "Raised by Me", "Assigned to Me", "Pending", "Resolved"].map((f) => (
//                 <button key={f} onClick={() => setFilter(f)}
//                   className={`px-4 py-2 rounded-xl font-medium text-sm ${
//                     filter === f ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
//                   {f}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="space-y-4">
//           {filteredIssues.length === 0 ? (
//             <div className="bg-white rounded-2xl shadow-lg p-12 text-center border border-gray-200">
//               <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
//               <p className="text-gray-500 text-lg">No issues found</p>
//             </div>
//           ) : (
//             filteredIssues.map((issue) => (
//               <div key={issue.id}
//                 className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all cursor-pointer"
//                 onClick={() => setViewIssue(issue)}>
//                 <div className="flex items-start justify-between gap-4">
//                   <div className="flex-1">
//                     <div className="flex items-center gap-3 mb-2">
//                       <span className="text-sm font-bold text-gray-500">#{issue.id}</span>
//                       <h3 className="text-lg font-bold text-gray-900">{issue.title}</h3>
//                     </div>
//                     <p className="text-sm text-gray-600 mb-3 line-clamp-2">{issue.description}</p>
//                     <div className="flex flex-wrap gap-2 mb-3">
//                       <span className={`px-3 py-1 rounded-lg text-xs font-bold ${
//                         issue.status === "Open" ? "bg-emerald-100 text-emerald-700" :
//                         issue.status === "In Progress" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"}`}>
//                         {issue.status}
//                       </span>
//                       <span className={`px-3 py-1 rounded-lg text-xs font-bold ${
//                         issue.priority === "Critical" ? "bg-red-100 text-red-700" :
//                         issue.priority === "High" ? "bg-orange-100 text-orange-700" :
//                         issue.priority === "Medium" ? "bg-yellow-100 text-yellow-700" : "bg-blue-100 text-blue-700"}`}>
//                         {issue.priority}
//                       </span>
//                       <span className="px-3 py-1 rounded-lg text-xs font-bold bg-purple-100 text-purple-700">
//                         {issue.category}
//                       </span>
//                     </div>
//                     <div className="flex flex-wrap gap-4 text-xs text-gray-500">
//                       <div className="flex items-center gap-1">
//                         <User className="w-3 h-3" />
//                         <span>Raised by: {issue.raisedBy}</span>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <Calendar className="w-3 h-3" />
//                         <span>{issue.raisedDate}</span>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <MessageSquare className="w-3 h-3" />
//                         <span>{issue.comments?.length || 0} comments</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex flex-col items-end gap-2">
//                     <span className="text-xs font-medium text-gray-500">{issue.project}</span>
//                     <ArrowRight className="w-5 h-5 text-indigo-600" />
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>

//       {showModal && <IssueModal close={() => setShowModal(false)} save={handleAddIssue} />}
//       {viewIssue && <IssueDetailModal issue={viewIssue} close={() => setViewIssue(null)}
//         onAddComment={handleAddComment} currentUser={currentUser} />}
//     </div>
//   );
// }

//------------------------------------------------------------------------------------------------------------------------

import { useState } from "react";
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
} from "lucide-react";

// Modal to add a new issue
const IssueModal = ({ close, save }) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "Bug",
    priority: "Medium",
    description: "",
    project: "",
  });

  const handleSubmit = () => {
    if (!formData.title.trim()) return alert("Issue title is required");
    if (!formData.description.trim()) return alert("Description is required");
    if (!formData.project.trim()) return alert("Project is required");
    save({
      ...formData,
      id: Date.now(),
      status: "Open",
      raisedDate: new Date().toISOString().split("T")[0],
      comments: [],
    });
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-rose-600 to-pink-600 p-6 rounded-t-2xl flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold text-white">Raise New Issue</h3>
            <p className="text-rose-100 text-sm mt-1">
              Report a problem or request
            </p>
          </div>
          <button onClick={close} className="text-white/80 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6 space-y-4">
          {/* Issue Title */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Issue Title *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-rose-500 focus:outline-none"
              placeholder="Brief description of the issue"
            />
          </div>

          {/* Category & Priority */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Category *
              </label>
              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-rose-500 focus:outline-none"
              >
                <option>Bug</option>
                <option>Feature Request</option>
                <option>Technical Issue</option>
                <option>Access Issue</option>
                <option>Performance</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Priority *
              </label>
              <select
                value={formData.priority}
                onChange={(e) =>
                  setFormData({ ...formData, priority: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-rose-500 focus:outline-none"
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Critical</option>
              </select>
            </div>
          </div>

          {/* Project */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Project *
            </label>
            {/* <select
              value={formData.project}
              onChange={(e) =>
                setFormData({ ...formData, project: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-rose-500 focus:outline-none"
            >
              <option value="">Select Project</option>
              <option>E-Commerce Platform</option>
              <option>Mobile App Redesign</option>
              <option>CRM System</option>
              <option>Analytics Dashboard</option>
            </select> */}
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-rose-500 focus:outline-none"
              placeholder="Brief description of the issue"
            />

          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Description *
            </label>
            <textarea
              rows="4"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-rose-500 focus:outline-none resize-none"
              placeholder="Detailed description of the issue..."
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              onClick={handleSubmit}
              className="flex-1 bg-gradient-to-r from-rose-600 to-pink-600 text-white px-6 py-3 rounded-xl hover:from-rose-700 hover:to-pink-700 shadow-lg font-semibold"
            >
              Submit Issue
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

// Modal to view issue details & comments
const IssueDetailModal = ({ issue, close, onAddComment, currentUser }) => {
  const [comment, setComment] = useState("");

  const handleAddComment = () => {
    if (!comment.trim()) return;
    onAddComment(issue.id, {
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

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-t-2xl flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Issue #{issue.id}</h2>
            <p className="text-indigo-100 text-sm mt-1">{issue.project}</p>
          </div>
          <button onClick={close} className="text-white/80 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {issue.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              <span
                className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
                  issue.status === "Open"
                    ? "bg-emerald-100 text-emerald-700"
                    : issue.status === "In Progress"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {issue.status}
              </span>
              <span
                className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
                  issue.priority === "Critical"
                    ? "bg-red-100 text-red-700"
                    : issue.priority === "High"
                    ? "bg-orange-100 text-orange-700"
                    : issue.priority === "Medium"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {issue.priority}
              </span>
              <span className="px-3 py-1.5 rounded-lg text-xs font-bold bg-purple-100 text-purple-700">
                {issue.category}
              </span>
            </div>
          </div>

          {/* Raised By / Date / Assigned To */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-4 rounded-xl border-2 border-blue-200">
              <label className="text-xs font-bold text-blue-700 uppercase mb-1 block">
                Raised By
              </label>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-blue-600" />{" "}
                <span className="text-sm font-semibold text-gray-900">
                  {issue.raisedBy}
                </span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-4 rounded-xl border-2 border-green-200">
              <label className="text-xs font-bold text-green-700 uppercase mb-1 block">
                Raised On
              </label>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-green-600" />{" "}
                <span className="text-sm font-semibold text-gray-900">
                  {issue.raisedDate}
                </span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 p-4 rounded-xl border-2 border-purple-200">
              <label className="text-xs font-bold text-purple-700 uppercase mb-1 block">
                Assigned To
              </label>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-purple-600" />{" "}
                <span className="text-sm font-semibold text-gray-900">
                  {issue.assignedTo || "Unassigned"}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-gray-50 p-5 rounded-2xl border-2 border-gray-200">
            <label className="text-sm font-bold text-gray-700 uppercase mb-2 block">
              Description
            </label>
            <p className="text-gray-800 leading-relaxed">{issue.description}</p>
          </div>

          {/* Comments */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-5 rounded-2xl border-2 border-indigo-200">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-5 h-5 text-indigo-600" />
              <label className="text-sm font-bold text-indigo-900 uppercase">
                Comments ({issue.comments?.length || 0})
              </label>
            </div>

            <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
              {issue.comments?.map((c, idx) => (
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
export default function EmployeeIssueTracker() {
  const currentUser = "John Smith (EMP2015)";
  const [issues, setIssues] = useState([
    {
      id: 1001,
      title: "Login page not loading on mobile devices",
      category: "Bug",
      priority: "High",
      status: "In Progress",
      project: "E-Commerce Platform",
      raisedBy: "John Smith (EMP2015)",
      raisedDate: "2024-03-20",
      assignedTo: "Tech Lead",
      description:
        "The login page fails to load on iOS Safari and Chrome mobile browsers.",
      comments: [
        {
          user: "Tech Lead",
          text: "Looking into this issue.",
          date: "2024-03-20",
          time: "10:30 AM",
        },
      ],
    },
    {
      id: 1002,
      title: "Payment gateway timeout during checkout",
      category: "Bug",
      priority: "Critical",
      status: "Open",
      project: "E-Commerce Platform",
      raisedBy: "John Smith (EMP2015)",
      raisedDate: "2024-03-22",
      assignedTo: "Backend Team",
      description:
        "Users experiencing 30-second timeout when processing payments.",
      comments: [],
    },
  ]);

  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [viewIssue, setViewIssue] = useState(null);

  const handleAddIssue = (data) => {
    setIssues([{ ...data, raisedBy: currentUser }, ...issues]);
    setShowModal(false);
  };

  const handleAddComment = (issueId, comment) => {
    setIssues(
      issues.map((issue) =>
        issue.id === issueId
          ? { ...issue, comments: [...(issue.comments || []), comment] }
          : issue
      )
    );
  };

  // Filter issues
  const filteredIssues = issues.filter((issue) => {
    const matchesSearch =
      search.trim() === "" ||
      issue.title.toLowerCase().includes(search.toLowerCase()) ||
      issue.category.toLowerCase().includes(search.toLowerCase()) ||
      issue.project.toLowerCase().includes(search.toLowerCase());
    if (filter === "All") return matchesSearch;
    if (filter === "Raised by Me")
      return matchesSearch && issue.raisedBy === currentUser;
    if (filter === "Assigned to Me")
      return matchesSearch && issue.assignedTo?.includes("EMP2015");
    if (filter === "Pending")
      return matchesSearch && issue.status !== "Resolved";
    if (filter === "Resolved")
      return matchesSearch && issue.status === "Resolved";
    return matchesSearch;
  });

  const stats = {
    total: issues.length,
    raisedByMe: issues.filter((i) => i.raisedBy === currentUser).length,
    assignedToMe: issues.filter((i) => i.assignedTo?.includes("EMP2015"))
      .length,
    pending: issues.filter((i) => i.status !== "Resolved").length,
    resolved: issues.filter((i) => i.status === "Resolved").length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header & Raise Issue */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-indigo-100 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-rose-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
              <AlertCircle className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                Issue Tracker
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Track and manage project issues
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-xl hover:from-rose-700 hover:to-pink-700 shadow-lg"
          >
            <Plus className="w-5 h-5" /> Raise New Issue
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          <div className="bg-white p-4 rounded-xl shadow-md border-2 border-indigo-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-gray-600 uppercase">
                Total Issues
              </span>
              <AlertCircle className="w-5 h-5 text-indigo-600" />
            </div>
            <p className="text-3xl font-bold text-indigo-600">{stats.total}</p>
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
          <div className="bg-white p-4 rounded-xl shadow-md border-2 border-purple-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-gray-600 uppercase">
                Assigned to Me
              </span>
              <User className="w-5 h-5 text-purple-600" />
            </div>
            <p className="text-3xl font-bold text-purple-600">
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
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-indigo-100 flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search issues..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none"
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
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Issue List */}
        <div className="space-y-4">
          {filteredIssues.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center border border-gray-200">
              <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No issues found</p>
            </div>
          ) : (
            filteredIssues.map((issue) => (
              <div
                key={issue.id}
                className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all cursor-pointer"
                onClick={() => setViewIssue(issue)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold text-gray-500">
                        #{issue.id}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900">
                        {issue.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {issue.description}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-xs font-medium text-gray-500">
                      {issue.project}
                    </span>
                    <ArrowRight className="w-5 h-5 text-indigo-600" />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {showModal && (
        <IssueModal close={() => setShowModal(false)} save={handleAddIssue} />
      )}
      {viewIssue && (
        <IssueDetailModal
          issue={viewIssue}
          close={() => setViewIssue(null)}
          onAddComment={handleAddComment}
          currentUser={currentUser}
        />
      )}
    </div>
  );
}
