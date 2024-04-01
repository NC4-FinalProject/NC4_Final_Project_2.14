import React from 'react';
import '../../scss/pages/chat/FriendDetailModal.scss';
import Tag from '../../components/ui/Tag';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {makeChatRoom} from "../../apis/chatApi";

const FriendDetailModal = ({ isOpen, close, userInfo }) => {
    const navi = useNavigate();
    const dispatch = useDispatch();
    const chatList = useSelector(state => state.chatSlice.chatList);

    if (!isOpen) return null;
  const handleDetail = () => {
      // todo : 상세정보 페이지로 이동
  }
  const handleAddFriend = () => {
      // todo : 친구추가 로직
  }
  const handleChat = () => {
      const chatRoom = chatList.find(chat => chat.partnerName === userInfo.nickname);

      if (chatRoom) {
          navi(`/chat/${chatRoom.chatRoomId}`);
      } else {
          dispatch(makeChatRoom(userInfo.id));
      }
  }

  return (
    <>
      <div className='overlay'></div>
      <div className='FriendDetailModal' onClick={close}>
        <div onClick={(e) => e.stopPropagation()}>
          <div className='close-btn'>
            <img src={process.env.PUBLIC_URL + '/assets/icons/close.svg'} alt="" onClick={close}/>
          </div>
          <div className='user-info-container'>
            <div className='user-name'>
              <h1>{userInfo.nickname}</h1>
            </div>
            <div className='user-image'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7MnOcQUfqtgTKRpCld7E-_P2JCyF-QMlesD887gUZ6A&s'></img>
            </div>
            <div className='user-tag'>
              <Tag text={userInfo.tag1} /><Tag text={userInfo.tag2} /><Tag text={userInfo.tag3} />
            </div>
          </div>
          <div className='menu-btn-container'>
            <div className='menu-btn'>
                <p onClick={handleDetail}>상세정보</p>
            </div>
            <div className='menu-btn'>
                <p>친구추가</p>
            </div>
            <div className='menu-btn'>
                <p>채팅</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FriendDetailModal;

