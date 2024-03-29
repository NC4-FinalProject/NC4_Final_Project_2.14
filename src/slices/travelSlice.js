import {createSlice} from "@reduxjs/toolkit";
import {getTravels} from "../apis/travelApi";

const travelSlice = createSlice({
    name: 'travels',
    initialState: {
        isLogin: false,
        travels: [],
        searchArea: [],
        searchKeyword: '',
        page: 0,
        loginUserId: ''
    },
    reducers: {
        change_searchArea: (state, action) => ({
            ...state,
            searchArea: action.payload
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
                travels: action.payload.pageItems,
                searchKeyword: action.payload.item.searchKeyword,
                page: action.payload.pageItems.pageable.pageNumber
            }
        ));
        builder.addCase(getTravels.rejected, (state, action) => {
            alert("에러발생.");
            console.log(action.payload);
            return state;
        });

    }
});

export const {change_searchArea, change_searchKeyword} = travelSlice.actions;

export default travelSlice.reducer;