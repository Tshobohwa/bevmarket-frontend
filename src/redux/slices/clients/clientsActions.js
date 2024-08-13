import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API_URL from "../../api/api";

export const getClients = createAsyncThunk(
  "clients/getClients",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/clients`);
      return response.data.data.clients;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
