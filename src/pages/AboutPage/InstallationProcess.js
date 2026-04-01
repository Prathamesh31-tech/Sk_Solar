import React from "react";
import "./InstallationProcess.css";

const InstallationProcess = () => {
  const steps = [
    { id: 1, title: "Site Inspection" },
    { id: 2, title: "System Design" },
    { id: 3, title: "Installation" },
    { id: 4, title: "Activation" },
  ];

  const stats = [
    { value: "200+", label: "Projects Completed" },
    { value: "600+", label: "Happy Customers" },
    { value: "8MW", label: "Solar Capacity Installed" },
    { value: "12+", label: "Years Experience" },
  ];

  return (
    <section className="process-stats-section">
      {/* --- Process Section --- */}
      <div className="process-container">
        <h2 className="process-title">Our Installation Process</h2>
        <div className="steps-wrapper">
          {steps.map((step) => (
            <div key={step.id} className="step-item">
              <div className="step-circle">{step.id}</div>
              <p className="step-name">{step.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- Stats Section (Dark Background) --- */}
      <div className="stats-container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstallationProcess;
