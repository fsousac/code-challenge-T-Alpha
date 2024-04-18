import React, { useState } from "react";
import axios from "axios";

const ListProducts = () => {
  const [credentials, setCredentials] = useState({
    taxNumber: "",
    password: "",
  });

  const handleListProducts = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://interview.t-alpha.com.br/api/auth/ListProducts",
        credentials
      );
      console.log(response.data);
    } catch (error) {
      console.error("ListProducts failed:", error);
    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>ListProducts</h2>
      <form onSubmit={handleListProducts}>
        <div>
          <label htmlFor="taxNumber">CPF ou CNPJ:</label>
          <input
            type="text"
            id="taxNumber"
            name="taxNumber"
            value={credentials.taxNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default ListProducts;
