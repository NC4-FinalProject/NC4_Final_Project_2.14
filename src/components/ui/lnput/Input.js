import React from 'react';
import '../../../scss/ui/Input.scss';
import { forwardRef } from 'react';



const Input = forwardRef(({ id, type, placeholder, value, color, label, className, labelClassName, readOnly, ...rest }, ref) => {
    const inputColor = ['white'].includes(color) ? 'input-color-' + color : "input-color-gray";
    // const inputColor = color ? `input-color-${color}` : '';
    return (
        <>
            {label !== undefined &&
                <div className={`label ${labelClassName}`}>{label}</div>}
            <input
                type={type}
                className={`Input ${inputColor} ${className}\`}`}
                id={id}
                placeholder={placeholder}
                value={value} 
                readOnly={readOnly}
                ref={ref}
                {...rest}
            />
        </>

    );
});

Input.defaultProps = {
    type: 'text',
    placeholder: '',
    color: "default",
    labelClassName: '',
};


export default Input;

