import { createAsyncThunk } from "@reduxjs/toolkit";
import API_URL from "../../api/api";
import axios from "axios";

const STOCK_URL = `${API_URL}/stock_items`;

export const getStock = createAsyncThunk(
  "getStock",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(STOCK_URL);
      if (response.status !== 200) return rejectWithValue("No response");
      return response.data.data.stock_items;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const updateStockItemPrice = createAsyncThunk(
  "stock/updateStockItemPrice",
  async ({ stock_item, id }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `${STOCK_URL}/${id}?update_mode=is_updating_price`,
        { stock_item }
      );
      if (response.status !== 200)
        return rejectWithValue("Couldn't udpate stock item");
      return response.data.data.stock_item;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addQuantityToStockItem = createAsyncThunk(
  "stock/addQuantityToStockItem",
  async ({ stock_item, id }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `${STOCK_URL}/${id}?update_mode=is_adding_to_stock`,
        { stock_item }
      );
      if (response.status !== 200)
        return rejectWithValue("Couldn't update stock item");

      return response.data.data.stock_item;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const postStockItem = createAsyncThunk(
  "postStockItem",
  async (stockItem, { rejectWithValue }) => {
    try {
      const response = await axios.post(STOCK_URL, { stockItem });
      if (response.data?.status !== 201)
        return rejectWithValue("Couldn't post stock item");
      return response.data.data.stockItem;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
