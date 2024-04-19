import React from "react";
import Login from "./components/Login";
import ListProducts from "./components/ListProducts";
import Register from "./components/Register";
import CreateProduct from "./components/CreateProduct";
import GetProduct from "./components/GetProduct";
import EditProduct from "./components/EditProduct";
import DeleteProduct from "./components/DeleteProduct";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" exact />
      <Route element={<Login />} path="/login" />
      <Route element={<Register />} path="/register" />
      <Route element={<CreateProduct />} path="/new-product" />
      <Route element={<ListProducts />} path="/products" />
      <Route element={<GetProduct />} path="/product/:id" />
      <Route element={<EditProduct />} path="/edit-product/:id" />
      <Route element={<DeleteProduct />} path="/delete-product/:id" />
    </Routes>
  );
};

export default AppRouter;
