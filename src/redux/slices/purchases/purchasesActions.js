import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API_URL from "../../api/api";

const PURCHASES_URL = `${API_URL}/purchases`;

export const getPurchases = createAsyncThunk(
  "purchases/getPurchases",
  async ({ clientId, from, to }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${PURCHASES_URL}?client_id=${clientId}&from=${from}&to=${to}`
      );
      if (response.status !== 200) throw new Error("Couldn't get purchases");
      return response.data.data.purchases;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
