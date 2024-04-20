import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const GetProduct = (givenID) => {
  if (localStorage.getItem("logged") !== "true") {
    window.location.replace("http://localhost:3000/login");
  }
  let productId;
  const temp = Number(useParams().id);
  if (givenID === null) {
    productId = temp;
  } else {
    productId = givenID.productId;
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
        if (response.data.success === true) {
          setProduct(response.data.data);
        } else {
          document.querySelector(".consult").innerText = response.data.message;
        }
      })
      .catch((error) => {});
  }, [productId]);

  return (
    <div>
      <div className="consult">
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
    </div>
  );
};

export default GetProduct;
