import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { FaShieldAlt, FaShippingFast, FaUndo } from 'react-icons/fa'


const Home = () => {
  return (
    <div className="bg-black">
      {/* Banner Section */}
      <div className="w-full aspect-[16/9] mt-10 overflow-hidden">
  <img
    src="/images/homepage_background.png"
    alt="Homepage Banner"
    className="w-full h-full object-cover rounded-lg"
  />
</div>
     {/* Products Section */}
<div className="bg-white py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl text-center mb-12 uppercase tracking-widest">
      ALL PRODUCTS COLLECTION
    </h2>

    {/* Products Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex flex-col items-center text-center">
          <img
            src={`/images/product_${i}.png`}
            alt={`Product ${i}`}
            className="w-full h-72 object-cover animate-zoomOut transform transition duration-300 hover:scale-95"
          />
          <h3 className="text-xl font-semibold mt-4">Product {i}</h3>
          <p className="text-gray-600">
            From ${i === 3 ? '885.00' : '395.00'} USD
          </p>
        </div>
      ))}
    </div>

    {/* Single SHOP NOW Button Centered */}
    <div className="flex justify-center mt-12">
      <button
        type="button"
        className="relative inline-block px-6 py-3 overflow-hidden text-sm font-medium text-white border border-black group"
      >
        {/* Black sliding background */}
        <span className="absolute inset-0 bg-black transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>

        {/* Text on top */}
        <span className="relative z-10 group-hover:text-white text-black transition duration-300">
          SHOP NOW
        </span>
      </button>
    </div>
  </div>
</div>


      <div className="bg-white py-16 px-4">
  <h2 className="text-center text-2xl sm:text-3xl font-semibold tracking-wide text-gray-800 mb-12">
    SHOP BY MATERIAL
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
    {/* Aluminum Card */}
    <div className="relative group overflow-hidden rounded-md shadow-lg">
      <img
        src="/images/collection_1.png" // Replace with actual path
        alt="Aluminum"
        className="w-full h-[450px] object-cover transition-transform duration-1000 group-hover:scale-105"
      />
      <div className="absolute bottom-6 left-6 text-white">
        <p className="text-sm uppercase tracking-wide">SLEEK AND STRONG</p>
        <h3 className="text-xl font-semibold">ALUMINUM</h3>
        <button className="relative mt-4 inline-block px-6 py-3 overflow-hidden text-sm font-medium text-white border border-white group bg-transparent">
  {/* White background slides in on hover */}
  <span className="absolute inset-0 bg-white transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>

  {/* Text turns black when white background appears */}
  <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
    VIEW PRODUCTS
  </span>
</button>
      </div>
    </div>

    {/* Carbon Fiber Card */}
    <div className="relative group overflow-hidden rounded-md shadow-lg">
      <img
        src="/images/collection_2.png" // Replace with actual path
        alt="Carbon Fiber"
        className="w-full h-[450px] object-cover transition-transform duration-1000 group-hover:scale-105"
      />
      <div className="absolute bottom-6 left-6 text-white">
        <p className="text-sm uppercase tracking-wide">LUXURIOUS AND UNBREAKABLE</p>
        <h3 className="text-xl font-semibold">CARBON FIBER</h3>
        <button className="relative mt-4 inline-block px-6 py-3 overflow-hidden text-sm font-medium text-white border border-white group bg-transparent">
  {/* White background slides in on hover */}
  <span className="absolute inset-0 bg-white transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>

  {/* Text turns black when white background appears */}
  <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
    VIEW PRODUCTS
  </span>
</button>
      </div>
    </div>

    {/* Polycarbonate Card */}
    <div className="relative group overflow-hidden rounded-md shadow-lg">
      <img
        src="/images/collection_3.png" // Replace with actual path
        alt="Polycarbonate"
        className="w-full h-[450px] object-cover transition-transform duration-1000 group-hover:scale-105"
      />
      <div className="absolute bottom-6 left-6 text-white">
        <p className="text-sm uppercase tracking-wide">LIGHTWEIGHT AND DURABLE</p>
        <h3 className="text-xl font-semibold">POLYCARBONATE</h3>
        <button className="relative mt-4 inline-block px-6 py-3 overflow-hidden text-sm font-medium text-white border border-white group bg-transparent">
  {/* White background slides in on hover */}
  <span className="absolute inset-0 bg-white transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>

  {/* Text turns black when white background appears */}
  <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
    VIEW PRODUCTS
  </span>
</button>

      </div>
    </div>
  </div>
</div>


      
    

  {/* Scrolling Marquee */}
  <div className="bg-black text-white py-2 overflow-hidden whitespace-nowrap">
        <div className="marquee flex animate-marquee">
          {Array(16)
            .fill('RAW RADICALS')
            .map((text, idx) => (
              <span key={idx} className="mx-8 text-xl font-medium">
                {text}
              </span>
            ))}
        </div>
      </div>


      <div className="bg-white py-16 px-4">
  <h2 className="text-center text-2xl sm:text-3xl font-semibold tracking-wide text-gray-800 mb-12">
    SHOP BY MATERIAL
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
    {/* Aluminum Card */}
    <div className="relative group overflow-hidden rounded-md shadow-lg">
      <img
        src="/images/collection_1.png" // Replace with actual path
        alt="Aluminum"
        className="w-full h-[450px] object-cover transition-transform duration-1000 group-hover:scale-105"
      />
      <div className="absolute bottom-6 left-6 text-white">
        <p className="text-sm uppercase tracking-wide">SLEEK AND STRONG</p>
        <h3 className="text-xl font-semibold">ALUMINUM</h3>
        <button className="relative mt-4 inline-block px-6 py-3 overflow-hidden text-sm font-medium text-white border border-white group bg-transparent">
  {/* White background slides in on hover */}
  <span className="absolute inset-0 bg-white transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>

  {/* Text turns black when white background appears */}
  <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
    VIEW PRODUCTS
  </span>
</button>
      </div>
    </div>

    {/* Carbon Fiber Card */}
    <div className="relative group overflow-hidden rounded-md shadow-lg">
      <img
        src="/images/collection_2.png" // Replace with actual path
        alt="Carbon Fiber"
        className="w-full h-[450px] object-cover transition-transform duration-1000 group-hover:scale-105"
      />
      <div className="absolute bottom-6 left-6 text-white">
        <p className="text-sm uppercase tracking-wide">LUXURIOUS AND UNBREAKABLE</p>
        <h3 className="text-xl font-semibold">CARBON FIBER</h3>
        <button className="relative mt-4 inline-block px-6 py-3 overflow-hidden text-sm font-medium text-white border border-white group bg-transparent">
  {/* White background slides in on hover */}
  <span className="absolute inset-0 bg-white transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>

  {/* Text turns black when white background appears */}
  <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
    VIEW PRODUCTS
  </span>
</button>
      </div>
    </div>

    {/* Polycarbonate Card */}
    <div className="relative group overflow-hidden rounded-md shadow-lg">
      <img
        src="/images/collection_3.png" // Replace with actual path
        alt="Polycarbonate"
        className="w-full h-[450px] object-cover transition-transform duration-1000 group-hover:scale-105"
      />
      <div className="absolute bottom-6 left-6 text-white">
        <p className="text-sm uppercase tracking-wide">LIGHTWEIGHT AND DURABLE</p>
        <h3 className="text-xl font-semibold">POLYCARBONATE</h3>
        <button className="relative mt-4 inline-block px-6 py-3 overflow-hidden text-sm font-medium text-white border border-white group bg-transparent">
  {/* White background slides in on hover */}
  <span className="absolute inset-0 bg-white transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>

  {/* Text turns black when white background appears */}
  <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
    VIEW PRODUCTS
  </span>
</button>

      </div>
    </div>
  </div>
</div>

     

   {/* Policy Section */}
<div className="bg-white py-16 px-4">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
    
    {/* Secure Payment */}
    <div className="flex flex-col items-center">
      <FaShieldAlt className="text-2xl text-black mb-3" />
      <h4 className="text-lg font-semibold">Secure Payment</h4>
      <p className="text-gray-600 text-sm">Your payment is safe with us</p>
    </div>

    {/* Fast Delivery */}
    <div className="flex flex-col items-center">
      <FaShippingFast className="text-2xl text-black mb-3" />
      <h4 className="text-lg font-semibold">Fast Delivery</h4>
      <p className="text-gray-600 text-sm">Get your order quickly</p>
    </div>

    {/* Easy Returns */}
    <div className="flex flex-col items-center">
      <FaUndo className="text-2xl text-black mb-3" />
      <h4 className="text-lg font-semibold">Easy Returns</h4>
      <p className="text-gray-600 text-sm">30-day return policy</p>
    </div>

  </div>
</div>

</div>

    

  )
}

export default Home
