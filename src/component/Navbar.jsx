import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
    return (
        <header className="w-full bg-white shadow mx-0">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-8  py-4">

                {/* Logo */}
                <NavLink to="/" className="flex items-center gap-2">
                    <img
                        src={logo}
                        alt="Hero.IO Logo"
                        className="w-8 h-8"
                    />
                    <span className="text-xl font-bold text-purple-600">
                        HERO.IO
                    </span>
                </NavLink>

                {/* Navigation */}
                <nav className="flex gap-6 font-medium">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-purple-600" : "text-gray-600 underline-offset-0"
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/all-apps"
                        className={({ isActive }) =>
                            isActive ? "text-purple-600" : "text-gray-600"
                        }
                    >
                        Apps
                    </NavLink>

                    <NavLink
                        to="/installation"
                        className={({ isActive }) =>
                            isActive ? "text-purple-600" : "text-gray-600"
                        }
                    >
                        Installation
                    </NavLink>
                </nav>

                {/* Contribute Button */}
                <a
                    href="https://github.com/shehad-404"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
                >
                    <FaGithub className="text-lg" />
                    Contribute
                </a>


            </div>
        </header>
    )
}
