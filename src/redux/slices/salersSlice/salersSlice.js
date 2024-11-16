import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  salers: [],
  unemployedUsers: [],
  isGettingSalers: false,
  isGettingUnemployedUsers: false,
};

const salersSlice = createSlice({
  name: "salers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase()
  },
});

export default salersSlice.reducer;
