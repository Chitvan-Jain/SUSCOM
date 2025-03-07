import React from 'react';

const SubmissionForm = () => {
  return (
    <div className="px-6 py-10 mt-14">
      <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">Paper Submission</h2>
      <div className="w-20 h-1 bg-blue-900 mx-auto mt-2 mb-8"></div>


      <p className="text-gray-700 mb-4">
        The authors are invited to submit the full-length Research/Review Papers. The papers will be peer-reviewed, and only the accepted and registered papers will be considered for presentation during the conference and publication in the proceedings.
      </p>

      <p className="text-red-600 font-semibold mb-4">
        NOTE: Acceptance of a full-length submission is strictly based on the reviewers’ comments.
      </p>

      <p className="text-gray-700 mb-2">
        All submissions need to be submitted through the CMT using the link:
      </p>
      
      <a 
        href="https://cmt3.research.microsoft.com/ICSCPS2024" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-900 font-medium underline hover:text-blue-700">
        https://cmt3.research.microsoft.com/ICSCPS2024
      </a>

      <p className="text-gray-700 mt-4">
        At least one of the authors of an accepted paper needs to register for the conference and present the paper(s) through an offline mode presentation.
      </p>

      <h3 className="text-2xl font-semibold text-blue-900 mt-6">Templates</h3>
      <p className="text-gray-700">
        All manuscripts should be prepared in the following Springer's Book Chapter template.
      </p>

      <p className="text-red-600 font-semibold mt-2">
        Precaution: Authors are advised to take care of the technical language used in the manuscript and refrain from using words that are prohibited at national and international levels.
      </p>

      <div className="mt-4">
        <a 
          href="#" 
          className="text-blue-900 font-medium underline hover:text-blue-700">
          Word Template Download
        </a>
      </div>

      <div className="mt-2">
        <a 
          href="#" 
          className="text-blue-900 font-medium underline hover:text-blue-700">
          LaTeX Template Download
        </a>
      </div>
    </div>
  );
};

export default SubmissionForm;
