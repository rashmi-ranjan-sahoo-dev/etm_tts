import React, { useState } from "react";
import {
  LayoutDashboard,
  FolderKanban,
  Headphones,
  CreditCard,
  Settings,
  LogOut,
  X,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const AdminSidebar = ({
  isSidebarOpen = true,
  setIsSidebarOpen = () => {},
}) => {
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState(location.pathname);
  const [openattendance, setOpenattendance] = useState(false)
  const [openleave, setOpenleave] = useState(false);
  const [opentraining, setOpentraining] = useState(false)

  const logo =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%236366F1'/%3E%3Ctext x='50' y='58' font-size='30' fill='white' text-anchor='middle'%3EK%3C/text%3E%3C/svg%3E";

  const profile =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' rx='20' fill='%234F46E5'/%3E%3Ctext x='50' y='62' font-size='36' fill='white' text-anchor='middle'%3ECS%3C/text%3E%3C/svg%3E";

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, to: "/admin/dashboard" },
    { name: "All Employee", icon: LayoutDashboard, to: "/admin/employee" },
    { name: "Holidays", icon: LayoutDashboard, to: "/admin/holiday" },
    // { name: "leaves", icon: LayoutDashboard, to: "/admin/leave" },
     { name: "Notice", icon: LayoutDashboard, to: "/admin/notice" },
    { name: "Leader", icon: LayoutDashboard, to: "/admin/leader" },
    { name: "Department", icon: LayoutDashboard, to: "/admin/department" },
    { name: "Settings", icon: Settings, to: "/admin/settings" },
    
  ];

  return (
    <>
      {/* Overlay with blur */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 lg:hidden"
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-99 h-screen w-72 bg-gradient-to-b bg-white via-indigo-50/30 to-purple-50/30
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
              <img
                src={logo}
                alt="Logo"
                className="h-16 w-16 rounded-xl shadow-md"
              />
              <div className="hidden sm:block">
                <div className="font-bold text-lg bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Kuber
                </div>
                <div className="text-xs text-gray-500">Admin Panel</div>
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
            <div className="relative inline-block">
              <img
                src={profile}
                alt="Client"
                className="w-24 h-24 rounded-2xl mx-auto shadow-lg ring-4 ring-white"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="text-white" size={16} />
              </div>
            </div>
            <h4 className="mt-4 font-bold text-lg text-gray-800">
              Cara Stevens
            </h4>
            <p className="text-sm text-gray-500 flex items-center justify-center gap-1 mt-1">
              <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
              Admin
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
                  <div
                    className={`${
                      isActive ? "scale-110" : "group-hover:scale-110"
                    } transition-transform`}
                  >
                    <item.icon size={20} />
                  </div>
                  <span className="text-sm">{item.name}</span>
                  {isActive && (
                    <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                </Link>

                //-----------------------Leave Section---------
              );
            })}

            {/* Leave Section */}
            <button
              onClick={() => setOpenleave(!openleave)}
              className={`group flex items-center justify-between w-full px-4 py-3.5 rounded-xl font-medium transition-all duration-200 text-gray-700
                ${
                  openleave
                    ? "bg-white/80 shadow-md"
                    : "hover:bg-white/80 hover:shadow-md"
                }`}
            >
              <div className="flex items-center gap-3">
                <div className="group-hover:scale-110 transition-transform">
                  <LayoutDashboard size={20}/>
                </div>
                <span className="text-sm">Leaves</span>
              </div>
              <div
                className={`transition-transform duration-300 ${
                  openleave ? "rotate-180" : ""
                }`}
              >
                <ChevronDown size={18} />
              </div>
            </button>

            {/* Leave Submenu */}
            <div
              className={`ml-4 space-y-1 overflow-hidden transition-all duration-300 ease-in-out 
              ${openleave ? "max-h-50 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
            >
              <Link
                to="/admin/leaverequest"
                onClick={() => setOpenleave("/admin/leaverequest")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm transition-all duration-200 w-full text-left
                  ${
                    openleave === "/admin/leaverequest"
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md"
                      : "hover:bg-white/80 hover:shadow-sm text-gray-600 hover:text-gray-900"
                  }`}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                All Leaves
              </Link>

              {/* <Link
                to="/admin/adminleave"
                onClick={() => setOpenleave("/admin/adminleave")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm transition-all duration-200 w-full text-left
                  ${
                    openleave === "/admin/adminleave"
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md"
                      : "hover:bg-white/80 hover:shadow-sm text-gray-600 hover:text-gray-900"
                  }`}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                Apply Leave
              </Link> */}

              <Link
                to="/admin/leavebalances"
                onClick={() => setOpenleave("/admin/leavebalances")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm transition-all duration-200 w-full text-left
                  ${
                    openleave === "/admin/leavebalances"
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md"
                      : "hover:bg-white/80 hover:shadow-sm text-gray-600 hover:text-gray-900"
                  }`}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                Leave Balance
              </Link>

              <Link
                to="/admin/leave-types"
                onClick={() => setOpenleave("/admin/leave-types")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm transition-all duration-200 w-full text-left
                  ${
                    openleave === "/admin/leave-types"
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md"
                      : "hover:bg-white/80 hover:shadow-sm text-gray-600 hover:text-gray-900"
                  }`}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                Leave Types
              </Link>

              {/* <Link
                to="/admin/leave-setting"
                onClick={() => setOpenleave("/admin/leave-setting")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm transition-all duration-200 w-full text-left
                  ${
                    openleave === "/admin/leave-setting"
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md"
                      : "hover:bg-white/80 hover:shadow-sm text-gray-600 hover:text-gray-900"
                  }`}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                Leave Setting
              </Link> */}
            </div>

            {/* Attendance Section */}
            <button
              onClick={() => {
                
                setOpenattendance(!openattendance)
                console.log(openattendance)
              }}
            
              className={`group flex items-center justify-between w-full px-4 py-3.5 rounded-xl font-medium transition-all duration-200 text-gray-700
                ${
                  openattendance
                    ? "bg-white/80 shadow-md"
                    : "hover:bg-white/80 hover:shadow-md"
                }`}
            >
              <div className="flex items-center gap-3">
                <div className="group-hover:scale-110 transition-transform">
                  <LayoutDashboard/>
                </div>
                <span className="text-sm">Attendance</span>
              </div>
              <div
                className={`transition-transform duration-300 ${
                  openattendance ? "rotate-180" : ""
                }`}
              >
                <ChevronDown size={18} />
              </div>
            </button>

            {/* Attendance Submenu */}
            <div
              className={`ml-4 space-y-1 overflow-hidden transition-all duration-300 ease-in-out
              ${openattendance ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
            >
              <Link
                to="/admin/today-attendance"
                onClick={() => setOpenattendance("/admin/today-attendance")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm transition-all duration-200 w-full text-left
                  ${
                    openattendance === "/admin/today-attendance"
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md"
                      : "hover:bg-white/80 hover:shadow-sm text-gray-600 hover:text-gray-900"
                  }`}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                Today Attendance
              </Link>

              {/* <Link
                to="/admin/employee-attendance"
                onClick={() => setOpenattendance("/admin/employee-attendance")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm transition-all duration-200 w-full text-left
                  ${
                    openattendance === "/admin/employee-attendance"
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md"
                      : "hover:bg-white/80 hover:shadow-sm text-gray-600 hover:text-gray-900"
                  }`}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                Employee Attendance
              </Link> */}

              <Link
                to="/admin/attendance-sheet"
                onClick={() => setOpenattendance("/admin/attendance-sheet")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm transition-all duration-200 w-full text-left
                  ${
                    openattendance === "/admin/attendance-sheet"
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md"
                      : "hover:bg-white/80 hover:shadow-sm text-gray-600 hover:text-gray-900"
                  }`}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                Attendance Sheet
              </Link>
            </div>
              
              {/* Training Section */}
            <button
              onClick={() => {
                
                setOpentraining(!opentraining)
              }}
            
              className={`group flex items-center justify-between w-full px-4 py-3.5 rounded-xl font-medium transition-all duration-200 text-gray-700
                ${
                  opentraining
                    ? "bg-white/80 shadow-md"
                    : "hover:bg-white/80 hover:shadow-md"
                }`}
            >
              <div className="flex items-center gap-3">
                <div className="group-hover:scale-110 transition-transform">
                  <LayoutDashboard/>
                </div>
                <span className="text-sm">Training</span>
              </div>
              <div
                className={`transition-transform duration-300 ${
                  opentraining ? "rotate-180" : ""
                }`}
              >
                <ChevronDown size={18} />
              </div>
            </button>

            {/* Training Submenu */}
            <div
              className={`ml-4 space-y-1 overflow-hidden transition-all duration-300 ease-in-out
              ${opentraining ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
            >
              <Link
                to="/admin/training-list"
                onClick={() => setOpentraining("/admin/training-list")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm transition-all duration-200 w-full text-left
                  ${
                    opentraining === "/admin/training-list"
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md"
                      : "hover:bg-white/80 hover:shadow-sm text-gray-600 hover:text-gray-900"
                  }`}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                Training List
              </Link>

              <Link
                to="/admin/trainers"
                onClick={() => setOpentraining("/admin/trainers")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm transition-all duration-200 w-full text-left
                  ${
                    opentraining === "/admin/trainers"
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md"
                      : "hover:bg-white/80 hover:shadow-sm text-gray-600 hover:text-gray-900"
                  }`}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                Trainers
              </Link>

              <Link
                to="/admin/training-type"
                onClick={() => setOpentraining("/admin/training-type")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm transition-all duration-200 w-full text-left
                  ${
                    opentraining === "/admin/training-type"
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md"
                      : "hover:bg-white/80 hover:shadow-sm text-gray-600 hover:text-gray-900"
                  }`}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                Training Type
              </Link>
            </div>

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

export default AdminSidebar;
