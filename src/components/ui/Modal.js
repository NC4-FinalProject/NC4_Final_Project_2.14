import React, { useState } from 'react';
import {SvgIcon} from "@mui/material";
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
        <div className="modal" onClick={closeModal}> 
          <div className="modal-content">
            <div className="a">Modal Content</div>
            <div className="a">Modal Content</div>
            <div className="a">Modal Content</div>
          </div>
          {/* <button onClick={closeModal}>Close Modal</button> */}
        </div>
      )}
    </div>
  );
}

export default Modal;