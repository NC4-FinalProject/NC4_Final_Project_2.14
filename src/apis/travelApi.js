import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getTravels = createAsyncThunk(
    'travel/getTravels',
    async (search, thunkAPI) => {
        try {
            const response = await axios.get(
                `http://localhost:9090/travel/list`,
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`
                    },
                    params: {
                        searchArea: search.searchArea,
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
