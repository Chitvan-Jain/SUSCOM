import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Archive from "./pages/Archive.jsx";
import Committee from "./pages/Committee.jsx";
import Contact from "./pages/Contact.jsx";
import Publication from "./pages/paperSubmission/Publication.jsx";
import Registration from "./pages/paperSubmission/Registration.jsx";
import Speakers from "./pages/Speakers.jsx";
import PaperInstructions from "./pages/paperSubmission/Instructions.jsx";
import CallForPaper from "./pages/paperSubmission/CallForPaper.jsx";
import ImportantDates from "./pages/paperSubmission/ImportantDates.jsx";
import SubmissionForm from "./pages/paperSubmission/SubmissionForm.jsx";
import CallForSponsor from "./pages/CallForSponsor.jsx";
import PreWorkshop from "./pages/PreWorkshop.jsx";
import Schedule from "./pages/Schedule.jsx";
import Visa from "./pages/Visa.jsx";


const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/call-for-paper" element={<CallForPaper />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/pre-workshop" element={<PreWorkshop />} />
          <Route path="/call-for-sponsors" element={<CallForSponsor/>} />
          <Route path="/schedule" element={<Schedule/>} />
          <Route path="/visa" element={<Visa/>} />

          {/* Routes for Paper Submission Dropdown */}
          <Route path="/publication" element={<Publication />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/instructions" element={<PaperInstructions />} />
          <Route path="/call-for-papers" element={<CallForPaper />} />
          <Route path="/dates" element={<ImportantDates />} />
          <Route path="/form" element={<SubmissionForm />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
