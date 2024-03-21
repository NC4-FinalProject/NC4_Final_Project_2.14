import React from 'react'
import '../../scss/review/MyReview.scss';
import CustomPagination from '../../components/ui/CustomPagination';
import MyReviewContentList from '../../components/review/MyReviewContentList.js';

const MyReview = () => {
  return (
      <div className='myRecruitment_container'>
        <div>
          <h3>내 여행후기</h3>
        </div>
          <MyReviewContentList/>
        <div className='CustomPagination'>
          <CustomPagination total={"10"} />
        </div>
      </div>
  );
}

export default MyReview;