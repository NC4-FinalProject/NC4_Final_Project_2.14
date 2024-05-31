import React from 'react';
import axios from "axios";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { MoonLoader } from "react-spinners";
import { Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setIsLogin } from '../../slices/userSlice';

const GoogleLogin= () => {

    const dispatch = useDispatch();
    const navi = useNavigate();
    const currentUserInfo = useSelector(state => state.userSlice);
  
    useEffect(() => {
      const params= new URL(document.location.toString()).searchParams;
      const google_client_id = process.env.REACT_APP_GOOGLE_CLIENT_ID;
      const google_secret_key = process.env.REACT_APP_GOOGLE_CLIENT_SECRET;
      const code = params.get("code");
     const google_redirect_url = 'http://localhost:3000/oauth/google';
axios.post(
  `https://oauth2.googleapis.com/token?code=${code}&client_id=${google_client_id}&redirect_uri=${google_redirect_url}&client_secret=${google_secret_key}&grant_type=authorization_code`,
  { headers: { "Content-type": "application/x-www-form-urlencoded" } }
  )
  .then((res) => {
    console.log(res);
    let access_token = res.data.access_token; 
    axios.get(
      `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${access_token}`,
        {},
        {
            headers: {
                Authorization: `Bearer ${access_token}`,
            }
        }
    )
    .then((res) => {
        axios.post('http://localhost:9090/user/sign-up', {
            userId: res.data.email,
            userPw: res.data.id,
            userName: res.data.name
        })
        .then(() => {
            axios.post('http://localhost:9090/user/sign-in', {
                userId: res.data.email,
                userPw: res.data.id,
                userName: res.data.name
            })
            .then((response2) => {
                if (response2.data.item && response2.data.statusCode === 200) {
                    sessionStorage.setItem('ACCESS_TOKEN', response2.data.item.token);
                    sessionStorage.getItem('ACCESS_TOKEN');
                    dispatch(setIsLogin(true));
                    currentUserInfo.loginUserId = res.data.id;
                    currentUserInfo.loginUserName = res.data.name;
                    navi('/');
                    // window.location.reload();
                }
            })
        })
        .catch((e) => {
            if(e.response.data.errorCode === 301) {
                axios.post('http://localhost:9090/user/sign-in', {
                    userId: res.data.email,
                    userPw: res.data.id,
                    userName: res.data.name
                })
                .then((response2) => {
                    if (response2.data.item && response2.data.statusCode === 200) {
                        sessionStorage.setItem('ACCESS_TOKEN', response2.data.item.token);
                        sessionStorage.getItem('ACCESS_TOKEN');
                        currentUserInfo.isLogin = true;
                        currentUserInfo.loginUserId = res.data.id;
                        currentUserInfo.loginUserName = res.data.name;
                        console.log()
                        navi('/');
                    }
                })
                .catch((e) => {
                    alert('회원탈퇴한 계정입니다.');
                    navi('/');
                    console.error(e);
                });
            }
        });
    })
    .catch((e) => {
        console.error(e);
    });
});
}, [])






//     onSuccess = async (res) => {
//         const { email, name } = res.profileObj;
 
//         try {
//           // 회원가입 요청
//           await axios.post('http://localhost:9090/user/sign-up', {
//             userId: email,
//             userPw: '', // 구글 로그인이므로 비밀번호는 빈 문자열로 전송
//             userName: name
//           });
//         } catch (error) {
//           // 회원가입 실패 시 로그인 요청
//           if (error.response.data.errorCode === 301) {
//             try {
//               const response = await axios.post('http://localhost:9090/user/sign-in', {
//                 userId: email,
//                 userPw: '', 
//                 userName: name
//               });
      
//               if (response.data.item && response.data.statusCode === 200) {
//                 // 로그인 성공 시 토큰을 세션 스토리지에 저장
//                 sessionStorage.setItem('ACCESS_TOKEN', response.data.item.token);
//                 // 추가적인 로직 처리 (예: Redux 스토어 업데이트, 페이지 이동 등)
//               }
//             } catch (error) {
//               console.error(error);
//               // 로그인 실패 시 처리할 로직
//             }
//           }
//         }
//       };
  
//       onFailure = (res) => {
//         console.log('Login failed: res:', res);
//         // 구글 로그인 실패 시 처리할 로직을 작성합니다.
      
//       };
// }, [])

      return (
        <Grid container marginBottom='30%' marginTop='10%'style={{ position: 'flex'}} >
    <Grid item xs={12} style={{ position: 'absolute', left: '50%'}}>
        <MoonLoader color="#558BCF" />
    </Grid>
</Grid> 
        // <div>
        //   <GoogleLogin
        //     clientId={clientId}
        //     buttonText="Login with Google"
        //     onSuccess={onSuccess}
        //     onFailure={onFailure}
        //     cookiePolicy={'single_host_origin'}
        //   />
        // </div>
        );
      }
    
    export default GoogleLogin