import React from "react";
import { FiSearch, FiPlus, FiBell } from "react-icons/fi";
import { IoLanguageOutline } from "react-icons/io5";
import { HiOutlineSun } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className="h-16 border-b border-gray-200 bg-white px-4">
      <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between">
        {/* Left section - Logo and Navigation */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div className="flex items-center">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 12.5H12.5V27.5H9.5V12.5ZM3.5 17H6.5V23H3.5V17ZM15.5 5H18.5V32H15.5V5ZM21.5 8H24.5V35H21.5V8ZM27.5 12.5H30.5V27.5H27.5V12.5ZM33.5 17H36.5V23H33.5V17Z"
                fill="#0E121B"
              />
            </svg>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-black"
            >
              Find Worker
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-black"
            >
              Find Services
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-black"
            >
              Find Projects
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-black"
            >
              Bonus
            </a>
          </div>
        </div>

        {/* Right section - Search, Create, and Actions */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Discover more"
              className="h-10 w-[280px] rounded-lg border border-gray-200 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Create Button */}
          <button className="flex items-center space-x-1 rounded-full bg-[#18181B] px-4 py-2 text-sm font-medium text-white hover:bg-black">
            <span>Create</span>
            <FiPlus className="h-4 w-4" />
          </button>

          {/* Action Icons */}
          <div className="flex items-center space-x-4">
            <button className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100">
              <IoLanguageOutline className="h-5 w-5 text-gray-700" />
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100">
              <HiOutlineSun className="h-5 w-5 text-gray-700" />
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100">
              <FiBell className="h-5 w-5 text-gray-700" />
            </button>
            <button className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-gray-200">
              <img
                src="/placeholder-avatar.jpg"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
