
import React, { useState } from "react";
import {
  LayoutDashboard, Users, FolderKanban, ShieldCheck, BarChart3, Settings, LogOut, X, Crown, CheckSquare, ChevronDown
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import SperAdminProfileModal from "./SuperAdminProfileModal";

const SuperAdminSidebar = ({ isSidebarOpen = true, setIsSidebarOpen = () => { } }) => {
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState(location.pathname);
  // const [openProjects, setOpenProjects] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const logo =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%237C3AED'/%3E%3Ctext x='50' y='58' font-size='30' fill='white' text-anchor='middle'%3EK%3C/text%3E%3C/svg%3E";

  const profile =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' rx='20' fill='%236D28D9'/%3E%3Ctext x='50' y='62' font-size='36' fill='white' text-anchor='middle'%3ESA%3C/text%3E%3C/svg%3E";

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, to: "/super-admin/dashboard" },
    { name: "Client", icon: Users, to: "/super-admin/client" },
    { name: "Admin", icon: ShieldCheck, to: "/super-admin/admin" },
    { name: "Setting", icon: Settings, to: "/super-admin/setting" },
    { name: "Projects", icon: FolderKanban, to: "/super-admin/projects"}
  ];

  return (
    <>
      <SperAdminProfileModal 
        isOpen={isProfileModalOpen} 
        onClose={() => setIsProfileModalOpen(false)} 
      />

      {/* Overlay with blur */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-100 lg:hidden"
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-100 h-screen w-72 bg-gradient-to-b from-white via-purple-50/30 to-indigo-50/30
        shadow-2xl shadow-purple-200/50 border-r border-purple-100/50
        transform transition-all duration-300 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 -right-20 w-40 h-40 bg-indigo-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-40 h-40 bg-violet-400/10 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-purple-100/50">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="h-16 w-16 rounded-xl shadow-md" />
              <div className="hidden sm:block">
                <div className="font-bold text-lg bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Kuber
                </div>
                <div className="text-xs text-gray-500">Super Admin</div>
              </div>
            </div>
            <button
              className="p-2 rounded-xl hover:bg-purple-100 transition-colors "
              onClick={() => setIsSidebarOpen(false)}
            >
              <X className="text-gray-600" size={20} />
            </button>
          </div>

          {/* Profile */}
          <div className="p-6 text-center">
            <div 
              className="relative inline-block cursor-pointer group"
              onClick={() => setIsProfileModalOpen(true)}
            >
              <img
                src={profile}
                alt="Super Admin"
                className="w-24 h-24 rounded-2xl mx-auto shadow-lg ring-4 ring-white group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Crown className="text-white" size={16} />
              </div>
            </div>
            <h4 className="mt-4 font-bold text-lg text-gray-800">Super Admin</h4>
            <p className="text-sm text-gray-500 flex items-center justify-center gap-1 mt-1">
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
              Full Access
            </p>
          </div>

          {/* Menu */}
          <div className="flex-1 px-4 pb-4 space-y-2 overflow-y-auto">
            {menuItems.map((item, index) => {
              const isActive = activeRoute === item.to;
              return (
                <Link
                  key={index}
                  onClick={() => setActiveRoute(item.to)}
                  to={item.to}
                  className={`group flex items-center gap-3 px-4 py-3.5 rounded-xl font-medium transition-all duration-200 w-full
                  ${isActive
                      ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-300/50 scale-105"
                      : "hover:bg-white/80 hover:shadow-md hover:scale-102 text-gray-700"
                    }`}
                >
                  <div className={`${isActive ? "scale-110" : "group-hover:scale-110"} transition-transform`}>
                    <item.icon size={20} />
                  </div>
                  <span className="text-sm">{item.name}</span>
                  {isActive && (
                    <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                </Link>
              );
            })}

            {/* <button
              onClick={() => setOpenProjects(!openProjects)}
              className={`group flex items-center justify-between w-full px-4 py-3.5 rounded-xl font-medium transition-all duration-200 text-gray-700
    ${openProjects ? "bg-white/80 shadow-md" : "hover:bg-white/80 hover:shadow-md"}`}
            >
              <div className="flex items-center gap-3">
                <div className="group-hover:scale-110 transition-transform">
                  <CheckSquare size={20} />
                </div>
                <span className="text-sm">Projects</span>
              </div>

              <div className={`transition-transform duration-300 ${openProjects ? "rotate-180" : ""}`}>
                <ChevronDown size={18} />
              </div>
            </button>

            <div
              className={`ml-4 space-y-1 overflow-hidden transition-all duration-300 ease-in-out
              ${openProjects ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
            >
              <Link
                to="allprojects"
                onClick={() => setActiveRoute("allprojects")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm transition-all duration-200 w-full text-left
                  ${activeRoute === "allprojects"
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md"
                    : "hover:bg-white/80 hover:shadow-sm text-gray-600 hover:text-gray-900"
                  }`}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                All Projects
              </Link>

              <Link
                to="addprojects"
                onClick={() => setActiveRoute("addprojects")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm transition-all duration-200 w-full text-left
                  ${activeRoute === "addprojects"
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md"
                    : "hover:bg-white/80 hover:shadow-sm text-gray-600 hover:text-gray-900"
                  }`}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                Add Project
              </Link>
            </div> */}



          </div>


          {/* Logout */}
          <div className="px-4 py-4">
            <Link
              to="/signin"
              className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-medium
              hover:from-red-600 hover:to-red-700 active:scale-95 transition-all duration-200 w-full shadow-lg shadow-red-300/50"
            >
              <LogOut size={18} />
              Logout
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SuperAdminSidebar;