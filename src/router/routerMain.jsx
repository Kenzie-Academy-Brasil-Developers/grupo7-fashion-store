import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { RegisterPage } from "../components/RegisterPage/RegisterPage";
import { LoginPage } from "../components/LoginPage/LoginPage";
import { HomePage } from "../components/HomePage/HomePage";
import { ProductPageOne } from "../components/ProductPage/ProductPageOne";
import { AdminPage } from "../components/AdminPage/AdminPage";
import { HandleProducts } from "../components/HandleProducts/HandleProducts";
import {  ProductsPage } from "../pages/ProductsPage";
import { ProductPageTwo } from "../components/ProductPage/ProductPageTwo";
import { ProductPageThree } from "../components/ProductPage/ProductPageThree";
import { ProductPageFour } from "../components/ProductPage/ProductPageFour";

export const RounterMain = () => {
    return (
        <Routes>
            <Route path="/" element={<ProductsPage/>}/>
            <Route path="/product/1" element={<ProductPageOne></ProductPageOne>}/>
            <Route path="/product/2" element={<ProductPageTwo/>}/>
            <Route path="/product/3" element={<ProductPageThree/>}/>
            <Route path="/product/4" element={<ProductPageFour/>}/>
            <Route path="/admin" element={<AdminPage></AdminPage>}/>
            <Route path="/handleproducts" element={<HandleProducts></HandleProducts>}/>
            <Route path="/register" element={<RegisterPage></RegisterPage>}/>
            <Route path="/login" element={<LoginPage></LoginPage>}/>
        </Routes>
    )
}