import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Raw radicals</h1>
        <div className="flex ml-auto">
          <p><Link to="" className="text-white hover:underline">About</Link></p>
          <p><Link to="" className="text-white hover:underline">Services</Link></p>
          <p><Link to="" className="text-white hover:underline">Home</Link></p>
          <p><Link to="" className="text-white hover:underline">Contact</Link></p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
