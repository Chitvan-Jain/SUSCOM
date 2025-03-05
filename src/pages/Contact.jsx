import React, { useState } from "react";
import contactBG from "../assets/images/contactBG.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    affiliation: "",
    email: "",
    phone: "",
    country: "",
    subject: "",
    message: "",
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
      className="mt-20 min-h-[calc(100vh-80px)] flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${contactBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for transparency effect */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative w-full max-w-6xl flex flex-col md:flex-row shadow-lg rounded-md overflow-hidden">
        {/* Left Section - Info */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center text-white">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg">
          Thank you for your interest in the SUSCOM conference. Please provide the following information about your needs to help us serve you better. This information will enable us to route your request to the appropriate person. You should receive a response within 48 hours.
          </p>
          <p className="mt-4">
            For any queries, contact:{" "}
            <a
              href="mailto:icscps.ncr@christuniversity.in"
              className="text-blue-300 underline"
            >
              icscps.ncr@christuniversity.in
            </a>
          </p>
        </div>

        {/* Right Section - Form */}
        <div className="w-full md:w-1/2 bg-white p-10">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Affiliation <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="affiliation"
                  value={formData.affiliation}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Country <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="px-5 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-all"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
