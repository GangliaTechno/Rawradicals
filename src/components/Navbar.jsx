import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
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
            <a href="#" className="hover:text-black">Home</a>
            <a href="#" className="hover:text-black">About Us</a>
            <a href="#" className="hover:text-black">Products</a>
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
