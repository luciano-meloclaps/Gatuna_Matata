import React from "react";

import "./login.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useNavigate } from "react-router";

const Login = ({ setSignedInHandler }) => {
  const [email, setEmail] = useState(""); //los state que toman los valores de los input del form
  const [password, setPassword] = useState(""); //los state que toman los valores de los input del form
  const [name, setName] = useState("");
  const [loginToggle, setLoginToggle] = useState(false)

  const navigate = useNavigate(); //custom hook que después usamos para redirigir al dashboard :p

  const onChangeEmailHandler = (event) => {
    //las funciones que cambian los valores a medida que se ingresan datos en el form
    setEmail(event.target.value);
  };

  const onChangePasswordHandler = (event) => {
    //las funciones que cambian los valores a medida que se ingresan datos en el form
    setPassword(event.target.value);
  };

  const onChangeNameHandler = (event) => {
    setName(event.target.value)
  }

  const onClickSetLoginToggleHandler = () => {
    setLoginToggle(!loginToggle)
  }

  const onClickLogInHandler = (event) => { //le hace falta una forma de mostrarle al usuario que ingreso la información incorrecta, tambien hay que hacer un logout, y tambien hay que hacer un renderizado condicional de si el register es para cliente o para niñera, si es para cliente hay que pedir su direccion, así despues se lo encajamos al turno de la niñera :p
    event.preventDefault();

    if (loginToggle) { //si es verdadero, entra en el register
      if (email.length === 0 || password.length === 0) {
        //CAMBIAR VALIDACIONES/
        alert("Usuario inválido para registrarse");
        return;
      }
      else {
        fetch("http://localhost:8000/register", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            id: Math.random(),
            name: name,
            email: email,
            password: password,
            userType: "sitter"
          }),
        })
          .then((response) => {
            if (response.ok) return response.json();
            else {
              throw new Error("the response has some errors!");
            }
          })
          .then((data) => {
            setSignedInHandler(true); //funcion que pasamos por prop, cambiamos el valor a true así se puede loggear
            navigate("/dashboard"); //redirigimos al dashboard
          })
          .catch((error) => {
            console.log(error);
          })
      }
    }
    else { //si es falso, entra en el login
      fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
        .then((response) => {
          if (response.ok) return response.json();
          else {
            throw new Error("Error en la solicitud de inicio de sesión");
          }
        })
        .then(data => {
          const token = data.token;

          setSignedInHandler(true); //funcion que pasamos por prop, cambiamos el valor a true así se puede loggear
          navigate("/dashboard"); //redirigimos al dashboard
        })
        .catch(error => {
          console.error("Error de inicio de sesión:", error);
        });
    }


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
          {loginToggle && <Form.Group className="my-3" controlId="formBasicName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su nombre"
              onChange={onChangeNameHandler}
            />
          </Form.Group>}

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



          <div className="d-grid gap-2 ">
            <Button onClick={onClickSetLoginToggleHandler} variant="link">{loginToggle ? "¿Ya tienes una cuenta? Inicia sesión" : "¿No tienes cuenta? Registrate"}</Button>
            <p>{loginToggle.toString()}</p>
            <Button
              size=" btn bg-secondary-user text-white btn-lg px-5 me-md-2 fw-bold bx-2 border-0"
              onClick={onClickLogInHandler}
            >
              {loginToggle ? "Registrarse" : "Iniciar sesión"}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
