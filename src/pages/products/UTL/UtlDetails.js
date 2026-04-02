import React from "react";
import "./UtlDetails.css";

const UtlDetails = () => {
  const specs = [
    "High Conversion Efficiency",
    " Budget-Friendly Solutions ",
    "Durable Build Quality",
    "20-25 Years Performance",
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
          <h2 className="waaree-main-title">UTL Solar</h2>
          <p className="waaree-intro-text">
            UTL Solar is a trusted name in solar energy solutions, known for its
            cost-effective and efficient solar panels. Ideal for residential and
            commercial applications, UTL ensures reliable power with advanced
            technology and long-lasting performance.
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

export default UtlDetails;
