
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

const Shift = ({ shifts, setShiftHandler, usersInfo, setUsersInfoHandler }) => {

    const [showModal, setShowModal] = useState({}); // Objeto para manejar el estado de cada modal individualmente
    const [usersInformation, setUsersInformation] = useState([])
    const [cat, setCat] = useState("");
    const [description, setDescription] = useState("");
    const [addres, setAddres] = useState("");
    const [shiftsAvailable, setShiftsAvailable] = useState([]);
    const [shiftsTaken, setShiftsTaken] = useState([]);

    const { userData } = useContext(AuthenticationContext);

    const setCatHandlerOnChange = (event) => {
        setCat(event.target.value);
    };

    const setDescriptionHandlerOnChange = (event) => {
        setDescription(event.target.value);
    };

    const setAddresHandlerOnChange = (event) => {
        setAddres(event.target.value);
    }

    const handleClose = () => setShowModal({ ...showModal, current: null }); // Cierra el modal actual

    const handleShow = (shiftId) => setShowModal({ ...showModal, current: shiftId }); // Muestra el modal específico

    useEffect(() => {

        if (userData.userType === "SYS_Admin") {
            const shiftsAvailableData = shifts.filter(shift => shift.status === false).map((shift, index) => (
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
                                }));
                                setShiftHandler(shiftMapped);
                            })
                            .catch((error) => console.log(error));
                    }}>Cancelar</Button>
                </tr>
            ))
            setShiftsAvailable(shiftsAvailableData);
        } else {
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
                                    }));
                                    setShiftHandler(shiftMapped);
                                })
                                .catch((error) => console.log(error));
                        }}>Cancelar</Button>
                    </tr>
                )) :
                shifts.filter(shift => shift.status === false).map((shift, index) => (
                    <tr key={shift.id}>
                        <th scope="row">{index}</th>
                        <td></td>
                        <DateFixed date={shift.date} />
                        <Button variant="success" onClick={() => handleShow(shift.id)}>
                            Reservar turno
                        </Button>

                        <Modal show={showModal.current === shift.id} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Reserva para <DateFixed date={shift.date} /></Modal.Title>
                            </Modal.Header>
                            <Form className='m-4'>
                                <Form.Group className="mb-3" controlId="formBasicCatName">
                                    <Form.Label>Nombre de michi/s</Form.Label>
                                    <Form.Control type="text" placeholder="" onChange={setCatHandlerOnChange} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicAddres">
                                    <Form.Label>Tu dirección</Form.Label>
                                    <Form.Control type="text" placeholder="" onChange={setAddresHandlerOnChange} />
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
                                        clientAddres: addres,
                                        clienCat: cat,
                                        description: description,
                                    };

                                    try {
                                        await fetch(`http://localhost:8000/shifts/${shift.id}`, {
                                            method: "PUT",
                                            headers: {
                                                'Content-Type': 'application/json',
                                            },
                                            body: JSON.stringify(modifiedShift),
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
        }

        /////////////////////////////////////////////////////////////

        if (userData.userType === "SYS_Admin") {
            const shiftsTakenData = shifts.filter(shift => shift.status === true).map((shift, index) => (
                <tr key={shift.id}>
                    <th scope="row">{index}</th>
                    <td>{shift.name}</td>
                    <td>{shift.clientAddres}</td>
                    <td>{shift.shiftTakenBy}</td>
                    <td>{shift.description}</td>
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
            ))

            setShiftsTaken(shiftsTakenData);
        }
        else {
            const shiftsTakenData = userData.userType === "sitter" ? shifts.filter(shift => shift.email === userData.email && shift.status === true).map((shift, index) => (
                <tr key={shift.id}>
                    <th scope="row">{index}</th>
                    <td>{shift.shiftTakenBy}</td>
                    <td>{shift.clientAddres}</td>
                    <td>{shift.clienCat}</td>
                    <td>{shift.description}</td>
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
            )) : shifts.filter(shift => shift.shiftTakenBy === userData.name && shift.status === true).map((shift, index) => (
                <tr key={shift.id}>
                    <th scope="row">{index}</th>
                    <td>{shift.name}</td>
                    <td>{shift.clientAddres}</td>
                    <td>{shift.clienCat}</td>
                    <td>{shift.description}</td>
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
            ))

            setShiftsTaken(shiftsTakenData);
        }



        /////////////////////////////////////////////////////////////////////

        const usersMapped = usersInfo.map((user, index) => <tr key={user.id}>
            <th scope="row">{index}</th>
            <td>{user.name}</td>
            <td>{user.userType}</td>
            <td>{user.email}</td>
            <Button onClick={async () => {
                await fetch(`http://localhost:8000/users/${user.id}`, {
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

                await fetch("http://localhost:8000/users", {
                    headers: {
                        accept: "application/json",
                    },
                })
                    .then((response) => response.json())
                    .then((data) => setUsersInfoHandler(data))
                    .catch((error) => console.log(error))
            }}>Eliminar usuario</Button>
        </tr>)

        setUsersInformation(usersMapped)

    }, [shifts, showModal, userData.name, cat, description, usersInfo]);


    return (
        <div className="m-5 vh-100">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={2}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">{userData.userType === "sitter" ? "Tu disponibilidad" : "Turnos disponibles"}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Turnos reservados</Nav.Link>
                            </Nav.Item>
                            {userData.userType !== "sitter" && userData.userType !== "client" && <Nav.Item>
                                <Nav.Link eventKey="tertiary">
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
                                                {userData.userType === "sitter" ? "Nombre del cliente" : "Nombre niñera"}
                                            </th>
                                            <th className="text-danger" scope="col">
                                                Direccion
                                            </th>
                                            <th className="text-danger" scope="col">
                                                {userData.userType === "sitter" ? "Nombre del gato" : "Nombre del cliente"}
                                            </th>
                                            <th className="text-danger" scope="col">
                                                Descripción
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
                            <Tab.Pane eventKey="tertiary">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th className="text-danger" scope="col">
                                                #
                                            </th>
                                            <th className="text-danger" scope="col">
                                                Nombre de usuario
                                            </th>
                                            <th className="text-danger" scope="col">
                                                Tipo de usuario
                                            </th>
                                            <th className="text-danger" scope="col">
                                                Email
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {usersInformation}
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