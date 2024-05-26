import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Resource from "./pages/Resource";
import "./App.css";
import Navbar from "./components/Navbar";
import Join from "./components/auth/Join";
function App() {
  return (
    <div>
      <BrowserRouter>
          <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resource" element={<Resource />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
