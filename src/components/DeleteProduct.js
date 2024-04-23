import React, { useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import "./DeleteProduct.css";
import "./CreateProduct.css";
import GetProduct from "./GetProduct";

const DeleteProduct = () => {
  if (localStorage.getItem("logged") !== "true") {
    window.location.replace("http://localhost:3000/login");
  }

  const [productId, setProductId] = useState("");
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
    <div className="deleteProductComponent">
      <div className="sidebarOnComponent">
        <Sidebar />
      </div>
      <div className="deleteProductBody">
        <h2 className="tittleDelete">Deletar Produto</h2>
        <GetProduct />
        <p className="deleteProductP">
          Digite o ID do produto que deseja deletar:
        </p>
        <input
          type="number"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          className="inputIdDelete"
        />
        <button onClick={handleDelete} className="submitDelete">
          Deletar Produto
        </button>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default DeleteProduct;
