import { useState } from "react";
import { FaThLarge, FaTh } from "react-icons/fa";
import { MdSort, MdExpandMore, MdExpandLess } from "react-icons/md";

const products = [
  { id: 1, image: "/images/pic1.png" },
  { id: 2, image: "/images/pic2.png" },
  { id: 3, image: "/images/pic3.jpeg" },
  { id: 4, image: "/images/pic1.png" },
  { id: 5, image: "/images/pic2.png" },
  { id: 6, image: "/images/pic1.png" },
  { id: 7, image: "/images/pic2.png" },
  { id: 8, image: "/images/pic5.jpeg" },
  { id: 9, image: "/images/pic1.png" },
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

  const sortOptions = [
    "Featured",
    "Best selling",
    "Alphabetically, A-Z",
    "Alphabetically, Z-A",
    "Price, low to high",
    "Price, high to low",
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6 mt-15">
      <header className="text-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-semibold">RAW RADICALS</h1>
      </header>

      {/* Mobile Toolbar */}
      <div className="sm:hidden flex justify-between items-center gap-2 mb-4 border border-gray-300 rounded p-2 shadow bg-gray-50">
        <button
          onClick={() => setShowMobileFilter(true)}
          className="flex-1 text-center text-gray-700 font-medium border-r border-gray-300 hover:text-blue-600 transition-colors"
        >
          Filter
        </button>
        <button
          onClick={() => setShowSort(true)}
          className="flex-1 text-center text-gray-700 font-medium border-r border-gray-300 hover:text-blue-600 transition-colors"
        >
          Sort By
        </button>
        <div className="flex gap-2 flex-1 justify-end">
          <button
            className={`p-2 rounded transition-all ${
              view === "grid3" ? "bg-gray-200" : ""
            }`}
            onClick={() => setView("grid3")}
          >
            <FaTh size={18} />
          </button>
          <button
            className={`p-2 rounded transition-all ${
              view === "grid6" ? "bg-gray-200" : ""
            }`}
            onClick={() => setView("grid6")}
          >
            <FaThLarge size={18} />
          </button>
        </div>
      </div>

      {/* Desktop Toolbar */}
      <div className="hidden sm:flex sticky top-16 bg-gray-50 z-40 mb-4 border border-gray-400 p-3 rounded shadow">
        <div className="flex items-center justify-between flex-wrap gap-4 w-full">
          <div className="flex gap-2">
            <button
              className={`p-2 rounded transition-all ${
                view === "grid3" ? "bg-gray-200" : ""
              }`}
              onClick={() => setView("grid3")}
            >
              <FaTh size={20} />
            </button>
            <button
              className={`p-2 rounded transition-all ${
                view === "grid6" ? "bg-gray-200" : ""
              }`}
              onClick={() => setView("grid6")}
            >
              <FaThLarge size={20} />
            </button>
          </div>

          <div className="hidden sm:flex justify-center flex-1 text-base sm:text-lg font-medium text-gray-600">
            {products.length} Products Available
          </div>

          <div className="relative ml-auto">
            <button
              className="flex items-center gap-2 bg-gray-50 px-4 py-2 transition-colors duration-200 hover:text-blue-600"
              onClick={() => setShowSort(!showSort)}
            >
              <span className="text-gray-600">{sortOption}</span>
              <MdSort size={20} />
            </button>
            {showSort && (
              <ul className="absolute right-0 mt-2 bg-white border border-gray-300 shadow-lg rounded w-48 z-50">
                {sortOptions.map((option) => (
                  <li
                    key={option}
                    className="px-4 py-2 cursor-pointer transition-all duration-200 hover:bg-gray-100 hover:pl-6"
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
        <div className="fixed inset-0 z-50 bg-opacity-10 flex justify-end">
          <div className="bg-white w-3/4 h-full p-4 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button onClick={() => setShowMobileFilter(false)}>✕</button>
            </div>
            <div className="border-b pb-2 mb-2">
              <button
                className="flex justify-between w-full text-left font-medium transition-colors hover:text-blue-600"
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
                className="flex justify-between w-full text-left font-medium transition-colors hover:text-blue-600"
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

      {/* Slide-up Sort Modal (Mobile) */}
      {showSort && (
        <div className="sm:hidden fixed inset-0 z-50 bg-opacity-40 flex items-end">
          <div className="bg-white w-full rounded-t-xl p-4 shadow-lg">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">Sort By</h2>
              <button onClick={() => setShowSort(false)}>✕</button>
            </div>
            <ul>
              {sortOptions.map((option) => (
                <li
                  key={option}
                  className="px-4 py-2 cursor-pointer transition-all duration-200 hover:bg-gray-100 hover:pl-6"
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

      {/* Sidebar & Product Grid */}
      <div className="flex flex-col lg:flex-row gap-6">
        <aside className="w-full lg:w-1/4 p-4 border border-gray-200 rounded bg-gray-50 hidden sm:block">
          <h2 className="text-lg font-semibold mb-2">Filters</h2>
          <div className="border-b pb-2 mb-2">
            <button
              className="flex justify-between w-full text-left font-medium transition-colors hover:text-blue-600"
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
              className="flex justify-between w-full text-left font-medium transition-colors hover:text-blue-600"
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

        {/* Products Display */}
<main className="w-full lg:w-3/4">
  <div
    className={`grid gap-6 ${
      view === "grid3"
        ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        : "grid-cols-2 sm:grid-cols-3 md:grid-cols-6"
    }`}
  >
    {products.map((product) => (
      <div
        key={product.id}
        className="relative bg-white p-4 rounded shadow transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
      >
        <img
          src={product.image}
          alt="Luggage"
          className="w-full h-48 object-cover rounded"
        />
        {/* + Button */}
        <button
          className="absolute bottom-4 right-4 w-8 h-8  bg-white text-black text-lg font-bold flex items-center justify-center shadow-md hover:bg-gray-50 transition"
          onClick={() => alert(`Added product ${product.id}`)}
        >
          +
        </button>
      </div>
    ))}
  </div>
</main>

      </div>
    </div>
  );
}
