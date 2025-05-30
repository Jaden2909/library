import React from 'react';
import './Stats.css';

const statsData = [
  { label: 'Books Available', value: '10,000+' },
  { label: 'Active Members', value: '5,000+' },
  { label: 'Books Rented', value: '50,000+' },
  { label: 'Events Hosted', value: '120+' },
];

const Stats = () => {
  return (
    <section className="stats-section" id="stats">
      <div className="stats-container" data-aos="fade-up">
        {statsData.map(({ label, value }, idx) => (
          <div key={idx} className="stat-card">
            <h3 className="stat-value">{value}</h3>
            <p className="stat-label">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
