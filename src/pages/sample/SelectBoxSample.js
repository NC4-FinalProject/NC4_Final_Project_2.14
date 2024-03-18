import React, { useEffect, useState } from 'react';
import SelectBox from '../../components/ui/SelectBox';


const SelectBoxSample = () => {
  const options = ['Option1', 'Option2', 'Option3'];
  const fontSize = '16px';

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
        <SelectBox options={options} fontSize={fontSize} onSelectChange={handleSelectChange}></SelectBox>
      </div>
      {/* 페이지 처음 왔을 때 렌더링 되는 p 태그 */}
      <p>이곳에 값이 출력됩니다.</p>
      {/* 드롭다운 선택 시 렌더링 되는 p 태그 */}
      <p>{selectedValue}</p>
    </div>
  );
}

export default SelectBoxSample;