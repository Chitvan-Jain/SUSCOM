import React from "react";
import logo from '../assets/images/CollegeLogo.png';
const Footer = () => {
  return (
    <footer className="bg-[#002855] text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between">
        {/* Contact Information */}
        <div className="md:w-1/3 mb-6 md:mb-0">
        <img src={logo} className="h-25 w-auto" alt="College Logo"/>
          <h2 className="text-lg font-bold">Sri Balaji College of Engineering & Technology</h2>
          <p className="mt-2">Via Dadi Ka Phatak, Benar Rd, Shankar Vihar Extension, Jamna Puri, Jaipur, Rajasthan 302013</p>
          <p className="mt-2">Phone: +91-141-2972260, 2972261</p>
          <p>Fax: +91-141-2980122</p>
        </div>



        {/* Map Section */}
        <div className="md:w-1/3">
          <h2 className="text-lg font-bold">Locate Us</h2>
          <div className="mt-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.2154665712287!2d75.74183217597357!3d26.99173305668927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db350761f1159%3A0xf255729ed0322618!2sSri%20balaji%20College%20of%20engineering%20and%20technology!5e0!3m2!1sen!2sin!4v1741191228822!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className=" text-sm mt-6 border-t border-gray-500 pt-4">
      <span className="ml-20">Copyright © SUSCOM 2025. All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
