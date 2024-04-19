import React, { useState, useEffect } from "react";
import axios from "axios";

const GetProduct = ({ productId }) => {
  if (localStorage.getItem("logged") !== "true") {
    window.location.replace("http://localhost:3000/login");
  }
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://interview.t-alpha.com.br/api/products/get-one-product/${productId}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Erro ao obter produto:", error);
      });
  }, [productId]);

  return (
    <div>
      {product ? (
        <div>
          <h2>Detalhes do Produto</h2>
          <p>
            <strong>Nome:</strong> {product.name}
          </p>
          <p>
            <strong>Descrição:</strong> {product.description}
          </p>
          <p>
            <strong>Preço:</strong> R$ {product.price}
          </p>
          <p>
            <strong>Estoque:</strong> {product.stock}
          </p>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default GetProduct;
