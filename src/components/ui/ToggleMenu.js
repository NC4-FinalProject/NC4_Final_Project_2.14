import { Popover } from '@mui/material';
import React from 'react';

const ToggleMenu = ( ) => {
  return (
    <div className='ToggleMenu'>
        <Popover
          
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
            <div>test</div>
        </Popover>
    </div>
  );
}

export default ToggleMenu;