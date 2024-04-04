import React, { useCallback, useState } from 'react'
import '../../scss/recruitment/RecruitmentReg.scss';
import Button from '../../components/ui/button/Button';
import Input from '../../components/ui/lnput/Input';
import { useDispatch, useSelector } from 'react-redux';
import {recruitmentReg} from '../../apis/recruitmentApi.js';

const RecruitmentReg = () => {
    const dispatch = useDispatch();
    const loginNickname = useSelector(state => state.userSlice.loginUserName);

    const [form, setForm] = useState({
        title: '',
        content: '',
        writer: loginNickname
    });

    const textFiledchanged = useCallback((e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }, [form]);

    const handleReg = useCallback((e) => {
        e.preventDefault();

        if(form.title === '') {
            alert('제목을 입력해주세요.');
            return;
        }

        if(form.content === '') {
            alert('내용을 입력해주세요.');
            return;
        }

        if(form.writer === '') {
            alert('로그인을 해주세요.');
            return;
        }

        dispatch(recruitmentReg(form));
    }, [form, dispatch]);

    return (
        <div className='recruitmentReg_container'>
            <form onSubmit={handleReg}>
                <div hidden>
                    <Input
                    placeholder={"유저닉네임"} 
                    label={"작성자"} 
                    labelClassName="label-name1" 
                    name={'writer'}
                    id={'writer'}
                    value={loginNickname}
                    readOnly
                    ></Input>
                </div>
                <div className='recruitmentReg_community_box'>
                    <div className="input-container">
                        <Input
                        id={'communityName'}
                        name={'communityName'}
                        placeholder={"제주에서 롤체할 사람 (제 롤 사)"}
                        label={"커뮤니티명"}
                        labelClassName="label-name"
                        readOnly
                        ></Input>
                    </div>
                    <div className="input-container">
                        <Input 
                        placeholder={"제목을 입력해주세요."} 
                        label={"제 목"} 
                        labelClassName="label-name1"
                        name={'title'}
                        id={'title'}
                        onChange={textFiledchanged}
                        value={form.title}
                        ></Input>
                    </div>
                </div>

                <div className='recruitmentReg_content_box'>
                    <textarea 
                    className='recruitmentReg_content'
                    placeholder='내용을 입력해주세요.'
                    name="content"
                    onChange={textFiledchanged}
                    value={form.content}
                    required
                    ></textarea>
                    <Button type={'submit'} name={'Button'} color={'green'} text={'등록'} id={'Button'} />
                </div>
            </form>
        </div>
    );
}

export default RecruitmentReg;