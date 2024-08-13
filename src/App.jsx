import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Ventes from "./pages/Ventes";
import Achats from "./pages/Achats";
import Stock from "./pages/Stock";
import Depenses from "./pages/Depenses";
import Clients from "./pages/Clients";
import MesVendeurs from "./pages/MesVendeurs";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Ventes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/achats" element={<Achats />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/depenses" element={<Depenses />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/mes-vendeurs" element={<MesVendeurs />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
