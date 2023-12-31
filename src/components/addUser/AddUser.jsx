import React, { useState } from 'react'

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddUser = ({ setUsersInfoHandler }) => {
    const [email, setEmail] = useState(""); //los state que toman los valores de los input del form
    const [password, setPassword] = useState(""); //los state que toman los valores de los input del form
    const [name, setName] = useState("");
    const [userType, setUserType] = useState("");

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


    const onClickLogInHandler = async (event) => {

        event.preventDefault();

        if (email.length === 0 || password.length === 0) {
            ///Esto es para hacer un pushh
            alert("Usuario inválido para registrarlo");
            return;
        }
        else {
            await fetch("https://gatunamatataapi.onrender.com/users", {
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
                .catch((error) => {
                    console.log(error);
                })

            await fetch("https://gatunamatataapi.onrender.com/users", {
                headers: {
                    accept: "application/json",
                },
            })
                .then((response) => response.json())
                .then((userData) => {
                    setUsersInfoHandler(userData)
                })
                .catch((error) => console.log(error))
        }

    };


    return (
        <div className="container col-md-3 bg-light p-5 bg-secondary-user rounded">
            <Form>
                <Form.Group className="my-3" controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder=""
                        onChange={onChangeNameHandler}
                    />
                </Form.Group>

                <Form.Group className="my-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder=""
                        onChange={onChangeEmailHandler}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder=""
                        onChange={onChangePasswordHandler}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUserType">
                    <Form.Label>Es...</Form.Label>
                    <Form.Select onChange={onChangeUserTypeHandler}>
                        <option>Elige una opción</option>
                        <option value="client">Cliente</option>
                        <option value="sitter">Niñera</option>
                    </Form.Select>
                </Form.Group>

                <div className="d-grid gap-2 ">

                    <Button
                       variant= "success"
                        onClick={onClickLogInHandler}
                    >
                        Registrar nuevo usuario
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default AddUser