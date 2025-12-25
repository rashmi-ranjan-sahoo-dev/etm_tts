import React, { useState } from 'react'
import Navbar from '../components/Employee/Navbar/Navbar';
import Sidebar
 from '../components/Employee/Sidebar/Sidebar';
const EmployeeLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  // Toggle function
  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} />

      {/* Right Section */}
      <div className="flex-1">
        <Navbar toggleSidebar={toggleSidebar} />
        {/* Page content goes here */}
      </div>
      </div>
  )
}

export default EmployeeLayout