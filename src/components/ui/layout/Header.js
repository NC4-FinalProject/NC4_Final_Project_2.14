import React, { useState } from 'react';
import '../../../scss/Header.scss';

const Header = () => {
    return (
        <div className='Header'>
            <div className='logo'>
                <img src={process.env.PUBLIC_URL + '/assets/logo.svg'} alt='로고'/>
            </div>
            <div className='title'>
                검색
            </div>
            <div className="icon-wrapper">
                <div className='chat'>
                    <img src={process.env.PUBLIC_URL + '/assets/icons/chat_icon.svg'} alt='채팅 아이콘'/>
                </div>
                <div className='alarm'>
                    <img src={process.env.PUBLIC_URL + '/assets/icons/alarm.svg'} alt='알림 아이콘'/>
                </div>
            </div>
        </div>
    );
}

export default Header;