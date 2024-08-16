import axios from "axios";
import API_URL from "../../api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

const SALES_URL = `${API_URL}/sales`;

export const getSales = createAsyncThunk(
  "sales/getSales",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(SALES_URL);
      if (response.status !== 200) throw new Error("Couldn't get sales");
      return response.data.data.sales;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const postSale = createAsyncThunk(
  "salesSlice/postSlice",
  async (sale, { rejectWithValue }) => {
    try {
      console.log(sale);
      const response = await axios.post(SALES_URL, { sale });
      console.log(response);
      if (response.status !== 201) throw new Error("Couldn't post sale");
      console.log(response.data.data.sale);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
