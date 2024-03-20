import React, { useState } from 'react'
import '../../scss/review/ReviewList.scss';
import SelectBox from '../../components/ui/SelectBox.js';
import Input from '../../components/ui/lnput/Input.js';
import SearchIcon from '@mui/icons-material/Search';
import ReviewListContent from '../../components/review/ReviewListContent.js';
import CustomPagination from '../../components/ui/CustomPagination.js';

const ReviewList = () => {
    const options = ['최신순', '오래된순', '별점 높은순', '별점 낮은순'];
    const fontSize = '13px';

    

    return (
        <div className='reviewList_container'>
            <div className='review_box'>
                <SearchIcon id={'SearchIcon'}></SearchIcon>
                <Input id={'Input'} color={'gray'} placeholder={'검색'} />
                <div className='SelectBox'>
                    <SelectBox options={options} fontSize={fontSize}></SelectBox>
                </div>
            </div>
            <ReviewListContent/>
            <ReviewListContent/>
            <ReviewListContent/>
            <ReviewListContent/>
            <div className='CustomPagination'>
                <CustomPagination total={"10"}/>    
            </div>
        </div>
    );
}

export default ReviewList;