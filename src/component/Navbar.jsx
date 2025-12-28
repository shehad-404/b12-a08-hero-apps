import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-xl font-semibold ${
      isActive ? "text-purple-600 border-b-2 border-purple-500" : "text-gray-700"
    }`;

  return (
    <>
      {/* NAVBAR */}
      <header className="w-full bg-white shadow relative z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <img src={logo} alt="Hero.IO Logo" className="w-8 h-8" />
            <span className="text-xl font-bold text-purple-600">
              HERO.IO
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 font-medium ">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/all-apps" className={linkClass}>Apps</NavLink>
            <NavLink to="/installation" className={linkClass}>Installation</NavLink>
          </nav>

          {/* Desktop Button */}
          <a
            href="https://github.com/shehad-404"
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
          >
            <FaGithub />
            Contribute
          </a>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </header>

      {/* MOBILE FULLSCREEN MENU */}
      {open && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center gap-8 z-50">

          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-3xl text-gray-700"
            onClick={() => setOpen(false)}
          >
            <FaTimes />
          </button>

          <NavLink onClick={() => setOpen(false)} to="/" className={linkClass}>
            Home
          </NavLink>

          <NavLink onClick={() => setOpen(false)} to="/all-apps" className={linkClass}>
            Apps
          </NavLink>

          <NavLink onClick={() => setOpen(false)} to="/installation" className={linkClass}>
            Installation
          </NavLink>

          <a
            href="https://github.com/shehad-404"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition mt-6"
          >
            <FaGithub />
            Contribute
          </a>
        </div>
      )}
    </>
  );
}
