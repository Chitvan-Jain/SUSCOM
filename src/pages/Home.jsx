import React from "react";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="max-w-5xl mx-auto py-12 px-6">
        {/* Title */}
        <h2 className="text-3xl font-bold text-blue-900">About Conference</h2>
        <div className="w-20 border-b-4 border-blue-900 my-2"></div>

        {/* Description */}
        <p className="text-gray-700 text-justify mt-4">
          The International Conference on Sustainable Computing (SUSCOM-2025) aims to bring together researchers, scholars, and industry professionals
          to discuss and exchange knowledge on sustainable computing. This conference serves as a platform to explore innovative ideas, cutting-edge
          technologies, and emerging trends in sustainable computing and management.
        </p>

        <p className="text-gray-700 text-justify mt-4">
          The conference will focus on the societal and economic impact of sustainable computing. Topics include AI-driven sustainability, cloud
          computing's role in sustainable solutions, and advancements in data science for environmental efficiency. Experts will present research on
          AI applications in the energy sector, trends in machine learning, and intelligent system development.
        </p>

        <p className="text-gray-700 text-justify mt-4">
          SUSCOM-2025 offers a unique opportunity for participants to present their research in technical sessions and engage in interdisciplinary
          networking. The event will feature keynote talks from industry leaders and experts, covering the latest trends and future opportunities in
          sustainable computing.
        </p>
      </div>
    {/* Third section */}
    <div className="max-w-5xl mx-auto py-12 px-6">
      {/* Paper Submissions Section */}
      <h2 className="text-3xl font-bold text-gray-900">
        Paper <span className="text-blue-900">Submissions</span>
      </h2>
      <div className="w-20 border-b-4 border-blue-900 my-2"></div>
      <button className="bg-blue-900 text-white px-6 py-2 mt-4 rounded hover:bg-blue-800 transition">
        Submit Your Paper
      </button>

      {/* Doctoral Symposium Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-blue-900">
          Doctoral <span className="text-blue-900">Symposium</span>
        </h2>
        <div className="w-20 border-b-4 border-blue-900 my-2"></div>
        <p className="text-gray-700 text-justify mt-4">
          The SUSCOM-2025 will organize a one-day pre-conference doctoral symposium.
        </p>
        <button className="bg-blue-900 text-white px-6 py-2 mt-4 rounded hover:bg-blue-800 transition">
          Submit Your Paper
        </button>
      </div>

      {/* Paper Publications Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-gray-900">
          Paper <span className="text-blue-900">Publications</span>
        </h2>
        <div className="w-20 border-b-4 border-blue-900 my-2"></div>
        <p className="text-gray-700 text-justify mt-4">
          The papers will be peer-reviewed, and only accepted and registered papers will be considered for presentation during the conference. The SUSCOM-2025 Special Issues will be published in SCOPUS/WoS indexed journals.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Home;
