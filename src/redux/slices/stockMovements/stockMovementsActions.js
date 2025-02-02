import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API_URL from "../../api/api";

const STOCK_MOVEMENTS_URL = `${API_URL}/stock_movements`;

export const getStockMovements = createAsyncThunk(
  "stockMovements/getStockMovements",
  async ({ from, to, date }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${STOCK_MOVEMENTS_URL}?from=${from}?to=${to}?date=${date}`
      );
      if (response.status !== 200)
        throw new Error("Couldn't get stock movements");
      return response.data.data.stock_movements;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
