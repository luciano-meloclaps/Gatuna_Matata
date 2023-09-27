import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const LoginForm = () => {
  return (
    <div className="container col-md-3 bg-light p-5 rounded">
      <Form>
        <h3 className="text-center">Login</h3>
        <p className="text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
          recusandae, possimus nesciunt fuga.
        </p>
        <hr />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingrese su email" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Ingrese su contraseña" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Recuerdame" />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="primary" size="lg">
            Enter
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
