import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="w-full bg-linear-to-r from-[#020f1f] to-[#021a33] text-white">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row items-center justify-between border-b border-white/10">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 mb-4 md:mb-0">
          <img src={logo} alt="Hero.IO Logo" className="w-8 h-8" />
          <span className="text-lg font-semibold">HERO.IO</span>
        </Link>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <span className="mr-2 font-medium">Social Links</span> <br />

          <a
            href="https://github.com/shehad-404"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaGithub size={18} />
          </a>

          <a target="_blank"
            href="https://www.linkedin.com/in/shehad-uj-jahan404/"
            className="hover:text-purple-400 transition"
          >
            <FaLinkedinIn size={18} />
          </a>

          <a target="_blank"
            href="https://web.facebook.com/shehad.404"
            className="hover:text-purple-400 transition"
          >
            <FaFacebookF size={18} />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center py-4 text-sm text-white/80">
        Copyright © 2025 – All rights reserved
      </div>

    </footer>
  );
}
