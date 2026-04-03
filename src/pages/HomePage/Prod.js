import React from "react";
import { Link } from "react-router-dom"; // Link import karein
import "./Prod.css";

const Prod = () => {
  const productData = [
    {
      id: 1,
      name: "Tata Power Solar",
      desc: "High-efficiency solar panels with advanced technology",
      img: "/Tata1.jpg",
      tags: ["25 Years Warranty", "High Efficiency"],
      badge: "PREMIUM",
      badgeColor: "#ffb700",
      path: "/tata", // Aapka path yahan aayega
    },
    {
      id: 2,
      name: "Waaree Solar",
      desc: "Reliable solar solutions for residential and commercial use",
      img: "/Tata1.jpg",
      tags: ["Cost Effective", "Durable"],
      badge: "Popular",
      badgeColor: "red",
      path: "/waaree",
    },
    {
      id: 3,
      name: "Adani Solar",
      desc: "Innovative solar technology for maximum energy output",
      img: "/Adani1.jpg",
      tags: ["Smart Technology", "Long Lifespan"],
      badge: "",
      path: "/adani",
    },
    {
      id: 4,
      name: "Primier Solar",
      desc: "Innovative solar technology for maximum energy output",
      img: "/Tata1.jpg",
      tags: ["Smart Technology", "Long Lifespan"],
      badge: "",
      path: "/premier",
    },
  ];

  return (
    <section className="products-section" id="products">
      <div className="section-header">
        <h2 className="main-heading">Our Solar Products</h2>
        <div className="yellow-dash"></div>
        <p className="subtitle">
          Premium solar panel solutions from leading manufacturers
        </p>
      </div>

      <div className="products-grid">
        {productData.map((item) => (
          <div key={item.id} className="product-card">
            {item.badge && (
              <span
                className="product-badge"
                style={{ backgroundColor: item.badgeColor }}
              >
                {item.badge}
              </span>
            )}

            <div className="product-img-container">
              <img src={item.img} alt={item.name} />
            </div>

            <div className="product-info">
              {/* Button ko Link mein convert kar diya */}
              <Link to={item.path} className="product-title-link">
                {item.name}
              </Link>

              <p className="product-desc">{item.desc}</p>
              <div className="product-tags">
                {item.tags.map((tag, index) => (
                  <span key={index} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Prod;
