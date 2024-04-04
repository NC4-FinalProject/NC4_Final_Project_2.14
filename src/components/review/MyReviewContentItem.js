import { Rating } from '@mui/material';
import React, { useEffect } from 'react'

const MyReviewContentItem = ({ reviews }) => {
  useEffect(() => {
  }, [reviews]);

  const detailDate = (a) => {
		const milliSeconds = new Date() - a;
		const seconds = milliSeconds / 1000;
		if (seconds < 60) return `방금 전`;
		const minutes = seconds / 60;
		if (minutes < 60) return `${Math.floor(minutes)}분 전`;
		const hours = minutes / 60;
		if (hours < 24) return `${Math.floor(hours)}시간 전`;
		const days = hours / 24;
		if (days < 7) return `${Math.floor(days)}일 전`;
		const weeks = days / 7;
		if (weeks < 5) return `${Math.floor(weeks)}주 전`;
		const months = days / 30;
		if (months < 12) return `${Math.floor(months)}개월 전`;
		const years = days / 365;
		return `${Math.floor(years)}년 전`;
	};
  const nowDate = detailDate(new Date(reviews.regDate));

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
          <span className='regdate'>{nowDate}</span>
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