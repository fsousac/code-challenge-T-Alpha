import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import ListProducts from "./components/ListProducts";
import Register from "./components/Register";
import CreateProduct from "./components/CreateProduct";
import GetProduct from "./components/GetProduct ";
import EditProduct from "./components/EditProduct";
import DeleteProduct from "./components/DeleteProduct";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={<Login />} path="/" exact />
      <Route component={<ListProducts />} path="/products" />
      <Route component={<Register />} path="/register" />
      <Route component={<CreateProduct />} path="/new-product" />
      <Route component={<GetProduct />} path="/product/:id" />
      <Route component={<EditProduct />} path="/edit-product/:id" />
      <Route component={<DeleteProduct />} path="/delete-product/:id" />
    </BrowserRouter>
  );
};

export default Routes;
