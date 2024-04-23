import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

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
          window.alert(responseBody.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
    <div className="loginBody">
      <h2 className="loginH2">Login</h2>
      <form onSubmit={handleLogin} className="loginForm">
        <div className="loginDiv">
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
        <div className="loginDiv">
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
        <div className="loginSubmitDiv">
          <button type="submit" onClick={loadHome} className="loginSubmit">
            Entrar
          </button>
        </div>
      </form>
      <div className="registerSection">
        <p>
          Clique para{" "}
          <Link to="/register" color="inherit">
            {" "}
            registrar-se
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default Login;
