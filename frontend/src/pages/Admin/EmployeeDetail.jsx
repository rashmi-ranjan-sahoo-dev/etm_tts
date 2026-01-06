import React, { useState, useEffect } from "react";
import { Plus, Pencil, Trash2, Search, Users, AlertCircle } from "lucide-react";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const [year, month, day] = dateStr.split("-");
  return `${day}/${month}/${year}`;
};

const toISO = (date) => {
  if (!date) return "";
  const [d, m, y] = date.split("/");
  return `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`;
};

const EmployeeModal = ({ close, save, editData }) => {
  const [form, setForm] = useState({
    name: "",
    role: "",
    dept: "",
    joiningDate: "",
    gender: "",
    mobile: "",
    email: "",
    address: "",
  });
  const today = new Date().toISOString().split("T")[0];
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editData) {
      setForm({
        ...editData,
        joiningDate: toISO(editData.joiningDate),
      });
    }
  }, [editData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = () => {
    let newErrors = {};

    // Required fields validation
    if (!form.name.trim()) newErrors.name = "Required";
    if (!form.role.trim()) newErrors.role = "Required";
    if (!form.dept) newErrors.dept = "Required";
    if (!form.joiningDate) newErrors.joiningDate = "Required";
    if (!form.gender) newErrors.gender = "Required";
    if (!form.mobile.trim()) newErrors.mobile = "Required";
    else if (!/^\d{10}$/.test(form.mobile)) newErrors.mobile = "Must be 10 digits";
    if (!form.email.trim()) newErrors.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Invalid email";
    if (!form.address.trim()) newErrors.address = "Required";

    // Joining date should not be in future
    if (form.joiningDate && form.joiningDate > today)
      newErrors.joiningDate = "Cannot be in future";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      save({
        ...form,
        joiningDate: formatDate(form.joiningDate),
      });
      close();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-teal-600 to-cyan-600 p-6 rounded-t-2xl">
          <h3 className="text-2xl font-bold text-white">
            {editData ? "Edit Employee" : "Add New Employee"}
          </h3>
          <p className="text-teal-100 text-sm mt-1">
            {editData ? "Update employee information" : "Add a new employee to the system"}
          </p>
        </div>
        
        <div className="p-6 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Employee Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Employee Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter full name"
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.name
                    ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                    : "border-gray-200 focus:border-teal-500 focus:ring-teal-500/10"
                }`}
              />
              {errors.name && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.name}</span>
                </div>
              )}
            </div>
            
            {/* Role */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Role
              </label>
              <input
                type="text"
                name="role"
                value={form.role}
                onChange={handleChange}
                placeholder="e.g., Software Engineer"
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.role
                    ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                    : "border-gray-200 focus:border-teal-500 focus:ring-teal-500/10"
                }`}
              />
              {errors.role && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.role}</span>
                </div>
              )}
            </div>
            
            {/* Department */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Department
              </label>
              <select
                name="dept"
                value={form.dept}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.dept
                    ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                    : "border-gray-200 focus:border-teal-500 focus:ring-teal-500/10"
                }`}
              >
                <option value="">Select Department</option>
                <option>Engineering</option>
                <option>Human Resources</option>
                <option>Marketing</option>
                <option>Sales</option>
                <option>Finance</option>
                <option>Operations</option>
              </select>
              {errors.dept && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.dept}</span>
                </div>
              )}
            </div>
            
            {/* Joining Date */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Joining Date
              </label>
              <input
                type="date"
                name="joiningDate"
                value={form.joiningDate}
                onChange={handleChange}
                max={today}
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.joiningDate
                    ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                    : "border-gray-200 focus:border-teal-500 focus:ring-teal-500/10"
                }`}
              />
              {errors.joiningDate && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.joiningDate}</span>
                </div>
              )}
            </div>
            
            {/* Gender */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Gender
              </label>
              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.gender
                    ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                    : "border-gray-200 focus:border-teal-500 focus:ring-teal-500/10"
                }`}
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              {errors.gender && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.gender}</span>
                </div>
              )}
            </div>
            
            {/* Mobile */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Mobile
              </label>
              <input
                type="text"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder="10 digit number"
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.mobile
                    ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                    : "border-gray-200 focus:border-teal-500 focus:ring-teal-500/10"
                }`}
              />
              {errors.mobile && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.mobile}</span>
                </div>
              )}
            </div>
            
            {/* Email */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@company.com"
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.email
                    ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                    : "border-gray-200 focus:border-teal-500 focus:ring-teal-500/10"
                }`}
              />
              {errors.email && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.email}</span>
                </div>
              )}
            </div>
            
            {/* Address */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Address
              </label>
              <textarea
                name="address"
                rows="3"
                value={form.address}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 resize-none focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  errors.address
                    ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                    : "border-gray-200 focus:border-teal-500 focus:ring-teal-500/10"
                }`}
                placeholder="Enter complete address..."
              />
              {errors.address && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.address}</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex gap-3 pt-4 border-t">
            <button
              onClick={handleSubmit}
              className="flex-1 bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-3 rounded-xl hover:from-teal-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 font-semibold"
            >
              {editData ? "Update Employee" : "Add Employee"}
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

// Main AllEmployees Component
const EmployeeDetail = () => {
  const [selectedIds, setSelectedIds] = useState([]);

  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "John Doe",
      role: "Software Engineer",
      dept: "Engineering",
      joiningDate: "15/01/2022",
      gender: "Male",
      mobile: "9876543210",
      email: "john.doe@company.com",
      address: "123 Main St, City, State 12345",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "HR Manager",
      dept: "Human Resources",
      joiningDate: "10/03/2021",
      gender: "Female",
      mobile: "9876543211",
      email: "jane.smith@company.com",
      address: "456 Park Ave, City, State 12346",
    },
  ]);

  const [openModal, setOpenModal] = useState(false);
  const [editData, setEditData] = useState(null);
  const [search, setSearch] = useState("");

  const handleAdd = () => {
    setEditData(null);
    setOpenModal(true);
  };

  const handleEdit = (row) => {
    setEditData(row);
    setOpenModal(true);
  };

  const handleDelete = (id) => {
    setEmployees(employees.filter((item) => item.id !== id));
  };

  const handleSave = (data) => {
    if (editData) {
      setEmployees(employees.map((e) => (e.id === data.id ? data : e)));
    } else {
      setEmployees([...employees, { ...data, id: Date.now() }]);
    }
    setOpenModal(false);
  };

  const filteredEmployees = employees.filter((e) => {
    if (!search.trim()) return true;

    const s = search.toLowerCase();

    return (
      e.name.toLowerCase().includes(s) ||
      e.role.toLowerCase().includes(s) ||
      e.dept.toLowerCase().includes(s) ||
      e.gender.toLowerCase().includes(s) ||
      e.mobile.includes(s) ||
      e.email.toLowerCase().includes(s) ||
      e.address.toLowerCase().includes(s) ||
      e.joiningDate.toLowerCase().includes(s)
    );
  });

  const Item = ({ label, value }) => (
    <div className="flex justify-between border-b pb-1 text-sm">
      <span className="font-medium">{label}:</span>
      <span className="text-gray-700">{value}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* HEADER BAR */}
        <div className="bg-white rounded-2xl shadow-lg shadow-teal-100/50 p-6 mb-6 border border-teal-100/50">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                <Users className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  All Employees
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {filteredEmployees.length} {filteredEmployees.length === 1 ? 'employee' : 'employees'} found
                  {selectedIds.length > 0 && ` • ${selectedIds.length} selected`}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative flex-1 lg:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search employees, role, dept..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 bg-white focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all"
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
        <div className="hidden md:block overflow-hidden bg-white rounded-2xl shadow-lg shadow-teal-100/50 border border-teal-100/50">
          <div className="overflow-x-auto max-h-[650px] overflow-y-auto">
            <table className="w-full text-sm">
              <thead className="sticky top-0 z-10">
                <tr className="bg-gradient-to-r from-teal-50 to-cyan-50 border-b-2 border-teal-100">
                  <th className="p-4 text-left">
                    <input
                      type="checkbox"
                      checked={
                        filteredEmployees.length > 0 &&
                        selectedIds.length === filteredEmployees.length
                      }
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedIds(filteredEmployees.map((row) => row.id));
                        } else {
                          setSelectedIds([]);
                        }
                      }}
                      className="w-4 h-4 rounded border-gray-300 text-teal-600 focus:ring-2 focus:ring-teal-500/50 cursor-pointer"
                    />
                  </th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Employee Name</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Role</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Dept</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Joining Date</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Gender</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Mobile</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Email</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Address</th>
                  <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {filteredEmployees.map((row, index) => (
                  <tr key={index} className="hover:bg-teal-50/50 transition-colors duration-150 cursor-pointer group">
                    <td className="p-4">
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(row.id)}
                        onChange={() => {
                          if (selectedIds.includes(row.id)) {
                            setSelectedIds(
                              selectedIds.filter((id) => id !== row.id)
                            );
                          } else {
                            setSelectedIds([...selectedIds, row.id]);
                          }
                        }}
                        className="w-4 h-4 rounded border-gray-300 text-teal-600 focus:ring-2 focus:ring-teal-500/50 cursor-pointer"
                      />
                    </td>

                    <td className="p-4">
                      <span className="font-semibold text-teal-600 group-hover:text-teal-700">{row.name}</span>
                    </td>
                    <td className="p-4 text-gray-700">{row.role}</td>
                    <td className="p-4">
                      <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-purple-100 text-purple-700">
                        {row.dept}
                      </span>
                    </td>
                    <td className="p-4 text-gray-700">{row.joiningDate}</td>
                    <td className="p-4">
                      <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-700">
                        {row.gender}
                      </span>
                    </td>
                    <td className="p-4 text-gray-700">{row.mobile}</td>
                    <td className="p-4 text-gray-700">{row.email}</td>
                    <td className="p-4 text-gray-600 max-w-xs truncate">{row.address}</td>
                    <td className="p-4">
                      <div className="flex gap-3">
                        <button
                          onClick={() => handleEdit(row)}
                          className="p-2 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
                        >
                          <Pencil size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(row.id)}
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
          {filteredEmployees.map((row, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg shadow-teal-100/50 p-5 space-y-3 border border-teal-100/50 hover:shadow-xl hover:shadow-teal-200/50 transition-all duration-300">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3 flex-1">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(row.id)}
                    onChange={() => {
                      if (selectedIds.includes(row.id)) {
                        setSelectedIds(selectedIds.filter((id) => id !== row.id));
                      } else {
                        setSelectedIds([...selectedIds, row.id]);
                      }
                    }}
                    className="w-4 h-4 rounded border-gray-300 text-teal-600 focus:ring-2 focus:ring-teal-500/50 cursor-pointer mt-1"
                  />
                  <div>
                    <span className="font-bold text-lg text-teal-600">{row.name}</span>
                    <p className="text-sm text-gray-500 mt-0.5">{row.role}</p>
                  </div>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

              <div className="space-y-2.5">
                <Item label="Department" value={row.dept} />
                <Item label="Joining Date" value={row.joiningDate} />
                <Item label="Gender" value={row.gender} />
                <Item label="Mobile" value={row.mobile} />
                <Item label="Email" value={row.email} />
                <Item label="Address" value={row.address} />
              </div>

              <div className="flex gap-3 pt-3 border-t border-gray-100">
                <button
                  onClick={() => handleEdit(row)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors font-semibold"
                >
                  <Pencil size={18} />
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(row.id)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-red-600 bg-red-50 hover:bg-red-100 transition-colors font-semibold"
                >
                  <Trash2 size={18} />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredEmployees.length === 0 && (
          <div className="bg-white rounded-2xl shadow-lg shadow-teal-100/50 p-12 text-center border border-teal-100/50">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No employees found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      {/* MODAL */}
      {openModal && (
        <EmployeeModal
          close={() => setOpenModal(false)}
          save={handleSave}
          editData={editData}
        />
      )}
    </div>
  );
};

export default EmployeeDetail;