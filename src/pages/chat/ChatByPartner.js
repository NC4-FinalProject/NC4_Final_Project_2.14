import React from 'react';
import '../../scss/pages/chat/ChatByPartner.scss';

const ChatByPartner = ({message, partnerImg}) => {
  return (
    <div className='ChatByPartner'>
      <div className='chat-user-img'>
        <img src={partnerImg}></img>
      </div>
      <div className='chat-user-text'>
          <p>{
              message.img == null
                  ? message.message
                  : <img src={message.img} alt='보낸 이미지'></img>

          }</p>
      </div>
    </div>
  );
}

export default ChatByPartner;