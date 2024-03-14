import React, { useState } from 'react';
import '../../scss/ui/Selectbox.scss';
import { MenuItem, Select } from '@mui/material';
// import Select from 'react-select';

const Selectbox = ({options, fontSize}) => {
  if (!options) options = ['선택하세요']; // null일 경우 기본값 설정, 오류방지

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (  
      <Select
        className='Selectbox'
        style={{fontSize: fontSize}}
        value={selectedOption}
        onChange={handleChange}
        renderValue={selected => `${selected.replace('✔️ ', '')}`}
      >
        {options.map((option, index) => (
        <MenuItem value={option} key={index}>
          {selectedOption === option ? '✔️ ' : ''}{option}
        </MenuItem>
        ))}
</Select>
  );
}

export default Selectbox;