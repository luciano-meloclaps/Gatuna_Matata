import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import DateFixed from '../dateFixed/DateFixed';
import { AuthenticationContext } from '../services/authentication/authentication.context';

const Shift = ({ shifts, setShiftHandler }) => {
    const [showModal, setShowModal] = useState({}); // Objeto para manejar el estado de cada modal individualmente
    const [cat, setCat] = useState("");
    const [description, setDescription] = useState("");
    const [shiftsAvailable, setShiftsAvailable] = useState([]);
    const [shiftsTaken, setShiftsTaken] = useState([]);

    const { userData } = useContext(AuthenticationContext);

    const setCatHandlerOnChange = (event) => {
        setCat(event.target.value);
    };

    const setDescriptionHandlerOnChange = (event) => {
        setDescription(event.target.value);
    };

    const handleClose = () => setShowModal({ ...showModal, current: null }); // Cierra el modal actual

    const handleShow = (shiftId) => setShowModal({ ...showModal, current: shiftId }); // Muestra el modal específico
////////////////////INTENTE HACER UN EFFECT PERO NO FUNCIONO, EL PROBLEMA ES EL USE STATE QUE SE QUEDA ATRASADO Y NO CARGA EL QUE ES SINO QUE CARGA UNO VIEJO////////////////
    useEffect(() => {
        if (showModal.current !== null) {
          const saveShiftData = async () => {
            const modifiedShift = {
              ...shift,
              status: true,
              shiftTakenBy: userData.name,
              clienCat: cat,
              description: description,
            };
    
            try {
              const response = await fetch(`http://localhost:8000/shifts/${shift.id}`, {
                method: "PUT",
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(modifiedShift),
              });
    
              if (response.ok) {
                console.log("¡Las cosas salieron bien!");
                handleClose();
              } else {
                throw new Error('¡Las cosas salieron mal!');
              }
            } catch (error) {
              console.log(error);
            }
          };
    
          saveShiftData();
        }
      }, [showModal.current, cat, description]);
////////////////////////////////////////////////////////////////////////////
    useEffect(() => {
        const shiftsAvailableData = userData.userType === "sitter" ?
            shifts.filter(shift => shift.email === userData.email && shift.status === false).map((shift, index) => (
                <tr key={shift.id}>
                    <th scope="row">{index}</th>
                    <td></td>
                    <DateFixed date={shift.date} />
                    <Button onClick={async () => {
                        await fetch(`http://localhost:8000/shifts/${shift.id}`, {
                            method: "DELETE",
                            headers: {
                                "content-type": "application/json",
                            },
                        })
                            .then((response) => {
                                if (response.ok) return response.json();
                                else {
                                    throw new Error("The response has some errors!");
                                }
                            })
                            .catch((error) => {
                                console.log(error);
                            });

                        await fetch("http://localhost:8000/shifts", {
                            headers: {
                                accept: "application/json",
                            },
                        })
                            .then((response) => response.json())
                            .then((shiftData) => {
                                const shiftMapped = shiftData.map((shift) => ({
                                    ...shift,
                                    date: new Date(shift.date),
                                }));
                                setShiftHandler(shiftMapped);
                            })
                            .catch((error) => console.log(error));
                    }}>Cancelar</Button>
                </tr>
            )) :
            shifts.map((shift, index) => (
                <tr key={shift.id}>
                    <th scope="row">{index}</th>
                    <td></td>
                    <DateFixed date={shift.date} />
                    <Button variant="success" onClick={() => handleShow(shift.id)}>
                        Reservar turno
                    </Button>

                    <Modal show={showModal.current === shift.id} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Datos</Modal.Title>
                        </Modal.Header>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Nombre de michi/s</Form.Label>
                                <Form.Control type="email" placeholder="" onChange={setCatHandlerOnChange} />
                            </Form.Group>

                            <Form.Group className="mb-4 f" controlId="formBasicPassword">
                                <Form.Label>Descripcion</Form.Label>
                                <Form.Control type="text" placeholder="Descripcion" onChange={setDescriptionHandlerOnChange} />
                                <Form.Text className="text-muted">
                                    Comida preferida, juguete preferido, caricia preferida, etc.
                                </Form.Text>
                            </Form.Group>
                        </Form>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cerrar
                            </Button>
                            <Button variant="primary" onClick={async () => {
  const modifiedShift = {
    ...shift,
    status: true,
    shiftTakenBy: userData.name,
    clienCat: cat,
    description: description,
  };

  try {
    const response = await fetch(`http://localhost:8000/shifts/${shift.id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(modifiedShift),
    });

    if (response.ok) {
      console.log("holi, las cosas salieron bien");
    } else {
      throw new Error('holi las cosas salieron mal.');
    }
  } catch (error) {
    console.log(error);
  }

  handleClose();
}}>
  Guardar Datos
</Button>
                        </Modal.Footer>
                    </Modal>
                </tr>
            ));

        setShiftsAvailable(shiftsAvailableData);

        const shiftsTakenData = shifts.filter(shift => shift.email === userData.email && shift.status === true).map((shift, index) => (
            <tr key={shift.id}>
                <th scope="row">{index}</th>
                <td>{shift.name}</td>
                <td>{shift.shiftTakenBy}</td>
                <td>Una Direccion</td>
                <td>{shift.clienCat}</td>
                <DateFixed date={shift.date} />
                <Button onClick={async () => {
                    await fetch(`http://localhost:8000/shifts/${shift.id}`, {
                        method: "DELETE",
                        headers: {
                            "content-type": "application/json",
                        },
                    })
                        .then((response) => {
                            if (response.ok) return response.json();
                            else {
                                throw new Error("The response has some errors!");
                            }
                        })
                        .catch((error) => {
                            console.log(error);
                        });

                    await fetch("http://localhost:8000/shifts", {
                        headers: {
                            accept: "application/json",
                        },
                    })
                        .then((response) => response.json())
                        .then((shiftData) => {
                            const shiftMapped = shiftData.map((shift) => ({
                                ...shift,
                                date: new Date(shift.date),
                            }))
                            setShiftHandler(shiftMapped);
                        })
                        .catch((error) => console.log(error))
                }}>Cancelar</Button>
            </tr>
        ));

        setShiftsTaken(shiftsTakenData);

    }, [shifts, showModal, setShiftHandler, userData.name]);

    return (
        <div className="m-5">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={2}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">{userData.userType === "sitter" ? "Tu disponibilidad" : "Turnos disponibles"}</Nav.Link>
                            </Nav.Item>
                            {userData.userType === "sitter" && <Nav.Item>
                                <Nav.Link eventKey="second">Turnos reservados</Nav.Link>
                            </Nav.Item>}
                            {userData.userType !== "sitter" && userData.userType !== "client" && <Nav.Item>
                                <Nav.Link eventKey="tertiary" disabled>
                                    Gestion de usuarios
                                </Nav.Link>
                            </Nav.Item>}
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <table className="table table-hover">
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
                                        {shiftsAvailable}
                                    </tbody>
                                </table>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <table className="table table-hover">
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
                                        {shiftsTaken.length === 0 ? "Todavia nadie reservo un turno, carga tu disponibilidad!!" : shiftsTaken}
                                    </tbody>
                                </table>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
}

export default Shift;
