import React, { useState } from 'react';
import { Calendar, X, Edit2, Trash2, Bell, ChevronDown } from 'lucide-react';

const Notice = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [notices, setNotices] = useState([
    {
      id: 1,
      title: 'Holiday Info',
      description: 'Office will remain closed on Republic Day (26th January 2026). Regular operations will resume on 27th January.',
      audience: 'All Employees',
      publishDate: '2026-01-10',
      status: 'Published'
    },
    {
      id: 2,
      title: 'Server Maintenance',
      description: 'Scheduled server maintenance on 12th January from 2 AM to 6 AM. Services may be temporarily unavailable.',
      audience: 'IT Dept',
      publishDate: '2026-01-12',
      status: 'Draft'
    },
    {
      id: 3,
      title: 'Policy Update',
      description: 'New remote work policy will be effective from 15th January 2026. Please review the updated guidelines.',
      audience: 'HR Dept',
      publishDate: '2026-01-15',
      status: 'Scheduled'
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
  const [view, setView] = useState('admin'); // 'admin' or 'user'

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

  const getStatusColor = (status) => {
    switch(status) {
      case 'Published': return 'bg-green-100 text-green-800';
      case 'Draft': return 'bg-gray-100 text-gray-800';
      case 'Scheduled': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* View Toggle */}
      <div className="max-w-7xl mx-auto mb-6">
        <div className="flex gap-2 bg-white p-1 rounded-lg shadow-sm w-fit">
          <button
            onClick={() => setView('admin')}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              view === 'admin' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Admin View
          </button>
          <button
            onClick={() => setView('user')}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              view === 'user' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            User View
          </button>
        </div>
      </div>

      {/* Admin View */}
      {view === 'admin' && (
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900">Notices</h1>
              <button
                onClick={() => setShowCreateModal(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <span className="text-xl">+</span>
                Create Notice
              </button>
            </div>
          </div>

          {/* Notices Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Title</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Audience</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Publish Date</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Status</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {notices.map(notice => (
                  <tr key={notice.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">{notice.title}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{notice.audience}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{formatDate(notice.publishDate)}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(notice.status)}`}>
                        {notice.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-3">
                        <button
                          onClick={() => handleEdit(notice)}
                          className="text-blue-600 hover:text-blue-800"
                          title="Edit"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(notice.id)}
                          className="text-red-600 hover:text-red-800"
                          title="Delete"
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
      )}

      {/* User View */}
      {view === 'user' && (
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Bell className="text-blue-600" />
              Your Notices
            </h1>
          </div>

          <div className="grid gap-4">
            {notices
              .filter(notice => notice.status === 'Published')
              .map(notice => (
                <div key={notice.id} className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-blue-600">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Bell className="text-blue-600" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{notice.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span>{notice.audience}</span>
                        <span>•</span>
                        <span>{formatDate(notice.publishDate)}</span>
                      </div>
                      <p className="text-gray-700 mb-3">
                        {notice.description.length > 100 
                          ? `${notice.description.substring(0, 100)}...` 
                          : notice.description}
                      </p>
                      {notice.description.length > 100 && (
                        <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                          Read More →
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Create/Edit Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  {editingId ? 'Edit Notice' : 'Create Notice'}
                </h2>
                <button
                  onClick={handleCancel}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Notice Title */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Notice Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="Holiday Announcement"
                    required
                  />
                </div>

                {/* Notice Description */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Notice Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows="6"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                    placeholder="Office will remain closed on..."
                    required
                  />
                </div>

                {/* Target Audience */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Target Audience <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="audience"
                      value={formData.audience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white"
                      required
                    >
                      {audiences.map(audience => (
                        <option key={audience} value={audience}>{audience}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                  </div>
                </div>

                {/* Publish Date */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Publish Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      name="publishDate"
                      value={formData.publishDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      required
                    />
                    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                  </div>
                </div>

                {/* Status */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white"
                      required
                    >
                      <option value="Published">Published</option>
                      <option value="Draft">Draft</option>
                      <option value="Scheduled">Scheduled</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                  </div>
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-3 pt-4 border-t">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {editingId ? 'Update Notice' : 'Publish Notice'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notice;