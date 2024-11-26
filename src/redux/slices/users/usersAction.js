import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API_URL from "../../api/api";

const USERS_URL = `${API_URL}/users`;

export const getUnemployedUsers = createAsyncThunk(
  "users/getUnemployedUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(USERS_URL);
      if (response.status !== 200)
        throw new Error("Couldn't get unemployed users");
      return response.data.data.unemployed_users;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "users/getCurrentUserInfo",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${USERS_URL}/current_user`);
      if (response.status !== 200) throw new Error("Couldn't get current user");
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
