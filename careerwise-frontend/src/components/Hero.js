import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <h1>Welcome to CareerWise</h1>
      <p>Your AI-driven career counseling companion.</p>
      <div className="cta-buttons">
        <button>Get Started</button>
        <button>Learn More</button>
      </div>
    </section>
  );
};

export default Hero;