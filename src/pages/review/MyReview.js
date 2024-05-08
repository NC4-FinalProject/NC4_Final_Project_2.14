import React, {useCallback, useEffect} from 'react'
import '../../scss/review/MyReview.scss';
import CustomPagination from '../../components/ui/CustomPagination';
import MyReviewContentList from '../../components/review/MyReviewContentList.js';
import {useDispatch, useSelector} from 'react-redux';
import {getMyReview} from '../../apis/reviewApi.js';

const MyReview = () => {
    const review = useSelector(state => state.review.reviewDTO);
    const page = useSelector(state => state.review.page);
    const dispatch = useDispatch();


    const search = useCallback((e) => {
        e.preventDefault();

        dispatch(
            getMyReview(
                {
                    page: 0
                }
            )
        );
    }, [dispatch]);

    useEffect(() => {
        dispatch(getMyReview({
            page: 0
        }));
    }, [dispatch]);

    const changePage = useCallback((e, v) => {
        dispatch(getMyReview({
            page: parseInt(v) - 1
        }));
    }, [dispatch]);

    return (
        <div className='myReview_container'>
            <form onSubmit={search}>
                <div>
                    <h3>내 여행후기</h3>
                </div>
                <MyReviewContentList reviews={review.content}/>
                {review && <CustomPagination count={review.totalPages} page={page + 1} changePage={changePage}/>}
            </form>
        </div>
    );
}

export default MyReview;