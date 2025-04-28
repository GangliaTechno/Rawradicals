import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
  FaTiktok,
} from 'react-icons/fa';

const RawRadicalsFooter = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        
        {/* About with Logo and Company Info */}
        <div className="space-y-4 col-span-1">
          <div className="flex items-center space-x-3">
            <img
              src="/images/logo_2.png"
              alt="Raw Radicals Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="text-lg font-semibold">Raw Radicals</span>
          </div>
          <p className="text-xs mt-2">A premium luggage company.</p>

          {/* Contact Info */}
          <div className="text-xs space-y-1 mt-4">
            <p>Phone: (+91) 81097 82903</p>
            <p>Headquarters: Manipal, Karnataka, India</p>
            <p>Email: <a href="mailto:director@rawradicals.in" className="underline hover:text-gray-400">director@rawradicals.in</a></p>
          </div>

          {/* Social Media */}
          <div className="flex space-x-3 mt-4">
            <a href="#" aria-label="Facebook"><FaFacebookF size={16} /></a>
            <a href="#" aria-label="Instagram"><FaInstagram size={16} /></a>
            <a href="#" aria-label="Pinterest"><FaPinterestP size={16} /></a>
            <a href="#" aria-label="YouTube"><FaYoutube size={16} /></a>
            <a href="#" aria-label="TikTok"><FaTiktok size={16} /></a>
          </div>
        </div>

        {/* Info Links */}
        <div className="col-span-1">
          <h4 className="font-semibold text-sm mb-3">INFO</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#" className="hover:underline">M Rewards</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Shipping</a></li>
            <li><a href="#" className="hover:underline">Returns & Exchanges</a></li>
            <li><a href="#" className="hover:underline">Warranty</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Business Links */}
        <div className="col-span-1">
          <h4 className="font-semibold text-sm mb-3">BUSINESS</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#" className="hover:underline">Collaboration</a></li>
            <li><a href="#" className="hover:underline">Corporate Gifting</a></li>
            <li><a href="#" className="hover:underline">Do not sell my personal information</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="col-span-2">
          <h4 className="font-semibold text-sm mb-3">NEWSLETTER</h4>
          <p className="text-xs mb-4">Sign up to our newsletter to receive exclusive offers.</p>
          <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <input
              type="email"
              placeholder="E-mail"
              className="flex-1 px-3 py-2 rounded-md text-black text-sm bg-transparent border border-white placeholder-white focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-white text-black font-semibold text-sm py-2 px-6 rounded-md hover:bg-gray-300"
            >
              SUBSCRIBE
            </button>
          </form>
          <p className="text-[10px] text-gray-400 mt-2">
            By signing up, you agree to our <a href="#" className="underline">privacy policy</a>.
          </p>

          {/* Payment Icons */}
          <div className="flex space-x-2 mt-6">
            <img src="/images/card_1.png" alt="Visa" className="h-6 object-contain" />
            <img src="/images/card_1.pngg" alt="Mastercard" className="h-6 object-contain" />
            <img src="/images/card_1.png" alt="American Express" className="h-6 object-contain" />
            <img src="/images/card_2.png" alt="Apple Pay" className="h-6 object-contain" />
            <img src="/images/card_2.png" alt="Google Pay" className="h-6 object-contain" />
            <img src="/images/card_2.png" alt="Shopify Pay" className="h-6 object-contain" />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row items-center justify-between text-xs space-y-4 md:space-y-0 border-t border-gray-700 pt-6">
        <p>© 2025 - MVST</p>
        {/* Optional: Language selector can be added here */}
      </div>
    </footer>
  );
};

export default RawRadicalsFooter;