import React from "react";
import "./UtlStats.css";

const UtlStats = () => {
  const stats = [
    { value: "20+", label: "Years Life" },
    { value: "High", label: "Efficiency" },
    { value: "1000+", label: "Happy Clients" },
  ];

  return (
    <section className="utl-stats-section">
      {/* Top Stats Cards Row */}
      <div className="utl-stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="utl-stat-card">
            <h2 className="utl-stat-value">{stat.value}</h2>
            <p className="utl-stat-label">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Bottom Text Content */}
      <div className="utl-why-container">
        <h2 className="utl-why-title">Why Choose UTL Solar?</h2>
        <p className="utl-why-text">
          UTL Solar offers affordable and efficient solar solutions, making it
          accessible for everyone to switch to renewable energy with confidence.
        </p>
      </div>
    </section>
  );
};

export default UtlStats;
