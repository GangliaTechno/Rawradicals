import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import OurTeam from "./pages/Ourteam";
import AboutBrand from "./pages/AboutBrand";
import Products from "./pages/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/aboutbrand" element={<AboutBrand />} />
        <Route path="/Products" element={<Products />} />
      </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
