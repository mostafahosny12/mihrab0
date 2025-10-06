import React from "react";
import "../styles/hero.css";

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <h1>Welcome To Mihrab Academy</h1>
        <p>Mihrab is a comprehensive online learning platform that aims to teach the Holy Quran, Islam, and Arabic language skills.

          Experience a new and unique learning experience for your children online.</p>
        <p>Learn Quran, Islamic Studies, and Arabic online with trusted teachers.</p>
        <a href="#" className="btn-primary">Join Now</a>
      </div>
    </section>
  );
};

export default HeroSection;
