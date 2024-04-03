import React from 'react';
import '../../scss/pages/chat/ChatByPartner.scss';

const ChatByPartner = ({message}) => {
  return (
    <div className='ChatByPartner'>
      <div className='chat-user-img'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7MnOcQUfqtgTKRpCld7E-_P2JCyF-QMlesD887gUZ6A&s'></img>
      </div>
      <div className='chat-user-text'>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default ChatByPartner;