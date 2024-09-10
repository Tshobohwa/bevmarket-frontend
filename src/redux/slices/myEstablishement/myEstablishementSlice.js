import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myEstatblishement: {},
  salesPoints: [],
  employees: [],
};

const myEstablishementSlice = createSlice({
  name: "myEstablishement",
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export default myEstablishementSlice.reducer;
