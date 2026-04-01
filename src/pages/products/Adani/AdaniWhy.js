import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdaniWhy.css";

const AdaniWhy = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
    window.scrollTo(0, 0);
  };

  return (
    <section className="adani-why-section">
      <div className="adani-why-container">
        <h2 className="adani-why-title">Why Choose Adani Solar?</h2>
        <p className="adani-why-subtitle">
          Trusted brand in renewable energy, strong build quality, and
          best-in-class performance. Ideal for long-term investment and
          sustainable future.
        </p>

        {/* Contact Button */}
        <div className="adani-btn-wrapper">
          <button
            className="adani-contact-now-btn"
            onClick={handleContactClick}
          >
            Contact Us Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdaniWhy;
