import React from "react";
import { Linkedin, GraduationCap } from "lucide-react"; // Importing icons

const speakers = [
  {
    name: "Dr. Mohammad S Khan",
    title: "Director of Network Science and Analysis Lab (NSAL)",
    affiliation: "Department of Computing, East Tennessee State University, Johnson City, TN 37614-1266, USA",
    description: `Dr. Mohammad S. Khan (SM’ 19) is currently an Assistant Professor of Computing at East Tennessee State University and the director of Network Science and Analysis Lab (NSAL). 
      He received his M.Sc. and Ph.D. in Computer Science and Computer Engineering from the University of Louisville, Kentucky, USA, in 2011 and 2013, respectively. 
      His primary area of research is in ad-hoc networks, wireless sensor networks, network tomography, connected vehicles, and vehicular social networks. 
      He currently serves as an associate editor of IEEE Access, IET ITS, IET WSS, Springer's Telecommunication Systems, and Neural Computing and Applications. 
      He has been on technical program committees of various international conferences and technical reviewer of various international journals in his field. 
      He is a senior member of IEEE.`,
    image: "/src/assets/images/DrMohammadSKhan.png",
    linkedin: "https://www.linkedin.com/in/mohammad-s-khan-ph-d-4115a0117/",
    scholar: "https://scholar.google.com/citations?user=ERBiTbwAAAAJ&hl=en",
  },
  {
    name: "Prof. Dr. Mario José Diván",
    title: "Sr. Solutions Architect and Service Lead, IOTG- Intel, USA & Former Full Professor, UNLPam",
    affiliation: "",
    description: `Prof. Mario Diván was born in Santa Rosa (Argentina) on March 10 of 1979. He received an engineering degree in Information Systems from the National Technological University - NTU (Argentina) in 2003, 
      while he holds a specialty in managerial engineering from the NTU (Argentina) in 2004, a specialty in data mining and knowledge discovery in databases from the University of Buenos Aires (Argentina) in 2007, 
      and a specialty on high-performance and grid computing from the National University of La Plata - NULP (Argentina) in 2011. He obtained his Ph.D. in Computer Science in 2012 from the NULP (Argentina). 
      His interest areas lie in data science, data stream, stream mining, high-performance computing, big data, Internet-of-Things, and measurement.`,
    image: "/src/assets/images/ProfDrMarioJoseDivan.png",
    linkedin: "https://www.linkedin.com/in/mjdivan/",
    scholar: "https://scholar.google.com.ar/citations?user=EplVzHwAAAAJ&hl=es",
  },
];

const Speaker = () => {
  return (
    <div className="container mx-auto py-10 px-36 md:px-40 lg:px-20 pt-[100px]">
      <h2 className="text-2xl font-semibold text-center mb-8 text-blue-900">Keynote/Guest Speakers</h2>
      <div className="grid md:grid-rows-1 gap-6">
        {speakers.map((speaker, index) => (
          <div key={index} className="flex flex-col md:flex-row items-start space-x-4 border-b pb-4">
            {/* Fixed width div for image */}
            <div className="w-52 flex justify-center">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="h-auto w-auto rounded-md shadow-sm"
              />
            </div>
            {/* Speaker details */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-blue-800">{speaker.name}</h3>
              <p className="text-gray-700 text-sm">{speaker.title}</p>
              <p className="text-gray-500 text-xs">{speaker.affiliation}</p>
              {speaker.description && (
                <p className="mt-2 text-gray-600 text-sm">{speaker.description}</p>
              )}
              {/* Icons for LinkedIn and Google Scholar */}
              <div className="mt-2 flex space-x-3">
                <a
                  href={speaker.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900 transition duration-200"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={speaker.scholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 transition duration-200"
                >
                  <GraduationCap size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <p className="mt-8 text-blue-900 text-lg font-semibold text-center">Keep checking for updates. . .</p>
      </div>
    </div>
  );
};


export default Speaker;
