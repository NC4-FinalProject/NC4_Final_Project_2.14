import React from 'react';
import '../../scss/pages/chat/Chat.scss';
import HoverDescription from '../../components/ui/HoverDescription';

const Chat = () => {
  // 예시 매개변수 리스트 : 각 채팅방 고유 번호, 각 채팅 상대의 사진, 각 채팅의 마지막 메세지, 각 채팅의 안읽은 메세지 수, 각 채팅 상대의 이름
  const chatRoomList = [
    {
      chatRoomNo: 1,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7MnOcQUfqtgTKRpCld7E-_P2JCyF-QMlesD887gUZ6A&s',
      lastChat: '안녕하세요',
      unreadCnt: 1,
      name: '김태현1'
    },
    {
      chatRoomNo: 2,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7MnOcQUfqtgTKRpCld7E-_P2JCyF-QMlesD887gUZ6A&s',
      lastChat: '안녕히가세요',
      unreadCnt: 2,
      name: '김태현2'
    },
    {
      chatRoomNo: 3,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7MnOcQUfqtgTKRpCld7E-_P2JCyF-QMlesD887gUZ6A&s',
      lastChat: '화이팅이에요',
      unreadCnt: 51,
      name: '김태현3'
    },
    {
      chatRoomNo: 4,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7MnOcQUfqtgTKRpCld7E-_P2JCyF-QMlesD887gUZ6A&s',
      lastChat: '화이팅이에요',
      unreadCnt: 4,
      name: '김태현4'
    }
  ]

  


  const hoverDescription = '삭제';

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
          <div className='request-friend-container'>
            <div className='request-friend-img-container'>
              <img className='request-friend-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7MnOcQUfqtgTKRpCld7E-_P2JCyF-QMlesD887gUZ6A&s'></img>
              <div id='delete' className='request-cancle-img' onClick={handleFriendDelete}></div>
            </div>
            <span className='request-friend-name'>
              김태현
            </span>
          </div>
        </div>
      </div>



      <h2 className='chat-list-title'>
        채팅목록 ({chatListCnt})
      </h2>
      <div className='chat-list-container'>
        {chatRoomList.map((chatRoom, index) => {
          return (
            <div className='chat-list' key={index}>
              <div className='friend-container'>
                <div className='friend-name'>
                  <p>{chatRoom.name}</p>
                </div>
                  <div className='friend-img-container'>
                    <img className='friend-img' src={chatRoom.img}></img>
                  </div>
              </div>
              <div className='last-chat'>
                <p>{chatRoom.lastChat}</p>
              </div>
              <div className='chat-cnt-icon-container'>
                <div className='chat-cnt-icon'>
                  <p className='chat-cnt'>{chatRoom.unreadCnt}</p>
                </div>
              </div>
            </div> 
          )
        })}
      </div>
    </div>
  );
}

export default Chat;