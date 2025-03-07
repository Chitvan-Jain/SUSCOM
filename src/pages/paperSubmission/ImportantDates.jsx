import React from 'react';

const ImportantDates = () => {
  const dates = [
    { event: 'Call for Papers', date: 'March 01, 2025' },
    { event: 'Last Date for Paper Submission', date: 'May 30, 2025' },
    { event: 'Notification of Accepted Papers', date: 'June 15, 2025' },
    { event: 'Last Date for Camera-Ready Papers', date: 'June 20, 2025' },
    { event: 'Last Date of Registration', date: 'June 20, 2025' },
    { event: 'Date of Conference', date: 'June 26 - 27, 2025' },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-1/2 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-blue-900 text-center mb-4">Important Dates</h2>
      <div className="w-20 h-1 bg-blue-900 mx-auto mt-2 mb-8"></div>

        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-900 text-white">
              <th className="border border-gray-300 px-4 py-2 text-left">Event</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {dates.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{item.event}</td>
                <td className="border border-gray-300 px-4 py-2 text-blue-900 font-semibold">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ImportantDates;
