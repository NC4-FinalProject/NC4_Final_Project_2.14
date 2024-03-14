import React from 'react';
import Selectbox from '../../components/ui/Selectbox';

const SelectboxSample = ({options, fontSize}) => {
  return (
    <div>
      <Selectbox options={options} fontSize={fontSize}></Selectbox>
    </div>
  );
}

export default SelectboxSample;