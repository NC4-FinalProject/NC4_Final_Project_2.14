import React from 'react';
import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

// export const makeFriend = createAsyncThunk(
//     'user/makeFriend',
//     async (friendId, thunkAPI) => {
//         try {
//             const response = await axios.post(
//                 'http://localhost:9090/user/makeFriend',
//                 {friendId: friendId},
//                 {
//                     headers: {
//                         Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
//                     }
//                 }
//             );
//
//             return response.data;
//         } catch (e) {
//             return thunkAPI.rejectWithValue(e);
//         }
//     }
// );

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

export const makeChat = createAsyncThunk (
    'chat/makeChat',
    async (partnerId, thunkAPI) => {
        try {
            const response = await axios.post(
                'http://localhost:9090/chat/makeChat',
                { userId : partnerId },
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`
                    }
                }
            )
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)