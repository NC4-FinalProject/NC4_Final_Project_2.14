import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getReview = createAsyncThunk(
    'review/getReview',
    async (search, thunkAPI) => {
        console.log(`${sessionStorage.getItem("ACCESS_TOKEN")}`);
        try {
            const response = await axios.get(
                `http://localhost:9090/review/list`,
                {
                    headers: {
                        Authorization: `${sessionStorage.getItem("ACCESS_TOKEN")}`
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

export const removeReview = createAsyncThunk(
    'review/removeReview',
    async (seq, thunkAPI) => {
        try {
            const response = await axios.delete(
                `/review/${seq}`,
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`
                    }
                }
            );

            return response.data.pageItems;
        } catch(e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
)