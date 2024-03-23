import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";

const store = configureStore({
    reducer: {
        user: userReducer
        // 여러 개의 reducer가 있을 경우에는 추가하세요
    }
});

export default store;