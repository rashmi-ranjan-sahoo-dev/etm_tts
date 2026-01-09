// /* eslint-disable react-hooks/set-state-in-effect */
// import React, { useState, useEffect } from "react";
// import { Plus, Pencil, Trash2, Search, Building2, AlertCircle, Phone, Mail, Users } from "lucide-react";

// /* ===================== MODAL ===================== */
// const DepartmentModal = ({ close, save, editData }) => {
//   const [form, setForm] = useState({
//     deptId: "",
//     deptName: "",
//     head: "",
//     phone: "",
//     email: "",
//     totalEmployees: "",
//     description: "",
//   });

//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     if (editData) setForm(editData);
//   }, [editData]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//     if (errors[name]) setErrors({ ...errors, [name]: "" });
//   };

//   const handleSubmit = () => {
//     let newErrors = {};
//     if (!form.deptId.trim()) newErrors.deptId = "Required";
//     if (!form.deptName.trim()) newErrors.deptName = "Required";
//     if (!form.head.trim()) newErrors.head = "Required";
//     if (!form.phone.trim()) newErrors.phone = "Required";
//     if (!form.email.trim()) newErrors.email = "Required";
//     if (!form.totalEmployees) newErrors.totalEmployees = "Required";

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       save(form);
//       close();
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//         <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-violet-600 p-6 rounded-t-2xl z-10">
//           <h3 className="text-2xl font-bold text-white">
//             {editData ? "Edit Department" : "Add New Department"}
//           </h3>
//           <p className="text-purple-100 text-sm mt-1">
//             Configure organizational department details and contact info
//           </p>
//         </div>

//         <div className="p-6 space-y-5">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//             {/* Dept ID */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Department ID</label>
//               <input
//                 name="deptId"
//                 value={form.deptId}
//                 onChange={handleChange}
//                 placeholder="e.g. DEPT-01"
//                 className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
//                   errors.deptId ? "border-red-400 focus:ring-red-500/10" : "border-gray-200 focus:border-purple-500 focus:ring-purple-500/10"
//                 }`}
//               />
//               {errors.deptId && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/>{errors.deptId}</p>}
//             </div>

//             {/* Dept Name */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Department Name</label>
//               <input
//                 name="deptName"
//                 value={form.deptName}
//                 onChange={handleChange}
//                 placeholder="e.g. Engineering"
//                 className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
//                   errors.deptName ? "border-red-400 focus:ring-red-500/10" : "border-gray-200 focus:border-purple-500 focus:ring-purple-500/10"
//                 }`}
//               />
//               {errors.deptName && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/>{errors.deptName}</p>}
//             </div>

//             {/* Head */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Head of Department</label>
//               <input
//                 name="head"
//                 value={form.head}
//                 onChange={handleChange}
//                 placeholder="Name of HOD"
//                 className="w-full px-4 py-3 rounded-xl border-2 bg-gray-50 border-gray-200 focus:border-purple-500 focus:outline-none transition-all"
//               />
//             </div>

//             {/* Total Employees */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Total Employees</label>
//               <input
//                 type="number"
//                 name="totalEmployees"
//                 value={form.totalEmployees}
//                 onChange={handleChange}
//                 placeholder="0"
//                 className="w-full px-4 py-3 rounded-xl border-2 bg-gray-50 border-gray-200 focus:border-purple-500 focus:outline-none transition-all"
//               />
//             </div>

//             {/* Phone */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
//               <input
//                 name="phone"
//                 value={form.phone}
//                 onChange={handleChange}
//                 placeholder="+1 234 567 890"
//                 className="w-full px-4 py-3 rounded-xl border-2 bg-gray-50 border-gray-200 focus:border-purple-500 focus:outline-none transition-all"
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
//               <input
//                 name="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 placeholder="dept@company.com"
//                 className="w-full px-4 py-3 rounded-xl border-2 bg-gray-50 border-gray-200 focus:border-purple-500 focus:outline-none transition-all"
//               />
//             </div>

//             {/* Description */}
//             <div className="md:col-span-2">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
//               <textarea
//                 name="description"
//                 value={form.description}
//                 onChange={handleChange}
//                 rows="3"
//                 placeholder="Brief overview of department responsibilities..."
//                 className="w-full px-4 py-3 rounded-xl border-2 bg-gray-50 border-gray-200 focus:border-purple-500 focus:outline-none transition-all"
//               />
//             </div>
//           </div>

//           <div className="flex gap-3 pt-4 border-t">
//             <button onClick={handleSubmit} className="flex-1 bg-gradient-to-r from-purple-600 to-violet-600 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] active:scale-95 transition-all shadow-lg">
//               {editData ? "Update Department" : "Add Department"}
//             </button>
//             <button onClick={close} className="px-6 py-3 border-2 border-gray-200 rounded-xl font-semibold hover:bg-gray-50 transition-all">
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// /* ===================== PAGE ===================== */
// const DepartmentPage = () => {
//   const [departments, setDepartments] = useState([
//     {
//       id: 1,
//       deptId: "D-ENG-01",
//       deptName: "Engineering",
//       head: "John Doe",
//       phone: "+1 987 654 321",
//       email: "engineering@tech.com",
//       totalEmployees: 42,
//       description: "Handles core product development and infrastructure.",
//     },
//     {
//       id: 2,
//       deptId: "D-HR-02",
//       deptName: "Human Resources",
//       head: "Sarah Jenkins",
//       phone: "+1 888 123 456",
//       email: "hr@tech.com",
//       totalEmployees: 12,
//       description: "Manages recruitment, payroll, and employee relations.",
//     },
//   ]);

//   const [search, setSearch] = useState("");
//   const [openModal, setOpenModal] = useState(false);
//   const [editData, setEditData] = useState(null);

//   const handleSave = (data) => {
//     if (editData) {
//       setDepartments(departments.map(d => d.id === data.id ? data : d));
//     } else {
//       setDepartments([...departments, { ...data, id: Date.now() }]);
//     }
//     setOpenModal(false);
//   };

//   const filtered = departments.filter(d =>
//     d.deptName.toLowerCase().includes(search.toLowerCase()) ||
//     d.deptId.toLowerCase().includes(search.toLowerCase()) ||
//     d.head.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-violet-50 p-4 md:p-8">
//       <div className="max-w-7xl mx-auto">

//         {/* HEADER SECTION */}
//         <div className="bg-white rounded-2xl shadow-lg shadow-purple-100/50 p-6 mb-6 border border-purple-100/50">
//           <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
//             <div className="flex items-center gap-4">
//               <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-violet-600 rounded-xl flex items-center justify-center shadow-lg">
//                 <Building2 className="w-7 h-7 text-white" />
//               </div>
//               <div>
//                 <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
//                   Departments
//                 </h2>
//                 <p className="text-sm text-gray-500 mt-1">{filtered.length} active departments found</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-3">
//               <div className="relative flex-1 lg:w-80">
//                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
//                 <input
//                   type="text"
//                   placeholder="Search ID, name or head..."
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                   className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 bg-white focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all"
//                 />
//               </div>

//               <button
//                 onClick={() => { setEditData(null); setOpenModal(true); }}
//                 className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-violet-500 text-white hover:from-purple-600 hover:to-violet-600 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
//               >
//                 <Plus size={24} />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* DESKTOP TABLE */}
//         <div className="hidden md:block overflow-hidden bg-white rounded-2xl shadow-lg border border-purple-100/50">
//           <div className="overflow-x-auto">
//             <table className="w-full text-sm">
//               <thead>
//                 <tr className="bg-gradient-to-r from-purple-50 to-violet-50 border-b-2 border-purple-100">
//                   <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Department ID</th>
//                   <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Department Name</th>
//                   <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Head of Dept</th>
//                   <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Contact Info</th>
//                   <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Total Employees</th>
//                   <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-100">
//                 {filtered.map(row => (
//                   <tr key={row.id} className="hover:bg-purple-50/50 transition-colors group">
//                     <td className="p-4 font-medium text-gray-700">{row.deptId}</td>
//                     <td className="p-4">
//                       <span className="font-bold text-purple-600 group-hover:text-purple-700">{row.deptName}</span>
//                     </td>
//                     <td className="p-4 text-gray-700 font-medium">{row.head}</td>
//                     <td className="p-4">
//                       <div className="space-y-1">
//                         <div className="flex items-center gap-2 text-gray-600">
//                           <Phone size={14} className="text-purple-400" /> {row.phone}
//                         </div>
//                         <div className="flex items-center gap-2 text-gray-600">
//                           <Mail size={14} className="text-purple-400" /> {row.email}
//                         </div>
//                       </div>
//                     </td>
//                     <td className="p-4">
//                       <div className="flex items-center gap-2">
//                         <div className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-lg font-bold flex items-center gap-1">
//                           <Users size={14} /> {row.totalEmployees}
//                         </div>
//                       </div>
//                     </td>
//                     <td className="p-4">
//                       <div className="flex justify-center gap-3">
//                         <button
//                           onClick={() => { setEditData(row); setOpenModal(true); }}
//                           className="p-2 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
//                         >
//                           <Pencil size={18} />
//                         </button>
//                         <button
//                           onClick={() => setDepartments(departments.filter(d => d.id !== row.id))}
//                           className="p-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
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

//         {/* MOBILE VIEW CARD LIST */}
//         <div className="block md:hidden space-y-4">
//           {filtered.map(row => (
//             <div key={row.id} className="bg-white rounded-2xl shadow-lg p-5 border border-purple-100/50">
//               <div className="flex justify-between items-start mb-4">
//                 <div>
//                   <span className="text-xs font-bold text-gray-400 uppercase">{row.deptId}</span>
//                   <h3 className="text-xl font-bold text-purple-600">{row.deptName}</h3>
//                 </div>
//                 <div className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-lg font-bold flex items-center gap-1">
//                   <Users size={14} /> {row.totalEmployees}
//                 </div>
//               </div>
              
//               <div className="space-y-2 mb-4">
//                 <div className="flex justify-between text-sm">
//                   <span className="text-gray-500">HOD:</span>
//                   <span className="font-semibold">{row.head}</span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-gray-500">Phone:</span>
//                   <span>{row.phone}</span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-gray-500">Email:</span>
//                   <span className="text-purple-500 italic">{row.email}</span>
//                 </div>
//               </div>

//               <div className="flex gap-3 pt-3 border-t border-gray-100">
//                 <button
//                   onClick={() => { setEditData(row); setOpenModal(true); }}
//                   className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-50 text-blue-600 font-bold"
//                 >
//                   <Pencil size={18} /> Edit
//                 </button>
//                 <button
//                   onClick={() => setDepartments(departments.filter(d => d.id !== row.id))}
//                   className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-red-50 text-red-600 font-bold"
//                 >
//                   <Trash2 size={18} /> Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {filtered.length === 0 && (
//           <div className="bg-white rounded-2xl shadow-lg p-12 text-center border border-purple-100/50 mt-6">
//             <Building2 className="w-16 h-16 text-gray-200 mx-auto mb-4" />
//             <h3 className="text-lg font-semibold text-gray-900 mb-2">No departments found</h3>
//             <p className="text-gray-500">Try adjusting your search criteria or add a new department.</p>
//           </div>
//         )}
//       </div>

//       {openModal && (
//         <DepartmentModal 
//           close={() => setOpenModal(false)} 
//           save={handleSave} 
//           editData={editData} 
//         />
//       )}
//     </div>
//   );
// };

// export default DepartmentPage;

//-------------------------------------------------------------------------------------------------------------

/* eslint-disable react-hooks/set-state-in-effect */
// import React, { useState, useEffect } from "react";
// import { Plus, Pencil, Trash2, Search, Building2, AlertCircle, Phone, Mail, Users, X, User, Briefcase, MapPin, Calendar } from "lucide-react";

// /* ===================== EMPLOYEE DATA ===================== */
// const employeesData = {
//   1: [ // Engineering department
//     { id: "EMP-001", name: "Alice Johnson", role: "Senior Developer", phone: "+1 234 567 8901", email: "alice.j@tech.com", location: "New York", joinDate: "2020-03-15" },
//     { id: "EMP-002", name: "Bob Smith", role: "Frontend Developer", phone: "+1 234 567 8902", email: "bob.s@tech.com", location: "San Francisco", joinDate: "2021-06-20" },
//     { id: "EMP-003", name: "Carol White", role: "Backend Developer", phone: "+1 234 567 8903", email: "carol.w@tech.com", location: "Seattle", joinDate: "2019-11-10" },
//     { id: "EMP-004", name: "David Brown", role: "DevOps Engineer", phone: "+1 234 567 8904", email: "david.b@tech.com", location: "Austin", joinDate: "2022-01-05" },
//   ],
//   2: [ // HR department
//     { id: "EMP-101", name: "Emma Davis", role: "HR Manager", phone: "+1 234 567 9001", email: "emma.d@tech.com", location: "New York", joinDate: "2018-05-12" },
//     { id: "EMP-102", name: "Frank Miller", role: "Recruiter", phone: "+1 234 567 9002", email: "frank.m@tech.com", location: "Boston", joinDate: "2021-09-18" },
//     { id: "EMP-103", name: "Grace Lee", role: "HR Coordinator", phone: "+1 234 567 9003", email: "grace.l@tech.com", location: "Chicago", joinDate: "2022-03-22" },
//   ],
// };

// /* ===================== EMPLOYEE DETAIL MODAL ===================== */
// const EmployeeDetailModal = ({ employee, close }) => {
//   if (!employee) return null;

//   return (
//     <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[60] p-4">
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg">
//         <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-t-2xl relative">
//           <button 
//             onClick={close}
//             className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-lg transition-all"
//           >
//             <X size={20} />
//           </button>
//           <div className="flex items-center gap-4">
//             <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
//               <User className="w-8 h-8 text-white" />
//             </div>
//             <div>
//               <h3 className="text-2xl font-bold text-white">{employee.name}</h3>
//               <p className="text-indigo-100">{employee.id}</p>
//             </div>
//           </div>
//         </div>

//         <div className="p-6 space-y-4">
//           <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-xl border border-purple-200">
//             <div className="flex items-center gap-3 mb-1">
//               <Briefcase size={18} className="text-purple-600" />
//               <span className="text-sm font-semibold text-gray-600">Role</span>
//             </div>
//             <p className="text-lg font-bold text-purple-700 ml-7">{employee.role}</p>
//           </div>

//           <div className="grid grid-cols-1 gap-3">
//             <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
//               <Phone size={18} className="text-purple-500" />
//               <div>
//                 <p className="text-xs text-gray-500 font-semibold">Phone</p>
//                 <p className="text-sm font-medium text-gray-800">{employee.phone}</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
//               <Mail size={18} className="text-purple-500" />
//               <div>
//                 <p className="text-xs text-gray-500 font-semibold">Email</p>
//                 <p className="text-sm font-medium text-gray-800">{employee.email}</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
//               <MapPin size={18} className="text-purple-500" />
//               <div>
//                 <p className="text-xs text-gray-500 font-semibold">Location</p>
//                 <p className="text-sm font-medium text-gray-800">{employee.location}</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
//               <Calendar size={18} className="text-purple-500" />
//               <div>
//                 <p className="text-xs text-gray-500 font-semibold">Join Date</p>
//                 <p className="text-sm font-medium text-gray-800">{employee.joinDate}</p>
//               </div>
//             </div>
//           </div>

//           <button 
//             onClick={close}
//             className="w-full mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// /* ===================== EMPLOYEE LIST MODAL ===================== */
// const EmployeeListModal = ({ department, employees, close, onEmployeeClick }) => {
//   return (
//     <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[55] p-4">
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[85vh] overflow-hidden">
//         <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-violet-600 p-6 rounded-t-2xl z-10">
//           <div className="flex justify-between items-start">
//             <div>
//               <h3 className="text-2xl font-bold text-white">
//                 {department.deptName} - Employees
//               </h3>
//               <p className="text-purple-100 text-sm mt-1">
//                 {employees.length} employee{employees.length !== 1 ? 's' : ''} in this department
//               </p>
//             </div>
//             <button 
//               onClick={close}
//               className="text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-lg transition-all"
//             >
//               <X size={24} />
//             </button>
//           </div>
//         </div>

//         <div className="p-6 overflow-y-auto max-h-[calc(85vh-120px)]">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {employees.map((emp) => (
//               <div
//                 key={emp.id}
//                 onClick={() => onEmployeeClick(emp)}
//                 className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-4 border-2 border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all cursor-pointer group"
//               >
//                 <div className="flex items-start gap-3">
//                   <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
//                     <User className="w-6 h-6 text-white" />
//                   </div>
//                   <div className="flex-1 min-w-0">
//                     <h4 className="font-bold text-purple-700 text-lg group-hover:text-purple-900 transition-colors">
//                       {emp.name}
//                     </h4>
//                     <p className="text-xs font-semibold text-gray-500 mb-2">{emp.id}</p>
//                     <div className="flex items-center gap-2 text-sm text-gray-600">
//                       <Briefcase size={14} className="text-purple-400" />
//                       <span className="truncate">{emp.role}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {employees.length === 0 && (
//             <div className="text-center py-12">
//               <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
//               <p className="text-gray-500">No employees found in this department</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// /* ===================== MODAL ===================== */
// const DepartmentModal = ({ close, save, editData }) => {
//   const [form, setForm] = useState({
//     deptId: "",
//     deptName: "",
//     head: "",
//     phone: "",
//     email: "",
//     totalEmployees: "",
//     description: "",
//   });

//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     if (editData) setForm(editData);
//   }, [editData]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//     if (errors[name]) setErrors({ ...errors, [name]: "" });
//   };

//   const handleSubmit = () => {
//     let newErrors = {};
//     if (!form.deptId.trim()) newErrors.deptId = "Required";
//     if (!form.deptName.trim()) newErrors.deptName = "Required";
//     if (!form.head.trim()) newErrors.head = "Required";
//     if (!form.phone.trim()) newErrors.phone = "Required";
//     if (!form.email.trim()) newErrors.email = "Required";
//     if (!form.totalEmployees) newErrors.totalEmployees = "Required";

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       save(form);
//       close();
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//         <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-violet-600 p-6 rounded-t-2xl z-10">
//           <h3 className="text-2xl font-bold text-white">
//             {editData ? "Edit Department" : "Add New Department"}
//           </h3>
//           <p className="text-purple-100 text-sm mt-1">
//             Configure organizational department details and contact info
//           </p>
//         </div>

//         <div className="p-6 space-y-5">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//             {/* Dept ID */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Department ID</label>
//               <input
//                 name="deptId"
//                 value={form.deptId}
//                 onChange={handleChange}
//                 placeholder="e.g. DEPT-01"
//                 className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
//                   errors.deptId ? "border-red-400 focus:ring-red-500/10" : "border-gray-200 focus:border-purple-500 focus:ring-purple-500/10"
//                 }`}
//               />
//               {errors.deptId && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/>{errors.deptId}</p>}
//             </div>

//             {/* Dept Name */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Department Name</label>
//               <input
//                 name="deptName"
//                 value={form.deptName}
//                 onChange={handleChange}
//                 placeholder="e.g. Engineering"
//                 className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
//                   errors.deptName ? "border-red-400 focus:ring-red-500/10" : "border-gray-200 focus:border-purple-500 focus:ring-purple-500/10"
//                 }`}
//               />
//               {errors.deptName && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/>{errors.deptName}</p>}
//             </div>

//             {/* Head */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Head of Department</label>
//               <input
//                 name="head"
//                 value={form.head}
//                 onChange={handleChange}
//                 placeholder="Name of HOD"
//                 className="w-full px-4 py-3 rounded-xl border-2 bg-gray-50 border-gray-200 focus:border-purple-500 focus:outline-none transition-all"
//               />
//             </div>

//             {/* Total Employees */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Total Employees</label>
//               <input
//                 type="number"
//                 name="totalEmployees"
//                 value={form.totalEmployees}
//                 onChange={handleChange}
//                 placeholder="0"
//                 className="w-full px-4 py-3 rounded-xl border-2 bg-gray-50 border-gray-200 focus:border-purple-500 focus:outline-none transition-all"
//               />
//             </div>

//             {/* Phone */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
//               <input
//                 name="phone"
//                 value={form.phone}
//                 onChange={handleChange}
//                 placeholder="+1 234 567 890"
//                 className="w-full px-4 py-3 rounded-xl border-2 bg-gray-50 border-gray-200 focus:border-purple-500 focus:outline-none transition-all"
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
//               <input
//                 name="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 placeholder="dept@company.com"
//                 className="w-full px-4 py-3 rounded-xl border-2 bg-gray-50 border-gray-200 focus:border-purple-500 focus:outline-none transition-all"
//               />
//             </div>

//             {/* Description */}
//             <div className="md:col-span-2">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
//               <textarea
//                 name="description"
//                 value={form.description}
//                 onChange={handleChange}
//                 rows="3"
//                 placeholder="Brief overview of department responsibilities..."
//                 className="w-full px-4 py-3 rounded-xl border-2 bg-gray-50 border-gray-200 focus:border-purple-500 focus:outline-none transition-all"
//               />
//             </div>
//           </div>

//           <div className="flex gap-3 pt-4 border-t">
//             <button onClick={handleSubmit} className="flex-1 bg-gradient-to-r from-purple-600 to-violet-600 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] active:scale-95 transition-all shadow-lg">
//               {editData ? "Update Department" : "Add Department"}
//             </button>
//             <button onClick={close} className="px-6 py-3 border-2 border-gray-200 rounded-xl font-semibold hover:bg-gray-50 transition-all">
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// /* ===================== PAGE ===================== */
// const DepartmentPage = () => {
//   const [departments, setDepartments] = useState([
//     {
//       id: 1,
//       deptId: "D-ENG-01",
//       deptName: "Engineering",
//       head: "John Doe",
//       phone: "+1 987 654 321",
//       email: "engineering@tech.com",
//       totalEmployees: 42,
//       description: "Handles core product development and infrastructure.",
//     },
//     {
//       id: 2,
//       deptId: "D-HR-02",
//       deptName: "Human Resources",
//       head: "Sarah Jenkins",
//       phone: "+1 888 123 456",
//       email: "hr@tech.com",
//       totalEmployees: 12,
//       description: "Manages recruitment, payroll, and employee relations.",
//     },
//   ]);

//   const [search, setSearch] = useState("");
//   const [openModal, setOpenModal] = useState(false);
//   const [editData, setEditData] = useState(null);
//   const [selectedDepartment, setSelectedDepartment] = useState(null);
//   const [selectedEmployee, setSelectedEmployee] = useState(null);

//   const handleSave = (data) => {
//     if (editData) {
//       setDepartments(departments.map(d => d.id === data.id ? data : d));
//     } else {
//       setDepartments([...departments, { ...data, id: Date.now() }]);
//     }
//     setOpenModal(false);
//   };

//   const handleEmployeeCountClick = (dept) => {
//     setSelectedDepartment(dept);
//   };

//   const handleEmployeeClick = (employee) => {
//     setSelectedEmployee(employee);
//   };

//   const filtered = departments.filter(d =>
//     d.deptName.toLowerCase().includes(search.toLowerCase()) ||
//     d.deptId.toLowerCase().includes(search.toLowerCase()) ||
//     d.head.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-violet-50 p-4 md:p-8">
//       <div className="max-w-7xl mx-auto">

//         {/* HEADER SECTION */}
//         <div className="bg-white rounded-2xl shadow-lg shadow-purple-100/50 p-6 mb-6 border border-purple-100/50">
//           <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
//             <div className="flex items-center gap-4">
//               <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-violet-600 rounded-xl flex items-center justify-center shadow-lg">
//                 <Building2 className="w-7 h-7 text-white" />
//               </div>
//               <div>
//                 <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
//                   Departments
//                 </h2>
//                 <p className="text-sm text-gray-500 mt-1">{filtered.length} active departments found</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-3">
//               <div className="relative flex-1 lg:w-80">
//                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
//                 <input
//                   type="text"
//                   placeholder="Search ID, name or head..."
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                   className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 bg-white focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all"
//                 />
//               </div>

//               <button
//                 onClick={() => { setEditData(null); setOpenModal(true); }}
//                 className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-violet-500 text-white hover:from-purple-600 hover:to-violet-600 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
//               >
//                 <Plus size={24} />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* DESKTOP TABLE */}
//         <div className="hidden md:block overflow-hidden bg-white rounded-2xl shadow-lg border border-purple-100/50">
//           <div className="overflow-x-auto">
//             <table className="w-full text-sm">
//               <thead>
//                 <tr className="bg-gradient-to-r from-purple-50 to-violet-50 border-b-2 border-purple-100">
//                   <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Department ID</th>
//                   <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Department Name</th>
//                   <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Head of Dept</th>
//                   <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Contact Info</th>
//                   <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Total Employees</th>
//                   <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-100">
//                 {filtered.map(row => (
//                   <tr key={row.id} className="hover:bg-purple-50/50 transition-colors group">
//                     <td className="p-4 font-medium text-gray-700">{row.deptId}</td>
//                     <td className="p-4">
//                       <span className="font-bold text-purple-600 group-hover:text-purple-700">{row.deptName}</span>
//                     </td>
//                     <td className="p-4 text-gray-700 font-medium">{row.head}</td>
//                     <td className="p-4">
//                       <div className="space-y-1">
//                         <div className="flex items-center gap-2 text-gray-600">
//                           <Phone size={14} className="text-purple-400" /> {row.phone}
//                         </div>
//                         <div className="flex items-center gap-2 text-gray-600">
//                           <Mail size={14} className="text-purple-400" /> {row.email}
//                         </div>
//                       </div>
//                     </td>
//                     <td className="p-4">
//                       <div className="flex items-center gap-2">
//                         <button
//                           onClick={() => handleEmployeeCountClick(row)}
//                           className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-lg font-bold flex items-center gap-1 hover:bg-indigo-200 hover:scale-105 transition-all cursor-pointer"
//                         >
//                           <Users size={14} /> {row.totalEmployees}
//                         </button>
//                       </div>
//                     </td>
//                     <td className="p-4">
//                       <div className="flex justify-center gap-3">
//                         <button
//                           onClick={() => { setEditData(row); setOpenModal(true); }}
//                           className="p-2 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
//                         >
//                           <Pencil size={18} />
//                         </button>
//                         <button
//                           onClick={() => setDepartments(departments.filter(d => d.id !== row.id))}
//                           className="p-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
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

//         {/* MOBILE VIEW CARD LIST */}
//         <div className="block md:hidden space-y-4">
//           {filtered.map(row => (
//             <div key={row.id} className="bg-white rounded-2xl shadow-lg p-5 border border-purple-100/50">
//               <div className="flex justify-between items-start mb-4">
//                 <div>
//                   <span className="text-xs font-bold text-gray-400 uppercase">{row.deptId}</span>
//                   <h3 className="text-xl font-bold text-purple-600">{row.deptName}</h3>
//                 </div>
//                 <button
//                   onClick={() => handleEmployeeCountClick(row)}
//                   className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-lg font-bold flex items-center gap-1 hover:bg-indigo-200 active:scale-95 transition-all"
//                 >
//                   <Users size={14} /> {row.totalEmployees}
//                 </button>
//               </div>
              
//               <div className="space-y-2 mb-4">
//                 <div className="flex justify-between text-sm">
//                   <span className="text-gray-500">HOD:</span>
//                   <span className="font-semibold">{row.head}</span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-gray-500">Phone:</span>
//                   <span>{row.phone}</span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-gray-500">Email:</span>
//                   <span className="text-purple-500 italic">{row.email}</span>
//                 </div>
//               </div>

//               <div className="flex gap-3 pt-3 border-t border-gray-100">
//                 <button
//                   onClick={() => { setEditData(row); setOpenModal(true); }}
//                   className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-50 text-blue-600 font-bold"
//                 >
//                   <Pencil size={18} /> Edit
//                 </button>
//                 <button
//                   onClick={() => setDepartments(departments.filter(d => d.id !== row.id))}
//                   className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-red-50 text-red-600 font-bold"
//                 >
//                   <Trash2 size={18} /> Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {filtered.length === 0 && (
//           <div className="bg-white rounded-2xl shadow-lg p-12 text-center border border-purple-100/50 mt-6">
//             <Building2 className="w-16 h-16 text-gray-200 mx-auto mb-4" />
//             <h3 className="text-lg font-semibold text-gray-900 mb-2">No departments found</h3>
//             <p className="text-gray-500">Try adjusting your search criteria or add a new department.</p>
//           </div>
//         )}
//       </div>

//       {openModal && (
//         <DepartmentModal 
//           close={() => setOpenModal(false)} 
//           save={handleSave} 
//           editData={editData} 
//         />
//       )}

//       {selectedDepartment && (
//         <EmployeeListModal
//           department={selectedDepartment}
//           employees={employeesData[selectedDepartment.id] || []}
//           close={() => setSelectedDepartment(null)}
//           onEmployeeClick={handleEmployeeClick}
//         />
//       )}

//       {selectedEmployee && (
//         <EmployeeDetailModal
//           employee={selectedEmployee}
//           close={() => setSelectedEmployee(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default DepartmentPage;

//-------------------------------------------------------------------------------------------------------------
/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect } from "react";
import { Plus, Pencil, Trash2, Search, Building2, AlertCircle, Phone, Mail, Users, X, User, Briefcase, MapPin, Calendar } from "lucide-react";

/* ===================== EMPLOYEE DATA ===================== */
const employeesData = {
  1: [ // Engineering department
    { id: "EMP-001", name: "Alice Johnson", role: "Senior Developer", phone: "+1 234 567 8901", email: "alice.j@tech.com", location: "New York", joinDate: "2020-03-15" },
    { id: "EMP-002", name: "Bob Smith", role: "Frontend Developer", phone: "+1 234 567 8902", email: "bob.s@tech.com", location: "San Francisco", joinDate: "2021-06-20" },
    { id: "EMP-003", name: "Carol White", role: "Backend Developer", phone: "+1 234 567 8903", email: "carol.w@tech.com", location: "Seattle", joinDate: "2019-11-10" },
    { id: "EMP-004", name: "David Brown", role: "DevOps Engineer", phone: "+1 234 567 8904", email: "david.b@tech.com", location: "Austin", joinDate: "2022-01-05" },
  ],
  2: [ // HR department
    { id: "EMP-101", name: "Emma Davis", role: "HR Manager", phone: "+1 234 567 9001", email: "emma.d@tech.com", location: "New York", joinDate: "2018-05-12" },
    { id: "EMP-102", name: "Frank Miller", role: "Recruiter", phone: "+1 234 567 9002", email: "frank.m@tech.com", location: "Boston", joinDate: "2021-09-18" },
    { id: "EMP-103", name: "Grace Lee", role: "HR Coordinator", phone: "+1 234 567 9003", email: "grace.l@tech.com", location: "Chicago", joinDate: "2022-03-22" },
  ],
};

/* ===================== EMPLOYEE DETAIL MODAL ===================== */
const EmployeeDetailModal = ({ employee, close }) => {
  if (!employee) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[60] p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-t-2xl relative">
          <button 
            onClick={close}
            className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-lg transition-all"
          >
            <X size={20} />
          </button>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{employee.name}</h3>
              <p className="text-indigo-100">{employee.id}</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-xl border border-purple-200">
            <div className="flex items-center gap-3 mb-1">
              <Briefcase size={18} className="text-purple-600" />
              <span className="text-sm font-semibold text-gray-600">Role</span>
            </div>
            <p className="text-lg font-bold text-purple-700 ml-7">{employee.role}</p>
          </div>

          <div className="grid grid-cols-1 gap-3">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Phone size={18} className="text-purple-500" />
              <div>
                <p className="text-xs text-gray-500 font-semibold">Phone</p>
                <p className="text-sm font-medium text-gray-800">{employee.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Mail size={18} className="text-purple-500" />
              <div>
                <p className="text-xs text-gray-500 font-semibold">Email</p>
                <p className="text-sm font-medium text-gray-800">{employee.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <MapPin size={18} className="text-purple-500" />
              <div>
                <p className="text-xs text-gray-500 font-semibold">Location</p>
                <p className="text-sm font-medium text-gray-800">{employee.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Calendar size={18} className="text-purple-500" />
              <div>
                <p className="text-xs text-gray-500 font-semibold">Join Date</p>
                <p className="text-sm font-medium text-gray-800">{employee.joinDate}</p>
              </div>
            </div>
          </div>

          <button 
            onClick={close}
            className="w-full mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

/* ===================== EMPLOYEE LIST MODAL ===================== */
const EmployeeListModal = ({ department, employees, close, onEmployeeClick }) => {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[55] p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[85vh] overflow-hidden">
        <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-violet-600 p-6 rounded-t-2xl z-10">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold text-white">
                {department.deptName} - Employees
              </h3>
              <p className="text-purple-100 text-sm mt-1">
                {employees.length} employee{employees.length !== 1 ? 's' : ''} in this department
              </p>
            </div>
            <button 
              onClick={close}
              className="text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-lg transition-all"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(85vh-120px)]">
          <div className="space-y-3">
            {employees.map((emp) => (
              <div
                key={emp.id}
                onClick={() => onEmployeeClick(emp)}
                className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-4 border-2 border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-purple-700 text-lg group-hover:text-purple-900 transition-colors">
                      {emp.name}
                    </h4>
                    <p className="text-xs font-semibold text-gray-500 mb-2">{emp.id}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Briefcase size={14} className="text-purple-400" />
                      <span className="truncate">{emp.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {employees.length === 0 && (
            <div className="text-center py-12">
              <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No employees found in this department</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* ===================== MODAL ===================== */
const DepartmentModal = ({ close, save, editData }) => {
  const [form, setForm] = useState({
    deptId: "",
    deptName: "",
    head: "",
    phone: "",
    email: "",
    totalEmployees: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editData) setForm(editData);
  }, [editData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = () => {
    let newErrors = {};
    if (!form.deptId.trim()) newErrors.deptId = "Required";
    if (!form.deptName.trim()) newErrors.deptName = "Required";
    if (!form.head.trim()) newErrors.head = "Required";
    if (!form.phone.trim()) newErrors.phone = "Required";
    if (!form.email.trim()) newErrors.email = "Required";
    if (!form.totalEmployees) newErrors.totalEmployees = "Required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      save(form);
      close();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-violet-600 p-6 rounded-t-2xl z-10">
          <h3 className="text-2xl font-bold text-white">
            {editData ? "Edit Department" : "Add New Department"}
          </h3>
          <p className="text-purple-100 text-sm mt-1">
            Configure organizational department details and contact info
          </p>
        </div>

        <div className="p-6 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Dept ID */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Department ID</label>
              <input
                name="deptId"
                value={form.deptId}
                onChange={handleChange}
                placeholder="e.g. DEPT-01"
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.deptId ? "border-red-400 focus:ring-red-500/10" : "border-gray-200 focus:border-purple-500 focus:ring-purple-500/10"
                }`}
              />
              {errors.deptId && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/>{errors.deptId}</p>}
            </div>

            {/* Dept Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Department Name</label>
              <input
                name="deptName"
                value={form.deptName}
                onChange={handleChange}
                placeholder="e.g. Engineering"
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.deptName ? "border-red-400 focus:ring-red-500/10" : "border-gray-200 focus:border-purple-500 focus:ring-purple-500/10"
                }`}
              />
              {errors.deptName && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/>{errors.deptName}</p>}
            </div>

            {/* Head */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Head of Department</label>
              <input
                name="head"
                value={form.head}
                onChange={handleChange}
                placeholder="Name of HOD"
                className="w-full px-4 py-3 rounded-xl border-2 bg-gray-50 border-gray-200 focus:border-purple-500 focus:outline-none transition-all"
              />
            </div>

            {/* Total Employees */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Total Employees</label>
              <input
                type="number"
                name="totalEmployees"
                value={form.totalEmployees}
                onChange={handleChange}
                placeholder="0"
                className="w-full px-4 py-3 rounded-xl border-2 bg-gray-50 border-gray-200 focus:border-purple-500 focus:outline-none transition-all"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+1 234 567 890"
                className="w-full px-4 py-3 rounded-xl border-2 bg-gray-50 border-gray-200 focus:border-purple-500 focus:outline-none transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="dept@company.com"
                className="w-full px-4 py-3 rounded-xl border-2 bg-gray-50 border-gray-200 focus:border-purple-500 focus:outline-none transition-all"
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows="3"
                placeholder="Brief overview of department responsibilities..."
                className="w-full px-4 py-3 rounded-xl border-2 bg-gray-50 border-gray-200 focus:border-purple-500 focus:outline-none transition-all"
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4 border-t">
            <button onClick={handleSubmit} className="flex-1 bg-gradient-to-r from-purple-600 to-violet-600 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] active:scale-95 transition-all shadow-lg">
              {editData ? "Update Department" : "Add Department"}
            </button>
            <button onClick={close} className="px-6 py-3 border-2 border-gray-200 rounded-xl font-semibold hover:bg-gray-50 transition-all">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ===================== PAGE ===================== */
const DepartmentPage = () => {
  const [departments, setDepartments] = useState([
    {
      id: 1,
      deptId: "D-ENG-01",
      deptName: "Engineering",
      head: "John Doe",
      phone: "+1 987 654 321",
      email: "engineering@tech.com",
      totalEmployees: 42,
      description: "Handles core product development and infrastructure.",
    },
    {
      id: 2,
      deptId: "D-HR-02",
      deptName: "Human Resources",
      head: "Sarah Jenkins",
      phone: "+1 888 123 456",
      email: "hr@tech.com",
      totalEmployees: 12,
      description: "Manages recruitment, payroll, and employee relations.",
    },
  ]);

  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [editData, setEditData] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleSave = (data) => {
    if (editData) {
      setDepartments(departments.map(d => d.id === data.id ? data : d));
    } else {
      setDepartments([...departments, { ...data, id: Date.now() }]);
    }
    setOpenModal(false);
  };

  const handleEmployeeCountClick = (dept) => {
    setSelectedDepartment(dept);
  };

  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(employee);
  };

  const filtered = departments.filter(d =>
    d.deptName.toLowerCase().includes(search.toLowerCase()) ||
    d.deptId.toLowerCase().includes(search.toLowerCase()) ||
    d.head.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-violet-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">

        {/* HEADER SECTION */}
        <div className="bg-white rounded-2xl shadow-lg shadow-purple-100/50 p-6 mb-6 border border-purple-100/50">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-violet-600 rounded-xl flex items-center justify-center shadow-lg">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                  Departments
                </h2>
                <p className="text-sm text-gray-500 mt-1">{filtered.length} active departments found</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative flex-1 lg:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search ID, name or head..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 bg-white focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all"
                />
              </div>

              <button
                onClick={() => { setEditData(null); setOpenModal(true); }}
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-violet-500 text-white hover:from-purple-600 hover:to-violet-600 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              >
                <Plus size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* DESKTOP TABLE */}
        <div className="hidden md:block overflow-hidden bg-white rounded-2xl shadow-lg border border-purple-100/50">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-purple-50 to-violet-50 border-b-2 border-purple-100">
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Department ID</th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Department Name</th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Head of Dept</th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Contact Info</th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Total Employees</th>
                  <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filtered.map(row => (
                  <tr key={row.id} className="hover:bg-purple-50/50 transition-colors group">
                    <td className="p-4 font-medium text-gray-700">{row.deptId}</td>
                    <td className="p-4">
                      <span className="font-bold text-purple-600 group-hover:text-purple-700">{row.deptName}</span>
                    </td>
                    <td className="p-4 text-gray-700 font-medium">{row.head}</td>
                    <td className="p-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Phone size={14} className="text-purple-400" /> {row.phone}
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Mail size={14} className="text-purple-400" /> {row.email}
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleEmployeeCountClick(row)}
                          className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-lg font-bold flex items-center gap-1 hover:bg-indigo-200 hover:scale-105 transition-all cursor-pointer"
                        >
                          <Users size={14} /> {row.totalEmployees}
                        </button>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex justify-center gap-3">
                        <button
                          onClick={() => { setEditData(row); setOpenModal(true); }}
                          className="p-2 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
                        >
                          <Pencil size={18} />
                        </button>
                        <button
                          onClick={() => setDepartments(departments.filter(d => d.id !== row.id))}
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

        {/* MOBILE VIEW CARD LIST */}
        <div className="block md:hidden space-y-4">
          {filtered.map(row => (
            <div key={row.id} className="bg-white rounded-2xl shadow-lg p-5 border border-purple-100/50">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase">{row.deptId}</span>
                  <h3 className="text-xl font-bold text-purple-600">{row.deptName}</h3>
                </div>
                <button
                  onClick={() => handleEmployeeCountClick(row)}
                  className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-lg font-bold flex items-center gap-1 hover:bg-indigo-200 active:scale-95 transition-all"
                >
                  <Users size={14} /> {row.totalEmployees}
                </button>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">HOD:</span>
                  <span className="font-semibold">{row.head}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Phone:</span>
                  <span>{row.phone}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Email:</span>
                  <span className="text-purple-500 italic">{row.email}</span>
                </div>
              </div>

              <div className="flex gap-3 pt-3 border-t border-gray-100">
                <button
                  onClick={() => { setEditData(row); setOpenModal(true); }}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-50 text-blue-600 font-bold"
                >
                  <Pencil size={18} /> Edit
                </button>
                <button
                  onClick={() => setDepartments(departments.filter(d => d.id !== row.id))}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-red-50 text-red-600 font-bold"
                >
                  <Trash2 size={18} /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center border border-purple-100/50 mt-6">
            <Building2 className="w-16 h-16 text-gray-200 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No departments found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or add a new department.</p>
          </div>
        )}
      </div>

      {openModal && (
        <DepartmentModal 
          close={() => setOpenModal(false)} 
          save={handleSave} 
          editData={editData} 
        />
      )}

      {selectedDepartment && (
        <EmployeeListModal
          department={selectedDepartment}
          employees={employeesData[selectedDepartment.id] || []}
          close={() => setSelectedDepartment(null)}
          onEmployeeClick={handleEmployeeClick}
        />
      )}

      {selectedEmployee && (
        <EmployeeDetailModal
          employee={selectedEmployee}
          close={() => setSelectedEmployee(null)}
        />
      )}
    </div>
  );
};

export default DepartmentPage;