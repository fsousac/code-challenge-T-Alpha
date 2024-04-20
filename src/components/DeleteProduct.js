import React, { useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import "./DeleteProduct.css";
import { useParams } from "react-router-dom";

const DeleteProduct = () => {
  if (localStorage.getItem("logged") !== "true") {
    window.location.replace("http://localhost:3000/login");
  }
  const productId = Number(useParams().id);
  const [message, setMessage] = useState(null);

  const handleDelete = () => {
    const options = {
      method: "DELETE",
      url: `https://interview.t-alpha.com.br/api/products/delete-product/${productId}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    axios
      .request(options)
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        setMessage("Erro ao deletar produto");
      });
  };

  return (
    <div className="deleteProductBody">
      <Sidebar />
      <br />
      <h2 onLoad={handleDelete}>Deletar Produto</h2>
      <button onClick={handleDelete}>Deletar Produto</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteProduct;
