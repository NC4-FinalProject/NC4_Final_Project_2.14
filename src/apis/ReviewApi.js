import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getReview = createAsyncThunk(
    'review/getReview',
    async (search, thunkAPI) => {
        try {
            const response = await axios.get(
                `http://localhost:9090/review/list`,
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`
                    },
                    params: {
                        searchCondition: search.searchCondition,
                        searchKeyword: search.searchKeyword,
                        page: search.page,
                        sort: search.sort
                    }
                }
            );

            console.log(response);

            return response.data;
        } catch(e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);

export const reviewReg = createAsyncThunk(
    'review/reg',
    async (reviewDTO, thunkAPI) => {
        console.log(reviewDTO);
        try {
            const response = await axios.post(
                `http://localhost:9090/review/reg`,
                reviewDTO
            );

            console.log(response);

            return response.data.item;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);

// export const reviewList = createAsyncThunk(
//     'review/list',
//     async (reviewDTO, thunkAPI) => {
//         console.log(reviewDTO);
//         try {
//             const response = await axios.get(
//                 `http://localhost:9090/review/list`,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`
//                     },
//                     params: {
//                         searchCondition: search.searchCondition,
//                         searchKeyword: search.searchKeyword,
//                         page: search.page
//                     }
//                 }
//             );

//             console.log(response);

//             return response.data.item;
//         } catch (e) {
//             return thunkAPI.rejectWithValue(e);
//         }
//     }
// );