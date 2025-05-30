import React from "react";
import "./Hero.css";
import backgroundImage from '/wood.jpg';

const Hero = () => {
  return (
    <section 
    id="hero"
      className="hero-section" 
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <h1>Welcome to The Library</h1>
      <p>Your book collection awaits.</p>
      <button className="hero-button">Explore Books</button>
    </section>
  );
};

export default Hero;
