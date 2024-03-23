import React, { useState } from 'react';
import './src/../../scss/ui/Tag.scss';
import { Grid } from '@mui/material';
import Input from './src/../../components/ui/lnput/Input';

const InputTagEnter = () => {
    const [tags, setTags] = useState([]);

    const handleTagInput = (e) => {
        if (e.key === 'Enter' && tags.length < 5) {
          setTags([...tags, e.target.value]);
          e.target.value = '';
        }
    };

    const handleTagRemove = (index) => {
        setTags(tags.filter((tag, i) => i !== index));
    };

    return (
        <div>
            <Grid container>
                <Grid item xs={10}>
                    <p>tag란</p>
                    <Input
                        type='text'
                        name='tags'
                        placeholder=''
                        onKeyDown={handleTagInput}
                    />
                </Grid>
            </Grid>
            <br />
            <div>
                {tags.map((tag, index) => (
                    <span key={index} className="Tag tag-color-blue">
                        {tag}
                        <span onClick={() => handleTagRemove(index)}>&times;</span>
                    </span>
                ))}
            </div>
        </div>
    );
}

export default InputTagEnter;