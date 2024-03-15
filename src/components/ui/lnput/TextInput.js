import React from 'react';
import '../../../scss/ui/Input.scss';

const TextInput = ({ id, type, placeholder, onChange, value, onClick, color }) => {
  const inputColor = color ? `input-color-${color}` : ''; 
  return (
    <input
      type={type}
      className={`Input ${inputColor}`} 
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      onClick={onClick}
      value={value}
 
    />
  );
};

TextInput.defaultProps = {
  type: 'text',
  placeholder: '',
};

export default TextInput;