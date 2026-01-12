import React, { useState, useRef, useEffect } from 'react';
import { Settings, Plus, Edit2, Trash2, Check, X, Menu } from 'lucide-react';

const LeaveTypes = () => {
  const [leaves, setLeaves] = useState([
    {
      id: 1,
      name: 'Annual Leave',
      type: 'Paid',
      unit: 'Days',
      status: 'Active',
      duration: 15,
      notification: 7,
      carryForward: 5,
      leaveQuota: 15,
      department: 'All Departments',
      workflow: 'Manager → HR',
      notes: 'Standard annual leave policy'
    },
    {
      id: 2,
      name: 'Sick Leave',
      type: 'Paid',
      unit: 'Days',
      status: 'Active',
      duration: 10,
      notification: 0,
      carryForward: 0,
      leaveQuota: 10,
      department: 'All Departments',
      workflow: 'Manager',
      notes: 'Medical certificate required for more than 2 days'
    },
    {
      id: 3,
      name: 'Maternity Leave',
      type: 'Paid',
      unit: 'Days',
      status: 'Active',
      duration: 90,
      notification: 30,
      carryForward: 0,
      leaveQuota: 90,
      department: 'All Departments',
      workflow: 'Manager → HR → CEO',
      notes: 'As per statutory requirements'
    },
    {
      id: 4,
      name: 'Unpaid Leave',
      type: 'Unpaid',
      unit: 'Days',
      status: 'Active',
      duration: 30,
      notification: 14,
      carryForward: 0,
      leaveQuota: 30,
      department: 'All Departments',
      workflow: 'Manager → HR',
      notes: ''
    },
    {
      id: 5,
      name: 'Compensatory Off',
      type: 'Compensatory',
      unit: 'Days',
      status: 'Active',
      duration: 5,
      notification: 3,
      carryForward: 2,
      leaveQuota: 5,
      department: 'All Departments',
      workflow: 'Manager',
      notes: 'For weekend/holiday work'
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingLeave, setEditingLeave] = useState(null);
  const [selectedLeaves, setSelectedLeaves] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showColumnFilter, setShowColumnFilter] = useState(false);
  const [visibleColumns, setVisibleColumns] = useState({
    checkbox: true,
    name: true,
    type: true,
    unit: true,
    status: true,
    duration: true,
    notification: true,
    actions: true
  });

  const [formData, setFormData] = useState({
    name: '',
    type: 'Paid',
    unit: 'Days',
    status: 'Active',
    duration: '',
    notification: '',
    carryForward: '',
    leaveQuota: '',
    department: 'All Departments',
    workflow: 'Manager',
    notes: ''
  });

  const departments = ['All Departments', 'Engineering', 'Sales', 'Marketing', 'HR', 'Finance', 'Operations'];
  const workflows = ['Manager', 'Manager → HR', 'Manager → HR → CEO', 'HR Only', 'Direct Manager'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.leaveQuota) {
      alert('Please fill in required fields: Leave Policy Name and Leave Quota');
      return;
    }

    if (editingLeave) {
      setLeaves(leaves.map(leave =>
        leave.id === editingLeave.id
          ? { ...formData, id: leave.id, duration: parseInt(formData.duration) || 0, notification: parseInt(formData.notification) || 0, carryForward: parseInt(formData.carryForward) || 0, leaveQuota: parseInt(formData.leaveQuota) || 0 }
          : leave
      ));
    } else {
      const newLeave = {
        ...formData,
        id: Math.max(...leaves.map(l => l.id), 0) + 1,
        duration: parseInt(formData.duration) || 0,
        notification: parseInt(formData.notification) || 0,
        carryForward: parseInt(formData.carryForward) || 0,
        leaveQuota: parseInt(formData.leaveQuota) || 0
      };
      setLeaves([...leaves, newLeave]);
    }

    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      type: 'Paid',
      unit: 'Days',
      status: 'Active',
      duration: '',
      notification: '',
      carryForward: '',
      leaveQuota: '',
      department: 'All Departments',
      workflow: 'Manager',
      notes: ''
    });
    setEditingLeave(null);
    setShowForm(false);
  };

  const handleEdit = (leave) => {
    setEditingLeave(leave);
    setFormData({
      ...leave,
      duration: leave.duration.toString(),
      notification: leave.notification.toString(),
      carryForward: leave.carryForward.toString(),
      leaveQuota: leave.leaveQuota.toString()
    });
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this leave policy?')) {
      setLeaves(leaves.filter(leave => leave.id !== id));
      setSelectedLeaves(selectedLeaves.filter(selectedId => selectedId !== id));
    }
  };

  const toggleSelectLeave = (id) => {
    setSelectedLeaves(prev =>
      prev.includes(id) ? prev.filter(selectedId => selectedId !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedLeaves.length === leaves.length) {
      setSelectedLeaves([]);
    } else {
      setSelectedLeaves(leaves.map(leave => leave.id));
    }
  };

  const toggleColumn = (columnName) => {
    setVisibleColumns(prev => ({
      ...prev,
      [columnName]: !prev[columnName]
    }));
  };

  const columnFilterRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (columnFilterRef.current && !columnFilterRef.current.contains(event.target)) {
        setShowColumnFilter(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getTypeColor = (type) => {
    switch (type) {
      case 'Paid': return 'bg-blue-100 text-blue-700';
      case 'Unpaid': return 'bg-purple-100 text-purple-700';
      case 'Compensatory': return 'bg-indigo-100 text-indigo-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const filteredLeaves = leaves.filter(leave =>
    leave.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    leave.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    leave.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-orange-500 rounded-2xl p-4">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-orange-600">Leave Types</h1>
                <p className="text-gray-500">{leaves.length} types configured</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search leave types, status..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 border border-gray-200 rounded-xl w-96 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Column Filter Dropdown */}
              <div className="relative" ref={columnFilterRef}>
                <button
                  onClick={() => setShowColumnFilter(!showColumnFilter)}
                  className="p-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                  title="Show/Hide Columns"
                >
                  <Menu className="w-5 h-5 text-gray-600" />
                </button>

                {showColumnFilter && (
                  <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-lg border border-gray-200 z-50">
                    <div className="p-4 border-b border-gray-200">
                      <h3 className="font-semibold text-gray-800">Show/Hide Column</h3>
                    </div>
                    <div className="p-2">
                      <label className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                        <input
                          type="checkbox"
                          checked={visibleColumns.checkbox}
                          onChange={() => toggleColumn('checkbox')}
                          className="w-5 h-5 rounded border-2 border-blue-500 text-blue-500 focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="text-gray-700">Checkbox</span>
                      </label>

                      <label className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                        <input
                          type="checkbox"
                          checked={visibleColumns.name}
                          onChange={() => toggleColumn('name')}
                          className="w-5 h-5 rounded border-2 border-blue-500 text-blue-500 focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="text-gray-700">Leave Name</span>
                      </label>

                      <label className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                        <input
                          type="checkbox"
                          checked={visibleColumns.type}
                          onChange={() => toggleColumn('type')}
                          className="w-5 h-5 rounded border-2 border-blue-500 text-blue-500 focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="text-gray-700">Leave Type</span>
                      </label>

                      <label className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                        <input
                          type="checkbox"
                          checked={visibleColumns.unit}
                          onChange={() => toggleColumn('unit')}
                          className="w-5 h-5 rounded border-2 border-blue-500 text-blue-500 focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="text-gray-700">Leave Unit</span>
                      </label>

                      <label className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                        <input
                          type="checkbox"
                          checked={visibleColumns.status}
                          onChange={() => toggleColumn('status')}
                          className="w-5 h-5 rounded border-2 border-blue-500 text-blue-500 focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="text-gray-700">Status</span>
                      </label>

                      <label className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                        <input
                          type="checkbox"
                          checked={visibleColumns.duration}
                          onChange={() => toggleColumn('duration')}
                          className="w-5 h-5 rounded border-2 border-blue-500 text-blue-500 focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="text-gray-700">Duration Days</span>
                      </label>

                      <label className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                        <input
                          type="checkbox"
                          checked={visibleColumns.notification}
                          onChange={() => toggleColumn('notification')}
                          className="w-5 h-5 rounded border-2 border-blue-500 text-blue-500 focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="text-gray-700">Notification Period</span>
                      </label>

                      <label className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                        <input
                          type="checkbox"
                          checked={visibleColumns.actions}
                          onChange={() => toggleColumn('actions')}
                          className="w-5 h-5 rounded border-2 border-blue-500 text-blue-500 focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="text-gray-700">Actions</span>
                      </label>
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => setShowForm(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition-colors"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Add/Edit Form */}
        {showForm && (
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">
                {editingLeave ? 'Edit Leave Policy' : 'Add New Leave Policy'}
              </h2>
              <button
                onClick={resetForm}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Leave Policy Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g., Annual Leave"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Leave Type *
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="Paid">Paid</option>
                  <option value="Unpaid">Unpaid</option>
                  <option value="Compensatory">Compensatory</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Leave Quota (Days) *
                </label>
                <input
                  type="number"
                  name="leaveQuota"
                  value={formData.leaveQuota}
                  onChange={handleInputChange}
                  min="0"
                  placeholder="e.g., 15"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Carry Forward Limit (Days)
                </label>
                <input
                  type="number"
                  name="carryForward"
                  value={formData.carryForward}
                  onChange={handleInputChange}
                  min="0"
                  placeholder="e.g., 5"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Duration (Days)
                </label>
                <input
                  type="number"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  min="0"
                  placeholder="e.g., 15"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Notification Period (Days)
                </label>
                <input
                  type="number"
                  name="notification"
                  value={formData.notification}
                  onChange={handleInputChange}
                  min="0"
                  placeholder="e.g., 7"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Select Department *
                </label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Leave Approval Workflow *
                </label>
                <select
                  name="workflow"
                  value={formData.workflow}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  {workflows.map(wf => (
                    <option key={wf} value={wf}>{wf}</option>
                  ))}
                </select>
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Notes (Optional)
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="Add any additional notes or policy details..."
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div className="col-span-2 flex justify-end gap-3">
                <button
                  onClick={resetForm}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                >
                  {editingLeave ? 'Update Leave Policy' : 'Add Leave Policy'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Table */}
        <div className="hidden lg:block bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  {visibleColumns.checkbox && (
                    <th className="px-6 py-4 text-left">
                      <input
                        type="checkbox"
                        checked={selectedLeaves.length === leaves.length && leaves.length > 0}
                        onChange={toggleSelectAll}
                        className="w-4 h-4 rounded border-gray-300"
                      />
                    </th>
                  )}
                  {visibleColumns.name && (
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                      Leave Name
                    </th>
                  )}
                  {visibleColumns.type && (
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                      Leave Type
                    </th>
                  )}
                  {visibleColumns.unit && (
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                      Leave Unit
                    </th>
                  )}
                  {visibleColumns.status && (
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                      Status
                    </th>
                  )}
                  {visibleColumns.duration && (
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                      Duration Days
                    </th>
                  )}
                  {visibleColumns.notification && (
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                      Notification Period
                    </th>
                  )}
                  {visibleColumns.actions && (
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                      Actions
                    </th>
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredLeaves.map((leave) => (
                  <tr key={leave.id} className="hover:bg-gray-50 transition-colors">
                    {visibleColumns.checkbox && (
                      <td className="px-6 py-4">
                        <input
                          type="checkbox"
                          checked={selectedLeaves.includes(leave.id)}
                          onChange={() => toggleSelectLeave(leave.id)}
                          className="w-4 h-4 rounded border-gray-300"
                        />
                      </td>
                    )}
                    {visibleColumns.name && (
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-orange-600 font-semibold">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {leave.name}
                        </div>
                      </td>
                    )}
                    {visibleColumns.type && (
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(leave.type)}`}>
                          {leave.type}
                        </span>
                      </td>
                    )}
                    {visibleColumns.unit && (
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                          {leave.unit}
                        </span>
                      </td>
                    )}
                    {visibleColumns.status && (
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                            {leave.status}
                          </span>
                        </div>
                      </td>
                    )}
                    {visibleColumns.duration && (
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
                          {leave.duration} days
                        </span>
                      </td>
                    )}
                    {visibleColumns.notification && (
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-sm font-medium">
                          {leave.notification} days
                        </span>
                      </td>
                    )}
                    {visibleColumns.actions && (
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleEdit(leave)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Edit"
                          >
                            <Edit2 className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleDelete(leave.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden space-y-4">
          {filteredLeaves.map((leave) => (
            <div key={leave.id} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-gray-800 text-lg flex items-center gap-2">
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {leave.name}
                  </h3>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getTypeColor(leave.type)}`}>
                  {leave.type}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                <div>
                  <span className="text-xs text-gray-400 block uppercase">Unit</span>
                  <span className="font-medium">{leave.unit}</span>
                </div>
                <div>
                  <span className="text-xs text-gray-400 block uppercase">Status</span>
                  <span className="font-medium text-green-600 flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    {leave.status}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-gray-400 block uppercase">Duration</span>
                  <span className="font-medium">{leave.duration} days</span>
                </div>
                <div>
                  <span className="text-xs text-gray-400 block uppercase">Notification</span>
                  <span className="font-medium">{leave.notification} days</span>
                </div>
              </div>

              <div className="flex gap-2 justify-end mt-2 pt-2 border-t border-gray-50">
                <button
                  onClick={() => handleEdit(leave)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors bg-blue-50/50"
                >
                  <Edit2 size={18} />
                </button>
                <button
                  onClick={() => handleDelete(leave.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors bg-red-50/50"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaveTypes;