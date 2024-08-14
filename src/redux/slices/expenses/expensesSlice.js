import { createSlice } from "@reduxjs/toolkit";
import { getExpenses, postExpense } from "./expensesActions";

const initialState = {
  expenses: [],
  isGettingExpenses: false,
  error: null,
  isPosting: false,
  expenseAdded: false,
};

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    resetExpenseAdded: (state) => {
      return { ...state, expenseAdded: false };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getExpenses.pending, (state) => {
      return { ...state, isGettingExpenses: true, error: null };
    });
    builder.addCase(getExpenses.fulfilled, (state, { payload }) => {
      return { ...state, isGettingExpenses: false, expenses: payload };
    });
    builder.addCase(getExpenses.rejected, (state, action) => {
      return { ...state, isGettingExpenses: false, error: action.error };
    });
    builder.addCase(postExpense.pending, (state) => {
      return { ...state, isPosting: true, eror: null };
    });
    builder.addCase(postExpense.fulfilled, (state, { payload }) => {
      let { expenses } = state;
      expenses = [...expenses, payload];
      return { ...state, isPosting: false, expenses, expenseAdded: true };
    });
    builder.addCase(postExpense.rejected, (state, { error }) => {
      return { ...state, isPosting: false, error };
    });
  },
});

export const { resetExpenseAdded } = expensesSlice.actions;

export default expensesSlice.reducer;
