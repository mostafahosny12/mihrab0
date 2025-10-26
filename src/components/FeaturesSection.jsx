import React from "react";
import "../styles/features.css";

const FeaturesSection = () => {
  return (
    <section className="features" id="features">
      <h3>Why Choose Us?</h3>
      <p>Enjoy a new world of learning with outstanding teachers who are able to deal with your children of all ages.
        <br /> Your children deserve the best, and you deserve their gratitude.</p>
      <ul className="why-list">
        <li>✅ Qualified Teachers</li>
        <li>✅ Online Flexible Learning</li>
        <li>✅ Trusted Islamic Content</li>
        <li>✅ Individual Student Attention</li>
      </ul>
    </section>
  );
};

export default FeaturesSection;
