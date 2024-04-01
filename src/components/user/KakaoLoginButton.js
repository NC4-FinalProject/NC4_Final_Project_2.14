import React, { useEffect } from 'react';

const KakaoLoginButton = () => {
  const kakaoLoginButtonRef = React.createRef();
  useEffect(() => {
    const kakaoLoginButton = kakaoLoginButtonRef.current;

    // 카카오 SDK 초기화
    window.Kakao.init('9f3a1a5d41ef80c80dae83b31c641819');

    // 카카오 로그인 버튼 생성
    window.Kakao.Auth.createLoginButton({
      container: kakaoLoginButton,
      success: (authObj) => {
        window.Kakao.API.request({
          url: '/v2/user/me',
          success: (res) => {
            console.log(res);
          },
          fail: (err) => {
            console.error(err);
          },
        });
      },
      fail: (err) => {
        console.error(err);
      },
    });
  }, []);

  return (
    <div>
      <img
        className="kakao-login"
        src={process.env.PUBLIC_URL + "/assets/icons/kakao_login.png"}
        alt="Kakao-login"
        ref={kakaoLoginButtonRef}
      />
    </div>
  );
};

export default KakaoLoginButton;