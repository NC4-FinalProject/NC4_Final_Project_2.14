import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signup = createAsyncThunk(
    'user/sign-up',
    async (user, thunkAPI) => {
        try {
            const response = await axios.post(
                `/user/sign-up`,
                user
            );

            return response.data.item;
        } catch(e) {
            return thunkAPI.rejectWithValue(e);
        }
    } 
);