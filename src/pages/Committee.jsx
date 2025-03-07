import React from 'react';

const committeeMembers = [
  {
    role: 'Patron(s)',
    members: [
      { name: 'Er. Bhagirath Poonia', affiliation: 'Chairman, Sri Balaji College of Engineering & Technology, Jaipur, Rajasthan, India' },
    ],
  },
  {
    role: 'Co-Patron(s)',
    members: [
      { name: 'Mr. Jagdish Poonia', affiliation: 'Managing Director, Sri Balaji College of Engineering & Technology, Jaipur, Rajasthan, India' },
    ],
  },
  {
    role: 'General Chair(s)',
    members: [
      { name: 'Dr. Ramesh Chandra Poonia', affiliation: 'Christ (Deemed to be University), Delhi-NCR, Ghaziabad, Uttar Pradesh, India' },
      { name: 'Prof. Dharm Singh', affiliation: 'Namibia University of Science and Technology, Namibia' },
      { name: 'Prof.(Dr.) Surendra Singh Choudhary', affiliation: 'Principal, Sri Balaji College of Engineering & Technology, Jaipur, Rajasthan, India' },
    ],
  },
  {
    role: 'Conference Chair(s)',
    members: [
      { name: 'Dr. Mohammad S Khan', affiliation: 'East Tennessee State University, Johnson City, TN' },
      { name: 'Dr. Mario Versaci', affiliation: 'Mediterranea University, Reggio Calabria, Italy' },
      { name: 'Dr. Linesh Raja', affiliation: 'Manipal University Jaipur, India' },
      { name: 'Mr. Shrinath Tailor', affiliation: 'HOD, CSE, Sri Balaji College of Engineering and Technology, Jaipur, India' },
      { name: 'Ms. Anjana Poonia', affiliation: 'HOD, MCA, Sri Balaji College of Engineering and Technology, Jaipur, India' },
    ],
  },
  {
    role: 'Program Chair',
    members: [
      { name: 'Dr. Vijander Singh', affiliation: 'Norwegian University of Science and Technology, Ålesund, Norway' },
      { name: 'Dr. Sandeep Kumar', affiliation: 'Christ (Deemed to be University), Bengaluru, India' },
      { name: 'Dr. Kamal Upreti', affiliation: 'CHRIST (Deemed to be University), Delhi-NCR, Ghaziabad, Uttar Pradesh, India' },
    ],
  },
  {
    role: 'Technical Program Committee',
    members: [
      { name: 'Fr Sunny Joseph', affiliation: 'CHRIST (Deemed to be University), Delhi-NCR, Ghaziabad, Uttar Pradesh, India' },
      { name: 'Dr. Pankaj Agarwal', affiliation: 'Amity University Rajasthan, India' },
      { name: 'Dr. Bosco Paul Alapatt', affiliation: 'CHRIST (Deemed to be University), Delhi-NCR, Ghaziabad, Uttar Pradesh, India' },
      { name: 'Prof. Lakshmi Simhan', affiliation: 'Southern Georgia University, USA' },
      { name: 'Dr. Xiao-Zhi Gao', affiliation: 'University of Eastern Finland, Finland' },
      { name: 'Prof. V. S. Dhaka', affiliation: 'Manipal University Jaipur, India' },
      { name: 'Dr. Janos Arpad Kosa', affiliation: 'John von Neumann University, Kecskemet, Hungary' },
      { name: 'Dr. Tomonobu Senjyu', affiliation: 'University of the Ryukyus, Japan' },
      { name: 'Dr. Debabrata Samanta', affiliation: 'Rochester Institute of Technology, Kosovo, Europe' },
      { name: 'Dr. Mohammad S Khan', affiliation: 'East Tennessee State University, Johnson City, TN' },
      { name: 'Dr. Annamalai Alagappan', affiliation: 'Botho University, Botswana' },
      { name: 'Prof. Reena Dadhich', affiliation: 'Dean & Professor, University of Kota, India' },
      { name: 'Dr. Basant Agarwal', affiliation: 'Central University, Rajasthan, India' },
      { name: 'Dr. Ashish Kr. Luhach', affiliation: 'The PNG University of Technology, Papua New Guinea' },
      { name: 'Dr. Manas Ranjan Patra', affiliation: 'Professor and Head Computer Science, Berhampur University, India' },
      { name: 'Dr. Yasin Kaya', affiliation: 'Adana Alparslan Turkes Science and Technology University, Turkey' },
      { name: 'Dr. Sugam Sharma', affiliation: 'eLegalls, LLC, USA' },
      { name: 'Dr. Ayush Dogra', affiliation: 'CSIR-CSIO(Research Lab- Government of India), Chandigarh, India' },
      { name: 'Dr. Imrus Salehin', affiliation: 'Dongseo University, Busan, South Korea' },
      { name: 'Dr. Vipin Balyan', affiliation: 'Cape Peninsula University of Technology, South Africa' },
      { name: 'Dr. Rohit Verma', affiliation: 'School of Computing, National College of Ireland, Dublin, Ireland' },
      { name: 'Dr. Surender Choudhary', affiliation: 'Sri Balaji College of Engineering and Technology, Jaipur, India' },
      { name: 'Dr. Pankaj Dadheech', affiliation: 'Associate Professor (CSE), Swami Keshvanand Institute of Technology, Management & Gramothan (SKIT), Jaipur, India' },
      { name: 'Dr. Manish Kumar Mishra', affiliation: 'University of the People, USA' },
      { name: 'Prof. B. S. Bhatt', affiliation: 'Department of Mathematics and Statistics, University of the West Indies, Trinidad and Tobago' },
      { name: 'Dr. Sandeep Dalal', affiliation: 'Associate Professor, MDU Rohtak, India' },
      { name: 'Dr. Eva Tuba', affiliation: 'Visiting Assistant Professor, Trinity University, San Antonio, TX; Assistant Professor, Singidunum University, Serbia' },
      { name: 'Dr. Mario Versaci', affiliation: 'Mediterranea University, Reggio Calabria, Italy' },
      { name: 'Dr. Imrus Salehin', affiliation: 'Dongseo University, Busan, South Korea' },
      { name: 'Dr. Mahmoud A. Attia', affiliation: 'Ain Shams University, Egypt' },
      { name: 'Dr. Jaishankar Bharatharaj', affiliation: 'University of the West Indies, Trinidad and Tobago' },
    ],
  },
];

const Committee = () => {
  return (
    <div className="container mx-auto py-12 px-52 pt-24">
      <p className="text-4xl font-bold text-blue-900 text-center">Committee</p>
      <div className="w-16 h-1 bg-blue-900 mx-auto mt-2 mb-8"></div>
      {committeeMembers.map((section, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">{section.role}</h3>
          <div className="space-y-3">
            {section.members.map((member, idx) => (
              <div key={idx} className="p-4 border border-blue-200 rounded-lg shadow-md bg-white">
                <p className="text-lg font-medium text-gray-800">{member.name}</p>
                {member.affiliation && <p className="text-gray-600 text-sm">{member.affiliation}</p>}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Committee;
