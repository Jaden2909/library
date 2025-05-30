import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay" onClick={onClose} />
      <div className="modal-content" data-aos="fade-up">
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Modal">&times;</button>
        {children}
      </div>
    </>
  );
};

export default Modal;
