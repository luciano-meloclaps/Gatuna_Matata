import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
/*import "./BadRequest.css"; */

const Error400 = () => {
  return (
    <Container className="error-container">
      <Row className="justify-content-md-center">
        <Col md="auto" className="text-white">
          <h1>Error 404: ¡Maullido incorrecto!</h1>
          <p>
            ¡Parece que tu gato ha caminado sobre el teclado otra vez! ¿Por qué
            no intentas de nuevo o vuelves a la página principal?
          </p>
          <Button variant="info" className="text-secondary-emphasis" href="/">
            Volver al inicio
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Error400;
