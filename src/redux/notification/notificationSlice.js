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
    addNotification: (state, action) => {
      state.notifications.unshift(action.payload);
    },
  },
});

export const { decreaseNotification, addNotification } =
  notificationSlice.actions;

export const selectNotifications = (state) => state.notifications;
export default notificationSlice.reducer;
