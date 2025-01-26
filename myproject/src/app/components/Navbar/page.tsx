"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Link from "next/link";

const Page =()=> {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu for mobile
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="h-16 fixed top-0 left-0 z-50 w-full bg-white p-2 md:p-4 shadow-md"
    >
      <ul className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Logo */}
        <li className="text-xl font-bold text-purple-600">
          YourBrand
        </li>
        {/* Navigation items */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-black text-sm cursor-pointer font-semibold hover:text-purple-500">
            Home
          </Link>
          <li className="text-black text-sm cursor-pointer font-semibold hover:text-purple-500">
            About
          </li>
          <li
            className="text-black text-sm cursor-pointer font-semibold hover:text-purple-500"
          >
            Programs
          </li>
          <li
            className="text-black text-sm cursor-pointer font-semibold hover:text-purple-500"
          >
            Contact
          </li>
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl text-black">
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </ul>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md rounded-md absolute top-full left-0 w-full z-40">
          <ul className="text-black text-center flex flex-col">
            <Link href="/" className="p-2 hover:bg-purple-100">
                Home
            </Link>
            <Link href="" className="p-2 hover:bg-purple-100">
                About
            </Link>
            <Link  href="" className="p-2 hover:bg-purple-100">
                Programs
            </Link>
            <Link href="" className="p-2 hover:bg-purple-100">
                Contact
              </Link>
          </ul>
        </div>
      )}
    </motion.div>
    </>
  );
}

export default Page;