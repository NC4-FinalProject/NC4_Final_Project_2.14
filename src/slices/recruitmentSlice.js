import {createSlice} from '@reduxjs/toolkit';
import {getRecruitment, removeRecruitment, recruitmentReg, getMyRecruitment} from '../apis/recruitmentApi';


const recruitmentSlice = createSlice({
    name: 'recruitment',
    initialState: {
        recruitmentDTO: [],
        searchCondition: '',
        searchKeyword: '',
        sort: 'latest'
    },

    reducers: {
        change_searchCondition: (state, action) => ({
            ...state,
            searchCondition: action.payload
        }),
        change_searchKeyword: (state, action) => ({
            ...state,
            searchKeyword: action.payload
        }),
        change_sort: (state, action) => ({
            ...state,
            sort: action.payload
        })
    },

    extraReducers: (builder) => {
        builder.addCase(getRecruitment.fulfilled, (state, action) => (
            {
                ...state,
                recruitmentDTO: action.payload.pageItems,
                searchCondition: action.payload.item.searchCondition,
                searchKeyword: action.payload.item.searchKeyword,
                page: action.payload.pageItems.pageable.pageNumber,
                sort: action.payload.item.sort
            }
        ));

        builder.addCase(getRecruitment.rejected, (state, action) => {
            alert("에러발생.");
            console.log(action.payload);
            return state;
        });

        builder.addCase(recruitmentReg.fulfilled, (state, action) => {
            alert(`리뷰가 등록되었습니다.`);
            window.location.href = '/recruitment/list';
            return state;
        });

        builder.addCase(recruitmentReg.rejected, (state, action) => {
            alert("에러 발생. 관리자에게 문의하세요.")
            console.log(action.payload);
            return state;
        });

        builder.addCase(removeRecruitment.fulfilled, (state, action) => {
            alert("정상적으로 삭제되었습니다.");
            window.location.href = '/recruitment/list';
            return {
                ...state,
                recruitmentDTO: action.payload,
                page: 0,
                searchCondition: 'all',
                searchKeyword: '',
                sort: 'latest'
            }
        });
        builder.addCase(removeRecruitment.rejected, (state, action) => {
            alert("에러발생.");
            console.log(action.payload);
            return state;
        });

        builder.addCase(getMyRecruitment.fulfilled, (state, action) => (
            {
                ...state,
                recruitmentDTO: action.payload.pageItems,
                page: action.payload.pageItems.pageable.pageNumber
            }
        ));

        builder.addCase(getMyRecruitment.rejected, (state, action) => {
            alert("에러발생.");
            console.log(action.payload);
            return state;
        });

    }
});

export const {change_searchCondition, change_searchKeyword, change_sort} = recruitmentSlice.actions;

export default recruitmentSlice.reducer;