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
    const currentUserId = useSelector(state => state.userSlice.loginId);

    if (!isOpen) return null;
  const handleDetail = () => {
      // todo : 상세정보 페이지로 이동
  }
  const handleAddFriend = () => {
      // todo : 친구추가 로직
  }
  // 채팅방 이동 로직, 현재 유저가 가지고 있는 채팅방에 클릭한 유저의 이름이 없으면 새로 만들어줌
  const handleChat = () => {
      const chatMakeInfo = {
          makerId : currentUserId,
          partnerId : userInfo.searchResultId
      }
      // 현재 persist의 chatList를 가져와 가져온 userInfo의 이름과 비교해서 있으면 해당 채팅방 객체를 가져옴
      const chatRoom = chatList.find (chat =>
        chat.makerName === userInfo.searchResultName ||
        chat.partnerName === userInfo.searchResultName
      );

      if (chatRoom) {
          navi(`/chat/${chatRoom.seq}`);
      } else if (chatRoom === undefined) {
          // 모달창으로 가져온 user 객체의 id만 추출해서 채팅방 생성 api 호출
          dispatch(makeChatRoom(chatMakeInfo));
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
              <h1>{userInfo.searchResultName}</h1>
            </div>
            <div className='user-image'>
              <img src={userInfo.searchResultImg}></img>
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
            <div className='menu-btn' onClick={handleChat}>
                <p>채팅</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FriendDetailModal;

