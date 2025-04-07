import { useState, useEffect, useRef } from "react";
import { FaSearch, FaUser, FaShoppingCart, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    <header className="group shadow-md fixed w-screen top-0 z-50 transition-all duration-300 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/images/logo.png"
              alt="Raw Radicals Logo"
              className="h-12 w-12 rounded-full bg-white p-1"
            />
            <div className="text-lg font-bold leading-tight">
              RAW RADICALS
              <br />
              <span className="text-sm font-medium">
                TECHNOLOGIES PVT. LTD.
              </span>
            </div>
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-black">
            <a href="/" className="hover:text-gray-600">
              Home
            </a>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="hover:text-gray-600"
              >
                About Us
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md">
                  <a
                    href="/ourteam"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Our Team
                  </a>
                  <a
                    href="/aboutbrand"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    About Brand
                  </a>
                </div>
              )}
            </div>

            <a href="products" className="hover:text-gray-600">
              Products
            </a>
            <a href="#" className="hover:text-gray-600">
              Contact Us
            </a>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-black">
              <FaSearch />
            </button>
            <button className="text-black">
              <FaUser />
            </button>
            <button className="text-black relative">
              <FaShoppingCart />
            </button>

            {/* Hamburger Icon for Mobile */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-black focus:outline-none"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-6">
          <a href="/" className="block py-2 text-black">
            Home
          </a>
          <a href="/ourteam" className="block py-2 text-black">
            Our Team
          </a>
          <a href="/aboutbrand" className="block py-2 text-black">
            About Brand
          </a>
          <a href="#" className="block py-2 text-black">
            Products
          </a>
          <a href="#" className="block py-2 text-black">
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
