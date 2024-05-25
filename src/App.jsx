import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Resource from "./pages/Resource";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resource" element={<Resource />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
