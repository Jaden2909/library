import React from 'react';
import './HowItWorks.css';

const steps = [
  {
    title: 'Browse Books',
    description: 'Explore our vast collection of books across genres.',
    link: '/browse'
  },
  {
    title: 'Select & Rent',
    description: 'Choose your favorite books and rent them easily.'
  },
  {
    title: 'Get Delivered',
    description: 'We deliver your books right to your doorstep.',
    extraLink: '/track'
  }
];

const HowItWorks = () => {
  return (
    <section className="how-it-works" id="how-it-works">
      <h2>How It Works</h2>
      <div className="steps-container" data-aos="fade-up">
        {steps.map(({ title, description, link, extraLink }, idx) => (
          <div key={idx} className="step-card">
            <div className="step-number">{idx + 1}</div>
            {idx === 0 && link ? (
              <h3>
                <a href={link} className="step-link heading-link">{title}</a>
              </h3>
            ) : (
              <h3>{title}</h3>
            )}
            <p>{description}</p>
            {idx === 2 && extraLink && (
              <p>
                <a href={extraLink} className="step-link heading-link">Track Order</a>
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
