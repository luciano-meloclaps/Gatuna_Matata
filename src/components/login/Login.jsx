import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { AuthenticationContext } from "../services/authentication/authentication.context";

import "./login.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useFetch from "../custom/useFetch/useFetch";



const Login = () => {
  const [email, setEmail] = useState(""); //los state que toman los valores de los input del form
  const [password, setPassword] = useState(""); //los state que toman los valores de los input del form
  const [name, setName] = useState("");
  const [userType, setUserType] = useState("");
  const [loginRegisterToggle, setLoginRegisterToggle] = useState(true)

  const { handleLogin } = useContext(AuthenticationContext)

  const { data } = useFetch("http://localhost:8000/users")
  

  ////LOGIN FORM///////

  const onChangeEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const onChangePasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const onChangeNameHandler = (event) => {
    setName(event.target.value)
  }

  const onChangeUserTypeHandler = (event) => {
    setUserType(event.target.value)
  }

  /////////////////////

  const navigate = useNavigate();

  const onClickSetLoginToggleHandler = () => {
    setLoginRegisterToggle(!loginRegisterToggle)
  }

  const onClickLogInHandler = (event) => { //le hace falta una forma de mostrarle al usuario que ingreso la información incorrecta, tambien hay que hacer un logout, y tambien hay que hacer un renderizado condicional de si el register es para cliente o para niñera, si es para cliente hay que pedir su direccion, así despues se lo encajamos al turno de la niñera :p
    event.preventDefault();

    if (loginRegisterToggle) { //si es verdadero, entra en el register
      if (email.length === 0 || password.length === 0) {
        //CAMBIAR VALIDACIONES/
        alert("Usuario inválido para registrarse");
        return;
      }
      else {
        fetch("http://localhost:8000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            id: Math.random(),
            name: name,
            email: email,
            password: password,
            userType: userType
          }),
        })
          .then((response) => {
            if (response.ok) return response.json();
            else {
              throw new Error("the response has some errors!");
            }
          })
          .then((data) => {
            handleLogin(data);
            navigate("/dashboard");
          })
          .catch((error) => {
            console.log(error);
          })
      }
    }
    else { //si es falso, entra en el login

      const enteredUser = data.find(user => user.email === email)

      if(enteredUser === undefined || enteredUser.password !== password){
        alert("contraseña o email incorrectos") //hacer una validación linda viste
      } else {
        handleLogin(enteredUser);
        navigate("/dashboard");
      }

    }
  };
  
  return (
    <div className="vh-100 d-flex align-items-center background">
      <div className="container col-md-3 bg-light p-5  bg-secondary-user rounded">
        <Form>
          <h1 className="font-marca text-center color-accent-user p-2">
            Gatuna Matata
          </h1>
          <p className="text-center color-secondary-user">
            "miau miau miau miau miau miau"
          </p>
          <hr />
          {loginRegisterToggle && <Form.Group className="my-3" controlId="formBasicName">
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
              placeholder="Ingrese su email"
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
          {/*hay que validar esto che AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA */}
          {loginRegisterToggle &&
            <Form.Group className="mb-3" controlId="formBasicUserType">
              <Form.Label>Quiero ser...</Form.Label>
              <Form.Select onChange={onChangeUserTypeHandler}>
                <option>Elige una opción</option>
                <option value="client">Cliente</option>
                <option value="sitter">Niñera</option>
              </Form.Select>
            </Form.Group>
          }

          <div className="d-grid gap-2 ">
            <Button onClick={onClickSetLoginToggleHandler} variant="link">{loginRegisterToggle ? "¿Ya tienes una cuenta? Inicia sesión" : "¿No tienes cuenta? Registrate"}</Button>
            <Button
              size=" btn bg-secondary-user text-white btn-lg px-5 me-md-2 fw-bold bx-2 border-0"
              onClick={onClickLogInHandler}
            >
              {loginRegisterToggle ? "Registrarse" : "Iniciar sesión"}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;