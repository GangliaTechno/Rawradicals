import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";

const Cart = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/60 z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Drawer */}
          <motion.div
            className="fixed top-0 right-0 w-2/5 h-full bg-white shadow-lg z-50 flex flex-col p-6"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Your Cart</h2>
              <button onClick={onClose}>
                <FaTimes className="text-gray-600" />
              </button>
            </div>

            {/* Cart content (empty state for now) */}
            {/* <div className="flex-1 overflow-y-auto text-center text-gray-500 flex items-center justify-center">
              Your cart is currently empty.
            </div> */}
             <div className="flex-1 space-y-4 overflow-y-auto">
              <div className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-medium">Product One</p>
                  <p className="text-sm text-gray-500">Quantity: 1</p>
                </div>
                <p className="font-semibold">$25</p>
              </div>

              <div className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-medium">Product Two</p>
                  <p className="text-sm text-gray-500">Quantity: 1</p>
                </div>
                <p className="font-semibold">$40</p>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 border-t pt-4">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>$65</span>
              </div>
              <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-900 transition">
                Checkout
              </button>
            </div>




            {/* Footer (optional, can show total/checkout later) */}
            {/* <div className="mt-6 border-t pt-4"> */}
              {/* Future: total & checkout */}
            {/* </div> */}





          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

Cart.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Cart;
