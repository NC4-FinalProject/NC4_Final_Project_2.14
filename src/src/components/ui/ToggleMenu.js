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
  );
}

export default ToggleMenu;

export { ImageComponent };