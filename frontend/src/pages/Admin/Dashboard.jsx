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
