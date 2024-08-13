import { createSlice } from "@reduxjs/toolkit";
import { getClients } from "./clientsActions";

const initialState = {};

const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getClients.fulfilled, (state, { payload }) => {
      return { ...state, clients: payload };
    });
  },
});

export default clientsSlice.reducer;
