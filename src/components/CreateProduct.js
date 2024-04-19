import React, { useState } from "react";
import axios from "axios";

const CreateProduct = () => {
  if (localStorage.getItem("logged") !== "true") {
    window.location.replace("http://localhost:3000/login");
  }
  const options = {
    method: "POST",
    url: "https://interview.t-alpha.com.br/api/products/create-product",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    data: {
      name: 'TV 55" 4K Full HD',
      description: "Televisão com cores vibrantes",
      price: 3000,
      stock: 10,
    },
  };
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    stock: 0,
  });

  let responseBody = {
    name: "",
    description: "",
    price: 0,
    stock: 0,
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();

    options.data.name = productData.name;
    options.data.description = productData.description;
    options.data.price = Number(productData.price);
    options.data.stock = Number(productData.stock);

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        responseBody = response.data;
        if (responseBody.success === true) {
          console.log("Produto registrado com sucesso");
        } else {
          console.log(responseBody.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Criar Produto</h2>
      <form onSubmit={handleCreateProduct}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={productData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Descrição:</label>
          <textarea
            id="description"
            name="description"
            value={productData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Preço:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={productData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="stock">Estoque:</label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={productData.stock}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Criar Produto</button>
      </form>
    </div>
  );
};

export default CreateProduct;
