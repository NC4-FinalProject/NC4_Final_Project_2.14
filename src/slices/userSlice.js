import { createSlice } from "@reduxjs/toolkit";
import { signup, signin, signout, uploadProfileImage } from "../apis/userApi";


const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLogin: false,
    // status: "idle",
    // error: null,
    // taehyeon : loginId -> loginId로 변경
    loginUserId: '',
    loginUserName: '',
    profileImageUrl: '',
  },
  reducers: {
    // clearState: (state) => {
    //   state.status = "idle";
    //   state.error = null;
    //   state.loginId = '';
    // },
    updateUserName: (state, action) => {
      state.loginUserName = action.payload;
    },
    setProfileImageUrl: (state, action) => {
        state.profileImageUrl = action.payload;
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setLoginUserId: (state, action) => {
      state.loginUserId = action.payload;
  },
  setLoginUserName: (state, action) => {
    state.loginUserName = action.payload;
},
  },
  extraReducers: (builder) => {
    // builder.addCase(signup.pending, (state) => {
    //     state.status = "loading";
    //     state.error = null;
    // });
    builder.addCase(signup.fulfilled, (state, action) => {
        // state.status = "succeeded";
        // taehyeon : 회원가입시 state 값 변경 불필요 loginId state 값 == 로그인 시 state로 유지
        // state.id = action.payload.item.id; // 사용자 ID 저장
       // Swal.fire({title:`${action.payload.item.id}님`,
       //          text: `회원가입을 축하합니다.`,
       //          icon: `success`,
       //          showCancelButton: false,
       //          showConfirmButton: false
       // });
        window.location.href = "/user/sign-in";
        return state;
    });
    builder.addCase(signup.rejected, (state, action) => {
        // state.status = "failed";
        // state.error = action.payload;
        alert(`회원가입에 실패하셨습니다. 다시 시도해주세요.`);
        return state;
    });
    builder.addCase(signin.fulfilled, (state, action) => {
        sessionStorage.setItem("ACCESS_TOKEN", action.payload.token);
        // console.log('=============' + action.payload.token);
        return {
            ...state,
            isLogin: true,
            loginUserId: action.payload.userId,
            loginUserName: action.payload.userName
        }
    });
    builder.addCase(signin.rejected, (state, action) => {
        // state.status = "failed";
        // state.error = action.payload;
        const errorMessage = "아이디 또는 비밀번호가 틀렸습니다. 다시 입력해주세요.";
        window.location.replace("/user/sign-in")
        alert(errorMessage);
    });
    // builder.addCase(uploadProfileImage.fulfilled, (state, action) => {
    //   sessionStorage.setItem("ACCESS_TOKEN", action.payload.token);
    //   return {
    //         ...state,
    //         profileImageUrl: action.payload.profileImageUrl
    //   }
    // });
    // builder.addCase(uploadProfileImage.rejected, (state, action) => {
    //   const errorMessage = "파일 등록,삭제,수정이 실패했습니다. 다시 시도해주세요.";
    //   alert(errorMessage);
    // });
    builder.addCase(signout.fulfilled, (state, action) => {
      if (action.payload.success) {
        sessionStorage.removeItem("ACCESS_TOKEN");
        return { ...state, isLogin: false, loginUserId: "", loginUserName: '',
        profileImageUrl: '' };
      } else {
        // 실패 처리
        return state;
      }
    });
    builder.addCase(uploadProfileImage.fulfilled, (state, action) => {
      console.log('Profile image uploaded successfully:', action.payload); // 상태 업데이트 로그
      state.profileImageUrl = action.payload; // 이미지 URL을 상태에 설정
    });
},
});

export const { updateUserName, setProfileImageUrl, setIsLogin, setLoginUserId, setLoginUserName  } = userSlice.actions;
export default userSlice.reducer;