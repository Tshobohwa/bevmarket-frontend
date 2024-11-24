import { createSlice } from "@reduxjs/toolkit";
import { getUnemployedUsers } from "./usersAction";

const initialState = {
  unemployedUsers: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUnemployedUsers.fulfilled, (state, { payload }) => {
      return { ...state, unemployedUsers: payload };
    });
  },
});

export default usersSlice.reducer;
