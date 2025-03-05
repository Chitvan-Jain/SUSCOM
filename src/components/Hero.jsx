import React from "react";
import Logo1 from "../assets/images/Logo1.png";
import Scopus from "../assets/images/scopus.png";
import Journal from "../assets/images/journal.jpg";

const Hero = () => {
  return (
    <div className="min-h-screen bg-white relative flex flex-col items-center justify-center text-center px-6 py-12">
      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Top Logo */}
        <div className="flex justify-center mb-8">
          <img src={Logo1} alt="Conference Logo" className="h-20 object-contain" />
        </div>

        {/* Conference Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-[#1e40af] mb-4">
          International Conference on Sustainable Computing (SUSCOM-2024)
        </h1>

        {/* Organizer Info */}
        <p className="text-lg text-gray-700 mb-1">Organized by</p>
        <p className="text-xl font-semibold text-gray-800 mb-1">Department of Computer Science</p>
        <p className="text-xl font-semibold text-gray-800 mb-4">
          Science and Technology University, UK
        </p>

        {/* Date */}
        <p className="text-xl font-bold text-gray-900 mb-8">October 18 - 20, 2024</p>

        {/* Sponsored by */}
        <p className="text-lg text-gray-700 mb-1">Sponsored by</p>
        <p className="text-xl font-semibold text-gray-800 mb-1">Department of Science & Innovation</p>
        <p className="text-xl font-semibold text-gray-800 mb-8">
          Engineering and Research Council, UK
        </p>

        {/* Partners Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Publication Partners */}
          <div className="flex flex-col items-center">
            <div className="flex gap-6 items-center justify-center mb-2">
              <div className="text-center">
                <img src={Scopus} alt="Springer" className="h-24 object-contain mb-2" />
                <span className="text-[#1e40af] font-bold text-xl">Springer</span>
              </div>
            </div>
            <p className="text-lg font-bold text-gray-700 uppercase">Publication Partner</p>
          </div>

          {/* Proceedings Publication */}
          <div className="flex flex-col items-center">
            <img src={Journal} alt="Proceedings Publication" className="h-36 object-contain mb-2" />
            <p className="text-lg font-bold text-gray-700 uppercase">Proceedings Publication</p>
          </div>
        </div>

        {/* Academic Partners */}
        <div className="mt-12">
          <p className="text-lg font-bold text-gray-700 uppercase mb-4">Academic Partners</p>
          <div className="flex flex-wrap justify-center gap-8">
            <img src={Scopus} alt="Academic Partner 1" className="h-20 object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
