import React from 'react';
import Selectbox from '../../components/ui/Selectbox';

const SelectboxSample = () => {
  const options = ['test1', 'test2', 'test3'];
  const fontSize = '20px';

  return (
    <div style={
      { width:'200px', height: '50px'}
    }>
      <Selectbox options={options} fontSize={fontSize}></Selectbox>
    </div>
  );
}

export default SelectboxSample;