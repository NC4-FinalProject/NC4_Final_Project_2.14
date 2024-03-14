import React from 'react';
import SelectboxSample from './sample/SelectboxSample';
import Selectbox from '../components/ui/Selectbox';

const Search = () => {
  const options = ['등록일 높은순', '등록일 낮은순', '멤버수 높은순'];
  const fontSize = '0.7rem';
  return (
    <>
    <div style={{ width:'200px', height: '50px'}}>
    <Selectbox options={options} fontSize={fontSize}></Selectbox>
    </div>
    </>
  );
}

export default Search;