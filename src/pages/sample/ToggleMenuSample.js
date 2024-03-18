import React from 'react';
import ToggleMenu from '../../components/ui/ToggleMenu';

const ToggleMenuSample = () => {
<<<<<<< HEAD
  return (
    <>

    </>
=======
  // 예제용 메뉴 아이템 label : 리스트에 표출될 텍스트, action : 클릭 시 실행될 함수
  const menuItems = [
    { label: 'Profile', action: () => console.log('Profile clicked') },
    { label: 'Settings', action: () => console.log('Settings clicked') },
    { label: 'Logout', action: () => console.log('Logout clicked') },
    { label: 'Help', action: () => console.log('Help clicked')},
    { label: 'About', action: () => console.log('About clicked')}
  ];

  // 클릭 이벤트 핸들러
  const handleMenuItemClick = (item) => {
    item.action();
  };

  return (
    <div>
      <ToggleMenu
        items={menuItems}
        onMenuItemClick={handleMenuItemClick}
      />
    </div>
>>>>>>> origin/dev/240318
  );
}

export default ToggleMenuSample;