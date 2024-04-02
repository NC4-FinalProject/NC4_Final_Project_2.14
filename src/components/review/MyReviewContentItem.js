import { Rating } from '@mui/material';
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMyReview } from '../../apis/reviewApi';

const MyReviewContentItem = ({ reviews }) => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getMyReview({ page: 0 }));
  }, [reviews]);

  const date = new Date(reviews.regDate);
  const formattedDate = date.toLocaleDateString();

  return (
    <div className='myReview_content_box'>
      <img
        className='img2'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhSkozbxrfkXMlzAUfgmUenBijb8uDW6FjUg&usqp=CAU'
        href={`/review/${reviews.seq}`}
      ></img>

      <div className='content_box'>
        <p className='content1'>
          {reviews.title}
          <span className='regdate'>{formattedDate}</span>
        </p>

        <p className='content2'>
          {reviews.content}
        </p>

        <div className='rating'>
          <Rating
            className='rating'
            value={reviews.rating}
            readOnly
          ></Rating>
        </div>

      </div>


    </div>
  );
}

export default MyReviewContentItem;