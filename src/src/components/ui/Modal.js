import React, { useState } from 'react';
import '../../../scss/ui/Modal.scss'; 

const Modal = ({ id, isOpen, onClose, children }) => {
  const modalClassName = isOpen ? 'Modal Modal-open' : 'Modal';

  return (
    <div className={modalClassName} id={id}>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        {children}
      </div>
    </div>
  );
};

export default Modal;