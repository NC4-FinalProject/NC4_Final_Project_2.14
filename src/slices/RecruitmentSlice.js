import {
    createSlice
} from '@reduxjs/toolkit';


const recruitmentSlice = createSlice({
    name: 'recruitments',
    initialState: {
        isLogin: false,
        recruitments: [],
        searchCondition: 'all',
        searchKeyword: '',
        page: 0,
        loginUserId: ''
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

    // extraReducers: (builder) => {
        // builder.addCase(getRecruitments.fulfilled, (state, action) => (
        //     {
        //         ...state,
        //         recruitments: action.payload.pageItems,
        //         searchCondition: action.payload.item.searchCondition,
        //         searchKeyword: action.payload.item.searchKeyword,
        //         page: action.payload.pageItems.pageable.pageNumber
        //     }
        // ));
        // builder.addCase(getRecruitments.rejected, (state, action) => {
        //     alert("에러발생.");
        //     console.log(action.payload);
        //     return state;
        // });
        // builder.addCase(postRecruitment.fulfilled, (state, action) => {
        //     alert("정상적으로 등록되었습니다.");

        //     return {
        //         ...state,
        //         recruitments: action.payload,
        //         searchCondition: 'all',
        //         searchKeyword: '',
        //         page: 0
        //     }
        // });
        // builder.addCase(postRecruitment.rejected, (state, action) => {
        //     alert("에러발생.");
        //     console.log(action.payload);
        //     return state;
        // });
        // builder.addCase(removeRecruitment.fulfilled, (state, action) => {
        //     alert("정상적으로 삭제되었습니다.");

        //     return {
        //         ...state,
        //         recruitments: action.payload,
        //         page: 0,
        //         searchCondition: 'all',
        //         searchKeyword: ''
        //     }
        // });
    // }
});

export const {change_searchCondition, change_searchKeyword} = recruitmentSlice.actions;

export default recruitmentSlice.reducer;