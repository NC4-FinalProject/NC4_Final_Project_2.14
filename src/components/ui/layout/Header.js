import React from 'react';
import '../../../scss/Header.scss';

const Header = () => {
  return (
    <div className='Header'>
        <div className='logo'>
            <img src={process.env.PUBLIC_URL+'/assets/logo.svg'} alt='로고' />
        </div>
        <p className='title'>
            검색
        </p>
        <div className='chat'>
            <img src={process.env.PUBLIC_URL + '/assets/chat_icon.svg'} alt='채팅 아이콘'/>
        </div>
        <div className='alarm'>
            <img src={process.env.PUBLIC_URL + '/assets/alarm.svg'} alt='알림 아이콘'/>
        </div>
    </div>
  );
}

export default Header;