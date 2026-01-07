
import React, { useState } from "react";
import { Users, DollarSign, Crown, Briefcase, Globe, ArrowUp, ArrowDown, Search, Eye, Pencil, Trash2, } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Settings } from 'lucide-react';
import { Legend } from 'recharts';
import { Gift, Bell, Trophy, Cake, Download, CheckCircle, Clock, FileText, TrendingUp, TrendingDown, X } from "lucide-react";

const Dashboard = () => {
    const [timeFilter, setTimeFilter] = useState("month");

    const statsCards = [
        {
            title: "New Projects",
            value: "102",
            change: "10%",
            trend: "up",
            icon: Briefcase,
            bg: "from-emerald-400 via-teal-500 to-cyan-500",
            iconBg: "bg-emerald-500/20",
            iconColor: "text-emerald-600",
        },
        {
            title: "New Customers",
            value: "154",
            change: "4%",
            trend: "up",
            icon: Users,
            bg: "from-blue-400 via-indigo-500 to-purple-500",
            iconBg: "bg-blue-500/20",
            iconColor: "text-blue-600",
        },
        {
            title: "Inquiry",
            value: "524",
            change: "23%",
            trend: "up",
            icon: Globe,
            bg: "from-purple-400 via-fuchsia-500 to-pink-500",
            iconBg: "bg-purple-500/20",
            iconColor: "text-purple-600",
        },
        {
            title: "Earning",
            value: "$2,453",
            change: "6%",
            trend: "down",
            icon: DollarSign,
            bg: "from-orange-400 via-amber-500 to-yellow-500",
            iconBg: "bg-orange-500/20",
            iconColor: "text-orange-600",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30">
            <div className="p-3 sm:p-4 md:p-6 lg:p-8 max-w-[1920px] mx-auto">
                {/* Header */}
                <div className="mb-6 md:mb-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent flex items-center gap-2 md:gap-3 mb-2">
                                <div className="p-2 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl shadow-lg">
                                    <Crown className="text-white" size={28} />
                                </div>
                                Super Admin Dashboard
                            </h1>
                            <p className="text-gray-600 dark:text-gray-400 mt-1 md:mt-2 text-sm md:text-base font-medium">Welcome back! Here's your comprehensive system overview</p>
                        </div>
                        <div className="flex gap-2 sm:gap-3">
                            {["week", "month", "year"].map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setTimeFilter(filter)}
                                    className={`px-4 md:px-5 py-2 md:py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                                        timeFilter === filter
                                            ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-500/50"
                                            : "bg-white text-gray-600 hover:bg-gray-50 shadow-md hover:shadow-lg border border-gray-200"
                                    }`}
                                >
                                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
                    {statsCards.map((card, index) => {
                        const Icon = card.icon;
                        return (
                            <div
                                key={index}
                                className={`group relative overflow-hidden rounded-2xl md:rounded-3xl p-5 md:p-6 text-white shadow-2xl bg-gradient-to-br ${card.bg} hover:scale-[1.02] transition-all duration-300 cursor-pointer border border-white/20`}
                            >
                                {/* Animated background pattern */}
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute inset-0" style={{
                                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                                        backgroundSize: '24px 24px'
                                    }}></div>
                                </div>
                                
                                <Icon className="absolute right-4 top-4 opacity-20 group-hover:opacity-30 transition-opacity" size={70} />
                                
                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-3">
                                        <p className="text-sm md:text-base font-semibold opacity-95">{card.title}</p>
                                        <div className={`${card.iconBg} p-2 rounded-lg`}>
                                            <Icon className={card.iconColor} size={20} />
                                        </div>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 drop-shadow-lg">{card.value}</h2>
                                    
                                    <div className="w-full h-1.5 bg-white/30 rounded-full mb-3 overflow-hidden">
                                        <div className="h-full w-[70%] bg-white rounded-full shadow-lg animate-pulse" />
                                    </div>
                                    
                                    <div className="flex items-center gap-2 text-xs md:text-sm font-medium">
                                        {card.trend === "up" ? (
                                            <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-lg">
                                                <TrendingUp size={14} />
                                                <span>{card.change}</span>
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-lg">
                                                <TrendingDown size={14} />
                                                <span>{card.change}</span>
                                            </div>
                                        )}
                                        <span className="opacity-90">Since last month</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Charts Row */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
                    <div className="lg:col-span-2">
                        <EmployeeAttrition />
                    </div>
                    <div className="lg:col-span-1">
                        <ProjectStatus />
                    </div>
                </div>

                {/* Leave Requests */}
                <div className="mb-6">
                    <LeaveRequestsSection />
                </div>

                {/* Earning & Country Clients */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6">
                    <EarningSource />
                    <CountryClients />
                </div>

                {/* Attendance & Top Performers */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6">
                    <AttendanceSummary />
                    <TopPerformingEmployee />
                </div>

                {/* Upcoming Events */}
                <div className="mb-6">
                    <UpcomingEvents />
                </div>

                {/* Gender Diversity */}
                <div className="mb-6">
                    <GenderDiversity />
                </div>

                {/* Payments */}
                <div className="mb-6">
                    <OurPayments />
                </div>

                {/* Client Payment */}
                <div className="mb-6">
                    <ClientPayment />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

const data = [
    { department: "Engineering", rate: 8.2 },
    { department: "Sales", rate: 12.5 },
    { department: "Marketing", rate: 7.8 },
    { department: "HR", rate: 5.3 },
    { department: "Finance", rate: 6.7 },
    { department: "Operations", rate: 9.4 },
];

const EmployeeAttrition = () => {
    return (
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-gray-100 p-5 md:p-6 h-full hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-5">
                <div>
                    <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-1">Employee Attrition Rate</h2>
                    <p className="text-xs md:text-sm text-gray-500">Department-wise analysis</p>
                </div>
                <div className="p-2 bg-red-50 rounded-lg">
                    <Users className="text-red-500" size={20} />
                </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-6">
                <div className="bg-gradient-to-br from-red-50 to-pink-50 p-4 rounded-xl border border-red-100">
                    <p className="text-2xl md:text-3xl font-extrabold text-red-600 mb-1">8.5%</p>
                    <p className="text-xs md:text-sm text-gray-600 font-medium">Overall Attrition Rate</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border border-green-100">
                    <p className="text-xs md:text-sm text-gray-600 mb-1">Industry Average</p>
                    <p className="text-green-600 font-bold text-base md:text-lg flex items-center gap-1">
                        <TrendingDown size={16} />
                        10.2% ↓ 1.7%
                    </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-100">
                    <p className="text-xs md:text-sm text-gray-600 mb-1">Previous Year</p>
                    <p className="text-green-600 font-bold text-base md:text-lg flex items-center gap-1">
                        <TrendingDown size={16} />
                        9.7% ↓ 1.2%
                    </p>
                </div>
            </div>
            
            <div className="h-48 md:h-64 lg:h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis 
                            dataKey="department" 
                            tick={{ fontSize: 11, fill: '#6b7280' }} 
                            axisLine={{ stroke: '#e5e7eb' }}
                        />
                        <YAxis 
                            tick={{ fontSize: 11, fill: '#6b7280' }} 
                            axisLine={{ stroke: '#e5e7eb' }}
                        />
                        <Tooltip 
                            contentStyle={{ 
                                backgroundColor: 'white', 
                                border: '1px solid #e5e7eb', 
                                borderRadius: '8px',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                            }} 
                        />
                        <Bar 
                            dataKey="rate" 
                            fill="url(#colorGradient)" 
                            radius={[8, 8, 0, 0]}
                        >
                            <defs>
                                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#ef4444" />
                                    <stop offset="100%" stopColor="#f87171" />
                                </linearGradient>
                            </defs>
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

const projects = [
    { name: "Project A", progress: 30, duration: "2 Months" },
    { name: "Project B", progress: 55, duration: "3 Months" },
    { name: "Project C", progress: 67, duration: "1 Month" },
    { name: "Project D", progress: 70, duration: "2 Months" },
    { name: "Project E", progress: 24, duration: "3 Months" },
    { name: "Project F", progress: 77, duration: "4 Months" },
];

const ProjectStatus = () => {
    const getProgressColor = (progress) => {
        if (progress >= 70) return "from-green-500 to-emerald-600";
        if (progress >= 50) return "from-blue-500 to-indigo-600";
        if (progress >= 30) return "from-yellow-500 to-orange-500";
        return "from-red-500 to-pink-600";
    };

    return (
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-gray-100 p-5 md:p-6 h-full flex flex-col hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-5">
                <div>
                    <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-1">Project Status</h2>
                    <p className="text-xs md:text-sm text-gray-500">Active projects overview</p>
                </div>
                <div className="p-2 bg-blue-50 rounded-lg">
                    <Briefcase className="text-blue-500" size={20} />
                </div>
            </div>
            
            <div className="space-y-4 md:space-y-5 flex-1 overflow-y-auto pr-2">
                {projects.map((project, i) => (
                    <div key={i} className="group">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-sm md:text-base text-gray-800">{project.name}</span>
                            <span className="text-xs md:text-sm text-gray-500 bg-gray-50 px-2 py-1 rounded-lg font-medium">{project.duration}</span>
                        </div>
                        <div className="w-full bg-gray-100 h-2.5 md:h-3 rounded-full overflow-hidden shadow-inner">
                            <div 
                                className={`h-full bg-gradient-to-r ${getProgressColor(project.progress)} rounded-full transition-all duration-500 shadow-sm group-hover:shadow-md`} 
                                style={{ width: `${project.progress}%` }}
                            />
                        </div>
                        <div className="flex justify-end mt-1">
                            <span className="text-xs font-semibold text-gray-600">{project.progress}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const stats = [
    { label: "Total", value: 11, bg: "bg-gray-100", text: "text-blue-600" },
    { label: "Pending", value: 4, bg: "bg-yellow-50", text: "text-yellow-500" },
    { label: "Approved", value: 5, bg: "bg-green-50", text: "text-green-600" },
    { label: "Rejected", value: 2, bg: "bg-red-50", text: "text-red-500" },
];

const requestsData = [
    { name: "John Smith", dept: "Engineering", type: "Annual Leave", duration: "Jul 15 - Jul 20", reason: "Family vacation", days: 6, status: "Approved" },
    { name: "Emily Johnson", dept: "Marketing", type: "Sick Leave", duration: "Jul 10 - Jul 12", reason: "Medical appointment", days: 3, status: "Approved" },
    { name: "Michael Brown", dept: "Sales", type: "Personal Leave", duration: "Jul 25", reason: "Personal matters", days: 1, status: "Pending" },
    { name: "Jessica Williams", dept: "HR", type: "Maternity Leave", duration: "Aug 1 - Oct 30", reason: "Maternity leave", days: 90, status: "Approved" },
    { name: "David Miller", dept: "Finance", type: "Annual Leave", duration: "Jul 18 - Jul 22", reason: "Family event", days: 5, status: "Rejected" },
    { name: "Sarah Davis", dept: "Engineering", type: "Sick Leave", duration: "Jul 28 - Jul 29", reason: "Medical treatment", days: 2, status: "Pending" },
    { name: "Robert Wilson", dept: "Operations", type: "Annual Leave", duration: "Aug 5 - Aug 12", reason: "Summer vacation", days: 8, status: "Pending" },
    { name: "Lisa Anderson", dept: "Marketing", type: "Personal Leave", duration: "Jul 30", reason: "Moving house", days: 1, status: "Approved" },
];

const statusStyle = {
    Approved: "bg-green-100 text-green-700",
    Pending: "bg-blue-100 text-blue-600",
    Rejected: "bg-orange-100 text-orange-600",
};

const LeaveRequestsSection = () => {
    const [search, setSearch] = useState("");
    const filteredRequests = requestsData.filter((item) =>
        `${item.name} ${item.dept} ${item.type} ${item.status}`.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-gray-100 p-5 md:p-6 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-5">
                <div>
                    <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-1">Leave Requests Summary</h2>
                    <p className="text-xs md:text-sm text-gray-500">Manage employee leave requests</p>
                </div>
                <div className="p-2 bg-indigo-50 rounded-lg">
                    <Clock className="text-indigo-500" size={20} />
                </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mb-5">
                {stats.map((item, i) => (
                    <div key={i} className={`rounded-xl md:rounded-2xl p-4 text-center border-2 transition-all hover:scale-105 ${item.bg} ${item.text.includes('blue') ? 'border-blue-200' : item.text.includes('green') ? 'border-green-200' : item.text.includes('yellow') ? 'border-yellow-200' : 'border-red-200'}`}>
                        <p className={`text-2xl md:text-3xl font-extrabold ${item.text} mb-1`}>{item.value}</p>
                        <p className="text-xs md:text-sm text-gray-600 font-medium">{item.label}</p>
                    </div>
                ))}
            </div>
            
            <div className="relative mb-5">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by name, department, leave type..."
                    className="w-full pl-12 pr-4 py-2.5 md:py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                />
            </div>
            
            <div className="overflow-x-auto max-h-96 overflow-y-auto border-2 border-gray-100 rounded-xl">
                <table className="min-w-full text-xs md:text-sm">
                    <thead className="sticky top-0 bg-gradient-to-r from-indigo-50 to-purple-50 z-10 border-b-2 border-gray-200">
                        <tr className="text-left">
                            <th className="py-4 px-4 font-bold text-gray-700">Employee</th>
                            <th className="py-4 px-4 font-bold text-gray-700">Leave Type</th>
                            <th className="py-4 px-4 font-bold text-gray-700">Duration</th>
                            <th className="py-4 px-4 font-bold text-gray-700 text-center">Days</th>
                            <th className="py-4 px-4 font-bold text-gray-700">Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                        {filteredRequests.map((item, i) => (
                            <tr key={i} className="hover:bg-indigo-50/50 transition-colors">
                                <td className="py-4 px-4">
                                    <p className="font-semibold text-gray-800">{item.name}</p>
                                    <p className="text-xs text-gray-500 mt-0.5">{item.dept}</p>
                                </td>
                                <td className="py-4 px-4">
                                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium">
                                        {item.type}
                                    </span>
                                </td>
                                <td className="py-4 px-4">
                                    <p className="font-medium text-gray-800">{item.duration}</p>
                                    <p className="text-xs text-gray-500 mt-0.5">{item.reason}</p>
                                </td>
                                <td className="py-4 px-4 text-center">
                                    <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-700 rounded-lg font-bold text-sm">
                                        {item.days}
                                    </span>
                                </td>
                                <td className="py-4 px-4">
                                    <span className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold ${statusStyle[item.status]}`}>
                                        {item.status === "Approved" && <CheckCircle size={12} />}
                                        {item.status === "Pending" && <Clock size={12} />}
                                        {item.status === "Rejected" && <X size={12} />}
                                        {item.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const earningSourceData = [
    { name: "envato.com", amount: 15426, percentage: 17, color: "#22c55e" },
    { name: "google.com", amount: 24458, percentage: 27, color: "#ef4444" },
    { name: "yahoo.com", amount: 22702, percentage: 25, color: "#6366f1" },
    { name: "store", amount: 16345, percentage: 18, color: "#f97316" },
    { name: "Others", amount: 11877, percentage: 13, color: "#1f2937" },
    { name: "amazon.com", amount: 9500, percentage: 10, color: "#06b6d4" },
    { name: "ebay.com", amount: 8200, percentage: 9, color: "#a855f7" },
];

const EarningSource = () => {
    const totalEarning = earningSourceData.reduce((sum, item) => sum + item.amount, 0);
    return (
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-gray-100 h-full max-h-[500px] flex flex-col overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="p-5 md:p-6 border-b-2 border-gray-100 flex-shrink-0 bg-gradient-to-r from-orange-50 to-amber-50">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-1">Earning Source</h2>
                        <p className="text-xs md:text-sm text-gray-500">Revenue breakdown by source</p>
                    </div>
                    <div className="p-2 bg-orange-100 rounded-lg">
                        <DollarSign className="text-orange-600" size={20} />
                    </div>
                </div>
                <div className="text-center">
                    <h3 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                        ${totalEarning.toLocaleString()}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 mt-1 font-medium">Total Earnings</p>
                </div>
            </div>
            <div className="flex-1 overflow-y-auto p-5 md:p-6 space-y-4">
                {earningSourceData.map((item, index) => (
                    <div key={index} className="group">
                        <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center gap-2 min-w-0 flex-1">
                                <div 
                                    className="w-3 h-3 rounded-full flex-shrink-0 shadow-sm" 
                                    style={{ backgroundColor: item.color }}
                                />
                                <span className="text-sm md:text-base font-semibold text-gray-800 truncate">{item.name}</span>
                            </div>
                            <span 
                                className="px-3 py-1 rounded-lg text-xs font-bold text-white flex-shrink-0 shadow-md" 
                                style={{ backgroundColor: item.color }}
                            >
                                {item.percentage}%
                            </span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden shadow-inner">
                            <div 
                                className="h-full rounded-full transition-all duration-500 shadow-sm group-hover:shadow-md" 
                                style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                            />
                        </div>
                        <p className="text-xs text-gray-500 mt-1 font-medium">${item.amount.toLocaleString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const countryClientsData = [
    { name: "India", value: 23, change: 32, color: "#06b6d4" },
    { name: "USA", value: 32, change: 12, color: "#3b82f6" },
    { name: "Shrilanka", value: 12, change: -12, color: "#f97316" },
    { name: "Australia", value: 32, change: 3, color: "#22c55e" },
    { name: "Canada", value: 18, change: 8, color: "#8b5cf6" },
    { name: "UK", value: 25, change: 15, color: "#ec4899" },
    { name: "Germany", value: 14, change: -5, color: "#eab308" },
    { name: "France", value: 20, change: 10, color: "#14b8a6" },
];

const CountryClients = () => {
    const chartData = countryClientsData.map(item => ({ name: item.name, value: item.value }));
    return (
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-gray-100 h-full max-h-[500px] flex flex-col overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="p-5 md:p-6 border-b-2 border-gray-100 flex-shrink-0 bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-1">Country Wise Clients</h2>
                        <p className="text-xs md:text-sm text-gray-500">Global client distribution</p>
                    </div>
                    <div className="p-2 bg-blue-100 rounded-lg">
                        <Globe className="text-blue-600" size={20} />
                    </div>
                </div>
            </div>
            <div className="flex-1 overflow-y-auto p-5 md:p-6">
                <div className="h-40 md:h-56 mb-5">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie 
                                data={chartData} 
                                cx="50%" 
                                cy="50%" 
                                innerRadius="55%" 
                                outerRadius="80%" 
                                paddingAngle={3} 
                                dataKey="value"
                            >
                                {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={countryClientsData[index].color} stroke="#fff" strokeWidth={2} />
                                ))}
                            </Pie>
                            <Tooltip 
                                contentStyle={{ 
                                    backgroundColor: 'white', 
                                    border: '1px solid #e5e7eb', 
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                                }} 
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="space-y-3">
                    {countryClientsData.map((country, index) => (
                        <div key={index} className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-200">
                            <div className="flex items-center gap-3 min-w-0 flex-1">
                                <div 
                                    className="w-4 h-4 rounded-full flex-shrink-0 shadow-sm border-2 border-white" 
                                    style={{ backgroundColor: country.color }}
                                />
                                <span className="text-sm md:text-base font-semibold text-gray-800 truncate">{country.name}</span>
                            </div>
                            <div className="flex items-center gap-3 flex-shrink-0">
                                <span className="text-sm md:text-base font-bold text-gray-800">{country.value}</span>
                                <span className={`text-xs font-bold px-2 py-1 rounded-lg ${country.change > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                    {country.change > 0 ? <TrendingUp size={12} className="inline mr-1" /> : <TrendingDown size={12} className="inline mr-1" />}
                                    {country.change > 0 ? '+' : ''}{country.change}%
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const weeklyData = [
    { day: "Mon", value: 95 },
    { day: "Tue", value: 97 },
    { day: "Wed", value: 94 },
    { day: "Thu", value: 96 },
    { day: "Fri", value: 93 },
];

const AttendanceSummary = () => {
    return (
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-gray-100 p-5 md:p-6 flex flex-col h-96 max-h-[500px] hover:shadow-2xl transition-shadow duration-300">
            <div className="flex justify-between items-start mb-5">
                <div>
                    <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-1">Attendance Summary</h2>
                    <p className="text-xs md:text-sm text-gray-500">Employee attendance overview</p>
                </div>
                <div className="text-right bg-gradient-to-br from-green-50 to-emerald-50 px-4 py-2 rounded-xl border border-green-100">
                    <p className="text-xs md:text-sm font-semibold text-gray-700">January 6, 2026</p>
                    <p className="text-xs text-gray-500">Tuesday</p>
                </div>
            </div>
            <div className="mb-5 bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border border-green-100">
                <p className="text-xs md:text-sm font-semibold text-gray-600 mb-2">Monthly Attendance Rate</p>
                <p className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">95.2%</p>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                    <div className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full transition-all shadow-sm" style={{ width: "95.2%" }} />
                </div>
            </div>
            <p className="text-sm md:text-base font-semibold text-gray-800 mb-3">Weekly Attendance</p>
            <div className="flex-1 min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={weeklyData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis dataKey="day" tick={{ fontSize: 11, fill: '#6b7280' }} axisLine={{ stroke: '#e5e7eb' }} />
                        <YAxis domain={[90, 100]} tick={{ fontSize: 11, fill: '#6b7280' }} axisLine={{ stroke: '#e5e7eb' }} />
                        <Tooltip 
                            contentStyle={{ 
                                backgroundColor: 'white', 
                                border: '1px solid #e5e7eb', 
                                borderRadius: '8px',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                            }} 
                        />
                        <Bar 
                            dataKey="value" 
                            fill="url(#attendanceGradient)" 
                            radius={[8, 8, 0, 0]}
                        >
                            <defs>
                                <linearGradient id="attendanceGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#4f46e5" />
                                    <stop offset="100%" stopColor="#6366f1" />
                                </linearGradient>
                            </defs>
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

const employees = [
    { rank: 1, name: "Emma Thompson", subject: "Mathematics", improvement: "+5%", score: "98%", color: "bg-yellow-400" },
    { rank: 2, name: "James Wilson", subject: "Science", improvement: "+3%", score: "96%", color: "bg-green-400" },
    { rank: 3, name: "Sophia Brown", subject: "English", improvement: "+4%", score: "95%", color: "bg-blue-400" },
    { rank: 4, name: "Oliver Davis", subject: "Physics", improvement: "+2%", score: "94%", color: "bg-purple-400" },
    { rank: 5, name: "Mia Johnson", subject: "Chemistry", improvement: "+6%", score: "93%", color: "bg-pink-400" },
];

const TopPerformingEmployee = () => {
    return (
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-gray-100 p-5 md:p-6 flex flex-col h-96 max-h-[500px] hover:shadow-2xl transition-shadow duration-300">
            <div className="flex justify-between items-center mb-5">
                <div>
                    <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-1">Top Performing Employee</h2>
                    <p className="text-xs md:text-sm text-gray-500">Best performers this month</p>
                </div>
                <button className="text-blue-600 text-xs md:text-sm font-semibold hover:text-blue-700 hover:underline transition-colors">View All</button>
            </div>
            <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                {employees.map((emp, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                        <div className="flex items-center gap-4 flex-1 min-w-0">
                            <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl text-white flex items-center justify-center font-extrabold text-base md:text-lg flex-shrink-0 shadow-lg ${emp.color} group-hover:scale-110 transition-transform`}>
                                {emp.rank}
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="font-bold text-sm md:text-base text-gray-800 truncate mb-1">{emp.name}</p>
                                <div className="flex gap-2 flex-wrap">
                                    <span className="px-2.5 py-1 bg-indigo-100 text-indigo-700 rounded-lg text-xs font-semibold">{emp.subject}</span>
                                    <span className="px-2.5 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-semibold flex items-center gap-1">
                                        <TrendingUp size={10} />
                                        {emp.improvement}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <span className="px-4 py-2 rounded-xl bg-gradient-to-r from-red-500 to-pink-600 text-white text-sm md:text-base font-extrabold flex-shrink-0 shadow-lg">
                            {emp.score}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};


const eventsData = {
    birthdays: [
        {
            date: "Jan 6",
            label: "Today",
            name: "John Smith",
            dept: "Engineering",
            days: "Today",
        },
        {
            date: "Jan 11",
            label: "5 days",
            name: "Michael Brown",
            dept: "Sales",
            days: "5 days",
        },
        {
            date: "Jan 14",
            label: "8 days",
            name: "David Miller",
            dept: "Finance",
            days: "8 days",
        },
        {
            date: "Jan 18",
            label: "12 days",
            name: "Robert Wilson",
            dept: "Customer Support",
            days: "12 days",
        },
        {
            date: "Jan 8",
            label: "2 days",
            name: "Laura Martinez",
            dept: "Legal",
            days: "2 days",
        },
    ],
    anniversaries: [],
};

const UpcomingEvents = () => {
    const [activeTab, setActiveTab] = useState("birthdays");

    return (
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-gray-100 h-[520px] flex flex-col hover:shadow-2xl transition-shadow duration-300">

            {/* HEADER */}
            <div className="p-5 md:p-6 border-b-2 border-gray-100 bg-gradient-to-r from-purple-50 to-pink-50">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-1">Upcoming Events</h2>
                        <p className="text-xs md:text-sm text-gray-500">Celebrations and milestones</p>
                    </div>
                    <div className="p-2 bg-purple-100 rounded-lg">
                        <Cake className="text-purple-600" size={20} />
                    </div>
                </div>
            </div>

            {/* TODAY EVENT */}
            <div className="mx-5 md:mx-6 mt-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-white shadow-xl overflow-hidden">
                <div className="flex items-center gap-2 px-5 py-3 font-semibold bg-white/10">
                    <Cake size={20} />
                    Today's Events
                </div>
                <div className="bg-white text-gray-900 px-5 py-4 flex items-center gap-4">
                    <div className="bg-gradient-to-br from-red-100 to-pink-100 p-3 rounded-xl">
                        <Cake className="text-red-500" size={24} />
                    </div>
                    <div>
                        <p className="font-bold text-base md:text-lg">John Smith</p>
                        <p className="text-sm text-gray-600">Birthday Celebration</p>
                    </div>
                </div>
            </div>

            {/* TABS */}
            <div className="flex gap-4 px-5 md:px-6 mt-5 border-b-2 border-gray-100">
                <button
                    onClick={() => setActiveTab("birthdays")}
                    className={`pb-3 text-sm font-semibold border-b-3 transition-all ${activeTab === "birthdays"
                        ? "border-purple-600 text-purple-600"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                        }`}
                >
                    🎂 Birthdays
                </button>
                <button
                    onClick={() => setActiveTab("anniversaries")}
                    className={`pb-3 text-sm font-semibold border-b-3 transition-all ${activeTab === "anniversaries"
                        ? "border-purple-600 text-purple-600"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                        }`}
                >
                    🏆 Anniversaries
                </button>
            </div>

            {/* EVENT LIST (SCROLLABLE) */}
            <div className="flex-1 overflow-y-auto">
                {eventsData[activeTab].map((item, i) => (
                    <div
                        key={i}
                        className="flex items-center justify-between px-5 md:px-6 py-4 border-b border-gray-100 last:border-none hover:bg-purple-50/50 transition-colors group"
                    >
                        {/* LEFT */}
                        <div className="flex items-center gap-4 flex-1 min-w-0">
                            <div className="text-sm text-gray-600 w-16 flex-shrink-0">
                                <p className="font-bold text-gray-800 text-base">{item.date}</p>
                                <span
                                    className={`inline-block text-xs px-2 py-1 rounded-lg font-semibold mt-1 ${item.label === "Today"
                                        ? "bg-red-100 text-red-700"
                                        : "bg-gray-100 text-gray-700"
                                        }`}
                                >
                                    {item.label}
                                </span>
                            </div>

                            <div className="min-w-0 flex-1">
                                <p className="font-bold text-gray-800 text-sm md:text-base truncate">{item.name}</p>
                                <p className="text-xs md:text-sm text-gray-500">{item.dept}</p>
                            </div>
                        </div>

                        {/* RIGHT ICONS */}
                        <div className="flex gap-3 text-gray-400 flex-shrink-0">
                            <Gift className="cursor-pointer hover:text-purple-600 transition-colors" size={18} />
                            <Bell className="cursor-pointer hover:text-purple-600 transition-colors" size={18} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


const genderData = [
    { name: "Male", value: 320, color: "#3b82f6" },
    { name: "Female", value: 270, color: "#ef4444" },
    { name: "Other", value: 10, color: "#facc15" },
];

const departmentData = [
    { dept: "Engineering", male: 120, female: 45, other: 3 },
    { dept: "Sales", male: 55, female: 65, other: 2 },
    { dept: "Marketing", male: 30, female: 50, other: 1 },
    { dept: "HR", male: 15, female: 35, other: 0 },
    { dept: "Finance", male: 40, female: 30, other: 1 },
];

const totalEmployees = genderData.reduce((a, b) => a + b.value, 0);

const GenderDiversity = () => {
    return (
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-gray-100 p-5 md:p-6 hover:shadow-2xl transition-shadow duration-300">

            {/* HEADER */}
            <div className="flex items-center justify-between border-b-2 border-gray-100 pb-4 mb-6">
                <div>
                    <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-1">Gender Diversity</h2>
                    <p className="text-xs md:text-sm text-gray-500">Workforce composition analysis</p>
                </div>
                <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-xl border border-blue-100">
                    <Users className="text-blue-600" size={18} />
                    <span className="text-blue-700 font-bold text-sm md:text-base">{totalEmployees} Employees</span>
                </div>
            </div>

            {/* TOP SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">

                {/* PIE CHART */}
                <div className="h-[260px] md:h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={genderData}
                                dataKey="value"
                                innerRadius={70}
                                outerRadius={110}
                                paddingAngle={3}
                            >
                                {genderData.map((entry, index) => (
                                    <Cell key={index} fill={entry.color} stroke="#fff" strokeWidth={2} />
                                ))}
                            </Pie>
                            <Tooltip 
                                contentStyle={{ 
                                    backgroundColor: 'white', 
                                    border: '1px solid #e5e7eb', 
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                                }} 
                            />
                        </PieChart>
                    </ResponsiveContainer>

                    {/* LEGEND */}
                    <div className="flex justify-center gap-4 md:gap-6 mt-5 flex-wrap">
                        {genderData.map((item) => (
                            <div key={item.name} className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                                <span
                                    className="w-4 h-4 rounded-full shadow-sm border-2 border-white"
                                    style={{ background: item.color }}
                                />
                                <span className="text-sm font-semibold text-gray-700">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SUMMARY */}
                <div className="space-y-4">
                    <h3 className="font-bold text-lg md:text-xl text-gray-800 mb-4">Gender Distribution</h3>

                    {genderData.map((g) => (
                        <div key={g.name} className="flex justify-between items-center p-3 bg-gray-50 rounded-xl border border-gray-200">
                            <div className="flex items-center gap-3">
                                <div 
                                    className="w-4 h-4 rounded-full shadow-sm"
                                    style={{ background: g.color }}
                                />
                                <span className="font-semibold text-gray-700">{g.name}</span>
                            </div>
                            <span className="font-bold text-gray-800">
                                {g.value} <span className="text-gray-500 font-normal">({((g.value / totalEmployees) * 100).toFixed(1)}%)</span>
                            </span>
                        </div>
                    ))}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border-2 border-blue-100">
                            <p className="text-xs md:text-sm text-gray-600 font-medium mb-1">Gender Ratio (M:F)</p>
                            <p className="text-2xl md:text-3xl font-extrabold text-blue-700">32:27</p>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border-2 border-green-100">
                            <p className="text-xs md:text-sm text-gray-600 font-medium mb-1">Diversity Score</p>
                            <p className="text-2xl md:text-3xl font-extrabold text-green-600">
                                84/100
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* DEPARTMENT TABLE */}
            <div className="mt-8">
                <h3 className="font-bold text-lg md:text-xl text-gray-800 mb-4">
                    Department Gender Distribution
                </h3>

                {/* SCROLLABLE TABLE */}
                <div className="overflow-x-auto max-h-[320px] overflow-y-auto border-2 border-gray-100 rounded-xl">
                    <table className="w-full text-sm border-collapse">
                        <thead className="bg-gradient-to-r from-gray-100 to-gray-50 sticky top-0 z-10 border-b-2 border-gray-200">
                            <tr>
                                <th className="text-left p-4 font-bold text-gray-700">Department</th>
                                <th className="p-4 text-center font-bold text-gray-700">Male</th>
                                <th className="p-4 text-center font-bold text-gray-700">Female</th>
                                <th className="p-4 text-center font-bold text-gray-700">Other</th>
                                <th className="p-4 text-center font-bold text-gray-700">Total</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {departmentData.map((d, i) => {
                                const total = d.male + d.female + d.other;
                                return (
                                    <tr key={i} className="hover:bg-blue-50/50 transition-colors border-b border-gray-100">
                                        <td className="p-4 font-semibold text-gray-800">{d.dept}</td>
                                        <td className="p-4 text-center">
                                            <span className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-700 rounded-lg font-bold">
                                                {d.male}
                                            </span>
                                        </td>
                                        <td className="p-4 text-center">
                                            <span className="inline-flex items-center justify-center w-10 h-10 bg-red-100 text-red-700 rounded-lg font-bold">
                                                {d.female}
                                            </span>
                                        </td>
                                        <td className="p-4 text-center">
                                            <span className="inline-flex items-center justify-center w-10 h-10 bg-yellow-100 text-yellow-700 rounded-lg font-bold">
                                                {d.other}
                                            </span>
                                        </td>
                                        <td className="p-4 text-center">
                                            <span className="inline-flex items-center justify-center w-12 h-10 bg-gray-800 text-white rounded-lg font-bold">
                                                {total}
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};


const payments = [
    {
        invoice: "INV-001",
        date: "2023-09-01",
        type: "Travel",
        by: "Alisha",
        amount: 1500,
        mode: "Credit Card",
        paidTo: "Uber",
        status: "Completed",
        file: "receipt-001.pdf",
    },
    {
        invoice: "INV-002",
        date: "2023-09-03",
        type: "Food",
        by: "Bobby",
        amount: 800,
        mode: "Cash",
        paidTo: "Restaurant",
        status: "Pending",
        file: "receipt-002.jpg",
    },
];

const statusStyles = {
    Completed: "bg-green-100 text-green-600",
    Pending: "bg-orange-100 text-orange-600",
};

const OurPayments = () => {
    return (
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-gray-100 p-5 md:p-6 hover:shadow-2xl transition-shadow duration-300">

            {/* HEADER */}
            <div className="flex items-center justify-between mb-5">
                <div>
                    <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-1">Our Payments</h2>
                    <p className="text-xs md:text-sm text-gray-500">Expense and payment records</p>
                </div>
                <div className="p-2 bg-orange-50 rounded-lg">
                    <DollarSign className="text-orange-600" size={20} />
                </div>
            </div>

            {/* SCROLLABLE TABLE */}
            <div className="overflow-x-auto max-h-[420px] overflow-y-auto border-2 border-gray-100 rounded-xl">
                <table className="min-w-[900px] w-full text-sm border-collapse">

                    {/* TABLE HEAD */}
                    <thead className="sticky top-0 bg-gradient-to-r from-orange-50 to-amber-50 z-10 border-b-2 border-gray-200">
                        <tr>
                            <th className="p-4 text-left font-bold text-gray-700">Invoice No.</th>
                            <th className="p-4 text-left font-bold text-gray-700">Date</th>
                            <th className="p-4 text-left font-bold text-gray-700">Expense Type</th>
                            <th className="p-4 text-left font-bold text-gray-700">Expense By</th>
                            <th className="p-4 text-left font-bold text-gray-700">Amount</th>
                            <th className="p-4 text-left font-bold text-gray-700">Payment Mode</th>
                            <th className="p-4 text-left font-bold text-gray-700">Paid To</th>
                            <th className="p-4 text-left font-bold text-gray-700">Status</th>
                            <th className="p-4 text-left font-bold text-gray-700">Attachment</th>
                        </tr>
                    </thead>

                    {/* TABLE BODY */}
                    <tbody className="divide-y divide-gray-100">
                        {payments.map((item, idx) => (
                            <tr key={idx} className="hover:bg-orange-50/50 transition-colors border-b border-gray-100">

                                <td className="p-4">
                                    <span className="text-orange-600 font-bold">{item.invoice}</span>
                                </td>

                                <td className="p-4 font-medium text-gray-700">{item.date}</td>

                                <td className="p-4">
                                    <span className="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-700 font-semibold text-xs">
                                        {item.type}
                                    </span>
                                </td>

                                <td className="p-4 font-semibold text-gray-800">{item.by}</td>

                                <td className="p-4">
                                    <span className="font-extrabold text-gray-800">₹{item.amount.toLocaleString()}</span>
                                </td>

                                <td className="p-4">
                                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-semibold">
                                        {item.mode}
                                    </span>
                                </td>

                                <td className="p-4 text-gray-700">{item.paidTo}</td>

                                <td className="p-4">
                                    <span
                                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold ${statusStyles[item.status]}`}
                                    >
                                        {item.status === "Completed" ? (
                                            <CheckCircle size={14} />
                                        ) : (
                                            <Clock size={14} />
                                        )}
                                        {item.status}
                                    </span>
                                </td>

                                <td className="p-4">
                                    <a
                                        href="#"
                                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-orange-50 to-amber-50 text-orange-700 w-fit hover:from-orange-100 hover:to-amber-100 transition-all border border-orange-200 font-semibold text-xs"
                                    >
                                        <FileText size={14} />
                                        <span className="truncate max-w-[100px]">{item.file}</span>
                                        <Download size={12} />
                                    </a>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};



const paymentsData = [
  {
    id: "#201",
    client: "Alisha Jain",
    clientId: "C101",
    invoice: "INV001.pdf",
    date: "2023-09-01",
    amount: 150,
    tax: 0,
    discount: 0,
    total: 150,
    method: "Credit Card",
    status: "Completed",
  },
  {
    id: "#202",
    client: "Bobby Ghosh",
    clientId: "C102",
    invoice: "INV002.pdf",
    date: "2023-09-02",
    amount: 200,
    tax: 0,
    discount: 0,
    total: 200,
    method: "Bank Transfer",
    status: "Pending",
  },
];

const statusStylee = {
  Completed: "bg-green-100 text-green-600",
  Pending: "bg-orange-100 text-orange-600",
};

const ClientPayment = () => {
  const [search, setSearch] = useState("");

  const filteredData = paymentsData.filter(
    (item) =>
      item.client.toLowerCase().includes(search.toLowerCase()) ||
      item.id.includes(search)
  );

  return (
    <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-5 md:p-6 border-b-2 border-gray-100 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="flex items-center gap-4">
          <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white p-4 rounded-2xl shadow-lg">
            <DollarSign size={24} />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Client Payment
            </h2>
            <p className="text-sm text-gray-600 font-medium mt-1">
              {filteredData.length} payments found
            </p>
          </div>
        </div>

        {/* SEARCH */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search payments, clients..."
            className="w-full pl-12 pr-4 py-2.5 md:py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto max-h-[420px] overflow-y-auto">
        <table className="min-w-[1100px] w-full text-sm">
          <thead className="sticky top-0 bg-gradient-to-r from-purple-50 to-indigo-50 z-10 border-b-2 border-gray-200">
            <tr className="text-left">
              <th className="p-4 font-bold text-gray-700">ID</th>
              <th className="p-4 font-bold text-gray-700">Client</th>
              <th className="p-4 font-bold text-gray-700">Invoice</th>
              <th className="p-4 font-bold text-gray-700">Date</th>
              <th className="p-4 font-bold text-gray-700">Amount</th>
              <th className="p-4 font-bold text-gray-700">Tax</th>
              <th className="p-4 font-bold text-gray-700">Discount</th>
              <th className="p-4 font-bold text-gray-700">Total</th>
              <th className="p-4 font-bold text-gray-700">Method</th>
              <th className="p-4 font-bold text-gray-700">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {filteredData.map((item, i) => (
              <tr
                key={i}
                className="border-b border-gray-100 hover:bg-purple-50/50 transition-colors"
              >
                <td className="p-4">
                  <span className="text-purple-600 font-bold">{item.id}</span>
                </td>

                <td className="p-4">
                  <p className="font-semibold text-gray-800">{item.client}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{item.clientId}</p>
                </td>

                <td className="p-4">
                  <div className="flex items-center gap-2 text-purple-600">
                    <FileText size={16} />
                    <span className="font-medium">{item.invoice}</span>
                  </div>
                </td>

                <td className="p-4 font-medium text-gray-700">{item.date}</td>
                <td className="p-4">
                  <span className="font-bold text-gray-800">${item.amount}</span>
                </td>
                <td className="p-4 text-gray-600">${item.tax}</td>
                <td className="p-4 text-gray-600">${item.discount}</td>
                <td className="p-4">
                  <span className="font-extrabold text-gray-800">${item.total}</span>
                </td>

                <td className="p-4">
                  <span className="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-700 text-xs font-semibold">
                    {item.method}
                  </span>
                </td>

                <td className="p-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold ${
                      statusStylee[item.status]
                    }`}
                  >
                    {item.status === "Completed" ? (
                      <CheckCircle size={14} />
                    ) : (
                      <Clock size={14} />
                    )}
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};













