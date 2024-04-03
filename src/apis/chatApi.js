import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getChatList = createAsyncThunk(
    'chat/getChatList',
    async (currentUserId, thunkAPI) => {
        try {
            const response = await axios.get(
                'http://localhost:9090/chat/getChatList',
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`
                    },
                    params: {
                        userId: currentUserId
                    }
                }
            );
            return response.data.item.chatList;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const makeChatRoom = createAsyncThunk (
    'chat/makeChatRoom',
    async (chatMakeInfo, thunkAPI) => {
        try {
            const response = await axios.post(
                'http://localhost:9090/chat/make-chat',
                chatMakeInfo,
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`
                    }
                }
            )
            return response.data.item;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);