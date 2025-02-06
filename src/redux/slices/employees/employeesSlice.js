import { createSlice } from "@reduxjs/toolkit";
import {
  deleteEmployee,
  getCurrentEmployee,
  getEmployees,
  postEmployee,
} from "./employeesActions";
import { toast } from "react-toastify";
import { getUser } from "../users/usersAction";

const initialState = {
  currentEmployee: JSON.parse(localStorage.getItem("currentEmployee")),
  isGettingCurrentEmployee: false,
  employees: [],
  isPostingEmployee: false,
  hasPostedEmployee: false,

  isDeletingEmployee: false,
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
    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      if (!payload.employee) return;
      localStorage.setItem("currentEmployee", JSON.stringify(payload.employee));
      return { ...state, currentEmployee: payload.employee };
    });
    builder.addCase(deleteEmployee.pending, (state) => {
      return { ...state, isDeletingEmployee: false };
    });
    builder.addCase(deleteEmployee.fulfilled, (state, { payload }) => {
      const { employee_id } = payload;
      const employees = state.employees.filter(
        (employee) => employee.id === employee_id
      );
      return { ...state, employees };
    });
    bui;
  },
});

export const { resetHasPostedEmployee } = employeesSlice.actions;

export default employeesSlice.reducer;
