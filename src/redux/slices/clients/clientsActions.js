import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API_URL from "../../api/api";

const CLIENTS_URL = `${API_URL}/clients`;

export const getClients = createAsyncThunk(
  "clients/getClients",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(CLIENTS_URL);
      return response.data.data.clients;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const postClient = createAsyncThunk(
  "clients/postClient",
  async ({ client }, { rejectWithValue }) => {
    try {
      const response = await axios.post(CLIENTS_URL, { client });
      if (response.status !== 201) throw new Error("Couldn't create client");
      return response.data.data.client;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
