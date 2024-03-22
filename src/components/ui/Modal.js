import React, { useState } from 'react';
// import { SvgIcon } from "@mui/material";
import '../../scss/ui/Modal.scss';

function CommunityWriteModal({ svg, item }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  

  return (
    <div>
      <div onClick={openModal}>{svg}</div>
      {isOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-contanier">
            {item.map((item, idx) => (
              <div key={idx}
                className="modal-content"
                onClick={item.onclick}
                style={item.style ? item.style : null}>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CommunityWriteModal;