import React, { useState } from 'react';
import './Contact.css';
import { send } from 'emailjs-com';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    send('your_service', 'your_template', form, 'your_user_id')
      .then(() => alert("Message sent!"))
      .catch(() => alert("Error sending message."));
  };

  return (
    <section className="contact" id='contact'>
        <div data-aos="fade-up">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
        <input type="email" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
        <textarea placeholder="Message" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required />
        <button type="submit">Send</button>
      </form>
      </div>
    </section>
  );
};

export default Contact;
