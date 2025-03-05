import React from "react";

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
    linkedin: "https://www.linkedin.com/in/mohammad-s-khan/",
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
    linkedin: "https://www.linkedin.com/in/mario-jose-divan/",
  },
  
];

const Speaker = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Keynote/Guest Speakers</h2>
      <div className="grid md:grid-rows-1 gap-8">
        {speakers.map((speaker, index) => (
          <div key={index} className="flex items-start space-x-6 border-b pb-6">
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-28 h-28 object-cover rounded-lg shadow-md"
            />
            <div>
              <h3 className="text-xl font-bold text-blue-800">{speaker.name}</h3>
              <p className="text-gray-700">{speaker.title}</p>
              <p className="text-gray-500 text-sm">{speaker.affiliation}</p>
              {speaker.description && (
                <p className="mt-2 text-gray-600 text-sm">{speaker.description}</p>
              )}
              <a
                href={speaker.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-semibold mt-2 inline-block"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speaker;
