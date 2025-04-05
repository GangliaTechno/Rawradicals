import { useEffect } from "react";
import { motion } from "framer-motion";

export default function ProductModal({ product, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="bg-white w-full max-w-3xl p-6 rounded-lg shadow-lg relative"
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Product Content */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover rounded"
            />
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold">{product.name}</h2>
            <div className="text-gray-500 text-sm mb-2">★★★★★ 5.0 (521 Reviews)</div>
            <p className="text-xl font-bold">${product.price.toFixed(2)} USD</p>
            <p className="text-sm text-gray-600">
              4 interest-free installments of <b>${(product.price / 4).toFixed(2)}</b> with Shop Pay
            </p>

            {/* Size Selection */}
            <div className="mt-4">
              <h3 className="text-sm font-semibold">Size:</h3>
              <div className="flex gap-2 mt-2">
                {["Carry-On", "Medium", "Large"].map((size) => (
                  <button
                    key={size}
                    className="border px-4 py-2 rounded hover:bg-gray-200"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mt-4">
              <h3 className="text-sm font-semibold">Color:</h3>
              <div className="flex gap-2 mt-2">
                {product.colors.map((color, index) => (
                  <button key={index} className="border rounded p-1">
                    <img src={color} alt="Color Option" className="w-10 h-10" />
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <button className="w-full bg-blue-600 text-white py-3 rounded mt-4 hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
