import background from '/images/blackBackground.jpg';
import product1 from '/images/avurveda_1.png'; // Update with correct paths
import product2 from '/images/avurveda_2.png'; // Update with correct paths
import product3 from '/images/avurveda_3.png';
import wallpaper_2 from '/images/wallpaper_2.png'; 

const Home = () => {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
      <div className="flex items-center justify-center h-[calc(100vh-64px)] bg-black/25 bg-opacity-50">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
          Welcome to Raw Radicals
        </h1>
      </div>

      {/* Products Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">All products Collections</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <img src={product1} alt="Product 1" className="w-full h-72 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">product 1</h3>
                <p className="text-gray-400">From $395.00 USD</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <img src={product2} alt="Product 2" className="w-full h-72 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">product 2</h3>
                <p className="text-gray-600 mt-2">From $395.00 USD</p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <img src={product3} alt="Product 3" className="w-full h-72 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">product 3</h3>
                <p className="text-gray-600 mt-2">From $885.00 USD</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-2">
  <div className="overflow-hidden">
    <p className="animate-marquee whitespace-nowrap text-xl font-medium">
      <span className="mr-100">RAW RADICALS</span>
      <span className="mr-100">RAW RADICALS</span>
      <span className="mr-100">RAW RADICALS</span>
      <span className="mr-100 ">RAW RADICALS</span>
      <span className="mr-100">RAW RADICALS</span>
      <span className="mr-100">RAW RADICALS</span>
      <span className="mr-100">RAW RADICALS</span>
      <span className="mr-100 ">RAW RADICALS</span>
    </p>
  </div>

  
  
  
  {/* New Display Section Below */}
<div className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center mb-12 text-black">Shop by categories</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Product 1 */}
      <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
        <img src={product1} alt="Aluminum" className="w-full h-72 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-black">Product 1</h3>
          <p className="text-black">Sleek and Strong</p>
        </div>
      </div>

      {/* Product 2 */}
      <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
        <img src={product2} alt="Carbon Fiber" className="w-full h-72 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-black">Product 2</h3>
          <p className="text-black">Luxurious and Unbreakable</p>
        </div>
      </div>

      {/* Product 3 */}
      <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
        <img src={product3} alt="Polycarbonate" className="w-full h-72 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-black">Product 3</h3>
          <p className="text-black">Lightweight and Durable</p>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Image Section Below */}
      <div className="py-4">
  <div className="max-w-7xl mx-auto px-7 sm:px-3 lg:px-3">
    <img 
      src={wallpaper_2} 
      className="w-full h-[400px] object-cover rounded-lg" 
    />
  </div>
</div>



</div>

    </div>
  );
};

export default Home;
