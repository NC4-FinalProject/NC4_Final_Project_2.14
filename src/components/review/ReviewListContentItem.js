import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getReview } from '../../apis/ReviewApi.js';

const ReviewListContentItem = () => {
    const review = useSelector(state => state.review.reviewDTO);
    const searchCondtion = useSelector(state => state.review.searchCondition);
    const searchKeyword = useSelector(state => state.review.searchKeyword);
    const page = useSelector(state => state.review.page);
    const dispatch = useDispatch();
    const navi = useNavigate();

    useEffect(() => {
        dispatch(getReview({searchCondition: 'all', searchKeyword: '', page: 0}));
    }, []);

    return (
        <>
            {review.content && review.content.map(
                (review, index) =>
                    <div className='reviewList_content' key={index}>
                        <img className='img2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhSkozbxrfkXMlzAUfgmUenBijb8uDW6FjUg&usqp=CAU'></img>

                        <div className='content_box'>
                            <p className='content1'>
                                {review.title}
                                <span className='regdate'>{review.regDate}</span>
                            </p>

                            <p className='content2'>
                                {review.content}
                            </p>

                            <p className='writer'>
                                {review.writer}
                            </p>

                            <div className='rating'>
                               {review.rating}
                            </div>
                        </div>
                    </div>
            )}
        </>
    );
}

export default ReviewListContentItem;