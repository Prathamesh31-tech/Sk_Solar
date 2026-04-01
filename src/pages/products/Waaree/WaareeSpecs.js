import React from "react";
import "./WaareeSpecs.css";

const WaareeSpecs = () => {
  const reasons = [
    {
      title: "Cost Effective",
      desc: "Affordable solar solutions with great performance.",
    },
    {
      title: "Durable Design",
      desc: "Built to withstand harsh weather conditions.",
    },
    {
      title: "Wide Usage",
      desc: "Suitable for residential & commercial installations.",
    },
  ];

  const specData = [
    { label: "Panel Type", value: "Mono PERC / Polycrystalline" },
    { label: "Power Range", value: "350W - 550W" },
    { label: "Efficiency", value: "Up to 21%" },
    { label: "Warranty", value: "25 Years Performance" },
    { label: "Application", value: "Residential / Commercial" },
  ];

  return (
    <section className="waaree-specs-section">
      {/* Why Choose Cards */}
      <div className="waaree-reasons-wrapper">
        <h2 className="waaree-section-heading">Why Choose Waaree Solar?</h2>
        <div className="waaree-reasons-grid">
          {reasons.map((item, index) => (
            <div key={index} className="waaree-reason-card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Specs Table */}
      <div className="waaree-tech-wrapper">
        <h2 className="waaree-section-heading">Technical Specifications</h2>
        <div className="waaree-table-container">
          <table className="waaree-table">
            <tbody>
              {specData.map((spec, index) => (
                <tr key={index}>
                  <td className="waaree-spec-label">{spec.label}</td>
                  <td className="waaree-spec-value">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default WaareeSpecs;
