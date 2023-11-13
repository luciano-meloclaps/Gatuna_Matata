import React from 'react'
import Toast from 'react-bootstrap/Toast';
import { useContext } from 'react';

import Button from 'react-bootstrap/esm/Button';

import DateFixed from '../dateFixed/DateFixed';
import { AuthenticationContext } from '../services/authentication/authentication.context';


const Shift = ({ shifts, setShiftHandler }) => {

    const { userData } = useContext(AuthenticationContext)

    const shiftsArray = userData.userType === "sitter" ? shifts.filter(shift => shift.email === userData.email).map(shift => {
        return (
            <Toast key={shift.id} onClose={async () => {
                await fetch(`http://localhost:8000/books/${shift.id}`, {
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

                await fetch("http://localhost:8000/books", {
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
            }}>
                <Toast.Header>
                    <strong className="me-auto">Fecha {shift.status && "este turno esta tomado" }</strong>
                </Toast.Header>
                <Toast.Body>
                    <DateFixed date={shift.date} />
                </Toast.Body>
            </Toast>
        )
    }) : shifts.map(shift => {
        return (
            <Toast key={shift.id}>
                <Toast.Header>
                    <strong className="me-auto">Niñera: {shift.name}</strong>
                </Toast.Header>
                <Toast.Body>
                    <DateFixed date={shift.date} />
                </Toast.Body>
                <Button variant="secondary" onClick={async () => {
                    const modifiedShift = {
                        ...shift,
                        status: true,
                        shiftTakenBy: userData.name,
                    }

                    try {
                        const response = await fetch(`http://localhost:8000/books/${shift.id}`, {
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
                }}>Tomar turno</Button>
            </Toast>
        )
    })

    return (
        <div>{shiftsArray}</div>
    )
}

export default Shift