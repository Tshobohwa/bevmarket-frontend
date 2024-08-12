import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Ventes from "./pages/Ventes";
import Achats from "./pages/Achats";
import Stock from "./pages/Stock";
import Depenses from "./pages/Depenses";
import Clients from "./pages/Clients";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ventes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/achats" element={<Achats />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/depenses" element={<Depenses />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
    </BrowserRouter>
  );
}
