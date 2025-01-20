"use client"

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaHome, } from "react-icons/fa";
import { IoHelpCircleOutline } from "react-icons/io5";
import { CiCircleInfo } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { MdOutlineSmartphone } from "react-icons/md";
import { TbLogin } from "react-icons/tb";
import { FaRegHandshake } from "react-icons/fa";
import { LuFileText } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
const Sidebar = ({ isOpen, setIsOpen }) => {
  const sidebarRef = useRef(null);
  const [activeItem, setActiveItem] = useState("Home");
  // Close sidebar on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  const menuItems = [
    { icon: IoHomeOutline, label: "Home", href: "/" },
    { icon: IoHelpCircleOutline , label: 'How it works', href: '/how-it-works' },
    { icon: CiCircleInfo, label: 'About', href: '/about' },
    { icon: FaRegHandshake  , label: 'Collaborate', href: '/collaborate' },
    { icon: LuFileText, label: 'Scholarship Policy', href: '/policy' },
    { icon: FaRegMessage , label: 'Get in touch', href: '/contact' },
    { icon: MdOutlineSmartphone, label: 'Get the app', href: '/app' },
    { icon: TbLogin, label: 'Log in', href: '/login' },
    // Add more menu items here
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <nav className="flex-1 px-2 px-6 mt-20">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setActiveItem(item.label)} // Set active item on click
                className={`flex items-center px-4 py-2 mb-1 text-sm rounded-lg ${
                  activeItem === item.label
                    ? "bg-green-200 text-green-500"
                    : "text-gray-700 "
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span className={`font-semibold hover:text-green-500 duration-400 ${ activeItem === item.label ? "text-green-600" : ""}`}>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
