import { createSlice } from "@reduxjs/toolkit";
import { getClients, postClient } from "./clientsActions";

const initialState = {
  clients: [],
  clientPosted: false,
};

const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    resetClientPosted: (state) => {
      return { ...state, clientPosted: false };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getClients.fulfilled, (state, { payload }) => {
      return { ...state, clients: payload };
    });
    builder.addCase(postClient.fulfilled, (state, { payload }) => {
      return {
        ...state,
        clients: [...state.clients, payload],
        clientPosted: true,
      };
    });
  },
});

export const { resetClientPosted } = clientsSlice.actions;

export default clientsSlice.reducer;
