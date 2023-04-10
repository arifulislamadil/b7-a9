import React from "react";
import { Link, NavLink } from "react-router-dom";
import imgLogo from "../../assets/All Images/CareerHub.png"

const Header = () => {
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <Link
          to="/"
          aria-label="JobHunter"
          title="JobHunter"
          className="inline-flex items-center"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-200">
            <h3 className="font-bold">JH</h3>
          </div>
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 ">
            JobHunter
          </span>
        </Link>
        <div>
          <ul className="items-center hidden space-x-8 lg:flex">
            <li>
              <NavLink
                to="/"
                aria-label="Home"
                title="Home"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </li>
            <li>Statistics</li>
            <li>Applied Jobs</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <button>Star Applying</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
