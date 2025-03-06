import React, { useState } from "react";
import { motion } from "framer-motion";

const tracks = [
  {
    title: "Computational Intelligence",
    subtopics: [
      "Information Security",
      "Natural Language Processing",
      "Language Technologies and Information Retrieval",
      "Computer Systems Organization and Communication Networks",
      "Information Systems and Communication Service",
      "Software Engineering and Operating Systems",
      "Management of Computing and Information System",
      "Green IT",
      "Eco-Friendly Materials",
      "Cloud and Grid Computing",
      "Re-Cycling and Disposal of E-Waste",
      "Environmental Footprint",
      "Awareness Drive",
      "Energy-Efficient Data Center Design",
      "Telecommuting",
      "Mobile Computing",
      "Application Security",
    ],
  },
  {
    title: "Computational Intelligence and Machine Learning",
    subtopics: [
      "Optimization Techniques",
      "System Modeling and Simulation",
      "Fuzzy System",
      "Evolutionary Computational Methods",
      "Artificial Neural Network",
      "Bayesian Learning",
      "Hybrid Intelligent Systems",
      "Soft Computing",
      "Smart Computing",
      "Big-Data",
      "Data Mining",
      "Signals",
      "Image And Video Processing",
      "Robotics & Computer Vision",
      "Peer-To-Peer Computing",
    ],
  },
  {
    title: "Embedded Systems and VLSI Design",
    subtopics: [
      "Embedded Architectures",
      "Software and Hardware",
      "Embedded Cybersecurity and Cryptography",
      "Real-Time Operating Systems",
      "Microcontrollers and Applications",
      "Embedded Machine Learning",
      "Deep Learning and Artificial Intelligence",
      "Internet of Things (IoT)",
      "Medical Electronics",
      "Blockchain Technology",
      "Drones",
      "Smart Homes and Devices",
      "Role of Electronics in Efficiency Enhancement",
      "Automotive and Industrial Applications",
      "Automation and Control",
      "System on Chip (SOC) and Semiconductor Technology",
      "From Industry 4.0 to Industry 5.0",
      "Smart Manufacturing Systems, Smart Factories",
      "Intelligent Logistics",
    ],
  },
  {
    title: "Advances in Intelligent Computing, Sustainable Engineering Systems, and Practices",
    subtopics: [
      "Ambient Intelligence",
      "Computational Neuroscience",
      "Artificial Life",
      "Virtual Worlds and Society",
      "Cognitive Science and Systems",
      "Self-Organizing and Adaptive Systems",
      "E-Learning and Teaching",
      "Recommender Systems",
      "Knowledge-Based Paradigms",
      "Smart Engineering Solutions for Waste Management",
      "Sustainable Architecture",
      "Data Analytics",
      "AI in Industry",
      "Smart Grid Technologies",
      "Power Electronics",
      "Energy Storage",
      "Demand Control And Response",
    ],
  },
];

const CallForPaper = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleTrack = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto py-12 px-52 pt-24">
      {/* Call for Papers Section */}
      <p className="text-4xl font-bold text-blue-900 text-center">Call for Paper</p>
      <div className="w-16 h-1 bg-blue-900 mx-auto mt-2 mb-8"></div>
      <p className="text-gray-700 mt-2">
        The conference will focus on the social and economic impact of sustainable computing. Sub-topics covered in this section include applying AI
        to sustainability, benefits of sustainable computing, and the impact of cloud computing on sustainability. The conference will explore
        artificial intelligence and machine learning, AI applications in the energy sector, trends in AI & machine learning, and the development of
        intelligent systems. Finally, the conference will focus on data science and digital twin applications in sustainability, including data-driven
        solutions and the role of data science in sustainability.
      </p>
      {/* Submit Your Paper Button */}
      <button className="mt-6 bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-300">
        Submit Your Paper
      </button>
      <p className="mt-10 text-blue-900 text-lg font-bold">Topics include, but are not limited to, the following:</p>

      {/* List of Tracks */}
      <h3 className="mt-5 text-2xl font-bold text-blue-900">List of Tracks:</h3>
      <div className="mt-4 space-y-2">
        {tracks.map((track, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-md">
            <button
              className="w-full text-left p-4 bg-blue-900 text-white font-semibold flex justify-between items-center rounded-lg hover:bg-blue-800 transition duration-300"
              onClick={() => toggleTrack(index)}
            >
              <span>
                Track {index + 1}: {track.title}
              </span>
              <span
                className="text-lg transition-transform duration-300 transform"
                style={{ transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                ⌄
              </span>
            </button>
            {openIndex === index && (
              <motion.ul
                className="px-8 py-3 bg-white space-y-2"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {track.subtopics.map((subtopic, subIndex) => (
                  <li key={subIndex} className="text-gray-700 pl-2 list-disc relative">
                    {subtopic}
                    {subIndex !== track.subtopics.length - 1 && <div className="border-dotted border-gray-300 border-t mt-2"></div>}
                  </li>
                ))}
              </motion.ul>
            )}
          </div>
        ))}
      </div>

      {/* Review Process Section */}
      <p className="mt-10 text-2xl font-bold text-blue-900">Review Process</p>
      <ul className="mt-2 text-gray-700 list-disc pl-6 space-y-2">
        <li>All submitted papers will be reviewed by at least 2 independent reviewers.</li>
        <li>All papers will go through a plagiarism checker. Plagiarism report must not exceed 20%.</li>
        <li>All papers must be formatted according to the given template (Springer SIST).</li>
        <li>Acceptance is based on originality, significance, technical soundness, and clarity.</li>
        <li>Authors must submit previously unpublished papers to this conference.</li>
      </ul>

      {/* Awards & Participation Section */}
      <p className="mt-10 text-2xl font-bold text-blue-900">Awards & Participation</p>
      <ul className="mt-2 text-gray-700 list-disc pl-6 space-y-2">
        <li>All accepted papers that are presented will be awarded a presentation certificate.</li>
        <li>The Best Paper certificate will be awarded based on reviewers' comments.</li>
      </ul>

      {/* SI Details Notice */}
      <p className="mt-10 text-blue-900 text-lg font-bold">SI details to be updated soon...</p>
    </div>
  );
};

export default CallForPaper;
