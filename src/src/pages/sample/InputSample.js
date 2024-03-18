import React from 'react';
import TextInput from "../../components/ui/lnput/TextInput";
import SearchInput from '../../components/ui/lnput/SeacrhInput';

const InputSample = () => {
  return (
    <div className="InputSample">
        <TextInput color={'red'} placeholder={'태그를입력해주세요'} />
        <SearchInput color={'red'} placeholder={'검색'} />
    </div>
  );
}

export default InputSample;