import React, { useState } from "react";
import axios from "axios";

function Login() {
  let token = null;
  const options = {
    method: "POST",
    url: "https://interview.t-alpha.com.br/api/auth/login",
    headers: { "Content-Type": "application/json" },
    data: { taxNumber: "12345678900", password: "123456" },
  };

  const [credentials, setCredentials] = useState({
    taxNumber: "",
    password: "",
  });
  let responseBody = {
    success: false,
    message: "",
    data: "",
    token: "",
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    options.data.password = credentials.password;
    options.data.taxNumber = credentials.taxNumber;
    axios
      .request(options)
      .then((response) => {
        responseBody = response.data;
        if (responseBody.success === true) {
          console.log("Login feito com sucesso");
          token = responseBody.data.token;
        } else {
          console.log(responseBody.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    return token;
  };
  const saveToken = (e) => {
    if (token !== null) {
      localStorage.setItem("token", token);
      console.log(localStorage.getItem("token"));
    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
            minLength={6}
          />
        </div>
        <button type="submit">Entrar</button>
        <button type="button" onClick={saveToken}>
          Mostrar Token
        </button>
      </form>
    </div>
  );
}

export default Login;
