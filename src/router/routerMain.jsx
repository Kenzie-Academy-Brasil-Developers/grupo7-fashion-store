import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { RegisterPage } from "../components/RegisterPage/RegisterPage";
import { LoginPage } from "../components/LoginPage/LoginPage";
import { HomePage } from "../components/HomePage/HomePage";
import { ProductPage } from "../components/ProductPage/ProductPage";
import { AdminPage } from "../components/AdminPage/AdminPage";
import { HandleProducts } from "../components/HandleProducts/HandleProducts";
import { ProductsPage } from "../pages/ProductsPage";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const RounterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductsPage />} />
      <Route path="/product/" element={<ProductPage />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/handleproducts" element={<HandleProducts />} />
      </Route>
      <Route  element={<PublicRoutes />}>
        <Route path="/register" element={<RegisterPage></RegisterPage>} />
        <Route path="/login" element={<LoginPage></LoginPage>} />
      </Route>
    </Routes>
  );
};
