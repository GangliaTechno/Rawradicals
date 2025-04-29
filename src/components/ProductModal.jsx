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
    <div className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.5)] flex items-center justify-center uppercase tracking-widest">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="bg-white w-full max-w-3xl p-6  shadow-lg relative"
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-black text-2xl hover:opacity-60"
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
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 text-black">
            <h2 className="text-2xl font-semibold">{product.name}</h2>
            <div className="text-sm text-black opacity-60 mb-2">★★★★★ 5.0 (521 Reviews)</div>
            <p className="text-xl font-bold">₹{product.price.toFixed(2)} Rs</p>
            <p className="text-sm text-black opacity-60">
              4 interest-free installments of <b>₹{(product.price / 4).toFixed(2)}</b>
            </p>

            {/* Size Selection */}
            <div className="mt-4">
              <h3 className="text-sm font-semibold">Size:</h3>
              {/* <div className="flex gap-2 mt-2">
                {["Carry-On", "Medium", "Large"].map((size) => (
                  <button
                    key={size}
                    className="border border-black text-black px-4 py-2 rounded hover:bg-black hover:text-white transition"
                  >
                    {size}
                  </button>
                ))}
              </div> */}
            </div>

            {/* Add to Cart */}
            <button className="relative w-full py-3 rounded mt-4 overflow-hidden border border-black group uppercase tracking-widest">
              <span className="absolute inset-0 bg-black transform scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">
                Add to Cart
              </span>
            </button>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
