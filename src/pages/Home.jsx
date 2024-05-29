import React from "react";
import back from "../assets/back.jpg";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div
      className=""
      style={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${back})`,
      }}
    >
      <div className="  text-white flex font-serif flex-col gap-4 w-[50%] p-10  h-screen">
        <h1 className="text-5xl font-bold my-10">Welcome to Edu Hub</h1>

        <p className="font-medium text-xl leading-1">
          Start your journey with Edu Hub
        </p>

        <p className="font-medium text-xl leading-1">
          Explore your Resources, meet new friends & expand your horizons
        </p>
        <Link to="/join" className="text-blue-200 text-2xl hover:underline">
          <button className="bg-blue-500 px-4 py-2 my-4 mb-20 rounded-md w-1/3 text-white font-bold">
            Get Started
          </button>
        </Link>
      </div>

      <footer className="bg-gray-800 text-white p-4 mt-10 text-center">
        <div>&copy; 2024 Edu_hub. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default Home;
