import React from "react";
import { useNavigate } from "react-router-dom"; // Navigation ke liye import karein
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const navigate = useNavigate(); // Hook initialize karein

  const handleNavigation = () => {
    navigate("/contact"); // Aapke contact page ka path yahan aayega
    window.scrollTo(0, 0); // Page ke upar scroll karne ke liye
  };

  return (
    <section className="why-choose-section">
      {/* --- Why Choose Us Content --- */}
      <div className="features-container">
        <h2 className="section-title">Why Choose SK Solar</h2>

        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">☀️</div>
            <h3>High Quality Panels</h3>
            <p>Premium solar modules with high efficiency.</p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">👤</div>
            <h3>Expert Engineers</h3>
            <p>Certified professionals with years of experience.</p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">₹</div>
            <h3>Affordable Solutions</h3>
            <p>Best pricing with maximum energy savings.</p>
          </div>
        </div>
      </div>

      {/* --- CTA Banner (Yellow Section) --- */}
      <div className="cta-banner">
        <div className="cta-content">
          <h2>Start Saving With Solar Energy Today</h2>
          <p>Contact SK Solar Technology for professional solar installation</p>
          {/* onClick event add kiya gaya hai */}
          <button className="cta-btn" onClick={handleNavigation}>
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
