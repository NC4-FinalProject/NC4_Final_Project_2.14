import React, { useCallback, useState } from 'react'
import '../../scss/review/ReviewReg.scss';
import Button from '../../components/ui/button/Button';
import Input from '../../components/ui/lnput/Input';
import { useDispatch } from 'react-redux';
import { reviewReg } from '../../apis/ReviewApi.js';

const ReviewReg = () => {
    const [form, setForm] = useState({
        title: '',
        content: '',
        writer: '',
        rating: 0,
    });

    const [rating, setRating] = useState(0);

    const textFiledchanged = useCallback((e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    },[form]);


    const ratingChanged = useCallback((value) => {
        setForm({
            ...form,
            rating: value,
        });
        setRating(value);
    }, [form]);

    const dispatch = useDispatch();

    const handleReg = useCallback((e) => {
        e.preventDefault();
        dispatch(reviewReg(form));
    }, [form, dispatch]);


    return (
        <div className='reviewReg_container'>
            <form onSubmit={handleReg}>
            <div className="input-container">
                <Input 
                placeholder={"제목을 입력해주세요."} 
                label={"제 목"} 
                labelClassName="label-name"
                name={'title'}
                id={'title'}
                onChange={textFiledchanged}
                value={form.title}
                ></Input>
            </div>

            <div className="input-container">
                <Input 
                placeholder={"유저닉네임"} 
                label={"작성자"} 
                labelClassName="label-name1" 
                name={'writer'}
                id={'writer'}
                value={form.writer}
                onChange={textFiledchanged}
                ></Input>
            </div>

            <div className='reviewReg_title_box'>
                <div className='reviewReg_title'>
                    <p>별 점</p>
                </div>
                <div className='rating'>
                    {[1, 2, 3, 4, 5].map((value) => (
                        <span
                            key={value}
                            onClick={() => ratingChanged(value)}
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
                    <p id='rating' hidden>선택한 별점: {form.rating}</p>
                </div>
            </div>

            <div className='reviewReg_content_box'>
                <textarea 
                className='reviewReg_content' 
                placeholder='내용을 입력해주세요.'
                name="content"
                onChange={textFiledchanged}
                value={form.content}
                ></textarea>
                <Button type='submit' color={'green'} text={'등록'} id={'Button'} />
            </div>
            </form>
        </div>
    );
}

export default ReviewReg;