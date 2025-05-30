import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Emily R.',
    feedback: 'This library is a game changer! Easy rentals and amazing selection.',
    photo: '/testimonials/emily.jpg'
  },
  {
    name: 'John D.',
    feedback: 'I love the premium plan — so worth it for avid readers.',
    photo: '/testimonials/john.jpg'
  },
  {
    name: 'Sophia K.',
    feedback: 'Great customer service and quick delivery every time.',
    photo: '/testimonials/sophia.jpg'
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <h2>What Our Members Say</h2>
      <div className="testimonials-container">
        {testimonials.map(({ name, feedback, photo }, idx) => (
          <div key={idx} className="testimonial-card">
            <img src={photo} alt={`${name}'s photo`} className="testimonial-photo" />
            <p className="testimonial-feedback">"{feedback}"</p>
            <h4 className="testimonial-name">{name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
