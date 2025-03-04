import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API_URL from "../../api/api";
const ESTABLISHEMENT_URL = `${API_URL}/establishments`;
const SALE_POINT_URL = `${API_URL}/sale_points`;

export const getMyEstablishement = createAsyncThunk(
  "myEstablishement/getMyEstablishement",
  async ({ establishement_id }) => {
    try {
      const response = await axios.get(
        `${ESTABLISHEMENT_URL}/${establishement_id}`
      );
    } catch (error) {}
  }
);

export const postEstablishement = createAsyncThunk(
  "myEstablishement/postEstablishement",
  async ({ establishment, warehouse }, { rejectWithValue }) => {
    try {
      const response = await axios.post(ESTABLISHEMENT_URL, {
        establishment,
        warehouse,
      });
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const postSalePoint = createAsyncThunk(
  "myEstablishemet/postSalePoint",
  async ({ sale_point, truck, warehouse }, { rejectWithValue }) => {
    try {
      const response = await axios.post(SALE_POINT_URL, {
        sale_point,
        truck,
        warehouse,
      });
      if (response.status !== 201) return rejectWithValue("Couldn't post sale point");
      return response.data.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getSalePoints = createAsyncThunk(
  "myEstablishement/getSalePoints",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${SALE_POINT_URL}`);
      if (response.status !== 200) return rejectWithValue("No response");
      return response.data.data.sale_points;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
