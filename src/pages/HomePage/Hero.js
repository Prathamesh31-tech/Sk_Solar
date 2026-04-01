import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      {/* Background image CSS se handle hogi */}
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Powering Your Future</h1>
          <p className="hero-subtitle">
            with <span className="highlight-yellow">Clean Solar Energy</span>
          </p>
          <div className="hero-button-group">
            <button className="btn-primary-yellow">Get Quote</button>
            <button className="btn-outline-white">Our Products</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
