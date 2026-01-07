// import React from "react";
// import {
//   Home,
//   MoreVertical,
//   CheckCircle,
//   Clock,
//   Users,
//   Briefcase,
//   User,
// } from "lucide-react";
// // import barGraph from "../../assets/Dashboard1-Images/barGraph.jpg";
// // import pieChart from "../../assets/Dashboard1-Images/image.png";
// // import lineGraph from "../../assets/Dashboard1-Images/line graph.png";
// // import purpleLineGraph from "../../assets/Dashboard1-Images/purple line graph.png";
// // import AvgLine from "../../assets/Dashboard1-Images/Avearge line graph.png";
// // import employeeTurnOver from "../../assets/Dashboard1-Images/employeeTurnOver.png";
// // import TrainingCompletion from "../../assets/Dashboard1-Images/TrainingCompletion.png";

// const Dashboard1 = () => {
//   return (

//     <div className="space-y-6 font-sans ">
//       {/* Header */}
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-bold text-gray-800">HR Dashboard</h2>
//         <div className="flex items-center text-sm text-gray-500">
//           <Home size={16} className="mr-1" /> &gt; Home &gt; HR Dashboard
//         </div>
//       </div>

//       {/* Top Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Card 1 */}
//         <div className="bg-white p-6 rounded-xl shadow-sm">
//           <div className="flex justify-between items-start">
//             <div>
//               <p className="text-sm font-semibold text-gray-600">
//                 Average Time to Hire
//               </p>
//               <h3 className="text-3xl font-bold text-gray-800 mt-2">
//                 18{" "}
//                 <span className="text-sm font-normal text-gray-500">days</span>
//               </h3>
//               <p className="text-xs mt-1 flex items-center">
//                 vs last month
//               </p>
//             </div>
//             <div className="p-2 bg-green-100 rounded-full text-green-600">
//               <Clock size={20} />
//             </div>
//           </div>
//           <img
//             src={AvgLine}
//             alt="Graph"
//             className="w-full h-16 object-contain mt-4"
//           />
//         </div>

//         {/* Card 2 */}
//         <div className="bg-white p-6 rounded-xl shadow-sm">
//           <div className="flex justify-between items-start">
//             <div>
//               <p className="text-sm font-semibold text-gray-600">
//                 Employee Turnover Rate
//               </p>
//               <h3 className="text-3xl font-bold text-gray-800 mt-2">
//                 4.2 <span className="text-sm font-normal text-gray-500">%</span>
//               </h3>
//               <p className="text-xs mt-1">vs last quarter</p>
//             </div>
//             <div className="p-2 bg-red-100 rounded-full text-red-600">
//               <Users size={20} />
//             </div>
//           </div>
//           <img
//             src={employeeTurnOver}
//             alt="Graph"
//             className="w-full h-16 object-contain mt-4"
//           />
//         </div>

//         {/* Card 3 */}
//         <div className="bg-white p-6 rounded-xl shadow-sm">
//           <div className="flex justify-between items-start">
//             <div>
//               <p className="text-sm font-semibold text-gray-600">
//                 Training Completion Rate
//               </p>
//               <h3 className="text-3xl font-bold text-gray-800 mt-2">
//                 87 <span className="text-sm font-normal text-gray-500">%</span>
//               </h3>
//               <p className="text-xs text-green-500 mt-1">vs last quarter</p>
//             </div>
//             <div className="p-2 bg-blue-100 rounded-full text-blue-600">
//               <CheckCircle size={20} />
//             </div>
//           </div>
//           <img
//             src={TrainingCompletion}
//             alt="Graph"
//             className="w-full h-16 object-contain mt-4"
//           />
//         </div>
//       </div>

//       {/* Middle Section: Employee Summary & Attendance */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Employee Summary (2/3) */}
//         <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
//           <div className="flex justify-between items-center mb-4 ">
//             <h3 className="font-bold text-gray-800">Employee Summary</h3>
//             <MoreVertical size={20} className="text-black cursor-pointer" />

//           </div>
//           <hr className="mb-9 text-gray-200"/>

//           <div className="flex flex-col md:flex-row gap-8">
//             <div className="space-y-4 flex-1">
//               <div className="bg-blue-50 p-4 rounded-lg flex items-center gap-4">
//                 <div className="bg-blue-500 text-white p-3 rounded-full">
//                   <Users size={20} />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-bold">256</h4>
//                   <p className="text-sm text-gray-600">Total Employees</p>
//                 </div>
//               </div>
//               <div className="bg-green-50 p-4 rounded-lg flex items-center gap-4">
//                 <div className="bg-green-500 text-white p-3 rounded-full">
//                   <User size={20} />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-bold">235</h4>
//                   <p className="text-sm text-gray-600">Active Employees</p>
//                 </div>
//               </div>
//               <div className="bg-orange-50 p-4 rounded-lg flex items-center gap-4">
//                 <div className="bg-orange-500 text-white p-3 rounded-full">
//                   <Briefcase size={20} />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-bold">21</h4>
//                   <p className="text-sm text-gray-600">Contractors</p>
//                 </div>
//               </div>
//             </div>
//             <div className="flex-1 flex flex-col items-center">
//               <h4 className="text-md font-semibold mb-4">
//                 Department Distribution
//               </h4>
//               <img
//                 src={pieChart}
//                 alt="Pie Chart"
//                 className="w-84 h-84 object-contain "
//               />
//             </div>
//           </div>
// <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
//     <span className="h-full w-1 bg-green-500 rounded mr-3"></span>
//     <div className="flex-1 flex justify-between items-center">
//       <span className="font-medium">HR</span>
//       <span className="font-semibold">15</span>
//       <span className="text-sm text-gray-500">5.9%</span>
//     </div>
//   </div>

//   {/* Engineering */}
//   <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
//     <span className="h-full w-1 bg-blue-500 rounded mr-3"></span>
//     <div className="flex-1 flex justify-between items-center">
//       <span className="font-medium">Engineering</span>
//       <span className="font-semibold">78</span>
//       <span className="text-sm text-gray-500">30.5%</span>
//     </div>
//   </div>

//   {/* Marketing */}
//   <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
//     <span className="h-full w-1 bg-yellow-500 rounded mr-3"></span>
//     <div className="flex-1 flex justify-between items-center">
//       <span className="font-medium">Marketing</span>
//       <span className="font-semibold">42</span>
//       <span className="text-sm text-gray-500">16.4%</span>
//     </div>
//   </div>

//   {/* Finance */}
//   <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
//     <span className="h-full w-1 bg-purple-500 rounded mr-3"></span>
//     <div className="flex-1 flex justify-between items-center">
//       <span className="font-medium">Finance</span>
//       <span className="font-semibold">30</span>
//       <span className="text-sm text-gray-500">11.7%</span>
//     </div>
//   </div>

//   {/* Operations */}
//   <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
//     <span className="h-full w-1 bg-orange-500 rounded mr-3"></span>
//     <div className="flex-1 flex justify-between items-center">
//       <span className="font-medium">Operations</span>
//       <span className="font-semibold">65</span>
//       <span className="text-sm text-gray-500">25.4%</span>
//     </div>
//   </div>

//   {/* Others */}
//   <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
//     <span className="h-full w-1 bg-gray-500 rounded mr-3"></span>
//     <div className="flex-1 flex justify-between items-center">
//       <span className="font-medium">Others</span>
//       <span className="font-semibold">26</span>
//       <span className="text-sm text-gray-500">10.2%</span>
//     </div>
//   </div>
// </div>
// </div>

//         {/* Attendance Overview (1/3) */}
//         <div className="bg-white p-6 rounded-xl shadow-sm">
//           <div className="flex justify-between items-center mb-6">
//             <h3 className="font-bold text-gray-800">Attendance Overview</h3>
//             <MoreVertical size={20} className=" cursor-pointer" />
//           </div>
//           <hr  className="mb-9 text-gray-200"/>

//           <h4 className="text-sm font-semibold mb-4">Today's Attendance</h4>
//           <div className="grid grid-cols-3 gap-2 mb-6 h-[120px] text-center ">
//             <div className="bg-green-500 text-white p-7 rounded-lg text-center  ">
//               <div className="text-xl font-bold text-[24px]">215</div>
//               <div className="text-xs text-[14px]">Present</div>
//               <div className="text-xs text-[12px]">84.04%</div>
//             </div>
//             <div className="bg-red-500 text-white p-7 rounded-lg text-center">
//               <div className="text-xl font-bold text-[24px]">12</div>
//               <div className="text-xs text-[14px]">Absent</div>
//               <div className="text-xs text-[12px]">4.7%</div>
//             </div>
//             <div className="bg-orange-400 text-white p-7 rounded-lg text-center">
//               <div className="text-xl font-bold text-[24px]">8</div>
//               <div className="text-xs text-[14px]">Late</div>
//               <div className="text-xs text-[12px]">3.1%</div>
//             </div>
//           </div>
//           <div className="bg-blue-500 text-white p-7 rounded-lg text-center mb-6">
//             <div className="text-xl font-bold text-[24px]">21</div>
//             <div className="text-xs text-[14px]">On Leave</div>
//             <div className="text-xs text-[12px]">3.1%</div>
//           </div>

//           <h4 className="text-sm font-semibold mb-4">Weekly Attendance</h4>
//           <img
//             src={barGraph}
//             alt="Weekly Attendance"
//             className="w-full object-contain mb-6"
//           />
//           <button className="rounded-4xl bg-gray-200 p-3 w-[280px] mb-3">View full attendance history</button>
//           <button className="rounded-4xl bg-gray-200 p-3 w-[280px] mb-3">Generate attendance history</button>
//         </div>
//       </div>

//       {/* Bottom Section: Project Survey & Stats */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="font-bold text-gray-800">Project Survay</h3>
//             <MoreVertical size={20} className="text-gray-400" />
//           </div>
//           <img
//             src={purpleLineGraph}
//             alt="Project Survey"
//             className="w-full h-64 object-contain"
//           />
//         </div>
//         <div className="space-y-6">
//           <div className="bg-white p-6 rounded-xl shadow-sm">
//             <h3 className="font-bold text-gray-800 mb-2">Earning</h3>
//             <h2 className="text-2xl font-bold">$20,125</h2>
//             <img
//               src={purpleLineGraph}
//               className="w-full h-24 object-cover mt-2"
//             />
//           </div>
//           <div className="bg-white p-6 rounded-xl shadow-sm">
//             <h3 className="font-bold text-gray-800 mb-2">New Clients</h3>
//             <h2 className="text-2xl font-bold">129</h2>
//             <img src={lineGraph} className="w-full h-24 object-cover mt-2" />
//           </div>
//         </div>
//       </div>
//     </div>

//   );
// };

// export default Dashboard;

//-----------------------------------------------------------------------------------------------------------

import React, { useState } from "react";
import {
  Home,
  MoreVertical,
  Clock,
  RefreshCw,
  GraduationCap,
  Users,
  UserCheck,
  UserPlus,
  Settings,
  Calendar,
  MessageSquare,
  CheckCircle,
  FileText,
  Umbrella,
  HeartPulse,
  UserMinus,
  PlusCircle,
  History,
  CheckCheck,
  Banknote,
  AlertCircle,
  Edit,
  Trash2,
  ArrowUp,
  ArrowDown,
  ChevronsUpDown,
  HardHat,
  BarChart2,
  User,
  Download,
  Printer,
  Filter,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

const employeesLeaveData = [
  {
    id: 1,
    name: "John Doe",
    role: "Software Engineer",
    department: "Engineering",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    leaves: {
      annual: { remaining: 12, used: 10, total: 22 },
      sick: { remaining: 5, used: 5, total: 10 },
      personal: { remaining: 1, used: 4, total: 5 },
    },
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "UX Designer",
    department: "Design",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
    leaves: {
      annual: { remaining: 18, used: 4, total: 22 },
      sick: { remaining: 8, used: 2, total: 10 },
      personal: { remaining: 4, used: 1, total: 5 },
    },
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Product Manager",
    department: "Product",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    leaves: {
      annual: { remaining: 7, used: 15, total: 22 },
      sick: { remaining: 2, used: 8, total: 10 },
      personal: { remaining: 3, used: 2, total: 5 },
    },
  },
];

const Dashboard = () => {
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(3);
  const [showSummaryMenu, setShowSummaryMenu] = useState(false);
  const [showAttendanceMenu, setShowAttendanceMenu] = useState(false);
  const [showHRMenu, setShowHRMenu] = useState(false);
  const [showRecentMenu, setShowRecentMenu] = useState(false);
  const selectedEmployee = employeesLeaveData.find(
    (emp) => emp.id === selectedEmployeeId
  );

  const pieData = [
    { name: "Engineering", value: 78, color: "#2196f3" },
    { name: "Operations", value: 65, color: "#ff9800" },
    { name: "Marketing", value: 42, color: "#ffc107" },
    { name: "Finance", value: 30, color: "#9c27b0" },
    { name: "Others", value: 26, color: "#9e9e9e" },
    { name: "HR", value: 15, color: "#4caf50" },
  ];

  // Mock data for sparklines
  const timeToHireData = [
    { value: 15 },
    { value: 18 },
    { value: 16 },
    { value: 20 },
    { value: 18 },
    { value: 17 },
  ];
  const turnoverData = [
    { value: 3.5 },
    { value: 3.8 },
    { value: 4.0 },
    { value: 3.7 },
    { value: 4.1 },
    { value: 4.2 },
  ];
  const trainingData = [
    { value: 82 },
    { value: 85 },
    { value: 84 },
    { value: 86 },
    { value: 85 },
    { value: 87 },
  ];

  // Mock data for weekly attendance
  const attendanceData = [
    { name: "Mon", Present: 220, Absent: 10, Late: 5 },
    { name: "Tue", Present: 215, Absent: 12, Late: 8 },
    { name: "Wed", Present: 225, Absent: 8, Late: 4 },
    { name: "Thu", Present: 218, Absent: 11, Late: 6 },
    { name: "Fri", Present: 210, Absent: 15, Late: 10 },
  ];

  return (
    <div className="p-[5px] m-0 relative w-full max-w-full overflow-x-hidden box-border max-[480px]:p-[10px]">
      {/* Header */}
      <div className="flex justify-between items-center mb-[25px] max-[480px]:flex-col max-[480px]:items-start max-[480px]:gap-[5px] max-[480px]:mb-[15px]">
        <h1 className="text-[20px] font-semibold text-[#333] max-[480px]:text-[18px]">
          HR Dashboard
        </h1>
        <div className="flex items-center gap-[5px] text-[13px] text-[#666]">
          <Home size={14} />
          <span>&gt; Home &gt; HR Dashboard</span>
        </div>
      </div>

      {/* Top Metrics Cards */}
      <div className="grid grid-cols-3 gap-5 mb-[25px] max-[1024px]:grid-cols-2 max-[600px]:grid-cols-1">
        <div className="bg-white rounded-[10px] p-5 shadow-[0_2px_5px_rgba(0,0,0,0.03)] relative overflow-hidden">
          <div className="flex items-start relative">
            <div className="w-[45px] h-[45px] rounded-[12px] flex items-center justify-center mr-[15px] bg-[#e8f5e9] flex-shrink-0">
              <Clock size={20} className="text-[#4caf50]" />
            </div>
            <div className="flex-1">
              <span className="text-[13px] font-medium text-[#555] block mb-[5px]">
                Average Time to Hire
              </span>
              <div className="flex items-baseline gap-[5px]">
                <span className="text-[24px] font-bold text-[#333]">18</span>
                <span className="text-[14px] text-[#666] font-medium">
                  days
                </span>
              </div>
              <span className="text-[11px] text-[#888] block mt-[2px]">
                vs last month
              </span>
            </div>
            <span className="text-[12px] font-semibold absolute right-0 top-[5px] text-[#f44336]">
              -2.5%
            </span>
          </div>
          <SparkLine
            data={timeToHireData}
            color="#4caf50"
            message="Average time from job posting to offer acceptance"
          />
        </div>

        <div className="bg-white rounded-[10px] p-5 shadow-[0_2px_5px_rgba(0,0,0,0.03)] relative overflow-hidden">
          <div className="flex items-start relative">
            <div className="w-[45px] h-[45px] rounded-[12px] flex items-center justify-center mr-[15px] bg-[#ffebee] flex-shrink-0">
              <RefreshCw size={20} className="text-[#f44336]" />
            </div>
            <div className="flex-1">
              <span className="text-[13px] font-medium text-[#555] block mb-[5px]">
                Employee Turnover Rate
              </span>
              <div className="flex items-baseline gap-[5px]">
                <span className="text-[24px] font-bold text-[#333]">4.2</span>
                <span className="text-[14px] text-[#666] font-medium">%</span>
              </div>
              <span className="text-[11px] text-[#888] block mt-[2px]">
                vs last quarter
              </span>
            </div>
            <span className="text-[12px] font-semibold absolute right-0 top-[5px] text-[#4caf50]">
              +0.8%
            </span>
          </div>
          <SparkLine
            data={turnoverData}
            color="#f44336"
            message="Percentage of employees leaving within a given period"
          />
        </div>

        <div className="bg-white rounded-[10px] p-5 shadow-[0_2px_5px_rgba(0,0,0,0.03)] relative overflow-hidden">
          <div className="flex items-start relative">
            <div className="w-[45px] h-[45px] rounded-[12px] flex items-center justify-center mr-[15px] bg-[#e3f2fd] flex-shrink-0">
              <GraduationCap size={20} className="text-[#2196f3]" />
            </div>
            <div className="flex-1">
              <span className="text-[13px] font-medium text-[#555] block mb-[5px]">
                Training Completion Rate
              </span>
              <div className="flex items-baseline gap-[5px]">
                <span className="text-[24px] font-bold text-[#333]">87</span>
                <span className="text-[14px] text-[#666] font-medium">%</span>
              </div>
              <span className="text-[11px] text-[#888] block mt-[2px]">
                vs last quarter
              </span>
            </div>
            <span className="text-[12px] font-semibold absolute right-0 top-[5px] text-[#4caf50]">
              +5.3%
            </span>
          </div>
          <SparkLine
            data={trainingData}
            color="#2196f3"
            message="Percentage of employees reducing training requirements"
          />
        </div>
      </div>

      {/* Content Grid: HR Summary + Recent Activity (Left) | Leave Balance (Right) */}
      <div className="grid grid-cols-[2fr_1fr] gap-[25px] mb-[25px] max-[768px]:grid-cols-1">
        {/* Left Column */}
        <div className="flex flex-col gap-[25px]">
          {/* Employee Summary (Moved to Left Column) */}
          <div className="bg-white rounded-[10px] p-[20px_40px] shadow-[0_2px_5px_rgba(0,0,0,0.03)] max-[480px]:p-[15px]">
            <div className="flex justify-between items-center mb-[20px] max-[480px]:mb-[15px]">
              <h3 className="text-[16px] font-semibold text-[#333] max-[480px]:text-[15px]">
                Employee Summary
              </h3>
              <div className="relative">
                <button
                  className="bg-transparent border-none outline-none focus:outline-none focus:ring-0 cursor-pointer text-[#888] hover:text-[#333]"
                  onClick={() => setShowSummaryMenu(!showSummaryMenu)}
                >
                  <MoreVertical size={18} />
                </button>
                {showSummaryMenu && (
                  <div className="absolute right-0 top-[30px] bg-white rounded-[8px] shadow-[0_4px_20px_rgba(0,0,0,0.15)] py-[8px] w-[150px] z-50 animate-in fade-in zoom-in-95 duration-200">
                    <button className="w-full flex items-center gap-[10px] px-[15px] py-[8px] text-[13px] text-[#555] hover:bg-[#f5f5f5] text-left transition-colors">
                      <RefreshCw size={14} /> Refresh
                    </button>
                    <button className="w-full flex items-center gap-[10px] px-[15px] py-[8px] text-[13px] text-[#555] hover:bg-[#f5f5f5] text-left transition-colors">
                      <Download size={14} /> Export
                    </button>
                    <button className="w-full flex items-center gap-[10px] px-[15px] py-[8px] text-[13px] text-[#555] hover:bg-[#f5f5f5] text-left transition-colors">
                      <Printer size={14} /> Print
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="flex grid-cols-1 md:grid-cols-2 gap-[40px] max-[768px]:flex-col">
              {/* Left Column: Stats Cards */}
              <div className="flex-1 flex flex-col justify-center gap-[15px]">
                {/* Total Employees */}
                <div className="bg-[#fff] border border-[#f0f0f0] rounded-[10px] p-[15px] flex items-center gap-[20px] shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
                  <div className="w-[50px] h-[50px] rounded-full bg-[#2196f3] flex items-center justify-center text-white shadow-sm">
                    <Users size={24} />
                  </div>
                  <div>
                    <span className="text-[28px] font-bold text-[#333] block leading-none mb-[5px]">
                      256
                    </span>
                    <span className="text-[13px] text-[#666] font-medium">
                      Total Employees
                    </span>
                  </div>
                </div>
                {/* Active Employees */}
                <div className="bg-[#fff] border border-[#f0f0f0] rounded-[10px] p-[15px] flex items-center gap-[20px] shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
                  <div className="w-[50px] h-[50px] rounded-full bg-[#4caf50] flex items-center justify-center text-white shadow-sm">
                    <UserCheck size={24} />
                  </div>
                  <div>
                    <span className="text-[28px] font-bold text-[#333] block leading-none mb-[5px]">
                      235
                    </span>
                    <span className="text-[13px] text-[#666] font-medium">
                      Active Employees
                    </span>
                  </div>
                </div>
                {/* Contractors */}
                <div className="bg-[#fff] border border-[#f0f0f0] rounded-[10px] p-[15px] flex items-center gap-[20px] shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
                  <div className="w-[50px] h-[50px] rounded-full bg-[#ff9800] flex items-center justify-center text-white shadow-sm">
                    <HardHat size={24} />
                  </div>
                  <div>
                    <span className="text-[28px] font-bold text-[#333] block leading-none mb-[5px]">
                      21
                    </span>
                    <span className="text-[13px] text-[#666] font-medium">
                      Contractors
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Pie Chart */}
              <div className="flex-1 min-h-[250px] relative">
                <h4 className="text-[14px] font-medium text-[#555] text-center mb-[5px]">
                  Department Distribution
                </h4>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={0}
                      outerRadius={80}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={entry.color}
                          stroke="#fff"
                          strokeWidth={2}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                        border: "none",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      }}
                    />
                    <Legend
                      verticalAlign="bottom"
                      height={36}
                      iconType="circle"
                      iconSize={8}
                      wrapperStyle={{ fontSize: "11px", paddingTop: "10px" }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Department Details Breakdown (Added below the flex container to span full width if needed, or keep inside) */}
            {/* Actually, user wanted 3 distinct areas. Let's put the grid below the flex split */}
            <div className="mt-[30px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px]">
              {/* HR */}
              <div className="bg-[#fafafa] rounded-[8px] p-[12px_15px] border-l-[4px] border-[#4caf50] flex justify-between items-center">
                <span className="text-[13px] font-semibold text-[#333]">
                  HR
                </span>
                <div className="flex gap-[20px]">
                  <span className="text-[13px] font-bold text-[#333]">15</span>
                  <span className="text-[12px] text-[#666] w-[40px] text-right">
                    5.9%
                  </span>
                </div>
              </div>
              {/* Engineering */}
              <div className="bg-[#fafafa] rounded-[8px] p-[12px_15px] border-l-[4px] border-[#2196f3] flex justify-between items-center">
                <span className="text-[13px] font-semibold text-[#333]">
                  Engineering
                </span>
                <div className="flex gap-[20px]">
                  <span className="text-[13px] font-bold text-[#333]">78</span>
                  <span className="text-[12px] text-[#666] w-[40px] text-right">
                    30.5%
                  </span>
                </div>
              </div>
              {/* Marketing */}
              <div className="bg-[#fafafa] rounded-[8px] p-[12px_15px] border-l-[4px] border-[#ffc107] flex justify-between items-center">
                <span className="text-[13px] font-semibold text-[#333]">
                  Marketing
                </span>
                <div className="flex gap-[20px]">
                  <span className="text-[13px] font-bold text-[#333]">42</span>
                  <span className="text-[12px] text-[#666] w-[40px] text-right">
                    16.4%
                  </span>
                </div>
              </div>
              {/* Finance */}
              <div className="bg-[#fafafa] rounded-[8px] p-[12px_15px] border-l-[4px] border-[#9c27b0] flex justify-between items-center">
                <span className="text-[13px] font-semibold text-[#333]">
                  Finance
                </span>
                <div className="flex gap-[20px]">
                  <span className="text-[13px] font-bold text-[#333]">30</span>
                  <span className="text-[12px] text-[#666] w-[40px] text-right">
                    11.7%
                  </span>
                </div>
              </div>
              {/* Operations */}
              <div className="bg-[#fafafa] rounded-[8px] p-[12px_15px] border-l-[4px] border-[#ff9800] flex justify-between items-center">
                <span className="text-[13px] font-semibold text-[#333]">
                  Operations
                </span>
                <div className="flex gap-[20px]">
                  <span className="text-[13px] font-bold text-[#333]">65</span>
                  <span className="text-[12px] text-[#666] w-[40px] text-right">
                    25.4%
                  </span>
                </div>
              </div>
              {/* Others */}
              <div className="bg-[#fafafa] rounded-[8px] p-[12px_15px] border-l-[4px] border-[#9e9e9e] flex justify-between items-center">
                <span className="text-[13px] font-semibold text-[#333]">
                  Others
                </span>
                <div className="flex gap-[20px]">
                  <span className="text-[13px] font-bold text-[#333]">26</span>
                  <span className="text-[12px] text-[#666] w-[40px] text-right">
                    10.2%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* HR Dashboard Summary */}
          <div className="bg-white rounded-[10px] p-[20px_40px] shadow-[0_2px_5px_rgba(0,0,0,0.03)] max-[480px]:p-[15px]">
            <div className="flex justify-between items-center mb-[20px] max-[480px]:mb-[15px]">
              <h3 className="text-[16px] font-semibold text-[#333] max-[480px]:text-[15px]">
                HR Dashboard Summary
              </h3>
              <div className="relative">
                <button
                  className="bg-transparent border-none outline-none focus:outline-none focus:ring-0 cursor-pointer text-[#888] hover:text-[#333] transition-colors"
                  onClick={() => setShowHRMenu(!showHRMenu)}
                >
                  <MoreVertical size={18} />
                </button>
                {showHRMenu && (
                  <div className="absolute right-0 top-[30px] bg-white rounded-[8px] shadow-[0_4px_20px_rgba(0,0,0,0.15)] py-[8px] w-[150px] z-50 animate-in fade-in zoom-in-95 duration-200">
                    <button className="w-full flex items-center gap-[10px] px-[15px] py-[8px] text-[13px] text-[#555] hover:bg-[#f5f5f5] text-left transition-colors">
                      <PlusCircle size={14} /> Add
                    </button>
                    <button
                      className="w-full flex items-center gap-[10px] px-[15px] py-[8px] text-[13px] text-[#aaa] cursor-not-allowed text-left transition-colors"
                      disabled
                    >
                      <Trash2 size={14} /> Delete
                    </button>
                    <button className="w-full flex items-center gap-[10px] px-[15px] py-[8px] text-[13px] text-[#555] hover:bg-[#f5f5f5] text-left transition-colors">
                      <RefreshCw size={14} /> Refresh
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="flex grid-cols-1 md:grid-cols-2 gap-[40px] max-[768px]:flex-col">
              {/* Left Column: Key Stats */}
              <div className="flex-1 flex flex-col justify-center gap-[30px]">
                <div>
                  <span className="text-[28px] font-bold text-[#333] block mb-[5px]">
                    156
                  </span>
                  <span className="text-[16px] font-medium text-[#4caf50] block mb-[5px]">
                    Total Employees
                  </span>
                  <p className="text-[13px] text-[#666] leading-[1.5]">
                    Current active employees across all departments with
                    complete profiles and documentation.
                  </p>
                </div>
                <div>
                  <span className="text-[28px] font-bold text-[#333] block mb-[5px]">
                    92%
                  </span>
                  <span className="text-[16px] font-medium text-[#ff9800] block mb-[5px]">
                    Employee Satisfaction
                  </span>
                  <p className="text-[13px] text-[#666] leading-[1.5]">
                    Based on the latest quarterly employee satisfaction survey
                    results.
                  </p>
                </div>
              </div>

              {/* Right Column: Department Distribution */}
              <div className="flex-1">
                <h4 className="text-[14px] font-medium text-[#333] mb-[20px]">
                  Department Distribution
                </h4>
                <div className="flex flex-col gap-[15px]">
                  {/* Engineering */}
                  <div className="flex items-center text-[13px]">
                    <span className="w-[80px] text-[#999] font-medium">
                      Engineering
                    </span>
                    <div className="flex-1 h-[4px] bg-[#f0f0f0] rounded-[2px] mx-[15px] relative">
                      <div
                        className="absolute left-0 top-0 h-full bg-[#2196f3] rounded-[2px]"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                    <span className="w-[30px] text-right font-bold text-[#333]">
                      42
                    </span>
                  </div>
                  {/* Sales */}
                  <div className="flex items-center text-[13px]">
                    <span className="w-[80px] text-[#999] font-medium">
                      Sales
                    </span>
                    <div className="flex-1 h-[4px] bg-[#f0f0f0] rounded-[2px] mx-[15px] relative">
                      <div
                        className="absolute left-0 top-0 h-full bg-[#00e676] rounded-[2px]"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                    <span className="w-[30px] text-right font-bold text-[#333]">
                      36
                    </span>
                  </div>
                  {/* Marketing */}
                  <div className="flex items-center text-[13px]">
                    <span className="w-[80px] text-[#999] font-medium">
                      Marketing
                    </span>
                    <div className="flex-1 h-[4px] bg-[#f0f0f0] rounded-[2px] mx-[15px] relative">
                      <div
                        className="absolute left-0 top-0 h-full bg-[#2196f3] rounded-[2px]"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                    <span className="w-[30px] text-right font-bold text-[#333]">
                      25
                    </span>
                  </div>
                  {/* Finance */}
                  <div className="flex items-center text-[13px]">
                    <span className="w-[80px] text-[#999] font-medium">
                      Finance
                    </span>
                    <div className="flex-1 h-[4px] bg-[#f0f0f0] rounded-[2px] mx-[15px] relative">
                      <div
                        className="absolute left-0 top-0 h-full bg-[#ffc107] rounded-[2px]"
                        style={{ width: "40%" }}
                      ></div>
                    </div>
                    <span className="w-[30px] text-right font-bold text-[#333]">
                      20
                    </span>
                  </div>
                  {/* HR */}
                  <div className="flex items-center text-[13px]">
                    <span className="w-[80px] text-[#999] font-medium">HR</span>
                    <div className="flex-1 h-[4px] bg-[#f0f0f0] rounded-[2px] mx-[15px] relative">
                      <div
                        className="absolute left-0 top-0 h-full bg-[#f44336] rounded-[2px]"
                        style={{ width: "30%" }}
                      ></div>
                    </div>
                    <span className="w-[30px] text-right font-bold text-[#333]">
                      14
                    </span>
                  </div>
                  {/* Operations */}
                  <div className="flex items-center text-[13px]">
                    <span className="w-[80px] text-[#999] font-medium">
                      Operations
                    </span>
                    <div className="flex-1 h-[4px] bg-[#f0f0f0] rounded-[2px] mx-[15px] relative">
                      <div
                        className="absolute left-0 top-0 h-full bg-[#1565c0] rounded-[2px]"
                        style={{ width: "38%" }}
                      ></div>
                    </div>
                    <span className="w-[30px] text-right font-bold text-[#333]">
                      19
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activities Section */}
          <div className="bg-white rounded-[10px] p-[20px] shadow-[0_2px_5px_rgba(0,0,0,0.03)] h-[400px] flex flex-col">
            <div className="flex justify-between items-start mb-[20px] shrink-0">
              <div>
                <h3 className="text-[16px] font-semibold text-[#333] mb-[2px]">
                  Recent Activities
                </h3>
                <p className="text-[12px] text-[#888]">
                  Latest HR activities and notifications
                </p>
              </div>
              <div className="flex gap-[10px] items-center">
                <div className="relative group">
                  <div className="w-[30px] h-[30px] rounded-full bg-[#f5f5f5] flex items-center justify-center cursor-pointer hover:bg-[#e0e0e0] transition-colors">
                    <CheckCheck size={16} className="text-[#555]" />
                  </div>
                  <div className="absolute top-[35px] right-0 bg-[#333] text-white text-[10px] py-[4px] px-[8px] rounded-[4px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-sm font-medium">
                    Mark all as read
                  </div>
                </div>
                <div className="relative">
                  <button
                    className="bg-transparent border-none outline-none focus:outline-none focus:ring-0 cursor-pointer text-[#888] hover:text-[#333]"
                    onClick={() => setShowRecentMenu(!showRecentMenu)}
                  >
                    <MoreVertical size={18} />
                  </button>
                  {showRecentMenu && (
                    <div className="absolute right-0 top-[30px] bg-white rounded-[8px] shadow-[0_4px_20px_rgba(0,0,0,0.15)] py-[8px] w-[180px] z-50 animate-in fade-in zoom-in-95 duration-200">
                      <button className="w-full flex items-center gap-[10px] px-[15px] py-[8px] text-[13px] text-[#555] hover:bg-[#f5f5f5] text-left transition-colors">
                        <Filter size={14} /> Filter Activities
                      </button>
                      <button className="w-full flex items-center gap-[10px] px-[15px] py-[8px] text-[13px] text-[#555] hover:bg-[#f5f5f5] text-left transition-colors">
                        <RefreshCw size={14} /> Refresh
                      </button>
                      <button className="w-full flex items-center gap-[10px] px-[15px] py-[8px] text-[13px] text-[#555] hover:bg-[#f5f5f5] text-left transition-colors">
                        <Settings size={14} /> Notification Settings
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar pr-[5px]">
              <div className="relative pl-[10px]">
                {/* Vertical Line */}
                <div className="absolute left-[24px] top-[10px] bottom-[10px] w-[2px] bg-[#f0f0f0]"></div>

                <div className="flex flex-col gap-[25px]">
                  {/* Activity 1 */}
                  <div className="relative flex gap-[20px] items-start">
                    <div className="relative z-10 w-[32px] h-[32px] rounded-full bg-[#ff9800] text-white flex items-center justify-center shrink-0 border-[2px] border-white shadow-sm">
                      <Calendar size={16} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-[4px]">
                        <h4 className="text-[14px] font-semibold text-[#333]">
                          Leave Request Approved{" "}
                          <span className="bg-[#e8f5e9] text-[#4caf50] text-[10px] px-[6px] py-[2px] rounded-[4px] ml-[5px] font-medium">
                            approved
                          </span>
                        </h4>
                        <span className="text-[11px] text-[#999] whitespace-nowrap">
                          1 day ago
                        </span>
                      </div>
                      <p className="text-[13px] text-[#666] mb-[8px] leading-relaxed">
                        Annual leave request has been approved by HR Manager
                      </p>
                      <div className="flex items-center gap-[8px]">
                        <img
                          src="https://randomuser.me/api/portraits/men/32.jpg"
                          alt="User"
                          className="w-[20px] h-[20px] rounded-full"
                        />
                        <span className="text-[12px] font-medium text-[#555]">
                          John Doe
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Activity 2 */}
                  <div className="relative flex gap-[20px] items-start">
                    <div className="relative z-10 w-[32px] h-[32px] rounded-full bg-[#4caf50] text-white flex items-center justify-center shrink-0 border-[2px] border-white shadow-sm">
                      <UserPlus size={16} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-[4px]">
                        <h4 className="text-[14px] font-semibold text-[#333]">
                          New Employee Onboarded{" "}
                          <span className="bg-[#e3f2fd] text-[#2196f3] text-[10px] px-[6px] py-[2px] rounded-[4px] ml-[5px] font-medium">
                            completed
                          </span>
                        </h4>
                        <span className="text-[11px] text-[#999] whitespace-nowrap">
                          1 day ago
                        </span>
                      </div>
                      <p className="text-[13px] text-[#666] mb-[8px] leading-relaxed">
                        New employee has completed onboarding process
                      </p>
                      <div className="flex items-center gap-[8px]">
                        <img
                          src="https://randomuser.me/api/portraits/women/44.jpg"
                          alt="User"
                          className="w-[20px] h-[20px] rounded-full"
                        />
                        <span className="text-[12px] font-medium text-[#555]">
                          Emily Davis
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Activity 3 */}
                  <div className="relative flex gap-[20px] items-start">
                    <div className="relative z-10 w-[32px] h-[32px] rounded-full bg-[#9c27b0] text-white flex items-center justify-center shrink-0 border-[2px] border-white shadow-sm">
                      <MessageSquare size={16} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-[4px]">
                        <h4 className="text-[14px] font-semibold text-[#333]">
                          Performance Review Scheduled{" "}
                          <span className="bg-[#fff3e0] text-[#ff9800] text-[10px] px-[6px] py-[2px] rounded-[4px] ml-[5px] font-medium">
                            pending
                          </span>
                        </h4>
                        <span className="text-[11px] text-[#999] whitespace-nowrap">
                          2 days ago
                        </span>
                      </div>
                      <p className="text-[13px] text-[#666] mb-[8px] leading-relaxed">
                        Quarterly performance review has been scheduled
                      </p>
                      <div className="flex items-center gap-[8px]">
                        <img
                          src="https://randomuser.me/api/portraits/men/65.jpg"
                          alt="User"
                          className="w-[20px] h-[20px] rounded-full"
                        />
                        <span className="text-[12px] font-medium text-[#555]">
                          Michael Wilson
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Activity 4 - Attendance Irregularity */}
                  <div className="relative flex gap-[20px] items-start">
                    <div className="relative z-10 w-[32px] h-[32px] rounded-full bg-[#f44336] text-white flex items-center justify-center shrink-0 border-[2px] border-white shadow-sm">
                      <Clock size={16} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-[4px]">
                        <h4 className="text-[14px] font-semibold text-[#333]">
                          Attendance Irregularity{" "}
                          <span className="bg-[#fff3e0] text-[#ff9800] text-[10px] px-[6px] py-[2px] rounded-[4px] ml-[5px] font-medium">
                            pending
                          </span>
                        </h4>
                        <span className="text-[11px] text-[#999] whitespace-nowrap">
                          3 days ago
                        </span>
                      </div>
                      <p className="text-[13px] text-[#666] mb-[8px] leading-relaxed">
                        Late arrival reported for the third time this month
                      </p>
                      <div className="flex items-center gap-[8px]">
                        <img
                          src="https://randomuser.me/api/portraits/women/68.jpg"
                          alt="User"
                          className="w-[20px] h-[20px] rounded-full"
                        />
                        <span className="text-[12px] font-medium text-[#555]">
                          Sarah Williams
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Activity 5 - Payroll Processing Complete */}
                  <div className="relative flex gap-[20px] items-start">
                    <div className="relative z-10 w-[32px] h-[32px] rounded-full bg-[#2196f3] text-white flex items-center justify-center shrink-0 border-[2px] border-white shadow-sm">
                      <Banknote size={16} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-[4px]">
                        <h4 className="text-[14px] font-semibold text-[#333]">
                          Payroll Processing Complete{" "}
                          <span className="bg-[#e3f2fd] text-[#2196f3] text-[10px] px-[6px] py-[2px] rounded-[4px] ml-[5px] font-medium">
                            completed
                          </span>
                        </h4>
                        <span className="text-[11px] text-[#999] whitespace-nowrap">
                          5 days ago
                        </span>
                      </div>
                      <p className="text-[13px] text-[#666] mb-[8px] leading-relaxed">
                        Monthly payroll has been processed and approved
                      </p>
                      <div className="flex items-center gap-[8px]">
                        <img
                          src="https://randomuser.me/api/portraits/men/75.jpg"
                          alt="User"
                          className="w-[20px] h-[20px] rounded-full"
                        />
                        <span className="text-[12px] font-medium text-[#555]">
                          David Brown
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Activity 6 - Training Program Completed */}
                  <div className="relative flex gap-[20px] items-start">
                    <div className="relative z-10 w-[32px] h-[32px] rounded-full bg-[#009688] text-white flex items-center justify-center shrink-0 border-[2px] border-white shadow-sm">
                      <GraduationCap size={16} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-[4px]">
                        <h4 className="text-[14px] font-semibold text-[#333]">
                          Training Program Completed{" "}
                          <span className="bg-[#e3f2fd] text-[#2196f3] text-[10px] px-[6px] py-[2px] rounded-[4px] ml-[5px] font-medium">
                            completed
                          </span>
                        </h4>
                        <span className="text-[11px] text-[#999] whitespace-nowrap">
                          7 days ago
                        </span>
                      </div>
                      <p className="text-[13px] text-[#666] mb-[8px] leading-relaxed">
                        Successfully completed the leadership training program
                      </p>
                      <div className="flex items-center gap-[8px]">
                        <img
                          src="https://randomuser.me/api/portraits/men/85.jpg"
                          alt="User"
                          className="w-[20px] h-[20px] rounded-full"
                        />
                        <span className="text-[12px] font-medium text-[#555]">
                          Jane Smith
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-[#f0f0f0] mt-[auto] pt-[15px] text-center shrink-0">
              <span className="text-[13px] font-semibold text-[#2196f3] cursor-pointer hover:underline">
                View All Activities
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Attendance Overview */}
        <div className="flex flex-col gap-[25px]">
          <div className="bg-white rounded-[10px] p-[20px] shadow-[0_2px_5px_rgba(0,0,0,0.03)] flex flex-col">
            <div className="flex justify-between items-center mb-[20px]">
              <h3 className="text-[16px] font-semibold text-[#333]">
                Attendance Overview
              </h3>
              <div className="relative">
                <button
                  className="bg-transparent border-none outline-none focus:outline-none focus:ring-0 cursor-pointer text-[#888] hover:text-[#333] transition-colors"
                  onClick={() => setShowAttendanceMenu(!showAttendanceMenu)}
                >
                  <MoreVertical size={18} />
                </button>
                {showAttendanceMenu && (
                  <div className="absolute right-0 top-[30px] bg-white rounded-[8px] shadow-[0_4px_20px_rgba(0,0,0,0.15)] py-[8px] w-[150px] z-50 animate-in fade-in zoom-in-95 duration-200">
                    <button className="w-full flex items-center gap-[10px] px-[15px] py-[8px] text-[13px] text-[#555] hover:bg-[#f5f5f5] text-left transition-colors">
                      <RefreshCw size={14} /> Refresh
                    </button>
                    <button className="w-full flex items-center gap-[10px] px-[15px] py-[8px] text-[13px] text-[#555] hover:bg-[#f5f5f5] text-left transition-colors">
                      <Download size={14} /> Export
                    </button>
                    <button className="w-full flex items-center gap-[10px] px-[15px] py-[8px] text-[13px] text-[#555] hover:bg-[#f5f5f5] text-left transition-colors">
                      <Printer size={14} /> Print
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Today's Attendance Stats */}
            <div className="mb-[25px]">
              <h4 className="text-[13px] font-medium text-[#555] mb-[15px]">
                Today's Attendance
              </h4>
              <div className="grid grid-cols-2 gap-[10px]">
                {/* Present */}
                <div className="bg-[#4caf50] rounded-[8px] p-[15px] flex flex-col items-center justify-center text-white shadow-sm">
                  <span className="text-[24px] font-bold mb-[2px]">215</span>
                  <span className="text-[12px] font-medium opacity-90 mb-[2px]">
                    Present
                  </span>
                  <span className="text-[10px] opacity-75">84.0%</span>
                </div>
                {/* Absent */}
                <div className="bg-[#f44336] rounded-[8px] p-[15px] flex flex-col items-center justify-center text-white shadow-sm">
                  <span className="text-[24px] font-bold mb-[2px]">12</span>
                  <span className="text-[12px] font-medium opacity-90 mb-[2px]">
                    Absent
                  </span>
                  <span className="text-[10px] opacity-75">4.7%</span>
                </div>
                {/* Late */}
                <div className="bg-[#ff9800] rounded-[8px] p-[15px] flex flex-col items-center justify-center text-white shadow-sm">
                  <span className="text-[24px] font-bold mb-[2px]">8</span>
                  <span className="text-[12px] font-medium opacity-90 mb-[2px]">
                    Late
                  </span>
                  <span className="text-[10px] opacity-75">3.1%</span>
                </div>
                {/* On Leave */}
                <div className="bg-[#2196f3] rounded-[8px] p-[15px] flex flex-col items-center justify-center text-white shadow-sm">
                  <span className="text-[24px] font-bold mb-[2px]">21</span>
                  <span className="text-[12px] font-medium opacity-90 mb-[2px]">
                    On Leave
                  </span>
                  <span className="text-[10px] opacity-75">8.2%</span>
                </div>
              </div>
            </div>

            {/* Weekly Attendance Chart */}
            <div className="flex-1 mb-[20px] min-h-[80px]">
              <div className="flex justify-between items-center mb-[15px]">
                <h4 className="text-[13px] font-medium text-[#555]">
                  Weekly Attendance
                </h4>
                <div className="flex items-center gap-[10px] text-[10px] text-[#666]">
                  <div className="flex items-center gap-[4px]">
                    <span className="w-[8px] h-[8px] bg-[#4caf50] rounded-full"></span>{" "}
                    Present
                  </div>
                  <div className="flex items-center gap-[4px]">
                    <span className="w-[8px] h-[8px] bg-[#f44336] rounded-full"></span>{" "}
                    Absent
                  </div>
                  <div className="flex items-center gap-[4px]">
                    <span className="w-[8px] h-[8px] bg-[#ff9800] rounded-full"></span>{" "}
                    Late
                  </div>
                </div>
              </div>

              <ResponsiveContainer width="100%" height={180}>
                <BarChart
                  data={attendanceData}
                  barSize={28}
                  margin={{ top: 10, right: 0, left: -25, bottom: 0 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#eee"
                  />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 11, fill: "#888" }}
                    dy={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 11, fill: "#888" }}
                  />
                  <Tooltip
                    cursor={{ fill: "transparent" }}
                    contentStyle={{
                      backgroundColor: "#fff",
                      borderRadius: "8px",
                      border: "none",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    }}
                    itemStyle={{ fontSize: "12px", padding: "2px 0" }}
                  />
                  <Bar
                    dataKey="Present"
                    stackId="a"
                    fill="#4caf50"
                    radius={[0, 0, 4, 4]}
                  />
                  <Bar
                    dataKey="Absent"
                    stackId="a"
                    fill="#f44336"
                    radius={[0, 0, 0, 0]}
                  />
                  <Bar
                    dataKey="Late"
                    stackId="a"
                    fill="#ff9800"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-[10px] mt-auto">
              <button className="w-full p-[12px] border-none rounded-[30px] bg-[#e3f2fd] text-[#1976d2] font-semibold text-[13px] flex items-center justify-center gap-[10px] cursor-pointer transition-colors duration-200 hover:bg-[#bbdefb] shadow-sm">
                <History size={18} /> View Full Attendance History
              </button>
              <button className="w-full p-[12px] border-none rounded-[30px] bg-[#e3f2fd] text-[#1976d2] font-semibold text-[13px] flex items-center justify-center gap-[10px] cursor-pointer transition-colors duration-200 hover:bg-[#bbdefb] shadow-sm">
                <BarChart2 size={18} /> Generate Attendance Report
              </button>
            </div>
          </div>

          {/* Leave Balance Section */}
          <div className="bg-white rounded-[10px] p-[20px] shadow-[0_2px_5px_rgba(0,0,0,0.03)]">
            <h3 className="text-[16px] font-semibold text-[#333] mb-[20px]">
              Leave Balance
            </h3>

            {/* User Selection Pills */}
            <div className="flex gap-[10px] overflow-x-auto mb-[20px] pb-[5px] custom-scrollbar">
              {employeesLeaveData.map((emp) => (
                <div
                  key={emp.id}
                  onClick={() => setSelectedEmployeeId(emp.id)}
                  className={`flex items-center gap-[10px] rounded-[30px] p-[5px_15px_5px_5px] min-w-max cursor-pointer transition-colors ${
                    selectedEmployeeId === emp.id
                      ? "bg-[#e3f2fd] border border-[#2196f3] shadow-sm"
                      : "bg-[#f5f5f5] hover:bg-[#eee]"
                  }`}
                >
                  <img
                    src={emp.image}
                    alt="User"
                    className="w-[30px] h-[30px] rounded-full"
                  />
                  <span
                    className={`text-[13px] font-medium ${
                      selectedEmployeeId === emp.id
                        ? "text-[#1565c0] font-semibold"
                        : "text-[#555]"
                    }`}
                  >
                    {emp.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Selected User Info */}
            {selectedEmployee && (
              <>
                <div className="flex items-center gap-[15px] mb-[25px]">
                  <img
                    src={selectedEmployee.image}
                    alt="Selected User"
                    className="w-[50px] h-[50px] rounded-full border-[2px] border-[#e3f2fd]"
                  />
                  <div>
                    <h4 className="text-[15px] font-bold text-[#333]">
                      {selectedEmployee.name}
                    </h4>
                    <span className="text-[12px] text-[#666] block">
                      {selectedEmployee.role}
                    </span>
                    <span className="text-[11px] text-[#2196f3] font-medium">
                      {selectedEmployee.department}
                    </span>
                  </div>
                </div>

                {/* Leave Cards */}
                <div className="flex flex-col gap-[15px]">
                  {/* Annual Leave */}
                  <div className="bg-[#fff] border border-[#f0f0f0] rounded-[10px] p-[15px] shadow-[0_2px_4px_rgba(0,0,0,0.01)] transition-transform hover:scale-[1.02] duration-200">
                    <div className="flex justify-between items-start mb-[10px]">
                      <div className="flex items-center gap-[10px]">
                        <div className="w-[36px] h-[36px] rounded-[8px] bg-[#4caf50] flex items-center justify-center text-white">
                          <Umbrella size={18} />
                        </div>
                        <span className="text-[14px] font-semibold text-[#333]">
                          Annual Leave
                        </span>
                      </div>
                      <span className="bg-[#fff3e0] text-[#ff9800] text-[11px] font-bold px-[8px] py-[3px] rounded-[12px]">
                        {selectedEmployee.leaves.annual.remaining} days left
                      </span>
                    </div>
                    <div className="w-full h-[6px] bg-[#f0f0f0] rounded-[3px] mb-[8px] overflow-hidden">
                      <div
                        className="h-full bg-[#ff9800] rounded-[3px]"
                        style={{
                          width: `${
                            (selectedEmployee.leaves.annual.used /
                              selectedEmployee.leaves.annual.total) *
                            100
                          }%`,
                        }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-[11px] text-[#888]">
                      <span>{selectedEmployee.leaves.annual.used} used</span>
                      <span>{selectedEmployee.leaves.annual.total} total</span>
                    </div>
                  </div>

                  {/* Sick Leave */}
                  <div className="bg-[#fff] border border-[#f0f0f0] rounded-[10px] p-[15px] shadow-[0_2px_4px_rgba(0,0,0,0.01)] transition-transform hover:scale-[1.02] duration-200">
                    <div className="flex justify-between items-start mb-[10px]">
                      <div className="flex items-center gap-[10px]">
                        <div className="w-[36px] h-[36px] rounded-[8px] bg-[#f44336] flex items-center justify-center text-white">
                          <HeartPulse size={18} />
                        </div>
                        <span className="text-[14px] font-semibold text-[#333]">
                          Sick Leave
                        </span>
                      </div>
                      <span className="bg-[#ffebee] text-[#f44336] text-[11px] font-bold px-[8px] py-[3px] rounded-[12px]">
                        {selectedEmployee.leaves.sick.remaining} days left
                      </span>
                    </div>
                    <div className="w-full h-[6px] bg-[#f0f0f0] rounded-[3px] mb-[8px] overflow-hidden">
                      <div
                        className="h-full bg-[#f44336] rounded-[3px]"
                        style={{
                          width: `${
                            (selectedEmployee.leaves.sick.used /
                              selectedEmployee.leaves.sick.total) *
                            100
                          }%`,
                        }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-[11px] text-[#888]">
                      <span>{selectedEmployee.leaves.sick.used} used</span>
                      <span>{selectedEmployee.leaves.sick.total} total</span>
                    </div>
                  </div>

                  {/* Personal Leave */}
                  <div className="bg-[#fff] border border-[#f0f0f0] rounded-[10px] p-[15px] shadow-[0_2px_4px_rgba(0,0,0,0.01)] transition-transform hover:scale-[1.02] duration-200">
                    <div className="flex justify-between items-start mb-[10px]">
                      <div className="flex items-center gap-[10px]">
                        <div className="w-[36px] h-[36px] rounded-[8px] bg-[#2196f3] flex items-center justify-center text-white">
                          <User size={18} />
                        </div>
                        <span className="text-[14px] font-semibold text-[#333]">
                          Personal Leave
                        </span>
                      </div>
                      <span className="bg-[#e8f5e9] text-[#4caf50] text-[11px] font-bold px-[8px] py-[3px] rounded-[12px]">
                        {selectedEmployee.leaves.personal.remaining} days left
                      </span>
                    </div>
                    <div className="w-full h-[6px] bg-[#f0f0f0] rounded-[3px] mb-[8px] overflow-hidden">
                      <div
                        className="h-full bg-[#4caf50] rounded-[3px]"
                        style={{
                          width: `${
                            (selectedEmployee.leaves.personal.used /
                              selectedEmployee.leaves.personal.total) *
                            100
                          }%`,
                        }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-[11px] text-[#888]">
                      <span>{selectedEmployee.leaves.personal.used} used</span>
                      <span>
                        {selectedEmployee.leaves.personal.total} total
                      </span>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Action Buttons */}
            <div className="flex gap-[15px] mt-[25px]">
              <button className="flex-1 p-[10px] border-none rounded-[30px] bg-[#f5f5f5] text-[#333] font-semibold text-[13px] flex items-center justify-center gap-[8px] cursor-pointer hover:bg-[#eee] transition-colors">
                <PlusCircle size={16} className="text-[#333]" /> Apply Leave
              </button>
              <button className="flex-1 p-[10px] border-none rounded-[30px] bg-[#f5f5f5] text-[#333] font-semibold text-[13px] flex items-center justify-center gap-[8px] cursor-pointer hover:bg-[#eee] transition-colors">
                <History size={16} className="text-[#333]" /> Leave History
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[20px] mb-[20px] w-full max-w-[100vw] overflow-x-hidden">
        <div className="bg-white rounded-[10px] p-[20px_40px] shadow-[0_2px_5px_rgba(0,0,0,0.03)] max-[480px]:p-[15px] max-[480px]:mb-[15px]">
          <div className="flex justify-between items-center mb-[20px]">
            <h3 className="text-[16px] font-semibold text-[#333]">Projects</h3>
            <span className="text-[13px] font-semibold text-[#2196f3] cursor-pointer hover:underline">
              View All
            </span>
          </div>

          <div className="overflow-x-auto w-full touch-pan-x">
            <table className="w-full border-collapse min-w-[900px]">
              <thead>
                <tr>
                  <th className="text-left text-[13px] font-semibold text-[#444] p-[15px_10px] border-b border-[#eee]">
                    Project Name
                  </th>
                  <th className="text-left text-[13px] font-semibold text-[#444] p-[15px_10px] border-b border-[#eee]">
                    Employee Team
                  </th>
                  <th className="text-left text-[13px] font-semibold text-[#444] p-[15px_10px] border-b border-[#eee]">
                    Team Leaders
                  </th>
                  <th className="text-left text-[13px] font-semibold text-[#444] p-[15px_10px] border-b border-[#eee]">
                    Priority
                  </th>
                  <th className="text-left text-[13px] font-semibold text-[#444] p-[15px_10px] border-b border-[#eee]">
                    Open Task
                  </th>
                  <th className="text-left text-[13px] font-semibold text-[#444] p-[15px_10px] border-b border-[#eee]">
                    Completed Task
                  </th>
                  <th className="text-left text-[13px] font-semibold text-[#444] p-[15px_10px] border-b border-[#eee]">
                    Status
                  </th>
                  <th className="text-center text-[13px] font-semibold text-[#444] p-[15px_10px] border-b border-[#eee]">
                    Documents
                  </th>
                  <th className="text-center text-[13px] font-semibold text-[#444] p-[15px_10px] border-b border-[#eee]">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Project A */}
                <tr className="hover:bg-[#fafafa] border-b border-[#fcfcfc]">
                  <td className="p-[15px_10px] text-[13px] text-[#333] font-medium">
                    Project A
                  </td>
                  <td className="p-[15px_10px] text-[13px] align-middle">
                    <div className="flex items-center">
                      <img
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                        alt="Team"
                        className="w-[30px] h-[30px] rounded-full border-[2px] border-white first:ml-0"
                      />
                      <img
                        src="https://randomuser.me/api/portraits/women/2.jpg"
                        alt="Team"
                        className="w-[30px] h-[30px] rounded-full border-[2px] border-white -ml-[10px]"
                      />
                      <img
                        src="https://randomuser.me/api/portraits/men/3.jpg"
                        alt="Team"
                        className="w-[30px] h-[30px] rounded-full border-[2px] border-white -ml-[10px]"
                      />
                      <div className="w-[30px] h-[30px] rounded-full bg-[#7986cb] text-white text-[10px] font-semibold flex items-center justify-center border-[2px] border-white -ml-[10px]">
                        +1
                      </div>
                    </div>
                  </td>
                  <td className="p-[15px_10px] text-[13px] text-[#333]">
                    John Doe
                  </td>
                  <td className="p-[15px_10px] text-[13px] text-[#333]">
                    <div className="flex items-center gap-[5px] text-[#9c27b0]">
                      <ChevronsUpDown size={14} /> <span>Medium</span>
                    </div>
                  </td>
                  <td className="p-[15px_10px] text-[13px] text-[#333]">19</td>
                  <td className="p-[15px_10px] text-[13px] text-[#333]">10</td>
                  <td className="p-[15px_10px] text-[13px]">
                    <span className="p-[5px_12px] rounded-[6px] text-[12px] font-medium bg-[#e3f2fd] text-[#2196f3]">
                      Pending
                    </span>
                  </td>
                  <td className="p-[15px_10px] text-center">
                    <FileText
                      size={16}
                      className="text-[#2196f3] inline-block cursor-pointer hover:text-[#1976d2]"
                    />
                  </td>
                  <td className="p-[15px_10px] text-center">
                    <div className="flex gap-[10px] justify-center">
                      <button className="bg-transparent border-none p-[2px] cursor-pointer text-[#2196f3]">
                        <Edit size={16} />
                      </button>
                      <button className="bg-transparent border-none p-[2px] cursor-pointer text-[#f44336]">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Project B */}
                <tr className="hover:bg-[#fafafa] border-b border-[#fcfcfc]">
                  <td className="p-[15px_10px] text-[13px] text-[#333] font-medium">
                    Project B
                  </td>
                  <td className="p-[15px_10px] text-[13px] align-middle">
                    <div className="flex items-center">
                      <img
                        src="https://randomuser.me/api/portraits/women/4.jpg"
                        alt="Team"
                        className="w-[30px] h-[30px] rounded-full border-[2px] border-white first:ml-0"
                      />
                      <img
                        src="https://randomuser.me/api/portraits/men/5.jpg"
                        alt="Team"
                        className="w-[30px] h-[30px] rounded-full border-[2px] border-white -ml-[10px]"
                      />
                      <img
                        src="https://randomuser.me/api/portraits/women/6.jpg"
                        alt="Team"
                        className="w-[30px] h-[30px] rounded-full border-[2px] border-white -ml-[10px]"
                      />
                    </div>
                  </td>
                  <td className="p-[15px_10px] text-[13px] text-[#333]">
                    Sarah Smith
                  </td>
                  <td className="p-[15px_10px] text-[13px] text-[#333]">
                    <div className="flex items-center gap-[5px] text-[#4caf50]">
                      <ArrowDown size={14} /> <span>Low</span>
                    </div>
                  </td>
                  <td className="p-[15px_10px] text-[13px] text-[#333]">25</td>
                  <td className="p-[15px_10px] text-[13px] text-[#333]">18</td>
                  <td className="p-[15px_10px] text-[13px]">
                    <span className="p-[5px_12px] rounded-[6px] text-[12px] font-medium bg-[#f3e5f5] text-[#9c27b0]">
                      In Progress
                    </span>
                  </td>
                  <td className="p-[15px_10px] text-center">
                    <FileText
                      size={16}
                      className="text-[#2196f3] inline-block cursor-pointer hover:text-[#1976d2]"
                    />
                  </td>
                  <td className="p-[15px_10px] text-center">
                    <div className="flex gap-[10px] justify-center">
                      <button className="bg-transparent border-none p-[2px] cursor-pointer text-[#2196f3]">
                        <Edit size={16} />
                      </button>
                      <button className="bg-transparent border-none p-[2px] cursor-pointer text-[#f44336]">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Project C */}
                <tr className="hover:bg-[#fafafa] border-b border-[#fcfcfc]">
                  <td className="p-[15px_10px] text-[13px] text-[#333] font-medium">
                    Project C
                  </td>
                  <td className="p-[15px_10px] text-[13px] align-middle">
                    <div className="flex items-center">
                      <img
                        src="https://randomuser.me/api/portraits/women/7.jpg"
                        alt="Team"
                        className="w-[30px] h-[30px] rounded-full border-[2px] border-white first:ml-0"
                      />
                      <img
                        src="https://randomuser.me/api/portraits/men/8.jpg"
                        alt="Team"
                        className="w-[30px] h-[30px] rounded-full border-[2px] border-white -ml-[10px]"
                      />
                      <img
                        src="https://randomuser.me/api/portraits/women/9.jpg"
                        alt="Team"
                        className="w-[30px] h-[30px] rounded-full border-[2px] border-white -ml-[10px]"
                      />
                    </div>
                  </td>
                  <td className="p-[15px_10px] text-[13px] text-[#333]">
                    Olivia Brown
                  </td>
                  <td className="p-[15px_10px] text-[13px] text-[#333]">
                    <div className="flex items-center gap-[5px] text-[#f44336]">
                      <ArrowUp size={14} /> <span>High</span>
                    </div>
                  </td>
                  <td className="p-[15px_10px] text-[13px] text-[#333]">30</td>
                  <td className="p-[15px_10px] text-[13px] text-[#333]">25</td>
                  <td className="p-[15px_10px] text-[13px]">
                    <span className="p-[5px_12px] rounded-[6px] text-[12px] font-medium bg-[#e8f5e9] text-[#4caf50]">
                      Completed
                    </span>
                  </td>
                  <td className="p-[15px_10px] text-center">
                    <FileText
                      size={16}
                      className="text-[#2196f3] inline-block cursor-pointer hover:text-[#1976d2]"
                    />
                  </td>
                  <td className="p-[15px_10px] text-center">
                    <div className="flex gap-[10px] justify-center">
                      <button className="bg-transparent border-none p-[2px] cursor-pointer text-[#2196f3]">
                        <Edit size={16} />
                      </button>
                      <button className="bg-transparent border-none p-[2px] cursor-pointer text-[#f44336]">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Project D */}
                <tr className="hover:bg-[#fafafa] border-b border-[#fcfcfc]">
                  <td className="p-[15px_10px] text-[13px] text-[#333] font-medium">
                    Project D
                  </td>
                  <td className="p-[15px_10px] text-[13px] align-middle">
                    <div className="flex items-center">
                      <img
                        src="https://randomuser.me/api/portraits/men/10.jpg"
                        alt="Team"
                        className="w-[30px] h-[30px] rounded-full border-[2px] border-white first:ml-0"
                      />
                      <img
                        src="https://randomuser.me/api/portraits/women/11.jpg"
                        alt="Team"
                        className="w-[30px] h-[30px] rounded-full border-[2px] border-white -ml-[10px]"
                      />
                      <img
                        src="https://randomuser.me/api/portraits/men/12.jpg"
                        alt="Team"
                        className="w-[30px] h-[30px] rounded-full border-[2px] border-white -ml-[10px]"
                      />
                    </div>
                  </td>
                  <td className="p-[15px_10px] text-[13px] text-[#333]">
                    David Martinez
                  </td>
                  <td className="p-[15px_10px] text-[13px] text-[#333]">
                    <div className="flex items-center gap-[5px] text-[#4caf50]">
                      <ArrowDown size={14} /> <span>Low</span>
                    </div>
                  </td>
                  <td className="p-[15px_10px] text-[13px] text-[#333]">15</td>
                  <td className="p-[15px_10px] text-[13px] text-[#333]">10</td>
                  <td className="p-[15px_10px] text-[13px]">
                    <span className="p-[5px_12px] rounded-[6px] text-[12px] font-medium bg-[#e3f2fd] text-[#2196f3]">
                      Pending
                    </span>
                  </td>
                  <td className="p-[15px_10px] text-center">
                    <FileText
                      size={16}
                      className="text-[#2196f3] inline-block cursor-pointer hover:text-[#1976d2]"
                    />
                  </td>
                  <td className="p-[15px_10px] text-center">
                    <div className="flex gap-[10px] justify-center">
                      <button className="bg-transparent border-none p-[2px] cursor-pointer text-[#2196f3]">
                        <Edit size={16} />
                      </button>
                      <button className="bg-transparent border-none p-[2px] cursor-pointer text-[#f44336]">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Project E */}
                <tr className="hover:bg-[#fafafa] border-b border-[#fcfcfc]">
                  <td className="p-[15px_10px] text-[13px] text-[#333] font-medium">
                    Project E
                  </td>
                  <td className="p-[15px_10px] text-[13px] align-middle">
                    <div className="flex items-center">
                      <img
                        src="https://randomuser.me/api/portraits/women/13.jpg"
                        alt="Team"
                        className="w-[30px] h-[30px] rounded-full border-[2px] border-white first:ml-0"
                      />
                      <img
                        src="https://randomuser.me/api/portraits/men/14.jpg"
                        alt="Team"
                        className="w-[30px] h-[30px] rounded-full border-[2px] border-white -ml-[10px]"
                      />
                      <img
                        src="https://randomuser.me/api/portraits/women/15.jpg"
                        alt="Team"
                        className="w-[30px] h-[30px] rounded-full border-[2px] border-white -ml-[10px]"
                      />
                      <div className="w-[30px] h-[30px] rounded-full bg-[#7986cb] text-white text-[10px] font-semibold flex items-center justify-center border-[2px] border-white -ml-[10px]">
                        +1
                      </div>
                    </div>
                  </td>
                  <td className="p-[15px_10px] text-[13px] text-[#333]">
                    Ethan Green
                  </td>
                  <td className="p-[15px_10px] text-[13px] text-[#333]">
                    <div className="flex items-center gap-[5px] text-[#9c27b0]">
                      <ChevronsUpDown size={14} /> <span>Medium</span>
                    </div>
                  </td>
                  <td className="p-[15px_10px] text-[13px] text-[#333]">40</td>
                  <td className="p-[15px_10px] text-[13px] text-[#333]">30</td>
                  <td className="p-[15px_10px] text-[13px]">
                    <span className="p-[5px_12px] rounded-[6px] text-[12px] font-medium bg-[#e8f5e9] text-[#4caf50]">
                      Completed
                    </span>
                  </td>
                  <td className="p-[15px_10px] text-center">
                    <FileText
                      size={16}
                      className="text-[#2196f3] inline-block cursor-pointer hover:text-[#1976d2]"
                    />
                  </td>
                  <td className="p-[15px_10px] text-center">
                    <div className="flex gap-[10px] justify-center">
                      <button className="bg-transparent border-none p-[2px] cursor-pointer text-[#2196f3]">
                        <Edit size={16} />
                      </button>
                      <button className="bg-transparent border-none p-[2px] cursor-pointer text-[#f44336]">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Project F */}
                <tr className="hover:bg-[#fafafa] border-b border-[#fcfcfc]">
                  <td className="p-[15px_10px] text-[13px] text-[#333] font-medium">
                    Project F
                  </td>
                  <td className="p-[15px_10px] text-[13px] align-middle">
                    <div className="flex items-center">
                      <img
                        src="https://randomuser.me/api/portraits/men/16.jpg"
                        alt="Team"
                        className="w-[30px] h-[30px] rounded-full border-[2px] border-white first:ml-0"
                      />
                      <img
                        src="https://randomuser.me/api/portraits/women/17.jpg"
                        alt="Team"
                        className="w-[30px] h-[30px] rounded-full border-[2px] border-white -ml-[10px]"
                      />
                      <img
                        src="https://randomuser.me/api/portraits/men/18.jpg"
                        alt="Team"
                        className="w-[30px] h-[30px] rounded-full border-[2px] border-white -ml-[10px]"
                      />
                    </div>
                  </td>
                  <td className="p-[15px_10px] text-[13px] text-[#333]">
                    Jack Robinson
                  </td>
                  <td className="p-[15px_10px] text-[13px] text-[#333]">
                    <div className="flex items-center gap-[5px] text-[#f44336]">
                      <ArrowUp size={14} /> <span>High</span>
                    </div>
                  </td>
                  <td className="p-[15px_10px] text-[13px] text-[#333]">12</td>
                  <td className="p-[15px_10px] text-[13px] text-[#333]">10</td>
                  <td className="p-[15px_10px] text-[13px]">
                    <span className="p-[5px_12px] rounded-[6px] text-[12px] font-medium bg-[#f3e5f5] text-[#9c27b0]">
                      In Progress
                    </span>
                  </td>
                  <td className="p-[15px_10px] text-center">
                    <FileText
                      size={16}
                      className="text-[#2196f3] inline-block cursor-pointer hover:text-[#1976d2]"
                    />
                  </td>
                  <td className="p-[15px_10px] text-center">
                    <div className="flex gap-[10px] justify-center">
                      <button className="bg-transparent border-none p-[2px] cursor-pointer text-[#2196f3]">
                        <Edit size={16} />
                      </button>
                      <button className="bg-transparent border-none p-[2px] cursor-pointer text-[#f44336]">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Project G */}
                <tr className="hover:bg-[#fafafa] border-b border-[#fcfcfc]">
                  <td className="p-[15px_10px] text-[13px] text-[#333] font-medium">
                    Project G
                  </td>
                  <td className="p-[15px_10px] text-[13px] align-middle">
                    <div className="flex items-center">
                      <img
                        src="https://randomuser.me/api/portraits/women/19.jpg"
                        alt="Team"
                        className="w-[30px] h-[30px] rounded-full border-[2px] border-white first:ml-0"
                      />
                      <img
                        src="https://randomuser.me/api/portraits/men/20.jpg"
                        alt="Team"
                        className="w-[30px] h-[30px] rounded-full border-[2px] border-white -ml-[10px]"
                      />
                      <img
                        src="https://randomuser.me/api/portraits/women/21.jpg"
                        alt="Team"
                        className="w-[30px] h-[30px] rounded-full border-[2px] border-white -ml-[10px]"
                      />
                      <div className="w-[30px] h-[30px] rounded-full bg-[#7986cb] text-white text-[10px] font-semibold flex items-center justify-center border-[2px] border-white -ml-[10px]">
                        +2
                      </div>
                    </div>
                  </td>
                  <td className="p-[15px_10px] text-[13px] text-[#333]">
                    Ava Scott
                  </td>
                  <td className="p-[15px_10px] text-[13px] text-[#333]">
                    <div className="flex items-center gap-[5px] text-[#4caf50]">
                      <ArrowDown size={14} /> <span>Low</span>
                    </div>
                  </td>
                  <td className="p-[15px_10px] text-[13px] text-[#333]">22</td>
                  <td className="p-[15px_10px] text-[13px] text-[#333]">14</td>
                  <td className="p-[15px_10px] text-[13px]">
                    <span className="p-[5px_12px] rounded-[6px] text-[12px] font-medium bg-[#e8f5e9] text-[#4caf50]">
                      Completed
                    </span>
                  </td>
                  <td className="p-[15px_10px] text-center">
                    <FileText
                      size={16}
                      className="text-[#2196f3] inline-block cursor-pointer hover:text-[#1976d2]"
                    />
                  </td>
                  <td className="p-[15px_10px] text-center">
                    <div className="flex gap-[10px] justify-center">
                      <button className="bg-transparent border-none p-[2px] cursor-pointer text-[#2196f3]">
                        <Edit size={16} />
                      </button>
                      <button className="bg-transparent border-none p-[2px] cursor-pointer text-[#f44336]">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper component to fix Briefcase icon not being exported in this lucide version or generic naming
const BriefcaseIconWrapper = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const SparkLine = ({ data, color, message }) => (
  <div className="h-[50px] w-full mt-[15px]">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <Tooltip
          content={({ active }) => {
            if (active) {
              return (
                <div className="bg-[#333] text-white text-[10px] p-[6px_10px] rounded-[4px] shadow-lg max-w-[150px] leading-[1.4]">
                  {message}
                </div>
              );
            }
            return null;
          }}
          cursor={{ stroke: color, strokeWidth: 1, strokeDasharray: "3 3" }}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke={color}
          strokeWidth={2}
          dot={false}
          isAnimationActive={true}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default Dashboard;
