import React from 'react';
import './Dashboard.css';
import { motion } from 'framer-motion';

const Dashboard = () => {
  return (
    <section className="dashboard" id="dashboard">
        <div data-aos="fade-up">
      <motion.div
        className="dashboard-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Welcome to the Library Dashboard</h2>
        <p>Track your rentals, returns, and recommendations here.</p>
        <button>Log In</button>
      </motion.div>
      </div>
    </section>
  );
};

export default Dashboard;
