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
import Answer from "./pages/Answer";
import OneQuiz from "./components/quizFiles/OneQuiz";
import BioQuiz2013 from "./components/quizFiles/biology2013";
import BioQuiz2014 from "./components/quizFiles/biology2014";
import BioQuiz2015 from "./components/quizFiles/biology2015";
import Profile from "./pages/Profile";
function App() {
  return (
    <div className=" bg-[#ffffff]">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ask" element={<Ask />} />
        <Route path="/resource" element={<Resource />} />
        <Route path="/Discussion" element={<Discussion />} />
        <Route path="/Questions" element={<Questions />} />
        <Route path="/english2013" element={<OneQuiz />} />
        <Route path="/biology2013" element={<BioQuiz2013 />} />
        <Route path="/biology2014" element={<BioQuiz2014 />} />
        <Route path="/biology2015" element={<BioQuiz2015 />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Answer/:questionId" element={<Answer />} />

        <Route path="/join" element={<Join />} />
      </Routes>
    </div>
  );
}

export default App;
