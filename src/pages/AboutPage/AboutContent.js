import React from "react";
import "./AboutContent.css";

const AboutContent = () => {
  return (
    <section className="about-content-section">
      <div className="about-container">
        {/* Left Side: Image with Experience Badge */}
        <div className="about-image-wrapper">
          <img
            src="/about2.jpg"
            alt="Solar Installation"
            className="main-about-img"
          />
          <div className="experience-badge">
            <span className="exp-number">12+</span>
            <span className="exp-text">Years Experience</span>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="about-text-content">
          <h2 className="about-heading">About SK Solar Technology</h2>
          <p className="about-paragraph">
            SK Solar Technology is a trusted solar energy company providing
            advanced solar panel installation services for residential,
            commercial, and industrial applications.
          </p>
          <p className="about-paragraph">
            Our team of experienced engineers ensures reliable solar power
            systems that reduce electricity costs and promote clean renewable
            energy.
          </p>

          <ul className="about-list">
            <li>High efficiency solar panels</li>
            <li>Expert installation team</li>
            <li>Affordable pricing</li>
            <li>Long term support</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
