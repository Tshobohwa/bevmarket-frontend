import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API_URL from "../../api/api";

const EMPLOYEES_URL = `${API_URL}/employees`;

export const getCurrentEmployee = createAsyncThunk(
  "employees/getCurrentEmployee",
  async ({ establishment_id, user_id }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${EMPLOYEES_URL}?establishment_id=${establishment_id}&user_id=${user_id}`
      );
      return response.data.data.current_employee;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getEmployees = createAsyncThunk(
  "employees/getEmployees",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(EMPLOYEES_URL);
      return response.data.data.employees;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const postEmployee = createAsyncThunk(
  "employees/createEmployee",
  async ({ employee }, { rejectWithValue }) => {
    try {
      const response = await axios.post(EMPLOYEES_URL, { employee });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
