import { createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

const initialState = {
  notifications: [],
};

const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    decreaseNotification: (state, action) => {
      state.notifications = action.payload;
    },
  },
});

export const { decreaseNotification } = notificationSlice.actions;

export const selectNotifications = (state) => state.notifications;
export default notificationSlice.reducer;
