import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase();
  },
});

export default clientsSlice.reducer;
