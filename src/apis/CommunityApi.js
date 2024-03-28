import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const communityReg = createAsyncThunk(
    'community/reg',
    async (communityDTO, thunkAPI) => {
          console.log(communityDTO);
        try {
            const response = await axios.post(
                `http://localhost:9090/community/reg`,
                communityDTO
            );
        
            console.log(response);
        
            return response.data.item;
             
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);
