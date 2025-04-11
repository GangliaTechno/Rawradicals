import { useState } from "react";
import { FaThLarge, FaTh } from "react-icons/fa";
import { MdSort, MdExpandMore, MdExpandLess } from "react-icons/md";
import ProductModal from "../components/ProductModal";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Raw Radicals Chyawanprash",
    image: "/images/pic1.png",
    price: 1999,
    tagline: "Rooted in tradition, powered by nature.",
    description:
      "Raw Radicals brings you premium chyawanprash, blending ancient Ayurvedic wisdom with modern quality standards. Made with over 40 potent herbs, it supports immunity, energy, and overall vitality.",
  },
  {
    id: 2,
    name: "Ashwagandha Capsules",
    image: "/images/pic2.png",
    price: 999,
    tagline: "Balance stress. Enhance vitality.",
    description:
      "Our high-potency Ashwagandha capsules are formulated to help your body adapt to stress, promote calm, and support adrenal health naturally.",
  },
  {
    id: 3,
    name: "Triphala Detox Blend",
    image: "/images/pic3.jpeg",
    price: 799,
    tagline: "Gentle cleansing for gut wellness.",
    description:
      "Triphala, the ancient Ayurvedic trio of amla, haritaki, and bibhitaki, supports digestion, detoxification, and regularity without harsh side effects.",
  },
  {
    id: 4,
    name: "Tulsi Immunity Drops",
    image: "/images/pic1.png",
    price: 499,
    tagline: "Holy basil for holy immunity.",
    description:
      "Extracted from organic tulsi leaves, these drops boost respiratory health, reduce inflammation, and promote inner calm.",
  },
  {
    id: 5,
    name: "Moringa Supergreen Powder",
    image: "/images/pic2.png",
    price: 899,
    tagline: "Plant-based nourishment for your daily vitality.",
    description:
      "Moringa is a powerhouse of antioxidants, vitamins, and protein. Add it to smoothies, teas, or water for a daily green boost.",
  },
  {
    id: 6,
    name: "Shilajit Resin",
    image: "/images/pic1.png",
    price: 1499,
    tagline: "Strength. Stamina. Shilajit.",
    description:
      "Sourced from the Himalayas, this potent black resin supports energy, libido, and rejuvenation. Pure and lab-tested.",
  },
  {
    id: 7,
    name: "Amla C+ Capsules",
    image: "/images/pic2.png",
    price: 599,
    tagline: "Nature’s richest source of Vitamin C.",
    description:
      "Boost your collagen, immunity, and skin glow with these antioxidant-packed amla capsules, free from synthetic additives.",
  },
  {
    id: 8,
    name: "Gut Restore Probiotic",
    image: "/images/pic5.jpeg",
    price: 1199,
    tagline: "More than probiotics — a gut revolution.",
    description:
      "This multi-strain probiotic blend helps balance gut flora, reduce bloating, and improve digestion for daily wellness.",
  },
  {
    id: 9,
    name: "Herbal Sleep Drops",
    image: "/images/pic1.png",
    price: 699,
    tagline: "Fall asleep. Stay asleep. Wake refreshed.",
    description:
      "Crafted with valerian root, chamomile, and brahmi, this blend helps you drift off naturally — without grogginess.",
  },
  {
    id: 9,
    name: "Herbal Sleep Drops",
    image: "/images/pic1.png",
    price: 699,
    tagline: "Fall asleep. Stay asleep. Wake refreshed.",
    description:
      "Crafted with valerian root, chamomile, and brahmi, this blend helps you drift off naturally — without grogginess.",
  },
  {
    id: 11,
    name: "Herbal Sleep Drops",
    image: "/images/pic1.png",
    price: 699,
    tagline: "Fall asleep. Stay asleep. Wake refreshed.",
    description:
      "Crafted with valerian root, chamomile, and brahmi, this blend helps you drift off naturally — without grogginess.",
  },
  {
    id: 10,
    name: "Herbal Sleep Drops",
    image: "/images/pic1.png",
    price: 699,
    tagline: "Fall asleep. Stay asleep. Wake refreshed.",
    description:
      "Crafted with valerian root, chamomile, and brahmi, this blend helps you drift off naturally — without grogginess.",
  },
];


export default function ProductPage() {
  const [view, setView] = useState("grid3");
  const [showAvailability, setShowAvailability] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [availability, setAvailability] = useState("");
  const [price, setPrice] = useState("");
  const [showSort, setShowSort] = useState(false);
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [sortOption, setSortOption] = useState("Sort By");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const sortOptions = [
    "Featured",
    "Best selling",
    "Alphabetically, A-Z",
    "Alphabetically, Z-A",
    "Price, low to high",
    "Price, high to low",
  ];

  return (
    <div className="bg-gray-100 text-black min-h-screen p-4 sm:p-6 mt-15 uppercase tracking-widest">
      {/* Mobile Toolbar */}
      <div className="sm:hidden flex justify-between items-center gap-2 mb-4 border border-gray-700 rounded p-2 shadow bg-gray-100">
        <button
          onClick={() => setShowMobileFilter(true)}
          className="flex-1 text-center text-black font-medium border-r border-gray-600 hover:text-gray-300  "
        >
          Filter
        </button>
        <button
          onClick={() => setShowSort(true)}
          className="flex-1 text-center text-black font-medium border-r border-gray-600 hover:text-gray-800"
        >
          Sort By
        </button>
        <div className="flex gap-2 flex-1 justify-end">
          <button
            className={`p-2 rounded ${view === "grid3" ? "bg-gray-700" : ""}`}
            onClick={() => setView("grid3")}
          >
            <FaTh size={18} />
          </button>
          <button
            className={`p-2 rounded ${view === "grid6" ? "bg-gray-700" : ""}`}
            onClick={() => setView("grid6")}
          >
            <FaThLarge size={18} />
          </button>
        </div>
      </div>

      {/* Desktop Toolbar */}
      <div className="hidden sm:flex sticky top-16 bg-gray-100 z-40 mb-4 border border-gray-500 p-3 ">
        <div className="flex items-center justify-between flex-wrap gap-4 w-full">
          <div className="flex gap-2">
            <button
              className={`p-2 rounded ${view === "grid3" ? "bg-gray-300" : ""}`}
              onClick={() => setView("grid3")}
            >
              <FaTh size={20} />
            </button>
            <button
              className={`p-2 rounded ${view === "grid6" ? "bg-gray-300" : ""}`}
              onClick={() => setView("grid6")}
            >
              <FaThLarge size={20} />
            </button>
          </div>

          <div className="flex-1 text-center  sm:text-lg font-medium text-black uppercase tracking-widest text-sm">
            {products.length} Products Available
          </div>

          <div className="relative ml-auto">
            <button
              className="flex items-center gap-2 px-4 py-2 text-gray-500 hover:text-gray-900"
              onClick={() => setShowSort(!showSort)}
            >
              <span>{sortOption}</span>
              <MdSort size={20} />
            </button>
            {showSort && (
              <ul className="absolute right-0 mt-2 bg-gray-100 border border-gray-700 shadow-lg rounded w-48 z-50 text-black">
                {sortOptions.map((option) => (
                  <li
                    key={option}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-300 hover:pl-6"
                    onClick={() => {
                      setSortOption(option);
                      setShowSort(false);
                    }}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Slide-in Filter Panel (Mobile) */}
      {showMobileFilter && (
        <div className="fixed inset-0 z-50 bg-opacity-10 flex justify-end uppercase tracking-widest">
          <div className="bg-gray-100 w-3/4 h-full p-4 shadow-lg border-l border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold uppercase tracking-widest text-sm">Filters</h2>

              <button onClick={() => setShowMobileFilter(false)}>✕</button>
            </div>
            <div className="border-b border-gray-700 pb-2 mb-2">
              <button
                className="flex justify-between w-full text-left font-medium hover:text-gray-300"
                onClick={() => setShowAvailability(!showAvailability)}
              >
                Availability{" "}
                {showAvailability ? <MdExpandLess /> : <MdExpandMore />}
              </button>
              {showAvailability && (
                <div className="mt-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="availability"
                      value="in-stock"
                      checked={availability === "in-stock"}
                      onChange={(e) => setAvailability(e.target.value)}
                    />
                    In Stock Only
                  </label>
                </div>
              )}
            </div>
            <div>
              <button
                className="flex justify-between w-full text-left font-medium hover:text-gray-300"
                onClick={() => setShowPrice(!showPrice)}
              >
                Price {showPrice ? <MdExpandLess /> : <MdExpandMore />}
              </button>
              {showPrice && (
                <div className="mt-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="price"
                      value="low"
                      checked={price === "low"}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                    Low to High
                  </label>
                  <label className="flex items-center gap-2 mt-1">
                    <input
                      type="radio"
                      name="price"
                      value="high"
                      checked={price === "high"}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                    High to Low
                  </label>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Sort Modal (Mobile) */}
      {showSort && (
        <div className="sm:hidden fixed inset-0 z-50 bg-opacity-40 flex items-end">
          <div className="bg-gray-100 w-full rounded-t-xl p-4 shadow-lg">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">Sort By</h2>
              <button onClick={() => setShowSort(false)}>✕</button>
            </div>
            <ul>
              {sortOptions.map((option) => (
                <li
                  key={option}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-800 hover:pl-6"
                  onClick={() => {
                    setSortOption(option);
                    setShowSort(false);
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Filters + Product Grid */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 p-4 border border-gray-800  bg-gray-100 hidden sm:block text-black uppercase tracking-widest">
          <h2 className="text-lg font-semibold mb-2">Filters</h2>
          <div className="border-b border-gray-700 pb-2 mb-2">
            <button
              className="flex justify-between w-full text-left font-medium hover:pointer-cursor"
              onClick={() => setShowAvailability(!showAvailability)}
            >
              Availability{" "}
              {showAvailability ? <MdExpandLess /> : <MdExpandMore />}
            </button>
            {showAvailability && (
              <div className="mt-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="availability"
                    value="in-stock"
                    checked={availability === "in-stock"}
                    onChange={(e) => setAvailability(e.target.value)}
                  />
                  In Stock Only
                </label>
              </div>
            )}
          </div>
          <div>
            <button
              className="flex justify-between w-full text-left font-medium hover:text-gray-300"
              onClick={() => setShowPrice(!showPrice)}
            >
              Price {showPrice ? <MdExpandLess /> : <MdExpandMore />}
            </button>
            {showPrice && (
              <div className="mt-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="price"
                    value="low"
                    checked={price === "low"}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  Low to High
                </label>
                <label className="flex items-center gap-2 mt-1">
                  <input
                    type="radio"
                    name="price"
                    value="high"
                    checked={price === "high"}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  High to Low
                </label>
              </div>
            )}
          </div>
        </aside>

        <main className="w-full lg:w-3/4">
          <AnimatePresence mode="wait">
            <motion.div
              key={view} 
              className={`grid gap-6 ${view === "grid3"
                  ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                  : "grid-cols-2 sm:grid-cols-3 md:grid-cols-6"
                }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="relative"
                >
                  <Link to={`/productDetails/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-contain transition-transform duration-300 transform hover:scale-105"
                    />
                  </Link>

                  <button
                    className="absolute top-2 right-2 w-6 h-6 bg-white text-black text-xl font-bold flex items-center justify-center hover:bg-gray-200 transition"
                    onClick={() => {
                      setSelectedProduct(product);
                      setShowModal(true);
                    }}
                  >
                    +
                  </button>

                  <div className="text-black text-center mt-2 uppercase tracking-widest text-sm">
                    <h3 className="text-base font-medium">{product.name}</h3>
                    <p className="text-sm text-gray-600">₹{product.price}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Product Modal */}
          {selectedProduct && showModal && (
            <ProductModal
              product={selectedProduct}
              onClose={() => setShowModal(false)}
            />
          )}
        </main>


      </div>
    </div>
  );
}
