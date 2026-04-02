import React from "react";
import "./SolarProcess.css";

const SolarProcess = () => {
  const processes = [
    { id: "1. Survey", title: "Site inspection and energy analysis" },
    { id: "2. Design", title: "Custom solar system planning" },
    { id: "3. Install", title: "Professional installation" },
    { id: "4. Support", title: "Ongoing maintenance" },
  ];

  const benefits = [
    {
      icon: "💰",
      title: "Save Money",
      desc: "Reduce electricity bills significantly",
    },
    { icon: "🌱", title: "Eco Friendly", desc: "Reduce carbon footprint" },
    {
      icon: "⚡",
      title: "Energy Independence",
      desc: "Generate your own power",
    },
  ];

  return (
    <section className="solar-page-section">
      {/* --- Installation Process --- */}
      <div className="process-wrapper">
        <h2 className="section-header">Our Installation Process</h2>
        <div className="process-grid">
          {processes.map((p, index) => (
            <div key={index} className="process-box">
              <h3>{p.id}</h3>
              <p>{p.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- Benefits Section --- */}
      <div className="benefits-wrapper">
        <h2 className="section-header">Benefits of Residential Solar</h2>
        <div className="benefits-grid">
          {benefits.map((b, index) => (
            <div key={index} className="benefit-card">
              <span className="benefit-icon">{b.icon}</span>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolarProcess;
