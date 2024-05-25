import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Resource from "./pages/Resource";
import "./App.css";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <BrowserRouter>
          <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resource" element={<Resource />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
