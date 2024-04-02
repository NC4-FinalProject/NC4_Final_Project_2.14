import React from 'react';
import MyReviewContentItem from './MyReviewContentItem';

const MyReviewContentList = ({reviews}) => {

  
  return (
    <div className='ReviewContentList'>
      {reviews && reviews.map(
        (reviews, index) =>
          <MyReviewContentItem key={index} reviews={reviews}/>
      )}
    </div>
  );
}

export default MyReviewContentList;