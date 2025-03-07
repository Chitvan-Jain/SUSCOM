import React from "react";
import Logo1 from "../assets/images/Logo1.png";
import Scopus from "../assets/images/scopus.png";
import Journal from "../assets/images/journal.jpg";

const Hero = () => {
  return (
    <div className="h-[calc(100vh-80px)] mt-14 bg-white relative flex flex-col items-center justify-center text-center px-6 py-10">
      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center">
        {/* Top Logo */}
        <div className="mb-4">
          <img src={Logo1} alt="Conference Logo" className="h-16 object-contain" />
        </div>

        {/* Conference Title */}
        <h1 className="text-xl md:text-2xl font-bold text-[#1e40af] mb-2 leading-tight">
          International Conference on Sustainable Computing (SUSCOM-2024)
        </h1>

        {/* Organizer Info */}
        <p className="text-sm text-gray-700">Organized by</p>
        <p className="text-lg font-semibold text-gray-800">Sri Balaji College of Engineering & Technology, Jaipur</p>
        <p className="text-lg font-semibold text-gray-800 mb-2">
        Rajasthan, India
        </p>

        {/* Date */}
        <p className="text-lg font-bold text-gray-900 mb-4">June 26 - 27, 2025</p>
      </div>
    </div>
  );
};

export default Hero;
