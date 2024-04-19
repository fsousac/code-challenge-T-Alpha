import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditProduct = () => {
  const { productId } = useParams();
  const options = {
    method: "PATCH",
    url: "https://interview.t-alpha.com.br/api/products/update-product/__ID__",
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

  const getProductData = async () => {
    try {
      const response = await axios.get(
        `https://interview.t-alpha.com.br/api/products/get-one-product/${productId}`
      );
      for (const k in response.data) {
        if (Number(k.id) === productId) {
          responseBody = response.data;
          break;
        }
      }
      setProductData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProductData();
  });

  const handleEditProduct = async (e) => {
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
      <h2>Editar Produto</h2>
      <form onSubmit={handleEditProduct}>
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
        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
};

export default EditProduct;
