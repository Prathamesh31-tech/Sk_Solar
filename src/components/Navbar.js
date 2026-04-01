import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Mobile menu close karne ke liye function
  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top">
      <div className="container-fluid">
        {/* Logo Section */}
        <Link className="navbar-brand" to="/" onClick={closeMenu}>
          <img src="/sk-solar-logo.png" alt="SK Solar" className="logo-img" />
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setOpen(!open)}
        >
          <span className="toggler-icon">☰</span>
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link custom-link"
                to="/about"
                onClick={closeMenu}
              >
                About
              </Link>
            </li>

            {/* Products Dropdown */}
            <li className="nav-item dropdown">
              <span
                className="nav-link custom-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                Products
              </span>
              <ul className="dropdown-menu custom-dropdown">
                <li>
                  <Link
                    to="/tata"
                    className="dropdown-item"
                    onClick={closeMenu}
                  >
                    Tata Power Solar
                  </Link>
                </li>
                <li>
                  <Link
                    to="/waaree"
                    className="dropdown-item"
                    onClick={closeMenu}
                  >
                    Waaree Solar
                  </Link>
                </li>
                <li>
                  <Link
                    to="/adani"
                    className="dropdown-item"
                    onClick={closeMenu}
                  >
                    Adani Solar
                  </Link>
                </li>
                <li>
                  <Link
                    to="/premier"
                    className="dropdown-item"
                    onClick={closeMenu}
                  >
                    Premier Solar
                  </Link>
                </li>
                <li>
                  <Link to="/utl" className="dropdown-item" onClick={closeMenu}>
                    UTL Solar
                  </Link>
                </li>
              </ul>
            </li>

            {/* Services Dropdown */}
            <li className="nav-item dropdown">
              <span
                className="nav-link custom-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                Services
              </span>
              <ul className="dropdown-menu custom-dropdown">
                <li>
                  <Link
                    to="/residential"
                    className="dropdown-item"
                    onClick={closeMenu}
                  >
                    Residential Solar
                  </Link>
                </li>
                <li>
                  <Link
                    to="/commercial"
                    className="dropdown-item"
                    onClick={closeMenu}
                  >
                    Commercial Solar
                  </Link>
                </li>
                <li>
                  <Link
                    to="/maintenance"
                    className="dropdown-item"
                    onClick={closeMenu}
                  >
                    Solar Maintenance
                  </Link>
                </li>
                <li>
                  <Link
                    to="/industrial"
                    className="dropdown-item"
                    onClick={closeMenu}
                  >
                    Industrial Solar
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link custom-link"
                to="/projects"
                onClick={closeMenu}
              >
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link custom-link"
                to="/contact"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
