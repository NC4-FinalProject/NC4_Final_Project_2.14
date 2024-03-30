import {createSlice} from "@reduxjs/toolkit";
import { getChatList, makeChat } from "../apis/chatApi";

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        chatList: [],
    },
    reducers: {
        // requestFriends(state, action) {
        //     state.requestFriends = action.payload;
        // },
        // chatList(state, action) {
        //     state.chatList = action.payload;
        // },
        // lastMessage(state, action) {
        //     state.lastMessage = action.payload;
        // },
        // unreadMessages(state, action) {
        //     state.unreadMessages = action.payload;
        // }
    },
    extraReducers: (builder) => {
        // builder.addCase(makeFriend.fulfilled, (state, action) => {
        //
        //     return state;
        // });
        // builder.addCase(makeFriend.rejected, (state, action) => {
        //     alert('알 수 없는 오류 발생, 관리자에게 문의하세요.');
        //     return state;
        // });
        builder.addCase(getChatList.fulfilled, (state, action) => {
            state.chatList = action.payload;
            return state;
        });
        builder.addCase(getChatList.rejected, (state, action) => {
            alert('알 수 없는 오류 발생, 관리자에게 문의하세요.');
            return state;
        });
        builder.addCase(makeChat.fulfilled, (state, action) => {
            state.chatList = action.payload;
            return state;
        });
        builder.addCase(makeChat.rejected, (state, action) => {
            alert('알 수 없는 오류 발생, 관리자에게 문의하세요.');
            return state;
        });
    }
});

// export const {requestFriends, getChatList, lastMessage, unreadMessages} = chatSlice.actions;
// export const {requestFriends, lastMessage, unreadMessages} = chatSlice.actions;
export default chatSlice.reducer;