import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-white shadow p-4 pl-10 pr-28 flex justify-between items-center">
      <h1 className="text-xl font-bold">Welcome to</h1>
      <nav className="flex items-center gap-4">
        <NavLink
          to="/resource"
          className="text-gray-700 font-semibold"
          activeClassName="font-bold"
        >
          Resourse
        </NavLink>
        <NavLink
          to="/subjects"
          className="text-gray-700 font-semibold"
          activeClassName="font-bold"
        >
          Subjects
        </NavLink>
        <NavLink
          to="/forum"
          className="text-gray-700 font-semibold"
          activeClassName="font-bold"
        >
          Forum
        </NavLink>
        <NavLink
          to="/profile"
          className="text-gray-700 font-semibold"
          activeClassName="font-bold"
        >
          Profile
        </NavLink>
        <button
          className="bg-purple-600 text-white font-bold px-4 py-2 rounded-lg"
          aria-label="Join Discussion"
        >
          Join Us
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
