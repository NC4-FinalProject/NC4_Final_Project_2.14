import React, { useState } from 'react'
import '../../scss/review/Review.scss';
import SvgButton from '../../components/ui/button/SvgButton';
import Button from '../../components/ui/button/Button';
import TravelInfo from '../../components/travel/TravelInfo';
import TravelDetailInfo from '../../components/travel/TravelDetailInfo';

const Review = () => {
    const [rating, setRating] = useState(0);

    const handleClick = (value) => {
        setRating(value === rating ? value - 0.5 : value);
    };

    const contentType = 12;
    return (
        <div className='review_container'>
            <div className='ViewTravelInfo'>
            <TravelInfo contentType={contentType}/>
            </div>
            <div className='title_box'>
                <div className='title'>정상 경치가 아주 죽여줍니다. 다른분들도 꼭 가세요 !!</div>
                <div className='report_box'>
                    <SvgButton id={'report'} color={'red'} svg={<img src={`${process.env.PUBLIC_URL}/assets/icons/report.svg`} style={{ width: '21px', height: '21px' }} />} />
                </div>
                </div>

                <div className='content_box'>
                    <div className='content_text'>
                        아직 많이 알려지지 않아 사람들로 북적이지 않았어요. 다음에도 또 들리고 싶은 곳 입니다!! 설경도 한 몫 하네요 ㅎㅎ
                    </div>
                    <div className='content_regdate'>
                        오후 4 : 30
                    </div>
                    <div className='content_writer'>
                        작성자 : aaaaaa
                    </div>

                    <div className='rating'>
                        {[1, 2, 3, 4, 5].map((value) => (
                            <span
                                key={value}
                                onClick={() => handleClick(value)}
                                style={{
                                    cursor: 'pointer',
                                    color: value <= rating ? 'gold' : 'gray',
                                }}
                            >
                                {value <= rating ? (
                                    '\u2605'
                                ) : (
                                    '\u2606'
                                )}
                            </span>
                        ))}
                        <p hidden>선택한 별점: {rating}</p>
                    </div>
            
                </div>
                <div className='btn_box'>
                    <Button id='delete_btn' color={'red'} text={'삭제하기'} />
                    <Button id='modify_btn' color={'green'} text={'수정하기'} />
                </div>
            
        </div>
    );
}

export default Review;