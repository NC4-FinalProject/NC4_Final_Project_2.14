import React, { useState } from 'react';
// import { SvgIcon } from "@mui/material";
// import '../../scss/ui/Modal.scss';
import '../../scss/components/CommunityWriteModal.scss';
import Button from '../ui/button/Button';

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
        <div className="community_write_modal" onClick={closeModal}>
          <div className="modal-contanier" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>X</button>
                <div className="profile_container">
                    <div className="profile_picture">
                    </div>
                    <div className="name_container">
                        <p>신지우</p>
                    </div>
                </div>
            <textarea className="community_feed_write" placeholder="게시글을 입력 해 주세요"></textarea>
            <div className="footer_container">
              <div className="register_photo_container">         
                      <input type="file" id="fileInput" />
              </div>
              <div className="button_container">
                <Button color={'green'} text={'등록'} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;