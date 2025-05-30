import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const benefits = [
    {
      title: 'Seamless Borrowing',
      description: 'Borrow and return books online anytime with just a few clicks.',
    },
    {
      title: 'Smart Recommendations',
      description: 'AI-powered suggestions based on your reading habits and interests.',
    },
    {
      title: 'Instant Access',
      description: 'Explore a vast library of books instantly from any device.',
    },
  ];

  return (
    <section className="why-us" id="why-choose-us">
      <h2>Why Choose Our Library</h2>
      <div className="why-cards">
        {benefits.map((item, index) => (
          <div key={index} className="why-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
