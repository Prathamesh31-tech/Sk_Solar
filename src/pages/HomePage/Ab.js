import React from "react";
import "./Ab.css";
import { useNavigate } from "react-router-dom";

const Ab = () => {
  const navigate = useNavigate(); // Hook initialize karein

  const handleNavigation = () => {
    navigate("/about"); // Aapke contact page ka path yahan aayega
    window.scrollTo(0, 0); // Page ke upar scroll karne ke liye
  };
  return (
    <section className="about-modern">
      <div className="about-wrapper">
        {/* Left Side: Big Visual Experience */}
        <div className="about-visual">
          <div className="exp-circle">
            <span className="number">12+</span>
            <span className="text">
              Years of <br /> Excellence
            </span>
          </div>
          <div className="visual-deco"></div>
        </div>

        {/* Right Side: Content & Story */}
        <div className="about-info">
          <div className="brand-tag">About SK Solar</div>
          <h2 className="about-main-title">
            Driving the <span>Solar Revolution</span> across Maharashtra.
          </h2>
          <p className="about-para">
            SK Solar is a trusted name in high-quality solar solutions. We don't
            just install panels; we build sustainable futures for residential
            and industrial sectors.
          </p>

          <div className="story-list">
            <div className="story-item">
              <div className="story-dot"></div>
              <div className="story-text">
                <h4>Our Mission</h4>
                <p>Clean & Green Energy for every household and industry.</p>
              </div>
            </div>

            <div className="story-item">
              <div className="story-dot highlight"></div>
              <div className="story-text">
                <h4>Our Vision</h4>
                <p>A brighter tomorrow powered by 100% renewable energy.</p>
              </div>
            </div>
          </div>

          <button className="read-more-btn" onClick={handleNavigation}>
            Discover Our Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Ab;
