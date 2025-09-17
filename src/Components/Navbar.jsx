import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#EBE8E3]">
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        <Link to="/"  className="flex items-center w-32 h-14 space-x-2">
          <img
            src="./the logo.png"
            alt="logo"
            className="w-full h-full object-cover" // 🔥 thoda bada logo
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
          <Link to="/" className="text-[#b58b3a] cursor-pointer">Home</Link>
          <Link to="/wardrobe" className="cursor-pointer hover:text-black">Wardrobe</Link>
          <Link to="/contact" className="cursor-pointer hover:text-black">Contact Us</Link>
          <li className="cursor-pointer hover:text-black flex items-center">
            Cart{" "}
            <span className="ml-1 bg-gray-200 px-2 py-0.5 rounded-full text-xs">
              0
            </span>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#EBE8E3] border-t border-gray-200">
          <ul className="flex flex-col space-y-4 p-4 text-gray-700 font-medium">
            <li><a href="#" className="hover:text-gray-900">Home</a></li>
            <li><a href="#" className="hover:text-gray-900">Shop</a></li>
            <li><a href="#" className="hover:text-gray-900">Pages</a></li>
            <li><a href="#" className="hover:text-gray-900">Contact Us</a></li>
            <li><a href="#" className="hover:text-gray-900">Cart</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
