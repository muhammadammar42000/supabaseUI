"use client";
import React, { useState } from "react";
import { FiSearch, FiPlus, FiBell, FiSettings, FiLogOut, FiMenu, FiX } from "react-icons/fi";
import { IoLanguageOutline } from "react-icons/io5";
import { HiOutlineSun } from "react-icons/hi";

const navigationLinks = [
  { href: "#", label: "Find Worker" },
  { href: "#", label: "Find Services" },
  { href: "#", label: "Find Projects" },
  { href: "#", label: "Bonus" },
];

const dropdownOptions = [
  { icon: FiSettings, label: "Settings" },
  { icon: FiLogOut, label: "Logout" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="h-16 border-b border-gray-200 bg-white px-4">
      <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between">
        {/* Left section - Logo and Navigation */}
        <div className="flex items-center">
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

          {/* Navigation Links - Desktop */}
          <div className="hidden md:ml-8 md:flex md:items-center md:space-x-6">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-black"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="ml-4 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <FiX className="h-6 w-6" />
          ) : (
            <FiMenu className="h-6 w-6" />
          )}
        </button>

        {/* Right section - Search, Create, and Actions */}
        <div className="flex items-center space-x-4">
          {/* Search Bar - Hide on mobile */}
          <div className="hidden md:relative md:block">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Discover more"
              className="h-10 w-[280px] rounded-lg border border-gray-200 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Create Button */}
          <button className="hidden md:flex items-center space-x-1 rounded-lg bg-[#18181B] px-4 py-2 text-sm font-medium text-white hover:bg-black">
            <span>Create</span>
            <FiPlus className="h-4 w-4" />
          </button>

          {/* Action Icons */}
          <div className="flex items-center space-x-4">
            {/* Hide these buttons on mobile */}
            <div className="hidden md:flex md:space-x-4">
              <button className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100">
                <IoLanguageOutline className="h-5 w-5 text-gray-700" />
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100">
                <HiOutlineSun className="h-5 w-5 text-gray-700" />
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100">
                <FiBell className="h-5 w-5 text-gray-700" />
              </button>
            </div>

            {/* Account Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex h-9 items-center space-x-2 rounded-lg border border-gray-200 px-1 pr-3 hover:bg-gray-50"
              >
                <div className="h-7 w-7 overflow-hidden rounded-full bg-gray-200">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/bdd6/82b5/9941c54830e107ce9d592a90d4f8683b?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gdzHVF9PuFvHZpaaH9EFgfv3gwHcZ-ubDTi99FXhWSyvVBdqHiUyqjnp~InWNTGI8TUkk2wYLnlBTttwQBPlIbA4YUOyTJ9qSmnukQAlL59e4-BZ9~SB2g0W6cdZhkA0QXejMYCsEK1Eyg4lduxqzpRD9UzDMEnm7kVl5nvnmCQWRUjhzkVV58i0Sx-t21GEpajQuA1ppDn99Kz5od7qmA4pJNlBd6JXO6-iTpSr6rltO2pjP-Jhy5-fEHTZD5COnioaHs8h9ETMaqziHzo26b1pxksrOAhe6ldjX~0T3IBpEJY1mtQhsHd2yKBn5OFOP-xqvEbozfJ5fKpEzrY7YQ__"
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700">Account</span>
                <svg
                  className={`h-4 w-4 text-gray-500 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-lg border border-gray-200 bg-white py-1 shadow-lg z-20">
                  {dropdownOptions.map((option) => (
                    <button
                      key={option.label}
                      className="flex w-full items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <option.icon className="h-4 w-4" />
                      <span>{option.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-16 z-50 bg-white p-4 md:hidden">
          {/* Mobile Search */}
          <div className="relative mb-4">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Discover more"
              className="h-10 w-full rounded-lg border border-gray-200 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col space-y-4">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-black"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Action Buttons */}
          <div className="mt-4 flex flex-col space-y-4">
            <button className="flex items-center justify-center space-x-1 rounded-lg bg-[#18181B] px-4 py-2 text-sm font-medium text-white hover:bg-black">
              <span>Create</span>
              <FiPlus className="h-4 w-4" />
            </button>
            <div className="flex justify-around">
              <button className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100">
                <IoLanguageOutline className="h-5 w-5 text-gray-700" />
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100">
                <HiOutlineSun className="h-5 w-5 text-gray-700" />
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100">
                <FiBell className="h-5 w-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
