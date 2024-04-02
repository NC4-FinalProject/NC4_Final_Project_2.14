import React, { useCallback } from 'react'
import '../../scss/review/MyReview.scss';
import CustomPagination from '../../components/ui/CustomPagination';
import MyReviewContentList from '../../components/review/MyReviewContentList.js';
import { useDispatch, useSelector } from 'react-redux';
import { getMyReview } from '../../apis/reviewApi.js';

const MyReview = () => {
    const reviews = useSelector(state => state.review.reviews);
    const page = useSelector(state => state.review.page);
    const dispatch = useDispatch();

    const changePage = useCallback((e, v) => {
        dispatch(getMyReview({
          page: parseInt(v) - 1
        }));
      }, []);

    return (
        <div className='myReview_container'>
            <div>
                <h3>내 여행후기</h3>
            </div>
            <MyReviewContentList reviews={reviews.content}/>
            {reviews && <CustomPagination total={reviews.totalPages} page={page + 1} changePage={changePage}/>}
        </div>
    );
}

export default MyReview;