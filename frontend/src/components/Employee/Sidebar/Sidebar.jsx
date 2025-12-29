
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
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/30 z-40"
        />
      )}

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
