import React, { useState } from 'react';
import '../../scss/ui/Selectbox.scss';
import { MenuItem, Select } from '@mui/material';
// import Select from 'react-select';

const Selectbox = () => {
  // const [selectedOption, setSelectedOption] = useState(options[0]);

  // const formatOptionLabel = ({ value, label }) => (
  //   <div style={{ display: 'flex', alignItems: 'center' }}>
  //     {selectedOption.value === value && <span>✔️</span>}
  //     <span>{label}</span>
  //   </div>
  // );

  // const customStyles = {
  //   control: (provided) => ({
  //     ...provided
  //   }),
  //   indicatorsContainer: (provided) => ({
  //     ...provided,
  //     display: '',
  //   }),
  // };

  const options = ['option1', 'option2', 'option3', 'option4'];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div style={{width:'400px'}}>
      
      <Select className='Selectbox' value={selectedOption} onChange={handleChange}>
        {options.map((option, index) => (
          <MenuItem value={option} key={index}>{option}</MenuItem>
        ))}
      </Select>
    </div>

    // <Select
    //   options={options}
    //   value={selectedOption}
    //   onChange={setSelectedOption}
    //   formatOptionLabel={formatOptionLabel}
    //   styles={customStyles}
    // />
  );
}

export default Selectbox;