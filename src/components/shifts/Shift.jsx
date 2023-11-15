import React, { useState } from 'react'
import Toast from 'react-bootstrap/Toast';
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
    const [show, setShow] = useState(false);
    const [cat, setCat] = useState("")
    const [description, setDescription] = useState("")

    const { userData } = useContext(AuthenticationContext) // Una variaable que trae tidis kis datis

    const setCatHandlerOnChange = (event) => {
        setCat(event.target.value)
        console.log(cat)
    }

    const setDescriptionHandlerOnChange = (event) => {
        setDescription(event.target.value)
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    ////////////////////

    const shiftsAvailable = userData.userType === "sitter" ? shifts.filter(shift => shift.email === userData.email).map((shift, index) => {
        return (
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
                        })

                    ////////////////////////////////////////
                    //Get
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
                            setShiftHandler(shiftMapped); //Esta en el dashboard y cambia el valor a shift
                        })
                        .catch((error) => console.log(error))
                }}>Cancelar</Button>
            </tr>


        )
    }) : shifts.map((shift, index) => {
        return (<tr>
            <DateFixed date={shift.date} />
            <th scope="row">{index}</th>
            <td></td>
            <DateFixed date={shift.date} />
            <Button variant="success" onClick={handleShow}>
                Reservar turno
            </Button>

            <Modal show={show} onHide={handleClose}>
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
                            //EWJEMPLO nombrwegato:nombreGato  que adquiri con un estado
                            //Hay que setear un estado que escuche el onclick
                        }
                        try {
                            const response = await fetch(`http://localhost:8000/shifts/${shift.id}`, {
                                method: "PUT",
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(modifiedShift),
                                //aCA ESTAN SALIENDO LAS COsAs BIEN
                            });
                            if (response.ok) {
                                console.log("holi, las cosas salieron bien");
                            } else {
                                throw new Error('holi las cosas salieron mal.');
                            }
                        } catch (error) {
                            console.log(error);
                        }
                    }}>
                        Guardar Datos
                    </Button>
                </Modal.Footer>
            </Modal>
        </tr>)
    })

    return (
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
                                {/* TABLA TOMADOS*/}
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
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}

export default Shift