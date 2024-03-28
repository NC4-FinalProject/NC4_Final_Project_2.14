import React, { useEffect } from 'react'
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';

const ReviewListContentItem = ({ review }) => {
    useEffect(() => {
    }, [review]);
    const date = new Date(review.regDate);
    const formattedDate = date.toLocaleDateString();
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
                        <span className='regdate'>{formattedDate}</span>
                    </p>

                    <p className='content2'>
                        {review.content}
                    </p>

                    <p className='writer'>
                        닉네임: {review.writer}
                    </p>

                    <div className='rating'>
                        <Rating className='rating' value={review.rating} readOnly></Rating>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ReviewListContentItem;