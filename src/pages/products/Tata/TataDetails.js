import React from "react";
import "./TataDetails.css";

const TataDetails = () => {
  const specs = [
    "Efficiency: 19% - 22%",
    "Technology: Mono PERC / TOPCon",
    "Warranty: 25 Years Performance",
    "Strong Build Quality",
    "Made in India",
  ];

  return (
    <section className="product-details-section">
      <div className="product-details-container">
        {/* Left Side: Product Image */}
        <div className="product-image-box">
          <img src="/Tata2.jpg" alt="Tata Power Solar Installation" />
        </div>

        {/* Right Side: Content & Specs */}
        <div className="product-info-box">
          <h2 className="product-main-title">Tata Power Solar Panels</h2>
          <p className="product-intro-text">
            Tata Power Solar is a leading solar manufacturer in India offering
            high-quality, durable, and efficient solar panels for residential,
            commercial, and industrial use.
          </p>

          <div className="specs-table">
            {specs.map((spec, index) => (
              <div key={index} className="spec-row">
                <span className="check-icon">✓</span>
                <span className="spec-text">{spec}</span>
              </div>
            ))}
          </div>

          <h3 className="product-pricing">
            Starting from <span className="price-yellow">₹45,000*</span>
          </h3>

          <button className="get-quote-btn">Get Quote</button>
        </div>
      </div>
    </section>
  );
};

export default TataDetails;
