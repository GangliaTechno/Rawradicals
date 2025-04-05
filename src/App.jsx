import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Auth from "./pages/Auth";
import ForgotPassword from "./pages/ForgotPassword";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
      <Routes>
        <Route path="/" element={<Auth/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
