import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  localStorage.setItem("logged", false);
  localStorage.setItem("token", null);
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
          localStorage.setItem("logged", true);
          localStorage.setItem("token", token);
          loadHome();
        } else {
          console.log(responseBody.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const showToken = (e) => {
    if (token !== null) {
      console.log(localStorage.getItem("token"));
    }
  };

  let navigate = useNavigate();
  const loadHome = (e) => {
    if (responseBody.success === true) {
      navigate("/");
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
        <button type="submit" onClick={loadHome}>
          Entrar
        </button>
        <button type="button" onClick={showToken}>
          Mostrar Token
        </button>
      </form>
      <Link to="/register">Registrar-se</Link>
    </div>
  );
}

export default Login;
