import {
    createSlice
} from '@reduxjs/toolkit';
import { communityReg } from '../apis/communityApi';


const communitySlice = createSlice({
    name: 'community',
    initialState: {

    },
    reducers: {
       
    },
    extraReducers: (builder) => {

        builder.addCase(communityReg.fulfilled, (state, action) => {
            alert(`커뮤니티가 개설 되었습니다.`);
            window.location.href = '/review-list';

            return state;
        });

        builder.addCase(communityReg.rejected, (state, action) => {
            alert("에러 발생. 관리자에게 문의하세요.")
            console.log(action.payload);
            return state;
        });

    }
});

export const {} = communitySlice.actions;
export default communitySlice.reducer;