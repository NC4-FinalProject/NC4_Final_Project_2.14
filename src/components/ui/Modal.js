import React, { useState } from 'react';
import {SvgIcon} from "@mui/material";
import '../../scss/ui/Modal.scss';

function Modal({svg, item}) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  

  return (
    <div>
      <div onClick={openModal}>  {svg}</div>  
      {isOpen && (
        <div className="modal" onClick={closeModal}> 
          <div className="modal-content">
            {item.map((item, idx)=>{
              return(
                <div key={idx} className="a">{item.text}</div>
              )
            })}
          </div>
          {/* <button onClick={closeModal}>Close Modal</button> */}
        </div>
      )}
    </div>
  );
}

export default Modal;