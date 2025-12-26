

import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Legend,
} from "recharts";
import { Ticket, CheckCircle, Briefcase, Umbrella } from "lucide-react";

/* ================= DATA ================= */
const stats = [
  { title: "New Tickets", value: 23, change: "18% Higher Than Last Month", icon: Ticket, bg: "from-purple-500 to-indigo-500" },
  { title: "Ticket Resolved", value: 20, change: "21% Higher Than Last Month", icon: CheckCircle, bg: "from-green-500 to-emerald-500" },
  { title: "Project Assigned", value: 13, change: "37% Higher Than Last Month", icon: Briefcase, bg: "from-orange-500 to-amber-500" },
  { title: "Available Leaves", value: 34, change: "10% Higher Than Last Month", icon: Umbrella, bg: "from-blue-500 to-sky-500" },
];

const chartData = {
  day: [
    { label: "Mon", work: 8, break: 2 },
    { label: "Tue", work: 7, break: 1 },
    { label: "Wed", work: 6, break: 2 },
    { label: "Thu", work: 9, break: 1 },
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
  ],
};

const radialData = [
  { name: "Project 1", value: 58, fill: "#f59e0b" },
  { name: "Project 2", value: 32, fill: "#6366f1" },
  { name: "Project 3", value: 8, fill: "#10b981" },
];

const teamData = Array.from({ length: 12 }).map((_, i) => ({
  name: `Employee ${i + 1}`,
  role: ["Manager", "Developer", "Tester", "Designer"][i % 4],
  status: i % 3 === 0 ? "Absent" : "Available",
  avatar: `https://i.pravatar.cc/40?img=${i + 10}`,
}));

const taskData = Array.from({ length: 18 }).map((_, i) => ({
  task: `Task ${i + 1}`,
  status: ["Completed", "In Progress", "Pending", "Not Started"][i % 4],
  manager: "Jay Soni",
  progress: [100, 60, 80, 30][i % 4],
}));

const performanceData = [
  { title: "Tasks Completed", value: "47 / 50 tasks", percent: 94 },
  { title: "Project Delivery", value: "95 / 100 %", percent: 95 },
  { title: "Client Satisfaction", value: "92 / 100 %", percent: 92 },
  { title: "Code Quality", value: "88 / 100 %", percent: 88 },
  { title: "Bug Resolution Time", value: "20 / 24 hours", percent: 83 },
];

const attendanceData = Array.from({ length: 20 }).map((_, i) => ({
  date: `02/${10 + i}/2018`,
  in: "09:30 AM",
  break: "30 mins",
  out: "05:30 PM",
  hours: "09h:00 mins",
  status: i % 3 === 0 ? "Absent" : "Present",
}));

/* ================= COMPONENT ================= */
const Dashboard = () => {
  const [view, setView] = useState("week");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("hours_view", view);
  }, [view]);

  const totalProgress = Math.round(
    radialData.reduce((a, b) => a + b.value, 0) / radialData.length
  );

  return (
    <div className="w-full max-w-[1600px] mx-auto px-3 sm:px-5 py-4 space-y-6">
      <h1 className="text-xl sm:text-2xl font-semibold">Dashboard</h1>

      {/* ================= STATS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className={`bg-gradient-to-r ${item.bg} text-white p-4 rounded-xl flex justify-between`}>
              <div>
                <p className="text-sm">{item.title}</p>
                <h2 className="text-2xl font-bold">{item.value}</h2>
                <p className="text-xs opacity-80">{item.change}</p>
              </div>
              <Icon size={30} />
            </div>
          );
        })}
      </div>

      {/* ================= CHARTS ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-white rounded-xl p-4 shadow-sm">
          <div className="flex justify-between mb-3">
            <h2 className="font-semibold">Working Hours</h2>
            <div className="flex bg-gray-100 rounded p-1">
              {["day", "week", "month"].map((t) => (
                <button
                  key={t}
                  onClick={() => setView(t)}
                  className={`px-3 py-1 text-sm rounded ${view === t ? "bg-white shadow text-blue-600" : ""}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="h-[260px]">
            <ResponsiveContainer>
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
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col items-center">
          <h2 className="font-semibold mb-3 text-center text-sm sm:text-base">
            Running Project Review
          </h2>

          {/* Chart Wrapper */}
          <div className="w-full max-w-[360px] h-[220px] sm:h-[260px] md:h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="65%"
                outerRadius="90%"
                barSize={12}
                data={radialData}
              >
                <RadialBar
                  dataKey="value"
                  background
                  cornerRadius={10}
                />

                <Legend
                  layout="horizontal"
                  verticalAlign="bottom"
                  align="center"
                  iconSize={10}
                  wrapperStyle={{
                    fontSize: "12px",
                    lineHeight: "18px",
                  }}
                />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>

          <p className="font-bold mt-3 text-sm sm:text-base text-gray-700">
            Total Progress: {totalProgress}%
          </p>
        </div>

        </div>


        {/* ================= TEAM & TASK ================= */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <h2 className="font-semibold mb-3">My Team</h2>
            <div className="space-y-3 max-h-[360px] overflow-auto">
              {teamData.map((m, i) => (
                <div key={i} className="flex justify-between items-center border-b pb-2">
                  <div className="flex gap-3">
                    <img src={m.avatar} className="w-9 h-9 rounded-full" />
                    <div>
                      <p className="text-sm font-medium">{m.name}</p>
                      <p className="text-xs text-gray-500">{m.role}</p>
                    </div>
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full ${m.status === "Available" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}`}>
                    {m.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm xl:col-span-2 ">
            <h2 className="font-semibold mb-3">My Tasks</h2>
            <div className="overflow-auto max-h-[380px] text-center">
              <table className="min-w-[860px] w-full text-sm">
                <thead className="sticky top-0 bg-white">
                  <tr>
                    <th className=" py-2">Task</th>
                    <th>Status</th>
                    <th className="hidden sm:table-cell">Manager</th>
                    <th className="">Progress</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {taskData.map((t, i) => (
                    <tr key={i} className="border-b">
                      <td className="py-2">{t.task}</td>
                      <td>{t.status}</td>
                      <td className="hidden sm:table-cell">{t.manager}</td>
                      <td>
                        <div className="w-full bg-gray-200 h-2 rounded ">
                          <div className="bg-blue-600 h-2 rounded text-center" style={{ width: `${t.progress}%` }} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ================= PERFORMANCE & ATTENDANCE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <h2 className="font-semibold mb-4">Performance Metrics</h2>
            {performanceData.map((p, i) => (
              <div key={i} className="mb-4">
                <div className="flex justify-between text-sm">
                  <span>{p.title}</span>
                  <span>{p.value}</span>
                </div>
                <div className="bg-gray-200 h-2 rounded mt-1">
                  <div className="bg-green-500 h-2 rounded" style={{ width: `${p.percent}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2 bg-white rounded-xl p-4 shadow-sm">
            <div className="flex justify-between mb-3">
              <h2 className="font-semibold">Attendance</h2>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search date / status"
                className="border sm:px-3 py-1 rounded text-sm w-fit"
              />
            </div>

            <div className="overflow-auto max-h-[380px] text-center">
              <table className="min-w-[720px] w-full text-sm">
                <thead className="sticky top-0 bg-gray-50">
                  <tr className="p-5">
                    <th>Date</th>
                    <th>Check In</th>
                    <th>Break</th>
                    <th>Check Out</th>
                    <th>Hours</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceData
                    .filter(a => `${a.date} ${a.status}`.toLowerCase().includes(search.toLowerCase()))
                    .map((a, i) => (
                      <tr key={i} className="border-b ">
                        <td className="pb-2 pt-2 ">{a.date}</td>
                        <td className="pb-2 pt-2 ">{a.in}</td>
                        <td className="pb-2 pt-2 ">{a.break}</td>
                        <td className="pb-2 pt-2 ">{a.out}</td>
                        <td className="pb-2 pt-2 ">{a.hours}</td>
                        <td>
                          <span className={`px-2 py-1 m-2 rounded text-xs ${a.status === "Present" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}`}>
                            {a.status}
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

      export default Dashboard;

