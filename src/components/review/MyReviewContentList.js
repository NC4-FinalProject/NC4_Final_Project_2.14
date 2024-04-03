import React from 'react';
import MyReviewContentItem from './MyReviewContentItem';

const MyReviewContentList = ({reviews}) => {

  return (
    <div className='ReviewContentList'>
      {reviews && reviews.map(
        (review, index) =>
          <MyReviewContentItem key={index} reviews={review}/>
      )}
    </div>
  );
}

export default MyReviewContentList;