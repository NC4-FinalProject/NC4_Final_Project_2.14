import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getRecruitment = createAsyncThunk(
    'recruitment/getRecruitment',
    async (search, thunkAPI) => {
        try {
            const response = await axios.get(
                `http://localhost:9090/recruitment/list`,
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`
                    },
                    params: {
                        searchCondition: search.searchCondition,
                        searchKeyword: search.searchKeyword,
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

export const recruitmentReg = createAsyncThunk(
    'recruitment/reg',
    async (recruitmentDTO, thunkAPI) => {
        console.log(recruitmentDTO);
        try {
            const response = await axios.post(
                `http://localhost:9090/recruitment/reg`,
                recruitmentDTO,
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

export const removeRecruitment = createAsyncThunk(
    'recruitment/removeRecruitment',
    async (seq, thunkAPI) => {
        try {
            const response = await axios.delete(
                `/recruitment/${seq}`,
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


export const getMyRecruitment = createAsyncThunk(
    'recruitment/getMyRecruitment',
    async (search, { rejectWithValue }) => {
        try {
            const token = sessionStorage.getItem("ACCESS_TOKEN");
            const response = await axios.get(`http://localhost:9090/recruitment/my`, {
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


