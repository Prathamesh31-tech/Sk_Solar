import React from "react";
import "./WaareeDetails.css";

const WaareeDetails = () => {
  const specs = [
    "Efficiency: Up to 21%",
    "Technology: Mono PERC / Polycrystalline",
    "Warranty: 25 Years",
    "Strong & Durable Panels",
    "Budget Friendly",
  ];

  return (
    <section className="waaree-details-section">
      <div className="waaree-container">
        {/* Left Side: Product Image */}
        <div className="waaree-image-box">
          <img src="/solar5.jpg" alt="Waaree Solar Installation" />
        </div>

        {/* Right Side: Content & Specs */}
        <div className="waaree-info-box">
          <h2 className="waaree-main-title">Waaree Solar</h2>
          <p className="waaree-intro-text">
            Waaree Solar is one of India's largest solar panel manufacturers,
            offering reliable, cost-effective, and high-performance solar
            solutions for homes, businesses, and industries.
          </p>

          <div className="waaree-specs-table">
            {specs.map((spec, index) => (
              <div key={index} className="waaree-spec-row">
                <span className="waaree-check-icon">✓</span>
                <span className="waaree-spec-text">{spec}</span>
              </div>
            ))}
          </div>

          <h3 className="waaree-pricing">
            Starting from <span className="waaree-price-green">₹38,000*</span>
          </h3>

          <button className="waaree-get-quote-btn">Get Quote</button>
        </div>
      </div>
    </section>
  );
};

export default WaareeDetails;
