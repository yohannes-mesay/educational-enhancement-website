import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Resource from "./pages/Resource";
import "./App.css";
import Navbar from "./components/Navbar";
import Join from "./components/auth/Join";
import Discussion from "./pages/Discussion";
import Ask from "./pages/Ask";
import Questions from "./pages/Questions";
function App() {
  return (
    <div className=" bg-[#ffffff]">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ask" element={<Ask />} />
        <Route path="/resource" element={<Resource />} />
        <Route path="/Discussion" element={<Discussion />} />
        <Route path="/Question" element={<Questions />} />

        <Route path="/join" element={<Join />} />
      </Routes>
    </div>
  );
}

export default App;
