import React from 'react';
import '../../../scss/Header.scss';
import {useLocation} from "react-router-dom";

const Header = ({title}) => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const logoColor = isHomePage ? 'white' : 'black';

    return (
        <div className='Header'>
            <div className='logo'>
                <img src={process.env.PUBLIC_URL + `/assets/logo_${logoColor}.svg`} alt='로고'/>
            </div>
            <div className='title'>
                {title}
            </div>
            <div className="icon-wrapper">
                <div className='chat'>
                    <img src={process.env.PUBLIC_URL + `/assets/icons/chat_${logoColor}.svg`} alt='채팅 아이콘'/>
                </div>
                <div className='alarm'>
                    <img src={process.env.PUBLIC_URL + `/assets/icons/alarm_${logoColor}.svg`} alt='알림 아이콘'/>
                </div>
            </div>
        </div>
    );
}

export default Header;