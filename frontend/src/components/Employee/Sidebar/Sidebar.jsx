
// import {LayoutDashboard,FileText,CheckSquare,Settings,MessageSquare,X} from "lucide-react";
// import { Link, useLocation } from "react-router-dom";
// import ttsimg from "../../../assets/Sidebar-Image/ttsLogo.png";
// import employee from "../../../assets/Sidebar-Image/employee.jpg";
// import { useState } from "react";

// const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
//   const menuItems = [
//     { name: "Dashboard", icon: LayoutDashboard, to: "/employee/dashboard" },
//     { name: "My Leaves", icon: FileText, to: "/employee/myLeaves" },
//     { name: "My Tasks", icon: CheckSquare, to: "/employee/myTasks" },
//     { name: "Tasks", icon: CheckSquare, to: "/employee/ProjectManagerTasks" },
//     { name: "Settings", icon: Settings, to: "/employee/settings" },
//     // { name: "Acounts", icon: MessageSquare, to: "/employee/accounts" },
//   ];

//   const [openAccounts, setOpentAccounts] = useState(false);
//   const location = useLocation()

//   return (
//     <>
//       {/* Overlay for all screens */}
//       {isSidebarOpen && (
//         <div
//           onClick={() => setIsSidebarOpen(false)}
//           className="fixed inset-0 bg-black/30 z-40"
//         />
//       )}

//       <aside
//         className={`
//           fixed top-0 left-0 z-50 h-screen w-64 bg-white shadow-lg
//           transform transition-transform duration-300 ease-in-out
//           ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
//         `}
//       >
//         {/* Header */}
//         <div className="flex items-center justify-between">
//           <img src={ttsimg} alt="Logo" className="h-20" />
//           <button className="visible sm:hidden" onClick={() => setIsSidebarOpen(false)}>
//             <X />
//           </button>
//         </div>

//         {/* Profile */}
//         <div className="p-6 text-center">
//           <img
//             src={employee}
//             alt="Employee"
//             className="w-20 h-20 rounded-xl mx-auto"
//           />
//           <h4 className="mt-3 font-semibold">Ashton Cox</h4>
//           <p className="text-sm text-gray-500">Employee</p>
//         </div>

//         {/* Menu */}
//         <div className="px-4 space-y-2">
//           {menuItems.map((item, index) => (
//             <Link
//               key={index}
//               to={item.to}
//               className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-blue-50"
//             >
//               <item.icon size={18} />
//               <span>{item.name}</span>
//             </Link>
//           ))}
//         </div>
//       </aside>
//     </>
//   );
// };

// export default Sidebar;




import { useState } from "react";
import {
  LayoutDashboard,
  FileText,
  CheckSquare,
  Settings,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  X,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import ttsimg from "../../../assets/Sidebar-Image/ttsLogo.png";
import employee from "../../../assets/Sidebar-Image/employee.jpg";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [openAccounts, setOpenAccounts] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, to: "/employee/dashboard" },
    { name: "My Leaves", icon: FileText, to: "/employee/myLeaves" },
    { name: "My Tasks", icon: CheckSquare, to: "/employee/myTasks" },
    { name: "Tasks", icon: CheckSquare, to: "/employee/ProjectManagerTasks" },
    { name: "Settings", icon: Settings, to: "/employee/settings" },
  ];

  return (
    <>
      {/* Overlay */}
      {/* {isSidebarOpen && (
        <div
          // onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 z-40"
        />
      )} */}

      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-64 bg-white shadow-lg
        transform transition-transform duration-300
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4">
          <img src={ttsimg} alt="Logo" className="h-20" />
          <button
            className="sm:hidden"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X />
          </button>
        </div>

        {/* Profile */}
        <div className="p-6 text-center">
          <img
            src={employee}
            alt="Employee"
            className="w-20 h-20 rounded-xl mx-auto"
          />
          <h4 className="mt-3 font-semibold">Ashton Cox</h4>
          <p className="text-sm text-gray-500">Employee</p>
        </div>

        {/* Menu */}
        <div className="px-4 space-y-1">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg
              ${
                location.pathname === item.to
                  ? "bg-blue-100 text-blue-600"
                  : "hover:bg-blue-50"
              }`}
            >
              <item.icon size={18} />
              {item.name}
            </Link>
          ))}

          {/* Accounts Section */}
          <button
            onClick={() => setOpenAccounts(!openAccounts)}
            className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-blue-50"
          >
            <div className="flex items-center gap-3">
              <MessageSquare size={18} />
              Accounts
            </div>
            {openAccounts ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {/* Submenu */}
          <div
            className={`ml-8 space-y-1 overflow-hidden transition-all duration-300
            ${openAccounts ? "max-h-40" : "max-h-0"}`}
          >
            <Link
              to="/employee/accounts/client-payments"
              className="block px-4 py-2 rounded-md text-sm hover:bg-blue-50"
            >
              Client Payments
            </Link>

            <Link
              to="/employee/accounts/other-payments"
              className="block px-4 py-2 rounded-md text-sm hover:bg-blue-50"
            >
              Other Payments
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;


// import React, { useState } from "react";
// import {
//   LayoutDashboard,
//   FileText,
//   CheckSquare,
//   Settings,
//   MessageSquare,
//   ChevronDown,
//   X,
//   Sparkles,
// } from "lucide-react";

// // Demo component showing sidebar without routing
// const Sidebar = ({ isSidebarOpen = true, setIsSidebarOpen = () => {} }) => {
//   const [openAccounts, setOpenAccounts] = useState(false);
//   const [activeRoute, setActiveRoute] = useState("/employee/dashboard");

//   // Placeholder images
//   const ttsimg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%234F46E5'/%3E%3Ctext x='50' y='55' font-family='Arial' font-size='24' fill='white' text-anchor='middle'%3ETTS%3C/text%3E%3C/svg%3E";
//   const employee = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%236366F1'/%3E%3Ctext x='50' y='60' font-family='Arial' font-size='36' fill='white' text-anchor='middle'%3EAC%3C/text%3E%3C/svg%3E";

//   const menuItems = [
//     { name: "Dashboard", icon: LayoutDashboard, to: "/employee/dashboard" },
//     { name: "My Leaves", icon: FileText, to: "/employee/myLeaves" },
//     { name: "My Tasks", icon: CheckSquare, to: "/employee/myTasks" },
//     { name: "Tasks", icon: CheckSquare, to: "/employee/ProjectManagerTasks" },
//     { name: "Settings", icon: Settings, to: "/employee/settings" },
//   ];

//   return (
//     <>
//       {/* Overlay with blur */}
//       {isSidebarOpen && (
//         <div
//           onClick={() => setIsSidebarOpen(false)}
//           className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
//         />
//       )}

//       <aside
//         className={`fixed top-0 left-0 z-50 h-screen w-72 bg-gradient-to-b from-white via-indigo-50/30 to-purple-50/30
//         shadow-2xl shadow-indigo-200/50 border-r border-indigo-100/50
//         transform transition-all duration-300 ease-in-out
//         ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
//       >
//         {/* Decorative background elements */}
//         <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//           <div className="absolute -top-20 -left-20 w-40 h-40 bg-indigo-400/10 rounded-full blur-3xl"></div>
//           <div className="absolute top-1/3 -right-20 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 left-1/3 w-40 h-40 bg-pink-400/10 rounded-full blur-3xl"></div>
//         </div>

//         {/* Content */}
//         <div className="relative z-10 h-full flex flex-col">
//           {/* Header */}
//           <div className="flex items-center justify-between px-6 py-4 border-b border-indigo-100/50">
//             <div className="flex items-center gap-3">
//               <img src={ttsimg} alt="Logo" className="h-16 w-16 rounded-xl shadow-md" />
//               <div className="hidden sm:block">
//                 <div className="font-bold text-lg bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//                   TTS Portal
//                 </div>
//                 <div className="text-xs text-gray-500">Employee Dashboard</div>
//               </div>
//             </div>
//             <button
//               className="sm:hidden p-2 rounded-xl hover:bg-indigo-100 transition-colors"
//               onClick={() => setIsSidebarOpen(false)}
//             >
//               <X className="text-gray-600" size={20} />
//             </button>
//           </div>

//           {/* Profile */}
//           <div className="p-6 text-center">
//             <div className="relative inline-block">
//               <img
//                 src={employee}
//                 alt="Employee"
//                 className="w-24 h-24 rounded-2xl mx-auto shadow-lg ring-4 ring-white"
//               />
//               <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
//                 <Sparkles className="text-white" size={16} />
//               </div>
//             </div>
//             <h4 className="mt-4 font-bold text-lg text-gray-800">Ashton Cox</h4>
//             <p className="text-sm text-gray-500 flex items-center justify-center gap-1 mt-1">
//               <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
//               Employee
//             </p>
//           </div>

//           {/* Menu */}
//           <div className="flex-1 px-4 pb-4 space-y-2 overflow-y-auto">
//             {menuItems.map((item, index) => {
//               const isActive = activeRoute === item.to;
//               return (
//                 <button
//                   key={index}
//                   onClick={() => setActiveRoute(item.to)}
//                   className={`group flex items-center gap-3 px-4 py-3.5 rounded-xl font-medium transition-all duration-200 w-full
//                   ${
//                     isActive
//                       ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-300/50 scale-105"
//                       : "hover:bg-white/80 hover:shadow-md hover:scale-102 text-gray-700"
//                   }`}
//                 >
//                   <div className={`${isActive ? "scale-110" : "group-hover:scale-110"} transition-transform`}>
//                     <item.icon size={20} />
//                   </div>
//                   <span className="text-sm">{item.name}</span>
//                   {isActive && (
//                     <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
//                   )}
//                 </button>
//               );
//             })}

//             {/* Accounts Section */}
//             <button
//               onClick={() => setOpenAccounts(!openAccounts)}
//               className={`group flex items-center justify-between w-full px-4 py-3.5 rounded-xl font-medium transition-all duration-200 text-gray-700
//                 ${openAccounts ? "bg-white/80 shadow-md" : "hover:bg-white/80 hover:shadow-md"}`}
//             >
//               <div className="flex items-center gap-3">
//                 <div className="group-hover:scale-110 transition-transform">
//                   <MessageSquare size={20} />
//                 </div>
//                 <span className="text-sm">Accounts</span>
//               </div>
//               <div className={`transition-transform duration-300 ${openAccounts ? "rotate-180" : ""}`}>
//                 <ChevronDown size={18} />
//               </div>
//             </button>

//             {/* Submenu */}
//             <div
//               className={`ml-4 space-y-1 overflow-hidden transition-all duration-300 ease-in-out
//               ${openAccounts ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
//             >
//               <button
//                 onClick={() => setActiveRoute("/employee/accounts/client-payments")}
//                 className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm transition-all duration-200 w-full text-left
//                   ${
//                     activeRoute === "/employee/accounts/client-payments"
//                       ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md"
//                       : "hover:bg-white/80 hover:shadow-sm text-gray-600 hover:text-gray-900"
//                   }`}
//               >
//                 <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
//                 Client Payments
//               </button>

//               <button
//                 onClick={() => setActiveRoute("/employee/accounts/other-payments")}
//                 className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm transition-all duration-200 w-full text-left
//                   ${
//                     activeRoute === "/employee/accounts/other-payments"
//                       ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md"
//                       : "hover:bg-white/80 hover:shadow-sm text-gray-600 hover:text-gray-900"
//                   }`}
//               >
//                 <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
//                 Other Payments
//               </button>
//             </div>
//           </div>

//           {/* Footer */}
//           <div className="px-6 py-4 border-t border-indigo-100/50">
//             <div className="px-4 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100/50">
//               <div className="text-xs font-semibold text-indigo-600 mb-1">Need Help?</div>
//               <div className="text-xs text-gray-600">Contact support team</div>
//             </div>
//           </div>
//         </div>
//       </aside>
//     </>
//   );
// };

// // Demo wrapper
// const SidebarDemo = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      
//       {/* Demo content area */}
//       <div className={`transition-all duration-300 ${isSidebarOpen ? "ml-72" : "ml-0"} p-8`}>
//         <button
//           onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//           className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all font-semibold"
//         >
//           {isSidebarOpen ? "Close" : "Open"} Sidebar
//         </button>
        
//         <div className="mt-8 bg-white p-8 rounded-2xl shadow-lg">
//           <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
//             Welcome to the Portal
//           </h1>
//           <p className="text-gray-600">
//             This is a demo of the beautiful sidebar. Click the button above to toggle it, or click on menu items to see the active state animations.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SidebarDemo;