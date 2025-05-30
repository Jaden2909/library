import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@paupetsoft.com</p>
          <p>Phone: +91 9864332555</p>
          <p>
            WhatsApp: <span className="whatsapp-link">Chat with us</span>
          </p>
        </div>

        <div className="footer-section">
          <h4>Address</h4>
          <p>Paupet Soft</p>
          <p>#77 Olive Tree, 1st Main Road</p>
          <p>Somashekar Reddy Layout, Margondanahalli</p>
          <p>Bengaluru, Karnataka, India – 560036</p>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
