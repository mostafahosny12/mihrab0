import React from "react";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="logo">
          <img src="/logo.jpg" alt="Mihrab Logo" className="logo-img" />
          <h2>MIHRAB ACADEMY</h2>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#programs">Our Programs</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
