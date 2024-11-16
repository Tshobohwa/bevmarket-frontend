import { createSlice } from "@reduxjs/toolkit";
import {
  getClient,
  getClients,
  postClient,
  updateClient,
} from "./clientsActions";
import { toast } from "react-toastify";

const initialState = {
  clients: [],
  clientPosted: false,
  client: {},
  isUpdatingClient: false,
  clientUpdated: false,
};

const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    resetClientPosted: (state) => {
      return { ...state, clientPosted: false };
    },
    resetClientUpdated: (state) => {
      return { ...state, clientUpdated: false };
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
    builder.addCase(getClient.fulfilled, (state, { payload }) => {
      return { ...state, client: payload };
    });
    builder.addCase(getClient.rejected, (state) => {
      return { ...state, client: {} };
    });
    builder.addCase(updateClient.pending, (state) => {
      return { ...state, isUpdatingClient: true };
    });
    builder.addCase(updateClient.fulfilled, (state, { payload }) => {
      toast.success("Client modifie avec success !");
      return {
        ...state,
        isUpdatingClient: false,
        client: payload,
        clientUpdated: true,
      };
    });
    builder.addCase(updateClient.rejected, (state) => {
      toast.error("Une Erreur est survenue");
      return { ...state, isUpdatingClient: false };
    });
  },
});

export const { resetClientPosted, resetClientUpdated } = clientsSlice.actions;

export default clientsSlice.reducer;
