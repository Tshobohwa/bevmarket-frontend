import { createAsyncThunk } from "@reduxjs/toolkit";
import API_URL from "../../api/api";
import axios from "axios";

const ITEMS_URL = `${API_URL}/items`;

export const getItems = createAsyncThunk(
  "getItems",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(ITEMS_URL);
      if (response.status !== 200) throw new Error("Couldn't get items");
      return response.data.data.items;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const postItem = createAsyncThunk(
  "postItem",
  async ({ item, stock_item }, { rejectWithValue }) => {
    try {
      const response = await axios.post(ITEMS_URL, { item, stock_item });
      if (response.status !== 201) throw new Error("Couldn't post item");
      return response.data.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
