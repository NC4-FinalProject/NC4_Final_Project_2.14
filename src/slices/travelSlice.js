import {createSlice} from "@reduxjs/toolkit";
import {getAreaCodes, getSigunguCodes, getTravels} from "../apis/travelApi";

const travelSlice = createSlice({
    name: 'travel',
    initialState: {
        isLogin: false,
        loginUserId: '',
        areaCodes: [],
        sigunguCodes: [], // 이 부분을 추가하였습니다.
        travels: [],
        searchArea: '',
        searchSigungu: '',
        searchKeyword: '',
        sort: 'alphabetical',
        page: 0
    },
    reducers: {
        change_searchArea: (state, action) => ({
            ...state,
            searchArea: action.payload
        }),
        change_searchSigungu: (state, action) => ({
            ...state,
            searchSigungu: action.payload
        }),
        change_sort: (state, action) => ({
            ...state,
            sort: action.payload
        }),
        change_searchKeyword: (state, action) => ({
            ...state,
            searchKeyword: action.payload
        })
    },
    extraReducers: (builder) => {
        builder.addCase(getTravels.fulfilled, (state, action) => (
            {
                ...state,
                travels: action.payload.items,
                searchArea: action.payload.item.searchArea,
                searchSigungu: action.payload.item.searchSigungu,
                searchKeyword: action.payload.item.searchKeyword,
                sort: action.payload.item.sort
            }
        ));
        builder.addCase(getTravels.rejected, (state, action) => {
            alert("에러발생.");
            console.log(action.payload);
            return state;
        });
        builder.addCase(getAreaCodes.fulfilled, (state, action) => (
            {
                ...state,
                areaCodes: action.payload.items,
                sigunguCodes: []
            }
        ));
        builder.addCase(getAreaCodes.rejected, (state, action) => {
            alert("에러발생.");
            console.log(action.payload);
            return state;
        });
        builder.addCase(getSigunguCodes.fulfilled, (state, action) => (
            {
                ...state,
                sigunguCodes: action.payload.items
            }
        ));
        builder.addCase(getSigunguCodes.rejected, (state, action) => {
            alert("에러발생.");
            console.log(action.payload);
            return state;
        });
    }
});


export const {change_searchArea, change_searchSigungu, change_searchKeyword, change_sort} = travelSlice.actions;

export default travelSlice.reducer;