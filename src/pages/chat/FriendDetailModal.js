import React from 'react';
import '../../scss/pages/chat/FriendDetailModal.scss';
import Tag from '../../components/ui/Tag';

const FriendDetailModal = ({ isOpen, close, userInfo }) => {
  if (!isOpen) return null;

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
              <h1>{userInfo.name}</h1>
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
              상세정보
            </div>
            <div className='menu-btn'>
              친구추가
            </div>
            <div className='menu-btn'>
              채팅
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FriendDetailModal;

