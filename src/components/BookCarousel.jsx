import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import BookCard from './BookCard';
import './BookCarousel.css';

const books = [
  { title: 'The Alchemist', author: 'Paulo Coelho', cover: '/assets/alchemist.jpg' },
  { title: 'Atomic Habits', author: 'James Clear', cover: '/assets/atomic.jpg' },
  { title: 'Deep Work', author: 'Cal Newport', cover: '/assets/deepwork.jpg' }
];

const BookCarousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollInterval;

    if (carousel) {
      let direction = 1;
      scrollInterval = setInterval(() => {
        if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
          direction = -1;
        } else if (carousel.scrollLeft <= 0) {
          direction = 1;
        }
        carousel.scrollBy({ left: 300 * direction, behavior: 'smooth' });
      }, 3000); // scroll every 3 seconds
    }

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="book-carousel">
      <div data-aos="fade-up">
        <h2>Top Picks</h2>
        <motion.div
          className="carousel"
          ref={carouselRef}
          initial="hidden"
          animate="show"
          variants={{
            show: { transition: { staggerChildren: 0.2 } }
          }}
        >
          {books.map((book, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 50 },
                show: { opacity: 1, y: 0 }
              }}
            >
              <BookCard {...book} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BookCarousel;
