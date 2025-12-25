import React from "react";
import {
  LayoutDashboard,
  CalendarCheck,
  FileText,
  Users,
  Layers,
  CheckSquare,
  Settings,
  MessageSquare,
} from "lucide-react";

import employee from "../../../assets/Sidebar-Image/employee.jpg";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, active: true },
    { name: "Attendance", icon: CalendarCheck },
    { name: "My Leaves", icon: FileText },
    { name: "My Team", icon: Users },
    { name: "My Projects", icon: Layers },
    { name: "My Tasks", icon: CheckSquare },
    { name: "Settings", icon: Settings },
    { name: "Chat", icon: MessageSquare },
  ];

  return (
    <aside className="w-64 min-h-screen bg-white ">
      {/* Profile Section */}
      <div className="p-6 text-center">
        <img
          src={employee}
          alt="Employee"
          className="w-20 h-20 rounded-xl mx-auto object-cover"
        />
        <h4 className="mt-3 font-semibold text-gray-800">Ashton Cox</h4>
        <p className="text-sm text-gray-500">Employee</p>
      </div>

      {/* Menu */}
      <div className="px-4 space-y-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-left transition
              ${
                item.active
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
          >
            <item.icon size={18} />
            <span className="text-sm font-medium">{item.name}</span>
          </button>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
