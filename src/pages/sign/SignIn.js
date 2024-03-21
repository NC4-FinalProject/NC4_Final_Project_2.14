import React, { useState } from 'react';
import Input from '../../components/ui/lnput/Input.js';
import { useForm } from 'react-hook-form';
import '../../scss/pages/sign/Sign.scss';
import FullWidthButton from '../../components/ui/button/FullWidthButton.js';

function SignIn() {
    const {
      register,
      formState: { errors },
      handleSubmit,
      watch,
    } = useForm({ mode: 'onChange' });
  
    const [autoLogin, setAutoLogin] = useState(false);
    const [idError, setIdError] = useState('');
    const [passwordError, setPasswordError] = useState('');
  
    const id = watch('id');
    const password = watch('password');
  
    const signIn = (data) => {
      const { id, password } = data;
  
      // 유효한 아이디와 비밀번호가 있다고 가정
      const validId = 'myId';
      const validPassword = 'myPassword';
  
      if (id === validId && password === validPassword) {
        // 로그인 성공 처리
        window.location.href = "/";
        console.log('Login successful');
        setIdError('');
        setPasswordError('');
      } else if (id !== validId) {
        setIdError('');
        setPasswordError('아이디 또는 비밀번호가 틀렸습니다. 다시 입력해주세요.');
      } else {
        setIdError('');
        setPasswordError('아이디 또는 비밀번호가 틀렸습니다. 다시 입력해주세요.');
      }
    };
  
    const handleAutoLoginChange = (e) => {
      setAutoLogin(e.target.checked);
    };
  
    return (
      <div className="SignIn">
        <form id="form-sign-in" onSubmit={handleSubmit(signIn)}>
          <img className="traveler" src="/assets/로그인 배경이미지.png" alt="Traveler" />
          <h1 className="main-logo">logo</h1>
          <div className='input-container'>
          <p className="id">아이디</p>
          <Input
            type="text"
            name="id"
            placeholder="아이디를 입력해주세요."
            {...register('id', {
              required: '아이디를 입력해주세요.',
              onChange: () => setIdError(''),
            })}
          />
          {!id && errors.id && <span className="error-message">{errors.id.message}</span>}
          <div className='input-container'>
            </div>
          <p className="text-color">비밀번호</p>
          <Input
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요."
            {...register('password', {
              required: '비밀번호를 입력해주세요.',
              onChange: () => setPasswordError(''),
            })}
          />
          {!password && errors.password && <span className="error-message">{errors.password.message}</span>}
          {passwordError && <span className="error-message">{passwordError}</span>}
          </div>
          <div className="login-options">
            <div className="auto-login">
              <input
                type="checkbox"
                id="autoLogin"
                checked={autoLogin}
                onChange={handleAutoLoginChange}
              />
              <label htmlFor="autoLogin">자동 로그인</label>
            </div>
            <div className="find-account">
              <a href="/">아이디/비밀번호 찾기</a>
            </div>
          </div>
          <FullWidthButton color="green" text="로그인" type="submit" />
          <hr className="hr1"/><p className="p3">간편 로그인</p><hr className="hr2"/>
          <img className="kakao-login" src="/assets/카카오 로그인.png" alt="Kakao-login"/>
          <img className="google-login" src="/assets/구글 로그인.png" alt="Google-login"/>
      </form>
    </div>
  );
}

export default SignIn
