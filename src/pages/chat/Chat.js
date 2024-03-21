import React from 'react';
import '../../scss/pages/chat/Chat.scss';

const Chat = () => {
  const requestCnt = 0;
  const chatListCnt = 0;

  const handleFriendDelete = () => {
    console.log('handleFriendDelete');
  }

  return (
    <div className='Chat'>
      <div className='chat-request-container'>
        <div className='chat-request-title'>
          <h2>친구 요청 ({requestCnt})</h2>
        </div>
        <div className='chat-request-list'>
          <div className='friend-container'>
            <div className='friend-img-container'>
              <img className='friend-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7MnOcQUfqtgTKRpCld7E-_P2JCyF-QMlesD887gUZ6A&s'></img>
              <div className='cancle-img' onClick={handleFriendDelete}></div>
            </div>
            <span className='friend-name'>
              김태현
            </span>
          </div>
        </div>
      </div>



      <h2 className='chat-list-title'>
        채팅목록 ({chatListCnt})
      </h2>
      <div className='chat-list-container'>
        <div className='chat-list'>
          <div className='friend-img-container'>
            <div className='friend-name'>
              <p>이름</p>
            </div>
            <img className='friend-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7MnOcQUfqtgTKRpCld7E-_P2JCyF-QMlesD887gUZ6A&s'>
            </img>
          </div>
          <div className='last-chat'>

          </div>
          <div className='chat-cnt-icon-container'>
            <div className='icon'>
              <div className='cnt'>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;