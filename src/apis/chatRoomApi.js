import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const getMessages = createAsyncThunk (
    'chatRoom/getMessages',
    async (chatRoomId, thunkAPI) => {
        try {
            const response = await axios.get(
                `http://localhost:9090/chat/${chatRoomId}`,
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`
                    }
                }
            );

            return response.data.items;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);


