import React, { useEffect, useState } from 'react';
import '../../../scss/Header.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import ToggleMenu from '../ToggleMenu';

const Header = () => {
    const navi = useNavigate();

    // 현재 경로에 따라 타이틀 반환
    const useTitle = () => {
        const location = useLocation();
        const pathName = location.pathname.split('/')[1];

        switch (pathName) {
            case '':
                return '';
            case 'chat':
                return '채팅';
            case 'alarm':
                return '알림';
            case 'search':
                return '검색';
            case 'friend':
                return '친구';
            default:
                return '';
        }
    }

    const [alarm, setAlarm] = useState(false);

    useEffect(() => {
        // 알람 여부 확인하는 API 호출
        // setAlarm(true);
    }, []);

    return (
        <div className='Header'>
            <div className='logo'>
                <img src={process.env.PUBLIC_URL + '/assets/logo.svg'} alt='로고'/>
            </div>
            <div className='title'>
                {useTitle()}
            </div>
            <div className="icon-wrapper">
                <div className='chat' onClick={() => navi('/chat')}>
                    <img src={process.env.PUBLIC_URL + '/assets/icons/chat_icon.svg'}
                         alt='채팅 아이콘' />
                </div>
                <div className='alarm' >
                    <img src={process.env.PUBLIC_URL + '/assets/icons/' + (alarm ? 'alarm_on' : 'alarm_off') + '.svg'} 
                         alt='알람 아이콘' />
                    <ToggleMenu></ToggleMenu>
                </div>
            </div>
        </div>
    );
}

export default Header;