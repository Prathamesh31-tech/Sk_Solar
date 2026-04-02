import React from "react";
import "./PremierStats.css";

const PremierStats = () => {
  const stats = [
    { value: "22%", label: "Efficiency" },
    { value: "25+", label: "Years Warranty" },
    { value: "1000+", label: "Installations" },
  ];

  return (
    <section className="premier-stats-section">
      {/* Top Stats Row */}
      <div className="stats-grid-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <h2 className="stat-number">{stat.value}</h2>
            <p className="stat-desc">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Bottom Text Content */}
      <div className="premier-why-content">
        <h2 className="why-title">Why Choose Premier Solar?</h2>
        <p className="why-subtitle">
          Reliable performance, modern design, and long-term savings make
          Premier Solar a perfect choice for sustainable energy solutions.
        </p>
      </div>
    </section>
  );
};

export default PremierStats;
