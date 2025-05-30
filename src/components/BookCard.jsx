import React from 'react';
import './BookCard.css';

const BookCard = ({ title, author, cover }) => {
  return (
    <div className="bookcard">
      <img src={cover} alt={`${title} cover`} className="bookcard-image" />
      <h3 className="bookcard-title">{title}</h3>
      <p className="bookcard-author">by {author}</p>
      <button className="borrow-button">Borrow</button>
    </div>
  );
};

export default BookCard;
