import {React, useCallback, useEffect, useState} from 'react';
import '../../scss/pages/chat/Chat.scss';
import FriendDetailModal from './FriendDetailModal';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getChatList} from "../../apis/chatApi";

const Chat = () => {
  const currentUserId = useSelector(state => state.userSlice.loginId);
  const chatList = useSelector(state => state.chatSlice.chatList);

  const dispatch = useDispatch();
  const navi = useNavigate();

  const userInfo = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7MnOcQUfqtgTKRpCld7E-_P2JCyF-QMlesD887gUZ6A&s',
    name: '김태현',
    tag1: '태그1',
    tag2: '태그2',
    tag3: '태그3'
  },
  ];

  // modal 컴포넌트를 위한 변수
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleFriendDelete = (e) => {
    e.stopPropagation();
    // todo : 친구 요청 삭제 기능 구현
    console.log('handleFriendDelete');
  }

  const getCurrentUserChatList = useCallback(() => {
    dispatch(getChatList(currentUserId));
  }, [currentUserId]);

  // 첫 렌더링 시 채팅목록 가져오가
  useEffect(() => {
      getCurrentUserChatList();
  }, []);

  return (
    <div className='Chat'>
      {/* 친구 요청 목록 */}
      <div className='chat-request-container'>
        <div className='chat-request-title'>
          <h2>친구 요청 ({})</h2>
        </div>
        <div className='chat-request-list'>
          <div className='request-friend-container' onClick={openModal}>
          <FriendDetailModal userInfo={userInfo} isOpen={isModalOpen} close={closeModal} />
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
        채팅 목록 ({chatList.length})
      </h2>
      {/* 채팅 목록 */}
      {chatList.length === 0 && <div className='chat-list-container'>채팅이 없습니다.</div>}
      {chatList.map((chat, index) => {
          return (
            <div className='chat-list-container' onClick={() => navi(`/chat/${chat.seq}`)}>
              <div className='chat-list' key={index}>
                <div className='friend-container'>
                  <div className='friend-name'>
                    <p>{chat.partnerName}</p>
                  </div>
                    <div className='friend-img-container'>
                      <img className='friend-img' src={chat.partnerImg}></img>
                    </div>
                </div>
                <div className='last-chat'>
                  <p>{chat.lastChat}</p>
                </div>
                <div className='chat-cnt-icon-container'>
                  <div className='chat-cnt-icon'>
                    <p className='chat-cnt'>{chat.unreadCnt}</p>
                  </div>
                </div>
              </div> 
            </div>
          )
        })}
      {/* <div className='chat-list-container' onClick={() => navi('/chat-room')}>
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
      </div> */}
    </div>
  );
}

export default Chat;