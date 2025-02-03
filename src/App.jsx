import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Ventes from "./pages/Ventes";
import Stock from "./pages/Stock";
import Depenses from "./pages/Depenses";
import Clients from "./pages/Clients";
import MesVendeurs from "./pages/MesVendeurs";
import { Provider } from "react-redux";
import store from "./redux/store";
import Dashboard from "./pages/Dashboard";
import NewSale from "./pages/NewSale";
import MyEstablishement from "./pages/MyEstablishement";
import SalePointDetails from "./pages/SalePointDetails";
import PrivateRoutes from "./routes/PrivateRoutes";
import AuthRoutes from "./routes/AuthRoutes";
import SignUp from "./pages/SignUp";
import ClientDetails from "./pages/ClientDetails";
import SalePointExpenses from "./pages/SalePointExpenses";
import SalePointEmployees from "./pages/SalePointEmployees";
import SalePointStock from "./pages/SalePointStock";
import UnemployedRoutes from "./routes/UnemployedRoutes";
import EmployedRoutes from "./routes/EmployedRoutes";
import Starting from "./pages/Starting";
import NewEstablishment from "./pages/NewEstablishment";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthRoutes />}>
            <Route path="/login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route element={<EmployedRoutes />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/ventes" element={<Ventes />} />
              <Route path="/stock" element={<Stock />} />
              <Route path="/depenses" element={<Depenses />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="clients/:clientId" element={<ClientDetails />} />
              <Route path="/mes-vendeurs" element={<MesVendeurs />} />
              <Route path="/new-sale" element={<NewSale />} />
              <Route path="/myestablishement" element={<MyEstablishement />} />
              <Route
                path="/myestablishement/salepoints/:salePointId"
                element={<SalePointDetails />}
              />
              <Route
                path="/myestablishement/salepoints/:salePointId/expenses"
                element={<SalePointExpenses />}
              />
              <Route
                path="/myestablishement/salepoints/:salePointId/employees"
                element={<SalePointEmployees />}
              />
              <Route
                path="/myestablishement/salepoints/:salePointId/stock"
                element={<SalePointStock />}
              />
            </Route>
            <Route element={<UnemployedRoutes />}>
              <Route element={<Starting />} path="/starting" />
              <Route element={<NewEstablishment />} path="/newestablishment" />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer autoClose={5000} />
    </Provider>
  );
}
