import React from "react";
import "./Ser.css";

const Ser = () => {
  const servicesData = [
    {
      id: 1,
      title: "Residential Solar",
      desc: "Tailored solar installations for homes with energy savings and reliability.",
      icon: "🏠", // Aap yahan image tag bhi use kar sakte hain
      points: [
        "Custom system design",
        "24/7 monitoring",
        "Maintenance & support",
      ],
    },
    {
      id: 2,
      title: "Commercial Solar",
      desc: "Business-grade solutions that maximize ROI and reduce energy costs.",
      icon: "🏢",
      points: [
        "Energy optimization",
        "Grid-tied systems",
        "Incentive planning",
      ],
    },
    {
      id: 3,
      title: "Solar Maintenance",
      desc: "Reliable maintenance and performance checks to keep systems running smoothly.",
      icon: "🔧",
      points: [
        "Routine inspections",
        "Performance tuning",
        "Emergency response",
      ],
    },
    {
      id: 4,
      title: "Industrial Solar",
      desc: "Industrial-grade solar systems designed for heavy-duty applications.",
      icon: "⚡",
      points: [
        "Custom engineering",
        "Scalable deployments",
        "24/7 system monitoring",
      ],
      highlight: true, // Last card highlighting ke liye
    },
  ];

  return (
    <section className="services-section">
      <div className="services-header">
        <h2 className="services-main-title">Our Services</h2>
        <div className="yellow-dash"></div>
        <p className="services-subtitle">
          Comprehensive solar solutions for homes, businesses and industries.
        </p>
      </div>

      <div className="services-grid">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className={`service-card ${service.highlight ? "featured-card" : ""}`}
          >
            <div className="icon-wrapper">
              <div className="icon-circle">{service.icon}</div>
            </div>

            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.desc}</p>

            <ul className="service-points">
              {service.points.map((point, index) => (
                <li key={index}>
                  <span className="check-mark">✓</span> {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ser;
