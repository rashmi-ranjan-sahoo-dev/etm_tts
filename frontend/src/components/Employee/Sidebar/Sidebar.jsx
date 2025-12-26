
import {LayoutDashboard,FileText,CheckSquare,Settings,MessageSquare,X} from "lucide-react";
import { Link } from "react-router-dom";
import ttsimg from "../../../assets/Sidebar-Image/ttsLogo.png";
import employee from "../../../assets/Sidebar-Image/employee.jpg";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, to: "/employee/dashboard" },
    { name: "My Leaves", icon: FileText, to: "/employee/myLeaves" },
    { name: "My Tasks", icon: CheckSquare, to: "/employee/myTasks" },
    { name: "Tasks", icon: CheckSquare, to: "/employee/ProjectManagerTasks" },
    { name: "Settings", icon: Settings, to: "/employee/settings" },
    { name: "Acounts", icon: MessageSquare, to: "/employee/accounts" },
  ];

  return (
    <>
      {/* Overlay for all screens */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/30 z-40"
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-50 h-screen w-64 bg-white shadow-lg
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <img src={ttsimg} alt="Logo" className="h-20" />
          <button className="visible sm:hidden" onClick={() => setIsSidebarOpen(false)}>
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
        <div className="px-4 space-y-2">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-blue-50"
            >
              <item.icon size={18} />
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;


