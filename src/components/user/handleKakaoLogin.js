import React from 'react';

const Kakao_Rest_api_key = process.env.REACT_APP_KAKAO_REST_API;
const kakao_redirect_url = 	'http://localhost:3000/oauth/kakao';
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Kakao_Rest_api_key}&redirect_uri=${kakao_redirect_url}&response_type=code`;

const handleKakaoLogin = () => {
  window.location.href = kakaoURL;
}

export default handleKakaoLogin
