import axios from "axios";
import API_URL from "../../api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const SALES_URL = `${API_URL}/sales`;

export const getSales = createAsyncThunk(
  "sales/getSales",
  async ({ from, to, date }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${SALES_URL}?from=${from}&to=${to}&date=${date}`
      );
      if (response.status !== 200) throw new Error("Couldn't get sales");
      return response.data.data.sales;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const postSale = createAsyncThunk(
  "salesSlice/postSlice",
  async ({ sale }, { rejectWithValue }) => {
    try {
      const response = await axios.post(SALES_URL, { sale });
      if (response.status !== 201) throw new Error("Couldn't post sale");
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
