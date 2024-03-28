import React, { useCallback, useEffect, useState } from 'react'
import '../../scss/review/Review.scss';
import SvgButton from '../../components/ui/button/SvgButton';
import Button from '../../components/ui/button/Button';
import TravelInfo from '../../components/travel/TravelInfo';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Rating } from '@mui/material';
import { removeReview } from '../../apis/ReviewApi';

const Review = () => {
    const contentType = 12;

    const [review, setReview] = useState(null);
    const { seq } = useParams();
    const loginUserId = useSelector(state => state.review.loginUserId);

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

    const modify = useCallback(async (formData) => {
        try {
            const response = await axios.put(
                `/review/modify`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`,
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );

            if (response.data && response.data.item) {
                alert('리뷰가 수정되었습니다.');
                navi(`/review/${response.data.item.seq}`);
            }
        } catch (e) {
            alert('리뷰 수정에 실패했습니다.');
            console.log(e);
        }
    }, []);

    const handleModify = useCallback((e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const formDataObj = {};

        formData.forEach((value, key) => formDataObj[key] = value);

        const sendFormData = new FormData();

        sendFormData.append("reviewDTO", new Blob([JSON.stringify(formDataObj)], {
            type: 'application/json'
        }));


        modify(sendFormData);
    }, [review]);

    const remove = useCallback((seq) => {
        dispatch(removeReview(seq));
        navi("/review-list");
    }, [dispatch, navi]);

    return (
        <div className='review_container'>
            <form onSubmit={handleModify}>
                {review != null && <input type='hidden' name='seq' id='seq' value={review.seq}></input>}
                <div className='ViewTravelInfo'>
                    <TravelInfo contentType={contentType} />
                </div>
                <div className='title_box'>
                    <div className='title'>
                        <input
                            type='text'
                            name='title'
                            id='title'
                            value={review.title}
                            aria-readonly={review != null && loginUserId != review.writer ? 'true' : 'false'}
                            onChange={textFieldChange} />
                    </div>
                    <div className='report_box'>
                        <SvgButton id={'report'} color={'red'} svg={<img src={`${process.env.PUBLIC_URL}/assets/icons/report.svg`} style={{ width: '21px', height: '21px' }} />} />
                    </div>
                </div>

                <div className='content_box'>
                    <div className='content_text'>
                        <textarea
                            name='content'
                            id='content'
                            value={review.content}
                            aria-readonly={review != null && loginUserId != review.writer ? 'true' : 'false'}
                            onChange={textFieldChange}
                        />
                    </div>
                    <div className='content_regdate'>
                        <p name='regDate'
                            id='regDate'
                         value={review.regDate}>
                        </p>
                    </div>
                    <div className='content_writer'>
                        <p name='writer'
                            id='writer'
                            value={`작성자 : ${review.writer}`}>
                        </p>
                    </div>

                    <div className='rating'>
                        <Rating
                            className='rating'
                            name='rating'
                            id='rating'
                            value={review.rating}
                            aria-readonly={review != null && loginUserId != review.writer ? 'true' : 'false'}
                            onChange={textFieldChange}
                        ></Rating>
                    </div>

                </div>
                <div className='btn_box' style={
                    review != null && loginUserId === review.writer
                        ? { display: 'block' }
                        : { display: 'none' }
                }>
                    <Button id='delete_btn' color={'red'} text={'삭제하기'} type='button' variant='contained' />
                    <Button id='modify_btn' color={'green'} text={'수정하기'} type='submit' variant='contained' onClick={() => remove(review.seq)} />
                </div>
            </form>
        </div>
    );
}

export default Review;