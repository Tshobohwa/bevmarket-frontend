import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API_URL from "../../api/api";

const UNEMPLOYED_USERS_URL = `${API_URL}/unemployed_users`;

export const getUnemployedUsers = createAsyncThunk(
  "salers/getUnemployedUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(UNEMPLOYED_USERS_URL);

      if (response.status !== 200)
        throw new Error("Couldn't get unemployed users");

      return response.data.data.unemployed_users;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
