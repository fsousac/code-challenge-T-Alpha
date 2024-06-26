import React from "react";
import Login from "./components/Login";
import ListProducts from "./components/ListProducts";
import Register from "./components/Register";
import CreateProduct from "./components/CreateProduct";
import GetProduct from "./components/GetProduct";
import EditProduct from "./components/EditProduct";
import DeleteProduct from "./components/DeleteProduct";
import { Routes, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<CreateProduct />} path="/" exact />
      <Route element={<Login />} path="/login" />
      <Route element={<Register />} path="/register" />
      <Route element={<CreateProduct />} path="/new-product" />
      <Route element={<ListProducts />} path="/products" />
      <Route element={<GetProduct />} path="/product" />
      <Route element={<EditProduct />} path="/edit-product" />
      <Route element={<DeleteProduct />} path="/delete-product" />
    </Routes>
  );
};

export default AppRouter;
