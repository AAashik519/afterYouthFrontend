"use client";

import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import Sidebar from "./Sidebar";
import Link from "next/link";
import Image from "next/image";
import { FaGraduationCap } from "react-icons/fa6";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left side */}
            <div className="flex items-center">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 rounded-lg "
                aria-label="Open sidebar"
              >
                <IoMenu
                  className={`h-6 w-6 ${
                    isScrolled ? "text-green-700" : "text-white"
                  }`}
                />
              </button>

              <Link
                href="/"
                className={`ml-4 flex items-center justify-center gap-2 text-2xl font-semibold ${
                  isScrolled ? "text-green-500" : "text-white"
                }`}
              >
                <span className="text-3xl">
                  <FaGraduationCap />
                </span>
                alteryouth
              </Link>
            </div>

            {/* Right side */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/about"
                className={`${
                  isScrolled
                    ? "text-gray-700 hover:text-gray-900"
                    : "text-white"
                }`}
              >
                About
              </Link>
              <Link
                href="/how-it-works"
                className={`${
                  isScrolled
                    ? "text-gray-700 hover:text-gray-900"
                    : "text-white"
                }`}
              >
                How it works
              </Link>
              <Link
                href="/scholarships"
                className={`${
                  isScrolled
                    ? "text-gray-700 hover:text-gray-900"
                    : "text-white"
                }`}
              >
                Scholarships
              </Link>
              <Link
                href="/collaborate"
                className={`${
                  isScrolled
                    ? "text-gray-700 hover:text-gray-900"
                    : "text-white"
                }`}
              >
                Collaborate
              </Link>
              <Link
                href="/login"
                className={`${
                  isScrolled
                    ? "text-gray-700 hover:text-gray-900"
                    : "text-white"
                }`}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
    </>
  );
};

export default Navbar;
