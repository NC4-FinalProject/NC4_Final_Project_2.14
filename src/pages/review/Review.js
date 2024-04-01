import React, {useCallback, useEffect, useState} from 'react'
import '../../scss/review/Review.scss';
import SvgButton from '../../components/ui/button/SvgButton';
import Button from '../../components/ui/button/Button';
import TravelInfo from '../../components/travel/TravelInfo';
import {useNavigate, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {Rating} from '@mui/material';
import {removeReview} from '../../apis/reviewApi';

const Review = () => {
    const contentType = 12;

<<<<<<< Updated upstream
    const [review, setReview] = useState(null);
    const {seq} = useParams();
=======
    const [review, setReview] = useState('');
    const { seq } = useParams();
>>>>>>> Stashed changes
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
                navi(`/review/${response.data.item.seq}`);
            }
        } catch (e) {
            alert('리뷰 수정에 실패했습니다.');
            console.log(e);
        }
    }, [navi]);

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
    }, [dispatch, navi]);

    return (
        <div className='review_container'>
            <form onSubmit={handleModify}>
                {review != null && <input type='hidden' name='seq' id='seq' value={review.seq}></input>}
                <div className='ViewTravelInfo'>
                    <TravelInfo contentType={contentType}/>
                </div>
                <div className='title_box'>
                    <div className='title'>
                        <input
                            className='title_text'
                            type='text'
                            name='title'
                            id='title'
                            value={review.title}
                            aria-readonly={review != null && loginUserId != review.writer ? 'true' : 'false'}
                            onChange={textFieldChange}/>
                    </div>
                    <div className='report_box'>
                        <SvgButton id={'report'} color={'red'}
                                   svg={<img src={`${process.env.PUBLIC_URL}/assets/icons/report.svg`}
                                             style={{width: '21px', height: '21px'}}/>}/>
                    </div>
                </div>

                <div className='content_box'>
                    <div className='content_text'>
                        <textarea
                            className='content_input'
                            name='content'
                            id='content'
                            value={review.content}
                            aria-readonly={review != null && loginUserId != review.writer ? 'true' : 'false'}
                            onChange={textFieldChange}
                        />
                    </div>
                    <div className='content_regdate'>
                        <p name='regDate'
<<<<<<< Updated upstream
                           id='regDate'
                           value={review.regDate}>
                        </p>
                    </div>
                    <div className='content_writer'>
                        <p name='writer'
                           id='writer'
                           value={`작성자 : ${review.writer}`}>
=======
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
>>>>>>> Stashed changes
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
                    review != null && loginUserId === review.writer
                        ? {display: 'block'}
                        : {display: 'none'}
                }>
<<<<<<< Updated upstream
                    <Button id='delete_btn' color={'red'} text={'삭제하기'} type='button' variant='contained'/>
                    <Button id='modify_btn' color={'green'} text={'수정하기'} type='submit' variant='contained'
                            onClick={() => remove(review.seq)}/>
=======
                    <Button id='delete_btn' color={'red'} text={'삭제하기'} type='button' variant='contained' onClick={() => remove(review.seq)}/>
                    <Button id='modify_btn' color={'green'} text={'수정하기'} type='submit' variant='contained'/>
>>>>>>> Stashed changes
                </div>
            </form>
        </div>
    );
}

export default Review;