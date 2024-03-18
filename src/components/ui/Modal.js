import React, { useState } from 'react';
import '../../scss/ui/Modal.scss';

function Modal({element}) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div onClick={openModal}>  {element}</div>
    
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <div classaName="ads">Modal Content</div>
            <div classaName="b">Modal Content</div>
            <div classaName="c">Modal Content</div>
          </div>
          <button onClick={closeModal}>Close Modal</button>
        </div>
      )}
    </div>
  );
}

export default Modal;