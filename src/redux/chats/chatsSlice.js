import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chats: null,
};

const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    addChats: (state, action) => {
      state.chats = state.chats.unShift(action.payload);
    },
  },
});

export const { addChats } = chatsSlice.actions;

export const selectChats = (state) => state.chats;
export default chatsSlice.reducer;
