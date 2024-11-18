import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API_URL from "../../api/api";

const EXPENSE_URL = `${API_URL}/expenses`;

export const getExpenses = createAsyncThunk(
  "getExpenses",
  async ({ from, to, date }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${EXPENSE_URL}?from=${from}&to=${to}&date=${date}`
      );
      if (response.status !== 200) throw new Error("couldnt get expenses");
      return response.data.data.expenses;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const postExpense = createAsyncThunk(
  "postExpense",
  async ({ expense }, { rejectWithValue }) => {
    try {
      const response = await axios.post(EXPENSE_URL, { expense });
      if (response.status !== 201) throw new Error("Couldn't create expense");
      return response.data.data.expense;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
