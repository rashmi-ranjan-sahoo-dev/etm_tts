import React, { useState, useEffect } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  Search,
  Users,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Filter,
  X,
  Upload,
  ArrowLeft,
} from "lucide-react";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const [year, month, day] = dateStr.split("-");
  return `${day}/${month}/${year}`;
};

const toISO = (date) => {
  if (!date) return "";
  const [d, m, y] = date.split("/");
  return `${y}-${m.padStart(2, "0")}-${d.padStart(2, "0")}`;
};

const EmployeeModal = ({ close, save, editData }) => {
  const [form, setForm] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    employeeId: "",
    role: "",
    dept: "",
    gender: "",
    profilePicture: "",
    joiningDate: "",
    mobile: "",
    email: "",
    address: "",
    aadharCard: "",
    panCard: "",
    areaOfInterest: "",
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    branchName: "",
  });
  const today = new Date().toISOString().split("T")[0];
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editData) {
      const nameParts = editData.name ? editData.name.split(" ") : ["", "", ""];
      setForm({
        ...editData,
        firstName: nameParts[0] || "",
        middleName: nameParts[1] || "",
        lastName: nameParts[2] || "",
        joiningDate: editData.joiningDate ? toISO(editData.joiningDate) : "",
      });
    }
  }, [editData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () =>
        setForm({ ...form, profilePicture: reader.result });
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    let newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "Required";
    if (!form.lastName.trim()) newErrors.lastName = "Required";
    if (!form.employeeId.trim()) newErrors.employeeId = "Required";
    if (!form.role.trim()) newErrors.role = "Required";
    if (!form.dept) newErrors.dept = "Required";
    if (!form.gender) newErrors.gender = "Required";
    if (!form.joiningDate) newErrors.joiningDate = "Required";
    if (!form.mobile.trim()) newErrors.mobile = "Required";
    else if (!/^\d{10}$/.test(form.mobile)) newErrors.mobile = "10 digits";
    if (!form.email.trim()) newErrors.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Invalid";
    if (!form.address.trim()) newErrors.address = "Required";
    if (!form.aadharCard.trim()) newErrors.aadharCard = "Required";
    else if (!/^\d{12}$/.test(form.aadharCard))
      newErrors.aadharCard = "12 digits";
    if (!form.panCard.trim()) newErrors.panCard = "Required";
    else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(form.panCard))
      newErrors.panCard = "Invalid";
    if (!form.bankName.trim()) newErrors.bankName = "Required";
    if (!form.accountNumber.trim()) newErrors.accountNumber = "Required";
    if (!form.ifscCode.trim()) newErrors.ifscCode = "Required";
    else if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(form.ifscCode))
      newErrors.ifscCode = "Invalid";
    if (form.joiningDate && form.joiningDate > today)
      newErrors.joiningDate = "Future date";

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      const fullName = `${form.firstName} ${form.middleName} ${form.lastName}`
        .replace(/\s+/g, " ")
        .trim();
      save({
        ...form,
        name: fullName,
        joiningDate: formatDate(form.joiningDate),
      });
      close();
    }
  };

  const InputField = ({
    label,
    name,
    value,
    onChange,
    error,
    type = "text",
    placeholder,
    required = true,
  }) => (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
        {required && "*"}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-2.5 rounded-lg border-2 bg-gray-50 focus:outline-none focus:bg-white transition-all ${
          error ? "border-red-400" : "border-gray-200 focus:border-teal-500"
        }`}
      />
      {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-teal-600 to-cyan-600 p-6 rounded-t-2xl z-10 flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white">
              {editData ? "Edit Employee" : "Add Employee"}
            </h3>
            <p className="text-teal-100 text-sm mt-1">
              {editData ? "Update employee information" : "Add a new employee"}
            </p>
          </div>
          <button
            onClick={close}
            className="text-white hover:bg-white/20 p-2 rounded-lg"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-8">
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b-2 border-teal-200">
              Employee Details
            </h4>
            <div className="flex flex-col md:flex-row gap-6 mb-5">
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    {form.profilePicture ? (
                      <img
                        src={form.profilePicture}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Users className="w-16 h-16 text-gray-400" />
                    )}
                  </div>
                  <label
                    htmlFor="profilePic"
                    className="absolute bottom-0 right-0 bg-purple-600 text-white p-2 rounded-full cursor-pointer hover:bg-purple-700"
                  >
                    <Upload size={16} />
                    <input
                      id="profilePic"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  jpg, png, gif up to 1MB
                  <br />
                  200px X 200px
                </p>
              </div>
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                <InputField
                  label="First Name"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  error={errors.firstName}
                  placeholder="First Name"
                />
                <InputField
                  label="Middle Name"
                  name="middleName"
                  value={form.middleName}
                  onChange={handleChange}
                  placeholder="Middle Name"
                  required={false}
                />
                <InputField
                  label="Last Name"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  error={errors.lastName}
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <InputField
                label="Employee ID"
                name="employeeId"
                value={form.employeeId}
                onChange={handleChange}
                error={errors.employeeId}
                placeholder="0429"
              />
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Department*
                </label>
                <select
                  name="dept"
                  value={form.dept}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 rounded-lg border-2 bg-gray-50 focus:outline-none focus:bg-white ${
                    errors.dept
                      ? "border-red-400"
                      : "border-gray-200 focus:border-teal-500"
                  }`}
                >
                  <option value="">Select</option>
                  <option>Engineering</option>
                  <option>Human Resources</option>
                  <option>Marketing</option>
                  <option>Sales</option>
                  <option>Finance</option>
                  <option>Operations</option>
                </select>
                {errors.dept && (
                  <p className="text-red-600 text-xs mt-1">{errors.dept}</p>
                )}
              </div>
              <InputField
                label="Role"
                name="role"
                value={form.role}
                onChange={handleChange}
                error={errors.role}
                placeholder="Software Engineer"
              />
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Gender*
                </label>
                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 rounded-lg border-2 bg-gray-50 focus:outline-none focus:bg-white ${
                    errors.gender
                      ? "border-red-400"
                      : "border-gray-200 focus:border-teal-500"
                  }`}
                >
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
                {errors.gender && (
                  <p className="text-red-600 text-xs mt-1">{errors.gender}</p>
                )}
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b-2 border-teal-200">
              Personal Details
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="Joining Date"
                name="joiningDate"
                value={form.joiningDate}
                onChange={handleChange}
                error={errors.joiningDate}
                type="date"
              />
              <InputField
                label="Phone Number"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                error={errors.mobile}
                placeholder="10 digits"
              />
              <InputField
                label="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
                placeholder="example@company.com"
                type="email"
              />
              <InputField
                label="Aadhar Card"
                name="aadharCard"
                value={form.aadharCard}
                onChange={handleChange}
                error={errors.aadharCard}
                placeholder="12 digits"
              />
              <InputField
                label="PAN Card"
                name="panCard"
                value={form.panCard}
                onChange={handleChange}
                error={errors.panCard}
                placeholder="ABCDE1234F"
              />
              <InputField
                label="Area of Interest"
                name="areaOfInterest"
                value={form.areaOfInterest}
                onChange={handleChange}
                placeholder="Optional"
                required={false}
              />
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Permanent Address*
                </label>
                <textarea
                  name="address"
                  rows="2"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Address..."
                  className={`w-full px-4 py-2.5 rounded-lg border-2 bg-gray-50 resize-none focus:outline-none focus:bg-white ${
                    errors.address
                      ? "border-red-400"
                      : "border-gray-200 focus:border-teal-500"
                  }`}
                />
                {errors.address && (
                  <p className="text-red-600 text-xs mt-1">{errors.address}</p>
                )}
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b-2 border-teal-200">
              Bank Details
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="Bank Name"
                name="bankName"
                value={form.bankName}
                onChange={handleChange}
                error={errors.bankName}
                placeholder="State Bank of India"
              />
              <InputField
                label="Account Number"
                name="accountNumber"
                value={form.accountNumber}
                onChange={handleChange}
                error={errors.accountNumber}
                placeholder="Account number"
              />
              <InputField
                label="IFSC Code"
                name="ifscCode"
                value={form.ifscCode}
                onChange={handleChange}
                error={errors.ifscCode}
                placeholder="SBIN0001234"
              />
              <InputField
                label="Branch Name"
                name="branchName"
                value={form.branchName}
                onChange={handleChange}
                placeholder="Branch name"
                required={false}
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4 border-t">
            <p className="text-sm text-gray-500 flex-1">* Required</p>
            <button
              onClick={close}
              className="px-6 py-3 rounded-xl border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 font-semibold"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const EmployeeDetailView = ({ employee, onClose }) => {
  const DetailCard = ({ title, color, children }) => (
    <div className={`bg-gradient-to-br ${color} rounded-xl p-6`}>
      <h4 className="text-lg font-bold text-gray-800 mb-4">{title}</h4>
      {children}
    </div>
  );

  const DetailItem = ({ label, value }) => (
    <div>
      <p className="text-sm text-gray-600 font-medium">{label}</p>
      <p className="text-base font-semibold text-gray-800">{value || "N/A"}</p>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl my-8">
        <div className="sticky top-0 bg-gradient-to-r from-teal-600 to-cyan-600 p-6 rounded-t-2xl z-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 p-2 rounded-lg"
            >
              <ArrowLeft size={24} />
            </button>
            <div>
              <h3 className="text-2xl font-bold text-white">
                Employee Details
              </h3>
              <p className="text-teal-100 text-sm mt-1">
                Complete information about {employee.name}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 p-2 rounded-lg"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6 max-h-[calc(90vh-100px)] overflow-y-auto">
          <DetailCard title="Employee Details" color="from-teal-50 to-cyan-50">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden">
                  {employee.profilePicture ? (
                    <img
                      src={employee.profilePicture}
                      alt={employee.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Users className="w-16 h-16 text-gray-400" />
                  )}
                </div>
              </div>
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                <DetailItem label="Employee Name" value={employee.name} />
                <DetailItem label="Employee ID" value={employee.employeeId} />
                <DetailItem label="Department" value={employee.dept} />
                <DetailItem label="Role" value={employee.role} />
                <DetailItem label="Gender" value={employee.gender} />
                <DetailItem label="Joining Date" value={employee.joiningDate} />
              </div>
            </div>
          </DetailCard>

          <DetailCard
            title="Personal Details"
            color="from-purple-50 to-pink-50"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <DetailItem label="Phone Number" value={employee.mobile} />
              <DetailItem label="Email" value={employee.email} />
              <DetailItem label="Aadhar Card" value={employee.aadharCard} />
              <DetailItem label="PAN Card" value={employee.panCard} />
              <DetailItem
                label="Area of Interest"
                value={employee.areaOfInterest}
              />
              <div className="md:col-span-2">
                <DetailItem
                  label="Permanent Address"
                  value={employee.address}
                />
              </div>
            </div>
          </DetailCard>

          <DetailCard title="Bank Details" color="from-blue-50 to-indigo-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <DetailItem label="Bank Name" value={employee.bankName} />
              <DetailItem
                label="Account Number"
                value={employee.accountNumber}
              />
              <DetailItem label="IFSC Code" value={employee.ifscCode} />
              <DetailItem label="Branch Name" value={employee.branchName} />
            </div>
          </DetailCard>
        </div>
      </div>
    </div>
  );
};

const EmployeeDetail = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "John Doe",
      employeeId: "0001",
      role: "Software Engineer",
      dept: "Engineering",
      joiningDate: "15/01/2022",
      gender: "Male",
      mobile: "9876543210",
      email: "john.doe@company.com",
      address: "123 Main St, City, State",
      aadharCard: "123456789012",
      panCard: "ABCDE1234F",
      areaOfInterest: "Web Dev",
      bankName: "SBI",
      accountNumber: "1234567890",
      ifscCode: "SBIN0001234",
      branchName: "Main",
      profilePicture: "",
    },
    {
      id: 2,
      name: "Jane Smith",
      employeeId: "0002",
      role: "HR Manager",
      dept: "Human Resources",
      joiningDate: "10/03/2021",
      gender: "Female",
      mobile: "9876543211",
      email: "jane.smith@company.com",
      address: "456 Park Ave, City, State",
      aadharCard: "987654321098",
      panCard: "FGHIJ5678K",
      areaOfInterest: "Recruitment",
      bankName: "HDFC",
      accountNumber: "0987654321",
      ifscCode: "HDFC0001234",
      branchName: "Park St",
      profilePicture: "",
    },
  ]);

  const [selectedIds, setSelectedIds] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [editData, setEditData] = useState(null);
  const [search, setSearch] = useState("");
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(true);
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [advancedFilters, setAdvancedFilters] = useState({
    employeeName: "",
    employeeId: "",
    employmentStatus: "",
    include: "Current Employees Only",
    supervisorName: "",
    jobTitle: "",
    subUnit: "",
  });
  const [quickFilter, setQuickFilter] = useState({ type: "all", value: "" });

  const handleAdd = () => {
    setEditData(null);
    setOpenModal(true);
  };
  const handleEdit = (row) => {
    setEditData(row);
    setOpenModal(true);
  };
  const handleDelete = (id) =>
    setEmployees(employees.filter((item) => item.id !== id));
  const handleSave = (data) => {
    if (editData)
      setEmployees(employees.map((e) => (e.id === data.id ? data : e)));
    else setEmployees([...employees, { ...data, id: Date.now() }]);
    setOpenModal(false);
  };
  const handleResetAdvancedFilters = () =>
    setAdvancedFilters({
      employeeName: "",
      employeeId: "",
      employmentStatus: "",
      include: "Current Employees Only",
      supervisorName: "",
      jobTitle: "",
      subUnit: "",
    });

  const filteredEmployees = employees.filter((e) => {
    if (search.trim()) {
      const s = search.toLowerCase();
      if (
        !(
          e.name.toLowerCase().includes(s) ||
          e.role.toLowerCase().includes(s) ||
          e.dept.toLowerCase().includes(s) ||
          e.mobile.includes(s) ||
          e.email.toLowerCase().includes(s)
        )
      )
        return false;
    }
    if (
      advancedFilters.employeeName &&
      !e.name.toLowerCase().includes(advancedFilters.employeeName.toLowerCase())
    )
      return false;
    if (
      advancedFilters.employeeId &&
      e.employeeId !== advancedFilters.employeeId
    )
      return false;
    if (
      advancedFilters.jobTitle &&
      !e.role.toLowerCase().includes(advancedFilters.jobTitle.toLowerCase())
    )
      return false;
    if (advancedFilters.subUnit && e.dept !== advancedFilters.subUnit)
      return false;
    if (
      quickFilter.type === "dept" &&
      quickFilter.value &&
      e.dept !== quickFilter.value
    )
      return false;
    if (
      quickFilter.type === "role" &&
      quickFilter.value &&
      e.role !== quickFilter.value
    )
      return false;
    if (
      quickFilter.type === "gender" &&
      quickFilter.value &&
      e.gender !== quickFilter.value
    )
      return false;
    return true;
  });

  const uniqueDepts = [...new Set(employees.map((e) => e.dept))];
  const uniqueRoles = [...new Set(employees.map((e) => e.role))];
  const uniqueGenders = [...new Set(employees.map((e) => e.gender))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-teal-100/50">
          <button
            onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}
            className="flex items-center justify-between w-full text-left"
          >
            <h3 className="text-lg font-bold text-gray-700">
              Employee Information
            </h3>
            {showAdvancedSearch ? (
              <ChevronUp className="text-gray-500" />
            ) : (
              <ChevronDown className="text-gray-500" />
            )}
          </button>
          {showAdvancedSearch && (
            <div className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Employee Name
                  </label>
                  <input
                    type="text"
                    placeholder="Type..."
                    value={advancedFilters.employeeName}
                    onChange={(e) =>
                      setAdvancedFilters({
                        ...advancedFilters,
                        employeeName: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2.5 rounded-lg border focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Employee Id
                  </label>
                  <input
                    type="text"
                    value={advancedFilters.employeeId}
                    onChange={(e) =>
                      setAdvancedFilters({
                        ...advancedFilters,
                        employeeId: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2.5 rounded-lg border focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Employment Status
                  </label>
                  <select
                    value={advancedFilters.employmentStatus}
                    onChange={(e) =>
                      setAdvancedFilters({
                        ...advancedFilters,
                        employmentStatus: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2.5 rounded-lg border focus:border-blue-500"
                  >
                    <option value="">-- Select --</option>
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Include
                  </label>
                  <select
                    value={advancedFilters.include}
                    onChange={(e) =>
                      setAdvancedFilters({
                        ...advancedFilters,
                        include: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2.5 rounded-lg border focus:border-blue-500"
                  >
                    <option>Current Employees Only</option>
                    <option>All Employees</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Supervisor Name
                  </label>
                  <input
                    type="text"
                    placeholder="Type..."
                    value={advancedFilters.supervisorName}
                    onChange={(e) =>
                      setAdvancedFilters({
                        ...advancedFilters,
                        supervisorName: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2.5 rounded-lg border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Job Title
                  </label>
                  <input
                    type="text"
                    placeholder="Type..."
                    value={advancedFilters.jobTitle}
                    onChange={(e) =>
                      setAdvancedFilters({
                        ...advancedFilters,
                        jobTitle: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2.5 rounded-lg border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Sub Unit
                  </label>
                  <select
                    value={advancedFilters.subUnit}
                    onChange={(e) =>
                      setAdvancedFilters({
                        ...advancedFilters,
                        subUnit: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2.5 rounded-lg border"
                  >
                    <option value="">-- Select --</option>
                    {uniqueDepts.map((d, i) => (
                      <option key={i}>{d}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={handleResetAdvancedFilters}
                  className="px-6 py-2.5 rounded-lg border-2 text-gray-700 hover:bg-gray-50"
                >
                  Reset
                </button>
                <button className="px-8 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow-lg">
                  Search
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-teal-100/50">
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
                  {filteredEmployees.length} employee
                  {filteredEmployees.length !== 1 && "s"}{" "}
                  {selectedIds.length > 0 && `• ${selectedIds.length} selected`}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative flex-1 lg:w-80">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 focus:border-teal-500"
                />
              </div>
              <button
                onClick={handleAdd}
                className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:scale-105"
              >
                <Plus size={24} className="ml-3" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="flex-1">
            <div className="hidden md:block overflow-hidden bg-white rounded-2xl shadow-lg border border-teal-100/50">
              <div className="overflow-x-auto max-h-[650px] overflow-y-auto">
                <table className="w-full text-sm">
                  <thead className="sticky top-0 z-10 bg-gradient-to-r from-teal-50 to-cyan-50">
                    <tr className="border-b-2 border-teal-100">
                      <th className="p-4">
                        <input
                          type="checkbox"
                          checked={
                            filteredEmployees.length > 0 &&
                            selectedIds.length === filteredEmployees.length
                          }
                          onChange={(e) =>
                            setSelectedIds(
                              e.target.checked
                                ? filteredEmployees.map((r) => r.id)
                                : []
                            )
                          }
                          className="w-4 h-4 rounded cursor-pointer"
                        />
                      </th>
                      <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase">
                        Employee Name
                      </th>
                      <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase">
                        Role
                      </th>
                      <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase">
                        Dept
                      </th>
                      <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase">
                        Joining Date
                      </th>
                      <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase">
                        Gender
                      </th>
                      <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase">
                        Mobile
                      </th>
                      <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase">
                        Email
                      </th>
                      <th className="text-left p-4 text-xs font-bold text-gray-700 uppercase">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredEmployees.map((row, idx) => (
                      <tr key={idx} className="hover:bg-teal-50/50">
                        <td className="p-4">
                          <input
                            type="checkbox"
                            checked={selectedIds.includes(row.id)}
                            onChange={() =>
                              setSelectedIds(
                                selectedIds.includes(row.id)
                                  ? selectedIds.filter((id) => id !== row.id)
                                  : [...selectedIds, row.id]
                              )
                            }
                            className="w-4 h-4 rounded cursor-pointer"
                          />
                        </td>
                        <td className="p-4">
                          <button
                            onClick={() => setSelectedEmployee(row)}
                            className="font-semibold text-teal-600 hover:text-teal-700 hover:underline"
                          >
                            {row.name}
                          </button>
                        </td>
                        <td className="p-4 text-gray-700">{row.role}</td>
                        <td className="p-4">
                          <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-purple-100 text-purple-700">
                            {row.dept}
                          </span>
                        </td>
                        <td className="p-4 text-gray-700">{row.joiningDate}</td>
                        <td className="p-4">
                          <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-100">
                            {row.gender}
                          </span>
                        </td>
                        <td className="p-4 text-gray-700">{row.mobile}</td>
                        <td className="p-4 text-gray-700">{row.email}</td>
                        <td className="p-4">
                          <div className="flex gap-3">
                            <button
                              onClick={() => handleEdit(row)}
                              className="p-2 rounded-lg text-blue-600 hover:bg-blue-50"
                            >
                              <Pencil size={18} />
                            </button>
                            <button
                              onClick={() => handleDelete(row.id)}
                              className="p-2 rounded-lg text-red-600 hover:bg-red-50"
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

            <div className="block md:hidden space-y-4">
              {filteredEmployees.map((row, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-lg p-5 space-y-3 border border-teal-100/50"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3 flex-1">
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(row.id)}
                        onChange={() =>
                          setSelectedIds(
                            selectedIds.includes(row.id)
                              ? selectedIds.filter((id) => id !== row.id)
                              : [...selectedIds, row.id]
                          )
                        }
                        className="w-4 h-4 rounded mt-1"
                      />
                      <div>
                        <button
                          onClick={() => setSelectedEmployee(row)}
                          className="font-bold text-lg text-teal-600 hover:underline text-left"
                        >
                          {row.name}
                        </button>
                        <p className="text-sm text-gray-500">{row.role}</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-px bg-gray-200"></div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Dept:</span>
                      <span>{row.dept}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Joining:</span>
                      <span>{row.joiningDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Gender:</span>
                      <span>{row.gender}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Mobile:</span>
                      <span>{row.mobile}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Email:</span>
                      <span>{row.email}</span>
                    </div>
                  </div>
                  <div className="flex gap-3 pt-3 border-t">
                    <button
                      onClick={() => handleEdit(row)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-blue-600 bg-blue-50 hover:bg-blue-100 font-semibold"
                    >
                      <Pencil size={18} />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(row.id)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-red-600 bg-red-50 hover:bg-red-100 font-semibold"
                    >
                      <Trash2 size={18} />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredEmployees.length === 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center border border-teal-100/50">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No employees found
                </h3>
                <p className="text-gray-500">Try adjusting your search</p>
              </div>
            )}
          </div>

          {showFilterPanel && (
            <div className="w-80 bg-white rounded-2xl shadow-lg p-6 border border-teal-100/50 space-y-6 hidden lg:block">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-700">
                  Quick Filters
                </h3>
                <button
                  onClick={() => setShowFilterPanel(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="space-y-4">
                <button
                  onClick={() => setQuickFilter({ type: "all", value: "" })}
                  className={`w-full text-left px-4 py-2.5 rounded-lg ${
                    quickFilter.type === "all"
                      ? "bg-teal-100 text-teal-700 font-semibold"
                      : "hover:bg-gray-50 text-gray-700"
                  }`}
                >
                  All Employees ({employees.length})
                </button>
                <div>
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">
                    By Role
                  </h4>
                  <div className="space-y-1">
                    {uniqueRoles.map((r, i) => (
                      <button
                        key={i}
                        onClick={() =>
                          setQuickFilter({ type: "role", value: r })
                        }
                        className={`w-full text-left px-4 py-2 rounded-lg text-sm ${
                          quickFilter.type === "role" && quickFilter.value === r
                            ? "bg-blue-100 text-blue-700 font-semibold"
                            : "hover:bg-gray-50 text-gray-700"
                        }`}
                      >
                        {r} ({employees.filter((e) => e.role === r).length})
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">
                    By Department
                  </h4>
                  <div className="space-y-1">
                    {uniqueDepts.map((d, i) => (
                      <button
                        key={i}
                        onClick={() =>
                          setQuickFilter({ type: "dept", value: d })
                        }
                        className={`w-full text-left px-4 py-2 rounded-lg text-sm ${
                          quickFilter.type === "dept" && quickFilter.value === d
                            ? "bg-purple-100 text-purple-700 font-semibold"
                            : "hover:bg-gray-50 text-gray-700"
                        }`}
                      >
                        {d} ({employees.filter((e) => e.dept === d).length})
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">
                    By Gender
                  </h4>
                  <div className="space-y-1">
                    {uniqueGenders.map((g, i) => (
                      <button
                        key={i}
                        onClick={() =>
                          setQuickFilter({ type: "gender", value: g })
                        }
                        className={`w-full text-left px-4 py-2 rounded-lg text-sm ${
                          quickFilter.type === "gender" &&
                          quickFilter.value === g
                            ? "bg-emerald-100 text-emerald-700 font-semibold"
                            : "hover:bg-gray-50 text-gray-700"
                        }`}
                      >
                        {g} ({employees.filter((e) => e.gender === g).length})
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {openModal && (
        <EmployeeModal
          close={() => setOpenModal(false)}
          save={handleSave}
          editData={editData}
        />
      )}
      {selectedEmployee && (
        <EmployeeDetailView
          employee={selectedEmployee}
          onClose={() => setSelectedEmployee(null)}
        />
      )}
    </div>
  );
};

export default EmployeeDetail;