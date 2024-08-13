import { configureStore } from "@reduxjs/toolkit";
import clientsReducer from "./slices/clients/clientsSlice";

const store = configureStore({
  reducer: {
    clients: clientsReducer,
  },
});

export default store;
