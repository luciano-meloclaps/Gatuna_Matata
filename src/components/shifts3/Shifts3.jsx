import React, { useState } from 'react'
import Toast from 'react-bootstrap/Toast';
import { useContext } from 'react';


import Button from 'react-bootstrap/esm/Button';

import DateFixed from '../dateFixed/DateFixed';
import { AuthenticationContext } from '../services/authentication/authentication.context';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


const Shift = ({ shifts, setShiftHandler }) => {

    const { userData } = useContext(AuthenticationContext) // Una variaable que trae tidis kis datis
    //////////////////////////////////////////////////
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    ///////////////////////////////////////////////////  

    const [cat, setCat] = useState("")
    const [description, setDescription] = useState("")

    const setCatHandlerOnChange = (event) => {
        setCat(event.target.value)
        console.log(cat)
    }

    const setDescriptionHandlerOnChange = (event) => {
        setDescription(event.target.value)
    }

    const shiftsArray = userData.userType === "sitter" ? shifts.filter(shift => shift.email === userData.email).map(shift => {
        return (
            <Toast key={shift.id} onClose={async () => {
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
            }}>
                <Toast.Header>
                    <strong className="me-auto">Fecha {shift.status && "este turno esta tomado"}</strong>
                </Toast.Header>
                <Toast.Body>
                    <DateFixed date={shift.date} />
                </Toast.Body>
            </Toast>
        )
    }) : shifts?.map(shift => {    // Aca esta el cliente
        return (
            <Toast key={shift.id}>
                <Toast.Header>
                    <strong className="me-auto">Niñera: {shift.name}</strong>
                </Toast.Header>
                <Toast.Body>
                    <DateFixed date={shift.date} />
                </Toast.Body>
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
                                userCat: cat,
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
            </Toast>
        )
    })

    return (
        <div>{shiftsArray}</div>
    )
}

export default Shift