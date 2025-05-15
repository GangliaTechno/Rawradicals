import React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa'

const RawRadicalsFooter = () => {
  return (
    <footer
      style={{ fontFamily: "Montserrat, sans-serif" }}
      className="
      bg-[#0a0a0a] text-white
      px-6 sm:px-8 md:px-16 lg:px-24
      py-5 sm:py-6
      min-h-[250px]
      sm:min-h-[350px]
      md:min-h-[450px]
      lg:min-h-[550px]
      font-normal
    "
    >

      <div className="max-w-8xl mx-auto flex flex-wrap md:flex-nowrap justify-between gap-8     font-normal">
        {/* Column 1: About */}
        <div className="basis-full md:basis-[25%] space-y-4 flex flex-col justify-center items-center">
          <div className="bg-[#0a0a0a] p-1 inline-block">
            <img
              src="/images/logo_2.png"
              alt="Raw Radicals Logo"
              className="h-96 w-96 object-contain "
            />
          </div>
          <p className="text-xs mt-2">A premium luggage company.</p>

          {/* Social Media */}
        </div>

        {/* Column 2: Info */}
        <div className="basis-full md:basis-[18%]">
          <h4 className="font-normal text-xl mb-3 ">INFO</h4>
          <ul className="min-h-[300px] text-sm space-y-2">
            <li>
              <a href="#" className="hover:underline">
                M Rewards
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shipping
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Returns & Exchanges
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Warranty
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Business */}
        <div className="basis-full md:basis-[18%]">
          <h4 className="font-normal text-xl mb-3">BUSINESS</h4>
          <ul className="min-h-[300px] text-sm space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Collaboration
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Corporate Gifting
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Do not sell my personal information
              </a>
            </li>
          </ul>
          <div className="text-xs space-y-1 mt-4 font-normal">
            <p className="font-normal" style={{ fontFamily: "Montserrat, sans-serif" }}>Phone: (+91) 81097 82903</p>
            <p className="font-normal" style={{ fontFamily: "Montserrat, sans-serif" }}>Headquarters: Manipal, Karnataka, India</p>
            <p className="font-normal" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Email:{' '}
              <a
                style={{ fontFamily: "Montserrat, sans-serif" }}
                href="mailto:director@rawradicals.in"
                className="underline hover:text-gray-400"
              >
                info@rawradicles.com
              </a>
            </p>
            <div className="flex space-x-3 mt-4">
              <a href="#" aria-label="Facebook">
                <FaFacebookF size={16} />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram size={16} />
              </a>
              <a href="#" aria-label="Pinterest">
                <FaPinterestP size={16} />
              </a>
              <a href="#" aria-label="YouTube">
                <FaYoutube size={16} />
              </a>
              <a href="#" aria-label="TikTok">
                <FaTiktok size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Column 4: Newsletter */}
        <div className="basis-full md:basis-[30%]">
          <h4 className="font-normal text-lg mb-3">NEWSLETTER</h4>
          <p className="text-xs mb-4">
            Sign up to our newsletter to receive exclusive offers.
          </p>
          <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <input
              type="email"
              placeholder="E-mail"
              className="flex-1 px-3 py-2 rounded-md text-black text-sm bg-transparent border border-white placeholder-white focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-white text-black font-normal text-sm py-2 px-6 rounded-md hover:bg-gray-300"
            >
              SUBSCRIBE
            </button>
          </form>
          <p className="text-[10px] text-gray-400 mt-2">
            By signing up, you agree to our{' '}
            <a href="#" className="underline">
              privacy policy
            </a>
            .
          </p>

          <div className="flex space-x-2 mt-6">
            <img
              src="/images/cards.png"
              alt="Visa"
              className="h-6 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div style={{ fontFamily: "Montserrat, sans-serif" }} className="max-w-7xl mx-auto mt-10 flex items-center justify-center text-xs space-y-4 md:space-y-0 border-t border-gray-700 pt-6">
        <p>© 2025 - MVST</p>
      </div>
    </footer>
  )
}

export default RawRadicalsFooter
