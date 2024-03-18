<<<<<<< HEAD
import { Dropdown, MenuButton } from '@mui/base';
import React, { useRef, useState } from 'react';

const ToggleMenu = ({ children }) => {
  return (
    <Dropdown>
      <MenuButton>
        {}
      </MenuButton>
    </Dropdown>
  );
};

const ImageComponent = ({src, alt}) => {
  return (
    <img src={src} alt={alt} />
=======
import React, { useEffect, useRef, useState } from 'react';
import '../../scss/ui/ToggleMenu.scss';

const ToggleMenu = ({ items, onMenuItemClick, style }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeToggle = () => setIsOpen(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (toggleRef.current && !toggleRef.current.contains(event.target)) {
        closeToggle();
      }
    }

    // mousedown 이벤트 리스너를 추가합니다.
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toggleMenu]);
  return (
    <div className="menu-container" ref={toggleRef} style={style}>
      <button onClick={toggleMenu} className="menu-button">
        Open Menu
      </button>
      {isOpen && (
        <ul className="menu-list open">
          {items.map((item, index) => (
            <li key={index} className="menu-item" onClick={() => onMenuItemClick(item)}>
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
>>>>>>> origin/dev/240318
  );
}

export default ToggleMenu;

export { ImageComponent };