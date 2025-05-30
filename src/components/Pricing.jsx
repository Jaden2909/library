import React from 'react';
import './Pricing.css';

const plans = [
  {
    name: 'Basic',
    price: '$5 / month',
    features: [
      'Rent up to 2 books',
      'Access to basic collection',
      'Standard delivery'
    ]
  },
  {
    name: 'Standard',
    price: '$10 / month',
    features: [
      'Rent up to 5 books',
      'Access to full collection',
      'Priority delivery',
      'Access to exclusive events'
    ]
  },
  {
    name: 'Premium',
    price: '$20 / month',
    features: [
      'Unlimited book rentals',
      'Access to premium collection',
      'Express delivery',
      'Personal book recommendations',
      'Invitations to author meetups'
    ]
  }
];

const Pricing = () => {
  return (
    <section className="pricing-section" id="memberships">
      <h2>Pricing Plans</h2>
      <div className="pricing-cards">
        {plans.map(({ name, price, features }, idx) => (
          <div key={idx} className="pricing-card" data-aos="fade-up">
            <h3>{name}</h3>
            <p className="price">{price}</p>
            <ul>
              {features.map((feat, i) => (
                <li key={i}>{feat}</li>
              ))}
            </ul>
            <button className="btn-select">Select Plan</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
