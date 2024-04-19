import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import "./ListProducts.css";

const ListProducts = () => {
  if (localStorage.getItem("logged") !== "true") {
    window.location.replace("http://localhost:3000/login");
  }
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://interview.t-alpha.com.br/api/products/get-all-products",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    axios
      .request(options)
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.error("Erro ao obter lista de produtos:", error);
      });
  }, []);

  return (
    <div className="listProductsBody">
      <Sidebar />
      <br />
      <div className="allProducts">
        <h2>Lista de todos os Produtos</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <strong>{product.name}</strong> <br /> {product.description}{" "}
              <br /> R$ {product.price} <br /> Estoque: {product.stock}
              <br />
            </li>
          ))}
        </ul>
      </div>
      <div className="findProduct">
        <h2>Pesquisar um produto</h2>
        <input type="number" placeholder="Id do Produto"></input>
        <div className="search"></div>
      </div>
    </div>
  );
};

export default ListProducts;
