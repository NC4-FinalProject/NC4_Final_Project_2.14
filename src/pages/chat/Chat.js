import { React, useEffect, useState } from 'react';
import '../../scss/pages/chat/Chat.scss';
import FriendDetailModal from './FriendDetailModal';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Chat = () => {
  const user = useSelector(state => state.userSlice);

  console.log(user);

  const navi = useNavigate();
  // 현재 세션에 접속한 유저의 id
  const currentUserId = useSelector(state => state.userSlice.userId);
  // 예시 채팅 목록 리스트
  const testChatList = [
    {
      chatRoomId: 1,
      partnerImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7MnOcQUfqtgTKRpCld7E-_P2JCyF-QMlesD887gUZ6A&s',
      lastChat: '안녕하세요',
      unreadCnt: 1,
      partnerName: '김태현1'
    },
    {
      chatRoomId: 2,
      partnerImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7MnOcQUfqtgTKRpCld7E-_P2JCyF-QMlesD887gUZ6A&s',
      lastChat: '안녕히가세요',
      unreadCnt: 2,
      partnerName: '김태현2'
    },
    {
      chatRoomId: 3,
      partnerImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7MnOcQUfqtgTKRpCld7E-_P2JCyF-QMlesD887gUZ6A&s',
      lastChat: '화이팅이에요',
      unreadCnt: 51,
      partnerName: '김태현3'
    },
    {
      chatRoomId: 4,
      partnerImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7MnOcQUfqtgTKRpCld7E-_P2JCyF-QMlesD887gUZ6A&s',
      lastChat: '화이팅이에요',
      unreadCnt: 4,
      partnerName: '김태현4'
    }
  ];
  
  // 예시 친구 요청 리스트
  const userInfo = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7MnOcQUfqtgTKRpCld7E-_P2JCyF-QMlesD887gUZ6A&s',
    name: '김태현',
    tag1: '태그1',
    tag2: '태그2',
    tag3: '태그3'
  },
  {

  },
  ];

  const [chatList, setChatList] = useState([]);
  
  // 채팅 목록을 불러오는 함수
  const getChatList = async (currentUserId) => {
    try {
      const response = await axios.get(`http://localhost:9090/chat/${currentUserId}`);

      return response.data;
    } catch (error) {

      console.error(error);
      return [];
    }
  }

  // 최초 렌더링 시 채팅 목록을 불러옴
  useEffect(() => {
    const fetchChatList = async () => {
      const chatList = await getChatList(currentUserId);
      setChatList(chatList);
    };

    fetchChatList();
  }, []);


  // modal 컴포넌트를 위한 변수
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // 추후 user 객체를 받아서 해당 유저의 정보를 띄워주는 기능을 추가할 예정
  // const [selectedUser, setSelectedUser] = useState(null);

  const requestCnt = 0;

  const handleFriendDelete = (e) => {
    e.stopPropagation();
    console.log('handleFriendDelete');
  }

  return (
    <div className='Chat'>
      {/* 친구 요청 목록 */}
      <div className='chat-request-container'>
        <div className='chat-request-title'>
          <h2>친구 요청 ({requestCnt})</h2>
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
            <div className='chat-list-container' onClick={() => navi(`/chat-room/${chat.chatRoomId}`)}>
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