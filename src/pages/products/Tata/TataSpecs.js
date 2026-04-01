import React from "react";
import "./TataSpecs.css";

const TataSpecs = () => {
  const reasons = [
    {
      title: "High Efficiency",
      desc: "Advanced solar cells ensure maximum energy output.",
    },
    {
      title: "Long Warranty",
      desc: "25 years performance warranty ensures reliability.",
    },
    {
      title: "Trusted Brand",
      desc: "Backed by Tata Group’s strong reputation.",
    },
  ];

  const specData = [
    { label: "Type", value: "Monocrystalline" },
    { label: "Power Output", value: "400W - 600W" },
    { label: "Efficiency", value: "Up to 22%" },
    { label: "Warranty", value: "25 Years" },
  ];

  return (
    <section className="specs-section">
      {/* Why Choose Cards */}
      <div className="why-choose-wrapper">
        <h2 className="section-heading">Why Choose Tata Power Solar?</h2>
        <div className="reasons-grid">
          {reasons.map((item, index) => (
            <div key={index} className="reason-card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Specs Table */}
      <div className="tech-specs-wrapper">
        <h2 className="section-heading">Technical Specifications</h2>
        <div className="specs-table-container">
          <table className="specs-table">
            <tbody>
              {specData.map((spec, index) => (
                <tr key={index}>
                  <td className="spec-label">{spec.label}</td>
                  <td className="spec-value">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TataSpecs;
