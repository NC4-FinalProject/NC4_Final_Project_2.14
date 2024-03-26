// userSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { signup, signin } from "../apis/userApi";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: false,
    status: "idle",
    error: null,
    loginid: '', // 
  },
  reducers: {
    clearState: (state) => {
      state.status = "idle";
      state.error = null;
      state.loginid = ''; 
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.id = action.payload.id; // 사용자 ID 저장
        alert(`${action.payload.id}님 회원가입을 축하합니다.`);
        window.location.href = "/";
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        alert(`회원가입에 실패하셨습니다. 다시 시도해주세요.`);
      })
      .addCase(signin.fulfilled, (state, action) => {
        sessionStorage.setItem("ACCESS_TOKEN", action.payload.token);
        state.isLogin = true;
        state.loginid = action.payload.id;
    })
      .addCase(signin.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        if(state.error === 200) {
          alert("존재하지 않는 아이디입니다.");
      } else if(state.error === 201) {
          alert("비밀번호가 잘못됐습니다.");
      } else {
          alert("알 수 없는 에러발생.");
      }
    });
  },
});

export const { clearState } = userSlice.actions;
export default userSlice.reducer;
