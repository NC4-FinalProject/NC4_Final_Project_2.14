import React, { useState } from 'react'
import '../../scss/review/ReviewReg.scss';
import Button from '../../components/ui/button/Button';
import Input from '../../components/ui/lnput/Input';

const ReviewReg = () => {
    const [rating, setRating] = useState(0);

    const handleClick = (value) => {
        setRating(value === rating ? value - 0.5 : value);
    };

    return (
        <div className='reviewReg_container'>
            <div className="input-container">
                <Input placeholder={"제목을 입력해주세요."} label={"제 목"} labelClassName="label-name"></Input>
            </div>

            <div className="input-container">
                <Input placeholder={"유저닉네임"} label={"작성자"} labelClassName="label-name1" readOnly></Input>
            </div>

            <div className='reviewReg_title_box'>
                <div className='reviewReg_title'>
                    <p>별 점</p>
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
                                // 선택한 별보다 작거나 같은 경우 완전한 별 표시
                                '\u2605'
                            ) : (
                                // 선택한 별보다 큰 경우 빈 별 표시
                                '\u2606'
                            )}
                        </span>
                    ))}
                    <p hidden>선택한 별점: {rating}</p>
                </div>
            </div>

            <div className='reviewReg_content_box'>
                <textarea className='reviewReg_content' placeholder='내용을 입력해주세요.'></textarea>
                <Button color={'green'} text={'등록'} id={'Button'} />
            </div>
        </div>
    );
}

export default ReviewReg;