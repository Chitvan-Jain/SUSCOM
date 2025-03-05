import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Archive from "./pages/Archive";
import CallForPaper from "./pages/CallForPaper";
import Committee from "./pages/Committee";
import Contact from "./pages/Contact";
import Publication from "./pages/Publication";
import Registration from "./pages/Registration";
import Speakers from "./pages/Speakers";

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
          <Route path="/publication" element={<Publication />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/speakers" element={<Speakers />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
