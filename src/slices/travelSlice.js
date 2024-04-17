import {createSlice} from "@reduxjs/toolkit";
import {getAreaCodes, getBookmarks, getMakrers, getSigunguCodes, getTravels, regBookmark} from "../apis/travelApi";

const travelSlice = createSlice({
    name: 'travel',
    initialState: {
        areaCodes: [],
        sigunguCodes: [],
        travels: [],
        searchArea: '',
        searchSigungu: '',
        searchKeyword: '',
        sort: 'random',
        page: 0,
        markers: []
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
        builder.addCase(getTravels.fulfilled, (state, action) => ({
            ...state,
            travels: action.payload.items,
        }));
        builder.addCase(getTravels.rejected, (state, action) => {
            console.log(action.payload);
            const errorMessage = action.payload.message;
            return {
                ...state,
                error: errorMessage
            };
        });
        builder.addCase(getMakrers.fulfilled, (state, action) => ({
            ...state,
            markers: action.payload.items,
        }));
        builder.addCase(getMakrers.rejected, (state, action) => {
            console.log(action.payload);
            const errorMessage = action.payload.message;
            return {
                ...state,
                error: errorMessage
            };
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
        builder.addCase(getBookmarks.fulfilled, (state, action) => (
            {
                ...state,
                travels: action.payload.pageItems,
                page: action.payload.pageItems.pageable.pageNumber
            }
        ));
        builder.addCase(getBookmarks.rejected, (state, action) => {
            alert("에러발생.");
            console.log(action.payload);
            return state;
        });
        builder.addCase(regBookmark.fulfilled, (state, action) => {
            return state;
        });

        builder.addCase(regBookmark.rejected, (state, action) => {
            alert("에러 발생. 관리자에게 문의하세요.")
            console.log(action.payload);
            return state;
        });
    }
});


export const {change_searchArea, change_searchSigungu, change_searchKeyword, change_sort} = travelSlice.actions;

export default travelSlice.reducer;