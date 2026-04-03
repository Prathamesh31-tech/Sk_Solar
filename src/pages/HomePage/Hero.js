import React from "react";
import "./Hero.css";

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-container">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Powering Your Future</h1>
          <p className="hero-subtitle">
            with <span className="highlight-yellow">Clean Solar Energy</span>
          </p>
          <div className="hero-button-group">
            {/* Get Quote साठी contact-form ID वापरा */}
            <button
              className="btn-primary-yellow"
              onClick={() => scrollToSection("contact-form")}
            >
              Get Quote
            </button>

            <button
              className="btn-outline-white"
              onClick={() => scrollToSection("products")}
            >
              Our Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
