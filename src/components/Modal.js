// Modal.js
import React from 'react';
import './Modal.css'; // Import modal-specific CSS

function Modal({ message, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
