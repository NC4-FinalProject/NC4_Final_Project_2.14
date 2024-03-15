import React, { useEffect, useState } from 'react';
import Selectbox from '../../components/ui/Selectbox';

const SelectboxSample = () => {
  const options = ['option1', 'option2', 'option3'];
  const fontSize = '20px';

  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (selectedValue) => {
    setSelectedValue(selectedValue);
  };

  useEffect(() => {
    setSelectedValue(selectedValue);
  }, [selectedValue]);

  return (
    <div>
      <div style={
        { width:'200px', height: '50px'}
      }>
        <Selectbox options={options} fontSize={fontSize} onSelectChange={handleSelectChange}></Selectbox>
      </div>
      {/* 페이지 처음 왔을 때 렌더링 되는 p 태그 */}
      <p>이곳에 값이 출력됩니다.</p>
      {/* 드롭다운 선택 시 렌더링 되는 p 태그 */}
      <p>{selectedValue}</p>
    </div>
  );
}

export default SelectboxSample;