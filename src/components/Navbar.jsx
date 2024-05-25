import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Welcome to</h1>
      <nav className="flex items-center gap-4">
        <NavLink
          to="/resourse"
          className="text-gray-700"
          activeClassName="font-bold"
        >
          Resourse
        </NavLink>
        <NavLink
          to="/subjects"
          className="text-gray-700"
          activeClassName="font-bold"
        >
          Subjects
        </NavLink>
        <NavLink
          to="/forum"
          className="text-gray-700"
          activeClassName="font-bold"
        >
          Forum
        </NavLink>
        <NavLink
          to="/profile"
          className="text-gray-700"
          activeClassName="font-bold"
        >
          Profile
        </NavLink>
        <button
          className="bg-purple-600 text-white px-4 py-2 rounded-lg"
          aria-label="Join Discussion"
        >
          Join Discussion
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
