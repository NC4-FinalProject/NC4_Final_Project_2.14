import React, { useEffect, useState, useRef, useMemo } from 'react';
import '../../../scss/Header.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import ToggleMenu from '../ToggleMenu';
import { useSelector } from 'react-redux';

const Header = () => {
    const navi = useNavigate();
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const logoColor = isHomePage ? 'white' : 'black';
    
    // 로그인 여부 확인
    const isLogin = useSelector(state => state.userSlice.isLogin);

    const [menuOpen, setMenuOpen] = useState(false);
    const anchorRef = useRef(null);
    const toggleMenu = () => {
      setMenuOpen((prevOpen) => !prevOpen);
    };

    const items = [
        { label: 'Item 1', onClick: () => console.log('Item 1 selected') },
        { label: 'Item 2', onClick: () => console.log('Item 2 selected') },
        { label: 'Item 3', onClick: () => console.log('Item 3 selected') },
        { label: 'Item 4', onClick: () => console.log('Item 4 selected') },
        { label: 'Item 5', onClick: () => console.log('Item 5 selected') },
        { label: 'Item 6', onClick: () => console.log('Item 6 selected') },
        { label: 'Item 7', onClick: () => console.log('Item 7 selected') } 
    ];


    // 현재 경로에 따라 타이틀 반환
    const useTitle = () => {
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
            case 'user':
                return '로그인';
            default:
                return '';
        }
    }

    useEffect(() => {
        // 알람 여부 확인하는 API 호출
        // setAlarm(true);
    }, []);


    return (
        <div className='Header'>
            <div className='logo'>
                <img src={process.env.PUBLIC_URL + `/assets/logo_${logoColor}.svg`} alt='로고'/>
            </div>
            <div className='title'>
                {useTitle()}
            </div>
            <div className="icon-wrapper">
                {isLogin ? (
                    <>
                        <div className='chat' onClick={() => navi('/chat')}>
                            <img className='img' src={process.env.PUBLIC_URL + `/assets/icons/chat_${logoColor}.svg`} alt='채팅 아이콘'/>
                        </div>
                        <div
                            className='alarm'
                            ref={anchorRef}
                        >
                            <img className='img' src={process.env.PUBLIC_URL + `/assets/icons/alarm_${logoColor}.svg`} alt='알림 아이콘' 
                            onClick={toggleMenu}
                            />
                        </div>
                    </>
                ) : (
                    <div className='login' onClick={() => navi('/user/sign-in')}>
                        <img className='img' src={process.env.PUBLIC_URL + `/assets/icons/login_${logoColor}.svg`} alt='로그인 아이콘'></img>    
                    </div>
                )}
                <ToggleMenu
                    items={items}
                    anchorEl={anchorRef.current}
                    open={menuOpen}
                    onClose={() => setMenuOpen(false)}
                >
                </ToggleMenu>

                {/* 원본 */}
                {/* <div className='chat' onClick={() => navi('/chat')}>
                    <img src={process.env.PUBLIC_URL + `/assets/icons/chat_${logoColor}.svg`} alt='채팅 아이콘'/>
                </div>
                <div
                    className='alarm'
                    ref={anchorRef}
                >
                    <img src={process.env.PUBLIC_URL + `/assets/icons/alarm_${logoColor}.svg`} alt='알림 아이콘' 
                     onClick={toggleMenu}
                     />
                    <ToggleMenu
                        items={items}
                        anchorEl={anchorRef.current}
                        open={menuOpen}
                        onClose={() => setMenuOpen(false)}
                    >
                    </ToggleMenu>
                </div> */}
            </div>
        </div>
    );
}

export default Header;