import React, { useEffect } from 'react'
import { Rating } from '@mui/material';

const ReviewListContentItem = ({review}) => {
    useEffect(() => {
        console.log(review);
    }, [review]);
    const date = new Date(review.regDate);
    const formattedDate = date.toLocaleDateString();

    return (
        <>
            <div className='reviewList_content'>
                <img className='img2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhSkozbxrfkXMlzAUfgmUenBijb8uDW6FjUg&usqp=CAU'></img>

                <div className='content_box'>
                    <p className='content1'>
                        {review.title}
                        <span className='regdate'>{formattedDate}</span>
                    </p>

                    <p className='content2'>
                        {review.content}
                    </p>

                    <p className='writer'>
                        {review.writer}
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