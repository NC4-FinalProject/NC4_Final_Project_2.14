import { createSlice } from "@reduxjs/toolkit";
import { signup, signin } from "../apis/userApi";
import axiosInstance from "../apis/axiosInstance";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: false,
    status: "idle",
    error: null,
    loginid: '',
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
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`;
        state.isLogin = true;
        state.loginid = action.payload.id;
      })
      .addCase(signin.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        const errorMessage = action.payload.message || "아이디 또는 비밀번호가 틀렸습니다. 다시 입력해주세요.";
        window.location.replace("/user/sign-in")
        alert(errorMessage);
      });
  },
});

export const { clearState } = userSlice.actions;
export default userSlice.reducer;