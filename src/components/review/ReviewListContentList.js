import React from 'react'
import ReviewListContentItem from './ReviewListContentItem'

const ReviewListContentList = ({reviews}) => {
    return (
        <div className='ReviewListContentList'>
            {reviews && reviews.map(
                (review, index) =>
                    <ReviewListContentItem key={index} review={review}/>
            )}
        </div>
    );
}

export default ReviewListContentList;