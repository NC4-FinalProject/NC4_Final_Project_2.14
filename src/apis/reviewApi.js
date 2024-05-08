import {createAsyncThunk} from "@reduxjs/toolkit";
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
                        travelId: search.travelId,
                        page: search.page,
                        sort: search.sort
                    }
                }
            );

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);

export const getRandReview = createAsyncThunk(
    'review/getRandReview',
    async (search, thunkAPI) => {
        try {
            const response = await axios.get(
                `http://localhost:9090/review/rand`,
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`
                    },
                }
            );

            return response.data;
        } catch (e) {
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
                reviewDTO,
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`,
                        'Content-Type': 'application/json',
                    }
                }
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
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
)


export const getMyReview = createAsyncThunk(
    'review/getMyReview',
    async (search, {rejectWithValue}) => {
        try {
            const token = sessionStorage.getItem("ACCESS_TOKEN");
            const response = await axios.get(`http://localhost:9090/review/my`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                params: {
                    page: search.page
                }
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);


