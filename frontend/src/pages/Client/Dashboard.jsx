// import React from "react";
// import { ClipboardList, Clock, Users, CreditCard, TrendingUp, TrendingDown, Home, } from "lucide-react";
// import { CheckCircle, AlertCircle } from "lucide-react";
// import { FileText, Eye, Download, Upload } from "lucide-react";

// /* ================= CARD DATA (JSON) ================= */

// const dashboardCards = [
//   {
//     id: 1,
//     title: "Running Projects",
//     value: "70",
//     icon: ClipboardList,
//     iconColor: "text-orange-500",
//     trend: "up",
//     trendText: "10% Higher Than Last Month",
//   },
//   {
//     id: 2,
//     title: "Active Tickets",
//     value: "650",
//     icon: Clock,
//     iconColor: "text-blue-500",
//     trend: "down",
//     trendText: "07% Less Than Last Month",
//   },
//   {
//     id: 3,
//     title: "Assigned Employee",
//     value: "885",
//     icon: Users,
//     iconColor: "text-green-500",
//     trend: "up",
//     trendText: "12% Higher Than Last Month",
//   },
//   {
//     id: 4,
//     title: "Total Payments",
//     value: "$9,456",
//     icon: CreditCard,
//     iconColor: "text-indigo-500",
//     trend: "down",
//     trendText: "22% Less Than Last Month",
//   },
// ];

// const ClientDashboard = () => {
//   return (
//     <div className="p-4 md:p-6 bg-gray-100 min-h-screen">

//       {/* Header */}
//       {/* <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
//         <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>

//         <div className="flex items-center gap-2 text-sm text-gray-500 mt-2 sm:mt-0">
//           <Home size={16} />
//           <span>Home</span>
//           <span>›</span>
//           <span className="text-gray-700 font-medium">Dashboard</span>
//         </div>
//       </div> */}

//       {/* Welcome Card */}
//       <div className="bg-white rounded-xl shadow p-4 md:p-6 flex flex-col md:flex-row items-center gap-6 mb-6">
//         <img
//           src="https://illustrations.popsy.co/gray/welcome.svg"
//           alt="Welcome"
//           className="w-full md:w-1/3 max-w-xs"
//         />

//         <div className="text-center md:text-left">
//           <h2 className="text-xl font-semibold text-gray-800">
//             Welcome back <span className="text-blue-600">Cara Stevens!</span>
//           </h2>
//           <p className="text-gray-600 mt-2 max-w-2xl">
//             We would like to take this opportunity to welcome you to our
//             practice and to thank you for choosing our company.
//           </p>
//         </div>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
//         {dashboardCards.map((card) => (
//           <StatCard key={card.id} data={card} />
//         ))}
//       </div>

//       {/* ================= LOWER SECTION ================= */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

//         {/* Invoices – 2/3 */}
//         <div
//           className="lg:col-span-2 bg-white rounded-xl shadow p-5
//                max-h-[420px] md:max-h-[520px] lg:max-h-[600px]
//                overflow-y-auto"
//         >
//           <InvoicesTable />
//         </div>

//         {/* Project Hours – 1/3 */}
//         <div
//           className="lg:col-span-1 bg-white rounded-xl shadow p-5
//                max-h-[420px] md:max-h-[520px] lg:max-h-[600px]
//                overflow-y-auto"
//         >
//           <ProjectHours />
//         </div>

//       </div>


//       {/* ================= PROJECT & FEEDBACK SECTION ================= */}
//       <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 mt-6">

//         {/* Project Status Overview – 2/3 */}
//         <div className="xl:col-span-2 bg-white rounded-xl shadow p-5
//                 max-h-[420px] md:max-h-[520px] lg:max-h-[600px]
//                 overflow-y-auto">
//           <ProjectStatusOverview />
//         </div>

//         {/* Previous Feedback – 1/3 */}
//         <div className="xl:col-span-2 bg-white rounded-xl shadow p-5
//                 max-h-[420px] md:max-h-[520px] lg:max-h-[600px]
//                 overflow-y-auto">
//           <PreviousFeedback />
//         </div>

//       </div>


//       {/* ================= DOCUMENTS & PAYMENTS ================= */}
//       <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">

//         {/* Recent Documents – 1/3 */}
//         <div className="bg-white rounded-xl shadow
//                   max-h-[420px] md:max-h-[520px] lg:max-h-[600px]
//                   overflow-y-auto">
//           <RecentDocuments />
//         </div>

//         {/* Payment History – 2/3 */}
//         <div className="xl:col-span-2 bg-white rounded-xl shadow
//                   max-h-[420px] md:max-h-[520px] lg:max-h-[600px]
//                   overflow-y-auto">
//           <PaymentHistory />
//         </div>

//       </div>

//     </div>
//   );
// };

// export default ClientDashboard;

// /* ================= Reusable Card ================= */

// const StatCard = ({ data }) => {
//   const Icon = data.icon;

//   return (
//     <div className="bg-white rounded-xl shadow p-5 flex flex-col gap-4">
//       <div className="flex items-center justify-between">
//         <div>
//           <h4 className="text-sm text-gray-500">{data.title}</h4>
//           <p className="text-2xl font-semibold text-gray-800 mt-1">
//             {data.value}
//           </p>
//         </div>

//         <Icon size={36} className={data.iconColor} />
//       </div>

//       <div className="flex items-center gap-2 text-sm">
//         {data.trend === "up" ? (
//           <TrendingUp size={16} className="text-green-500" />
//         ) : (
//           <TrendingDown size={16} className="text-orange-500" />
//         )}
//         <span className="text-gray-600">{data.trendText}</span>
//       </div>
//     </div>
//   );
// };


// const invoices = [
//   {
//     id: "#IN7865",
//     name: "John Doe",
//     date: "12/05/2024",
//     status: "Paid",
//     amount: "$500",
//   },
//   {
//     id: "#IN2301",
//     name: "Sarah Smith",
//     date: "03/31/2024",
//     status: "Not Paid",
//     amount: "$372",
//   },
//   {
//     id: "#IN7239",
//     name: "Airi Satou",
//     date: "04/14/2024",
//     status: "Partially Paid",
//     amount: "$1038",
//   },
//   {
//     id: "#IN7865",
//     name: "John Doe",
//     date: "12/05/2024",
//     status: "Paid",
//     amount: "$500",
//   },
//   {
//     id: "#IN2301",
//     name: "Sarah Smith",
//     date: "03/31/2024",
//     status: "Not Paid",
//     amount: "$372",
//   },
//   {
//     id: "#IN7239",
//     name: "Airi Satou",
//     date: "04/14/2024",
//     status: "Partially Paid",
//     amount: "$1038",
//   }, {
//     id: "#IN7865",
//     name: "John Doe",
//     date: "12/05/2024",
//     status: "Paid",
//     amount: "$500",
//   },
//   {
//     id: "#IN2301",
//     name: "Sarah Smith",
//     date: "03/31/2024",
//     status: "Not Paid",
//     amount: "$372",
//   },
//   {
//     id: "#IN7239",
//     name: "Airi Satou",
//     date: "04/14/2024",
//     status: "Partially Paid",
//     amount: "$1038",
//   },
//    {
//     id: "#IN7865",
//     name: "John Doe",
//     date: "12/05/2024",
//     status: "Paid",
//     amount: "$500",
//   },
//   {
//     id: "#IN2301",
//     name: "Sarah Smith",
//     date: "03/31/2024",
//     status: "Not Paid",
//     amount: "$372",
//   },
//   {
//     id: "#IN7239",
//     name: "Airi Satou",
//     date: "04/14/2024",
//     status: "Partially Paid",
//     amount: "$1038",
//   }, {
//     id: "#IN7865",
//     name: "John Doe",
//     date: "12/05/2024",
//     status: "Paid",
//     amount: "$500",
//   },
//   {
//     id: "#IN2301",
//     name: "Sarah Smith",
//     date: "03/31/2024",
//     status: "Not Paid",
//     amount: "$372",
//   },
//   {
//     id: "#IN7239",
//     name: "Airi Satou",
//     date: "04/14/2024",
//     status: "Partially Paid",
//     amount: "$1038",
//   },
// ];

// const statusStyles = {
//   Paid: "bg-green-100 text-green-700",
//   "Not Paid": "bg-red-100 text-red-600",
//   "Partially Paid": "bg-orange-100 text-orange-600",
// };

// const InvoicesTable = () => {
//   return (
//     <>
//       {/* Sticky Header */}
//       <div className="flex justify-between items-center mb-4
//                       sticky top-0 bg-white z-10 pb-3">
//         <h3 className="text-lg font-semibold text-gray-800">Invoices</h3>
//         <button className="text-blue-600 text-sm font-medium hover:underline">
//           View All
//         </button>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="w-full text-sm">
//           <thead className="text-gray-500 border-b">
//             <tr>
//               <th className="text-left py-3">Invoice No</th>
//               <th className="text-left py-3">Generated By</th>
//               <th className="text-left py-3">Due Date</th>
//               <th className="text-left py-3">Status</th>
//               <th className="text-left py-3">Total</th>
//             </tr>
//           </thead>

//           <tbody>
//             {invoices.map((inv, i) => (
//               <tr key={i} className="border-b last:border-none">
//                 <td className="py-3 font-medium">{inv.id}</td>
//                 <td className="py-3">{inv.name}</td>
//                 <td className="py-3">{inv.date}</td>
//                 <td className="py-3">
//                   <span
//                     className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[inv.status]}`}
//                   >
//                     {inv.status}
//                   </span>
//                 </td>
//                 <td className="py-3 font-semibold">{inv.amount}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };


// const projectHours = [
//   { name: "Angular Website", percent: 33, color: "bg-red-500" },
//   { name: "Shopping App", percent: 25, color: "bg-blue-500" },
//   { name: "ERP System", percent: 12, color: "bg-yellow-400" },
//   { name: "React Admin Panel", percent: 10, color: "bg-purple-500" },
//   { name: "API Integration", percent: 7, color: "bg-green-500" },
//   { name: "Email Marketing", percent: 13, color: "bg-cyan-500" },
//   { name: "Angular Website", percent: 33, color: "bg-red-500" },
//   { name: "Shopping App", percent: 25, color: "bg-blue-500" },
//   { name: "ERP System", percent: 12, color: "bg-yellow-400" },
//   { name: "React Admin Panel", percent: 10, color: "bg-purple-500" },
//   { name: "API Integration", percent: 7, color: "bg-green-500" },
//   { name: "Email Marketing", percent: 13, color: "bg-cyan-500" },
//   { name: "Angular Website", percent: 33, color: "bg-red-500" },
//   { name: "Shopping App", percent: 25, color: "bg-blue-500" },
//   { name: "ERP System", percent: 12, color: "bg-yellow-400" },
//   { name: "React Admin Panel", percent: 10, color: "bg-purple-500" },
//   { name: "API Integration", percent: 7, color: "bg-green-500" },
//   { name: "Email Marketing", percent: 13, color: "bg-cyan-500" }, 
//   { name: "Angular Website", percent: 33, color: "bg-red-500" },
//   { name: "Shopping App", percent: 25, color: "bg-blue-500" },
//   { name: "ERP System", percent: 12, color: "bg-yellow-400" },
//   { name: "React Admin Panel", percent: 10, color: "bg-purple-500" },
//   { name: "API Integration", percent: 7, color: "bg-green-500" },
//   { name: "Email Marketing", percent: 13, color: "bg-cyan-500" },
//    { name: "ERP System", percent: 12, color: "bg-yellow-400" },
//   { name: "React Admin Panel", percent: 10, color: "bg-purple-500" },
//   { name: "API Integration", percent: 7, color: "bg-green-500" },
//   { name: "Email Marketing", percent: 13, color: "bg-cyan-500" }, 
//   { name: "Angular Website", percent: 33, color: "bg-red-500" },
//   { name: "Shopping App", percent: 25, color: "bg-blue-500" },
//   { name: "ERP System", percent: 12, color: "bg-yellow-400" },
//   { name: "React Admin Panel", percent: 10, color: "bg-purple-500" },
//   { name: "API Integration", percent: 7, color: "bg-green-500" },
//   { name: "Email Marketing", percent: 13, color: "bg-cyan-500" },
// ];

// const ProjectHours = () => {
//   return (
//     <>
//       <h3 className="text-lg font-semibold text-gray-800 mb-4
//                      sticky top-0 bg-white z-10 pb-3">
//         Project Hours Details
//       </h3>

//       <div className="flex justify-between text-sm text-gray-600 mb-2">
//         <span><strong>3487</strong> Hours</span>
//         <span>Expected: 10000</span>
//       </div>

//       {/* Progress Bar */}
//       <div className="flex h-3 rounded-full overflow-hidden mb-6">
//         {projectHours.map((p, i) => (
//           <div
//             key={i}
//             className={p.color}
//             style={{ width: `${p.percent}%` }}
//           />
//         ))}
//       </div>

//       {/* List */}
//       <div className="space-y-4">
//         {projectHours.map((p, i) => (
//           <div key={i} className="flex justify-between items-center text-sm">
//             <div className="flex items-center gap-2">
//               <span className={`w-3 h-3 rounded-full ${p.color}`} />
//               <span className="text-gray-700">{p.name}</span>
//             </div>
//             <span className="font-medium">{p.percent}%</span>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };



// const projects = [
//   {
//     title: "Website Redesign",
//     company: "ABC Corporation",
//     desc: "Redesigning the corporate website with new branding and improved UX.",
//     progress: 75,
//     status: "On Track",
//     statusColor: "text-green-600 bg-green-100",
//     deadline: "2023-12-15",
//   },
//   {
//     title: "Mobile App Development",
//     company: "XYZ Inc.",
//     desc: "Developing a cross-platform mobile application for customer engagement.",
//     progress: 45,
//     status: "At Risk",
//     statusColor: "text-orange-600 bg-orange-100",
//     deadline: "2023-11-30",
//   },
//   {
//     title: "E-commerce Integration",
//     company: "Global Retail",
//     desc: "Integrating payment gateways and inventory management with the online store.",
//     progress: 90,
//     status: "Completed",
//     statusColor: "text-blue-600 bg-blue-100",
//     deadline: "2023-10-20",
//   },
//   {
//     title: "Website Redesign",
//     company: "ABC Corporation",
//     desc: "Redesigning the corporate website with new branding and improved UX.",
//     progress: 75,
//     status: "On Track",
//     statusColor: "text-green-600 bg-green-100",
//     deadline: "2023-12-15",
//   },
//   {
//     title: "Mobile App Development",
//     company: "XYZ Inc.",
//     desc: "Developing a cross-platform mobile application for customer engagement.",
//     progress: 45,
//     status: "At Risk",
//     statusColor: "text-orange-600 bg-orange-100",
//     deadline: "2023-11-30",
//   },
//   {
//     title: "E-commerce Integration",
//     company: "Global Retail",
//     desc: "Integrating payment gateways and inventory management with the online store.",
//     progress: 90,
//     status: "Completed",
//     statusColor: "text-blue-600 bg-blue-100",
//     deadline: "2023-10-20",
//   },
// ];

// const ProjectStatusOverview = () => {
//   return (
//     <>
//       <h3 className="text-lg font-semibold text-gray-800 mb-5 sticky top-0 bg-white z-10 pb-3">
//         Project Status Overview
//       </h3>

//       <div className="space-y-6">
//         {projects.map((p, i) => (
//           <div key={i} className="border-b last:border-none pb-6">
//             <div className="flex justify-between items-start gap-4">
//               <div>
//                 <h4 className="font-semibold text-gray-800">{p.title}</h4>
//                 <p className="text-sm text-gray-500">{p.company}</p>
//               </div>

//               <span className={`px-3 py-1 rounded-full text-xs font-medium ${p.statusColor}`}>
//                 {p.status}
//               </span>
//             </div>

//             <p className="text-sm text-gray-600 mt-2">{p.desc}</p>

//             <div className="flex justify-between text-sm text-gray-500 mt-3">
//               <span>Progress: {p.progress}%</span>
//               <span>Deadline: {p.deadline}</span>
//             </div>

//             <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
//               <div
//                 className="bg-blue-600 h-2 rounded-full"
//                 style={{ width: `${p.progress}%` }}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };


// const feedbacks = [
//   {
//     title: "Website Redesign",
//     date: "2023-06-15",
//     rating: 4,
//     text: "The redesign looks great! Very responsive and modern.",
//     status: "Reviewed",
//     statusColor: "bg-green-100 text-green-700",
//   },
//   {
//     title: "Mobile App Development",
//     date: "2023-07-22",
//     rating: 5,
//     text: "Excellent work on the mobile app. The UI is intuitive and performance is great.",
//     status: "Reviewed",
//     statusColor: "bg-green-100 text-green-700",
//   },
//   {
//     title: "E-commerce Platform",
//     date: "2023-08-10",
//     rating: 3,
//     text: "The platform works well but there are some minor issues with checkout.",
//     status: "Pending",
//     statusColor: "bg-yellow-100 text-yellow-700",
//   },
//   {
//     title: "Website Redesign",
//     date: "2023-06-15",
//     rating: 4,
//     text: "The redesign looks great! Very responsive and modern.",
//     status: "Reviewed",
//     statusColor: "bg-green-100 text-green-700",
//   },
//   {
//     title: "Mobile App Development",
//     date: "2023-07-22",
//     rating: 5,
//     text: "Excellent work on the mobile app. The UI is intuitive and performance is great.",
//     status: "Reviewed",
//     statusColor: "bg-green-100 text-green-700",
//   },
//   {
//     title: "E-commerce Platform",
//     date: "2023-08-10",
//     rating: 3,
//     text: "The platform works well but there are some minor issues with checkout.",
//     status: "Pending",
//     statusColor: "bg-yellow-100 text-yellow-700",
//   },

// ];

// const PreviousFeedback = () => {
//   return (
//     <>
//       <h3 className="text-lg font-semibold text-gray-800 mb-5 sticky top-0 bg-white z-10 pb-3">
//         Previous Feedback
//       </h3>

//       <div className="space-y-6">
//         {feedbacks.map((f, i) => (
//           <div key={i} className="border-b last:border-none pb-5">
//             <div className="flex justify-between items-center">
//               <h4 className="font-medium text-blue-600">{f.title}</h4>
//               <span className="text-xs text-gray-500">{f.date}</span>
//             </div>

//             <div className="flex mt-1">
//               {[1, 2, 3, 4, 5].map((s) => (
//                 <span key={s} className="text-yellow-400">
//                   {s <= f.rating ? "★" : "☆"}
//                 </span>
//               ))}
//             </div>

//             <p className="text-sm text-gray-600 mt-2">{f.text}</p>

//             <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium ${f.statusColor}`}>
//               {f.status}
//             </span>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// const documents = [
//   { name: "Project Proposal", type: "PDF", size: "2.4 MB", date: "Dec 15, 2023" },
//   { name: "Contract Agreement", type: "DOCX", size: "1.8 MB", date: "Dec 10, 2023" },
//   { name: "Design Mockups", type: "ZIP", size: "15.2 MB", date: "Nov 28, 2023" },
//   { name: "Meeting Minutes", type: "PDF", size: "0.8 MB", date: "Nov 20, 2023" },
//   { name: "Invoice #INV-2023-11", type: "PDF", size: "1.2 MB", date: "Nov 15, 2023" },
//   { name: "Technical Specifications", type: "DOCX", size: "3.1 MB", date: "Dec 18, 2023" },
//   { name: "Project Proposal", type: "PDF", size: "2.4 MB", date: "Dec 15, 2023" },
//   { name: "Contract Agreement", type: "DOCX", size: "1.8 MB", date: "Dec 10, 2023" },
//   { name: "Design Mockups", type: "ZIP", size: "15.2 MB", date: "Nov 28, 2023" },
//   { name: "Meeting Minutes", type: "PDF", size: "0.8 MB", date: "Nov 20, 2023" },
//   { name: "Invoice #INV-2023-11", type: "PDF", size: "1.2 MB", date: "Nov 15, 2023" },
//   { name: "Technical Specifications", type: "DOCX", size: "3.1 MB", date: "Dec 18, 2023" },
// ];

// const RecentDocuments = () => {
//   return (
//     <div className="p-5">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-4 sticky top-0 bg-white z-10 pb-3">
//         <h3 className="text-lg font-semibold text-gray-800">Recent Documents</h3>
//         <Upload size={18} className="text-gray-500 cursor-pointer" />
//       </div>

//       {/* List */}
//       <div className="space-y-4">
//         {documents.map((doc, i) => (
//           <div key={i} className="flex justify-between items-center border-b pb-3">
//             <div className="flex items-start gap-3">
//               <FileText className="text-blue-600 mt-1" size={20} />
//               <div>
//                 <p className="font-medium text-gray-800">{doc.name}</p>
//                 <p className="text-xs text-gray-500">
//                   {doc.type} • {doc.size} • {doc.date}
//                 </p>
//               </div>
//             </div>

//             <div className="flex gap-3 text-gray-500">
//               <Eye size={18} className="cursor-pointer hover:text-blue-600" />
//               <Download size={18} className="cursor-pointer hover:text-green-600" />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const payments = [
//   { id: "INV-2023-001", date: "2023-09-15", amount: "$5,000.00", project: "Website Redesign", status: "Paid" },
//   { id: "INV-2023-002", date: "2023-09-30", amount: "$7,500.00", project: "Mobile App Development", status: "Paid" },
//   { id: "INV-2023-003", date: "2023-10-15", amount: "$3,500.00", project: "E-commerce Integration", status: "Pending" },
//   { id: "INV-2023-004", date: "2023-10-30", amount: "$6,000.00", project: "CRM Implementation", status: "Pending" },
//   { id: "INV-2023-005", date: "2023-08-30", amount: "$4,500.00", project: "Marketing Campaign", status: "Overdue" },
//   { id: "INV-2023-006", date: "2023-11-15", amount: "$8,200.00", project: "Cloud Migration", status: "Paid" },
//   { id: "INV-2023-001", date: "2023-09-15", amount: "$5,000.00", project: "Website Redesign", status: "Paid" },
//   { id: "INV-2023-002", date: "2023-09-30", amount: "$7,500.00", project: "Mobile App Development", status: "Paid" },
//   { id: "INV-2023-003", date: "2023-10-15", amount: "$3,500.00", project: "E-commerce Integration", status: "Pending" },
//   { id: "INV-2023-004", date: "2023-10-30", amount: "$6,000.00", project: "CRM Implementation", status: "Pending" },
//   { id: "INV-2023-005", date: "2023-08-30", amount: "$4,500.00", project: "Marketing Campaign", status: "Overdue" },
//   { id: "INV-2023-006", date: "2023-11-15", amount: "$8,200.00", project: "Cloud Migration", status: "Paid" },
// ];

// const statusUI = {
//   Paid: { icon: CheckCircle, color: "text-green-600" },
//   Pending: { icon: Clock, color: "text-orange-500" },
//   Overdue: { icon: AlertCircle, color: "text-red-600" },
// };

// const PaymentHistory = () => {
//   return (
//     <div className="p-5">
//       {/* Header */}
//       <h3 className="text-lg font-semibold text-gray-800 mb-4 sticky top-0 bg-white z-10 pb-3">
//         Payment History
//       </h3>

//       {/* Scrollable Table */}
//       <div className="overflow-x-auto">
//         <table className="w-full text-sm">
//           <thead className="border-b text-gray-500">
//             <tr>
//               <th className="text-left py-3">Invoice</th>
//               <th className="text-left py-3">Date</th>
//               <th className="text-left py-3">Amount</th>
//               <th className="text-left py-3 hidden md:table-cell">Project</th>
//               <th className="text-left py-3">Status</th>
//             </tr>
//           </thead>

//           <tbody>
//             {payments.map((p, i) => {
//               const Icon = statusUI[p.status].icon;
//               return (
//                 <tr key={i} className="border-b last:border-none hover:bg-gray-50">
//                   <td className="py-3 font-medium">{p.id}</td>
//                   <td className="py-3">{p.date}</td>
//                   <td className="py-3 font-semibold">{p.amount}</td>
//                   <td className="py-3 hidden md:table-cell">{p.project}</td>
//                   <td className="py-3">
//                     <div className={`flex items-center gap-1 ${statusUI[p.status].color}`}>
//                       <Icon size={16} />
//                       <span className="font-medium">{p.status}</span>
//                     </div>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };


import React from "react";
import { ClipboardList, Clock, Users, CreditCard, TrendingUp, TrendingDown } from "lucide-react";
import { CheckCircle, AlertCircle } from "lucide-react";
import { FileText, Eye, Download, Upload } from "lucide-react";
import { Filter } from 'lucide-react';

/* ================= CARD DATA (JSON) ================= */

const dashboardCards = [
  {
    id: 1,
    title: "Running Projects",
    value: "70",
    icon: ClipboardList,
    iconColor: "text-orange-500",
    bgGradient: "from-orange-50 to-orange-100",
    trend: "up",
    trendText: "10% Higher Than Last Month",
  },
  {
    id: 2,
    title: "Active Tickets",
    value: "650",
    icon: Clock,
    iconColor: "text-blue-500",
    bgGradient: "from-blue-50 to-blue-100",
    trend: "down",
    trendText: "07% Less Than Last Month",
  },
  {
    id: 3,
    title: "Assigned Employee",
    value: "885",
    icon: Users,
    iconColor: "text-green-500",
    bgGradient: "from-green-50 to-green-100",
    trend: "up",
    trendText: "12% Higher Than Last Month",
  },
  {
    id: 4,
    title: "Total Payments",
    value: "$9,456",
    icon: CreditCard,
    iconColor: "text-indigo-500",
    bgGradient: "from-indigo-50 to-indigo-100",
    trend: "down",
    trendText: "22% Less Than Last Month",
  },
];

const ClientDashboard = () => {
  return (
    <div className="p-3 sm:p-4 md:p-6 lg:p-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen">

      {/* Welcome Card */}
      <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-4 sm:p-6 md:p-8 flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-6 md:mb-8 border border-blue-100 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-30 -z-10"></div>
        <img
          src="https://illustrations.popsy.co/gray/welcome.svg"
          alt="Welcome"
          className="w-full md:w-1/3 max-w-[200px] md:max-w-xs drop-shadow-lg"
        />

        <div className="text-center md:text-left flex-1">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Welcome back <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Cara Stevens!</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            We would like to take this opportunity to welcome you to our
            practice and to thank you for choosing our company.
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        {dashboardCards.map((card) => (
          <StatCard key={card.id} data={card} />
        ))}
      </div>

      {/* ================= LOWER SECTION ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">

        {/* Invoices – 2/3 */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
          <InvoicesTable />
        </div>

        {/* Project Hours – 1/3 */}
        <div className="lg:col-span-1 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
          <ProjectHours />
        </div>

      </div>


      {/* ================= PROJECT & FEEDBACK SECTION ================= */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">

        {/* Project Status Overview */}
        <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
          <ProjectStatusOverview />
        </div>

        {/* Previous Feedback */}
        <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
          <PreviousFeedback />
        </div>

      </div>


      {/* ================= DOCUMENTS & PAYMENTS ================= */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6 mt-6">

        {/* Recent Documents – 1/3 */}
        <div
          className="bg-white rounded-2xl shadow-xl hover:shadow-2xl
               transition-all duration-300 border border-gray-100
               max-h-[420px] md:max-h-[520px] xl:max-h-[600px]
               overflow-y-auto"
        >
          <RecentDocuments />
        </div>

        {/* Payment History – 2/3 */}
        <div
          className="xl:col-span-2 bg-white rounded-2xl shadow-xl hover:shadow-2xl
               transition-all duration-300 border border-gray-100
               max-h-[420px] md:max-h-[520px] xl:max-h-[600px]
               overflow-y-auto"
        >
          <PaymentHistory />
        </div>

      </div>

    </div>
  );
};

export default ClientDashboard;

/* ================= Reusable Card ================= */

const StatCard = ({ data }) => {
  const Icon = data.icon;

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-5 md:p-6 flex flex-col gap-4 border border-gray-100 hover:-translate-y-1 cursor-pointer group relative overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${data.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

      <div className="flex items-center justify-between relative z-10">
        <div className="flex-1">
          <h4 className="text-xs sm:text-sm text-gray-500 font-semibold uppercase tracking-wide mb-2">{data.title}</h4>
          <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800">
            {data.value}
          </p>
        </div>

        <div className={`bg-gradient-to-br ${data.bgGradient} p-3 md:p-4 rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
          <Icon size={28} className={data.iconColor} strokeWidth={2.5} />
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs sm:text-sm relative z-10">
        {data.trend === "up" ? (
          <div className="flex items-center gap-1.5 text-green-600 bg-green-50 px-3 py-1.5 rounded-lg font-medium border border-green-200">
            <TrendingUp size={14} strokeWidth={2.5} />
            <span>{data.trendText}</span>
          </div>
        ) : (
          <div className="flex items-center gap-1.5 text-orange-600 bg-orange-50 px-3 py-1.5 rounded-lg font-medium border border-orange-200">
            <TrendingDown size={14} strokeWidth={2.5} />
            <span>{data.trendText}</span>
          </div>
        )}
      </div>
    </div>
  );
};


const invoices = [
  {
    id: "#IN7865",
    name: "John Doe",
    date: "12/05/2024",
    status: "Paid",
    amount: "$500",
  },
  {
    id: "#IN2301",
    name: "Sarah Smith",
    date: "03/31/2024",
    status: "Not Paid",
    amount: "$372",
  },
  {
    id: "#IN7239",
    name: "Airi Satou",
    date: "04/14/2024",
    status: "Partially Paid",
    amount: "$1038",
  },
  {
    id: "#IN7865",
    name: "John Doe",
    date: "12/05/2024",
    status: "Paid",
    amount: "$500",
  },
  {
    id: "#IN2301",
    name: "Sarah Smith",
    date: "03/31/2024",
    status: "Not Paid",
    amount: "$372",
  },
  {
    id: "#IN7239",
    name: "Airi Satou",
    date: "04/14/2024",
    status: "Partially Paid",
    amount: "$1038",
  }, {
    id: "#IN7865",
    name: "John Doe",
    date: "12/05/2024",
    status: "Paid",
    amount: "$500",
  },
  {
    id: "#IN2301",
    name: "Sarah Smith",
    date: "03/31/2024",
    status: "Not Paid",
    amount: "$372",
  },
  {
    id: "#IN7239",
    name: "Airi Satou",
    date: "04/14/2024",
    status: "Partially Paid",
    amount: "$1038",
  },
  {
    id: "#IN7865",
    name: "John Doe",
    date: "12/05/2024",
    status: "Paid",
    amount: "$500",
  },
  {
    id: "#IN2301",
    name: "Sarah Smith",
    date: "03/31/2024",
    status: "Not Paid",
    amount: "$372",
  },
  {
    id: "#IN7239",
    name: "Airi Satou",
    date: "04/14/2024",
    status: "Partially Paid",
    amount: "$1038",
  }, {
    id: "#IN7865",
    name: "John Doe",
    date: "12/05/2024",
    status: "Paid",
    amount: "$500",
  },
  {
    id: "#IN2301",
    name: "Sarah Smith",
    date: "03/31/2024",
    status: "Not Paid",
    amount: "$372",
  },
  {
    id: "#IN7239",
    name: "Airi Satou",
    date: "04/14/2024",
    status: "Partially Paid",
    amount: "$1038",
  },
];

const statusStyles = {
  Paid: "bg-emerald-100 text-emerald-700 border-emerald-200",
  "Not Paid": "bg-rose-100 text-rose-700 border-rose-200",
  "Partially Paid": "bg-amber-100 text-amber-700 border-amber-200",
};

const InvoicesTable = () => {
  return (
    <div className="h-full max-h-[420px] md:max-h-[520px] lg:max-h-[600px] flex flex-col">
      {/* Sticky Header */}
      <div className="flex justify-between items-center p-5 pb-4 border-b border-gray-200 bg-gradient-to-r from-white to-blue-50">
        <h3 className="text-lg md:text-xl font-bold text-gray-800">Invoices</h3>
        <button className="text-blue-600 text-xs sm:text-sm font-bold hover:text-blue-700 hover:underline transition-all px-3 py-1.5 rounded-lg hover:bg-blue-50">
          View All →
        </button>
      </div>

      <div className="overflow-y-auto flex-1 p-5">
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm">
            <thead className="text-gray-600 bg-gray-50 sticky top-0">
              <tr>
                <th className="text-left py-3 px-2 font-bold">Invoice No</th>
                <th className="text-left py-3 px-2 font-bold">Generated By</th>
                <th className="text-left py-3 px-2 font-bold">Due Date</th>
                <th className="text-left py-3 px-2 font-bold">Status</th>
                <th className="text-left py-3 px-2 font-bold">Total</th>
              </tr>
            </thead>

            <tbody>
              {invoices.map((inv, i) => (
                <tr key={i} className="border-b border-gray-100 hover:bg-blue-50 transition-colors cursor-pointer">
                  <td className="py-3 px-2 font-bold text-blue-600">{inv.id}</td>
                  <td className="py-3 px-2 text-gray-700 font-medium">{inv.name}</td>
                  <td className="py-3 px-2 text-gray-600">{inv.date}</td>
                  <td className="py-3 px-2">
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-bold border ${statusStyles[inv.status]}`}>
                      {inv.status}
                    </span>
                  </td>
                  <td className="py-3 px-2 font-extrabold text-gray-800">{inv.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};


const projectHours = [
  { name: "Angular Website", percent: 33, color: "bg-red-500" },
  { name: "Shopping App", percent: 25, color: "bg-blue-500" },
  { name: "ERP System", percent: 12, color: "bg-yellow-400" },
  { name: "React Admin Panel", percent: 10, color: "bg-purple-500" },
  { name: "API Integration", percent: 7, color: "bg-green-500" },
  { name: "Email Marketing", percent: 13, color: "bg-cyan-500" },
  { name: "Angular Website", percent: 33, color: "bg-red-500" },
  { name: "Shopping App", percent: 25, color: "bg-blue-500" },
  { name: "ERP System", percent: 12, color: "bg-yellow-400" },
  { name: "React Admin Panel", percent: 10, color: "bg-purple-500" },
  { name: "API Integration", percent: 7, color: "bg-green-500" },
  { name: "Email Marketing", percent: 13, color: "bg-cyan-500" },
  { name: "Angular Website", percent: 33, color: "bg-red-500" },
  { name: "Shopping App", percent: 25, color: "bg-blue-500" },
  { name: "ERP System", percent: 12, color: "bg-yellow-400" },
  { name: "React Admin Panel", percent: 10, color: "bg-purple-500" },
  { name: "API Integration", percent: 7, color: "bg-green-500" },
  { name: "Email Marketing", percent: 13, color: "bg-cyan-500" },
  { name: "Angular Website", percent: 33, color: "bg-red-500" },
  { name: "Shopping App", percent: 25, color: "bg-blue-500" },
  { name: "ERP System", percent: 12, color: "bg-yellow-400" },
  { name: "React Admin Panel", percent: 10, color: "bg-purple-500" },
  { name: "API Integration", percent: 7, color: "bg-green-500" },
  { name: "Email Marketing", percent: 13, color: "bg-cyan-500" },
  { name: "ERP System", percent: 12, color: "bg-yellow-400" },
  { name: "React Admin Panel", percent: 10, color: "bg-purple-500" },
  { name: "API Integration", percent: 7, color: "bg-green-500" },
  { name: "Email Marketing", percent: 13, color: "bg-cyan-500" },
  { name: "Angular Website", percent: 33, color: "bg-red-500" },
  { name: "Shopping App", percent: 25, color: "bg-blue-500" },
  { name: "ERP System", percent: 12, color: "bg-yellow-400" },
  { name: "React Admin Panel", percent: 10, color: "bg-purple-500" },
  { name: "API Integration", percent: 7, color: "bg-green-500" },
  { name: "Email Marketing", percent: 13, color: "bg-cyan-500" },
];

const ProjectHours = () => {
  return (
    <div className="h-full max-h-[420px] md:max-h-[520px] lg:max-h-[600px] flex flex-col">
      <div className="p-5 pb-4 border-b border-gray-200 bg-gradient-to-r from-white to-purple-50">
        <h3 className="text-lg md:text-xl font-bold text-gray-800">
          Project Hours Details
        </h3>
      </div>

      <div className="p-5 flex flex-col gap-4 overflow-y-auto flex-1">
        <div className="flex justify-between text-xs sm:text-sm text-gray-600">
          <span><strong className="text-gray-800 text-lg">3487</strong> Hours</span>
          <span className="text-gray-500">Expected: <strong className="text-gray-800">10000</strong></span>
        </div>

        {/* Progress Bar */}
        <div className="flex h-4 rounded-full overflow-hidden shadow-md border-2 border-gray-200">
          {projectHours.slice(0, 6).map((p, i) => (
            <div
              key={i}
              className={`${p.color} transition-all duration-300 hover:opacity-80`}
              style={{ width: `${p.percent}%` }}
              title={`${p.name}: ${p.percent}%`}
            />
          ))}
        </div>

        {/* List */}
        <div className="space-y-2">
          {projectHours.map((p, i) => (
            <div key={i} className="flex justify-between items-center text-xs sm:text-sm p-3 rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 transition-all cursor-pointer border border-transparent hover:border-blue-200 group">
              <div className="flex items-center gap-3">
                <span className={`w-4 h-4 rounded-full ${p.color} shadow-md group-hover:scale-110 transition-transform`} />
                <span className="text-gray-700 font-semibold">{p.name}</span>
              </div>
              <span className="font-extrabold text-gray-800 bg-gray-100 px-3 py-1.5 rounded-lg group-hover:bg-blue-100 transition-colors">{p.percent}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const projects = [
  {
    title: "Website Redesign",
    company: "ABC Corporation",
    desc: "Redesigning the corporate website with new branding and improved UX.",
    progress: 75,
    status: "On Track",
    statusColor: "text-emerald-700 bg-emerald-100 border-emerald-200",
    deadline: "2023-12-15",
  },
  {
    title: "Mobile App Development",
    company: "XYZ Inc.",
    desc: "Developing a cross-platform mobile application for customer engagement.",
    progress: 45,
    status: "At Risk",
    statusColor: "text-amber-700 bg-amber-100 border-amber-200",
    deadline: "2023-11-30",
  },
  {
    title: "E-commerce Integration",
    company: "Global Retail",
    desc: "Integrating payment gateways and inventory management with the online store.",
    progress: 90,
    status: "Completed",
    statusColor: "text-blue-700 bg-blue-100 border-blue-200",
    deadline: "2023-10-20",
  },
  {
    title: "Website Redesign",
    company: "ABC Corporation",
    desc: "Redesigning the corporate website with new branding and improved UX.",
    progress: 75,
    status: "On Track",
    statusColor: "text-emerald-700 bg-emerald-100 border-emerald-200",
    deadline: "2023-12-15",
  },
  {
    title: "Mobile App Development",
    company: "XYZ Inc.",
    desc: "Developing a cross-platform mobile application for customer engagement.",
    progress: 45,
    status: "At Risk",
    statusColor: "text-amber-700 bg-amber-100 border-amber-200",
    deadline: "2023-11-30",
  },
  {
    title: "E-commerce Integration",
    company: "Global Retail",
    desc: "Integrating payment gateways and inventory management with the online store.",
    progress: 90,
    status: "Completed",
    statusColor: "text-blue-700 bg-blue-100 border-blue-200",
    deadline: "2023-10-20",
  },
];

const ProjectStatusOverview = () => {
  return (
    <div className="h-full max-h-[420px] md:max-h-[520px] lg:max-h-[600px] flex flex-col">
      <div className="p-5 pb-4 border-b border-gray-200 bg-gradient-to-r from-white to-green-50">
        <h3 className="text-lg md:text-xl font-bold text-gray-800">
          Project Status Overview
        </h3>
      </div>

      <div className="p-5 space-y-4 overflow-y-auto flex-1">
        {projects.map((p, i) => (
          <div key={i} className="p-4 border-2 border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300 hover:border-blue-300 bg-gradient-to-br from-white to-gray-50 cursor-pointer group">
            <div className="flex justify-between items-start gap-4 mb-3">
              <div>
                <h4 className="font-bold text-gray-800 text-sm sm:text-base group-hover:text-blue-600 transition-colors">{p.title}</h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-1 font-medium">{p.company}</p>
              </div>

              <span className={`px-3 py-1.5 rounded-xl text-xs font-bold border-2 whitespace-nowrap ${p.statusColor}`}>
                {p.status}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 mb-3 leading-relaxed">{p.desc}</p>

            <div className="flex justify-between text-xs text-gray-500 mb-2 font-semibold">
              <span>Progress: <span className="text-blue-600 font-extrabold text-sm">{p.progress}%</span></span>
              <span>Deadline: <span className="text-gray-700 font-bold">{p.deadline}</span></span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner border border-gray-300">
              <div
                className="bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 h-3 rounded-full transition-all duration-500 shadow-md relative overflow-hidden"
                style={{ width: `${p.progress}%` }}
              >
                <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


const feedbacks = [
  {
    title: "Website Redesign",
    date: "2023-06-15",
    rating: 4,
    text: "The redesign looks great! Very responsive and modern.",
    status: "Reviewed",
    statusColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
  },
  {
    title: "Mobile App Development",
    date: "2023-07-22",
    rating: 5,
    text: "Excellent work on the mobile app. The UI is intuitive and performance is great.",
    status: "Reviewed",
    statusColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
  },
  {
    title: "E-commerce Platform",
    date: "2023-08-10",
    rating: 3,
    text: "The platform works well but there are some minor issues with checkout.",
    status: "Pending",
    statusColor: "bg-amber-100 text-amber-700 border-amber-200",
  },
  {
    title: "Website Redesign",
    date: "2023-06-15",
    rating: 4,
    text: "The redesign looks great! Very responsive and modern.",
    status: "Reviewed",
    statusColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
  },
  {
    title: "Mobile App Development",
    date: "2023-07-22",
    rating: 5,
    text: "Excellent work on the mobile app. The UI is intuitive and performance is great.",
    status: "Reviewed",
    statusColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
  },
  {
    title: "E-commerce Platform",
    date: "2023-08-10",
    rating: 3,
    text: "The platform works well but there are some minor issues with checkout.",
    status: "Pending",
    statusColor: "bg-amber-100 text-amber-700 border-amber-200",
  },

];

const PreviousFeedback = () => {
  return (
    <div className="h-full max-h-[420px] md:max-h-[520px] lg:max-h-[600px] flex flex-col">
      <div className="p-5 pb-4 border-b border-gray-200 bg-gradient-to-r from-white to-yellow-50">
        <h3 className="text-lg md:text-xl font-bold text-gray-800">
          Previous Feedback
        </h3>
      </div>

      <div className="p-5 space-y-4 overflow-y-auto flex-1">
        {feedbacks.map((f, i) => (
          <div key={i} className="p-4 border-2 border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300 hover:border-yellow-300 bg-gradient-to-br from-white to-gray-50 cursor-pointer group">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold text-blue-600 text-sm sm:text-base hover:underline group-hover:text-blue-700">{f.title}</h4>
              <span className="text-xs text-gray-500 whitespace-nowrap ml-2 font-medium">{f.date}</span>
            </div>

            <div className="flex mb-3 gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className={`text-xl ${s <= f.rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                  ★
                </span>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-gray-600 mb-3 leading-relaxed">{f.text}</p>

            <span className={`inline-block px-3 py-1.5 rounded-xl text-xs font-bold border-2 ${f.statusColor}`}>
              {f.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const documents = [
  { name: "Project Proposal", type: "PDF", size: "2.4 MB", date: "Dec 15, 2023" },
  { name: "Contract Agreement", type: "DOCX", size: "1.8 MB", date: "Dec 10, 2023" },
  { name: "Design Mockups", type: "ZIP", size: "15.2 MB", date: "Nov 28, 2023" },
  { name: "Meeting Minutes", type: "PDF", size: "0.8 MB", date: "Nov 20, 2023" },
  { name: "Invoice #INV-2023-11", type: "PDF", size: "1.2 MB", date: "Nov 15, 2023" },
  { name: "Technical Specifications", type: "DOCX", size: "3.1 MB", date: "Dec 18, 2023" },
  { name: "Project Proposal", type: "PDF", size: "2.4 MB", date: "Dec 15, 2023" },
  { name: "Contract Agreement", type: "DOCX", size: "1.8 MB", date: "Dec 10, 2023" },
  { name: "Design Mockups", type: "ZIP", size: "15.2 MB", date: "Nov 28, 2023" },
  { name: "Meeting Minutes", type: "PDF", size: "0.8 MB", date: "Nov 20, 2023" },
  { name: "Invoice #INV-2023-11", type: "PDF", size: "1.2 MB", date: "Nov 15, 2023" },
  { name: "Technical Specifications", type: "DOCX", size: "3.1 MB", date: "Dec 18, 2023" },
];

const payments = [
  { id: "INV-2023-001", date: "2023-09-15", amount: "$5,000.00", project: "Website Redesign", status: "Paid" },
  { id: "INV-2023-002", date: "2023-09-30", amount: "$7,500.00", project: "Mobile App Development", status: "Paid" },
  { id: "INV-2023-003", date: "2023-10-15", amount: "$3,500.00", project: "E-commerce Integration", status: "Pending" },
  { id: "INV-2023-004", date: "2023-10-30", amount: "$6,000.00", project: "CRM Implementation", status: "Pending" },
  { id: "INV-2023-005", date: "2023-08-30", amount: "$4,500.00", project: "Marketing Campaign", status: "Overdue" },
  { id: "INV-2023-006", date: "2023-11-15", amount: "$8,200.00", project: "Cloud Migration", status: "Paid" },
  { id: "INV-2023-001", date: "2023-09-15", amount: "$5,000.00", project: "Website Redesign", status: "Paid" },
  { id: "INV-2023-002", date: "2023-09-30", amount: "$7,500.00", project: "Mobile App Development", status: "Paid" },
  { id: "INV-2023-003", date: "2023-10-15", amount: "$3,500.00", project: "E-commerce Integration", status: "Pending" },
  { id: "INV-2023-004", date: "2023-10-30", amount: "$6,000.00", project: "CRM Implementation", status: "Pending" },
  { id: "INV-2023-005", date: "2023-08-30", amount: "$4,500.00", project: "Marketing Campaign", status: "Overdue" },
  { id: "INV-2023-006", date: "2023-11-15", amount: "$8,200.00", project: "Cloud Migration", status: "Paid" },
  { id: "INV-2023-003", date: "2023-10-15", amount: "$3,500.00", project: "E-commerce Integration", status: "Pending" },
  { id: "INV-2023-004", date: "2023-10-30", amount: "$6,000.00", project: "CRM Implementation", status: "Pending" },
  { id: "INV-2023-005", date: "2023-08-30", amount: "$4,500.00", project: "Marketing Campaign", status: "Overdue" },
  { id: "INV-2023-006", date: "2023-11-15", amount: "$8,200.00", project: "Cloud Migration", status: "Paid" },
];

const statusUI = {
  Paid: { icon: CheckCircle, color: "text-green-600", bg: "bg-green-50" },
  Pending: { icon: Clock, color: "text-orange-500", bg: "bg-orange-50" },
  Overdue: { icon: AlertCircle, color: "text-red-600", bg: "bg-red-50" },
};

const RecentDocuments = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-5 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Recent Documents</h3>
            <p className="text-sm text-gray-600 mt-1">Access your latest files</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl transition-all duration-200 hover:scale-105 shadow-md">
            <Upload size={20} />
          </button>
        </div>
      </div>

      <div className="p-6">
        {/* <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search documents..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div> */}

        <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
          {documents.map((doc, i) => (
            <div key={i} className="group bg-gray-50 hover:bg-blue-50 rounded-xl p-4 transition-all duration-200 border border-transparent hover:border-blue-200 hover:shadow-md">
              <div className="flex justify-between items-center gap-4">
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <div className="bg-blue-100 p-2.5 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <FileText className="text-blue-600" size={22} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 truncate">{doc.name}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="bg-gray-200 px-2 py-0.5 rounded">{doc.type}</span>
                        <span>•</span>
                        <span>{doc.size}</span>
                        <span>•</span>
                        <span>{doc.date}</span>
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-100 rounded-lg transition-all">
                    <Eye size={18} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-100 rounded-lg transition-all">
                    <Download size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PaymentHistory = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 px-6 py-5 border-b border-gray-100">
        <div className="flex justify-between items-center flex-wrap gap-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Payment History</h3>
            <p className="text-sm text-gray-600 mt-1">Track all your transactions</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all">
            <Filter size={16} />
            <span className="text-sm font-medium">Filter</span>
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 rounded-lg">
              <tr>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 rounded-l-lg">Invoice</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700">Date</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700">Amount</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 hidden md:table-cell">Project</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 rounded-r-lg">Status</th>
              </tr>
            </thead>

            <tbody>
              {payments.map((p, i) => {
                const Icon = statusUI[p.status].icon;
                return (
                  <tr key={i} className="border-b border-gray-100 last:border-none hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 font-semibold text-gray-900">{p.id}</td>
                    <td className="py-4 px-4 text-gray-600">{p.date}</td>
                    <td className="py-4 px-4 font-bold text-gray-900">{p.amount}</td>
                    <td className="py-4 px-4 text-gray-600 hidden md:table-cell">{p.project}</td>
                    <td className="py-4 px-4">
                      <div className={`inline-flex items-center gap-1.5 ${statusUI[p.status].bg} ${statusUI[p.status].color} px-3 py-1.5 rounded-lg font-medium`}>
                        <Icon size={16} />
                        <span>{p.status}</span>
                      </div>
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

