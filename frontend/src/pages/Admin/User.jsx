import React, { useState } from 'react';
import { Calendar, X, Bell, CheckCircle, FileText, Clock } from 'lucide-react';

const User = () => {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState(null);
  
  // Data duplicated for standalone hook - in a real app this would come from an API/Context
  const [notices] = useState([
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

  const getStatusColor = (status) => {
    switch(status) {
      case 'Published': return 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20';
      case 'Draft': return 'bg-slate-500/10 text-slate-700 border-slate-500/20';
      case 'Scheduled': return 'bg-blue-500/10 text-blue-700 border-blue-500/20';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
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

  const handleViewDetails = (notice) => {
    setSelectedNotice(notice);
    setShowDetailsModal(true);
  };

  // Only show published notices for users
  const publishedNotices = notices.filter(notice => notice.status === 'Published');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg shadow-blue-100/50 p-6 mb-6 border border-blue-100/50">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent flex items-center gap-3">
            <Bell className="text-blue-600" />
            Your Notices
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            {publishedNotices.length} published notices
          </p>
        </div>

        <div className="grid gap-4">
          {publishedNotices.map(notice => (
            <div 
              key={notice.id} 
              className="bg-white rounded-2xl shadow-lg shadow-blue-100/50 p-6 border-l-4 border-blue-600 hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-300 cursor-pointer"
              onClick={() => handleViewDetails(notice)}
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Bell className="text-blue-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{notice.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-3">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg font-medium">
                      {notice.audience}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {formatDate(notice.publishDate)}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed line-clamp-2">
                    {notice.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showDetailsModal && selectedNotice && (
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
      )}
    </div>
  );
};

export default User;
