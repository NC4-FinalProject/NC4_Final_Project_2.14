import { createSlice } from "@reduxjs/toolkit";
import { signup, signin, signout } from "../apis/userApi";
import axiosInstance from "../apis/axiosInstance";
import Swal from "sweetalert2";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: false,
    // status: "idle",
    // error: null,
    // taehyeon : loginId -> loginId로 변경
    loginId: '',
    userInfo: []
  },
  reducers: {
    change_searchCondition: (state, action) => ({
      ...state,
      searchCondition: action.payload
  }),
  change_searchKeyword: (state, action) => ({
      ...state,
      searchKeyword: action.payload
  })
    // clearState: (state) => {
    //   state.status = "idle";
    //   state.error = null;
    //   state.loginId = '';
    // },
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
      })
     .addCase(signin.fulfilled, (state, action) => {
        console.log("Signin Success:", action.payload.item.token);
        localStorage.setItem("ACCESS_TOKEN", `Bearer ${action.payload.item.token}`);
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${action.payload.item.token}`;
        state.isLogin = true;
        state.loginId = action.payload.item.id;
        alert(`로그인에 성공하셨습니다`);
        console.log(action.payload);
      })
      .addCase(signin.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        const errorMessage = action.payload.message || "아이디 또는 비밀번호가 틀렸습니다. 다시 입력해주세요.";
        window.location.replace("/user/sign-in")
        alert(errorMessage);
    });
    builder.addCase(signout.fulfilled, (state, action) => {
        // state.status = "succeeded";
        sessionStorage.removeItem("ACCESS_TOKEN", `Bearer ${action.payload.token}`);
        return {
            ...state,
            isLogin : false,
            loginId : ""
        }
    });
  },
});

export const {  } = userSlice.actions;
export default userSlice.reducer;