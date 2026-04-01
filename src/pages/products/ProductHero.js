import React from "react";
import "./ProductHero.css";

const ProductHero = ({ title, subtitle, bgImage }) => {
  return (
    <section
      className="product-hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgImage})`,
      }}
    >
      <div className="product-hero-content">
        <h1 className="product-hero-title">{title || "Tata Power Solar"}</h1>
        <p className="product-hero-subtitle">
          {subtitle || "India's Most Trusted Solar Brand"}
        </p>
      </div>
    </section>
  );
};

export default ProductHero;
