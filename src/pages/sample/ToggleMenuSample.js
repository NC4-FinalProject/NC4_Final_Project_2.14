import React, { useState, useRef } from 'react';
import ToggleMenu from '../../components/ui/ToggleMenu';

const ToggleMenuSample = () => {

  // 여기부분 그대로 주세요
  const [menuOpen, setMenuOpen] = useState(false);
  const anchorRef = useRef(null);
  
  const toggleMenu = () => {
    setMenuOpen((prevOpen) => !prevOpen);
  };
  //////////////////////

  // Toggle 클릭시 나타날 메뉴 아이템, 사용할 onClick 함수를 추가하세요 (커스텀)
  const menuItems = [
    { label: 'Item 1', onClick: () => console.log('Item 1 selected') },
    { label: 'Item 2', onClick: () => console.log('Item 2 selected') },
    // 추가 아이템...
  ];
  
  return (
    <div>
      {/* ToggleMenu를 감쌀 태그 */}
      <div
      ref={anchorRef}       // 그대로 주세요
      onClick={toggleMenu}  // 그대로 주세요
      style={{
        cursor: 'pointer',
        width: '200px',
        height: '30px',
        textAlign: 'center',
        backgroundColor: 'lightgray'
        }}>
          여기를 클릭하세요
      </div>
      <ToggleMenu
        anchorEl={anchorRef.current}        // 그대로 주세요
        open={menuOpen}                     // 그대로 주세요
        onClose={() => setMenuOpen(false)}  // 그대로 주세요
        items={menuItems}
      />
    </div>
  );
}

export default ToggleMenuSample;