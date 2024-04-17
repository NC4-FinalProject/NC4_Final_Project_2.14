import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getTravels = createAsyncThunk(
    'travel/getTravels',
    async (search, thunkAPI) => {
        try {
            const response = await axios.get(
                `http://localhost:9090/travel/carousel`,
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`
                    },
                    params: {
                        searchArea: search.searchArea,
                        searchSigungu: search.searchSigungu,
                        searchKeyword: search.searchKeyword,
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

export const getMakrers = createAsyncThunk(
    'travel/getMakrers',
    async (location, thunkAPI) => {
        try {
            const response = await axios.get(
                `http://localhost:9090/travel/marker`,
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`
                    },
                    params: {
                        userMapx: location.userMapx,
                        userMapy: location.userMapy
                    }
                }
            );

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);

export const getAreaCodes = createAsyncThunk(
    'travel/getAreaCodes',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(
                `http://localhost:9090/travel/areaCode`,
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`
                    },
                    params: {}
                }
            );

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);

export const getSigunguCodes = createAsyncThunk(
    'travel/getSigunguCodes',
    async (areaCode, thunkAPI) => {
        try {
            const response = await axios.get(
                `http://localhost:9090/travel/sigunguCode`,
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`
                    },
                    params: {areaCode: areaCode}
                }
            );

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);

export const regBookmark = createAsyncThunk(
    'travel/regBookmark',
    async ({id, isBookmark}, thunkAPI) => {
        try {
            const response = await axios.post(
                `http://localhost:9090/travel/bookmark`,
                {
                    id: id,
                    isReg: isBookmark
                },
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`,
                        'Content-Type': 'application/json',
                    }
                }
            );
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);