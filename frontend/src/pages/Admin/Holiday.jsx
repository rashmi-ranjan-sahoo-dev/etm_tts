// import React, { useState, useEffect } from "react";
// import { Plus, Pencil, Trash2, Search, CalendarDays, AlertCircle, Info, ChevronLeft, ChevronRight } from "lucide-react";

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

// const HolidayCalendar = ({ holidays }) => {
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [hoveredDate, setHoveredDate] = useState(null);

//   const year = currentDate.getFullYear();
//   const month = currentDate.getMonth();

//   const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//   const daysInMonth = new Date(year, month + 1, 0).getDate();
//   const firstDayOfMonth = new Date(year, month, 1).getDay();

//   const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
//   const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

//   const getHolidaysForDate = (day) => {
//     const dateStr = `${String(day).padStart(2, '0')}/${String(month + 1).padStart(2, '0')}/${year}`;
//     return holidays.filter(h => h.date === dateStr);
//   };

//   const days = [];
//   for (let i = 0; i < firstDayOfMonth; i++) {
//     days.push(<div key={`empty-${i}`} className="h-16"></div>);
//   }

//   for (let day = 1; day <= daysInMonth; day++) {
//     const dayHolidays = getHolidaysForDate(day);
//     const hasHoliday = dayHolidays.length > 0;
//     const isToday = new Date().getDate() === day && new Date().getMonth() === month && new Date().getFullYear() === year;

//     days.push(
//       <div
//         key={day}
//         className={`relative h-16 border border-gray-100 p-1.5 transition-all ${
//           hasHoliday ? "bg-gradient-to-br from-purple-50 to-violet-50 hover:from-purple-100 hover:to-violet-100 cursor-pointer" : "bg-white hover:bg-gray-50"
//         } ${isToday ? "ring-2 ring-purple-500" : ""}`}
//         onMouseEnter={() => hasHoliday && setHoveredDate(day)}
//         onMouseLeave={() => setHoveredDate(null)}
//       >
//         <div className={`text-xs font-semibold ${hasHoliday ? "text-purple-600" : "text-gray-700"} ${isToday ? "bg-purple-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px]" : ""}`}>
//           {day}
//         </div>
//         {hasHoliday && (
//           <div className="mt-0.5 space-y-0.5">
//             {dayHolidays.slice(0, 1).map((h, idx) => (
//               <div key={idx} className="text-[10px] font-medium text-purple-700 truncate bg-purple-200/50 px-1 rounded">
//                 {h.holidayName}
//               </div>
//             ))}
//             {dayHolidays.length > 1 && (
//               <div className="text-[10px] text-purple-600">+{dayHolidays.length - 1}</div>
//             )}
//           </div>
//         )}
        
//         {/* Tooltip */}
//         {hoveredDate === day && hasHoliday && (
//           <div className="absolute z-50 left-full ml-2 top-0 w-64 bg-white rounded-xl shadow-2xl border-2 border-purple-200 p-3">
//             {dayHolidays.map((h, idx) => (
//               <div key={idx} className={`${idx > 0 ? 'mt-2 pt-2 border-t border-gray-200' : ''}`}>
//                 <div className="font-bold text-purple-600 mb-1 text-sm">{h.holidayName}</div>
//                 <div className="text-xs text-gray-600 space-y-1">
//                   <div><span className="font-semibold">Type:</span> {h.holidayType}</div>
//                   <div><span className="font-semibold">Shift:</span> {h.shift}</div>
//                   {h.details && <div className="text-gray-500 mt-1 italic">{h.details}</div>}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white rounded-2xl shadow-lg p-4 border border-purple-100/50 sticky top-4">
//       <div className="flex items-center justify-between mb-4">
//         <h3 className="text-lg font-bold text-gray-800">Calendar</h3>
//         <div className="flex items-center gap-2">
//           <button onClick={prevMonth} className="p-1.5 hover:bg-purple-50 rounded-lg transition-colors">
//             <ChevronLeft className="text-purple-600" size={18} />
//           </button>
//           <span className="text-sm font-semibold text-gray-700 min-w-[140px] text-center">
//             {monthNames[month]} {year}
//           </span>
//           <button onClick={nextMonth} className="p-1.5 hover:bg-purple-50 rounded-lg transition-colors">
//             <ChevronRight className="text-purple-600" size={18} />
//           </button>
//         </div>
//       </div>
      
//       <div className="grid grid-cols-7 gap-0">
//         {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
//           <div key={day} className="text-center font-bold text-[10px] text-gray-600 py-1.5 bg-gray-50">
//             {day}
//           </div>
//         ))}
//         {days}
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
//                 <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">Holiday List</h2>
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

//         {/* MAIN CONTENT - SIDE BY SIDE LAYOUT */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
//           {/* LEFT SIDE - CALENDAR */}
//           <div className="lg:col-span-4">
//             <HolidayCalendar holidays={holidays} />
//           </div>

//           {/* RIGHT SIDE - HOLIDAY LIST */}
//           <div className="lg:col-span-8">
//             {/* DESKTOP TABLE */}
//             <div className="hidden md:block bg-white rounded-2xl shadow-lg border border-purple-100/50">
//           <div className="overflow-x-auto">
//             <table className="w-full text-sm relative">
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
//                   <tr key={row.id} className="hover:bg-purple-50/50 transition-colors">
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
//                     <td className="p-4 text-gray-600 max-w-xs relative">
//                       <div className="relative group">
//                         <div className="truncate cursor-help">
//                           {row.details || "N/A"}
//                         </div>
//                         {row.details && (
//                           <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 absolute left-0 top-full mt-2 z-[999] bg-white rounded-xl shadow-2xl border-2 border-purple-300 p-4 min-w-[320px] max-w-[480px] pointer-events-none">
//                             <div className="font-semibold text-purple-600 mb-2 flex items-center gap-2">
//                               <Info size={16} />
//                               Full Details
//                             </div>
//                             <div className="text-sm text-gray-700 leading-relaxed whitespace-normal break-words">
//                               {row.details}
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     </td>
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

//             {/* MOBILE VIEW */}
//             <div className="block md:hidden space-y-4">
//               {filteredHolidays.map((row) => (
//                 <div key={row.id} className="bg-white rounded-2xl shadow-lg p-5 border border-purple-100/50">
//                   <div className="flex justify-between items-start mb-3">
//                     <div>
//                       <h3 className="font-bold text-purple-600 text-lg">{row.holidayName}</h3>
//                       <p className="text-sm text-gray-500">{row.date}</p>
//                     </div>
//                     <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs">{row.shift}</span>
//                   </div>
//                   <div className="space-y-2 mb-4">
//                     <Item label="Type" value={row.holidayType} />
//                     <Item label="Created" value={row.creationDate} />
//                     <div className="text-sm text-gray-600 mt-2 bg-gray-50 p-2 rounded-lg flex gap-2">
//                         <Info size={16} className="shrink-0 text-purple-400" />
//                         {row.details}
//                     </div>
//                   </div>
//                   <div className="flex gap-3 border-t pt-3">
//                     <button onClick={() => { setEditData(row); setOpenModal(true); }} className="flex-1 flex justify-center py-2 bg-blue-50 text-blue-600 rounded-xl font-semibold"><Pencil size={18} className="mr-2"/>Edit</button>
//                     <button onClick={() => setHolidays(holidays.filter(h => h.id !== row.id))} className="flex-1 flex justify-center py-2 bg-red-50 text-red-600 rounded-xl font-semibold"><Trash2 size={18} className="mr-2"/>Delete</button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {openModal && <HolidayModal close={() => setOpenModal(false)} save={handleSave} editData={editData} />}
//     </div>
//   );
// };

// export default HolidayPage;

//------------------------------------------------------------------------------------------------------------------

import React, { useState, useEffect } from "react";
import { Plus, Pencil, Trash2, Search, CalendarDays, AlertCircle, Info, ChevronLeft, ChevronRight, Calendar, X } from "lucide-react";

// Helper to format YYYY-MM-DD to DD/MM/YYYY
const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const [year, month, day] = dateStr.split("-");
  return `${day}/${month}/${year}`;
};

// Helper to format DD/MM/YYYY to YYYY-MM-DD
const toISO = (date) => {
  if (!date) return "";
  const [d, m, y] = date.split("/");
  return `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`;
};

const HolidayModal = ({ close, save, editData }) => {
  const [form, setForm] = useState({
    date: "",
    holidayName: "",
    shift: "",
    holidayType: "",
    creationDate: new Date().toISOString().split("T")[0],
    details: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editData) {
      setForm({
        ...editData,
        date: toISO(editData.date),
        creationDate: toISO(editData.creationDate),
      });
    }
  }, [editData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = () => {
    let newErrors = {};
    if (!form.date) newErrors.date = "Required";
    if (!form.holidayName.trim()) newErrors.holidayName = "Required";
    if (!form.shift) newErrors.shift = "Required";
    if (!form.holidayType) newErrors.holidayType = "Required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      save({
        ...form,
        date: formatDate(form.date),
        creationDate: formatDate(form.creationDate),
      });
      close();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-violet-600 p-6 rounded-t-2xl">
          <h3 className="text-2xl font-bold text-white">
            {editData ? "Edit Holiday" : "Add New Holiday"}
          </h3>
          <p className="text-purple-100 text-sm mt-1">
            {editData ? "Update holiday details" : "Schedule a new holiday in the calendar"}
          </p>
        </div>
        
        <div className="p-6 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Holiday Name */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Holiday Name</label>
              <input
                type="text"
                name="holidayName"
                value={form.holidayName}
                onChange={handleChange}
                placeholder="e.g. New Year's Day"
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.holidayName ? "border-red-400 focus:ring-red-500/10" : "border-gray-200 focus:border-purple-500 focus:ring-purple-500/10"
                }`}
              />
              {errors.holidayName && <div className="text-red-600 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/>{errors.holidayName}</div>}
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Holiday Date</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 transition-all ${
                  errors.date ? "border-red-400" : "border-gray-200 focus:border-purple-500"
                }`}
              />
              {errors.date && <div className="text-red-600 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/>{errors.date}</div>}
            </div>

            {/* Creation Date (Read Only or current) */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Creation Date</label>
              <input
                type="date"
                name="creationDate"
                value={form.creationDate}
                readOnly
                className="w-full px-4 py-3 rounded-xl border-2 bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed"
              />
            </div>

            {/* Shift */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Shift</label>
              <select
                name="shift"
                value={form.shift}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 transition-all ${
                  errors.shift ? "border-red-400" : "border-gray-200 focus:border-purple-500"
                }`}
              >
                <option value="">Select Shift</option>
                <option>All Shifts</option>
                <option>Day Shifts</option>
                <option>Night Shifts</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Holiday Type</label>
              <input
                type="text"
                name="holidayType"
                value={form.holidayType}
                onChange={handleChange}
                placeholder="e.g. National Holiday"
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.holidayType ? "border-red-400 focus:ring-red-500/10" : "border-gray-200 focus:border-purple-500 focus:ring-purple-500/10"
                }`}
              />
              {errors.holidayType && <div className="text-red-600 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/>{errors.holidayType}</div>}
            </div>

            {/* Details */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Details</label>
              <textarea
                name="details"
                value={form.details}
                onChange={handleChange}
                rows="3"
                placeholder="Additional information about the holiday..."
                className="w-full px-4 py-3 rounded-xl border-2 bg-gray-50 border-gray-200 focus:border-purple-500 focus:outline-none transition-all"
              />
            </div>
          </div>
          
          <div className="flex gap-3 pt-4 border-t">
            <button onClick={handleSubmit} className="flex-1 bg-gradient-to-r from-purple-600 to-violet-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all shadow-lg">
              {editData ? "Update Holiday" : "Add Holiday"}
            </button>
            <button onClick={close} className="px-6 py-3 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const HolidayCalendar = ({ holidays }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [hoveredDate, setHoveredDate] = useState(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const getHolidaysForDate = (day) => {
    const dateStr = `${String(day).padStart(2, '0')}/${String(month + 1).padStart(2, '0')}/${year}`;
    return holidays.filter(h => h.date === dateStr);
  };

  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="h-20"></div>);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayHolidays = getHolidaysForDate(day);
    const hasHoliday = dayHolidays.length > 0;
    const isToday = new Date().getDate() === day && new Date().getMonth() === month && new Date().getFullYear() === year;

    days.push(
      <div
        key={day}
        className={`relative h-20 border border-gray-100 p-2 transition-all ${
          hasHoliday ? "bg-gradient-to-br from-purple-50 to-violet-50 hover:from-purple-100 hover:to-violet-100 cursor-pointer" : "bg-white hover:bg-gray-50"
        } ${isToday ? "ring-2 ring-purple-500" : ""}`}
        onMouseEnter={() => hasHoliday && setHoveredDate(day)}
        onMouseLeave={() => setHoveredDate(null)}
      >
        <div className={`text-sm font-semibold ${hasHoliday ? "text-purple-600" : "text-gray-700"} ${isToday ? "bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs" : ""}`}>
          {day}
        </div>
        {hasHoliday && (
          <div className="mt-1 space-y-1">
            {dayHolidays.slice(0, 2).map((h, idx) => (
              <div key={idx} className="text-xs font-medium text-purple-700 truncate bg-purple-200/50 px-1 rounded">
                {h.holidayName}
              </div>
            ))}
            {dayHolidays.length > 2 && (
              <div className="text-xs text-purple-600">+{dayHolidays.length - 2} more</div>
            )}
          </div>
        )}
        
        {/* Tooltip */}
        {hoveredDate === day && hasHoliday && (
          <div className="absolute z-50 top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border-2 border-purple-200 p-4">
            {dayHolidays.map((h, idx) => (
              <div key={idx} className={`${idx > 0 ? 'mt-3 pt-3 border-t border-gray-200' : ''}`}>
                <div className="font-bold text-purple-600 mb-1">{h.holidayName}</div>
                <div className="text-xs text-gray-600 space-y-1">
                  <div><span className="font-semibold">Type:</span> {h.holidayType}</div>
                  <div><span className="font-semibold">Shift:</span> {h.shift}</div>
                  {h.details && <div className="text-gray-500 mt-2 italic">{h.details}</div>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-800">Holiday Calendar</h3>
        <div className="flex items-center gap-4">
          <button onClick={prevMonth} className="p-2 hover:bg-purple-50 rounded-lg transition-colors">
            <ChevronLeft className="text-purple-600" size={20} />
          </button>
          <span className="text-lg font-semibold text-gray-700 min-w-[180px] text-center">
            {monthNames[month]} {year}
          </span>
          <button onClick={nextMonth} className="p-2 hover:bg-purple-50 rounded-lg transition-colors">
            <ChevronRight className="text-purple-600" size={20} />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-0">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-bold text-xs text-gray-600 py-2 bg-gray-50">
            {day}
          </div>
        ))}
        {days}
      </div>
    </div>
  );
};

const CalendarModal = ({ holidays, close }) => {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-violet-600 p-6 rounded-t-2xl z-10 flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold text-white">Holiday Calendar</h3>
            <p className="text-purple-100 text-sm mt-1">Visual overview of all scheduled holidays</p>
          </div>
          <button 
            onClick={close}
            className="text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-lg transition-all"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <HolidayCalendar holidays={holidays} />
        </div>
      </div>
    </div>
  );
};

const HolidayPage = () => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [editData, setEditData] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const [holidays, setHolidays] = useState([
    {
      id: 1,
      date: "01/01/2026",
      holidayName: "New Year's Day",
      shift: "All Shifts",
      holidayType: "Public Holiday",
      creationDate: "01/12/2025",
      details: "Annual celebration of the new year.",
    },
    {
      id: 2,
      date: "26/01/2026",
      holidayName: "Republic Day",
      shift: "All Shifts",
      holidayType: "Public Holiday",
      creationDate: "05/01/2026",
      details: "National holiday commemorating the Constitution.",
    },
  ]);

  const handleSave = (data) => {
    if (editData) {
      setHolidays(holidays.map((h) => (h.id === data.id ? data : h)));
    } else {
      setHolidays([...holidays, { ...data, id: Date.now() }]);
    }
    setOpenModal(false);
  };

  const filteredHolidays = holidays.filter((h) => {
    const s = search.toLowerCase();
    return h.holidayName.toLowerCase().includes(s) || h.holidayType.toLowerCase().includes(s) || h.date.includes(s);
  });

  const Item = ({ label, value }) => (
    <div className="flex justify-between border-b pb-1 text-sm">
      <span className="font-medium">{label}:</span>
      <span className="text-gray-700">{value || "N/A"}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-violet-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* HEADER BAR */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-purple-100/50">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-violet-600 rounded-xl flex items-center justify-center shadow-lg">
                <CalendarDays className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">Holiday List</h2>
                <p className="text-sm text-gray-500 mt-1">{filteredHolidays.length} Holidays scheduled</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative flex-1 lg:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search holiday name, type..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 transition-all"
                />
              </div>
              <button 
                onClick={() => setShowCalendar(true)} 
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 shadow-lg transition-all hover:scale-105"
              >
                <Calendar size={20} />
                <span className="hidden sm:inline font-semibold">Calendar</span>
              </button>
              <button onClick={() => { setEditData(null); setOpenModal(true); }} className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-violet-500 text-white hover:scale-105 shadow-lg transition-all">
                <Plus size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT - SIDE BY SIDE LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LEFT SIDE - CALENDAR */}
          <div className="lg:col-span-4">
            <HolidayCalendar holidays={holidays} />
          </div>

          {/* RIGHT SIDE - HOLIDAY LIST */}
          <div className="lg:col-span-8">
            {/* DESKTOP TABLE */}
            <div className="hidden md:block bg-white rounded-2xl shadow-lg border border-purple-100/50">
          <div className="overflow-x-auto">
            <table className="w-full text-sm relative">
              <thead>
                <tr className="bg-purple-50 border-b-2 border-purple-100">
                  <th className="p-4 text-left">
                    <input 
                       type="checkbox" 
                       onChange={(e) => setSelectedIds(e.target.checked ? filteredHolidays.map(h => h.id) : [])}
                       checked={selectedIds.length === filteredHolidays.length && filteredHolidays.length > 0}
                       className="w-4 h-4 rounded text-purple-600"
                    />
                  </th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase">Date</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase">Holiday Name</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase">Shift</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase">Type</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase">Creation Date</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase">Details</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredHolidays.map((row) => (
                  <tr key={row.id} className="hover:bg-purple-50/50 transition-colors">
                    <td className="p-4">
                      <input 
                        type="checkbox" 
                        checked={selectedIds.includes(row.id)}
                        onChange={() => setSelectedIds(prev => prev.includes(row.id) ? prev.filter(id => id !== row.id) : [...prev, row.id])}
                        className="w-4 h-4 rounded text-purple-600"
                      />
                    </td>
                    <td className="p-4 font-semibold text-gray-700">{row.date}</td>
                    <td className="p-4 font-bold text-purple-600">{row.holidayName}</td>
                    <td className="p-4"><span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg text-xs">{row.shift}</span></td>
                    <td className="p-4 text-gray-700">{row.holidayType}</td>
                    <td className="p-4 text-gray-500">{row.creationDate}</td>
                    <td className="p-4 text-gray-600 max-w-xs relative">
                      <div className="relative group">
                        <div className="truncate cursor-help">
                          {row.details || "N/A"}
                        </div>
                        {row.details && (
                          <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 absolute left-0 top-full mt-2 z-[999] bg-white rounded-xl shadow-2xl border-2 border-purple-300 p-4 min-w-[320px] max-w-[480px] pointer-events-none">
                            <div className="font-semibold text-purple-600 mb-2 flex items-center gap-2">
                              <Info size={16} />
                              Full Details
                            </div>
                            <div className="text-sm text-gray-700 leading-relaxed whitespace-normal break-words">
                              {row.details}
                            </div>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button onClick={() => { setEditData(row); setOpenModal(true); }} className="text-blue-600 hover:bg-blue-50 p-2 rounded-lg"><Pencil size={18}/></button>
                        <button onClick={() => setHolidays(holidays.filter(h => h.id !== row.id))} className="text-red-600 hover:bg-red-50 p-2 rounded-lg"><Trash2 size={18}/></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

            {/* MOBILE VIEW */}
            <div className="block md:hidden space-y-4">
              {filteredHolidays.map((row) => (
                <div key={row.id} className="bg-white rounded-2xl shadow-lg p-5 border border-purple-100/50">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-purple-600 text-lg">{row.holidayName}</h3>
                      <p className="text-sm text-gray-500">{row.date}</p>
                    </div>
                    <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs">{row.shift}</span>
                  </div>
                  <div className="space-y-2 mb-4">
                    <Item label="Type" value={row.holidayType} />
                    <Item label="Created" value={row.creationDate} />
                    <div className="text-sm text-gray-600 mt-2 bg-gray-50 p-2 rounded-lg flex gap-2">
                        <Info size={16} className="shrink-0 text-purple-400" />
                        {row.details}
                    </div>
                  </div>
                  <div className="flex gap-3 border-t pt-3">
                    <button onClick={() => { setEditData(row); setOpenModal(true); }} className="flex-1 flex justify-center py-2 bg-blue-50 text-blue-600 rounded-xl font-semibold"><Pencil size={18} className="mr-2"/>Edit</button>
                    <button onClick={() => setHolidays(holidays.filter(h => h.id !== row.id))} className="flex-1 flex justify-center py-2 bg-red-50 text-red-600 rounded-xl font-semibold"><Trash2 size={18} className="mr-2"/>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {openModal && <HolidayModal close={() => setOpenModal(false)} save={handleSave} editData={editData} />}
    </div>
  );
};

export default HolidayPage;