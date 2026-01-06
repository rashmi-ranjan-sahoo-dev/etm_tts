import React, { useState, useEffect } from "react";
import { Plus, Pencil, Trash2, Search, CalendarDays, AlertCircle, Info } from "lucide-react";

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

            {/* Holiday Type */}
            {/* <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Holiday Type</label>
              <select
                name="holidayType"
                value={form.holidayType}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 transition-all ${
                  errors.holidayType ? "border-red-400" : "border-gray-200 focus:border-purple-500"
                }`}
              >
                <option value="">Select Type</option>
                <option>Public Holiday</option>
                <option>Company Holiday</option>
                <option>Optional Holiday</option>
              </select>
            </div> */}

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

const HolidayPage = () => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [editData, setEditData] = useState(null);

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
              <button onClick={() => { setEditData(null); setOpenModal(true); }} className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-violet-500 text-white hover:scale-105 shadow-lg transition-all">
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
                  <tr key={row.id} className="hover:bg-purple-50/50 transition-colors group">
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
                    <td className="p-4 text-gray-600 max-w-xs truncate">{row.details}</td>
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

      {openModal && <HolidayModal close={() => setOpenModal(false)} save={handleSave} editData={editData} />}
    </div>
  );
};

export default HolidayPage;