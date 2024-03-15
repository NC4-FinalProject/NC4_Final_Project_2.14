import React from 'react';
import '../../../scss/ui/Input.scss';

<<<<<<< HEAD
const TextInput = ({ id, type, placeholder, onChange, value, onClick, color }) => {
=======
const SearchInput = ({ id, type, placeholder, onChange, value, onClick, color }) => {
>>>>>>> 4e8028083c66694a7ae86912629583b52d7f03d5
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

<<<<<<< HEAD
TextInput.defaultProps = {
=======
SearchInput.defaultProps = {
>>>>>>> 4e8028083c66694a7ae86912629583b52d7f03d5
  type: 'text',
  placeholder: '',
};

<<<<<<< HEAD
export default TextInput;
=======
export default SearchInput;
>>>>>>> 4e8028083c66694a7ae86912629583b52d7f03d5
