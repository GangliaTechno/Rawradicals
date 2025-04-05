import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Blog from './pages/Blogpage';
import ContactUs from "./pages/ContactUs";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
