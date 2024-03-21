import React, { useState } from 'react';
// import { SvgIcon } from "@mui/material";
// import '../../scss/ui/Modal.scss';
import '../../scss/components/CommunityWriteModal.scss';

function Modal({ svg, item }) {
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
        <div className="create_modal" onClick={closeModal}>
          <div className="modal-contanier" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>X</button>
            <div className="community_feed_container">
                <div className="profile_container">
                    <div className="profile_picture">
                    </div>
                    <div className="name_container">
                        <p>신지우</p>
                    </div>
                </div>
                <div className='comment_container'>
                    <div className="comment_content">
                        <p>
                            할말을쓰시오
                        </p>
                    </div>
                    
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;