import React from 'react';
import '../../../scss/ui/Input.scss';

const TextInput = ({ id, type, placeholder, onChange, value }) => {
  return (
    <input
      type={type}
      className="Input" 
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

TextInput.defaultProps = {
  type: 'text',
  placeholder: '입력해주세요',
};

export default TextInput;