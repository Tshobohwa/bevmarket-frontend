import { createSlice } from "@reduxjs/toolkit";
import {
  getCurrentEmployee,
  getEmployees,
  postEmployee,
} from "./employeesActions";
import { toast } from "react-toastify";

const initialState = {
  currentEmployee: JSON.parse(localStorage.getItem("currentEmployee")),
  isGettingCurrentEmployee: false,
  employees: [],
  isPostingEmployee: false,
  hasPostedEmployee: false,
};

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    resetHasPostedEmployee: (state) => {
      return { ...state, hasPostedEmployee: false };
    },
  },
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
    builder.addCase(getEmployees.fulfilled, (state, { payload }) => {
      return { ...state, employees: payload };
    });

    builder.addCase(getEmployees.rejected, (state) => {
      toast.error(
        "Une erreur est survenue lors du chargement de la liste d'employes"
      );
      return state;
    });

    builder.addCase(postEmployee.pending, (state) => {
      return { ...state, isPostingEmployee: true };
    });

    builder.addCase(postEmployee.fulfilled, (state, { payload }) => {
      return {
        ...state,
        isPostingEmployee: false,
        hasPostedEmployee: true,
        employees: [...state.employees, payload],
      };
    });

    builder.addCase(postEmployee.rejected, (state) => {
      toast.error("Une erreur est survenue. Action non terminee!");
      return { ...state, isPostingEmployee: false };
    });
  },
});

export const { hasPostedEmployee } = employeesSlice.actions;

export default employeesSlice.reducer;
