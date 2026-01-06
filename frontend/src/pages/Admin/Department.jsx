// import React, { useState, useEffect } from "react";
// import { Plus, Pencil, Trash2, Search, CalendarDays, AlertCircle, Info } from "lucide-react";

// // Helper to format YYYY-MM-DD to DD/MM/YYYY
// const formatDate = (dateStr) => {
//   if (!dateStr) return "";
//   const [year, month, day] = dateStr.split("-");
//   return `${day}/${month}/${year}`;
// };

// // Helper to format DD/MM/YYYY to YYYY-MM-DD
// const toISO = (date) => {
//   if (!date) return "";
//   const [d, m, y] = date.split("/");
//   return `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`;
// };

// const HolidayModal = ({ close, save, editData }) => {
//   const [form, setForm] = useState({
//     date: "",
//     holidayName: "",
//     shift: "",
//     holidayType: "",
//     creationDate: new Date().toISOString().split("T")[0],
//     details: "",
//   });
//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     if (editData) {
//       setForm({
//         ...editData,
//         date: toISO(editData.date),
//         creationDate: toISO(editData.creationDate),
//       });
//     }
//   }, [editData]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//     if (errors[name]) setErrors({ ...errors, [name]: "" });
//   };

//   const handleSubmit = () => {
//     let newErrors = {};
//     if (!form.date) newErrors.date = "Required";
//     if (!form.holidayName.trim()) newErrors.holidayName = "Required";
//     if (!form.shift) newErrors.shift = "Required";
//     if (!form.holidayType) newErrors.holidayType = "Required";

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       save({
//         ...form,
//         date: formatDate(form.date),
//         creationDate: formatDate(form.creationDate),
//       });
//       close();
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//         <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-violet-600 p-6 rounded-t-2xl">
//           <h3 className="text-2xl font-bold text-white">
//             {editData ? "Edit Holiday" : "Add New Holiday"}
//           </h3>
//           <p className="text-purple-100 text-sm mt-1">
//             {editData ? "Update holiday details" : "Schedule a new holiday in the calendar"}
//           </p>
//         </div>
        
//         <div className="p-6 space-y-5">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//             {/* Holiday Name */}
//             <div className="md:col-span-2">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Holiday Name</label>
//               <input
//                 type="text"
//                 name="holidayName"
//                 value={form.holidayName}
//                 onChange={handleChange}
//                 placeholder="e.g. New Year's Day"
//                 className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
//                   errors.holidayName ? "border-red-400 focus:ring-red-500/10" : "border-gray-200 focus:border-purple-500 focus:ring-purple-500/10"
//                 }`}
//               />
//               {errors.holidayName && <div className="text-red-600 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/>{errors.holidayName}</div>}
//             </div>

//             {/* Date */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Holiday Date</label>
//               <input
//                 type="date"
//                 name="date"
//                 value={form.date}
//                 onChange={handleChange}
//                 className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 transition-all ${
//                   errors.date ? "border-red-400" : "border-gray-200 focus:border-purple-500"
//                 }`}
//               />
//               {errors.date && <div className="text-red-600 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/>{errors.date}</div>}
//             </div>

//             {/* Creation Date (Read Only or current) */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Creation Date</label>
//               <input
//                 type="date"
//                 name="creationDate"
//                 value={form.creationDate}
//                 readOnly
//                 className="w-full px-4 py-3 rounded-xl border-2 bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed"
//               />
//             </div>

//             {/* Shift */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Shift</label>
//               <select
//                 name="shift"
//                 value={form.shift}
//                 onChange={handleChange}
//                 className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 transition-all ${
//                   errors.shift ? "border-red-400" : "border-gray-200 focus:border-purple-500"
//                 }`}
//               >
//                 <option value="">Select Shift</option>
//                 <option>All Shifts</option>
//                 <option>Day Shifts</option>
//                 <option>Night Shifts</option>
//               </select>
//             </div>

//             {/* Holiday Type */}
//             {/* <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Holiday Type</label>
//               <select
//                 name="holidayType"
//                 value={form.holidayType}
//                 onChange={handleChange}
//                 className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 transition-all ${
//                   errors.holidayType ? "border-red-400" : "border-gray-200 focus:border-purple-500"
//                 }`}
//               >
//                 <option value="">Select Type</option>
//                 <option>Public Holiday</option>
//                 <option>Company Holiday</option>
//                 <option>Optional Holiday</option>
//               </select>
//             </div> */}

//             <div className="md:col-span-2">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Holiday Type</label>
//               <input
//                 type="text"
//                 name="holidayType"
//                 value={form.holidayType}
//                 onChange={handleChange}
//                 placeholder="e.g. National Holiday"
//                 className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
//                   errors.holidayType ? "border-red-400 focus:ring-red-500/10" : "border-gray-200 focus:border-purple-500 focus:ring-purple-500/10"
//                 }`}
//               />
//               {errors.holidayType && <div className="text-red-600 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/>{errors.holidayType}</div>}
//             </div>

//             {/* Details */}
//             <div className="md:col-span-2">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Details</label>
//               <textarea
//                 name="details"
//                 value={form.details}
//                 onChange={handleChange}
//                 rows="3"
//                 placeholder="Additional information about the holiday..."
//                 className="w-full px-4 py-3 rounded-xl border-2 bg-gray-50 border-gray-200 focus:border-purple-500 focus:outline-none transition-all"
//               />
//             </div>
//           </div>
          
//           <div className="flex gap-3 pt-4 border-t">
//             <button onClick={handleSubmit} className="flex-1 bg-gradient-to-r from-purple-600 to-violet-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all shadow-lg">
//               {editData ? "Update Holiday" : "Add Holiday"}
//             </button>
//             <button onClick={close} className="px-6 py-3 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all">
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const HolidayPage = () => {
//   const [selectedIds, setSelectedIds] = useState([]);
//   const [search, setSearch] = useState("");
//   const [openModal, setOpenModal] = useState(false);
//   const [editData, setEditData] = useState(null);

//   const [holidays, setHolidays] = useState([
//     {
//       id: 1,
//       date: "01/01/2026",
//       holidayName: "New Year's Day",
//       shift: "All Shifts",
//       holidayType: "Public Holiday",
//       creationDate: "01/12/2025",
//       details: "Annual celebration of the new year.",
//     },
//     {
//       id: 2,
//       date: "26/01/2026",
//       holidayName: "Republic Day",
//       shift: "All Shifts",
//       holidayType: "Public Holiday",
//       creationDate: "05/01/2026",
//       details: "National holiday commemorating the Constitution.",
//     },
//   ]);

//   const handleSave = (data) => {
//     if (editData) {
//       setHolidays(holidays.map((h) => (h.id === data.id ? data : h)));
//     } else {
//       setHolidays([...holidays, { ...data, id: Date.now() }]);
//     }
//     setOpenModal(false);
//   };

//   const filteredHolidays = holidays.filter((h) => {
//     const s = search.toLowerCase();
//     return h.holidayName.toLowerCase().includes(s) || h.holidayType.toLowerCase().includes(s) || h.date.includes(s);
//   });

//   const Item = ({ label, value }) => (
//     <div className="flex justify-between border-b pb-1 text-sm">
//       <span className="font-medium">{label}:</span>
//       <span className="text-gray-700">{value || "N/A"}</span>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-violet-50 p-4 md:p-8">
//       <div className="max-w-7xl mx-auto">
//         {/* HEADER BAR */}
//         <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-purple-100/50">
//           <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
//             <div className="flex items-center gap-4">
//               <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-violet-600 rounded-xl flex items-center justify-center shadow-lg">
//                 <CalendarDays className="w-7 h-7 text-white" />
//               </div>
//               <div>
//                 <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">All Departments</h2>
//                 <p className="text-sm text-gray-500 mt-1">{filteredHolidays.length} Holidays scheduled</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-3">
//               <div className="relative flex-1 lg:w-80">
//                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
//                 <input
//                   type="text"
//                   placeholder="Search holiday name, type..."
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                   className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 transition-all"
//                 />
//               </div>
//               <button onClick={() => { setEditData(null); setOpenModal(true); }} className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-violet-500 text-white hover:scale-105 shadow-lg transition-all">
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
//                 <tr className="bg-purple-50 border-b-2 border-purple-100">
//                   <th className="p-4 text-left">
//                     <input 
//                        type="checkbox" 
//                        onChange={(e) => setSelectedIds(e.target.checked ? filteredHolidays.map(h => h.id) : [])}
//                        checked={selectedIds.length === filteredHolidays.length && filteredHolidays.length > 0}
//                        className="w-4 h-4 rounded text-purple-600"
//                     />
//                   </th>
//                   <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase">Date</th>
//                   <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase">Holiday Name</th>
//                   <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase">Shift</th>
//                   <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase">Type</th>
//                   <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase">Creation Date</th>
//                   <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase">Details</th>
//                   <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-100">
//                 {filteredHolidays.map((row) => (
//                   <tr key={row.id} className="hover:bg-purple-50/50 transition-colors group">
//                     <td className="p-4">
//                       <input 
//                         type="checkbox" 
//                         checked={selectedIds.includes(row.id)}
//                         onChange={() => setSelectedIds(prev => prev.includes(row.id) ? prev.filter(id => id !== row.id) : [...prev, row.id])}
//                         className="w-4 h-4 rounded text-purple-600"
//                       />
//                     </td>
//                     <td className="p-4 font-semibold text-gray-700">{row.date}</td>
//                     <td className="p-4 font-bold text-purple-600">{row.holidayName}</td>
//                     <td className="p-4"><span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg text-xs">{row.shift}</span></td>
//                     <td className="p-4 text-gray-700">{row.holidayType}</td>
//                     <td className="p-4 text-gray-500">{row.creationDate}</td>
//                     <td className="p-4 text-gray-600 max-w-xs truncate">{row.details}</td>
//                     <td className="p-4">
//                       <div className="flex gap-2">
//                         <button onClick={() => { setEditData(row); setOpenModal(true); }} className="text-blue-600 hover:bg-blue-50 p-2 rounded-lg"><Pencil size={18}/></button>
//                         <button onClick={() => setHolidays(holidays.filter(h => h.id !== row.id))} className="text-red-600 hover:bg-red-50 p-2 rounded-lg"><Trash2 size={18}/></button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* MOBILE VIEW */}
//         <div className="block md:hidden space-y-4">
//           {filteredHolidays.map((row) => (
//             <div key={row.id} className="bg-white rounded-2xl shadow-lg p-5 border border-purple-100/50">
//               <div className="flex justify-between items-start mb-3">
//                 <div>
//                   <h3 className="font-bold text-purple-600 text-lg">{row.holidayName}</h3>
//                   <p className="text-sm text-gray-500">{row.date}</p>
//                 </div>
//                 <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs">{row.shift}</span>
//               </div>
//               <div className="space-y-2 mb-4">
//                 <Item label="Type" value={row.holidayType} />
//                 <Item label="Created" value={row.creationDate} />
//                 <div className="text-sm text-gray-600 mt-2 bg-gray-50 p-2 rounded-lg flex gap-2">
//                     <Info size={16} className="shrink-0 text-purple-400" />
//                     {row.details}
//                 </div>
//               </div>
//               <div className="flex gap-3 border-t pt-3">
//                 <button onClick={() => { setEditData(row); setOpenModal(true); }} className="flex-1 flex justify-center py-2 bg-blue-50 text-blue-600 rounded-xl font-semibold"><Pencil size={18} className="mr-2"/>Edit</button>
//                 <button onClick={() => setHolidays(holidays.filter(h => h.id !== row.id))} className="flex-1 flex justify-center py-2 bg-red-50 text-red-600 rounded-xl font-semibold"><Trash2 size={18} className="mr-2"/>Delete</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {openModal && <HolidayModal close={() => setOpenModal(false)} save={handleSave} editData={editData} />}
//     </div>
//   );
// };

// export default Department;












// import React, { useState, useEffect } from "react";
// import { Plus, Pencil, Trash2, Search, Building2, AlertCircle, Info } from "lucide-react";

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
//     if (!form.deptId) newErrors.deptId = "Required";
//     if (!form.deptName.trim()) newErrors.deptName = "Required";
//     if (!form.head.trim()) newErrors.head = "Required";
//     if (!form.phone) newErrors.phone = "Required";
//     if (!form.email) newErrors.email = "Required";
//     if (!form.totalEmployees) newErrors.totalEmployees = "Required";

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       save(form);
//       close();
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl">
//         <div className="bg-gradient-to-r from-purple-600 to-violet-600 p-6 rounded-t-2xl">
//           <h3 className="text-2xl font-bold text-white">
//             {editData ? "Edit Department" : "Add Department"}
//           </h3>
//         </div>

//         <div className="p-6 space-y-5">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

//             {/* Dept ID */}
//             <div>
//               <label className="text-sm font-semibold">Dept ID</label>
//               <input
//                 name="deptId"
//                 value={form.deptId}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 rounded-xl border-2 bg-gray-50"
//               />
//               {errors.deptId && <p className="text-red-500 text-xs">{errors.deptId}</p>}
//             </div>

//             {/* Dept Name */}
//             <div>
//               <label className="text-sm font-semibold">Dept Name</label>
//               <input
//                 name="deptName"
//                 value={form.deptName}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 rounded-xl border-2 bg-gray-50"
//               />
//             </div>

//             {/* Head */}
//             <div>
//               <label className="text-sm font-semibold">Head of Dept</label>
//               <input
//                 name="head"
//                 value={form.head}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 rounded-xl border-2 bg-gray-50"
//               />
//             </div>

//             {/* Phone */}
//             <div>
//               <label className="text-sm font-semibold">Phone</label>
//               <input
//                 name="phone"
//                 value={form.phone}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 rounded-xl border-2 bg-gray-50"
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label className="text-sm font-semibold">Email</label>
//               <input
//                 name="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 rounded-xl border-2 bg-gray-50"
//               />
//             </div>

//             {/* Total Employees */}
//             <div>
//               <label className="text-sm font-semibold">Total Employees</label>
//               <input
//                 name="totalEmployees"
//                 value={form.totalEmployees}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 rounded-xl border-2 bg-gray-50"
//               />
//             </div>

//             {/* Description */}
//             <div className="md:col-span-2">
//               <label className="text-sm font-semibold">Description</label>
//               <textarea
//                 name="description"
//                 value={form.description}
//                 onChange={handleChange}
//                 rows="3"
//                 className="w-full px-4 py-3 rounded-xl border-2 bg-gray-50"
//               />
//             </div>
//           </div>

//           <div className="flex gap-3 pt-4 border-t">
//             <button onClick={handleSubmit} className="flex-1 bg-purple-600 text-white py-3 rounded-xl">
//               {editData ? "Update" : "Add"}
//             </button>
//             <button onClick={close} className="px-6 py-3 border rounded-xl">Cancel</button>
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
//       deptId: "D001",
//       deptName: "Engineering",
//       head: "John Doe",
//       phone: "9876543210",
//       email: "eng@company.com",
//       totalEmployees: 25,
//       description: "Handles product development",
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
//   };

//   const filtered = departments.filter(d =>
//     d.deptName.toLowerCase().includes(search.toLowerCase()) ||
//     d.deptId.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-violet-50 p-6">
//       <div className="max-w-7xl mx-auto">

//         {/* HEADER */}
//         <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 flex justify-between">
//           <div className="flex items-center gap-4">
//             <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center">
//               <Building2 className="text-white" />
//             </div>
//             <div>
//               <h2 className="text-3xl font-bold text-purple-600">Departments</h2>
//               <p className="text-sm text-gray-500">{filtered.length} Departments</p>
//             </div>
//           </div>

//           <div className="flex gap-3">
//             <div className="relative">
//               <Search className="absolute left-3 top-3 text-gray-400" />
//               <input
//                 placeholder="Search department..."
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="pl-10 pr-4 py-2 border rounded-xl"
//               />
//             </div>
//             <button onClick={() => { setEditData(null); setOpenModal(true); }} className="bg-purple-600 text-white w-12 h-12 rounded-xl flex items-center justify-center">
//               <Plus />
//             </button>
//           </div>
//         </div>

//         {/* TABLE */}
//         <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">
//           <table className="w-full text-sm">
//             <thead className="bg-purple-50">
//               <tr>
//                 <th className="p-4 text-left">Dept ID</th>
//                 <th className="p-4 text-left">Dept Name</th>
//                 <th className="p-4 text-left">Head</th>
//                 <th className="p-4 text-left">Phone</th>
//                 <th className="p-4 text-left">Email</th>
//                 <th className="p-4 text-left">Employees</th>
//                 <th className="p-4">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filtered.map(row => (
//                 <tr key={row.id} className="border-t hover:bg-purple-50">
//                   <td className="p-4">{row.deptId}</td>
//                   <td className="p-4 font-semibold text-purple-600">{row.deptName}</td>
//                   <td className="p-4">{row.head}</td>
//                   <td className="p-4">{row.phone}</td>
//                   <td className="p-4">{row.email}</td>
//                   <td className="p-4">{row.totalEmployees}</td>
//                   <td className="p-4 flex gap-2">
//                     <button onClick={() => { setEditData(row); setOpenModal(true); }} className="text-blue-600"><Pencil /></button>
//                     <button onClick={() => setDepartments(departments.filter(d => d.id !== row.id))} className="text-red-600"><Trash2 /></button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//       </div>

//       {openModal && <DepartmentModal close={() => setOpenModal(false)} save={handleSave} editData={editData} />}
//     </div>
//   );
// };

// export default DepartmentPage;

//-------------------------------------------------------------------------------------------------------------------------

import React, { useState, useEffect } from "react";
import { Plus, Pencil, Trash2, Search, Building2, AlertCircle, Phone, Mail, Users } from "lucide-react";

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

  const handleSave = (data) => {
    if (editData) {
      setDepartments(departments.map(d => d.id === data.id ? data : d));
    } else {
      setDepartments([...departments, { ...data, id: Date.now() }]);
    }
    setOpenModal(false);
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
                        <div className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-lg font-bold flex items-center gap-1">
                          <Users size={14} /> {row.totalEmployees}
                        </div>
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
                <div className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-lg font-bold flex items-center gap-1">
                  <Users size={14} /> {row.totalEmployees}
                </div>
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
    </div>
  );
};

export default DepartmentPage;
