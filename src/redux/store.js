import { configureStore } from "@reduxjs/toolkit";
import clientsReducer from "./slices/clients/clientsSlice";
import itemsReducer from "./slices/items/itemsSlice";
import stockReducer from "./slices/stock/stockSlice";
import expensesReducer from "./slices/expenses/expensesSlice";
import salesReducer from "./slices/sales/salesSlice";
import myEstablishementReducer from "./slices/myEstablishement/myEstablishementSlice";
import userReducer from "./slices/user/userSlice";
import purchasesReducer from "./slices/purchases/purchasesSlice";
import salePointsReducer from "./slices/salePoints/salePointsSlice";
import salersReducer from "./slices/salersSlice/salersSlice";

const store = configureStore({
  reducer: {
    clients: clientsReducer,
    items: itemsReducer,
    stock: stockReducer,
    expenses: expensesReducer,
    sales: salesReducer,
    purchases: purchasesReducer,
    myEstablishement: myEstablishementReducer,
    user: userReducer,
    salePoints: salePointsReducer,
    salers: salersReducer,
  },
});

export default store;
