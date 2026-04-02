import React from "react";
import "./PremierSolar.css";

const PremierSolar = () => {
  const features = [
    "High Efficiency up to 22%",
    "Advanced TOPCon Technology",
    "25 Years Warranty",
    "Strong & Weather Resistant",
  ];

  return (
    <section className="premier-section">
      <div className="premier-container">
        {/* Left Side: Product Image with Hover Effect */}
        <div className="premier-image-wrapper">
          <img
            src="/solar3.jpg"
            alt="Premier Solar Installation"
            className="premier-img"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="premier-info-box">
          <h2 className="premier-title">Premier Solar</h2>
          <p className="premier-description">
            Premier Solar panels are designed with cutting-edge technology to
            deliver high performance and durability. Ideal for modern homes and
            businesses, these panels ensure maximum energy generation with
            minimal maintenance.
          </p>

          <div className="premier-features-list">
            {features.map((feature, index) => (
              <div key={index} className="feature-row">
                <span className="check-mark">✓</span>
                <span className="feature-text">{feature}</span>
              </div>
            ))}
          </div>

          <button className="premier-quote-btn">Get Quote</button>
        </div>
      </div>
    </section>
  );
};

export default PremierSolar;
