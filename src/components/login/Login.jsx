import React from "react";

import "./login.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useNavigate } from "react-router";

const Login = ({ setSignedInHandler }) => {
  const [email, setEmail] = useState(""); //los state que toman los valores de los input del form
  const [password, setPassword] = useState(""); //los state que toman los valores de los input del form

  const navigate = useNavigate(); //custom hook que después usamos para redirigir al dashboard :p

  const onChangeEmailHandler = (event) => {
    //las funciones que cambian los valores a medida que se ingresan datos en el form
    setEmail(event.target.value);
  };

  const onChangePasswordHandler = (event) => {
    //las funciones que cambian los valores a medida que se ingresan datos en el form
    setPassword(event.target.value);
  };

  const onClickLogInHandler = (event) => {
    event.preventDefault();
    if (email.length === 0 || password.length === 0) {
      //CAMBIAR VALIDACIONES/
      alert("Usuario inválido para registrarse");
      return;
    }

    setSignedInHandler(true); //funcion que pasamos por prop, cambiamos el valor a true así se puede loggear

    navigate("/dashboard"); //redirigimos al dashboard
  };
  return (
    <div className="vh-100 d-flex align-items-center background">
      <div className="container col-md-3 bg-light p-5  bg-secondary-user rounded">
        <Form>
          <h1 class="font-marca text-center color-accent-user p-2">
            Gatuna Matata
          </h1>

          <p className="text-center color-secondary-user">
            "miau miau miau miau miau miau"
          </p>
          <hr />
          <Form.Group className="my-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="michi@miau.com"
              onChange={onChangeEmailHandler}
            />
            <Form.Text className="text-muted">{email}</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingrese su contraseña"
              onChange={onChangePasswordHandler}
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
          <div className="d-grid gap-2 ">
            <Button
              size=" btn bg-secondary-user text-white btn-lg px-5 me-md-2 fw-bold bx-2 border-0"
              onClick={onClickLogInHandler}
            >
              Inciar sesión
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
