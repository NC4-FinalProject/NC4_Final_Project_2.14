import React, { useEffect } from 'react'
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';

const ReviewListContentItem = ({ review }) => {
    useEffect(() => {
    }, [review]);
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
  const nowDate = detailDate(new Date(review.regDate));
    return (
        <>
            <div className='ReviewListContentItem'>
                <Link to={`/review/${review.seq}`}>
                    <img className='img2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhSkozbxrfkXMlzAUfgmUenBijb8uDW6FjUg&usqp=CAU' alt=''></img>
                </Link>
                <div className='content_box'>
                    <p className='content1'>
                        <Link to={`/review/${review.seq}`}>
                            {review.title}
                        </Link>
                        <span className='regdate'>{nowDate}</span>
                    </p>

                    <p className='content2'>
                        {review.content}
                    </p>
                    <div className='wrter_rating_box'>
                        <p className='writer'>
                            닉네임 : {review.writer}
                        </p>

                        <div className='rating'>
                            <Rating className='rating' value={review.rating} readOnly></Rating>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ReviewListContentItem;