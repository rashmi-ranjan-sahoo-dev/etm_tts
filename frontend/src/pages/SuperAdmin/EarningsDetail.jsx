import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DollarSign, Search, ArrowLeft, TrendingUp, TrendingDown, Calendar, BarChart3, PieChart, Filter, Download } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell, LineChart, Line } from "recharts";

const EarningsDetail = () => {
  const navigate = useNavigate();
  const [timeFilter, setTimeFilter] = useState("month");

  // Sample earnings data with comprehensive financial information
  const earningsData = [
    { month: "Jan", earnings: 24530, projects: 12, growth: 10, expenses: 18500, profit: 6030, clients: 8 },
    { month: "Feb", earnings: 28900, projects: 15, growth: 18, expenses: 21200, profit: 7700, clients: 10 },
    { month: "Mar", earnings: 31200, projects: 18, growth: 8, expenses: 22800, profit: 8400, clients: 12 },
    { month: "Apr", earnings: 27800, projects: 14, growth: -11, expenses: 20100, profit: 7700, clients: 9 },
    { month: "May", earnings: 34500, projects: 20, growth: 24, expenses: 25600, profit: 8900, clients: 14 },
    { month: "Jun", earnings: 38900, projects: 22, growth: 13, expenses: 28900, profit: 10000, clients: 16 }
  ];

  const projectEarnings = [
    { name: "Website Development", value: 45000, count: 8, avgValue: 5625, color: "#8884d8" },
    { name: "Mobile Apps", value: 32000, count: 6, avgValue: 5333, color: "#82ca9d" },
    { name: "Data Analytics", value: 28000, count: 4, avgValue: 7000, color: "#ffc658" },
    { name: "UI/UX Design", value: 18000, count: 5, avgValue: 3600, color: "#ff7300" },
    { name: "Consulting", value: 12000, count: 3, avgValue: 4000, color: "#00ff00" },
    { name: "System Integration", value: 25000, count: 2, avgValue: 12500, color: "#ff00ff" }
  ];

  const clientRevenue = [
    { name: "ABC Pvt Ltd", revenue: 45000, projects: 3, avgProject: 15000 },
    { name: "Global Enterprises", revenue: 35000, projects: 5, avgProject: 7000 },
    { name: "TechCorp Inc", revenue: 28000, projects: 2, avgProject: 14000 },
    { name: "StartupXYZ", revenue: 18000, projects: 2, avgProject: 9000 },
    { name: "Enterprise Corp", revenue: 25000, projects: 1, avgProject: 25000 }
  ];

  const monthlyExpenses = [
    { category: "Salaries", amount: 45000, percentage: 45 },
    { category: "Software/Tools", amount: 12000, percentage: 12 },
    { category: "Marketing", amount: 8000, percentage: 8 },
    { category: "Office/Overhead", amount: 15000, percentage: 15 },
    { category: "Training", amount: 5000, percentage: 5 },
    { category: "Miscellaneous", amount: 15000, percentage: 15 }
  ];

  const recentTransactions = [
    {
      id: 1,
      client: "ABC Pvt Ltd",
      project: "E-commerce Website",
      amount: 8500,
      date: "2024-01-20",
      status: "Completed",
      paymentMethod: "Bank Transfer",
      invoice: "INV-2024-001"
    },
    {
      id: 2,
      client: "XYZ Solutions",
      project: "Mobile App Development",
      amount: 12000,
      date: "2024-01-18",
      status: "Completed",
      paymentMethod: "Credit Card",
      invoice: "INV-2024-002"
    },
    {
      id: 3,
      client: "TechCorp Inc",
      project: "Data Dashboard",
      amount: 6500,
      date: "2024-01-16",
      status: "Pending",
      paymentMethod: "Check",
      invoice: "INV-2024-003"
    },
    {
      id: 4,
      client: "Global Enterprises",
      project: "ERP Integration",
      amount: 9500,
      date: "2024-01-14",
      status: "Completed",
      paymentMethod: "Wire Transfer",
      invoice: "INV-2024-004"
    },
    {
      id: 5,
      client: "StartupHub",
      project: "UI Redesign",
      amount: 4800,
      date: "2024-01-12",
      status: "Overdue",
      paymentMethod: "Bank Transfer",
      invoice: "INV-2024-005"
    }
  ];

  const totalEarnings = earningsData.reduce((sum, item) => sum + item.earnings, 0);
  const totalProjects = earningsData.reduce((sum, item) => sum + item.projects, 0);
  const totalExpenses = earningsData.reduce((sum, item) => sum + item.expenses, 0);
  const totalProfit = earningsData.reduce((sum, item) => sum + item.profit, 0);
  const totalClients = earningsData.reduce((sum, item) => sum + item.clients, 0);
  const averageGrowth = earningsData.reduce((sum, item) => sum + item.growth, 0) / earningsData.length;
  const profitMargin = ((totalProfit / totalEarnings) * 100).toFixed(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/super-admin/dashboard')}
            className="flex items-center gap-2 text-green-600 hover:text-green-800 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </button>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">Earnings Overview</h1>
              <p className="text-gray-600">Detailed financial performance and revenue analytics</p>
            </div>
            <div className="flex items-center gap-4">
              <select
                value={timeFilter}
                onChange={(e) => setTimeFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-green-400 outline-none"
              >
                <option value="month">This Month</option>
                <option value="quarter">This Quarter</option>
                <option value="year">This Year</option>
              </select>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-6 rounded-2xl text-white shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <DollarSign className="w-8 h-8 opacity-80" />
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-bold mb-1">${totalEarnings.toLocaleString()}</h3>
            <p className="text-green-100">Total Revenue</p>
            <div className="mt-2 text-sm">
              <span className={`font-semibold ${averageGrowth >= 0 ? 'text-green-200' : 'text-red-200'}`}>
                {averageGrowth >= 0 ? '+' : ''}{averageGrowth.toFixed(1)}%
              </span>
              <span className="text-green-200 ml-1">vs last period</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-400 to-indigo-500 p-6 rounded-2xl text-white shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <BarChart3 className="w-8 h-8 opacity-80" />
            </div>
            <h3 className="text-2xl font-bold mb-1">${totalProfit.toLocaleString()}</h3>
            <p className="text-blue-100">Net Profit</p>
            <div className="mt-2 text-sm">
              <span className="text-blue-200">{profitMargin}% margin</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-400 to-pink-500 p-6 rounded-2xl text-white shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-8 h-8 opacity-80" />
            </div>
            <h3 className="text-2xl font-bold mb-1">{totalProjects}</h3>
            <p className="text-purple-100">Total Projects</p>
            <div className="mt-2 text-sm">
              <span className="text-purple-200">Avg: ${(totalEarnings / totalProjects).toFixed(0)}/project</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-400 to-red-500 p-6 rounded-2xl text-white shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <Calendar className="w-8 h-8 opacity-80" />
            </div>
            <h3 className="text-2xl font-bold mb-1">{totalClients}</h3>
            <p className="text-orange-100">Active Clients</p>
            <div className="mt-2 text-sm">
              <span className="text-orange-200">Last 6 months</span>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Earnings Trend */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Revenue vs Profit Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={earningsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value, name) => [`$${value}`, name === 'earnings' ? 'Revenue' : 'Profit']} />
                <Line
                  type="monotone"
                  dataKey="earnings"
                  stroke="#10b981"
                  strokeWidth={3}
                  dot={{ fill: '#10b981', strokeWidth: 2, r: 6 }}
                  name="Revenue"
                />
                <Line
                  type="monotone"
                  dataKey="profit"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ fill: '#3b82f6', strokeWidth: 2, r: 6 }}
                  name="Profit"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Project Distribution */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Revenue by Project Type</h3>
            <ResponsiveContainer width="100%" height={300}>
              <RechartsPieChart>
                <Pie
                  data={projectEarnings}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {projectEarnings.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`$${value}`, 'Revenue']} />
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Additional Financial Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Expense Breakdown */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Expense Breakdown</h3>
            <div className="space-y-4">
              {monthlyExpenses.map((expense, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <span className="text-gray-700 font-medium">{expense.category}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900">${expense.amount.toLocaleString()}</div>
                    <div className="text-sm text-gray-500">{expense.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-800">Total Expenses</span>
                <span className="font-bold text-red-600">${totalExpenses.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Top Clients by Revenue */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Top Clients by Revenue</h3>
            <div className="space-y-4">
              {clientRevenue.map((client, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-gray-900">{client.name}</div>
                    <div className="text-sm text-gray-500">{client.projects} projects</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-600">${client.revenue.toLocaleString()}</div>
                    <div className="text-sm text-gray-500">Avg: ${client.avgProject.toLocaleString()}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Monthly Breakdown */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Monthly Profit Breakdown</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={earningsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value, name) => {
                if (name === 'profit') return [`$${value}`, 'Profit'];
                if (name === 'expenses') return [`$${value}`, 'Expenses'];
                return [value, name];
              }} />
              <Bar dataKey="profit" fill="#10b981" radius={[4, 4, 0, 0]} name="Profit" />
              <Bar dataKey="expenses" fill="#ef4444" radius={[4, 4, 0, 0]} name="Expenses" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-xl font-bold text-gray-800">Recent Transactions</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Method</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentTransactions.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{transaction.client}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">{transaction.project}</td>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-green-600">
                      ${transaction.amount.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">{transaction.paymentMethod}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500 font-mono text-sm">{transaction.invoice}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                      {new Date(transaction.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full font-semibold ${
                        transaction.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : transaction.status === 'Pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {transaction.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningsDetail;