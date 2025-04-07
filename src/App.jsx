/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Cart from './components/cart';
import { useState } from 'react';

function App() {

  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartOpen = () => setIsCartOpen(true);
  const handleCartClose = () => setIsCartOpen(false);

  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Navbar onCartClick={handleCartOpen} />
      <Cart isOpen={isCartOpen} onClose={handleCartClose} />
      <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
