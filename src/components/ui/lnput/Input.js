import React from 'react';
import '../../../scss/ui/Input.scss';
import { forwardRef } from 'react';

const Input = forwardRef(({ id, type, placeholder, onChange, value, onClick, color, ...rest }, ref) => {
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
      ref={ref}
      {...rest}
    />
  );
});

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  color:"default"
};


export default Input;

