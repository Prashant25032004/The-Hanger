import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#EBE8E3] shadow-md">
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 py-3 sm:py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center w-24 sm:w-28 md:w-32 h-12 sm:h-14">
          <img
            src="./unnamed.png"
            alt="logo"
            className="w-full h-full object-contain"
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center space-x-8 text-sm md:text-base font-medium text-gray-700">
          <Link to="/" className="text-[#b58b3a] cursor-pointer">
            Home
          </Link>
          <Link to="/wardrobe" className="cursor-pointer hover:text-black">
            Wardrobe
          </Link>
          <Link to="/contact" className="cursor-pointer hover:text-black">
            Contact Us
          </Link>
          <li className="cursor-pointer hover:text-black flex items-center">
            Cart{" "}
            <span className="ml-1 bg-gray-200 px-2 py-0.5 rounded-full text-xs">
              0
            </span>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#EBE8E3] border-t border-gray-200 transition-all duration-300 ease-in-out">
          <ul className="flex flex-col space-y-4 p-4 text-gray-700 font-medium text-sm sm:text-base">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              to="/wardrobe"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-900"
            >
              Wardrobe
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-900"
            >
              Contact Us
            </Link>
            <Link
              to="/cart"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-900 flex items-center"
            >
              Cart
              <span className="ml-1 bg-gray-200 px-2 py-0.5 rounded-full text-xs">
                0
              </span>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
