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

export const getUser = createAsyncThunk(
  "users/getUser",
  async ({ user_id }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${USERS_URL}/${user_id}`);
      if (response.status !== 200) throw new Error("Couldn't get user");
      console.log(response);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
