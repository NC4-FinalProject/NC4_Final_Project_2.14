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
            <div className='reviewReg_title_box'>
                <div className='reviewReg_title'>
                    <h3>제 목</h3>
                </div>
                <Input id={'reviewReg_title_input'} placeholder='제목을 입력해주세요.'></Input>
            </div>

            <div className='reviewReg_title_box'>
                <div className='reviewReg_title'>
                    <h3>별 점</h3>
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

            <div className='reviewReg_title_box'>
            <div className='reviewReg_title'>
                <h3>작성자</h3>
            </div>
            <Input id={'reviewReg_title_input'} placeholder='유저 닉네임과 동일' readOnly></Input>
        </div>

            <div className='reviewReg_content_box'>
                <textarea className='reviewReg_content' placeholder='내용을 입력해주세요.'></textarea>
                <Button color={'green'} text={'등록'} id={'Button'} />
            </div>
        </div>
    );
}

export default ReviewReg;