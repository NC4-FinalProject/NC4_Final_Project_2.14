import React from 'react';
import Selectbox_copy from '../../components/ui/Selectbox copy';


const SelectboxSample = () => {
  const options = ['test1', 'test2', 'test3'];
  const fontSize = '20px';

  return (
    <div>
      <Selectbox_copy options={options} fontSize={fontSize}></Selectbox_copy>
    </div>
  );
}

export default SelectboxSample;