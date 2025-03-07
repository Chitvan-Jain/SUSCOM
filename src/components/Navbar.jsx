import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Logo from "../assets/images/Logo2.png";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const NavLink = ({ to, children, dropdown }) => (
    <div
      className="relative group"
      onMouseEnter={() => dropdown && setActiveDropdown(dropdown)}
      onMouseLeave={() => dropdown && setActiveDropdown(null)}
    >
      <Link
        to={to}
        className="relative text-black hover:text-blue-900 px-3 py-2 text-xs font-medium inline-flex items-center"
      >
        {children}
        {dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
      </Link>
      {dropdown && (
        <DropdownMenu isActive={activeDropdown === dropdown}>
          {dropdowns[dropdown].items.map((item, index) => (
            <DropdownItem key={index} to={item.to}>
              {item.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </div>
  );

  const DropdownMenu = ({ isActive, children }) => (
    <div
      className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg transition-all duration-200 ${
        isActive ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
      }`}
      onMouseEnter={() => setActiveDropdown(activeDropdown)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="py-2">{children}</div>
    </div>
  );

  const DropdownItem = ({ to, children }) => (
    <Link to={to} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-900 transition-all">
      {children}
    </Link>
  );

  const dropdowns = {
    paperSubmission: {
      name: "Paper Submission",
      items: [
        { label: "Instruction for Authors", to: "/instructions" },
        { label: "Call for Papers", to: "/call-for-papers" },
        { label: "Important Dates", to: "/dates" },
        { label: "Submission Form", to: "/form" },
        { label: "Registration", to: "/registration" },
        { label: "Publication", to: "/publication" },
      ],
    },
    venue: {
      name: "Venue",
      items: [
        { label: "Conference Venue", to: "/conference-venue" },
        { label: "Transportation", to: "https://sbcet.sbss.ac.in/reach-sbcet/", external: true },
        { label: "VISA", to: "/visa" },
      ],
    },
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-black shadow-md w-full">
      <div className="flex items-center mx-10 h-20 justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} className="w-auto h-20 mr-3" alt="Juris Maximo Logo" />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/speakers">Speakers</NavLink>
          <NavLink to="/committee">Committee</NavLink>
          <NavLink to="/archive">Archive</NavLink>
          <NavLink to="/pre-workshop">Pre Workshop Conference</NavLink>
          <NavLink to="/schedule">Conference Schedule</NavLink>
          <NavLink to="/call-for-sponsors">Call for Sponsor</NavLink>
          <NavLink to="#" dropdown="paperSubmission">
          Paper Submission
          </NavLink>
          <NavLink to="#" dropdown="venue">
            Venue
          </NavLink>
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
