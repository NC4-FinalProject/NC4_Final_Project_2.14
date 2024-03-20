import React from 'react';
import Input from '../../components/ui/lnput/Input';

const InputSample = () => {
    return (
        <div className="InputSample">
            <Input color={'gray'} className="input-container" placeholder={'검색'}/>
            <Input color={'white'} placeholder={'검색'}/>
        </div>
    );
}

export default InputSample;