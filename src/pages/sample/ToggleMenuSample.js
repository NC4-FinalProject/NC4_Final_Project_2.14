import React, { useState } from 'react';
import ToggleMenu from '../../components/ui/ToggleMenu';

const ToggleMenuSample = () => {
  const menuItems = [
    { label: 'Profile', action: () => setBehaviour('Profile') },
    { label: 'Settings', action: () => setBehaviour('Settings') },
    { label: 'Logout', action: () => setBehaviour('Logout') },
    { label: 'Help', action: () => setBehaviour('Help')},
    { label: 'About', action: () => setBehaviour('About')}
  ];

  const handleMenuItemClick = (item) => {
    console.log(`${item.label} clicked`);
    item.action();
  };

  const [behaviour, setBehaviour] = useState('');

  return (
    <>
      <div style={
        { width: '200px',
          height: '200px',
          border: '1px solid #000'}
      
      }>
        <ToggleMenu
          items={menuItems}
          onMenuItemClick={handleMenuItemClick}
          toggleOpen
        />
      </div>
      <br />
      <br />
      <br />
      <div>
        {behaviour} 클릭했습니다.
      </div>
    </>
  );
}

export default ToggleMenuSample;