import React from "react";
import "./ResDetails.css";

const ResDetails = () => {
  const specs = [
    "Custom System Design",
    " 24/7 Monitoring System",
    "Maintenance & Support",
    " Government Subsidy Assistance",
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
          <h2 className="product-main-title">Residential Solar</h2>
          <p className="product-intro-text">
            Our residential solar systems are designed to help homeowners reduce
            electricity bills while contributing to a cleaner environment. We
            provide complete end-to-end solutions from design to installation
            and maintenance.
          </p>

          <div className="specs-table">
            {specs.map((spec, index) => (
              <div key={index} className="spec-row">
                <span className="check-icon">✓</span>
                <span className="spec-text">{spec}</span>
              </div>
            ))}
          </div>

          <button className="get-quote-btn">Get Free Consultation</button>
        </div>
      </div>
    </section>
  );
};

export default ResDetails;
