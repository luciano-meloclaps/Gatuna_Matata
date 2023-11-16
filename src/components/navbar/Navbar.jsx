import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { AuthenticationContext } from "../services/authentication/authentication.context";

function NavScrollExample() {
  const navigateLogin = useNavigate();

  const {handleLogout, userData} = useContext(AuthenticationContext)

  return (
    <Navbar
      expand="lg"
      className="navbar_container p-3 bg-primary-user sticky-top"
    >
      <Container fluid>
        <Navbar.Brand className="mx-5 fs-2 text-white font-marca" href="#">
          Gatuna Matata
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 text-whit my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="mx-2 text-white fs-5" href="#action2">
              Mascotas
            </Nav.Link>
            <Nav.Link className="mx-2 text-white fs-5" href="#action2">
              Niñeras
            </Nav.Link>
            <Nav.Link className="mx-2 text-white fs-5" href="#action2">
              Contacto
            </Nav.Link>
            {userData && <Button variant="outline-light mx-4 lg btn-lg fw-bold" onClick={handleLogout}>
              Cerrar sesión
            </Button>}
            {!userData &&
            <Button
              className="btn bg-secondary-user text-white btn-lg  me-md-2 fw-bold bx-2 border-0"
              onClick={() => navigateLogin("/login")}
            >
              Iniciar sesión
            </Button>};{" "}
            {!userData &&
            <Button
              className="btn bg-secondary-user text-white btn-lg  me-md-2 fw-bold bx-2 border-0"
              onClick={() => navigateLogin("/login")}
            >
              Registrarte
            </Button>};{" "}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
