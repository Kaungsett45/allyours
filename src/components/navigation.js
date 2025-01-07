
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Our Works", path: "/ourworks" },
    { name: "Apply", path: "/apply" },
    { name: "Newsletter", path: "/newsletter" },
    { name: "Volunteer", path: "/volunteer" },
    { name: "Support Us", path: "/supportus" },
  ];

  return (
    <div className="relative z-50 mt-4">
      {/*  menu for small screens */}
      <div className="xs:justify-end flex justify-between items-center px-4 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none z-50"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Overlay menu right to left*/}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-black bg-opacity-90 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-4">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`text-xl ${
                pathname === item.path
                  ? "bg-egw text-primary px-4 py-2 rounded-full"
                  : "text-egw hover:text-white"
              }`}
            >
              <Link href={item.path} onClick={() => setIsOpen(false)}>
                <h1 className="block font-bold">{item.name}</h1>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Full navigation for larger screens */}
      <ul className="hidden md:flex gap-4 justify-center items-center mt-4">
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`mx-1 my-2 ${
              pathname === item.path
                ? "bg-egw text-primary px-4 py-2 rounded-full"
                : "text-egw hover:text-white"
            }`}
          >
            <Link href={item.path}>
              <h1 className="block font-bold">{item.name}</h1>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
