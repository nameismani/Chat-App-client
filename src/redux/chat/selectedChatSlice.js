import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedChat: null,
};

const selectedChatSlice = createSlice({
  name: "selectedChat",
  initialState,
  reducers: {
    selectedChatSuccess: (state, action) => {
      state.selectedChat = action.payload;
    },
  },
});

export const { selectedChatSuccess } = selectedChatSlice.actions;

export const selectSelectedChat = (state) => state.selectedChat;
export default selectedChatSlice.reducer;
