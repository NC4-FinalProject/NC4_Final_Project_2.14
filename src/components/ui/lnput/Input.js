import React from 'react';
import '../../../scss/ui/Input.scss';

const Input = ({id, type, placeholder, value, color, label, className, labelClassName}) => {
    const inputColor = ['white'].includes(color) ? 'input-color-' + color : "input-color-gray";
    // const inputColor = color ? `input-color-${color}` : '';
    return (
        <>
            {label !== undefined &&
                <span className={`label ${labelClassName}`}>{label}</span>}
            <input
                type={type}
                className={`Input ${inputColor} ${className}\`}`}
                id={id}
                placeholder={placeholder}
                value={value}
            />
        </>

    );
};

Input.defaultProps = {
    type: 'text',
    placeholder: '',
    color: "default",
    labelClassName: '',
};


export default Input;

