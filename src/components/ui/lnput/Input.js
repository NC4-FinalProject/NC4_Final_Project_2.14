import React from 'react';
import '../../../scss/ui/Input.scss';

const Input = ({ id, type, placeholder, onChange, value, onClick, color }) => {
  const inputColor = ['white'].includes(color) ? 'input-color-' + color : "input-color-gray";
  // const inputColor = color ? `input-color-${color}` : ''; 
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

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  color:"default"
};


export default Input;

