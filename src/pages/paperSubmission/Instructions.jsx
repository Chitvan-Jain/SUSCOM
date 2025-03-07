import React from 'react';

const Instructions = () => {
  return (
    <div className="mt-24 px-52 py-6 bg-white text-gray-900">
      <h1 className="text-4xl font-bold text-center mb-4 text-blue-900">Instruction for Authors</h1>
      <div className="w-20 h-1 bg-blue-900 mx-auto mt-2 mb-8"></div>

      <p>
        International Conference on Smart Cyber Physical Systems (ICSCPS-2024) invites original research contribution from different fields as mentioned in topics provided that the context of the work is clearly explained. Papers must be submitted on or before the last date of paper submission. After this deadline, you will not be able to register new papers, however, you will be able to edit the information of existing submitted papers.
      </p>
      
      <h2 className="text-xl font-semibold mt-4 text-blue-900">Submission Guidelines:</h2>
      <p>
        All submissions will be handled electronically using Microsoft’s CMT platform. Authors are hereby instructed not to submit any paper via emails directly. By submitting a paper, the authors agree to the policies of ICSCPS-2024. It is the primary author’s responsibility to add the details of all authors (e.g., co-authors) of the paper to the CMT portal so that essential updates about your papers can be sent to all authors. Once you submit your paper, you will be assigned a unique paper ID. Please remember this paper ID and quote that ID in all further communications.
      </p>
      
      <h2 className="text-xl font-semibold mt-4 text-blue-900">Article Types:</h2>
      <p>Articles with novel research contributions on the theme of the conference should be submitted to ICSCPS-2024. Review/ Survey articles are not encouraged.</p>
      
      <h2 className="text-xl font-semibold mt-4 text-blue-900">Language Style:</h2>
      <p>The default language style is standard English. Authors should submit manuscripts in English only.</p>
      
      <h2 className="text-xl font-semibold mt-4 text-blue-900">Manuscript Preparation Guidelines:</h2>
      <ul className="list-disc pl-6">
        <li>Title: First letter of each word except helping verbs and connectors should be uppercase.</li>
        <li>Avoid first/second/third person (our, me, us, I, etc.).</li>
        <li>Proofread the paper for English usage (preferably by a native speaker).</li>
        <li>Abbreviations should be avoided in the abstract.</li>
        <li>Include high-resolution figures (DPI above 500). Blurred images are not allowed.</li>
        <li>Content should be well-organized with Title, Objective, Research Gap, Proposed Methodology, and Results aligned.</li>
        <li>Motivation and paper organization should be included at the end of the introduction section.</li>
        <li>All images and tables must be numbered with suitable captions.</li>
        <li>Do not paste tables as images/snapshots.</li>
        <li>All equations must be numbered sequentially and discussed in the text.</li>
        <li>Ensure all images, tables, equations, and references are cited in the text.</li>
        <li>Include 5 to 8 keywords in the manuscript.</li>
        <li>Expand abbreviations upon first usage; avoid non-standard abbreviations.</li>
        <li>Sections and subsections must be numbered appropriately, with a maximum of 3 heading levels.</li>
        <li>Acknowledgements (if any) should be included after the conclusion.</li>
        <li>Ensure author names and order are identical in all places (Manuscript, Submission Portal, and Consent to Publish form).</li>
        <li>Include the name, affiliation, and email of all authors in both the manuscript and submission portal. Specify the corresponding author.</li>
        <li>Provide a novel and substantial conclusion supported by statistical remarks.</li>
        <li>Ensure references are complete and properly cited. Avoid incomplete references.</li>
        <li>Download the Word/LaTeX template from the provided link and submit your manuscript within the 10-page limit.</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-4 text-blue-900">Confidentiality:</h2>
      <p>The review process will be strictly confidential. Any misuse of confidential information will result in disciplinary action.</p>
      
      <h2 className="text-xl font-semibold mt-4 text-blue-900">Review Process:</h2>
      <p>Papers will undergo a single-blind peer review and plagiarism check (preferably via Turnitin). Revised manuscripts must incorporate reviewer comments.</p>
      
      <h2 className="text-xl font-semibold mt-4 text-blue-900">Plagiarism:</h2>
      <p>Papers with more than 18% similarity will be rejected. A single source must not exceed 2% similarity.</p>
      
      <h2 className="text-xl font-semibold mt-4 text-blue-900">Dual/Double Submissions:</h2>
      <p>Submitted manuscripts must not be previously published or under consideration elsewhere. Overlapping submissions will be rejected.</p>
      
      <h2 className="text-xl font-semibold mt-4 text-blue-900">Attendance Responsibilities:</h2>
      <p>At least one author must register and present the paper at the conference for it to be included in the proceedings.</p>
      
      <h2 className="text-xl font-semibold mt-4 text-blue-900">Publication:</h2>
      <p>Accepted and presented papers will be submitted to SCOPUS-indexed proceedings. Corresponding authors will receive proofs before final publication.</p>
    </div>
  );
};

export default Instructions;
