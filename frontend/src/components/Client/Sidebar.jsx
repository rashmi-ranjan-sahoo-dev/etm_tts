import React, { useState } from "react";
import {LayoutDashboard,FolderKanban,Headphones,CreditCard,Settings,LogOut,X,Sparkles,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import ClientProfileModal from "./ClientProfileModal";

const ClientSidebar = ({ isSidebarOpen = true, setIsSidebarOpen = () => {} }) => {
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState(location.pathname);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const logo =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%236366F1'/%3E%3Ctext x='50' y='58' font-size='30' fill='white' text-anchor='middle'%3EK%3C/text%3E%3C/svg%3E";

  const profile =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' rx='20' fill='%234F46E5'/%3E%3Ctext x='50' y='62' font-size='36' fill='white' text-anchor='middle'%3ECS%3C/text%3E%3C/svg%3E";

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, to: "/client/dashboard" },
    { name: "Projects", icon: FolderKanban, to: "/client/projects" },
    { name: "Supports", icon: Headphones, to: "/client/supports" },
    { name: "Billing", icon: CreditCard, to: "/client/billing" },
    { name: "Settings", icon: Settings, to: "/client/settings" },
  ];

  return (
    <>
      <ClientProfileModal 
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
        className={`fixed top-0 left-0 z-100 h-screen w-72 bg-gradient-to-b from-white via-indigo-50/30 to-purple-50/30
        shadow-2xl shadow-indigo-200/50 border-r border-indigo-100/50
        transform transition-all duration-300 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-indigo-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 -right-20 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-40 h-40 bg-pink-400/10 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-indigo-100/50">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="h-16 w-16 rounded-xl shadow-md" />
              <div className="hidden sm:block">
                <div className="font-bold text-lg bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Kuber
                </div>
                <div className="text-xs text-gray-500">Client Panel</div>
              </div>
            </div>
            <button
              className="p-2 rounded-xl hover:bg-indigo-100 transition-colors"
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
                alt="Client"
                className="w-24 h-24 rounded-2xl mx-auto shadow-lg ring-4 ring-white group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="text-white" size={16} />
              </div>
            </div>
            <h4 className="mt-4 font-bold text-lg text-gray-800">Cara Stevens</h4>
            <p className="text-sm text-gray-500 flex items-center justify-center gap-1 mt-1">
              <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
              Client
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
                  ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-300/50 scale-105"
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

export default ClientSidebar;