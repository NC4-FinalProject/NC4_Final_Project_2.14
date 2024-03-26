import {
    createSlice
} from '@reduxjs/toolkit';
import { getReview, reviewReg } from '../apis/ReviewApi';


const reviewSlice = createSlice({
    name: 'review',
    initialState: {
        reviewDTO: [],
        searchCondition: '',
        searchKeyword: '',
        page: 0
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
    },
    extraReducers: (builder) => {
        builder.addCase(getReview.fulfilled, (state, action) => (
            {
                ...state,
                reviewDTO: action.payload.pageItems,
                searchCondition: action.payload.item.searchCondition,
                searchKeyword: action.payload.item.searchKeyword,
                page: action.payload.pageItems.pageable.pageNumber
            }
        ));

        builder.addCase(getReview.rejected, (state, action) => {
            alert("에러발생.");
            console.log(action.payload);
            return state;
        });

        builder.addCase(reviewReg.fulfilled, (state, action) => {
            alert(`리뷰가 등록되었습니다.`);
            window.location.href = '/review-list';

            return state;
        });

        builder.addCase(reviewReg.rejected, (state, action) => {
            alert("에러 발생. 관리자에게 문의하세요.")
            console.log(action.payload);
            return state;
        });

    }
});

export const { change_searchCondition, change_searchKeyword } = reviewSlice.actions;
export default reviewSlice.reducer;