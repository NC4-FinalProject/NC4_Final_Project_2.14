import {createSlice} from "@reduxjs/toolkit";
import {getChatList, makeChatRoom} from "../apis/chatApi";

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        chatList: [],
    },
    extraReducers: (builder) => {
        builder.addCase(getChatList.fulfilled, (state, action) => {
            state.chatList = action.payload;
            return state;
        });
        builder.addCase(getChatList.rejected, (state, action) => {
            alert('채팅 목록을 불러 오는 중 오류가 발생했습니다. 관리자에게 문의하세요.');
            return state;
        });
        builder.addCase(makeChatRoom.fulfilled, (state, action) => {
            state.chatList = action.payload;
            return state;
        });
        builder.addCase(makeChatRoom.rejected, (state, action) => {
            alert('알 수 없는 오류 발생, 관리자에게 문의하세요.');
            return state;
        });
    }
});

// export const {requestFriends, getChatList, lastMessage, unreadMessages} = chatSlice.actions;
// export const {requestFriends, lastMessage, unreadMessages} = chatSlice.actions;
export default chatSlice.reducer;