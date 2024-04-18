import React, { useState } from "react";
import axios from "axios";

const EditProduct = () => {
  const [credentials, setCredentials] = useState({
    taxNumber: "",
    password: "",
  });

  const handleEditProduct = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://interview.t-alpha.com.br/api/auth/EditProduct",
        credentials
      );
      console.log(response.data);
    } catch (error) {
      console.error("EditProduct failed:", error);
    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>EditProduct</h2>
      <form onSubmit={handleEditProduct}>
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

export default EditProduct;
