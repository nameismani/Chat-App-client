import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chats: [],
};

const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    addChats: (state, action) => {
      console.log(state.chats);
      state.chats.unshift(action.payload);
    },
    fetchChatsSuccess: (state, action) => {
      state.chats = action.payload;
    },
  },
});

export const { addChats, fetchChatsSuccess } = chatsSlice.actions;

export const selectChats = (state) => state.chats;
export default chatsSlice.reducer;
