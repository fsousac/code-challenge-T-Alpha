import React, { useState } from "react";
import axios from "axios";
import GetProduct from "./GetProduct";
import "./EditProduct.css";
import "./ListProducts.css";
import Sidebar from "./Sidebar";

const EditProduct = () => {
  if (localStorage.getItem("logged") !== "true") {
    window.location.replace("http://localhost:3000/login");
  }
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    stock: 0,
  });

  const handleEditProduct = async (e) => {
    e.preventDefault();
    let productId = document.querySelector(".inputGetProduct").value;

    const options = {
      method: "PATCH",
      url: `https://interview.t-alpha.com.br/api/products/update-product/${productId}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        name: productData.name,
        description: productData.description,
        price: Number(productData.price),
        stock: Number(productData.stock),
      },
    };

    try {
      const response = await axios.request(options);
      if (response.data.success === true) {
        console.log("Produto atualizado com sucesso");
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="sidebarOnComponent">
        <Sidebar />
      </div>
      <div className="editProductBody">
        <h2 className="editProductH2">Editar Produto</h2>

        <form onSubmit={handleEditProduct} className="editProductForm">
          <section className="currentElement">
            <GetProduct />
          </section>
          <div className="editProductDiv">
            <label htmlFor="name" className="editProductH3">
              Nome:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={productData.name}
              onChange={handleChange}
              className="editInput"
              required
            />
          </div>
          <div className="editProductDiv">
            <label htmlFor="description" className="editProductH3">
              Descrição:
            </label>
            <textarea
              id="description"
              name="description"
              value={productData.description}
              onChange={handleChange}
              className="editInput"
              required
            />
          </div>
          <div className="editProductDiv">
            <label htmlFor="price" className="editProductH3">
              Preço:
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={productData.price}
              onChange={handleChange}
              className="editInput"
              required
            />
          </div>
          <div className="editProductDiv">
            <label htmlFor="stock" className="editProductH3">
              Estoque:
            </label>
            <input
              type="number"
              id="stock"
              name="stock"
              value={productData.stock}
              onChange={handleChange}
              required
              className="editInput"
            />
          </div>
          <div className="newProductSubmitDiv">
            <button type="submit" className="newProductSubmit">
              Salvar Alterações
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
