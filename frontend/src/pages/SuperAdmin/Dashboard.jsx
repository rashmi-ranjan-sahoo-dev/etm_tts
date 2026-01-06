import React, { useState } from "react";
import {
    Users, FolderKanban, DollarSign, TrendingUp, TrendingDown, Activity, ShieldCheck, Clock, CheckCircle2, AlertCircle, MoreVertical, ArrowUpRight, ArrowDownRight, Crown, Briefcase, Target, Globe, ArrowUp, ArrowDown
} from "lucide-react";
import {
    LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart,
} from "recharts";

const Dashboard = () => {
    const [timeFilter, setTimeFilter] = useState("month");

    // Stats Data
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


    // Revenue Chart Data
    const revenueData = [
        { month: "Jan", revenue: 45000, clients: 180, projects: 95 },
        { month: "Feb", revenue: 52000, clients: 210, projects: 110 },
        { month: "Mar", revenue: 48000, clients: 195, projects: 105 },
        { month: "Apr", revenue: 61000, clients: 240, projects: 130 },
        { month: "May", revenue: 55000, clients: 225, projects: 120 },
        { month: "Jun", revenue: 67000, clients: 265, projects: 145 },
        { month: "Jul", revenue: 72000, clients: 280, projects: 155 },
    ];

    // Project Status Data
    const projectStatusList = [
        { name: "Project A", progress: 30, duration: "2 Months" },
        { name: "Project B", progress: 55, duration: "3 Months" },
        { name: "Project C", progress: 67, duration: "1 Month" },
        { name: "Project D", progress: 70, duration: "2 Months" },
        { name: "Project E", progress: 24, duration: "3 Months" },
        { name: "Project F", progress: 77, duration: "4 Months" },
    ];

    // Client Activity Data
    const clientActivityData = [
        { day: "Mon", active: 420, inactive: 80 },
        { day: "Tue", active: 380, inactive: 120 },
        { day: "Wed", active: 450, inactive: 90 },
        { day: "Thu", active: 410, inactive: 110 },
        { day: "Fri", active: 490, inactive: 70 },
        { day: "Sat", active: 290, inactive: 160 },
        { day: "Sun", active: 250, inactive: 200 },
    ];

    // Recent Projects
    const recentProjects = [
        {
            name: "E-commerce Platform",
            client: "TechCorp Inc.",
            status: "In Progress",
            progress: 75,
            deadline: "2026-02-15",
            priority: "High",
        },
        {
            name: "Mobile App Development",
            client: "StartupXYZ",
            status: "In Progress",
            progress: 45,
            deadline: "2026-03-20",
            priority: "Medium",
        },
        {
            name: "Website Redesign",
            client: "BrandCo Ltd.",
            status: "Completed",
            progress: 100,
            deadline: "2026-01-10",
            priority: "Low",
        },
        {
            name: "CRM System",
            client: "Enterprise Solutions",
            status: "Pending",
            progress: 20,
            deadline: "2026-04-05",
            priority: "High",
        },
    ];

    // Top Performing Clients
    const topClients = [
        { name: "TechCorp Inc.", projects: 28, revenue: "$145K", rating: 4.9 },
        { name: "Enterprise Solutions", projects: 22, revenue: "$128K", rating: 4.8 },
        { name: "StartupXYZ", projects: 19, revenue: "$98K", rating: 4.7 },
        { name: "BrandCo Ltd.", projects: 15, revenue: "$87K", rating: 4.6 },
        { name: "Digital Ventures", projects: 12, revenue: "$76K", rating: 4.5 },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case "Completed":
                return "bg-green-100 text-green-700";
            case "In Progress":
                return "bg-blue-100 text-blue-700";
            case "Pending":
                return "bg-yellow-100 text-yellow-700";
            case "On Hold":
                return "bg-red-100 text-red-700";
            default:
                return "bg-gray-100 text-gray-700";
        }
    };

    const getPriorityColor = (priority) => {
        switch (priority) {
            case "High":
                return "bg-red-100 text-red-700";
            case "Medium":
                return "bg-yellow-100 text-yellow-700";
            case "Low":
                return "bg-green-100 text-green-700";
            default:
                return "bg-gray-100 text-gray-700";
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 p-4 sm:p-6 lg:p-8">
            {/* Header */}
            <div className="mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent flex items-center gap-3">
                            <Crown className="text-purple-600" size={32} />
                            Super Admin Dashboard
                        </h1>
                        <p className="text-gray-600 mt-2">Welcome back! Here's your system overview</p>
                    </div>
                    <div className="flex gap-2">
                        {["week", "month", "year"].map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setTimeFilter(filter)}
                                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${timeFilter === filter
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
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                {statsCards.map((card, index) => {
                    const Icon = card.icon;
                    return (
                        <div
                            key={index}
                            className={`relative overflow-hidden rounded-2xl p-5 text-white shadow-xl bg-gradient-to-r ${card.bg}`}
                        >
                            {/* Background Icon */}
                            <Icon className="absolute right-4 top-4 opacity-20" size={72} />

                            {/* Content */}
                            <div className="relative z-10">
                                <p className="text-sm opacity-90">{card.title}</p>

                                <h2 className="text-3xl font-bold mt-2">
                                    {card.value}
                                </h2>

                                {/* Progress Line */}
                                <div className="w-full h-1 bg-white/30 rounded-full my-4">
                                    <div className="h-1 w-[70%] bg-white rounded-full" />
                                </div>

                                {/* Footer */}
                                <div className="flex items-center gap-2 text-sm">
                                    {card.trend === "up" ? (
                                        <ArrowUp size={16} />
                                    ) : (
                                        <ArrowDown size={16} />
                                    )}
                                    <span>
                                        {card.change} Since last month
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Revenue Chart */}
                <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-xl font-bold text-gray-800">Revenue Overview</h2>
                            <p className="text-sm text-gray-500 mt-1">Monthly revenue trends</p>
                        </div>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <MoreVertical size={20} className="text-gray-600" />
                        </button>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={revenueData}>
                            <defs>
                                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis dataKey="month" stroke="#9ca3af" />
                            <YAxis stroke="#9ca3af" />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "#fff",
                                    border: "1px solid #e5e7eb",
                                    borderRadius: "12px",
                                }}
                            />
                            <Area
                                type="monotone"
                                dataKey="revenue"
                                stroke="#6366f1"
                                strokeWidth={3}
                                fillOpacity={1}
                                fill="url(#colorRevenue)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>+

                {/* Project Status */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
                    {/* Header */}
                    <div className="px-6 py-4 border-b border-gray-100">
                        <h2 className="text-lg font-bold text-gray-800">
                            Project Status
                        </h2>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-gray-500 border-b">
                                    <th className="text-left px-6 py-3 font-medium">
                                        Projects
                                    </th>
                                    <th className="text-left px-6 py-3 font-medium">
                                        Progress
                                    </th>
                                    <th className="text-left px-6 py-3 font-medium">
                                        Duration
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {projectStatusList.map((project, index) => (
                                    <tr
                                        key={index}
                                        className="border-b last:border-b-0 hover:bg-gray-50 transition"
                                    >
                                        {/* Project Name */}
                                        <td className="px-6 py-4 font-medium text-gray-800">
                                            {project.name}
                                        </td>

                                        {/* Progress */}
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <span className="text-gray-700 font-medium w-12">
                                                    {project.progress}%
                                                </span>
                                                <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                                                    <div
                                                        className="h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all"
                                                        style={{ width: `${project.progress}%` }}
                                                    />
                                                </div>
                                            </div>
                                        </td>

                                        {/* Duration */}
                                        <td className="px-6 py-4 text-gray-600">
                                            {project.duration}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Client Activity Bar Chart */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-xl font-bold text-gray-800">Client Activity</h2>
                        <p className="text-sm text-gray-500 mt-1">Weekly active vs inactive clients</p>
                    </div>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={clientActivityData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="day" stroke="#9ca3af" />
                        <YAxis stroke="#9ca3af" />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#fff",
                                border: "1px solid #e5e7eb",
                                borderRadius: "12px",
                            }}
                        />
                        <Legend />
                        <Bar dataKey="active" fill="#6366f1" radius={[8, 8, 0, 0]} />
                        <Bar dataKey="inactive" fill="#e5e7eb" radius={[8, 8, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Bottom Row - Tables */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Projects */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-gray-800">Recent Projects</h2>
                        <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1">
                            View All
                            <ArrowUpRight size={16} />
                        </button>
                    </div>
                    <div className="space-y-4">
                        {recentProjects.map((project, index) => (
                            <div
                                key={index}
                                className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800">{project.name}</h3>
                                        <p className="text-sm text-gray-500 mt-1">{project.client}</p>
                                    </div>
                                    <span className={`px-3 py-1 rounded-lg text-xs font-medium ${getPriorityColor(project.priority)}`}>
                                        {project.priority}
                                    </span>
                                </div>
                                <div className="flex items-center gap-4 text-sm">
                                    <span className={`px-3 py-1 rounded-lg text-xs font-medium ${getStatusColor(project.status)}`}>
                                        {project.status}
                                    </span>
                                    <span className="text-gray-500 flex items-center gap-1">
                                        <Clock size={14} />
                                        {project.deadline}
                                    </span>
                                </div>
                                <div className="mt-3">
                                    <div className="flex items-center justify-between text-sm mb-1">
                                        <span className="text-gray-600">Progress</span>
                                        <span className="font-semibold text-gray-800">{project.progress}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all"
                                            style={{ width: `${project.progress}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Clients */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-gray-800">Top Performing Clients</h2>
                        <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1">
                            View All
                            <ArrowUpRight size={16} />
                        </button>
                    </div>
                    <div className="space-y-4">
                        {topClients.map((client, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">{client.name}</h3>
                                        <div className="flex items-center gap-3 mt-1">
                                            <span className="text-sm text-gray-500">{client.projects} projects</span>
                                            <span className="text-sm font-semibold text-green-600">{client.revenue}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 text-yellow-500">
                                    <span className="text-sm font-semibold">{client.rating}</span>
                                    <span>★</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;