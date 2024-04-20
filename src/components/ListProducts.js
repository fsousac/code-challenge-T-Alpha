import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import GetProduct from "./GetProduct";
import "./ListProducts.css";

const ListProducts = () => {
  if (localStorage.getItem("logged") !== "true") {
    window.location.replace("http://localhost:3000/login");
  }
  const [products, setProducts] = useState([]);
  const [searchProductId, setSearchProductId] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  const handleSearchProduct = () => {
    setSelectedProduct(null);

    const product = products.find(
      (product) => product.id === Number(searchProductId)
    );
    if (product) {
      setSelectedProduct(product);
    } else {
      setSelectedProduct("notFound");
    }
  };

  return (
    <div className="listProductsBody">
      <Sidebar />
      <br />
      <div className="allProducts">
        <h2>Lista de todos os Produtos</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <strong>{product.name}</strong> <br /> {product.description}{" "}
              <br /> R$ {product.price} <br /> Estoque: {product.stock}
              <br />
            </li>
          ))}
        </ul>
      </div>

      <div className="findProduct">
        <h2>Pesquisar um produto</h2>
        <input
          type="number"
          placeholder="ID do Produto"
          value={searchProductId}
          onChange={(e) => setSearchProductId(e.target.value)}
        />
        <button onClick={handleSearchProduct}>Pesquisar</button>
        <div className="search">
          {selectedProduct === "notFound" ? (
            <p>Nenhum produto encontrado com o ID informado.</p>
          ) : selectedProduct ? (
            <GetProduct productId={selectedProduct.id} />
          ) : (
            <p>Realize uma pesquisa para ver os detalhes do produto.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListProducts;
