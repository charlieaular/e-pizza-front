import { Route } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";
import Products from "../pages/Products";

export default [
    <Route key="products" path="/products" element={<Products />} />,
    <Route key="products.detail" path="/products/:id" element={<ProductDetail />} />
]

