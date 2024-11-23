import { createSlice } from "@reduxjs/toolkit";
import { getCurrentEmployee } from "./employeesActions";
import { toast } from "react-toastify";

const initialState = {
  currentEmployee: JSON.parse(localStorage.getItem("currentEmployee")),
  isGettingCurrentEmployee: false,
};

console.log(initialState);

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCurrentEmployee.pending, (state) => {
      return { ...state, isGettingCurrentEmployee: true };
    });
    builder.addCase(getCurrentEmployee.fulfilled, (state, { payload }) => {
      localStorage.setItem("currentEmployee", JSON.stringify(payload));
      return {
        ...state,
        isGettingCurrentEmployee: false,
        currentEmployee: payload,
      };
    });
    builder.addCase(getCurrentEmployee.rejected, (state) => {
      toast.error("N'a pas pu trouver l'employee");
      return { ...state, isGettingCurrentEmployee: false };
    });
  },
});

export default employeesSlice.reducer;
