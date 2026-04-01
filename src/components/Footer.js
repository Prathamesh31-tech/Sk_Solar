import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-content">
        <p>
          © {currentYear} SK Solar Technology | PRATHAM INDIA PVT. LTD , JALGAON
        </p>
      </div>
    </footer>
  );
};

export default Footer;
