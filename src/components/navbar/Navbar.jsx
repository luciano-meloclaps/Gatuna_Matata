import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";

function NavScrollExample() {
  const navigateLogin = useNavigate();

  return (
    <Navbar
      expand="lg"
      className="navbar_container px-3 py-4 bg-body-white sticky-top"
    >
      <Container fluid>
        <Navbar.Brand className="mx-2 fs-3 font-marca" href="#">
          Gatuna Matata
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="mx-2 fs-5" href="#action1">
              Home
            </Nav.Link>
            <Nav.Link className="mx-2 fs-5" href="#action2">
              Mascotas
            </Nav.Link>
            <Nav.Link className="mx-2 fs-5" href="#action2">
              Niñeras
            </Nav.Link>
            <Nav.Link className="mx-2 fs-5" href="#action2">
              Contacto
            </Nav.Link>
            <Nav.Link className="mx-2 fs-5" href="#action2">
              Iniciar Seccion
            </Nav.Link>
            <Button
              className="mx-2 "
              variant="info"
              onClick={() => navigateLogin("/login")}
            >
              Registrarte
            </Button>{" "}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
