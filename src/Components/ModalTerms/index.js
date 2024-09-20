import React from 'react';
import './modalTerms.css';

const ModalTerms = ({ closeModal, title, children }) => {
  return (
    <div className="modal-backdrop">
      <button className="close-btn" onClick={closeModal}>
          &times;
      </button>
      <div className="modal-content">
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default ModalTerms;