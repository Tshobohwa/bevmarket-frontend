import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API_URL from "../../api/api";

const SALE_POINTS_URL = `${API_URL}/sale_points`;

export const getSalePoint = createAsyncThunk(
  "salePoints/getSalePoint",
  async ({ salePointId }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${SALE_POINTS_URL}/${salePointId}`);

      console.log(response);

      if (response.status !== 200) throw new Error("Couldn't get salePoint");

      return response.data.data.sale_point;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
