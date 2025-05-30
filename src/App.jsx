import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import BookCarousel from './components/BookCarousel';
import BookCard from './components/BookCard';
import Dashboard from './components/Dashboard';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Modal from './components/Modal';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-in-out',
      offset: 100,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Dashboard />
      <WhyChooseUs />
      <Stats />
      <BookCarousel />
      <Pricing />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
      <ScrollToTop />
      <Modal />
    </>
  );
}

export default App;
