import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Login.css";

const Register = () => {
  let token = "";
  const options = {
    method: "POST",
    url: "https://interview.t-alpha.com.br/api/auth/register",
    headers: { "Content-Type": "application/json" },
    data: {
      name: "João da Silva",
      taxNumber: "12345678900",
      mail: "joao@gmail.com",
      phone: "11999999999",
      password: "123456",
    },
  };
  const [userData, setUserData] = useState({
    name: "",
    taxNumber: "",
    mail: "",
    phone: "",
    password: "",
  });

  let responseBody = {
    name: "",
    taxNumber: "",
    mail: "",
    phone: "",
    password: "",
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    options.data.name = userData.name;
    options.data.taxNumber = userData.taxNumber;
    options.data.mail = userData.mail;
    options.data.phone = userData.phone;
    options.data.password = userData.password;
    axios
      .request(options)
      .then((response) => {
        responseBody = response.data;
        if (responseBody.success === true) {
          console.log("Login feito com sucesso");
          token = responseBody.data.token;
          localStorage.setItem("logged", true);
          localStorage.setItem("token", token);
        } else {
          window.alert(responseBody.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div className="loginBody">
      <h2 className="loginH2">Cadastro</h2>
      <form onSubmit={handleRegister} className="loginForm">
        <div className="loginDiv">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="loginDiv">
          <label htmlFor="taxNumber">CPF ou CNPJ:</label>
          <input
            type="text"
            id="taxNumber"
            name="taxNumber"
            value={userData.taxNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="loginDiv">
          <label htmlFor="mail">E-mail:</label>
          <input
            type="email"
            id="mail"
            name="mail"
            value={userData.mail}
            onChange={handleChange}
            required
          />
        </div>
        <div className="loginDiv">
          <label htmlFor="phone">Telefone:</label>
          <input
            type="number"
            id="phone"
            name="phone"
            value={userData.phone}
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
            value={userData.password}
            onChange={handleChange}
            required
            minLength={6}
          />
        </div>

        <div className="loginSubmitDiv">
          <button type="submit" className="loginSubmit">
            Cadastrar-se
          </button>
        </div>
      </form>

      <div className="loginSection">
        <p>
          Clique para{" "}
          <Link to="/login" color="inherit">
            {" "}
            logar-se
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Register;
