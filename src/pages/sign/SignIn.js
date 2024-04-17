import React, {useCallback, useState} from 'react';
import Input from '../../components/ui/lnput/Input.js';
import '../../scss/pages/sign/Sign.scss';
import FullWidthButton from '../../components/ui/button/FullWidthButton.js';
import { signin } from '../../apis/userApi.js';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import handleKakaoLogin from '../../components/user/handleKakaoLogin.js';
import handleGoogleLogin from '../../components/user/handleGoogleLogin.js';

function SignIn() {

    // const {
    //   register,
    //   formState: { errors },
    //   handleSubmit,
    //   watch,
    // } = useForm({ mode: 'onChange' });

    const navi = useNavigate();

    const dispatch = useDispatch();

    const [form, setForm] = useState({
        userId: '',
        userPw: ''
    });

    const inputFieldChanged = useCallback((e) => {
        setForm((prevForm) => ({
            ...prevForm,
            [e.target.name]: e.target.value,
        }));
    }, []);

    const rebuildHandleSignIn = useCallback((e) => {
        e.preventDefault();

        dispatch(signin({userId: form.userId, userPw: form.userPw}));
        navi(-1);
    }, [form, dispatch, navi]);

    return (
        <div className="SignIn">
            <form id="form-sign-in" onSubmit={rebuildHandleSignIn}>
                <img
                    src={process.env.PUBLIC_URL + "/assets/boba-boys-going-to-school-together.png"}
                    alt=""/>
                <h1 className="desc">Let's travel together</h1>
                <div className='input-container'>
                    <p>아이디</p>
                    <Input
                        type="text"
                        name="userId"
                        placeholder="아이디를 입력해주세요."
                        value={form.userId}
                        onChange={inputFieldChanged}/>
                    <p>비밀번호</p>
                    <Input
                        type="password"
                        name="userPw"
                        placeholder="비밀번호를 입력해주세요."
                        value={form.userPw}
                        onChange={inputFieldChanged}/>
                    <div className="find-account">
                        <a href="/user/sign-up">회원가입</a>&nbsp;|&nbsp;<a href="/">아이디/비밀번호 찾기</a>
                    </div>
                </div>
                <FullWidthButton color="green" text="로그인" type="submit"/>
                <div className="social-login">
                    <span>간편 로그인</span>
                </div>
                <div className="banner-wrapper">
                    <img className="kakao-login" src={process.env.PUBLIC_URL + "/assets/icons/kakao_login.png"}
                         alt="Kakao-login"/>
                    <img className="google-login" src={process.env.PUBLIC_URL + '/assets/icons/google_login.png'}
                         alt="Google-login"/>
                </div>
            </form>
        </div>
    );
}

export default SignIn
