import React from "react";
import Navbar from "./components/Navbar";
import "./index.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={ <Home/>}>
     
      </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
