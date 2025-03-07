import React from "react";

const publications = [
  {
    title: "SUSCOM-2025 Special Issue on: Securing the Sustainable Future: Cryptography and Security in AI & IoT",
    journal: "Journal of Discrete Mathematical Sciences & Cryptography (JDMSC)",
    indexing: "Scopus, ESCI (Web of Science) and many more..",
    url: "#",
  },
  {
    title: "SUSCOM-2025 Special Issue on: Sustainable Security - Discrete Mathematics and Cryptography",
    journal: "Journal of Discrete Mathematical Sciences & Cryptography (JDMSC)",
    indexing: "Scopus, ESCI (Web of Science) and many more..",
    url: "#",
  },
  {
    title: "SUSCOM-2025 Special Issue on: Sustainable Interdisciplinary Mathematics: Bridging for a Better Future",
    journal: "Journal of Interdisciplinary Mathematics (JIM)",
    indexing: "Scopus, ESCI (Web of Science) and many more..",
    url: "#",
  },
  {
    title: "SUSCOM-2025 Special Issue on: Sustainable Information Optimization: Advancements and Applications",
    journal: "Journal of Information and Optimization Sciences (JIOS)",
    indexing: "ABDC, ESCI (Web of Science) and many more..",
    url: "#",
  },
  {
    title: "SUSCOM-2026 Special Issue on: Data Analytics for Sustainable Management Systems",
    journal: "Journal of Statistics and Management Systems (JSMS)",
    indexing: "ABDC, ESCI (Web of Science) and many more..",
    url: "#",
  },
];

const Publication = () => {
  return (
    <div className="mx-auto px-52 py-12 pt-[120px]">
      {/* Title */}
      <p className="text-4xl font-bold text-blue-900 text-center">Publications</p>
      <div className="w-16 h-1 bg-blue-900 mx-auto mt-2 mb-8"></div>

      <p className="text-gray-700 text-center mb-8">
        The papers will be peer-reviewed, and only the accepted and registered papers will be presented at the conference. The SUSCOM-2024 Special Issues will be published in SCOPUS/WoS-indexed journals.
      </p>

      {/* Publication List in Rows */}
      <div className="space-y-6">
        {publications.map((pub, index) => (
          <div key={index} className="border-l-4 border-blue-900 pl-4 py-4 bg-white shadow-sm">
            <h3 className="text-lg font-semibold text-blue-900">{pub.title}</h3>
            <p className="text-gray-600 text-sm mt-1 font-medium">{pub.journal}</p>
            <p className="text-gray-500 text-sm">Indexing: {pub.indexing}</p>
            <a
              href={pub.url}
              className="inline-block mt-2 text-blue-900 font-semibold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Journal URL
            </a>
          </div>
        ))}
      </div>

      <p className="mt-10 text-blue-900 text-xl font-bold text-center">More to be updated soon. . .</p>
    </div>
  );
};

export default Publication;
