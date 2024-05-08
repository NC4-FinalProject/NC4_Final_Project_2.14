import {Rating} from '@mui/material';
import React, {useEffect} from 'react'
import {Link} from "react-router-dom";

const MyReviewContentItem = ({reviews}) => {
    useEffect(() => {
    }, [reviews]);

    const detailDate = (a) => {
        const milliSeconds = new Date() - a;
        const seconds = milliSeconds / 1000;
        if (seconds < 60) return `방금 전`;
        const minutes = seconds / 60;
        if (minutes < 60) return `${Math.floor(minutes)}분 전`;
        const hours = minutes / 60;
        if (hours < 24) return `${Math.floor(hours)}시간 전`;
        const days = hours / 24;
        if (days < 7) return `${Math.floor(days)}일 전`;
        const weeks = days / 7;
        if (weeks < 5) return `${Math.floor(weeks)}주 전`;
        const months = days / 30;
        if (months < 12) return `${Math.floor(months)}개월 전`;
        const years = days / 365;
        return `${Math.floor(years)}년 전`;
    };
    const nowDate = detailDate(new Date(reviews.regDate));

    return (
        <div className='myReview_content_box'>
            {reviews.travel.firstimage ? (
                <img className='img2' src={reviews.travel.firstimage} alt='여행정보 이미지'/>
            ) : (
                <img className='img2' src={process.env.PUBLIC_URL + '/assets/default_thumbnail.jpg'}
                     alt='여행정보 이미지'/>
            )}
            <div className='content_box'>
                <p className='content1'>
                    <Link to={`/review/${reviews.seq}`}>
                        {reviews.title}
                    </Link>
                    <span className='regdate'>{nowDate}</span>
                </p>

                <p className='content2'>
                    {reviews.content}
                </p>

                <div className='rating'>
                    <Rating
                        className='rating'
                        value={reviews.rating}
                        readOnly
                    ></Rating>
                </div>
            </div>
        </div>
    );
}

export default MyReviewContentItem;