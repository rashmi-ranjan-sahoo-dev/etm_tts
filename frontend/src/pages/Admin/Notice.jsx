// // import React, { useState } from 'react';
// // import { Calendar, X, Edit2, Trash2, Bell, ChevronDown } from 'lucide-react';

// // const Notice = () => {
// //   const [showCreateModal, setShowCreateModal] = useState(false);
// //   const [notices, setNotices] = useState([
// //     {
// //       id: 1,
// //       title: 'Holiday Info',
// //       description: 'Office will remain closed on Republic Day (26th January 2026). Regular operations will resume on 27th January.',
// //       audience: 'All Employees',
// //       publishDate: '2026-01-10',
// //       status: 'Published'
// //     },
// //     {
// //       id: 2,
// //       title: 'Server Maintenance',
// //       description: 'Scheduled server maintenance on 12th January from 2 AM to 6 AM. Services may be temporarily unavailable.',
// //       audience: 'IT Dept',
// //       publishDate: '2026-01-12',
// //       status: 'Draft'
// //     },
// //     {
// //       id: 3,
// //       title: 'Policy Update',
// //       description: 'New remote work policy will be effective from 15th January 2026. Please review the updated guidelines.',
// //       audience: 'HR Dept',
// //       publishDate: '2026-01-15',
// //       status: 'Scheduled'
// //     }
// //   ]);

// //   const [formData, setFormData] = useState({
// //     title: '',
// //     description: '',
// //     audience: 'All Employees',
// //     publishDate: '',
// //     status: 'Published'
// //   });

// //   const [editingId, setEditingId] = useState(null);
// //   const [view, setView] = useState('admin'); // 'admin' or 'user'

// //   const audiences = ['All Employees', 'IT Dept', 'HR Dept', 'Sales Dept', 'Management'];

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData(prev => ({ ...prev, [name]: value }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     if (editingId) {
// //       setNotices(prev => prev.map(notice => 
// //         notice.id === editingId ? { ...formData, id: editingId } : notice
// //       ));
// //       setEditingId(null);
// //     } else {
// //       const newNotice = {
// //         ...formData,
// //         id: Date.now()
// //       };
// //       setNotices(prev => [...prev, newNotice]);
// //     }

// //     setFormData({
// //       title: '',
// //       description: '',
// //       audience: 'All Employees',
// //       publishDate: '',
// //       status: 'Published'
// //     });
// //     setShowCreateModal(false);
// //   };

// //   const handleEdit = (notice) => {
// //     setFormData(notice);
// //     setEditingId(notice.id);
// //     setShowCreateModal(true);
// //   };

// //   const handleDelete = (id) => {
// //     if (window.confirm('Are you sure you want to delete this notice?')) {
// //       setNotices(prev => prev.filter(notice => notice.id !== id));
// //     }
// //   };

// //   const handleCancel = () => {
// //     setFormData({
// //       title: '',
// //       description: '',
// //       audience: 'All Employees',
// //       publishDate: '',
// //       status: 'Published'
// //     });
// //     setEditingId(null);
// //     setShowCreateModal(false);
// //   };

// //   const getStatusColor = (status) => {
// //     switch(status) {
// //       case 'Published': return 'bg-green-100 text-green-800';
// //       case 'Draft': return 'bg-gray-100 text-gray-800';
// //       case 'Scheduled': return 'bg-blue-100 text-blue-800';
// //       default: return 'bg-gray-100 text-gray-800';
// //     }
// //   };

// //   const formatDate = (dateString) => {
// //     const date = new Date(dateString);
// //     return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50 p-8">
// //       {/* View Toggle */}
// //       <div className="max-w-7xl mx-auto mb-6">
// //         <div className="flex gap-2 bg-white p-1 rounded-lg shadow-sm w-fit">
// //           <button
// //             onClick={() => setView('admin')}
// //             className={`px-4 py-2 rounded-md font-medium transition-colors ${
// //               view === 'admin' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
// //             }`}
// //           >
// //             Admin View
// //           </button>
// //           <button
// //             onClick={() => setView('user')}
// //             className={`px-4 py-2 rounded-md font-medium transition-colors ${
// //               view === 'user' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
// //             }`}
// //           >
// //             User View
// //           </button>
// //         </div>
// //       </div>

// //       {/* Admin View */}
// //       {view === 'admin' && (
// //         <div className="max-w-7xl mx-auto">
// //           {/* Header */}
// //           <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
// //             <div className="flex justify-between items-center">
// //               <h1 className="text-2xl font-bold text-gray-900">Notices</h1>
// //               <button
// //                 onClick={() => setShowCreateModal(true)}
// //                 className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
// //               >
// //                 <span className="text-xl">+</span>
// //                 Create Notice
// //               </button>
// //             </div>
// //           </div>

// //           {/* Notices Table */}
// //           <div className="bg-white rounded-lg shadow-sm overflow-hidden">
// //             <table className="w-full">
// //               <thead className="bg-gray-50 border-b">
// //                 <tr>
// //                   <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Title</th>
// //                   <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Audience</th>
// //                   <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Publish Date</th>
// //                   <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Status</th>
// //                   <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Actions</th>
// //                 </tr>
// //               </thead>
// //               <tbody className="divide-y divide-gray-200">
// //                 {notices.map(notice => (
// //                   <tr key={notice.id} className="hover:bg-gray-50">
// //                     <td className="px-6 py-4 text-sm text-gray-900">{notice.title}</td>
// //                     <td className="px-6 py-4 text-sm text-gray-600">{notice.audience}</td>
// //                     <td className="px-6 py-4 text-sm text-gray-600">{formatDate(notice.publishDate)}</td>
// //                     <td className="px-6 py-4">
// //                       <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(notice.status)}`}>
// //                         {notice.status}
// //                       </span>
// //                     </td>
// //                     <td className="px-6 py-4">
// //                       <div className="flex gap-3">
// //                         <button
// //                           onClick={() => handleEdit(notice)}
// //                           className="text-blue-600 hover:text-blue-800"
// //                           title="Edit"
// //                         >
// //                           <Edit2 size={18} />
// //                         </button>
// //                         <button
// //                           onClick={() => handleDelete(notice.id)}
// //                           className="text-red-600 hover:text-red-800"
// //                           title="Delete"
// //                         >
// //                           <Trash2 size={18} />
// //                         </button>
// //                       </div>
// //                     </td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //         </div>
// //       )}

// //       {/* User View */}
// //       {view === 'user' && (
// //         <div className="max-w-4xl mx-auto">
// //           <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
// //             <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
// //               <Bell className="text-blue-600" />
// //               Your Notices
// //             </h1>
// //           </div>

// //           <div className="grid gap-4">
// //             {notices
// //               .filter(notice => notice.status === 'Published')
// //               .map(notice => (
// //                 <div key={notice.id} className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-blue-600">
// //                   <div className="flex items-start gap-4">
// //                     <div className="bg-blue-100 p-3 rounded-lg">
// //                       <Bell className="text-blue-600" size={24} />
// //                     </div>
// //                     <div className="flex-1">
// //                       <h3 className="text-lg font-semibold text-gray-900 mb-1">{notice.title}</h3>
// //                       <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
// //                         <span>{notice.audience}</span>
// //                         <span>•</span>
// //                         <span>{formatDate(notice.publishDate)}</span>
// //                       </div>
// //                       <p className="text-gray-700 mb-3">
// //                         {notice.description.length > 100 
// //                           ? `${notice.description.substring(0, 100)}...` 
// //                           : notice.description}
// //                       </p>
// //                       {notice.description.length > 100 && (
// //                         <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
// //                           Read More →
// //                         </button>
// //                       )}
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}
// //           </div>
// //         </div>
// //       )}

// //       {/* Create/Edit Modal */}
// //       {showCreateModal && (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
// //           <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
// //             <div className="p-6">
// //               <div className="flex justify-between items-center mb-6">
// //                 <h2 className="text-xl font-bold text-gray-900">
// //                   {editingId ? 'Edit Notice' : 'Create Notice'}
// //                 </h2>
// //                 <button
// //                   onClick={handleCancel}
// //                   className="text-gray-400 hover:text-gray-600"
// //                 >
// //                   <X size={24} />
// //                 </button>
// //               </div>

// //               <form onSubmit={handleSubmit}>
// //                 {/* Notice Title */}
// //                 <div className="mb-4">
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">
// //                     Notice Title <span className="text-red-500">*</span>
// //                   </label>
// //                   <input
// //                     type="text"
// //                     name="title"
// //                     value={formData.title}
// //                     onChange={handleInputChange}
// //                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
// //                     placeholder="Holiday Announcement"
// //                     required
// //                   />
// //                 </div>

// //                 {/* Notice Description */}
// //                 <div className="mb-4">
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">
// //                     Notice Description <span className="text-red-500">*</span>
// //                   </label>
// //                   <textarea
// //                     name="description"
// //                     value={formData.description}
// //                     onChange={handleInputChange}
// //                     rows="6"
// //                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
// //                     placeholder="Office will remain closed on..."
// //                     required
// //                   />
// //                 </div>

// //                 {/* Target Audience */}
// //                 <div className="mb-4">
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">
// //                     Target Audience <span className="text-red-500">*</span>
// //                   </label>
// //                   <div className="relative">
// //                     <select
// //                       name="audience"
// //                       value={formData.audience}
// //                       onChange={handleInputChange}
// //                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white"
// //                       required
// //                     >
// //                       {audiences.map(audience => (
// //                         <option key={audience} value={audience}>{audience}</option>
// //                       ))}
// //                     </select>
// //                     <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
// //                   </div>
// //                 </div>

// //                 {/* Publish Date */}
// //                 <div className="mb-6">
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">
// //                     Publish Date <span className="text-red-500">*</span>
// //                   </label>
// //                   <div className="relative">
// //                     <input
// //                       type="date"
// //                       name="publishDate"
// //                       value={formData.publishDate}
// //                       onChange={handleInputChange}
// //                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
// //                       required
// //                     />
// //                     <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
// //                   </div>
// //                 </div>

// //                 {/* Status */}
// //                 <div className="mb-6">
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">
// //                     Status <span className="text-red-500">*</span>
// //                   </label>
// //                   <div className="relative">
// //                     <select
// //                       name="status"
// //                       value={formData.status}
// //                       onChange={handleInputChange}
// //                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white"
// //                       required
// //                     >
// //                       <option value="Published">Published</option>
// //                       <option value="Draft">Draft</option>
// //                       <option value="Scheduled">Scheduled</option>
// //                     </select>
// //                     <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
// //                   </div>
// //                 </div>

// //                 {/* Actions */}
// //                 <div className="flex justify-end gap-3 pt-4 border-t">
// //                   <button
// //                     type="button"
// //                     onClick={handleCancel}
// //                     className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
// //                   >
// //                     Cancel
// //                   </button>
// //                   <button
// //                     type="submit"
// //                     className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
// //                   >
// //                     {editingId ? 'Update Notice' : 'Publish Notice'}
// //                   </button>
// //                 </div>
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Notice;
// //--------------------------------------------------------------------------------------------------------

// import React, { useState } from 'react';
// import { Calendar, X, Edit2, Trash2, Bell, ChevronDown, Search, Filter, Eye, Clock, CheckCircle, FileText } from 'lucide-react';

// const Notice = () => {
//   const [showCreateModal, setShowCreateModal] = useState(false);
//   const [showDetailsModal, setShowDetailsModal] = useState(false);
//   const [selectedNotice, setSelectedNotice] = useState(null);
//   const [notices, setNotices] = useState([
//     {
//       id: 1,
//       title: 'Holiday Info',
//       description: 'Office will remain closed on Republic Day (26th January 2026). Regular operations will resume on 27th January. Please plan your work accordingly and complete pending tasks before the holiday.',
//       audience: 'All Employees',
//       publishDate: '2026-01-10',
//       status: 'Published'
//     },
//     {
//       id: 2,
//       title: 'Server Maintenance',
//       description: 'Scheduled server maintenance on 12th January from 2 AM to 6 AM. Services may be temporarily unavailable during this period. Please save your work frequently and avoid scheduling critical tasks during maintenance window.',
//       audience: 'IT Dept',
//       publishDate: '2026-01-12',
//       status: 'Draft'
//     },
//     {
//       id: 3,
//       title: 'Policy Update',
//       description: 'New remote work policy will be effective from 15th January 2026. Please review the updated guidelines in the employee handbook. Key changes include flexible working hours and hybrid work options.',
//       audience: 'HR Dept',
//       publishDate: '2026-01-15',
//       status: 'Scheduled'
//     },
//     {
//       id: 4,
//       title: 'Team Building Event',
//       description: 'Annual team building event scheduled for 20th January 2026 at Beach Resort. All employees are requested to confirm their attendance by 18th January. Transportation will be provided.',
//       audience: 'All Employees',
//       publishDate: '2026-01-08',
//       status: 'Published'
//     }
//   ]);

//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     audience: 'All Employees',
//     publishDate: '',
//     status: 'Published'
//   });

//   const [editingId, setEditingId] = useState(null);
//   const [view, setView] = useState('admin');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterStatus, setFilterStatus] = useState('All');
//   const [filterAudience, setFilterAudience] = useState('All');

//   const audiences = ['All Employees', 'IT Dept', 'HR Dept', 'Sales Dept', 'Management'];

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (editingId) {
//       setNotices(prev => prev.map(notice => 
//         notice.id === editingId ? { ...formData, id: editingId } : notice
//       ));
//       setEditingId(null);
//     } else {
//       const newNotice = {
//         ...formData,
//         id: Date.now()
//       };
//       setNotices(prev => [...prev, newNotice]);
//     }

//     setFormData({
//       title: '',
//       description: '',
//       audience: 'All Employees',
//       publishDate: '',
//       status: 'Published'
//     });
//     setShowCreateModal(false);
//   };

//   const handleEdit = (notice) => {
//     setFormData(notice);
//     setEditingId(notice.id);
//     setShowCreateModal(true);
//   };

//   const handleDelete = (id) => {
//     if (window.confirm('Are you sure you want to delete this notice?')) {
//       setNotices(prev => prev.filter(notice => notice.id !== id));
//     }
//   };

//   const handleCancel = () => {
//     setFormData({
//       title: '',
//       description: '',
//       audience: 'All Employees',
//       publishDate: '',
//       status: 'Published'
//     });
//     setEditingId(null);
//     setShowCreateModal(false);
//   };

//   const handleViewDetails = (notice) => {
//     setSelectedNotice(notice);
//     setShowDetailsModal(true);
//   };

//   const getStatusColor = (status) => {
//     switch(status) {
//       case 'Published': return 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20';
//       case 'Draft': return 'bg-slate-500/10 text-slate-700 border-slate-500/20';
//       case 'Scheduled': return 'bg-blue-500/10 text-blue-700 border-blue-500/20';
//       default: return 'bg-gray-100 text-gray-800 border-gray-200';
//     }
//   };

//   const getStatusIcon = (status) => {
//     switch(status) {
//       case 'Published': return <CheckCircle className="w-4 h-4" />;
//       case 'Draft': return <FileText className="w-4 h-4" />;
//       case 'Scheduled': return <Clock className="w-4 h-4" />;
//       default: return <Bell className="w-4 h-4" />;
//     }
//   };

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
//   };

//   const filteredNotices = notices.filter(notice => {
//     const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          notice.description.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesStatus = filterStatus === 'All' || notice.status === filterStatus;
//     const matchesAudience = filterAudience === 'All' || notice.audience === filterAudience;

//     return matchesSearch && matchesStatus && matchesAudience;
//   });

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 md:p-8">
//       <div className="max-w-7xl mx-auto mb-6">
//         <div className="flex gap-2 bg-white p-1 rounded-xl shadow-md w-fit border border-blue-100">
//           <button
//             onClick={() => setView('admin')}
//             className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all ${
//               view === 'admin' ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-50'
//             }`}
//           >
//             Admin View
//           </button>
//           <button
//             onClick={() => setView('user')}
//             className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all ${
//               view === 'user' ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-50'
//             }`}
//           >
//             User View
//           </button>
//         </div>
//       </div>

//       {view === 'admin' && (
//         <div className="max-w-7xl mx-auto">
//           <div className="bg-white rounded-2xl shadow-lg shadow-blue-100/50 p-6 mb-6 border border-blue-100/50">
//             <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//               <div>
//                 <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">
//                   Notice Board
//                 </h1>
//                 <p className="text-sm text-gray-500">
//                   {filteredNotices.length} {filteredNotices.length === 1 ? 'notice' : 'notices'} found
//                 </p>
//               </div>
//               <button
//                 onClick={() => setShowCreateModal(true)}
//                 className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2 font-semibold"
//               >
//                 <span className="text-xl">+</span>
//                 Create Notice
//               </button>
//             </div>

//             <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
//                 <input
//                   type="text"
//                   placeholder="Search notices..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-10 pr-4 py-2.5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all"
//                 />
//               </div>

//               <div className="relative">
//                 <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
//                 <select
//                   value={filterStatus}
//                   onChange={(e) => setFilterStatus(e.target.value)}
//                   className="w-full pl-10 pr-10 py-2.5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none appearance-none bg-white transition-all"
//                 >
//                   <option value="All">All Status</option>
//                   <option value="Published">Published</option>
//                   <option value="Draft">Draft</option>
//                   <option value="Scheduled">Scheduled</option>
//                 </select>
//                 <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
//               </div>

//               <div className="relative">
//                 <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
//                 <select
//                   value={filterAudience}
//                   onChange={(e) => setFilterAudience(e.target.value)}
//                   className="w-full pl-10 pr-10 py-2.5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none appearance-none bg-white transition-all"
//                 >
//                   <option value="All">All Departments</option>
//                   {audiences.map(audience => (
//                     <option key={audience} value={audience}>{audience}</option>
//                   ))}
//                 </select>
//                 <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
//               </div>
//             </div>
//           </div>

//           {filteredNotices.length === 0 ? (
//             <div className="bg-white rounded-2xl shadow-lg shadow-blue-100/50 p-12 text-center border border-blue-100/50">
//               <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Bell className="w-8 h-8 text-gray-400" />
//               </div>
//               <h3 className="text-lg font-semibold text-gray-900 mb-2">No notices found</h3>
//               <p className="text-gray-500">Try adjusting your filters or create a new notice</p>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               {filteredNotices.map(notice => (
//                 <div 
//                   key={notice.id} 
//                   className="bg-white rounded-2xl shadow-lg shadow-blue-100/50 p-6 border border-blue-100/50 hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-300 group"
//                 >
//                   <div className="flex items-start justify-between mb-4">
//                     <div className="flex-1">
//                       <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
//                         {notice.title}
//                       </h3>
//                       <div className="flex flex-wrap items-center gap-2">
//                         <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border ${getStatusColor(notice.status)}`}>
//                           {getStatusIcon(notice.status)}
//                           {notice.status}
//                         </span>
//                         <span className="px-3 py-1.5 bg-purple-500/10 text-purple-700 border border-purple-500/20 rounded-lg text-xs font-semibold">
//                           {notice.audience}
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   <p className="text-gray-700 text-sm mb-4 line-clamp-3">
//                     {notice.description}
//                   </p>

//                   <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//                     <div className="flex items-center gap-2 text-sm text-gray-500">
//                       <Calendar size={16} />
//                       <span>{formatDate(notice.publishDate)}</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <button
//                         onClick={() => handleViewDetails(notice)}
//                         className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
//                         title="View Details"
//                       >
//                         <Eye size={18} />
//                       </button>
//                       <button
//                         onClick={() => handleEdit(notice)}
//                         className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
//                         title="Edit"
//                       >
//                         <Edit2 size={18} />
//                       </button>
//                       <button
//                         onClick={() => handleDelete(notice.id)}
//                         className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
//                         title="Delete"
//                       >
//                         <Trash2 size={18} />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       )}

//       {view === 'user' && (
//         <div className="max-w-4xl mx-auto">
//           <div className="bg-white rounded-2xl shadow-lg shadow-blue-100/50 p-6 mb-6 border border-blue-100/50">
//             <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent flex items-center gap-3">
//               <Bell className="text-blue-600" />
//               Your Notices
//             </h1>
//             <p className="text-sm text-gray-500 mt-2">
//               {notices.filter(n => n.status === 'Published').length} published notices
//             </p>
//           </div>

//           <div className="grid gap-4">
//             {notices
//               .filter(notice => notice.status === 'Published')
//               .map(notice => (
//                 <div key={notice.id} className="bg-white rounded-2xl shadow-lg shadow-blue-100/50 p-6 border-l-4 border-blue-600 hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-300">
//                   <div className="flex items-start gap-4">
//                     <div className="bg-blue-100 p-3 rounded-xl">
//                       <Bell className="text-blue-600" size={24} />
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="text-xl font-bold text-gray-900 mb-2">{notice.title}</h3>
//                       <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-3">
//                         <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg font-medium">
//                           {notice.audience}
//                         </span>
//                         <span>•</span>
//                         <span className="flex items-center gap-1">
//                           <Calendar size={14} />
//                           {formatDate(notice.publishDate)}
//                         </span>
//                       </div>
//                       <p className="text-gray-700 leading-relaxed">
//                         {notice.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>
//       )}

//       {showDetailsModal && selectedNotice && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h3 className="text-2xl font-bold mb-2">{selectedNotice.title}</h3>
//                   <div className="flex flex-wrap items-center gap-3">
//                     <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-sm font-medium">
//                       {selectedNotice.audience}
//                     </span>
//                     <span className="flex items-center gap-1.5 text-sm">
//                       <Calendar size={16} />
//                       {formatDate(selectedNotice.publishDate)}
//                     </span>
//                   </div>
//                 </div>
//                 <button 
//                   onClick={() => setShowDetailsModal(false)} 
//                   className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors"
//                 >
//                   <X size={24} />
//                 </button>
//               </div>
//             </div>

//             <div className="p-8">
//               <div className="mb-6">
//                 <span className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold border ${getStatusColor(selectedNotice.status)}`}>
//                   {getStatusIcon(selectedNotice.status)}
//                   {selectedNotice.status}
//                 </span>
//               </div>
//               <div>
//                 <h4 className="text-lg font-semibold text-gray-900 mb-3">Description</h4>
//                 <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
//                   {selectedNotice.description}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {showCreateModal && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
//               <div className="flex items-center justify-between">
//                 <h2 className="text-2xl font-bold">
//                   {editingId ? 'Edit Notice' : 'Create Notice'}
//                 </h2>
//                 <button
//                   onClick={handleCancel}
//                   className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors"
//                 >
//                   <X size={24} />
//                 </button>
//               </div>
//             </div>

//             <div className="p-6">
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Notice Title <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="title"
//                     value={formData.title}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all"
//                     placeholder="Holiday Announcement"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Notice Description <span className="text-red-500">*</span>
//                   </label>
//                   <textarea
//                     name="description"
//                     value={formData.description}
//                     onChange={handleInputChange}
//                     rows={6}
//                     className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none resize-none transition-all"
//                     placeholder="Office will remain closed on..."
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Target Audience <span className="text-red-500">*</span>
//                   </label>
//                   <div className="relative">
//                     <select
//                       name="audience"
//                       value={formData.audience}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none appearance-none bg-white transition-all"
//                       required
//                     >
//                       {audiences.map(audience => (
//                         <option key={audience} value={audience}>{audience}</option>
//                       ))}
//                     </select>
//                     <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Publish Date <span className="text-red-500">*</span>
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="date"
//                       name="publishDate"
//                       value={formData.publishDate}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all"
//                       required
//                     />
//                     <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Status <span className="text-red-500">*</span>
//                   </label>
//                   <div className="relative">
//                     <select
//                       name="status"
//                       value={formData.status}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none appearance-none bg-white transition-all"
//                       required
//                     >
//                       <option value="Published">Published</option>
//                       <option value="Draft">Draft</option>
//                       <option value="Scheduled">Scheduled</option>
//                     </select>
//                     <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
//                   </div>
//                 </div>

//                 <div className="flex justify-end gap-3 pt-4 border-t">
//                   <button
//                     type="button"
//                     onClick={handleCancel}
//                     className="px-6 py-2.5 border-2 border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-all font-semibold"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     onClick={handleSubmit}
//                     className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-lg transition-all font-semibold"
//                   >
//                     {editingId ? 'Update Notice' : 'Publish Notice'}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Notice;
//--------------------------------------------------------------------------------------------------------------------


// import React, { useState } from 'react';
// import { Calendar, X, Edit2, Trash2, Bell, ChevronDown } from 'lucide-react';

// const Notice = () => {
//   const [showCreateModal, setShowCreateModal] = useState(false);
//   const [notices, setNotices] = useState([
//     {
//       id: 1,
//       title: 'Holiday Info',
//       description: 'Office will remain closed on Republic Day (26th January 2026). Regular operations will resume on 27th January.',
//       audience: 'All Employees',
//       publishDate: '2026-01-10',
//       status: 'Published'
//     },
//     {
//       id: 2,
//       title: 'Server Maintenance',
//       description: 'Scheduled server maintenance on 12th January from 2 AM to 6 AM. Services may be temporarily unavailable.',
//       audience: 'IT Dept',
//       publishDate: '2026-01-12',
//       status: 'Draft'
//     },
//     {
//       id: 3,
//       title: 'Policy Update',
//       description: 'New remote work policy will be effective from 15th January 2026. Please review the updated guidelines.',
//       audience: 'HR Dept',
//       publishDate: '2026-01-15',
//       status: 'Scheduled'
//     }
//   ]);

//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     audience: 'All Employees',
//     publishDate: '',
//     status: 'Published'
//   });

//   const [editingId, setEditingId] = useState(null);
//   const [view, setView] = useState('admin'); // 'admin' or 'user'

//   const audiences = ['All Employees', 'IT Dept', 'HR Dept', 'Sales Dept', 'Management'];

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (editingId) {
//       setNotices(prev => prev.map(notice => 
//         notice.id === editingId ? { ...formData, id: editingId } : notice
//       ));
//       setEditingId(null);
//     } else {
//       const newNotice = {
//         ...formData,
//         id: Date.now()
//       };
//       setNotices(prev => [...prev, newNotice]);
//     }

//     setFormData({
//       title: '',
//       description: '',
//       audience: 'All Employees',
//       publishDate: '',
//       status: 'Published'
//     });
//     setShowCreateModal(false);
//   };

//   const handleEdit = (notice) => {
//     setFormData(notice);
//     setEditingId(notice.id);
//     setShowCreateModal(true);
//   };

//   const handleDelete = (id) => {
//     if (window.confirm('Are you sure you want to delete this notice?')) {
//       setNotices(prev => prev.filter(notice => notice.id !== id));
//     }
//   };

//   const handleCancel = () => {
//     setFormData({
//       title: '',
//       description: '',
//       audience: 'All Employees',
//       publishDate: '',
//       status: 'Published'
//     });
//     setEditingId(null);
//     setShowCreateModal(false);
//   };

//   const getStatusColor = (status) => {
//     switch(status) {
//       case 'Published': return 'bg-green-100 text-green-800';
//       case 'Draft': return 'bg-gray-100 text-gray-800';
//       case 'Scheduled': return 'bg-blue-100 text-blue-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       {/* View Toggle */}
//       <div className="max-w-7xl mx-auto mb-6">
//         <div className="flex gap-2 bg-white p-1 rounded-lg shadow-sm w-fit">
//           <button
//             onClick={() => setView('admin')}
//             className={`px-4 py-2 rounded-md font-medium transition-colors ${
//               view === 'admin' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
//             }`}
//           >
//             Admin View
//           </button>
//           <button
//             onClick={() => setView('user')}
//             className={`px-4 py-2 rounded-md font-medium transition-colors ${
//               view === 'user' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
//             }`}
//           >
//             User View
//           </button>
//         </div>
//       </div>

//       {/* Admin View */}
//       {view === 'admin' && (
//         <div className="max-w-7xl mx-auto">
//           {/* Header */}
//           <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
//             <div className="flex justify-between items-center">
//               <h1 className="text-2xl font-bold text-gray-900">Notices</h1>
//               <button
//                 onClick={() => setShowCreateModal(true)}
//                 className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
//               >
//                 <span className="text-xl">+</span>
//                 Create Notice
//               </button>
//             </div>
//           </div>

//           {/* Notices Table */}
//           <div className="bg-white rounded-lg shadow-sm overflow-hidden">
//             <table className="w-full">
//               <thead className="bg-gray-50 border-b">
//                 <tr>
//                   <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Title</th>
//                   <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Audience</th>
//                   <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Publish Date</th>
//                   <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Status</th>
//                   <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {notices.map(notice => (
//                   <tr key={notice.id} className="hover:bg-gray-50">
//                     <td className="px-6 py-4 text-sm text-gray-900">{notice.title}</td>
//                     <td className="px-6 py-4 text-sm text-gray-600">{notice.audience}</td>
//                     <td className="px-6 py-4 text-sm text-gray-600">{formatDate(notice.publishDate)}</td>
//                     <td className="px-6 py-4">
//                       <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(notice.status)}`}>
//                         {notice.status}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4">
//                       <div className="flex gap-3">
//                         <button
//                           onClick={() => handleEdit(notice)}
//                           className="text-blue-600 hover:text-blue-800"
//                           title="Edit"
//                         >
//                           <Edit2 size={18} />
//                         </button>
//                         <button
//                           onClick={() => handleDelete(notice.id)}
//                           className="text-red-600 hover:text-red-800"
//                           title="Delete"
//                         >
//                           <Trash2 size={18} />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}

//       {/* User View */}
//       {view === 'user' && (
//         <div className="max-w-4xl mx-auto">
//           <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
//             <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
//               <Bell className="text-blue-600" />
//               Your Notices
//             </h1>
//           </div>

//           <div className="grid gap-4">
//             {notices
//               .filter(notice => notice.status === 'Published')
//               .map(notice => (
//                 <div key={notice.id} className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-blue-600">
//                   <div className="flex items-start gap-4">
//                     <div className="bg-blue-100 p-3 rounded-lg">
//                       <Bell className="text-blue-600" size={24} />
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="text-lg font-semibold text-gray-900 mb-1">{notice.title}</h3>
//                       <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
//                         <span>{notice.audience}</span>
//                         <span>•</span>
//                         <span>{formatDate(notice.publishDate)}</span>
//                       </div>
//                       <p className="text-gray-700 mb-3">
//                         {notice.description.length > 100 
//                           ? `${notice.description.substring(0, 100)}...` 
//                           : notice.description}
//                       </p>
//                       {notice.description.length > 100 && (
//                         <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
//                           Read More →
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>
//       )}

//       {/* Create/Edit Modal */}
//       {showCreateModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="p-6">
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-xl font-bold text-gray-900">
//                   {editingId ? 'Edit Notice' : 'Create Notice'}
//                 </h2>
//                 <button
//                   onClick={handleCancel}
//                   className="text-gray-400 hover:text-gray-600"
//                 >
//                   <X size={24} />
//                 </button>
//               </div>

//               <form onSubmit={handleSubmit}>
//                 {/* Notice Title */}
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Notice Title <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="title"
//                     value={formData.title}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
//                     placeholder="Holiday Announcement"
//                     required
//                   />
//                 </div>

//                 {/* Notice Description */}
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Notice Description <span className="text-red-500">*</span>
//                   </label>
//                   <textarea
//                     name="description"
//                     value={formData.description}
//                     onChange={handleInputChange}
//                     rows="6"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
//                     placeholder="Office will remain closed on..."
//                     required
//                   />
//                 </div>

//                 {/* Target Audience */}
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Target Audience <span className="text-red-500">*</span>
//                   </label>
//                   <div className="relative">
//                     <select
//                       name="audience"
//                       value={formData.audience}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white"
//                       required
//                     >
//                       {audiences.map(audience => (
//                         <option key={audience} value={audience}>{audience}</option>
//                       ))}
//                     </select>
//                     <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
//                   </div>
//                 </div>

//                 {/* Publish Date */}
//                 <div className="mb-6">
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Publish Date <span className="text-red-500">*</span>
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="date"
//                       name="publishDate"
//                       value={formData.publishDate}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
//                       required
//                     />
//                     <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
//                   </div>
//                 </div>

//                 {/* Status */}
//                 <div className="mb-6">
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Status <span className="text-red-500">*</span>
//                   </label>
//                   <div className="relative">
//                     <select
//                       name="status"
//                       value={formData.status}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white"
//                       required
//                     >
//                       <option value="Published">Published</option>
//                       <option value="Draft">Draft</option>
//                       <option value="Scheduled">Scheduled</option>
//                     </select>
//                     <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
//                   </div>
//                 </div>

//                 {/* Actions */}
//                 <div className="flex justify-end gap-3 pt-4 border-t">
//                   <button
//                     type="button"
//                     onClick={handleCancel}
//                     className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//                   >
//                     {editingId ? 'Update Notice' : 'Publish Notice'}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Notice;
//--------------------------------------------------------------------------------------------------------

import React, { useState } from 'react';
import { Calendar, X, Edit2, Trash2, Bell, ChevronDown, Search, Filter, Eye, Clock, CheckCircle, FileText } from 'lucide-react';

const Notice = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [notices, setNotices] = useState([
    {
      id: 1,
      title: 'Holiday Info',
      description: 'Office will remain closed on Republic Day (26th January 2026). Regular operations will resume on 27th January. Please plan your work accordingly and complete pending tasks before the holiday.',
      audience: 'All Employees',
      publishDate: '2026-01-10',
      status: 'Published'
    },
    {
      id: 2,
      title: 'Server Maintenance',
      description: 'Scheduled server maintenance on 12th January from 2 AM to 6 AM. Services may be temporarily unavailable during this period. Please save your work frequently and avoid scheduling critical tasks during maintenance window.',
      audience: 'IT Dept',
      publishDate: '2026-01-12',
      status: 'Draft'
    },
    {
      id: 3,
      title: 'Policy Update',
      description: 'New remote work policy will be effective from 15th January 2026. Please review the updated guidelines in the employee handbook. Key changes include flexible working hours and hybrid work options.',
      audience: 'HR Dept',
      publishDate: '2026-01-15',
      status: 'Scheduled'
    },
    {
      id: 4,
      title: 'Team Building Event',
      description: 'Annual team building event scheduled for 20th January 2026 at Beach Resort. All employees are requested to confirm their attendance by 18th January. Transportation will be provided.',
      audience: 'All Employees',
      publishDate: '2026-01-08',
      status: 'Published'
    }
  ]);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    audience: 'All Employees',
    publishDate: '',
    status: 'Published'
  });

  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterAudience, setFilterAudience] = useState('All');

  const audiences = ['All Employees', 'IT Dept', 'HR Dept', 'Sales Dept', 'Management'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      setNotices(prev => prev.map(notice =>
        notice.id === editingId ? { ...formData, id: editingId } : notice
      ));
      setEditingId(null);
    } else {
      const newNotice = {
        ...formData,
        id: Date.now()
      };
      setNotices(prev => [...prev, newNotice]);
    }

    setFormData({
      title: '',
      description: '',
      audience: 'All Employees',
      publishDate: '',
      status: 'Published'
    });
    setShowCreateModal(false);
  };

  const handleEdit = (notice) => {
    setFormData(notice);
    setEditingId(notice.id);
    setShowCreateModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this notice?')) {
      setNotices(prev => prev.filter(notice => notice.id !== id));
    }
  };

  const handleCancel = () => {
    setFormData({
      title: '',
      description: '',
      audience: 'All Employees',
      publishDate: '',
      status: 'Published'
    });
    setEditingId(null);
    setShowCreateModal(false);
  };

  const handleViewDetails = (notice) => {
    setSelectedNotice(notice);
    setShowDetailsModal(true);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Published': return 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20';
      case 'Draft': return 'bg-slate-500/10 text-slate-700 border-slate-500/20';
      case 'Scheduled': return 'bg-blue-500/10 text-blue-700 border-blue-500/20';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Published': return <CheckCircle className="w-4 h-4" />;
      case 'Draft': return <FileText className="w-4 h-4" />;
      case 'Scheduled': return <Clock className="w-4 h-4" />;
      default: return <Bell className="w-4 h-4" />;
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  const filteredNotices = notices.filter(notice => {
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notice.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || notice.status === filterStatus;
    const matchesAudience = filterAudience === 'All' || notice.audience === filterAudience;

    return matchesSearch && matchesStatus && matchesAudience;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 md:p-8">

      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg shadow-blue-100/50 p-6 mb-6 border border-blue-100/50">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">
                Notice Board
              </h1>
              <p className="text-sm text-gray-500">
                {filteredNotices.length} {filteredNotices.length === 1 ? 'notice' : 'notices'} found
              </p>
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2 font-semibold"
            >
              <span className="text-xl">+</span>
              Create Notice
            </button>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search notices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all"
              />
            </div>

            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none appearance-none bg-white transition-all"
              >
                <option value="All">All Status</option>
                <option value="Published">Published</option>
                <option value="Draft">Draft</option>
                <option value="Scheduled">Scheduled</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
            </div>

            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <select
                value={filterAudience}
                onChange={(e) => setFilterAudience(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none appearance-none bg-white transition-all"
              >
                <option value="All">All Departments</option>
                {audiences.map(audience => (
                  <option key={audience} value={audience}>{audience}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
            </div>
          </div>
        </div>

        {filteredNotices.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg shadow-blue-100/50 p-12 text-center border border-blue-100/50">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bell className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No notices found</h3>
            <p className="text-gray-500">Try adjusting your filters or create a new notice</p>
          </div>
        ) : (
          <>
            {/* Desktop Table View */}
            <div className="hidden lg:block bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50/50 border-b border-gray-100">
                      <th className="p-4 text-sm font-semibold text-gray-600">Title</th>
                      <th className="p-4 text-sm font-semibold text-gray-600">Audience</th>
                      <th className="p-4 text-sm font-semibold text-gray-600">Publish Date</th>
                      <th className="p-4 text-sm font-semibold text-gray-600">Status</th>
                      <th className="p-4 text-right text-sm font-semibold text-gray-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredNotices.map(notice => (
                      <tr key={notice.id} className="hover:bg-gray-50/50 transition-colors">
                        <td className="p-4">
                          <div className="font-semibold text-gray-900">{notice.title}</div>
                          <div className="text-xs text-gray-500 line-clamp-1 max-w-xs">{notice.description}</div>
                        </td>
                        <td className="p-4">
                          <span className="px-2.5 py-1 bg-purple-50 text-purple-700 rounded-md text-xs font-semibold border border-purple-100">
                            {notice.audience}
                          </span>
                        </td>
                        <td className="p-4 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <Calendar size={14} className="text-gray-400" />
                            {formatDate(notice.publishDate)}
                          </div>
                        </td>
                        <td className="p-4">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusColor(notice.status)}`}>
                            {getStatusIcon(notice.status)}
                            {notice.status}
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button onClick={() => handleViewDetails(notice)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="View">
                              <Eye size={18} />
                            </button>
                            <button onClick={() => handleEdit(notice)} className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors" title="Edit">
                              <Edit2 size={18} />
                            </button>
                            <button onClick={() => handleDelete(notice.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
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

            {/* Mobile/Tablet Card View */}
            <div className="block lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredNotices.map(notice => (
                <div
                  key={notice.id}
                  className="bg-white rounded-2xl shadow-lg shadow-blue-100/50 p-6 border border-blue-100/50 hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {notice.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border ${getStatusColor(notice.status)}`}>
                          {getStatusIcon(notice.status)}
                          {notice.status}
                        </span>
                        <span className="px-3 py-1.5 bg-purple-500/10 text-purple-700 border border-purple-500/20 rounded-lg text-xs font-semibold">
                          {notice.audience}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                    {notice.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar size={16} />
                      <span>{formatDate(notice.publishDate)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleViewDetails(notice)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="View Details"
                      >
                        <Eye size={18} />
                      </button>
                      <button
                        onClick={() => handleEdit(notice)}
                        className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                        title="Edit"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(notice.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {
        showDetailsModal && selectedNotice && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{selectedNotice.title}</h3>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-sm font-medium">
                        {selectedNotice.audience}
                      </span>
                      <span className="flex items-center gap-1.5 text-sm">
                        <Calendar size={16} />
                        {formatDate(selectedNotice.publishDate)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowDetailsModal(false)}
                    className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-6">
                  <span className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold border ${getStatusColor(selectedNotice.status)}`}>
                    {getStatusIcon(selectedNotice.status)}
                    {selectedNotice.status}
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Description</h4>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                    {selectedNotice.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      }

      {
        showCreateModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">
                    {editingId ? 'Edit Notice' : 'Create Notice'}
                  </h2>
                  <button
                    onClick={handleCancel}
                    className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Notice Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all"
                      placeholder="Holiday Announcement"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Notice Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none resize-none transition-all"
                      placeholder="Office will remain closed on..."
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Target Audience <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="audience"
                        value={formData.audience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none appearance-none bg-white transition-all"
                        required
                      >
                        {audiences.map(audience => (
                          <option key={audience} value={audience}>{audience}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Publish Date <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        name="publishDate"
                        value={formData.publishDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all"
                        required
                      />
                      <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Status <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="status"
                        value={formData.status}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none appearance-none bg-white transition-all"
                        required
                      >
                        <option value="Published">Published</option>
                        <option value="Draft">Draft</option>
                        <option value="Scheduled">Scheduled</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 pt-4 border-t">
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="px-6 py-2.5 border-2 border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-all font-semibold"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-lg transition-all font-semibold"
                    >
                      {editingId ? 'Update Notice' : 'Publish Notice'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div >
  );
};

export default Notice;