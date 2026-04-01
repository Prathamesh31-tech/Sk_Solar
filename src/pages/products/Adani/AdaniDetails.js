import React from "react";
import "./AdaniDetails.css";

const AdaniDetails = () => {
  const specs = [
    "High Efficiency (19% - 22%)",
    "Advanced Mono PERC Technology",
    "Long Performance Warranty (25 Years)",
    "Weather Resistant Design",
  ];

  return (
    <section className="adani-details-section">
      <div className="adani-container">
        {/* Left Side: Product Image */}
        <div className="adani-image-box">
          <img src="/solar6.jpg" alt="Adani Solar Installation" />
        </div>

        {/* Right Side: Content & Specs */}
        <div className="adani-info-box">
          <h2 className="adani-main-title">Adani Solar</h2>
          <p className="adani-intro-text">
            Adani Solar is one of India's leading solar manufacturers,
            delivering high-efficiency solar panels with advanced technology.
            Designed for durability and maximum output, these panels are perfect
            for residential, commercial, and industrial use.
          </p>

          <div className="adani-specs-list">
            {specs.map((spec, index) => (
              <div key={index} className="adani-spec-item">
                <span className="adani-check">✓</span>
                <span className="adani-text">{spec}</span>
              </div>
            ))}
          </div>

          <button className="adani-get-quote-btn">Get Quote</button>
        </div>
      </div>
    </section>
  );
};

export default AdaniDetails;
