
import React, { useState } from "react";
import { Users, DollarSign, Crown, Briefcase, Globe, ArrowUp, ArrowDown, Search, Eye, Pencil, Trash2, } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Settings } from 'lucide-react';
import { Legend } from 'recharts';
import { Gift, Bell, Trophy, Cake, Download, CheckCircle, Clock, FileText } from "lucide-react";

const Dashboard = () => {
    const [timeFilter, setTimeFilter] = useState("month");

    const statsCards = [
        {
            title: "New Projects",
            value: "102",
            change: "10%",
            trend: "up",
            icon: Briefcase,
            bg: "from-emerald-400 to-teal-500",
        },
        {
            title: "New Customers",
            value: "154",
            change: "4%",
            trend: "up",
            icon: Users,
            bg: "from-blue-400 to-indigo-500",
        },
        {
            title: "Inquiry",
            value: "524",
            change: "23%",
            trend: "up",
            icon: Globe,
            bg: "from-purple-400 to-fuchsia-500",
        },
        {
            title: "Earning",
            value: "$2,453",
            change: "6%",
            trend: "down",
            icon: DollarSign,
            bg: "from-orange-400 to-amber-500",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30">
            <div className="p-3 sm:p-4 md:p-6 lg:p-8 max-w-[1920px] mx-auto">
                {/* Header */}
                <div className="mb-6 md:mb-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent flex items-center gap-2 md:gap-3">
                                <Crown className="text-purple-600" size={28} />
                                Super Admin Dashboard
                            </h1>
                            <p className="text-gray-600 mt-1 md:mt-2 text-sm md:text-base">Welcome back! Here's your system overview</p>
                        </div>
                        <div className="flex gap-2">
                            {["week", "month", "year"].map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setTimeFilter(filter)}
                                    className={`px-3 md:px-4 py-1.5 md:py-2 rounded-xl text-xs md:text-sm font-medium transition-all ${timeFilter === filter
                                        ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg"
                                        : "bg-white text-gray-600 hover:bg-gray-50"
                                        }`}
                                >
                                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 mb-6">
                    {statsCards.map((card, index) => {
                        const Icon = card.icon;
                        return (
                            <div
                                key={index}
                                className={`relative overflow-hidden rounded-2xl p-4 md:p-5 text-white shadow-xl bg-gradient-to-r ${card.bg} hover:scale-105 transition-transform`}
                            >
                                <Icon className="absolute right-4 top-4 opacity-20" size={60} />
                                <div className="relative z-10">
                                    <p className="text-xs md:text-sm opacity-90">{card.title}</p>
                                    <h2 className="text-2xl md:text-3xl font-bold mt-2">{card.value}</h2>
                                    <div className="w-full h-1 bg-white/30 rounded-full my-3 md:my-4">
                                        <div className="h-1 w-[70%] bg-white rounded-full" />
                                    </div>
                                    <div className="flex items-center gap-2 text-xs md:text-sm">
                                        {card.trend === "up" ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                                        <span>{card.change} Since last month</span>
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
        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-5 h-full">
            <h2 className="text-base md:text-lg font-semibold mb-4">Employee Attrition Rate</h2>
            <div className="flex flex-wrap gap-3 md:gap-4 mb-6">
                <div>
                    <p className="text-2xl md:text-3xl font-bold text-red-500">8.5%</p>
                    <p className="text-xs md:text-sm text-gray-500">Overall Attrition Rate</p>
                </div>
                <div className="bg-gray-100 px-3 md:px-4 py-2 rounded-xl">
                    <p className="text-xs md:text-sm">Industry Average</p>
                    <p className="text-green-500 font-semibold text-sm md:text-base">10.2% ↓ 1.7%</p>
                </div>
                <div className="bg-gray-100 px-3 md:px-4 py-2 rounded-xl">
                    <p className="text-xs md:text-sm">Previous Year</p>
                    <p className="text-green-500 font-semibold text-sm md:text-base">9.7% ↓ 1.2%</p>
                </div>
            </div>
            <div className="h-48 md:h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="department" tick={{ fontSize: 12 }} />
                        <YAxis tick={{ fontSize: 12 }} />
                        <Tooltip />
                        <Bar dataKey="rate" fill="#f87171" radius={[6, 6, 0, 0]} />
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
    return (
        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-5 h-full flex flex-col">
            <h2 className="text-base md:text-lg font-semibold mb-4">Project Status</h2>
            <div className="space-y-4 flex-1 overflow-y-auto">
                {projects.map((project, i) => (
                    <div key={i}>
                        <div className="flex justify-between text-xs md:text-sm mb-1">
                            <span className="font-medium">{project.name}</span>
                            <span className="text-gray-500">{project.duration}</span>
                        </div>
                        <div className="w-full bg-gray-200 h-2 rounded-full">
                            <div className="bg-blue-600 h-2 rounded-full transition-all" style={{ width: `${project.progress}%` }} />
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
        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-5">
            <h2 className="text-base md:text-lg font-semibold mb-4">Leave Requests Summary</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                {stats.map((item, i) => (
                    <div key={i} className={`rounded-xl p-3 text-center ${item.bg}`}>
                        <p className={`text-xl md:text-2xl font-bold ${item.text}`}>{item.value}</p>
                        <p className="text-xs text-gray-500 mt-1">{item.label}</p>
                    </div>
                ))}
            </div>
            <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by name, department, leave type..."
                    className="w-full pl-10 pr-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="overflow-x-auto max-h-96 overflow-y-auto border rounded-lg">
                <table className="min-w-full text-xs md:text-sm">
                    <thead className="sticky top-0 bg-gray-50 z-10">
                        <tr className="text-left border-b">
                            <th className="py-3 px-3 md:px-4 font-semibold">Employee</th>
                            <th className="py-3 px-3 md:px-4 font-semibold">Leave Type</th>
                            <th className="py-3 px-3 md:px-4 font-semibold">Duration</th>
                            <th className="py-3 px-3 md:px-4 font-semibold text-center">Days</th>
                            <th className="py-3 px-3 md:px-4 font-semibold">Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {filteredRequests.map((item, i) => (
                            <tr key={i} className="border-b hover:bg-gray-50">
                                <td className="py-3 px-3 md:px-4">
                                    <p className="font-medium">{item.name}</p>
                                    <p className="text-xs text-gray-500">{item.dept}</p>
                                </td>
                                <td className="py-3 px-3 md:px-4">{item.type}</td>
                                <td className="py-3 px-3 md:px-4">
                                    <p>{item.duration}</p>
                                    <p className="text-xs text-gray-500">{item.reason}</p>
                                </td>
                                <td className="py-3 px-3 md:px-4 text-center font-medium">{item.days}</td>
                                <td className="py-3 px-3 md:px-4">
                                    <span className={`px-2 md:px-3 py-1 rounded-full text-xs font-medium ${statusStyle[item.status]}`}>
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
        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg h-full max-h-[500px] flex flex-col overflow-hidden">
            <div className="p-4 md:p-5 border-b flex-shrink-0">
                <div className="flex items-center justify-between mb-3">
                    <h2 className="text-base md:text-lg font-semibold">Earning Source</h2>
                    <Settings size={18} className="text-gray-500 cursor-pointer hover:text-gray-700" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-orange-500 text-center">${totalEarning.toLocaleString()}</h3>
            </div>
            <div className="flex-1 overflow-y-auto p-4 md:p-5 space-y-3">
                {earningSourceData.map((item, index) => (
                    <div key={index}>
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-xs md:text-sm font-medium truncate pr-2">{item.name}</span>
                            <span className="px-2 py-1 rounded-full text-xs font-semibold text-white flex-shrink-0" style={{ backgroundColor: item.color }}>
                                {item.percentage}%
                            </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div className="h-full rounded-full transition-all" style={{ width: `${item.percentage}%`, backgroundColor: item.color }} />
                        </div>
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
        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg h-full max-h-[500px] flex flex-col overflow-hidden">
            <div className="p-4 md:p-5 border-b flex-shrink-0">
                <div className="flex items-center justify-between">
                    <h2 className="text-base md:text-lg font-semibold">Country Wise Clients</h2>
                    <Settings size={18} className="text-gray-500 cursor-pointer hover:text-gray-700" />
                </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 md:p-5">
                <div className="h-40 md:h-56 mb-4">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie data={chartData} cx="50%" cy="50%" innerRadius="55%" outerRadius="80%" paddingAngle={2} dataKey="value">
                                {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={countryClientsData[index].color} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="space-y-2">
                    {countryClientsData.map((country, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b last:border-none">
                            <div className="flex items-center gap-2 min-w-0">
                                <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: country.color }} />
                                <span className="text-xs md:text-sm font-medium truncate">{country.name}</span>
                            </div>
                            <div className="flex items-center gap-2 flex-shrink-0">
                                <span className="text-xs md:text-sm font-semibold">{country.value}</span>
                                <span className={`text-xs font-semibold w-12 text-right ${country.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
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
        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-5 flex flex-col h-96 max-h-[500px]">
            <div className="flex justify-between items-start mb-4">
                <h2 className="text-base md:text-lg font-semibold">Attendance Summary</h2>
                <div className="text-right text-xs md:text-sm text-gray-500">
                    <p>January 6, 2026</p>
                    <p>Tuesday</p>
                </div>
            </div>
            <div className="mb-4">
                <p className="text-xs md:text-sm font-medium mb-1">Monthly Attendance Rate</p>
                <p className="text-2xl md:text-3xl font-bold text-green-500 mb-2">95.2%</p>
                <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-blue-600 rounded-full transition-all" style={{ width: "95.2%" }} />
                </div>
            </div>
            <p className="text-xs md:text-sm font-medium mb-2">Weekly Attendance</p>
            <div className="flex-1 min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={weeklyData}>
                        <XAxis dataKey="day" tick={{ fontSize: 12 }} />
                        <YAxis domain={[90, 100]} tick={{ fontSize: 12 }} />
                        <Tooltip />
                        <Bar dataKey="value" fill="#4f46e5" radius={[6, 6, 0, 0]} />
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
        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-5 flex flex-col h-96 max-h-[500px]">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-base md:text-lg font-semibold">Top Performing Employee</h2>
                <button className="text-blue-600 text-xs md:text-sm font-medium hover:underline">View All</button>
            </div>
            <div className="flex-1 overflow-y-auto space-y-3 pr-1">
                {employees.map((emp, i) => (
                    <div key={i} className="flex items-center justify-between border-b pb-3 last:border-none">
                        <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full text-white flex items-center justify-center font-bold text-sm flex-shrink-0 ${emp.color}`}>
                                {emp.rank}
                            </div>
                            <div className="min-w-0">
                                <p className="font-semibold text-sm md:text-base truncate">{emp.name}</p>
                                <div className="flex gap-2 mt-1 flex-wrap">
                                    <span className="px-2 py-0.5 bg-indigo-100 text-indigo-600 rounded-full text-xs">{emp.subject}</span>
                                    <span className="px-2 py-0.5 bg-green-100 text-green-600 rounded-full text-xs">↑ {emp.improvement}</span>
                                </div>
                            </div>
                        </div>
                        <span className="px-2 md:px-3 py-1 rounded-full bg-red-500 text-white text-xs md:text-sm font-semibold flex-shrink-0">{emp.score}</span>
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
        <div className="bg-white rounded-2xl shadow h-[520px] flex flex-col">

            {/* HEADER */}
            <div className="p-5 border-b">
                <h2 className="text-lg font-semibold">Upcoming Events</h2>
            </div>

            {/* TODAY EVENT */}
            <div className="mx-5 mt-4 bg-purple-600 rounded-xl text-white">
                <div className="flex items-center gap-2 px-4 py-3 font-medium">
                    <Cake size={18} />
                    Today’s Events
                </div>
                <div className="bg-purple-50 text-gray-900 rounded-b-xl px-4 py-3 flex items-center gap-3">
                    <div className="bg-red-100 p-2 rounded-full">
                        <Cake className="text-red-500" />
                    </div>
                    <div>
                        <p className="font-semibold">John Smith</p>
                        <p className="text-sm text-gray-500">Birthday</p>
                    </div>
                </div>
            </div>

            {/* TABS */}
            <div className="flex gap-6 px-5 mt-4 border-b">
                <button
                    onClick={() => setActiveTab("birthdays")}
                    className={`pb-2 text-sm font-medium border-b-2 ${activeTab === "birthdays"
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-gray-500"
                        }`}
                >
                    🎂 Birthdays
                </button>
                <button
                    onClick={() => setActiveTab("anniversaries")}
                    className={`pb-2 text-sm font-medium border-b-2 ${activeTab === "anniversaries"
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-gray-500"
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
                        className="flex items-center justify-between px-5 py-4 border-b last:border-none"
                    >
                        {/* LEFT */}
                        <div className="flex items-center gap-4">
                            <div className="text-sm text-gray-500 w-14">
                                <p className="font-medium text-gray-800">{item.date}</p>
                                <span
                                    className={`text-xs px-2 py-0.5 rounded-full ${item.label === "Today"
                                        ? "bg-red-100 text-red-600"
                                        : "bg-gray-100 text-gray-600"
                                        }`}
                                >
                                    {item.label}
                                </span>
                            </div>

                            <div>
                                <p className="font-semibold">{item.name}</p>
                                <p className="text-sm text-gray-500">{item.dept}</p>
                            </div>
                        </div>

                        {/* RIGHT ICONS */}
                        <div className="flex gap-3 text-gray-500">
                            <Gift className="cursor-pointer hover:text-blue-600" />
                            <Bell className="cursor-pointer hover:text-blue-600" />
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
        <div className="bg-white rounded-2xl shadow p-5">

            {/* HEADER */}
            <div className="flex items-center justify-between border-b pb-3 mb-5">
                <h2 className="text-lg font-semibold">Gender Diversity</h2>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Users size={16} />
                    {totalEmployees} Employees
                </div>
            </div>

            {/* TOP SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* PIE CHART */}
                <div className="h-[260px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={genderData}
                                dataKey="value"
                                innerRadius={60}
                                outerRadius={100}
                                paddingAngle={2}
                            >
                                {genderData.map((entry, index) => (
                                    <Cell key={index} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>

                    {/* LEGEND */}
                    <div className="flex justify-center gap-6 mt-4 text-sm">
                        {genderData.map((item) => (
                            <div key={item.name} className="flex items-center gap-2">
                                <span
                                    className="w-3 h-3 rounded-full"
                                    style={{ background: item.color }}
                                />
                                {item.name}
                            </div>
                        ))}
                    </div>
                </div>

                {/* SUMMARY */}
                <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Gender Distribution</h3>

                    {genderData.map((g) => (
                        <div key={g.name} className="flex justify-between items-center">
                            <span className="text-gray-600">{g.name}</span>
                            <span className="font-medium">
                                {g.value} (
                                {((g.value / totalEmployees) * 100).toFixed(1)}%)
                            </span>
                        </div>
                    ))}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                        <div className="bg-gray-100 rounded-xl p-4">
                            <p className="text-sm text-gray-500">Gender Ratio (M:F)</p>
                            <p className="text-xl font-semibold">32:27</p>
                        </div>

                        <div className="bg-gray-100 rounded-xl p-4">
                            <p className="text-sm text-gray-500">Diversity Score</p>
                            <p className="text-xl font-semibold text-green-600">
                                84/100
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* DEPARTMENT TABLE */}
            <div className="mt-8">
                <h3 className="font-semibold mb-3">
                    Department Gender Distribution
                </h3>

                {/* SCROLLABLE TABLE */}
                <div className="overflow-x-auto max-h-[320px] overflow-y-auto">
                    <table className="w-full text-sm border-collapse">
                        <thead className="bg-gray-100 sticky top-0">
                            <tr>
                                <th className="text-left p-3">Department</th>
                                <th className="p-3">Male</th>
                                <th className="p-3">Female</th>
                                <th className="p-3">Other</th>
                                <th className="p-3">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {departmentData.map((d, i) => {
                                const total = d.male + d.female + d.other;
                                return (
                                    <tr key={i} className="border-b">
                                        <td className="p-3 font-medium">{d.dept}</td>
                                        <td className="p-3 text-center text-blue-600">
                                            {d.male}
                                        </td>
                                        <td className="p-3 text-center text-red-500">
                                            {d.female}
                                        </td>
                                        <td className="p-3 text-center text-yellow-500">
                                            {d.other}
                                        </td>
                                        <td className="p-3 text-center font-semibold">
                                            {total}
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
        <div className="bg-white rounded-2xl shadow p-5">

            {/* HEADER */}
            <h2 className="text-lg font-semibold mb-4">Our Payments</h2>

            {/* SCROLLABLE TABLE */}
            <div className="overflow-x-auto max-h-[420px] overflow-y-auto">
                <table className="min-w-[900px] w-full text-sm border-collapse">

                    {/* TABLE HEAD */}
                    <thead className="sticky top-0 bg-gray-100 z-10">
                        <tr>
                            <th className="p-3 text-left">Invoice No.</th>
                            <th className="p-3 text-left">Date</th>
                            <th className="p-3 text-left">Expense Type</th>
                            <th className="p-3 text-left">Expense By</th>
                            <th className="p-3 text-left">Amount</th>
                            <th className="p-3 text-left">Payment Mode</th>
                            <th className="p-3 text-left">Paid To</th>
                            <th className="p-3 text-left">Status</th>
                            <th className="p-3 text-left">Attachment</th>
                        </tr>
                    </thead>

                    {/* TABLE BODY */}
                    <tbody>
                        {payments.map((item, idx) => (
                            <tr key={idx} className="border-b hover:bg-gray-50 ">

                                <td className="p-3 text-orange-600 font-medium">
                                    {item.invoice}
                                </td>

                                <td className="p-3">{item.date}</td>

                                <td className="p-3">
                                    <span className="px-3 py-1 rounded-full bg-gray-100 ">
                                        {item.type}
                                    </span>
                                </td>

                                <td className="p-3 font-medium">{item.by}</td>

                                <td className="p-3 font-semibold">₹{item.amount}</td>

                                <td className="p-3">{item.mode}</td>

                                <td className="p-3">{item.paidTo}</td>

                                <td className="p-3">
                                    <span
                                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${statusStyles[item.status]
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

                                <td className="p-3">
                                    <a
                                        href="#"
                                        className="flex items-center gap-2 px-3 py-1 rounded-lg bg-orange-50 text-orange-600 w-fit hover:bg-orange-100"
                                    >
                                        <FileText size={16} />
                                        {item.file}
                                        <Download size={14} />
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
    <div className="bg-white rounded-2xl shadow">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-5 border-b">
        <div className="flex items-center gap-3">
          <div className="bg-purple-600 text-white p-3 rounded-xl">
            $
          </div>
          <div>
            <h2 className="text-xl font-semibold text-purple-600">
              Client Payment
            </h2>
            <p className="text-sm text-gray-500">
              {filteredData.length} payments found
            </p>
          </div>
        </div>

        {/* SEARCH */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search payments, clients..."
            className="w-full pl-10 pr-3 py-2 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto max-h-[420px] overflow-y-auto">
        <table className="min-w-[1100px] w-full text-sm">
          <thead className="sticky top-0 bg-purple-50 z-10">
            <tr className="text-left">
              <th className="p-3">ID</th>
              <th className="p-3">Client</th>
              <th className="p-3">Invoice</th>
              <th className="p-3">Date</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Tax</th>
              <th className="p-3">Discount</th>
              <th className="p-3">Total</th>
              <th className="p-3">Method</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((item, i) => (
              <tr
                key={i}
                className="border-b hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <td className="p-3 text-purple-600 font-medium">
                  {item.id}
                </td>

                <td className="p-3">
                  <p className="font-medium">{item.client}</p>
                  <p className="text-xs text-gray-500">{item.clientId}</p>
                </td>

                <td className="p-3 text-purple-600 flex items-center gap-1">
                  <FileText size={16} />
                  {item.invoice}
                </td>

                <td className="p-3">{item.date}</td>
                <td className="p-3 font-semibold">${item.amount}</td>
                <td className="p-3">${item.tax}</td>
                <td className="p-3">${item.discount}</td>
                <td className="p-3 font-semibold">${item.total}</td>

                <td className="p-3">
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-xs">
                    {item.method}
                  </span>
                </td>

                <td className="p-3">
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
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













