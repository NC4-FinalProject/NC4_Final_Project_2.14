import React, { useRef, useState } from 'react';
import NewToggleMenu from '../../components/ui/NewToggleMenu';

const NewToggleMenuSample = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const anchorRef = useRef(null);
    const toggleMenu = () => setMenuOpen(prev => !prev);
  
    const menuItems = [
        { label: 'Item 1', onClick: () => console.log('Item 1 selected') },
        { label: 'Item 2', onClick: () => console.log('Item 2 selected') },
        { label: 'Item 3', onClick: () => console.log('Item 3 selected') },
        { label: 'Item 4', onClick: () => console.log('Item 4 selected') },
        { label: 'Item 5', onClick: () => console.log('Item 5 selected') },
        { label: 'Item 6', onClick: () => console.log('Item 6 selected') },
        { label: 'Item 7', onClick: () => console.log('Item 7 selected') }
      // 추가 아이템...
    ];
  
    return (
      <div>
        <div ref={anchorRef} onClick={toggleMenu} className="NewToggleMenu">
          여기를 클릭하세요
        </div>
        <NewToggleMenu
          anchorEl={anchorRef.current}
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          items={menuItems}
        />
      </div>
    );
  };
  
  export default NewToggleMenuSample;