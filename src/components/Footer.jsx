// RawRadicalsFooter.js

import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope } from "react-icons/fa"; 

const RawRadicalsFooter = () => {
  return (
    <footer className="bg-black py-8 px-6 md:px-12 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
        
        {/* Brand & Contact */}
        <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-3">
         <img 
        src="/images/logo.png" 
        alt="Raw Radicals Logo" 
        className="h-30 w-30 rounded-full bg-white p-1" 
            />
            <div className="text-lg font-bold leading-tight">
                    RAW RADICALS<br />
                <span className="text-sm font-medium">TECHNOLOGIES PVT. LTD.</span>
            </div>
         </div>
          <p className="text-sm text-white">Phone: (+91) 81097 82903</p>
          <p className="text-sm text-white">Headquarters: Manipal, Karnataka, India</p>
          <p className="text-sm text-white">Email: <a href="mailto:director@rawradicals.in" className="text-blue-600 hover:underline">director@rawradicals.in</a></p>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-bold text-lg mb-2">Company</h4>
          <ul className="space-y-1 text-sm text-white">
            <li><a href="#" className="hover:underline">Our team</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold text-lg mb-2">Our Services</h4>
          <ul className="space-y-1 text-sm text-white">
            <li><a href="#" className="hover:underline">Services</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h4 className="font-bold text-lg mb-2">Team Solutions</h4>
          <div className="flex space-x-4 text-white">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="Email"><FaEnvelope /></a>
          </div>
        </div>

        
      </div>
    </footer>
  );
}

export default RawRadicalsFooter;
