import React from "react";
import { useNavigate } from "react-router-dom";
import "./ContactCTA.css";

const ContactCTA = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact"); // Aapka contact page ka route
    window.scrollTo(0, 0);
  };

  return (
    <section className="contact-cta-section">
      <div className="cta-wrapper">
        <h2 className="cta-title">Ready to Switch to Solar?</h2>
        <p className="cta-text">Contact us today for the best solar deals</p>
        <button className="cta-contact-btn" onClick={handleContactClick}>
          Contact Now
        </button>
      </div>
    </section>
  );
};

export default ContactCTA;
