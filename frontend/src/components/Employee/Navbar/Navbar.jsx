import React from "react";
import ttsLogo from "../../../assets/Navbar-Image/ttsLogo.png";
import { Menu, Bell, Maximize } from "lucide-react";
import admin from "../../../assets/Navbar-Image/admin.jpg";

const Navbar = ({ toggleSidebar }) => {
  return (
    <header className="h-16 bg-white flex items-center justify-between px-6 shadow-sm">

      {/* Left */}
      <div className="flex items-center gap-4 pl-8">
        <img src={ttsLogo} alt="Kuber" className="h-16 w-25" />

        {/* Menu Icon */}
        <Menu
          className="cursor-pointer text-gray-600"
          onClick={toggleSidebar}
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">
        <Maximize className="cursor-pointer text-gray-600" />

        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Ella Jones</span>
          <img
            src={admin}
            className="w-8 h-8 rounded-full"
            alt="user"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
