import { useState, useEffect, useRef } from "react";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="group shadow-md fixed w-screen top-0 z-50 transition-all duration-300 bg-transparent hover:bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white group-hover:text-black">Raw radicals</span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-white group-hover:text-black">
            <a href="/" className="hover:text-black">Home</a>
            <a href="#" className="hover:text-black">About Us</a>

            {/* Products Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button className="hover:text-black hover:cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                Products
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md">
                  <a href="/ourteam" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Our Team</a>
                  <a href="/aboutbrand" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">About Brand</a>
                </div>
              )}
            </div>

            <a href="#" className="hover:text-black">Contact Us</a>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-white group-hover:text-black">
              <FaSearch />
            </button>
            <button className="text-white group-hover:text-black">
              <FaUser />
            </button>
            <button className="text-white group-hover:text-black relative">
              <FaShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
