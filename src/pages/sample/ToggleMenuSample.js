import React, { useRef, useState } from 'react';
import ToggleMenu from '../../components/ui/ToggleMenu';

const ToggleMenuSample = () => {
  // 부모 컴포넌트의 감싸주는 태그에 ref를 사용하기 위해 useRef를 사용
  const toggleRef = useRef();

  // props로 넘겨줄 메뉴 아이템 리스트와 클릭 시 실행될 함수 정의
  const menuItems = [
    { label: 'Profile', action: () => setBehaviour('Profile') },
    { label: 'Settings', action: () => setBehaviour('Settings') },
    { label: 'Logout', action: () => setBehaviour('Logout') },
    { label: 'Help', action: () => setBehaviour('Help')},
    { label: 'About', action: () => setBehaviour('About')}
  ];

  // 리스트의 메뉴 아이템 클릭 시 실행될 함수
  const handleMenuItemClick = (item) => {
    item.action();
  };

  const [behaviour, setBehaviour] = useState('');

  return (
    <>
      <div ref={toggleRef} style={
        { width: '200px',
          height: '200px',
          border: '1px solid #000'}
      
      }>
        <ToggleMenu
          items={menuItems}
          onMenuItemClick={handleMenuItemClick}
          toggleRef={toggleRef}
        />
      </div>
      <br />
      <br />
      <br />
      {/* 눌렀을 때의 함수의 동작을 표시해주기 위한 구문 */}
      <div>
        {behaviour} 클릭했습니다.
      </div>
    </>
  );
}

export default ToggleMenuSample;