import React from "react";
import "../styles/download.css";

const DownloadAppSection = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>
      <p className="contact-subtitle">
        We would love to hear from you. Reach out anytime!
      </p>
      <div className="contact__grid">
        <div className="contact-card">
          <i className="fab fa-whatsapp contact-icon"></i>
          <h3>WhatsApp</h3>
          <a
            href="https://wa.me/201553135708"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat Now
          </a>
        </div>

        <div className="contact-card">
          <i className="fas fa-envelope contact-icon"></i>
          <h3>Email</h3>
          <a href="mailto:mihrabacademy0@gmail.com" className="contact-link">
            mihrabacademy0@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppSection;
