import React from 'react';
import Selectbox from "../../components/ui/SelectBox";

const SelectboxSample = () => {
    const options = ['test1', 'test2', 'test3'];
    const fontSize = '20px';

    return (
        <div>
            <Selectbox options={options} fontSize={fontSize}></Selectbox>
        </div>
    );
}

export default SelectboxSample;