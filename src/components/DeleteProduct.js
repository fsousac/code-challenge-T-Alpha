import React, { useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import "./DeleteProduct.css";

const DeleteProduct = ({ productId }) => {
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
        console.log(response.data);
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error("Erro ao deletar produto:", error);
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
