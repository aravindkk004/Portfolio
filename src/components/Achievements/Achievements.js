import React, { useState } from "react";
import "./Achievements.css";
import Certificates from "./Certificates";
import Workshops from "./Workshops";
import Completions from "./Completions";

const Achievements = () => {
  const [showCertificates, setShowCertificates] = useState(true);
  const [showWorkshops, setShowWorkshops] = useState(false);
  const [showCompletions, setShowCompletions] = useState(false);

  const handleShowCertificates = () => {
    setShowCertificates(true);
    setShowWorkshops(false);
    setShowCompletions(false);
  };

  const handleShowWorkshops = () => {
    setShowCertificates(false);
    setShowWorkshops(true);
    setShowCompletions(false);
  };

  const handleShowCompletions = () => {
    setShowCertificates(false);
    setShowWorkshops(false);
    setShowCompletions(true);
  };

  return (
    <section id="achievements">
      <h3>Achievements</h3>
      <div className="options">
        <h4>
          <button onClick={handleShowCertificates}>Certifications</button>
        </h4>
        <h4>
          <button onClick={handleShowWorkshops}>Workshops</button>
        </h4>
        <h4>
          <button onClick={handleShowCompletions}>Completions</button>
        </h4>
      </div>
      <div className="achievements">
        {showCertificates && <Certificates />}
        {showWorkshops && <Workshops />}
        {showCompletions && <Completions />}
      </div>
    </section>
  );
};

export default Achievements;
