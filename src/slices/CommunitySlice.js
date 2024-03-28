import {
    createSlice
} from '@reduxjs/toolkit';
import { communityReg } from '../apis/CommunityApi';


const communitySlice = createSlice({
    name: 'community',
    initialState: {
        isLogin: false,
        reviewDTO: [],
        searchCondition: '',
        searchKeyword: '',
        page: 0,
        loginUserId:''
    },
    reducers: {
       
    },
    extraReducers: (builder) => {

        builder.addCase(communityReg.fulfilled, (state, action) => {
            alert(`리뷰가 등록되었습니다.`);
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

export const { change_searchCondition, change_searchKeyword } = communitySlice.actions;
export default communitySlice.reducer;