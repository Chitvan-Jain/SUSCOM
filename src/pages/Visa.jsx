import React from 'react';

const Visa = () => {
  return (
    <div className="mt-24 px-52 pb-10">
      <h2 className="text-3xl font-bold text-blue-900 mb-2 text-center">VISA</h2>
      <div className="w-5 h-1 bg-blue-900 mx-auto mb-8"></div>

      <p className="text-gray-700 mb-4">
        For visa information, please visit{' '}
        <a
          href="#"
          className="text-blue-900 font-medium underline hover:text-blue-700"
        >
          Visitor Supporting Documents
        </a>
        , Ministry of Home Affairs, Government of India. Please email for support at{' '}
        <a
          href="mailto:icscps.ncr@christuniversity.in"
          className="text-blue-900 font-medium underline hover:text-blue-700"
        >
          icscps.ncr@christuniversity.in
        </a>{' '}
        to request a visa invitation letter so that you can print and use it for obtaining a visa. Obtaining a Visa Support Letter from ICSCPS-2024 Conference will not guarantee that your India visa application will be approved. The letter is merely supplementary information that explains a visa applicant's intended purpose of travel to India.
      </p>

      <p className="text-gray-900 font-semibold mb-2">
        For security purposes, the conference has a policy for issuing official Visa Support Letters as follows:
      </p>

      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Visa Support Letters will be issued only after you have successfully registered and paid for your conference.</li>
        <li>Visa Support Letters can only be issued for the person registered to attend the conference in the form of a participant, author, chair, or speaker.</li>
        <li>Unfortunately, we cannot issue Visa Support Letters for guests of participants.</li>
      </ul>
    </div>
  );
};

export default Visa;
