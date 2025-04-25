import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const RawRadicalsFooter = () => {
  return (
    <footer className="bg-black py-6 px-4 md:px-8 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 items-start">

         {/* Logo & Name */}
         <div className="flex flex-col items-start space-y-2">
          <div className="flex items-center space-x-3">
            <img 
              src="/images/logo_2.png" 
              alt="Raw Radicals Logo" 
              className="h-30 w-30 object-contain" 
            />
            
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-semibold text-base text-white mb-1">Company</h4>
          <ul className="space-y-1 text-xs text-white">
            <li><a href="#" className="hover:underline">Our Team</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
          </ul>
        </div>

        

        {/* Contact Info */}
        <div className="flex flex-col space-y-1">
          <p className="text-xs text-white">Phone: (+91) 81097 82903</p>
          <p className="text-xs text-white">Headquarters: Manipal, Karnataka, India</p>
          <p className="text-xs text-white">
            Email: <a href="mailto:director@rawradicals.in" className="text-blue-500 hover:underline">director@rawradicals.in</a>
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold text-base text-white mb-1">Team Solutions</h4>
          <div className="flex space-x-3 text-white text-sm">
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
