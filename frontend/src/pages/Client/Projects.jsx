import React, { useState, useEffect } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  Search,
  CheckCircle2,
  Clock,
  Calendar,
  AlertCircle,
  User,
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

/* ===================== PROJECT MODAL ===================== */
const ProjectModal = ({ close, save, editData }) => {
  const today = new Date().toISOString().split("T")[0];

  const [form, setForm] = useState({
    projectName: "",
    projectCategory: "",
    projectLead: "",
    status: "",
    startDate: "",
    endDate: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editData) {
      setForm({
        ...editData,
        startDate: toISO(editData.startDate),
        endDate: toISO(editData.endDate),
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

    if (!form.projectName) newErrors.projectName = "Required";
    if (!form.projectCategory) newErrors.projectCategory = "Required";
    if (!form.projectLead) newErrors.projectLead = "Required";
    if (!form.status) newErrors.status = "Required";
    if (!form.startDate) newErrors.startDate = "Required";
    if (!form.endDate) newErrors.endDate = "Required";

    if (form.startDate && form.endDate && form.startDate > form.endDate) {
      newErrors.startDate = "Must be before completion date";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      save({
        ...form,
         id: editData?.id,
        startDate: formatDate(form.startDate),
        endDate: formatDate(form.endDate),
      });
      close();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl transform transition-all animate-in zoom-in-95 duration-200">
        <div className="bg-linear-to-br from-teal-500 via-cyan-500 to-blue-500 p-8 rounded-t-3xl relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
          <h3 className="text-3xl font-bold text-white relative z-10 flex items-center gap-3">
            {editData ? (
              <>
                <Pencil className="w-8 h-8" />
                Edit Project
              </>
            ) : (
              <>
                <Plus className="w-8 h-8" />
                New Project
              </>
            )}
          </h3>
          <p className="text-teal-50 mt-2 relative z-10">
            {editData ? "Update project details" : "Create a new project"}
          </p>
        </div>

        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project Name */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Project Name
            </label>
            <input
              name="projectName"
              placeholder="Enter project name"
              value={form.projectName}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 outline-none transition-all"
            />
            {errors.projectName && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.projectName}
              </p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Category
            </label>
            <select
              name="projectCategory"
              value={form.projectCategory}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 outline-none transition-all bg-white"
            >
              <option value="">Select Category</option>
              <option>Hardware</option>
              <option>Software</option>
            </select>
            {errors.projectCategory && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.projectCategory}
              </p>
            )}
          </div>

          {/* Lead */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Project Lead
            </label>
            <input
              name="projectLead"
              placeholder="Lead name"
              value={form.projectLead}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 outline-none transition-all"
            />
            {errors.projectLead && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.projectLead}
              </p>
            )}
          </div>

          {/* Status */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Status
            </label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 outline-none transition-all bg-white"
            >
              <option value="">Select Status</option>
              <option>Planned</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
            {errors.status && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.status}
              </p>
            )}
          </div>

          {/* Dates */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-teal-600" />
              Preferred Start Date
            </label>
            <input
              type="date"
              name="startDate"
              value={form.startDate}
              onChange={handleChange}
              min={today}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 outline-none transition-all"
            />
            {errors.startDate && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.startDate}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-teal-600" />
              Expected Completion Date
            </label>
            <input
              type="date"
              name="endDate"
              value={form.endDate}
              onChange={handleChange}
              min={form.startDate || today}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 outline-none transition-all"
            />
            {errors.endDate && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.endDate}
              </p>
            )}
          </div>
        </div>

        <div className="flex gap-4 p-8 border-t-2 border-gray-100 bg-gray-50 rounded-b-3xl">
          <button
            onClick={handleSubmit}
            className="flex-1 bg-linear-to-r from-teal-600 to-cyan-600 text-white py-4 rounded-xl font-semibold hover:from-teal-700 hover:to-cyan-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
          >
            Save Project
          </button>
          <button
            onClick={close}
            className="flex-1 border-2 border-gray-300 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

/* ===================== MAIN COMPONENT ===================== */
const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      projectName: "HR Portal",
      projectCategory: "Software",
      projectLead: "John",
      status: "In Progress",
      startDate: "01/01/2025",
      endDate: "30/06/2025",
    },
  ]);

  const [openModal, setOpenModal] = useState(false);
  const [editData, setEditData] = useState(null);
  const [search, setSearch] = useState("");

  const handleSave = (data) => {
    if (editData) {
      setProjects(projects.map((p) => (p.id === data.id ? data : p)));
    } else {
      setProjects([...projects, { ...data, id: Date.now() }]);
    }
  };

  const filtered = projects.filter((p) =>
    Object.values(p).join(" ").toLowerCase().includes(search.toLowerCase())
  );

  const getStatusBadge = (status) => {
    const styles = {
      Planned: "bg-blue-100 text-blue-700 border-blue-200",
      "In Progress": "bg-amber-100 text-amber-700 border-amber-200",
      Completed: "bg-green-100 text-green-700 border-green-200",
    };
    
    const icons = {
      Planned: <Clock className="w-4 h-4" />,
      "In Progress": <AlertCircle className="w-4 h-4" />,
      Completed: <CheckCircle2 className="w-4 h-4" />,
    };

    return (
      <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold border-2 ${styles[status]}`}>
        {icons[status]}
        {status}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-teal-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center gap-3">
            <div className="w-12 h-12 bg-linear-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            Client Name
          </h1>
          <p className="text-gray-600 ml-15">Manage and track all your projects</p>
        </div>

        {/* Search & Add */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 outline-none transition-all bg-white shadow-sm"
            />
          </div>
          <button
            onClick={() => {
              setEditData(null);
              setOpenModal(true);
            }}
            className="bg-linear-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-teal-700 hover:to-cyan-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 justify-center"
          >
            <Plus className="w-5 h-5" />
            New Project
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-linear-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200">
                  <th className="p-5 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                    Project Name
                  </th>
                  <th className="p-5 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="p-5 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                    Lead
                  </th>
                  <th className="p-5 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="p-5 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                    Start Date
                  </th>
                  <th className="p-5 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                    Completion Date
                  </th>
                  <th className="p-5 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((row, index) => (
                  <tr
                    key={row.id}
                    className={`border-b border-gray-100 hover:bg-linear-to-r hover:from-teal-50 hover:to-cyan-50 transition-all ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                    }`}
                  >
                    <td className="p-5">
                      <div className="font-semibold text-gray-800">
                        {row.projectName}
                      </div>
                    </td>
                    <td className="p-5">
                      <span className="inline-flex items-center px-3 py-1 rounded-lg text-sm font-medium bg-purple-100 text-purple-700">
                        {row.projectCategory}
                      </span>
                    </td>
                    <td className="p-5">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-linear-to-br from-teal-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                          {row.projectLead[0]}
                        </div>
                        <span className="text-gray-700 font-medium">
                          {row.projectLead}
                        </span>
                      </div>
                    </td>
                    <td className="p-5">{getStatusBadge(row.status)}</td>
                    <td className="p-5">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        {row.startDate}
                      </div>
                    </td>
                    <td className="p-5">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        {row.endDate}
                      </div>
                    </td>
                    <td className="p-5">
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setEditData(row);
                            setOpenModal(true);
                          }}
                          className="p-2.5 bg-blue-100 text-blue-600 rounded-xl hover:bg-blue-200 transition-all hover:scale-110"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() =>
                            setProjects(projects.filter((p) => p.id !== row.id))
                          }
                          className="p-2.5 bg-red-100 text-red-600 rounded-xl hover:bg-red-200 transition-all hover:scale-110"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <p className="text-gray-500 text-lg font-medium">No projects found</p>
              <p className="text-gray-400 mt-1">Try adjusting your search</p>
            </div>
          )}
        </div>

        {/* Project Count */}
        <div className="mt-6 text-center text-gray-600">
          Showing <span className="font-semibold text-teal-600">{filtered.length}</span> of{" "}
          <span className="font-semibold text-teal-600">{projects.length}</span> projects
        </div>
      </div>

      {openModal && (
        <ProjectModal
          close={() => setOpenModal(false)}
          save={handleSave}
          editData={editData}
        />
      )}
    </div>
  );
};

export default Projects;
