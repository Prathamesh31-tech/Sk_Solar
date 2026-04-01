import React from "react";
import "./Ab.css";

const Ab = () => {
  const aboutCards = [
    {
      id: 1,
      title: "10+ Years Experience",
      desc: "Delivering excellence in solar energy solutions since our inception",
      icon: "🏆", // Yahan image tag use kar sakte hain
      highlight: true,
    },
    {
      id: 2,
      title: "Our Mission",
      desc: "Clean & Green Energy for a sustainable future",
      icon: "🏆",
      highlight: false,
    },
    {
      id: 3,
      title: "Our Vision",
      desc: "A Brighter Tomorrow powered by renewable energy",
      icon: "🏆",
      highlight: false,
    },
  ];

  return (
    <section className="about-section">
      <div className="about-header">
        <h2 className="about-title">About SK Solar</h2>
        <div className="yellow-dash"></div>
        <p className="about-subtitle">
          SK Solar is a trusted solar panel vendor offering high quality solar
          solutions for residential, commercial, and industrial applications.
        </p>
      </div>

      <div className="about-container">
        {aboutCards.map((card) => (
          <div
            key={card.id}
            className={`about-card ${card.highlight ? "border-yellow" : ""}`}
          >
            <div className="card-icon">{card.icon}</div>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-desc">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ab;
