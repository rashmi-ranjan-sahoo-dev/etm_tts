import React from 'react'
import Sidebar from '../components/Client/Sidebar.jsx'
import Navbar from '../components/Client/Navbar.jsx'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

const ClientLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-100 overflow-hidden">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div
        className={`
          transition-all duration-300 ease-in-out
          ${isSidebarOpen ? "ml-64" : "ml-0"}
        `}
      >
        <Navbar toggleSidebar={toggleSidebar}
                isSidebarOpen = {isSidebarOpen} />

        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default ClientLayout
