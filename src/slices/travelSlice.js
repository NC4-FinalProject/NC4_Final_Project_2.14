import {createSlice} from "@reduxjs/toolkit";
import {getAreaCodes, getSigunguCodes, getTravels} from "../apis/travelApi";

const travelSlice = createSlice({
    name: 'travel',
    initialState: {
        isLogin: false,
        loginUserId: '',
        areaCodes: [],
        sigunguCodes: [],
        travels: [],
        searchArea: '',
        searchSigungu: '',
        searchKeyword: '',
        sort: 'random',
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
        builder.addCase(getTravels.fulfilled, (state, action) => ({
            ...state,
            travels: action.payload.items,
        }));
        builder.addCase(getTravels.rejected, (state, action) => {
            alert("에러발생.");
            console.log(action.payload);
            // 에러 메시지나 상태 코드 등을 추출하여 필요한 정보만을 액션에 포함시킵니다.
            const errorMessage = action.payload.message;
            return {
                ...state,
                error: errorMessage // 예시로 에러 메시지를 상태에 추가하는 것입니다. 상황에 따라 다를 수 있습니다.
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
    }
});


export const {change_searchArea, change_searchSigungu, change_searchKeyword, change_sort} = travelSlice.actions;

export default travelSlice.reducer;