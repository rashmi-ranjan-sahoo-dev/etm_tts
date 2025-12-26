import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  RadialBarChart,
  RadialBar,
  Legend,
} from "recharts";

import { Ticket, CheckCircle, Briefcase, Umbrella } from "lucide-react";
import { useState, useEffect } from "react";

const stats = [
  {
    title: "New Tickets",
    value: 23,
    change: "18% Higher Than Last Month",
    icon: Ticket,
    bg: "from-purple-500 to-indigo-500",
  },
  {
    title: "Ticket Resolved",
    value: 20,
    change: "21% Higher Than Last Month",
    icon: CheckCircle,
    bg: "from-green-500 to-emerald-500",
  },
  {
    title: "Project Assigned",
    value: 13,
    change: "37% Higher Than Last Month",
    icon: Briefcase,
    bg: "from-orange-500 to-amber-500",
  },
  {
    title: "Available Leaves",
    value: 34,
    change: "10% Higher Than Last Month",
    icon: Umbrella,
    bg: "from-blue-500 to-sky-500",
  },
];

// const barData = [
//   { day: "Monday", work: 83, break: 17 },
//   { day: "Tuesday", work: 71, break: 29 },
//   { day: "Wednesday", work: 67, break: 33 },
//   { day: "Thursday", work: 89, break: 11 },
//   { day: "Friday", work: 63, break: 37 },
//   { day: "Saturday", work: 61, break: 39 },
// ];

const chartData = {
  day: [
    { label: "Mon", work: 8, break: 2 },
    { label: "Tue", work: 7, break: 1 },
    { label: "Wed", work: 6, break: 2 },
    { label: "Thu", work: 9, break: 1 },
    { label: "Fri", work: 8, break: 2 },
    { label: "Fri", work: 8, break: 2 },
  ],
  week: [
    { label: "Week 1", work: 40, break: 8 },
    { label: "Week 2", work: 38, break: 7 },
    { label: "Week 3", work: 42, break: 6 },
    { label: "Week 4", work: 36, break: 9 },
  ],
  month: [
    { label: "Jan", work: 160, break: 32 },
    { label: "Feb", work: 148, break: 28 },
    { label: "Mar", work: 170, break: 30 },
    { label: "Apr", work: 155, break: 34 },
    { label: "May", work: 160, break: 32 },
    { label: "Jun", work: 148, break: 28 },
    { label: "July", work: 170, break: 30 },
    { label: "Aug", work: 155, break: 34 },
    { label: "Sep", work: 160, break: 32 },
    { label: "Oct", work: 148, break: 28 },
    { label: "Nov", work: 170, break: 30 },
    { label: "Dec", work: 155, break: 34 },
  ],
};

// const pieData = [
//   { name: "Project 1", value: 40, color: "#f59e0b" },
//   { name: "Project 2", value: 32, color: "#6366f1" },
//   { name: "Project 3", value: 28, color: "#10b981" },
// ];

const radialData = [
  { name: "Project 1", value: 40, fill: "#f59e0b" },
  { name: "Project 2", value: 32, fill: "#6366f1" },
  { name: "Project 3", value: 28, fill: "#10b981" },
]

const Dashboard = () => {
  const [view, setView] = useState("week");
  useEffect(() => {
    localStorage.setItem("hours_view", view);
  }, [view]);

  const totalProgress = Math.round(
    radialData.reduce((sum, item) => sum + item.value, 0) / radialData.length
  );

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={`bg-gradient-to-r ${item.bg} text-white p-5 rounded-xl flex justify-between items-center`}
            >
              <div>
                <p className="text-sm opacity-90">{item.title}</p>
                <h2 className="text-3xl font-bold mt-1">{item.value}</h2>
                <p className="text-xs mt-2 opacity-80">{item.change}</p>
              </div>
              <Icon size={32} className="opacity-80" />
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {/* Weekly / Monthly / Daily Working Hours */}
        <div className="xl:col-span-2 bg-white rounded-xl p-4 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
            <h2 className="font-semibold">Working Hours</h2>

            {/* Toggle Buttons */}
            <div className="flex bg-gray-100 rounded-lg p-1 w-fit">
              {["day", "week", "month"].map((type) => (
                <button
                  key={type}
                  onClick={() => setView(type)}
                  className={`px-3 py-1 text-sm rounded-md transition
            ${
              view === type
                ? "bg-white shadow text-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData[view]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="work" stackId="a" fill="#6366f1" />
              <Bar dataKey="break" stackId="a" fill="#d1d5db" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Running Project Review */}
        {/* <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col items-center">
          <h2 className="font-semibold mb-4">Running Project Review</h2>

          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
              >
                {pieData.map((item, i) => (
                  <Cell key={i} fill={item.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          <p className="text-xl font-bold mt-2">Total 52%</p>

          <div className="flex gap-4 mt-4 text-sm">
            {pieData.map((p, i) => (
              <div key={i} className="flex items-center gap-1">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: p.color }}
                />
                {p.name}
              </div>
            ))}
          </div>

          <button className="mt-4 px-4 py-1 border rounded-full text-sm text-blue-600">
            More Details
          </button>
        </div> */}

        {/* Running Project Review */}
        <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col">
          <h2 className="font-semibold mb-4 text-center">
            Running Project Review
          </h2>

          <div className="w-full h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                cx="40%"
                cy="50%"
                innerRadius="55%"
                outerRadius="90%"
                barSize={12}
                data={radialData}
              >
                <RadialBar
                  dataKey="value"
                  cornerRadius={10}
                  label={{ position: "insideStart", fill: "#fff" }}
                />
                <Legend
                  iconSize={10}
                  layout="vertical"
                  verticalAlign="middle"
                  wrapperStyle={{
                    top: "50%",
                    right: 0,
                    transform: "translate(0, -50%)",
                    lineHeight: "24px",
                  }}
                />
                <Tooltip />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>

          <p className="text-xl font-bold mt-2 text-center">
            Total {totalProgress}%
          </p>

          <button className="mx-auto mt-4 px-4 py-1 border rounded-full text-sm text-blue-600">
            More Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
