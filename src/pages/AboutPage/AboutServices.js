import React from "react";
import { Link } from "react-router-dom";
import "./AboutServices.css";

const AboutServices = () => {
  const services = [
    {
      id: 1,
      title: "Residential Solar",
      desc: "Solar solutions designed to reduce home electricity bills.",
      icon: "🏠", // Aap icon image ya FontAwesome bhi use kar sakte hain
      path: "/residential",
    },
    {
      id: 2,
      title: "Commercial Solar",
      desc: "Large-scale solar installations for businesses and offices.",
      icon: "🏢",
      path: "/commercial",
    },
    {
      id: 3,
      title: "Industrial Solar",
      desc: "High-capacity solar plants for factories and industries.",
      icon: "🏭",
      path: "/industrial",
    },
  ];

  return (
    <section className="about-services-section">
      <h2 className="services-heading">Our Services</h2>

      <div className="services-container">
        {services.map((service) => (
          <div key={service.id} className="service-card-item">
            <div className="service-icon-yellow">{service.icon}</div>

            <Link to={service.path} className="service-title-btn">
              {service.title}
            </Link>

            <p className="service-description">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutServices;
