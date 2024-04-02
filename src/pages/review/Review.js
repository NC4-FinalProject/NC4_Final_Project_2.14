import React, { useCallback, useEffect, useState } from 'react'
import '../../scss/review/Review.scss';
import SvgButton from '../../components/ui/button/SvgButton';
import Button from '../../components/ui/button/Button';
import TravelInfo from '../../components/travel/TravelInfo';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Rating } from '@mui/material';
import { removeReview } from '../../apis/reviewApi';

const Review = () => {
    const contentType = 12;
    const [review, setReview] = useState('');
    const { seq } = useParams();
    const loginId = useSelector(state => state.userSlice.loginId);

    const dispatch = useDispatch();
    const navi = useNavigate();

    const getReview = useCallback(async () => {
        try {
            const response = await axios.get(
                `/review/${seq}`,
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`
                    }
                }
            );
            setReview(response.data.item);
        } catch (e) {
            alert('리뷰를 불러오는데 실패했습니다.');
            console.log(e);
        }
    }, [seq]);

    useEffect(() => {
        getReview();
    }, []);

    const textFieldChange = useCallback((e) => {
        setReview({
            ...review,
            [e.target.name]: e.target.value
        });
    }, [review]);

    const modify = useCallback(async (reviewData) => {
        try {
            const response = await axios.put(
                `/review/modify`,
                JSON.stringify(reviewData),
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`,
                    },
                }
            );

            if (response.data && response.data.item) {
                alert('리뷰가 수정되었습니다.');
                navi(`/review/list`);
            }
        } catch (e) {
            alert('리뷰 수정에 실패했습니다.');
            console.log(e);
        }
    }, [navi]);

    const handleModify = useCallback((e) => {
        e.preventDefault();

        if (loginId !== review.writer) {
            alert('작성자만 수정할 수 있습니다.');
            return;
        }

        const reviewData = {
            ...review,
            title: e.target.title.value,
            content: e.target.content.value,
            rating: e.target.rating.value
        };

        modify(reviewData);
    }, [review, loginId, modify]);

    const remove = useCallback((seq) => {
        dispatch(removeReview(seq));
    }, [dispatch, navi]);

    return (
        <div className='review_container'>
            <form onSubmit={handleModify}>
                {review != null && <input type='hidden' name='seq' id='seq' value={review.seq}></input>}
                <div className='ViewTravelInfo'>
                    {/* <TravelInfo contentType={contentType}/> */}
                </div>
                <div className='title_box'>
                    <div className='title'>
                        <input
                            className='title_text'
                            type='text'
                            name='title'
                            id='title'
                            value={review.title}
                            aria-readonly={review != null && loginId != review.writer ? 'true' : 'false'}
                            onChange={textFieldChange} />
                    </div>
                    <div className='report_box'>
                        <SvgButton id={'report'} color={'red'}
                            svg={<img src={`${process.env.PUBLIC_URL}/assets/icons/report.svg`}
                                style={{ width: '21px', height: '21px' }} />} />
                    </div>
                </div>

                <div className='content_box'>
                    <div className='content_text'>
                        <textarea
                            className='content_input'
                            name='content'
                            id='content'
                            value={review.content}
                            aria-readonly={review != null && loginId != review.writer ? 'true' : 'false'}
                            onChange={textFieldChange}
                        />
                    </div>
                    <div className='content_regdate'>
                        <p name='regDate'
                            id='regDate'
                        >
                            {new Date(review.regDate).toLocaleDateString('ko-KR')}
                        </p>
                    </div>
                    <div className='content_writer'>
                        <p className='writer_text'
                            name='writer'
                            id='writer'
                        >작성자 : {review.writer}
                        </p>
                    </div>

                    <div className='rating'>
                        <Rating
                            className='rating'
                            name='rating'
                            id='rating'
                            value={Number(review.rating)}
                            onChange={textFieldChange}
                        ></Rating>
                    </div>
                </div>
                <div className='btn_box' style={
                    review != null && loginId === review.writer
                        ? { display: 'block' }
                        : { display: 'none' }
                }>
                    <Button id='delete_btn' color={'red'} text={'삭제하기'} type='button' variant='contained' onClick={() => remove(review.seq)} />
                    <Button id='modify_btn' color={'green'} text={'수정하기'} type='submit' variant='contained' />
                </div>
            </form>
        </div>
    );
}

export default Review;