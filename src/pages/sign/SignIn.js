import React, {useCallback, useState} from 'react';
import Input from '../../components/ui/lnput/Input.js';
import { useForm } from 'react-hook-form';
import '../../scss/pages/sign/Sign.scss';
import FullWidthButton from '../../components/ui/button/FullWidthButton.js';
import { signin } from '../../apis/userApi.js';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    // const {
    //   register,
    //   formState: { errors },
    //   handleSubmit,
    //   watch,
    // } = useForm({ mode: 'onChange' });

    const navi = useNavigate();

    const [autoLogin, setAutoLogin] = useState(false);
    // const [idError, setIdError] = useState('');
    // const [passwordError, setPasswordError] = useState('');

    // const id = watch('id');
    // const password = watch('password');
    const dispatch = useDispatch();

    // const handleSignIn = (data) => {
      // if (Object.keys(errors).length !== 0) {
      //   console.error("폼 데이터에 유효성 검사 에러가 있습니다.");
      //   return;
      // }

      // const loginData = {
      //   id: data.id,
      //   pw: data.password,
      // };

      // dispatch(signin(loginData))
      //   .then((response) => {
      //     console.log(response);
      //     const user = response.payload.item;
      //     console.log(user.token);
      //     navi("/");
      //   })
      //   .catch((error) => {
      //     console.error('Login failed:', error.payload);
      //     const errorMessage =
      //       error.payload.error === 'invalid_id' || error.payload.error === 'invalid_password'
      //         ? '아이디 또는 비밀번호가 틀렸습니다. 다시 입력해주세요.'
      //         : '알 수 없는 에러가 발생했습니다.';
      //     setIdError(errorMessage);
      //     setPasswordError(errorMessage);
      //   });
    // };

    // const handleAutoLoginChange = (e) => {
    //   setAutoLogin(e.target.checked);
    // };

    // 여기서부터 새로운 로직입니다.
    const [form, setForm] = useState({
       userId : '',
       userPw : ''
    });

    const inputFieldChanged = useCallback((e) => {
        setForm((prevForm) => ({
            ...prevForm,
            [e.target.name] : e.target.value,
        }));
    }, []);

    const rebuildHandleSignIn = useCallback((e) => {
        e.preventDefault();

        dispatch(signin({userId: form.userId, userPw: form.userPw}));
        navi("/");
    }, [form, dispatch, navi]);

    return (
      <div className="SignIn">
          {/*<form id="form-sign-in" onSubmit={handleSubmit(handleSignIn)}>*/}
          <form id="form-sign-in" onSubmit={rebuildHandleSignIn}>
                  <img className="traveler" src={process.env.PUBLIC_URL + "/assets/icons/login_background.png"}
                       alt="Traveler"/>
                  <h1 className="main-logo">logo</h1>
                  <div className='input-container'>
                      <p className="id">아이디</p>
                      {/*<Input
                          type="id"
                          name="id"
                          placeholder="아이디를 입력해주세요."

                          {...register('id', {
                              required: '아이디를 입력해주세요.',
                              onChange: () => setIdError(''),
                          })}
                      />*/}
                      <Input
                          type="text"
                          name="userId"
                          placeholder="아이디를 입력해주세요."
                          value={form.userId}
                          onChange={inputFieldChanged}
                      />
                      {/*{!id && errors.id && <span className="error-message">{errors.id.message}</span>}*/}
                      <div className='input-container'>
                      </div>
                      <p className="text-color">비밀번호</p>
                      {/*<Input
                          type="password"
                          name="password"
                          placeholder="비밀번호를 입력해주세요."
                          {...register('password', {
                              required: '비밀번호를 입력해주세요.',
                              onChange: () => setPasswordError(''),
                          })}
                      />*/}
                      <Input
                          type="password"
                          name="userPw"
                          placeholder="비밀번호를 입력해주세요."
                          value={form.userPw}
                          onChange={inputFieldChanged}
                      />
                      {/*{!password && errors.password && <span className="error-message">{errors.password.message}</span>}*/}
                      {/*{passwordError && <span className="error-message">{passwordError}</span>}*/}
                  </div>
                  <div className="login-options">
                      <div className="auto-login">
                          <input
                              type="checkbox"
                              id="autoLogin"
                              checked={autoLogin}
                              // onChange={handleAutoLoginChange}
                          />
                          <label htmlFor="autoLogin">자동 로그인</label>
                      </div>
                      <div className="find-account">
                          <a href="/user/sign-up">회원가입 | </a><a href="/">아이디/비밀번호 찾기</a>
                      </div>
                  </div>
                  <FullWidthButton color="green" text="로그인" type="submit"/>
                  <hr className="hr1"/>
                  <p className="p3">간편 로그인</p>
                  <hr className="hr2"/>
                  <img className="kakao-login" src={process.env.PUBLIC_URL + "/assets/icons/kakao_login.png"}
                       alt="Kakao-login"/>
                  <img className="google-login" src={process.env.PUBLIC_URL + '/assets/icons/google_login.png'}
                       alt="Google-login"/>
              </form>
      </div>
);
}

export default SignIn
