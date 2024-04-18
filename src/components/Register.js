import React, { useState } from "react";
import axios from "axios";

const Register = () => {
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
          console.log("Registro feito com sucesso");
        } else {
          console.log(responseBody.message);
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
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
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
        <div>
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
        <div>
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
        <div>
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
        <div>
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
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Register;
