import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when clicking a link
  const handleLinkClick = () => setIsOpen(false);

  // Scroll handler to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="logo"><a href="#hero" onClick={handleLinkClick}>The Library</a></div>
        <button
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <a href="#how-it-works" onClick={handleLinkClick}>
              How It Works
            </a>
          </li>
          <li>
            <a href="#why-choose-us" onClick={handleLinkClick}>
              Why Choose Us
            </a>
          </li>
          <li>
            <a href="#get-started" onClick={handleLinkClick}>
              Get Started
            </a>
          </li>
          <li>
            <a href="#dashboard" onClick={handleLinkClick}>
              Dashboard - Log In
            </a>
          </li>
            <li>
            <a href="#memberships" onClick={handleLinkClick}>
              Memberships
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={handleLinkClick}>
              Testimonials
            </a>
          </li>
          <li>
            <a href="#stats" onClick={handleLinkClick}>
              Our Statistics
            </a>
          </li>
          <li>
            <a href="#faq" onClick={handleLinkClick}>
              FAQs
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleLinkClick}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
