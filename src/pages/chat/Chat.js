import React from 'react';
import '../../scss/pages/chat/Chat.scss';

const Chat = () => {
  const requestCnt = 0;

  return (
    <div className='Chat'>
      <div className='chat-request-container'>
        <div className='chat-request-title'>
          <h2 className='title'>친구 요청 ({requestCnt})</h2>
        </div>
      </div>

      <div className='chat-request-list'>
        <div className='friend-container'>
          <div className='friend-img-container'>
            <img className='friend-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7MnOcQUfqtgTKRpCld7E-_P2JCyF-QMlesD887gUZ6A&s'></img>
            <img className='cancle-img'></img>
          </div>
          <span className='friend-name'>
            김태현
          </span>
        </div>
      </div>
    </div>
  );
}

export default Chat;