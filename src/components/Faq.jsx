import React from 'react';
import './Faq.css';
import { motion } from 'framer-motion';

const faqs = [
  { q: "How do I rent a book?", a: "Click the borrow button on any book card after logging in." },
  { q: "Can I renew my rental?", a: "Yes, go to your dashboard and click 'Renew' next to the book." },
  { q: "Is there a late fee?", a: "Yes, ₹10/day applies after the due date." }
];

const Faq = () => {
  return (
    <section className="faq" id='faq'>
        <div data-aos="fade-up">
      <h2>FAQs</h2>
      {faqs.map((faq, idx) => (
        <motion.div
          className="faq-item"
          key={idx}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.2 }}
          viewport={{ once: true }}
        >
          <h3>{faq.q}</h3>
          <p>{faq.a}</p>
        </motion.div>
      ))}
        </div>
    </section>
  );
};

export default Faq;
