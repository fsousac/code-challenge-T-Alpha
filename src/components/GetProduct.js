import React, { useState } from "react";
import axios from "axios";
import "./ListProducts.css";

const GetProduct = () => {
  const [productId, setProductId] = useState("");
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGetProduct = async () => {
    setLoading(true);
    setError(null);

    const options = {
      method: "GET",
      url: `https://interview.t-alpha.com.br/api/products/get-one-product/${productId}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    try {
      const response = await axios.request(options);
      if (response.data.success === true) {
        setProduct(response.data.data);
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError("Erro ao buscar o produto");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bodyGetProduct">
      <h2 className="listProductH3">Buscar Produto</h2>
      <div>
        <label htmlFor="productId" className="labelProduct">
          ID do Produto:
        </label>
        <input
          type="number"
          id="productId"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          className="inputGetProduct"
        />
        <button onClick={handleGetProduct} className="searchProduct">
          Buscar
        </button>
      </div>

      <div className="consult">
        {loading ? (
          <p>Carregando...</p>
        ) : error ? (
          <p>{error}</p>
        ) : product ? (
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
        ) : null}
      </div>
    </div>
  );
};

export default GetProduct;
