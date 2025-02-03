import React from 'react';
import { FaBalanceScale, FaSearch, FaBook, FaUser, FaCog } from 'react-icons/fa';

export function Sidebar() {
  return (
    <div className="w-20 min-h-screen bg-[#232936] flex flex-col items-center py-8">
      <div className="sidebar-icon mb-8 bg-[#ff6b4a]">
        <FaBalanceScale className="text-2xl text-white" />
      </div>
      
      <div className="flex-1 space-y-4">
        <button className="sidebar-icon">
          <FaSearch className="text-xl" />
        </button>
        <button className="sidebar-icon">
          <FaBook className="text-xl" />
        </button>
        <button className="sidebar-icon">
          <FaUser className="text-xl" />
        </button>
      </div>
      
      <button className="sidebar-icon">
        <FaCog className="text-xl" />
      </button>
    </div>
  );
}
