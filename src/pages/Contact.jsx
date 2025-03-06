"use client";
import React from "react";
import { useState } from "react";
import contactBG from "../assets/images/contactBG.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    affiliation: "",
    email: "",
    country: "",
    subject: "",
    message: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add form submission logic (e.g., send data to backend)
  };

  return (
<div
  className="h-screen flex items-center justify-center bg-cover bg-center relative px-4 sm:px-6"
  style={{
    backgroundImage: `url(${contactBG})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>

  <div className="relative w-full max-w-4xl md:max-w-3xl mx-auto lg:mt-20 flex flex-col md:flex-row shadow-2xl rounded-xl overflow-hidden">
    {/* Left Section - Contact Info */}
    <div className="w-full md:w-5/12 p-5 sm:p-8 md:p-6 lg:p-10 flex flex-col justify-center bg-gradient-to-br from-blue-900/90 to-blue-800/80 text-white backdrop-blur-sm">
      <h2 className="text-xl sm:text-2xl md:text-xl lg:text-3xl font-bold mb-4 border-b border-blue-400/30 pb-2 md:pb-3">
        Get in Touch
      </h2>
      <p className="text-sm sm:text-base md:text-sm lg:text-lg leading-relaxed text-blue-50">
        Thank you for your interest in the SUSCOM conference. Please provide the following information to help us serve you better. We'll respond within 48 hours.
      </p>

      <div className="mt-5 space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-blue-700/50 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <p className="text-xs sm:text-sm text-blue-200">Email</p>
            <a href="mailto:suscom.test@gmail.in" className="text-sm md:text-xs text-white hover:text-blue-300 transition-colors">
              suscom.test@gmail.in
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-blue-700/50 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <p className="text-xs sm:text-sm text-blue-200">Location</p>
            <p className="text-sm md:text-xs text-white">Sri Balaji, Jaipur, India</p>
          </div>
        </div>
      </div>
    </div>

    {/* Right Section - Contact Form */}
    <div className="bg-white w-full md:w-7/12">
      <div className="p-5 sm:p-8 md:p-6 lg:p-10 h-full flex flex-col justify-center">
        <h2 className="text-xl sm:text-2xl md:text-xl lg:text-3xl font-bold mb-4 text-gray-800">
          Send a Message
        </h2>
        <form onSubmit={handleSubmit} className="w-full space-y-4 sm:space-y-5">
          {/* Name & Affiliation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label className="block text-xs sm:text-sm md:text-xs font-medium text-gray-600">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border-b-2 border-gray-300 px-3 py-1.5 text-xs sm:text-sm md:text-xs focus:outline-none focus:border-blue-600 bg-gray-50"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm md:text-xs font-medium text-gray-600">Affiliation</label>
              <input
                type="text"
                name="affiliation"
                value={formData.affiliation}
                onChange={handleChange}
                required
                className="w-full border-b-2 border-gray-300 px-3 py-1.5 text-xs sm:text-sm md:text-xs focus:outline-none focus:border-blue-600 bg-gray-50"
                placeholder="University / Organization"
              />
            </div>
          </div>

          {/* Email & Country */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label className="block text-xs sm:text-sm md:text-xs font-medium text-gray-600">Email ID</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-b-2 border-gray-300 px-3 py-1.5 text-xs sm:text-sm md:text-xs focus:outline-none focus:border-blue-600 bg-gray-50"
                placeholder="example@domain.com"
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm md:text-xs font-medium text-gray-600">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full border-b-2 border-gray-300 px-3 py-1.5 text-xs sm:text-sm md:text-xs focus:outline-none focus:border-blue-600 bg-gray-50"
                placeholder="Your Country"
              />
            </div>
          </div>

          {/* Subject & Message */}
          <div>
            <label className="block text-xs sm:text-sm md:text-xs font-medium text-gray-600">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full border-b-2 border-gray-300 px-3 py-1.5 text-xs sm:text-sm md:text-xs focus:outline-none focus:border-blue-600 bg-gray-50"
              placeholder="Inquiry Subject"
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm md:text-xs font-medium text-gray-600">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 text-xs sm:text-sm md:text-xs focus:outline-none focus:border-blue-600 bg-gray-50"
              placeholder="Write your message here..."
              rows="3"
            ></textarea>
          </div>

          <button className="w-full bg-blue-700 text-white rounded-lg px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-medium hover:bg-blue-800 transition-all mt-2">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</div>

  );
};

export default Contact;
