import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div>
      <h2>Lista de Produtos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> - {product.description} - R${" "}
            {product.price} - Estoque: {product.stock}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListProducts;
