import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        status: 'idle',
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(signup.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // 여기에 추가적인 로직이 필요하다면 추가하세요
            })
            .addCase(signup.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default userSlice.reducer;
