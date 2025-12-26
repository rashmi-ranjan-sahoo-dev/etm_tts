
import React, { useState } from "react";
import Navbar from "../components/Employee/Navbar/Navbar";
import Sidebar from "../components/Employee/Sidebar/Sidebar";

const EmployeeLayout = ({ children }) => {
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
        <Navbar toggleSidebar={toggleSidebar} />

        <main className="p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default EmployeeLayout;
