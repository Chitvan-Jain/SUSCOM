import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo2.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-black shadow-md w-full">
      <div className="flex items-center mx-10 h-20 justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} className="w-auto h-20 mr-3" alt="Juris Maximo Logo" />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-4">
          {[
            { name: "Home", path: "/" },
            { name: "Archive", path: "/archive" },
            { name: "Call For Paper", path: "/call-for-paper" },
            { name: "Committee", path: "/committee" },
            { name: "Publication", path: "/publication" },
            { name: "Registration", path: "/registration" },
            { name: "Speakers", path: "/speakers" },
          ].map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative text-black px-3 py-2 text-sm font-medium transition-all duration-300 
                         hover:text-blue-900 after:content-[''] after:absolute after:left-0 after:bottom-0 
                         after:w-0 after:h-[2px] after:bg-blue-900 after:transition-all after:duration-300 
                         hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <div className="flex">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-sm font-medium 
                      text-white bg-blue-900 rounded-full hover:bg-blue-800 hover:scale-105 focus:outline-none 
                      focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
