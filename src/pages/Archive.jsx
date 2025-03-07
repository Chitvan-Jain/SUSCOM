import React from "react";

const conferenceData = [
  {
    year: "2024",
    papersReceived: 460,
    accepted: 120,
    acceptedPercentage: 26,
    rejected: 340,
    presented: 120,
    publicationDetails: "120 research papers were published in Scopus/ESCI/Web of Science Indexed journals SI.",
    link:"https://scienceandtech.co.uk/conferences/suscom/2024/index.php"
  },
  {
    year: "2022",
    papersReceived: 365,
    accepted: 65,
    acceptedPercentage: 18,
    rejected: 300,
    presented: 65,
    publicationDetails: "65 research papers were published in Scopus/ESCI/Web of Science Indexed T&F journals.",
    link:"https://scienceandtech.co.uk/conferences/suscom/2022/index.php"

  },
  {
    year: "2021",
    papersReceived: 350,
    accepted: 75,
    acceptedPercentage: 21.4,
    rejected: 275,
    presented: 70,
    publicationDetails: "75 research papers were published in Advances in Intelligent Systems and Computing (AISC) Springer.",
    link:"https://scienceandtech.co.uk/conferences/suscom/2021/index.php"

  },
  {
    year: "2020",
    papersReceived: 502,
    accepted: 190,
    acceptedPercentage: 37.8,
    rejected: 312,
    presented: 190,
    publicationDetails: "190 research papers were published in Scopus/ESCI/Web of Science Indexed T&F journals.",
    link:"https://scienceandtech.co.uk/conferences/suscom/2020/index.php"

  },
  {
    year: "2019",
    papersReceived: 857,
    accepted: 360,
    acceptedPercentage: 42,
    rejected: 497,
    presented: 310,
    publicationDetails: "SSRN-Elsevier Digital Library (https://hq.ssrn.com/conference=SUSCOM-2019)",
    link:"https://scienceandtech.co.uk/conferences/suscom/2019/index.php"

  },
];

const Archive = () => {
  return (
    <div className="mt-24 px-52 mx-auto">
      {/* Title */}
      <p className="text-4xl font-bold text-blue-900 text-center">Archive</p>
      <div className="w-12 h-1 bg-blue-900 mx-auto mt-2 mb-8"></div>
      <p className="text-gray-700 text-sm mb-6">The details of previous international conference 'SUSCOM' are provided below.</p>

      {/* Conference Data */}
      {conferenceData.map((conf) => (
        <div key={conf.year} className="mb-8 bg-gray-100 p-4 rounded-md shadow-sm">
          {/* Conference Year Title */}
          <h2 className="text-lg font-semibold text-blue-900">SUSCOM-{conf.year}</h2>
          <div className="w-16 h-1 bg-blue-900 mt-1 mb-3"></div>

          {/* Table */}
          <table className="w-full border border-gray-300 rounded-md overflow-hidden shadow-sm text-sm">
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="p-2 bg-blue-50 font-medium">Research Papers Received</td>
                <td className="p-2 text-right">{conf.papersReceived}</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="p-2 bg-blue-50 font-medium">Accepted</td>
                <td className="p-2 text-right">{conf.accepted}</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="p-2 bg-blue-50 font-medium">Accepted %</td>
                <td className="p-2 text-right">{conf.acceptedPercentage}</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="p-2 bg-blue-50 font-medium">Rejected Articles</td>
                <td className="p-2 text-right">{conf.rejected}</td>
              </tr>
              <tr>
                <td className="p-2 bg-blue-50 font-medium">Presented Articles</td>
                <td className="p-2 text-right">{conf.presented}</td>
              </tr>
            </tbody>
          </table>

          {/* Conference Publication Details */}
          <p className="mt-2 text-gray-700 text-sm">Conference Publication Details: {conf.publicationDetails}</p>

          {/* Button */}
          <a href={conf.link} target="_blank" rel="noopener noreferrer">
            <button className="mt-3 bg-blue-900 text-white text-sm font-medium px-4 py-1.5 rounded-md hover:bg-blue-800 transition duration-200">
              SUSCOM-{conf.year}
            </button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Archive;
