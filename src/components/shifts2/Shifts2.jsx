import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Button from "react-bootstrap/esm/Button";
import DateFixed from "../dateFixed/DateFixed";

const Shifts2 = ({ shifts }) => {

  console.log(shifts)

  return (
    <>
      <div className="m-5">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={2}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tu disponibilidad</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Turnos reservados</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tertiary" disabled>
                    Gestion de usuarios
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  {/* TABLA DISPONIBILIDAD*/}
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th className="text-info" scope="col">
                          #
                        </th>
                        <th className="text-info" scope="col">
                          Turnos
                        </th>
                        <th className="text-danger" scope="col">
                          dia
                        </th>
                        <th className="text-danger" scope="col">
                          mes
                        </th>
                        <th className="text-danger" scope="col">
                          año
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {shifts.map((shift, index) => {
                        return (
                          <tr>
                            <th scope="row">{index}</th>
                            <td></td>
                            <DateFixed date={shift.date}/>
                            <Button>Cancelar</Button>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  {/* TABLA TOMADOS*/}
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th className="text-danger" scope="col">
                          #
                        </th>
                        <th className="text-danger" scope="col">
                          Nombre de niñera
                        </th>
                        <th className="text-danger" scope="col">
                          Cliente
                        </th>
                        <th className="text-danger" scope="col">
                          Direccion
                        </th>
                        <th className="text-danger" scope="col">
                          Nombre del rufian
                        </th>
                        <th className="text-danger" scope="col">
                          Fecha
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </>
  );
};

export default Shifts2;
